/**
 * Component Registry — 29 cards + GridView infrastructure.
 *
 * v2.1 — Reduced from 55 unique components to 29 cards.
 * Every removed type is aliased to its surviving counterpart below,
 * ensuring zero runtime breakage for existing prompts.
 *
 * THE 30 CARDS:
 *  Tier 1 (Indispensable): kpi-strip, bar-chart, metric-list, alert, table,
 *                          text, stat, donut, line-chart, timeline
 *  Tier 2 (High Value):    email-list, relationship-card, country-card,
 *                          domino-card, vote-card, approval-card, person-card,
 *                          incident-card, pipeline-card, event-card
 *  Tier 3 (Versatile):     risk-matrix, comparison-table, news-feed, checklist,
 *                          waterfall, heatmap, world-map, journal-entry, stock
 */

import { ComponentType, lazy } from 'react';
import type { TeleComponentProps } from './types';

const registry: Record<string, ComponentType<TeleComponentProps>> = {};

function reg(type: string, loader: () => Promise<{ default: ComponentType<TeleComponentProps> }>) {
  registry[type] = lazy(loader);
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRIMARY REGISTRATIONS — 30 Cards + GridView
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Tier 1: Indispensable (10) ─────────────────────────────────────────────
reg('kpi-strip',    () => import('./KPIStrip'));
reg('bar-chart',    () => import('./SceneBarChart'));
reg('metric-list',  () => import('./MetricList'));
reg('alert',        () => import('./AlertCard'));
reg('table',        () => import('./TableCard'));
reg('text',         () => import('./TextCard'));
reg('stat',         () => import('./StatCard'));
reg('donut',        () => import('./SceneDonutChart'));
reg('line-chart',   () => import('./SceneLineChart'));
reg('timeline',     () => import('./TimelineCard'));

// ─── Tier 2: High Value (10) ────────────────────────────────────────────────
reg('email-list',        () => import('./EmailListCard'));
reg('relationship-card', () => import('./RelationshipCard'));
reg('country-card',      () => import('./CountryCard'));
reg('domino-card',       () => import('./DominoCard'));
reg('vote-card',         () => import('./VoteCard'));
reg('approval-card',     () => import('./ApprovalCard'));
reg('person-card',       () => import('./PersonCard'));
reg('incident-card',     () => import('./IncidentCard'));
reg('pipeline-card',     () => import('./PipelineCard'));
reg('event-card',        () => import('./EventCard'));

// ─── Tier 3: Versatile Support (10) ─────────────────────────────────────────
reg('risk-matrix',       () => import('./RiskMatrixCard'));
reg('comparison-table',  () => import('./ComparisonTableCard'));
reg('news-feed',         () => import('./NewsFeedCard'));
reg('checklist',         () => import('./ChecklistCard'));
reg('waterfall',         () => import('./WaterfallCard'));
reg('heatmap',           () => import('./HeatmapCard'));
reg('world-map',         () => import('./WorldMapCard'));
reg('journal-entry',     () => import('./JournalEntryCard'));
reg('stock',             () => import('./StockCard'));

// ─── Infrastructure ─────────────────────────────────────────────────────────
reg('GridView', () => import('./GridView'));

// ═══════════════════════════════════════════════════════════════════════════════
// ALIASES — Backward compatibility for removed cards & LLM hallucinations
// Every removed card type maps to its best surviving counterpart.
// ═══════════════════════════════════════════════════════════════════════════════

// --- Removed cards → surviving counterparts ---
reg('delegation-card',  () => import('./ApprovalCard'));       // delegation → approval
reg('decision-card',    () => import('./VoteCard'));           // decision → vote
reg('email-card',       () => import('./EmailListCard'));      // single email → email list
reg('trip-card',        () => import('./EventCard'));          // trip → event
reg('briefing',         () => import('./TextCard'));           // briefing → text
reg('info-card',        () => import('./TextCard'));           // info-card → text
reg('bullet-list',      () => import('./TextCard'));           // bullet-list → text (has bullets)
reg('callout',          () => import('./TextCard'));           // callout → text
reg('quote-card',       () => import('./TextCard'));           // quote → text
reg('ranked-list',      () => import('./SceneBarChart'));      // ranked list → bar chart
reg('status-grid',      () => import('./MetricList'));         // status grid → metric list
reg('split-stat',       () => import('./StatCard'));           // split stat → stat
reg('data-cluster',     () => import('./MetricList'));         // data cluster → metric list
reg('mini-dashboard',   () => import('./MetricList'));         // mini dashboard → metric list
reg('stacked-bar',      () => import('./SceneBarChart'));      // stacked bar → bar chart
reg('funnel',           () => import('./SceneBarChart'));      // funnel → bar chart
reg('scatter-plot',     () => import('./SceneLineChart'));     // scatter → line chart
reg('gauge',            () => import('./StatCard'));           // gauge → stat
reg('org-roster',       () => import('./PersonCard'));         // org roster → person card
reg('comparison-profile', () => import('./ComparisonTableCard')); // comparison profile → comparison table
reg('stakeholder-map',  () => import('./RelationshipCard'));   // stakeholder map → relationship card
reg('team-kpi',         () => import('./MetricList'));         // team kpi → metric list

// --- Legacy PascalCase duplicates → scene counterparts ---
reg('BarChart',         () => import('./SceneBarChart'));
reg('LineChart',        () => import('./SceneLineChart'));
reg('DonutChart',       () => import('./SceneDonutChart'));
reg('StatsRow',         () => import('./KPIStrip'));
reg('KPICard',          () => import('./KPIStrip'));
reg('MetricCard',       () => import('./MetricList'));
reg('QuoteCallout',     () => import('./TextCard'));
reg('InfoCards',        () => import('./TextCard'));
reg('ComparisonTable',  () => import('./ComparisonTableCard'));
reg('Checklist',        () => import('./ChecklistCard'));
reg('Timeline',         () => import('./TimelineCard'));
reg('PieChart',         () => import('./SceneDonutChart'));
reg('ProgressTracker',  () => import('./SceneBarChart'));
reg('ProductCard',      () => import('./TextCard'));
reg('ImageGallery',     () => import('./TextCard'));
reg('FAQ',              () => import('./TextCard'));
reg('MediaContent',     () => import('./TextCard'));
reg('Form',             () => import('./TextCard'));
reg('Quiz',             () => import('./TextCard'));
reg('HeroSplit',        () => import('./TextCard'));
reg('CarouselCards',    () => import('./TextCard'));
reg('TrioColumns',      () => import('./TextCard'));
reg('ProcessFlow',      () => import('./TimelineCard'));
reg('ProfileRoster',    () => import('./PersonCard'));
reg('StatusList',       () => import('./MetricList'));
reg('NumberedList',     () => import('./TextCard'));
reg('MeetingScheduler', () => import('./EventCard'));
reg('SceneCard',        () => import('./TextCard'));

// --- Common LLM hallucinations ---
reg('donut-chart',    () => import('./SceneDonutChart'));
reg('bar',            () => import('./SceneBarChart'));
reg('line',           () => import('./SceneLineChart'));
reg('stat-card',      () => import('./StatCard'));
reg('stats',          () => import('./StatCard'));
reg('kpi',            () => import('./KPIStrip'));
reg('kpi-card',       () => import('./KPIStrip'));
reg('metric',         () => import('./MetricList'));
reg('info',           () => import('./TextCard'));
reg('checklist-card', () => import('./ChecklistCard'));
reg('timeline-card',  () => import('./TimelineCard'));
reg('area-chart',     () => import('./SceneLineChart'));
reg('progress',       () => import('./SceneBarChart'));
reg('news-article',   () => import('./NewsFeedCard'));
reg('profile-roster', () => import('./PersonCard'));
reg('calendar',       () => import('./EventCard'));           // ghost type in prompt
reg('live-map',       () => import('./WorldMapCard'));        // ghost type in prompt

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Look up a component by template type name.
 * Returns undefined if no matching component is registered.
 */
export function getComponent(type: string): ComponentType<TeleComponentProps> | undefined {
  return registry[type];
}

/**
 * Check if a component type is registered.
 */
export function hasComponent(type: string): boolean {
  return type in registry;
}

/**
 * Get all registered component type names.
 */
export function getRegisteredTypes(): string[] {
  return Object.keys(registry);
}

export default registry;
