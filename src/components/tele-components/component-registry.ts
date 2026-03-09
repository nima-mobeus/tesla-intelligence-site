/**
 * Component Registry — Convention-based auto-import for tele-components.
 *
 * HOW IT WORKS:
 * Every .tsx file in this directory (except types.ts, this file, and index.ts)
 * that exports a default React component is automatically registered here.
 *
 * The registry maps component type names (PascalCase, matching the filename)
 * to their lazy-loaded React component. DynamicComponentRenderer uses this
 * registry to resolve template.type → React component at runtime.
 *
 * TO ADD A NEW COMPONENT:
 * 1. Create a new .tsx file in src/components/tele-components/ (e.g. MyWidget.tsx)
 * 2. Export a default function component that accepts TeleComponentProps
 * 3. Add one import line + one registry entry below
 *
 * CONVENTION:
 * - Filename must be PascalCase and match the template type exactly
 * - Component must `export default function ComponentName(props: TeleComponentProps)`
 * - The template.type in the database must match the filename (e.g. "BarChart" → BarChart.tsx)
 */

import { ComponentType, lazy } from 'react';
import type { TeleComponentProps } from './types';

// ─── Built-in component registry ────────────────────────────────────────────
// Each entry: 'TemplateType' → lazy(() => import('./FileName'))
// Lazy loading ensures only used components are bundled for a given page.

const registry: Record<string, ComponentType<TeleComponentProps>> = {};

// Helper to register a lazy component
function reg(type: string, loader: () => Promise<{ default: ComponentType<TeleComponentProps> }>) {
  registry[type] = lazy(loader);
}

// ─── Data Visualization ─────────────────────────────────────────────────────
reg('BarChart', () => import('./BarChart'));
reg('LineChart', () => import('./LineChart'));
reg('PieChart', () => import('./PieChart'));
reg('StatsRow', () => import('./StatsRow'));
reg('ProgressTracker', () => import('./ProgressTracker'));

// ─── Content Display ────────────────────────────────────────────────────────
reg('ProductCard', () => import('./ProductCard'));
reg('InfoCards', () => import('./InfoCards'));
reg('ImageGallery', () => import('./ImageGallery'));
reg('QuoteCallout', () => import('./QuoteCallout'));
reg('FAQ', () => import('./FAQ'));
reg('MediaContent', () => import('./MediaContent'));

// ─── Interactive ────────────────────────────────────────────────────────────
reg('Form', () => import('./Form'));
reg('ComparisonTable', () => import('./ComparisonTable'));
reg('Quiz', () => import('./Quiz'));
reg('Checklist', () => import('./Checklist'));

// ─── Layout / Presentation ──────────────────────────────────────────────────
reg('HeroSplit', () => import('./HeroSplit'));
reg('Timeline', () => import('./Timeline'));
reg('CarouselCards', () => import('./CarouselCards'));
reg('TrioColumns', () => import('./TrioColumns'));
reg('ProcessFlow', () => import('./ProcessFlow'));
reg('GridView', () => import('./GridView'));

// ─── Specialized ────────────────────────────────────────────────────────────
reg('ProfileRoster', () => import('./ProfileRoster'));
reg('StatusList', () => import('./StatusList'));
reg('NumberedList', () => import('./NumberedList'));
reg('MeetingScheduler', () => import('./MeetingScheduler'));

// ─── Scene-Optimized (dark backgrounds) ─────────────────────────────────────
reg('KPICard', () => import('./KPICard'));
reg('MetricCard', () => import('./MetricCard'));
reg('DonutChart', () => import('./DonutChart'));
reg('SceneCard', () => import('./SceneCard'));

// ─── Custom client components ───────────────────────────────────────────────
// Client-specific components are added below this line.
// The website builder agent or discovery service will append entries here.
// Example:
//   reg('CustomWidget', () => import('../CustomWidget'));

// ─── Exports ────────────────────────────────────────────────────────────────

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
