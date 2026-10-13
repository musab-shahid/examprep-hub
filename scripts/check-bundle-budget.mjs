#!/usr/bin/env node
/**
 * Post-build bundle budget (Wave 4).
 * Fails CI if the largest hashed JS chunk exceeds BUDGET_BYTES (default 900 KB).
 * Informational table always printed.
 */
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist', 'assets');
const BUDGET = Number(process.env.BUNDLE_BUDGET_BYTES || 900 * 1024);

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (name.endsWith('.js')) acc.push({ name, size: st.size, path: p });
  }
  return acc;
}

try {
  const files = walk(DIST).sort((a, b) => b.size - a.size);
  if (files.length === 0) {
    console.error('No JS assets under dist/assets — run npm run build first.');
    process.exit(1);
  }
  console.log('Bundle budget report (JS under dist/assets)');
  console.log('─'.repeat(56));
  for (const f of files.slice(0, 12)) {
    const kb = (f.size / 1024).toFixed(1);
    console.log(`${kb.padStart(8)} KB  ${f.name}`);
  }
  const largest = files[0];
  console.log('─'.repeat(56));
  console.log(
    `Largest: ${largest.name} (${(largest.size / 1024).toFixed(1)} KB) · budget ${(BUDGET / 1024).toFixed(0)} KB`,
  );
  if (largest.size > BUDGET) {
    console.error(
      `FAIL: largest JS chunk exceeds budget. Raise BUNDLE_BUDGET_BYTES only with intent.`,
    );
    process.exit(1);
  }
  console.log('OK: within budget');
} catch (err) {
  console.error(err);
  process.exit(1);
}
