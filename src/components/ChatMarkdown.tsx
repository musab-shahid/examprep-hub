// Lightweight markdown renderer for AI chat messages.
// Supports: headings, bold, italic, inline code, code blocks,
// unordered/ordered lists, links, blockquotes, and paragraphs.
// No external dependencies — avoids dangerouslySetInnerHTML by
// parsing into React elements directly.

import { type ReactNode } from 'react';

interface MarkdownProps {
  text: string;
  className?: string;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  const patterns: { regex: RegExp; render: (match: RegExpMatchArray) => ReactNode }[] = [
    {
      regex: /\*\*(.+?)\*\*/,
      render: (m) => <strong key={`${keyPrefix}-b-${keyIdx}`}>{renderInline(m[1], `${keyPrefix}-b${keyIdx}`)}</strong>,
    },
    {
      regex: /__(.+?)__/,
      render: (m) => <strong key={`${keyPrefix}-b-${keyIdx}`}>{renderInline(m[1], `${keyPrefix}-b${keyIdx}`)}</strong>,
    },
    {
      regex: /(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/,
      render: (m) => <em key={`${keyPrefix}-i-${keyIdx}`}>{renderInline(m[1], `${keyPrefix}-i${keyIdx}`)}</em>,
    },
    {
      regex: /`([^`]+?)`/,
      render: (m) => (
        <code key={`${keyPrefix}-c-${keyIdx}`} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 text-[0.85em] font-mono">
          {m[1]}
        </code>
      ),
    },
    {
      regex: /\[([^\]]+?)\]\(([^)]+?)\)/,
      render: (m) => (
        <a
          key={`${keyPrefix}-a-${keyIdx}`}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
        >
          {m[1]}
        </a>
      ),
    },
  ];

  while (remaining.length > 0) {
    let earliestIdx = -1;
    let earliestMatch: RegExpMatchArray | null = null;
    let earliestPattern: typeof patterns[0] | null = null;

    for (const pattern of patterns) {
      const match = remaining.match(pattern.regex);
      if (match && match.index !== undefined) {
        if (earliestIdx === -1 || match.index < earliestIdx) {
          earliestIdx = match.index;
          earliestMatch = match;
          earliestPattern = pattern;
        }
      }
    }

    if (earliestMatch && earliestPattern && earliestIdx >= 0) {
      if (earliestIdx > 0) {
        nodes.push(remaining.slice(0, earliestIdx));
      }
      nodes.push(earliestPattern.render(earliestMatch));
      remaining = remaining.slice(earliestIdx + earliestMatch[0].length);
      keyIdx++;
    } else {
      nodes.push(remaining);
      break;
    }
  }

  return nodes;
}

interface Block {
  type: 'heading' | 'paragraph' | 'ul' | 'ol' | 'code' | 'blockquote' | 'hr';
  level?: number;
  items?: string[];
  text?: string;
  lang?: string;
}

function parseBlocks(text: string): Block[] {
  const lines = text.split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip blank lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Horizontal rule
    if (/^---+\s*$/.test(line) || /^\*\*\*+\s*$/.test(line)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({ type: 'heading', level: headingMatch[1].length, text: headingMatch[2] });
      i++;
      continue;
    }

    // Code block (fenced)
    if (/^```/.test(line.trim())) {
      const lang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      blocks.push({ type: 'code', lang, text: codeLines.join('\n') });
      continue;
    }

    // Blockquote
    if (/^>\s/.test(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && /^>\s/.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', text: quoteLines.join('\n') });
      continue;
    }

    // Unordered list
    if (/^[-*+]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*+]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // Paragraph (gather consecutive non-blank, non-special lines)
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^#{1,4}\s/.test(lines[i]) &&
      !/^[-*+]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !/^```/.test(lines[i].trim()) &&
      !/^>\s/.test(lines[i]) &&
      !/^---+\s*$/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ type: 'paragraph', text: paraLines.join(' ') });
  }

  return blocks;
}

function renderBlock(block: Block, idx: number): ReactNode {
  const key = `block-${idx}`;

  switch (block.type) {
    case 'heading': {
      const level = block.level ?? 2;
      const sizes: Record<number, string> = {
        1: 'text-base font-bold text-slate-900 mt-3 mb-1.5',
        2: 'text-sm font-bold text-slate-900 mt-2.5 mb-1',
        3: 'text-sm font-semibold text-slate-800 mt-2 mb-1',
        4: 'text-xs font-semibold text-slate-700 mt-1.5 mb-0.5',
      };
      return (
        <div key={key} className={sizes[level] || sizes[4]}>
          {renderInline(block.text ?? '', key)}
        </div>
      );
    }

    case 'paragraph':
      return (
        <p key={key} className="leading-relaxed">
          {renderInline(block.text ?? '', key)}
        </p>
      );

    case 'ul':
      return (
        <ul key={key} className="list-disc pl-5 space-y-1 my-1">
          {block.items?.map((item, i) => (
            <li key={`${key}-li-${i}`}>{renderInline(item, `${key}-${i}`)}</li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol key={key} className="list-decimal pl-5 space-y-1 my-1">
          {block.items?.map((item, i) => (
            <li key={`${key}-li-${i}`}>{renderInline(item, `${key}-${i}`)}</li>
          ))}
        </ol>
      );

    case 'code':
      return (
        <pre key={key} className="my-2 p-3 rounded-lg bg-slate-900 text-slate-100 text-xs font-mono overflow-x-auto">
          <code>{block.text}</code>
        </pre>
      );

    case 'blockquote':
      return (
        <blockquote key={key} className="my-2 pl-3 border-l-2 border-sky-300 text-slate-600 italic">
          {renderInline(block.text ?? '', key)}
        </blockquote>
      );

    case 'hr':
      return <hr key={key} className="my-3 border-slate-200" />;

    default:
      return null;
  }
}

export function ChatMarkdown({ text, className }: MarkdownProps) {
  const blocks = parseBlocks(text);
  return (
    <div className={`space-y-1.5 ${className ?? ''}`}>
      {blocks.map((block, idx) => renderBlock(block, idx))}
    </div>
  );
}
