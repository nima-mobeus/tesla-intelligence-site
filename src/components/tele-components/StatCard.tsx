import React from 'react';
import { getColor } from './utils';
import type { TeleComponentProps } from './types';

const STATUS_DOT: Record<string, string> = {
    good: '#22c55e', bad: '#ff4040', watch: '#b45309',
};
const TREND_ARROW: Record<string, string> = { up: '▲', down: '▼', flat: '—' };
const TREND_CLR: Record<string, string> = { up: '#22c55e', down: '#ff4040', flat: '#6b7280' };

interface StatCardData {
    label: string;
    value: string;
    subtitle?: string;
    trend?: 'up' | 'down' | 'flat';
    change?: string;
    status?: 'good' | 'bad' | 'watch';
}

export default function StatCard({ data, accentColor, onAction }: TeleComponentProps) {
    const { label, value, subtitle, trend, change, status } = data as StatCardData;
    return (
        <div className="flex flex-col items-center justify-center h-full text-center gap-1">
            <div className="flex items-center gap-1.5">
                {status && (
                    <span className="w-2.5 h-2.5 rounded-full"
                        style={{
                            backgroundColor: STATUS_DOT[status] || STATUS_DOT.good,
                            ...(status === 'bad' ? { animation: 'blink-dot 1.2s ease-in-out infinite' } : {}),
                        }} />
                )}
                <span className="font-data text-body uppercase tracking-[0.15em] text-card-secondary">
                    {label}
                </span>
            </div>
            <div className="font-hero text-title leading-none text-card-primary">
                {value}
            </div>
            {subtitle && (
                <p className="font-voice text-body leading-tight mt-1 line-clamp-2 text-card-secondary">
                    {subtitle}
                </p>
            )}
            {trend && change && (
                <div className="font-data text-body font-semibold mt-0.5" style={{ color: TREND_CLR[trend] }}>
                    {TREND_ARROW[trend]} {change}
                </div>
            )}
        </div>
    );
}
