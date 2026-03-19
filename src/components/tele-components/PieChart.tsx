import React from 'react';
import { getColor } from './utils';
import type { TeleComponentProps } from './types';

interface Slice {
  label?: string;
  name?: string;
  value?: number;
  percent?: number;
  share?: number;
  color?: string;
  change?: string;
}

interface PieChartData {
  title?: string;
  slices: Slice[];
  unit?: string;
}

// Vibrant, distinct palette
const PALETTE = [
  '#00d4f5', // cyan
  '#a78bfa', // purple
  '#f59e0b', // amber
  '#10b981', // emerald
  '#f43f5e', // rose
  '#3b82f6', // blue
  '#fb923c', // orange
  '#84cc16', // lime
];

function sliceToPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startAngle));
  const y1 = cy + r * Math.sin(toRad(startAngle));
  const x2 = cx + r * Math.cos(toRad(endAngle));
  const y2 = cy + r * Math.sin(toRad(endAngle));
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

export default function PieChart({ data }: TeleComponentProps) {
  const raw = data as PieChartData;
  const title = raw.title;
  const unit = raw.unit || '%';
  const rawSlices: Slice[] = raw.slices || [];

  // Normalize values to percentages
  const vals = rawSlices.map(s => s.value ?? s.percent ?? s.share ?? 0);
  const total = vals.reduce((a, b) => a + b, 0) || 1;
  const normalized = vals.map(v => (v / total) * 100);

  const cx = 60, cy = 60, r = 55;
  let angle = -90; // start from top

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {title && (
        <h3
          className="font-data text-body uppercase tracking-[0.12em] mb-2 shrink-0"
          style={{ color: getColor(90) }}
        >
          {title}
        </h3>
      )}

      <div className="flex-1 flex items-center min-h-0 gap-3 overflow-hidden">
        {/* SVG Pie */}
        <svg viewBox="0 0 120 120" className="h-full max-h-[140px] w-auto shrink-0">
          {normalized.map((pct, i) => {
            if (pct <= 0) return null;
            const sweep = (pct / 100) * 360;
            const startAngle = angle;
            angle += sweep;
            const endAngle = angle;
            const color = rawSlices[i].color || PALETTE[i % PALETTE.length];
            return (
              <path
                key={i}
                d={sliceToPath(cx, cy, r, startAngle, endAngle)}
                fill={color}
                stroke="rgba(0,0,0,0.25)"
                strokeWidth={0.8}
                style={{ transition: 'opacity 0.3s' }}
              />
            );
          })}
          {/* Subtle inner shadow */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth={1} />
        </svg>

        {/* Legend */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-0 overflow-y-auto scrollbar-thin">
          {rawSlices.map((s, i) => {
            const color = s.color || PALETTE[i % PALETTE.length];
            const pct = normalized[i].toFixed(1);
            return (
              <div key={i} className="flex items-center gap-1.5 min-w-0">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span
                  className="font-data text-body uppercase tracking-wider truncate"
                  style={{ fontSize: '10px', color: getColor(85) }}
                >
                  {s.label || s.name}
                </span>
                <span
                  className="font-data font-bold ml-auto shrink-0"
                  style={{ fontSize: '10px', color: getColor(90) }}
                >
                  {pct}{unit === '%' ? '%' : ` ${unit}`}
                </span>
                {s.change && (
                  <span
                    className="font-data font-bold shrink-0"
                    style={{
                      fontSize: '10px',
                      color: s.change.startsWith('+') ? '#22c55e' : '#ff4040',
                    }}
                  >
                    {s.change}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
