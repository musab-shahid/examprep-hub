#!/usr/bin/env node
/**
 * Phase E CLI — draft prompts + validate draft JSON. Does not write into src/data.
 *
 * Usage:
 *   node scripts/generate-variant-drafts.mjs prompt --stdin < source-question.json
 *   node scripts/generate-variant-drafts.mjs validate path/to/draft.json
 *   node scripts/generate-variant-drafts.mjs checklist
 *
 * Optional: OPENAI_API_KEY or ANTHROPIC_API_KEY to request a model draft
 *   node scripts/generate-variant-drafts.mjs generate --stdin < source.json > draft.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Minimal inline copies so the script runs without tsx path aliases
function buildVariantSystemPrompt() {
  return `You are an item-writing assistant for Pakistani civil service exams (FPSC CSS / HAT).
Your job is to draft ALTERNATE multiple-choice stems that test the SAME underlying skill or concept as a given source question.

Rules:
- Keep the same cognitive target.
- Change surface form: scenario, numbers, names, wording, or angle.
- Provide exactly 4 options unless true/false (2).
- One clearly best answer; distractors are plausible misconceptions.
- Do NOT copy the source with trivial edits.
- Explanations teach the rule.
- Output valid JSON only.`;
}

function buildVariantUserPrompt(source, count = 2) {
  const group = `${String(source.id).replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}-skill`;
  return `Draft ${count} alternate MCQ variants for this source item.

SOURCE_ID: ${source.id}
TOPIC_ID: ${source.topicId}
SECTION_ID: ${source.sectionId}
DIFFICULTY: ${source.difficulty}
TYPE: ${source.type}
STEM: ${source.question}
OPTIONS: ${JSON.stringify(source.options)}
CORRECT_ANSWER_INDEX: ${JSON.stringify(source.correctAnswer)}
EXPLANATION: ${source.explanation}

VARIANT_GROUP_ID: ${group}

Return JSON only:
{
  "variantGroupId": "${group}",
  "variants": [
    {
      "id": "${source.id}-v2",
      "question": "...",
      "options": ["...", "...", "...", "..."],
      "correctAnswer": 0,
      "explanation": "...",
      "difficulty": "${source.difficulty}",
      "type": "${source.type}"
    }
  ]
}`;
}

const CHECKLIST = [
  'Same skill/concept as the source',
  'Surface form actually changed',
  'One best answer; realistic distractors',
  'Explanation teaches the rule',
  'New id does not collide with the bank',
  'variantGroupId on source + variants',
  'Difficulty appropriate',
  'Facts curriculum-safe',
];

function readJsonArg(argv) {
  const stdinIdx = argv.indexOf('--stdin');
  if (stdinIdx >= 0) {
    return JSON.parse(fs.readFileSync(0, 'utf8'));
  }
  const file = argv.find((a, i) => i > 0 && !a.startsWith('--') && a.endsWith('.json'));
  if (file) return JSON.parse(fs.readFileSync(file, 'utf8'));
  throw new Error('Provide --stdin or a .json path');
}

function validateDraft(draft) {
  const issues = [];
  if (!draft.baseQuestionId) issues.push('error: baseQuestionId required');
  if (!draft.variantGroupId) issues.push('error: variantGroupId required');
  if (!Array.isArray(draft.variants) || !draft.variants.length) {
    issues.push('error: variants[] required');
    return issues;
  }
  for (const [i, v] of draft.variants.entries()) {
    if (!v.id) issues.push(`error: variants[${i}].id required`);
    if (!v.question || v.question.length < 12) issues.push(`error: variants[${i}].question too short`);
    if (!Array.isArray(v.options) || v.options.length < 2) {
      issues.push(`error: variants[${i}].options need length >= 2`);
    }
  }
  if (draft.status === 'approved' && issues.some((x) => x.startsWith('error'))) {
    issues.push('error: cannot approve while errors remain');
  }
  return issues;
}

async function callOpenAI(system, user) {
  const key = process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY;
  if (!key) throw new Error('No OPENAI_API_KEY');
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.VARIANT_DRAFT_MODEL || 'gpt-4.1-mini',
      temperature: 0.7,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      response_format: { type: 'json_object' },
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? '';
}

const cmd = process.argv[2] || 'help';

if (cmd === 'checklist') {
  console.log('Variant review checklist:\n');
  CHECKLIST.forEach((c, i) => console.log(`  ${i + 1}. ${c}`));
  process.exit(0);
}

if (cmd === 'prompt') {
  const source = readJsonArg(process.argv.slice(2));
  console.log('=== SYSTEM ===\n');
  console.log(buildVariantSystemPrompt());
  console.log('\n=== USER ===\n');
  console.log(buildVariantUserPrompt(source));
  console.log('\n# Paste into your model, then save JSON as content-drafts/<id>.json');
  console.log('# Run: node scripts/generate-variant-drafts.mjs validate content-drafts/<id>.json');
  process.exit(0);
}

if (cmd === 'validate') {
  const file = process.argv[3];
  if (!file) {
    console.error('Usage: validate <draft.json>');
    process.exit(1);
  }
  const draft = JSON.parse(fs.readFileSync(file, 'utf8'));
  const issues = validateDraft(draft);
  if (!issues.length) {
    console.log('OK — no structural issues. Still complete human checklist before merge.');
    process.exit(0);
  }
  for (const i of issues) console.log(i);
  process.exit(issues.some((x) => x.startsWith('error')) ? 1 : 0);
}

if (cmd === 'generate') {
  const source = readJsonArg(process.argv.slice(2));
  const system = buildVariantSystemPrompt();
  const user = buildVariantUserPrompt(source);
  try {
    const raw = await callOpenAI(system, user);
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      const m = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
      parsed = JSON.parse(m ? m[1] : raw);
    }
    const draft = {
      status: 'draft',
      baseQuestionId: source.id,
      variantGroupId: parsed.variantGroupId || `${source.id}-skill`,
      topicId: source.topicId,
      sectionId: source.sectionId,
      sourceCitation: source.sourceCitation,
      createdAt: new Date().toISOString(),
      model: process.env.VARIANT_DRAFT_MODEL || 'gpt-4.1-mini',
      baseStem: source.question,
      variants: parsed.variants || [],
      authorNotes: 'AI draft — requires human review before bank merge',
    };
    console.log(JSON.stringify(draft, null, 2));
    console.error('# status=draft only. validate + checklist before merging into src/data.');
  } catch (e) {
    console.error(String(e.message || e));
    console.error('# Falling back: run "prompt" and paste into a chat model manually.');
    process.exit(1);
  }
  process.exit(0);
}

console.log(`Phase E — variant drafts (no auto-publish)

Commands:
  prompt     Print system+user prompts for a source question JSON
  generate   Call OpenAI if OPENAI_API_KEY set; print draft JSON
  validate   Structural check of a draft file
  checklist  Print human review checklist

Examples:
  node scripts/generate-variant-drafts.mjs prompt --stdin < source.json
  node scripts/generate-variant-drafts.mjs validate content-drafts/my-draft.json
`);
