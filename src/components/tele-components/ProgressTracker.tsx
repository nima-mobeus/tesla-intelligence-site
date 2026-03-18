'use client';

import { TeleComponentProps } from './types';

/**
 * ProgressTracker — Visual progress bar with step labels.
 *
 * Props (via data):
 *   title?: string
 *   currentStep: number           — 1-based index of current step
 *   steps: Array<string>          — Step labels (e.g. ["Cart", "Shipping", "Payment", "Done"])
 *   showPercent?: boolean          — Show percentage (default: false)
 */
export default function ProgressTracker({ data, accentColor = '#00d4f5' }: TeleComponentProps) {
  const title = data.title as string | undefined;
  const steps: string[] = Array.isArray(data.steps) ? data.steps : [];
  const currentStep = typeof data.currentStep === 'number' ? data.currentStep : 1;
  const showPercent = data.showPercent === true;
  const total = steps.length || 1;
  const pct = Math.round((currentStep / total) * 100);

  if (steps.length === 0) return null;

  return (
    <div className="w-full space-y-3">
      {title && <h3 className="text-body font-semibold">{title}</h3>}
      <div className="flex items-center gap-2">
        <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: accentColor }}
          />
        </div>
        {showPercent && <span className="text-body font-medium text-muted-foreground">{pct}%</span>}
      </div>
      <div className="flex justify-between text-caption">
        {steps.map((step, i) => {
          const done = i + 1 <= currentStep;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="flex h-6 w-6 items-center justify-center rounded-full text-micro font-bold text-white"
                style={{ backgroundColor: done ? accentColor : '#d1d5db' }}
              >
                {done ? '✓' : i + 1}
              </div>
              <span className={done ? 'font-medium' : 'text-muted-foreground'}>{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
