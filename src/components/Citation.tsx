import React, { useRef, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { ExternalLink } from 'lucide-react';
import { CITATIONS, type CitationKey } from '@/lib/citations';

type CitationProps = {
  id: CitationKey;
  /**
   * Visible text for the trigger. Defaults to "Author (Year)".
   */
  label?: React.ReactNode;
  /**
   * If true, render only the year inside parentheses (e.g. "(2016)").
   * Useful when the author name is already in the running prose.
   */
  yearOnly?: boolean;
};

const HOVER_OPEN_MS = 120;
const HOVER_CLOSE_MS = 200;

const Citation: React.FC<CitationProps> = ({ id, label, yearOnly }) => {
  const ref = CITATIONS[id];
  const [open, setOpen] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  if (!ref) {
    return <span className="text-red-500">[missing citation: {id}]</span>;
  }

  const isExternal = ref.url.startsWith('http');
  const triggerText =
    label ?? (yearOnly ? `(${ref.year})` : `${shortAuthor(ref.authors)} (${ref.year})`);

  const clearTimers = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleOpen = () => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpen(true), HOVER_OPEN_MS);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpen(false), HOVER_CLOSE_MS);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="inline text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 rounded-sm cursor-help"
          aria-label={`Citation: ${ref.authors} (${ref.year}) — ${ref.title}`}
          onMouseEnter={scheduleOpen}
          onMouseLeave={scheduleClose}
          onFocus={() => {
            clearTimers();
            setOpen(true);
          }}
          onBlur={scheduleClose}
        >
          {triggerText}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          align="center"
          sideOffset={6}
          collisionPadding={12}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onMouseEnter={clearTimers}
          onMouseLeave={scheduleClose}
          className="z-50 w-80 max-w-[calc(100vw-1.5rem)] rounded-lg border border-gray-200 bg-white p-4 shadow-xl text-left outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
            {ref.authors} · {ref.year}
          </p>
          <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">
            {ref.title}
          </p>
          <p className="text-xs italic text-gray-600 mb-2">{ref.publication}</p>
          <p className="text-sm text-gray-700 mb-3">{ref.short}</p>
          <a
            href={ref.url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
            {isExternal ? 'Open source' : 'Open document'}
          </a>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

function shortAuthor(authors: string): string {
  const isMultiAuthor = /&|;|\bet al\b/i.test(authors);
  const surnameMatch = authors.match(/^([^,]+)/);
  const firstChunk = surnameMatch ? surnameMatch[1].trim() : authors.trim();
  if (isMultiAuthor) {
    return `${firstChunk} et al.`;
  }
  return firstChunk;
}

export default Citation;
