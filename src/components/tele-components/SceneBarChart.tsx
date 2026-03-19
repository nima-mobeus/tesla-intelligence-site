import React from 'react';
import { clampList, getColor } from './utils';
import { OverflowPill } from './OverflowPill';
import type { TeleComponentProps } from './types';

interface Bar {
    label: string;
    value: number;
    previousValue?: number;
}

interface SceneBarChartData {
    title?: string;
    bars: Bar[];
    unit?: string;
}

export default function SceneBarChart({ data, accentColor, onAction }: TeleComponentProps) {
    const { title, bars = [], unit } = data as SceneBarChartData;
    const { visible, overflow } = clampList(bars, 6);
    const allBars = overflow > 0 ? bars : visible;  // show all when scrollable
    const max = Math.max(...bars.map(b => b.value), 1);

    const fmt = (n: number) => {
        const v = n ?? 0;
        if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
        if (v >= 1_000) return `${(v / 1_000).toFixed(0)}K`;
        return v.toLocaleString();
    };

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {title && (
                <h3 className="font-data text-body uppercase tracking-[0.12em] mb-2" style={{ color: `${getColor(90)}` }}>
                    {title}
                </h3>
            )}
            <div className="relative flex-1 min-h-0">
                <div className="flex flex-col gap-1 h-full overflow-y-auto pr-0.5 scrollbar-thin">
                    {allBars.map((bar, i) => {
                        const pct = (bar.value / max) * 100;
                        const delta = bar.previousValue ? bar.value - bar.previousValue : null;
                        return (
                            <div key={i} className="flex items-center gap-1.5">
                                <span className="font-data text-body w-14 sm:w-16 text-left truncate font-bold" style={{ color: `${getColor(85)}` }}>
                                    {bar.label}
                                </span>
                                <div className="flex-1 h-3 rounded-sm overflow-hidden" style={{ backgroundColor: `${getColor(5)}` }}>
                                    <div
                                        className="h-full rounded-sm transition-all duration-700"
                                        style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${getColor(88)}, ${getColor(56)})` }}
                                    />
                                </div>
                                <span className="font-data text-body font-bold min-w-[36px] sm:min-w-[48px] text-right" style={{ color: `${getColor(90)}` }}>
                                    {fmt(bar.value)}{unit ? ` ${unit}` : ''}
                                </span>
                                {delta !== null && delta !== 0 && (
                                    <span className="font-data text-body font-bold min-w-[32px] sm:min-w-[40px]" style={{ color: delta > 0 ? '#22c55e' : '#ff4040' }}>
                                        {delta > 0 ? '+' : ''}{fmt(delta)}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* Fade mask — hints at scroll when content overflows */}
                {overflow > 0 && (
                    <div
                        className="pointer-events-none absolute bottom-0 left-0 right-0 h-8"
                        style={{ background: 'linear-gradient(to top, var(--theme-card-bg, rgba(0,0,0,0.6)), transparent)' }}
                    />
                )}
            </div>
            <OverflowPill count={overflow} label="more" />
        </div>
    );
}
