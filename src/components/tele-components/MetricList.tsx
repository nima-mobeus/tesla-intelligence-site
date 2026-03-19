import React from 'react';
import { clampList, getColor } from './utils';
import { OverflowPill } from './OverflowPill';
import type { TeleComponentProps } from './types';

const STATUS_DOT: Record<string, string> = {
    good: '#22c55e', bad: '#ff4040', watch: '#b45309',
};

interface MetricItem {
    label: string;
    value: string;
    status?: 'good' | 'bad' | 'watch';
    change?: string;
}

interface MetricListData {
    title?: string;
    items: MetricItem[];
}

export default function MetricList({ data, accentColor, onAction }: TeleComponentProps) {
    const { title, items = [] } = data as MetricListData;
    const { visible, overflow } = clampList(items, 6);
    const allItems = overflow > 0 ? items : visible;  // show all when scrollable
    return (
        <div className="flex flex-col h-full overflow-hidden">
            {title && (
                <h3 className="font-data text-body uppercase tracking-[0.12em] mb-2" className="text-card-primary">
                    {title}
                </h3>
            )}
            <div className="relative flex-1 min-h-0">
                <div className="flex flex-col gap-1 h-full overflow-y-auto pr-0.5 scrollbar-thin">
                    {allItems.map((m, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                                {m.status && (
                                    <span className="w-2 h-2 rounded-full shrink-0"
                                        style={{
                                            backgroundColor: STATUS_DOT[m.status] || STATUS_DOT.good,
                                            ...(m.status === 'bad' ? { animation: 'blink-dot 1.2s ease-in-out infinite' } : {}),
                                        }} />
                                )}
                                <span className="font-data text-body uppercase tracking-wider font-bold truncate" className="text-card-primary">
                                    {m.label}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="font-data text-body font-bold" className="text-card-primary">
                                    {m.value}
                                </span>
                                {m.change && (
                                    <span className="font-data text-body font-bold" className="text-card-primary">
                                        {m.change}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
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
