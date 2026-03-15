import type { CardDef } from '@/types';

interface CertifiedScene {
  badge: string;
  title: string;
  subtitle?: string;
  layout: string;
  cards: CardDef[];
  footerLeft: string;
  footerRight: string;
}

export const CERTIFIED_SCENES: Record<string, CertifiedScene> = {

  // ─── welcome-hero ──────────────────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'welcome-hero': {
    badge: 'Command Layer',
    title: 'Tesla Intelligence',
    subtitle: 'Welcome to the Command Layer',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Global Fleet', value: '48.2M', unit: 'vehicles' },
            { label: 'Gigafactories', value: '8', unit: 'active' },
            { label: 'Grid Managed', value: '312', unit: 'GWh' },
            { label: 'Optimus Units', value: '2.1M', unit: 'deployed' },
            { label: 'Revenue', value: '$1.2T', unit: 'annual' },
            { label: 'MCP Domains', value: '43', unit: 'active' },
          ],
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Fleet & Manufacturing',
          items: [
            { label: 'Total Vehicles', value: '48.2M' },
            { label: 'Gigafactories', value: '8' },
            { label: 'Daily Production', value: '~14,200' },
          ],
        },
      },
      {
        type: 'stat',
        props: {
          title: 'AI & Autonomy',
          items: [
            { label: 'FSD Fleet', value: '41.2M' },
            { label: 'Dojo Compute', value: '4.7 EF' },
            { label: 'Optimus Fleet', value: '2.1M' },
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Energy Division',
          body: '312 GWh grid managed, 42.6 GWh Megapack deployed, 3.2M Powerwall homes.',
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Robotaxi Network',
          body: '$847M daily revenue across 340 cities and 42 countries. 8.4M rides per day.',
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Dojo CaaS',
          body: '$36B annual revenue, 340 external customers. 40% cheaper than AWS.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Command Layer',
    footerRight: 'Mar 15, 2030',
  },

  // ─── tesla-dashboard ──────────────────────────────────────────
  // Layout 1-3-3 → 7 cards
  'tesla-dashboard': {
    badge: 'Executive Dashboard',
    title: 'Tesla Executive Dashboard',
    subtitle: 'Real-time operations overview — March 15, 2030',
    layout: '1-3-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Fleet', value: '48.2M', delta: '+14,200' },
            { label: 'Robotaxi', value: '$847M/day', delta: '+$12M' },
            { label: 'Optimus', value: '2.1M', delta: '+820 shipped' },
            { label: 'Grid', value: '312 GWh' },
            { label: 'Dojo', value: '4.7 EF', delta: '-0.3 EF' },
            { label: 'Revenue', value: '$1.2T' },
          ],
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Factory Output (K units annual)',
          bars: [
            { label: 'Shanghai', value: 2400 },
            { label: 'Texas', value: 1800 },
            { label: 'Berlin', value: 1200 },
            { label: 'Mumbai', value: 900 },
            { label: 'Jakarta', value: 650 },
          ],
          unit: 'K',
        },
      },
      {
        type: 'donut',
        props: {
          title: 'Global EV Market Share',
          segments: [
            { label: 'Tesla', value: 31.4, color: '#e31937' },
            { label: 'BYD', value: 24.8, color: '#3b82f6' },
            { label: 'VW Group', value: 11.2, color: '#a855f7' },
            { label: 'Toyota EV', value: 7.6, color: '#22c55e' },
            { label: 'Hyundai/Kia', value: 5.8, color: '#f59e0b' },
            { label: 'Others', value: 19.2, color: '#6b7280' },
          ],
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'FSD Autonomy',
          items: [
            { label: 'Rides/Day', value: '8.4M', delta: '+94K' },
            { label: 'Disengagements/B mi', value: '0.003', delta: '-0.001' },
            { label: 'Safety vs Human', value: '42x', delta: '+0.3x' },
          ],
        },
      },
      {
        type: 'alert',
        props: {
          title: 'Active Alerts',
          items: [
            { severity: 'high', message: 'Jakarta cooling relay CRF-420 — 12% compute loss' },
            { severity: 'medium', message: 'Mumbai robotics rollback — 340 units reverted to v9.2' },
            { severity: 'medium', message: 'São Paulo ride rejection — 23% rejection rate' },
          ],
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Robotaxi Economics',
          items: [
            { label: 'Daily Revenue', value: '$847M' },
            { label: 'Gross Margin', value: '64%' },
            { label: 'Cities', value: '340' },
          ],
        },
      },
      {
        type: 'gauge',
        props: {
          title: 'Dojo Compute Health',
          value: 4.7,
          max: 5.0,
          unit: 'EF',
          status: 'degraded',
          note: 'Jakarta cluster down — failover to Singapore at 96%',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Executive Dashboard',
    footerRight: 'Mar 15, 2030',
  },

  // ─── jakarta-cluster-full-briefing ─────────────────────────────
  // Layout 1-2-2 → 5 cards
  'jakarta-cluster-full-briefing': {
    badge: 'Incident Briefing',
    title: 'Jakarta Dojo Cluster 7 Outage',
    subtitle: 'Cooling relay CRF-420 failure — impact & remediation',
    layout: '1-2-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Compute Loss', value: '12%', delta: '-0.3 EF' },
            { label: 'Cost Impact', value: '$2.4M' },
            { label: 'Failover', value: '96%', unit: 'Singapore' },
            { label: 'Repair ETA', value: 'Mar 16 14:00 UTC' },
          ],
        },
      },
      {
        type: 'incident-card',
        props: {
          title: 'Incident Timeline',
          incident: 'Cooling Relay CRF-420 Failure',
          timestamp: 'Mar 8, 03:41 UTC',
          impact: 'FSD v18.5 training delayed 6 hours, 12% compute loss',
          failover: 'Singapore cluster at 96% capacity within 15 min',
          owner: 'Milan Kovac — Dojo Lead Engineer',
        },
      },
      {
        type: 'risk-matrix',
        props: {
          title: 'Cascade Risk',
          items: [
            { asset: 'Berlin Dojo 5', risk: 'Same relay model CRF-420', likelihood: 'medium' },
            { asset: 'Mumbai Dojo 8', risk: 'Same relay model CRF-420', likelihood: 'medium' },
          ],
        },
      },
      {
        type: 'checklist',
        props: {
          title: 'Remediation Actions',
          items: [
            { task: 'CRF-420 relay replacement', owner: 'Milan Kovac', status: 'in-progress' },
            { task: 'Fleet-wide relay audit', owner: 'Tom Zhu', status: 'pending', note: 'Next board meeting' },
            { task: 'FSD v18.5 validation', owner: 'Ashok Elluswamy', status: 'pending', note: 'Post-repair' },
          ],
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Milan Kovac',
          role: 'Dojo Lead Engineer',
          responsibility: 'Jakarta Cluster 7 — relay replacement & restart',
          eta: 'Mar 16, 14:00 UTC',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Jakarta Cluster Briefing',
    footerRight: 'Mar 15, 2030',
  },

  // ─── dojo-caas-outlook ─────────────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'dojo-caas-outlook': {
    badge: 'Business Unit',
    title: 'Dojo Compute-as-a-Service',
    subtitle: '$36B annual revenue — fastest-growing division',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Revenue', value: '$36B', delta: '+$18.5B YoY' },
            { label: 'Customers', value: '340', delta: '+180' },
            { label: 'Price/EF-hr', value: '$0.42' },
            { label: 'Satisfaction', value: '4.6/5.0' },
            { label: 'Pipeline', value: '14 enterprises' },
          ],
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Revenue by Segment ($B)',
          bars: [
            { label: 'Autonomous Vehicles', value: 12.4 },
            { label: 'Pharma/Biotech', value: 8.2 },
            { label: 'Climate', value: 4.8 },
            { label: 'Financial', value: 3.6 },
            { label: 'Academic', value: 2.4 },
          ],
          unit: '$B',
        },
      },
      {
        type: 'comparison-table',
        props: {
          title: 'Pricing vs Competitors ($/EF-hour)',
          columns: ['Provider', 'Price', 'Delta'],
          rows: [
            ['Tesla Dojo', '$0.42', '—'],
            ['AWS', '$0.72', '+71%'],
            ['Google TPU', '$0.58', '+38%'],
            ['Azure', '$0.68', '+62%'],
          ],
          highlightRow: 0,
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Pipeline Highlights',
          body: '14 enterprises in negotiation including 3 Fortune 100 companies. CaaS is the fastest-growing B2B division.',
        },
      },
      {
        type: 'line-chart',
        props: {
          title: '2030–2032 Revenue Projection',
          series: [
            { label: 'Revenue ($B)', data: [{ x: '2030', y: 36 }, { x: '2031', y: 52 }, { x: '2032', y: 72 }] },
            { label: 'Clients', data: [{ x: '2030', y: 340 }, { x: '2031', y: 550 }, { x: '2032', y: 800 }] },
          ],
        },
      },
      {
        type: 'stat',
        props: {
          title: '2032 Projection',
          items: [
            { label: 'Revenue', value: '$72B' },
            { label: 'Clients', value: '800' },
            { label: 'Compute Sold', value: '8 EF' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Dojo CaaS',
    footerRight: 'Mar 15, 2030',
  },

  // ─── board-activist-strategy ───────────────────────────────────
  // Layout 1-2-2 → 5 cards
  'board-activist-strategy': {
    badge: 'Governance',
    title: 'Board & Activist Strategy',
    subtitle: 'Elliott Management engagement — proxy & defense',
    layout: '1-2-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Elliott Stake', value: '0.8%' },
            { label: 'Board Vote', value: '9-2', unit: 'Against spinoff' },
            { label: 'Proxy Deadline', value: 'June 2030 AGM' },
            { label: 'Activist Risk', value: 'Low' },
          ],
        },
      },
      {
        type: 'briefing',
        props: {
          title: 'Activist Position',
          body: 'Elliott Management holds 0.8% stake and is pushing for a Robotaxi spinoff IPO. Board voted 9-2 against on Mar 11. Dissenting directors: Kimbal Musk, JB Straubel. Proxy deadline is the June 2030 AGM.',
        },
      },
      {
        type: 'stakeholder-map',
        props: {
          title: 'Board Alignment',
          groups: [
            { label: 'Against Spinoff', count: 9, stance: 'aligned' },
            { label: 'For Spinoff', count: 2, names: ['Kimbal Musk', 'JB Straubel'], stance: 'dissent' },
          ],
        },
      },
      {
        type: 'checklist',
        props: {
          title: 'Action Items',
          items: [
            { task: 'Optimus liability framework', owner: 'Brandon Ehrhart', status: 'in-progress' },
            { task: 'Jakarta relay audit for board', owner: 'Tom Zhu', status: 'pending' },
            { task: 'Board candidate search', owner: 'Robyn Denholm & Kathleen Wilson-Thompson', status: 'in-progress' },
          ],
        },
      },
      {
        type: 'decision-card',
        props: {
          title: 'Robotaxi Spinoff Decision',
          decision: 'Rejected by board 9-2',
          date: 'Mar 11, 2030',
          rationale: 'Vertical integration value exceeds standalone IPO premium. Maintain unified fleet economics.',
          nextReview: 'June 2030 AGM (proxy deadline)',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Board & Activist Strategy',
    footerRight: 'Mar 15, 2030',
  },

  // ─── capital-esop-financial-overview ───────────────────────────
  // Layout 1-3-3 → 7 cards
  'capital-esop-financial-overview': {
    badge: 'Finance',
    title: 'Capital Table, ESOP & Financial Overview',
    subtitle: 'Ownership structure and equity compensation',
    layout: '1-3-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Outstanding', value: '3.382B', unit: 'shares' },
            { label: 'Fully Diluted', value: '3.838B', unit: 'shares' },
            { label: 'CEO Stake', value: '12.17%' },
            { label: 'RSU Pool', value: '$9.2B' },
            { label: 'PSU Pool', value: '$2.4B' },
            { label: 'Annual Dilution', value: '~3.1%' },
          ],
        },
      },
      {
        type: 'donut',
        props: {
          title: 'Major Shareholders',
          segments: [
            { label: 'Elon Musk (CEO)', value: 12.17, color: '#e31937' },
            { label: 'Vanguard', value: 5.98, color: '#3b82f6' },
            { label: 'BlackRock', value: 5.44, color: '#111827' },
            { label: 'State Street', value: 3.80, color: '#22c55e' },
            { label: 'Elliott Mgmt', value: 0.80, color: '#f59e0b' },
            { label: 'Other', value: 71.81, color: '#6b7280' },
          ],
        },
      },
      {
        type: 'table',
        props: {
          title: 'Institutional Holders',
          columns: ['Institution', 'Stake %', 'Shares (M)'],
          rows: [
            ['Vanguard Group', '5.98%', '202.3'],
            ['BlackRock', '5.44%', '184.0'],
            ['State Street', '3.80%', '128.5'],
            ['Elliott Management', '0.80%', '27.1'],
          ],
        },
      },
      {
        type: 'stat',
        props: {
          title: 'CEO Ownership',
          items: [
            { label: 'Shares Held', value: '411.8M' },
            { label: 'Percentage', value: '12.17%' },
            { label: 'Basis', value: 'Outstanding' },
          ],
        },
      },
      {
        type: 'split-stat',
        props: {
          title: 'Equity Compensation',
          left: { label: 'RSU Pool', value: '$9.2B', detail: '184K employees' },
          right: { label: 'PSU Pool', value: '$2.4B', detail: '8.2K recipients' },
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Annual Dilution Range',
          bars: [
            { label: 'Low Estimate', value: 2.8 },
            { label: 'Mid Estimate', value: 3.1 },
            { label: 'High Estimate', value: 3.4 },
          ],
          unit: '%',
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Dilution Note',
          body: 'Annual dilution from RSU/PSU vesting runs ~2.8–3.4%. Board comp committee targets mid-range. Buyback program offsets approximately 40% of dilution.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Capital & ESOP',
    footerRight: 'Mar 15, 2030',
  },

  // ─── elt-member-focus-mar-15 ───────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'elt-member-focus-mar-15': {
    badge: 'Leadership',
    title: 'ELT Focus Areas',
    subtitle: 'Executive Leadership Team priorities — March 15, 2030',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'FCF', value: '$28.4B', unit: 'record' },
            { label: 'Model 2 Ramp', value: '112K/mo', delta: '→ 150K target' },
            { label: 'GRASP Allocation', value: '0.4 EF' },
            { label: 'Lithium Hedging', value: '+18%', unit: 'spike' },
          ],
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Tom Zhu',
          role: 'SVP, Automotive',
          focus: 'Model 2 production ramp — 112K/mo current, targeting 150K/mo',
          priority: 'high',
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Ashok Elluswamy',
          role: 'VP, Autopilot & AI',
          focus: 'Dojo/Optimus GRASP allocation 0.4 EF. FSD v18.5 validation post-Jakarta repair.',
          priority: 'high',
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Vaibhav Taneja',
          role: 'CFO',
          focus: 'Lithium hedging strategy — +18% price spike projected in 6 weeks',
          priority: 'medium',
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Karn Budhiraj',
          role: 'VP, Optimus',
          focus: 'Optimus v3 hand — Project FINE, targeting Q3 2030 delivery',
          priority: 'medium',
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Rohan Patel',
          role: 'VP, Public Policy',
          focus: 'FSD Level 4 China approval — targeting Q3 2030 regulatory clearance',
          priority: 'medium',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · ELT Focus',
    footerRight: 'Mar 15, 2030',
  },

  // ─── goldman-dojo-caas ─────────────────────────────────────────
  // Layout 1-2-2 → 5 cards
  'goldman-dojo-caas': {
    badge: 'Analyst Coverage',
    title: 'Goldman Sachs — Dojo CaaS Analysis',
    subtitle: 'Mark Delaney coverage — competitive pricing assessment',
    layout: '1-2-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Tesla Price', value: '$0.42/EF-hr' },
            { label: 'AWS Price', value: '$0.72/EF-hr' },
            { label: 'Gross Margin', value: '61%' },
            { label: 'Cost/TFLOP', value: '$0.14' },
            { label: 'Latency Advantage', value: '40% better' },
          ],
        },
      },
      {
        type: 'comparison-table',
        props: {
          title: 'Pricing Comparison ($/EF-hour)',
          columns: ['Provider', 'Price', 'Premium vs Tesla'],
          rows: [
            ['Tesla Dojo', '$0.42', '—'],
            ['AWS', '$0.72', '+71%'],
            ['Google TPU', '$0.58', '+38%'],
            ['Azure', '$0.68', '+62%'],
          ],
          highlightRow: 0,
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'Key Metrics',
          items: [
            { label: 'Gross Margin', value: '61%' },
            { label: 'Cost per TFLOP', value: '$0.14' },
            { label: 'Latency vs Hyperscalers', value: '40% lower' },
            { label: 'Client Concentration', value: '<8%' },
          ],
        },
      },
      {
        type: 'callout',
        props: {
          title: 'Goldman Concern',
          body: 'Jakarta outage exposed single-point-of-failure risk in cooling relay infrastructure. Resilience improvements needed before enterprise clients will commit to larger contracts.',
          severity: 'warning',
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Pipeline & Coverage',
          body: '14 enterprises in active negotiation. Key analyst: Mark Delaney (Goldman Sachs). Client concentration risk remains below 8% — well-diversified.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Goldman Sachs Analysis',
    footerRight: 'Mar 15, 2030',
  },

  // ─── optimus-hand-dexterity-overview ───────────────────────────
  // Layout 1-2-3 → 6 cards
  'optimus-hand-dexterity-overview': {
    badge: 'R&D',
    title: 'Optimus Hand Dexterity',
    subtitle: 'Current gen vs next-gen v3 capabilities',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Current DOF', value: '22' },
            { label: 'v3 DOF', value: '27' },
            { label: 'Tactile Sensors', value: '1,200+', delta: '→ 6,000+' },
            { label: 'Task Repertoire', value: '~340', delta: '→ ~2,000' },
            { label: 'Pinch Precision', value: '0.1mm', unit: 'v3 target' },
          ],
        },
      },
      {
        type: 'comparison-table',
        props: {
          title: 'Current vs Next-Gen v3',
          columns: ['Spec', 'Current (Gen 2)', 'v3 Target'],
          rows: [
            ['Degrees of Freedom', '22', '27'],
            ['Tactile Sensors', '1,200+', '6,000+'],
            ['Task Repertoire', '~340', '~2,000'],
            ['Pinch Precision', 'N/A', '0.1mm'],
          ],
        },
      },
      {
        type: 'ranked-list',
        props: {
          title: 'Competitor DOF Ranking',
          items: [
            { rank: 1, label: 'Tesla Optimus', value: '22 DOF', highlight: true },
            { rank: 2, label: 'Sanctuary AI', value: '20 DOF' },
            { rank: 3, label: '1X NEO', value: '18 DOF' },
            { rank: 4, label: 'Figure', value: '18 DOF' },
            { rank: 5, label: 'Boston Dynamics', value: '14 DOF' },
          ],
        },
      },
      {
        type: 'alert',
        props: {
          title: 'Engineering Challenges',
          items: [
            { severity: 'medium', message: 'Tactile latency: 18ms current vs 8ms human baseline' },
            { severity: 'low', message: 'Cable wear under repetitive micro-movement' },
            { severity: 'low', message: 'Thermal management in high-dexterity operations' },
          ],
        },
      },
      {
        type: 'bullet-list',
        props: {
          title: 'Research Partners',
          items: [
            'Shadow Robot Company — actuator co-development',
            'MIT — tactile learning algorithms',
            'Stanford — dexterous manipulation research',
            'UC Berkeley — sim-to-real transfer',
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Project FINE',
          body: 'Next-gen v3 hand under Project FINE, targeting Q3 2030. Led by Karn Budhiraj. 27 DOF with 6,000+ tactile sensors and 0.1mm pinch precision.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Optimus Hand Dexterity',
    footerRight: 'Mar 15, 2030',
  },

  // ─── optimus-roadmap-update ────────────────────────────────────
  // Layout 1-3-3 → 7 cards
  'optimus-roadmap-update': {
    badge: 'Product Roadmap',
    title: 'Optimus Roadmap & Production',
    subtitle: '2.1M units deployed — Gen 3 to Gen 4 transition',
    layout: '1-3-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Units Deployed', value: '2.1M', delta: '+820K YoY' },
            { label: 'Unit Cost', value: '$12,400', delta: '-23%' },
            { label: 'Operating Cost', value: '$0.42/hr' },
            { label: 'Gen 3 DOF', value: '40' },
            { label: 'Gen 3 Battery', value: '16 hr' },
          ],
        },
      },
      {
        type: 'donut',
        props: {
          title: 'Deployment Breakdown',
          segments: [
            { label: 'Factory', value: 1400, color: '#3b82f6' },
            { label: 'Commercial', value: 680, color: '#22c55e' },
            { label: 'Home Edition', value: 20, color: '#f59e0b' },
          ],
          unit: 'K units',
        },
      },
      {
        type: 'comparison-table',
        props: {
          title: 'Gen 3 vs Gen 4',
          columns: ['Spec', 'Gen 3 (Current)', 'Gen 4 (2031)'],
          rows: [
            ['Degrees of Freedom', '40', '48'],
            ['Battery Life', '16 hr', '20 hr'],
            ['Multi-tasking', 'No', 'Yes'],
            ['Unit Cost', '$12,400', '$9,800 target'],
          ],
        },
      },
      {
        type: 'timeline',
        props: {
          title: 'Roadmap Timeline',
          events: [
            { date: '2029', label: 'Gen 3 mass production begins' },
            { date: 'Q3 2030', label: 'Project FINE v3 hand delivery' },
            { date: '2031', label: 'Gen 4 launch — 48 DOF, 20hr, multi-tasking' },
            { date: '2032', label: 'Target: $9,800 unit cost' },
          ],
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Annual Production Growth (K units)',
          bars: [
            { label: '2028', value: 600 },
            { label: '2029', value: 1280 },
            { label: '2030', value: 2100 },
          ],
          unit: 'K',
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Cost Trajectory',
          items: [
            { label: 'Current Cost', value: '$12,400' },
            { label: 'YoY Reduction', value: '-23%' },
            { label: 'Gen 4 Target', value: '$9,800' },
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Home Edition',
          body: '20K Home Edition units deployed in limited beta. Full consumer launch planned alongside Gen 4 in 2031. Operating cost $0.42/hr makes Optimus cost-competitive with human labor at scale.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Optimus Roadmap',
    footerRight: 'Mar 15, 2030',
  },

  // ─── factory-performance-march ─────────────────────────────────
  // Layout 1-2 → 3 cards
  'factory-performance-march': {
    badge: 'Operations',
    title: 'Factory Performance — March MTD',
    subtitle: 'Global gigafactory output and utilization',
    layout: '1-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Total Fleet', value: '48.2M' },
            { label: 'Factories', value: '8' },
            { label: 'Top Plant', value: 'Shanghai', unit: '2.4M' },
          ],
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Annual Output by Factory (K units)',
          bars: [
            { label: 'Shanghai', value: 2400 },
            { label: 'Texas', value: 1800 },
            { label: 'Berlin', value: 1200 },
            { label: 'Mumbai', value: 900 },
            { label: 'Jakarta', value: 650 },
            { label: 'Monterrey', value: 580 },
            { label: 'Riyadh', value: 340 },
            { label: 'Fremont', value: 180 },
          ],
          unit: 'K',
        },
      },
      {
        type: 'table',
        props: {
          title: 'Utilization Rates',
          columns: ['Factory', 'Output (K)', 'Utilization'],
          rows: [
            ['Shanghai', '2,400', '92.3%'],
            ['Texas', '1,800', '90.0%'],
            ['Berlin', '1,200', '85.7%'],
            ['Mumbai', '900', '81.8%'],
            ['Jakarta', '650', '81.3%'],
            ['Monterrey', '580', '82.9%'],
            ['Riyadh', '340', '68.0%'],
            ['Fremont', '180', '90.0%'],
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Factory Performance',
    footerRight: 'Mar 15, 2030',
  },

  // ─── fsd-autonomy-overview ─────────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'fsd-autonomy-overview': {
    badge: 'Autonomy',
    title: 'FSD & Autonomy Overview',
    subtitle: 'Full Self-Driving fleet status and safety metrics',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'FSD Fleet', value: '41.2M', delta: '+12K' },
            { label: 'Rides/Day', value: '8.4M', delta: '+94K' },
            { label: 'Disengagement', value: '0.003/B mi', delta: '-0.001' },
            { label: 'Safety vs Human', value: '42x', delta: '+0.3x' },
          ],
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'FSD v18.4 Performance',
          items: [
            { label: 'Active Fleet', value: '41.2M vehicles' },
            { label: 'Daily Rides', value: '8.4M' },
            { label: 'Disengagements', value: '0.003 per billion miles' },
            { label: 'Safety Multiple', value: '42x safer than human' },
          ],
        },
      },
      {
        type: 'status-grid',
        props: {
          title: 'Regional Coverage',
          items: [
            { label: 'United States', value: '97%', status: 'green' },
            { label: 'European Union', value: '82%', status: 'green' },
            { label: 'China', value: 'Pending', status: 'yellow', note: 'L4 approval Q3 2030' },
          ],
        },
      },
      {
        type: 'callout',
        props: {
          title: 'v18.5 Delay',
          body: 'FSD v18.5 training delayed 6 hours due to Jakarta Dojo Cluster 7 outage. Validation pending post-repair.',
          severity: 'warning',
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Key Personnel Change',
          body: 'Dr. Wei Zhang departed to Waymo in October 2029. Perception team restructured under Ashok Elluswamy\'s direct oversight.',
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Competitive Safety Edge',
          items: [
            { label: 'Tesla FSD', value: '42x safer' },
            { label: 'Industry Average', value: '1x baseline' },
            { label: 'Data Lead', value: '5 years' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · FSD & Autonomy',
    footerRight: 'Mar 15, 2030',
  },

  // ─── robotaxi-operations ───────────────────────────────────────
  // Layout 1-2-2 → 5 cards
  'robotaxi-operations': {
    badge: 'Robotaxi',
    title: 'Robotaxi Operations',
    subtitle: '$847M daily revenue — 340 cities worldwide',
    layout: '1-2-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Daily Revenue', value: '$847M', delta: '+$12M' },
            { label: 'Rides/Day', value: '8.4M', delta: '+94K' },
            { label: 'Fleet', value: '2.8M', unit: 'vehicles' },
            { label: 'Cities', value: '340' },
            { label: 'Countries', value: '42' },
            { label: 'Gross Margin', value: '64%' },
          ],
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Daily Revenue Trend',
          bars: [
            { label: 'Jan', value: 790 },
            { label: 'Feb', value: 820 },
            { label: 'Mar 15', value: 847 },
          ],
          unit: '$M/day',
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Network Scale',
          items: [
            { label: 'Cities', value: '340' },
            { label: 'Countries', value: '42' },
            { label: 'Gross Margin', value: '64%' },
          ],
        },
      },
      {
        type: 'alert',
        props: {
          title: 'Ride Rejection Alert',
          items: [
            { severity: 'high', message: 'São Paulo: 23% rejection rate — 214K requests vs 165K available' },
          ],
        },
      },
      {
        type: 'decision-card',
        props: {
          title: 'Recommended Action',
          decision: 'Rebalance 8,400 vehicles from Buenos Aires to São Paulo',
          rationale: 'São Paulo rejection rate at 23% while Buenos Aires has surplus capacity. Projected recovery to <10% rejection within 72 hours.',
          status: 'pending',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Robotaxi Operations',
    footerRight: 'Mar 15, 2030',
  },

  // ─── energy-grid-overview ──────────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'energy-grid-overview': {
    badge: 'Energy',
    title: 'Energy & Grid Overview',
    subtitle: '312 GWh managed — grid services growing 34% YoY',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Grid Managed', value: '312 GWh', delta: '+1.4' },
            { label: 'Megapack', value: '42.6 GWh', unit: 'deployed' },
            { label: 'Powerwall', value: '3.2M', unit: 'homes' },
            { label: 'VPP', value: '890K', unit: 'units' },
            { label: 'Superchargers', value: '82,400', unit: 'stations' },
            { label: 'Revenue', value: '$74B', unit: 'annual' },
          ],
        },
      },
      {
        type: 'donut',
        props: {
          title: 'Energy Revenue Mix',
          segments: [
            { label: 'Megapack / Grid', value: 38, color: '#3b82f6' },
            { label: 'Supercharging', value: 28, color: '#22c55e' },
            { label: 'Powerwall / VPP', value: 22, color: '#f59e0b' },
            { label: 'Grid Services', value: 12, color: '#a855f7' },
          ],
          unit: '%',
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Infrastructure Scale',
          bars: [
            { label: 'Superchargers', value: 82400 },
            { label: 'Powerwall Homes', value: 3200000 },
            { label: 'VPP Units', value: 890000 },
          ],
          unit: 'units',
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Grid Storage',
          items: [
            { label: 'Total Managed', value: '312 GWh' },
            { label: 'Megapack Deployed', value: '42.6 GWh' },
            { label: 'Growth Rate', value: '34% YoY' },
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Virtual Power Plant',
          body: '890K Powerwall units enrolled in VPP program, creating a distributed grid resource of significant scale. Revenue sharing model with homeowners.',
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'Supercharger Network',
          items: [
            { label: 'Total Stations', value: '82,400' },
            { label: 'NACS Adopted', value: 'Industry standard' },
            { label: 'V4 Stalls', value: 'Rolling out' },
            { label: 'Revenue', value: '$74B annual' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Energy & Grid',
    footerRight: 'Mar 15, 2030',
  },

  // ─── competitive-landscape ─────────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'competitive-landscape': {
    badge: 'Competitive Intel',
    title: 'Competitive Landscape',
    subtitle: 'Global EV market share and competitor analysis',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Tesla', value: '31.4%', delta: '+0.1%' },
            { label: 'BYD', value: '24.8%', delta: '-0.1%' },
            { label: 'VW Group', value: '11.2%', delta: 'flat' },
            { label: 'Superchargers', value: '82,400', unit: '2x competitors' },
          ],
        },
      },
      {
        type: 'donut',
        props: {
          title: 'Global EV Market Share',
          segments: [
            { label: 'Tesla', value: 31.4, color: '#e31937' },
            { label: 'BYD', value: 24.8, color: '#3b82f6' },
            { label: 'VW Group', value: 11.2, color: '#a855f7' },
            { label: 'Toyota EV', value: 7.6, color: '#22c55e' },
            { label: 'Hyundai/Kia', value: 5.8, color: '#f59e0b' },
            { label: 'Rivian', value: 2.8, color: '#06b6d4' },
            { label: 'Others', value: 16.4, color: '#6b7280' },
          ],
        },
      },
      {
        type: 'table',
        props: {
          title: 'Competitor Movements',
          columns: ['Competitor', 'Market Share', 'Key Development'],
          rows: [
            ['BYD', '24.8%', 'Blade Battery 3.0 Q3 2030, no autonomy stack'],
            ['Toyota EV', '7.6%', 'bZ6 solid-state 620mi range, 62% yield'],
            ['Hyundai/Kia', '5.8%', 'Stable, incremental growth'],
            ['Rivian', '2.8%', 'Growing commercial fleet segment'],
          ],
        },
      },
      {
        type: 'callout',
        props: {
          title: 'Tesla Moat',
          body: '82,400 Supercharger stations (2x all competitors combined), Dojo compute advantage, and 5-year FSD data lead create multi-layered competitive moat.',
          severity: 'info',
        },
      },
      {
        type: 'comparison-table',
        props: {
          title: 'BYD vs Tesla',
          columns: ['Dimension', 'Tesla', 'BYD'],
          rows: [
            ['Market Share', '31.4%', '24.8%'],
            ['Autonomy', 'FSD L4 (42x safer)', 'None'],
            ['Charging Network', '82,400 stations', 'Fragmented'],
            ['AI Compute', 'Dojo 4.7 EF', 'N/A'],
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Toyota Watch',
          body: 'Toyota bZ6 with solid-state battery: 620-mile range. Manufacturing yield at 62% — not yet commercially viable at scale. Expected Q4 2030 limited launch.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Competitive Landscape',
    footerRight: 'Mar 15, 2030',
  },

  // ─── supply-chain-catl-brief ───────────────────────────────────
  // Layout 1-2 → 3 cards
  'supply-chain-catl-brief': {
    badge: 'Supply Chain',
    title: 'Supply Chain & CATL Brief',
    subtitle: 'Key supplier relationships and lithium risk',
    layout: '1-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Lithium Price', value: '+18%', unit: '6-week spike' },
            { label: 'Key Suppliers', value: '3', unit: 'critical tier' },
            { label: 'Disruption Risk', value: 'Medium' },
          ],
        },
      },
      {
        type: 'table',
        props: {
          title: 'Critical Suppliers',
          columns: ['Supplier', 'Category', 'Risk Level'],
          rows: [
            ['CATL', 'Battery Cells', 'Medium'],
            ['TSMC', 'Chip Fabrication', 'Medium'],
            ['Panasonic', 'Battery Cells', 'Low'],
          ],
        },
      },
      {
        type: 'callout',
        props: {
          title: 'Lithium Hedging Alert',
          body: 'Lithium spot prices projected to spike +18% over the next 6 weeks. CFO Vaibhav Taneja is executing hedging strategy to lock in current rates. Supply disruption likelihood: medium.',
          severity: 'warning',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Supply Chain',
    footerRight: 'Mar 15, 2030',
  },

  // ─── cybersecurity-soc-brief ───────────────────────────────────
  // Layout 1-2 → 3 cards
  'cybersecurity-soc-brief': {
    badge: 'Cybersecurity',
    title: 'Cybersecurity SOC Brief',
    subtitle: 'Security operations center status and threat overview',
    layout: '1-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'MTTD', value: '<4 min', unit: 'mean time to detect' },
            { label: 'Patch Cadence', value: '99.2%', unit: 'on-schedule' },
            { label: 'Threat Level', value: 'Elevated' },
          ],
        },
      },
      {
        type: 'status-grid',
        props: {
          title: 'Security Posture',
          items: [
            { label: 'Vehicle OTA Security', value: 'Strong', status: 'green' },
            { label: 'Fleet API Gateway', value: 'Strong', status: 'green' },
            { label: 'Dojo Network', value: 'Monitoring', status: 'yellow', note: 'Jakarta incident review' },
            { label: 'Corporate IT', value: 'Normal', status: 'green' },
          ],
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'SOC Metrics',
          items: [
            { label: 'Mean Time to Detect', value: '<4 min' },
            { label: 'Patching Compliance', value: '99.2%' },
            { label: 'Open Vulnerabilities', value: '12 (0 critical)' },
            { label: 'OTA Updates (30d)', value: '2.4M vehicles' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Cybersecurity SOC',
    footerRight: 'Mar 15, 2030',
  },

  // ─── board-meeting-april ───────────────────────────────────────
  // Layout 1-2-2 → 5 cards
  'board-meeting-april': {
    badge: 'Governance',
    title: 'Board Meeting — April 2030',
    subtitle: 'Preparation materials and agenda overview',
    layout: '1-2-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Meeting Date', value: 'April 2030' },
            { label: 'Agenda Items', value: '6' },
            { label: 'Vote Items', value: '3' },
            { label: 'Directors', value: '11' },
          ],
        },
      },
      {
        type: 'checklist',
        props: {
          title: 'Agenda Items',
          items: [
            { task: 'Jakarta Dojo relay audit review', owner: 'Tom Zhu', status: 'pending' },
            { task: 'Robotaxi spinoff — activist response', owner: 'Board Chair', status: 'pending' },
            { task: 'Optimus liability framework', owner: 'Brandon Ehrhart', status: 'in-progress' },
            { task: 'FSD China L4 regulatory update', owner: 'Rohan Patel', status: 'pending' },
            { task: 'Capital allocation Q2', owner: 'Vaibhav Taneja', status: 'pending' },
            { task: 'Board candidate nominations', owner: 'Robyn Denholm', status: 'in-progress' },
          ],
        },
      },
      {
        type: 'bullet-list',
        props: {
          title: 'Vote Docket',
          items: [
            'Elliott Management response strategy — advisory vote',
            'Board candidate shortlist approval',
            'Q2 capital expenditure authorization',
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Pre-Meeting Documents',
          body: 'Q1 financials package, Jakarta post-mortem report, Optimus liability white paper, FSD China regulatory dossier, and Elliott engagement summary have been distributed to all directors.',
        },
      },
      {
        type: 'stakeholder-map',
        props: {
          title: 'Board Attendance',
          groups: [
            { label: 'Confirmed', count: 9, stance: 'aligned' },
            { label: 'Tentative', count: 2, names: ['Kimbal Musk', 'JB Straubel'], stance: 'pending' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Board Meeting Prep',
    footerRight: 'Mar 15, 2030',
  },

  // ─── geopolitical-risk-overlay ─────────────────────────────────
  // Layout 1-3-3 → 7 cards
  'geopolitical-risk-overlay': {
    badge: 'Geopolitical',
    title: 'Geopolitical Risk Overlay',
    subtitle: 'Regional revenue exposure and policy risk assessment',
    layout: '1-3-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'China Revenue', value: '$340B', unit: '28% of total' },
            { label: 'US Revenue', value: '$380B', unit: '31% of total' },
            { label: 'EU Revenue', value: '$210B', unit: '17% of total' },
            { label: 'China Escalation', value: '15%', unit: 'probability' },
          ],
        },
      },
      {
        type: 'donut',
        props: {
          title: 'Revenue by Region',
          segments: [
            { label: 'United States', value: 380, color: '#3b82f6' },
            { label: 'China', value: 340, color: '#e31937' },
            { label: 'European Union', value: 210, color: '#a855f7' },
            { label: 'Rest of World', value: 290, color: '#6b7280' },
          ],
          unit: '$B',
        },
      },
      {
        type: 'world-map',
        props: {
          title: 'Regional Exposure',
          regions: [
            { name: 'United States', value: '$380B', risk: 'low' },
            { name: 'China', value: '$340B', risk: 'medium' },
            { name: 'European Union', value: '$210B', risk: 'low' },
            { name: 'India', value: '$85B', risk: 'low' },
          ],
        },
      },
      {
        type: 'risk-matrix',
        props: {
          title: 'Policy Risk Assessment',
          items: [
            { asset: 'China Trade Relations', risk: 'Tariff escalation', likelihood: 'medium', impact: 'high' },
            { asset: 'EU AI Act', risk: 'Compliance cost for FSD', likelihood: 'high', impact: 'medium' },
            { asset: 'US Policy', risk: 'EV subsidy changes', likelihood: 'low', impact: 'medium' },
          ],
        },
      },
      {
        type: 'callout',
        props: {
          title: 'China Escalation Risk',
          body: 'Estimated 15% probability of significant trade escalation. $340B revenue (28% of total) exposed. FSD L4 China approval pending Q3 2030 — political headwinds could delay.',
          severity: 'warning',
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'EU AI Act Compliance',
          body: 'Full compliance required by Q3 2030. FSD classified as high-risk AI system. Compliance team led by Rohan Patel. Estimated compliance cost: $120M.',
        },
      },
      {
        type: 'alert',
        props: {
          title: 'Active Watchlist',
          items: [
            { severity: 'medium', message: 'US-China semiconductor export controls — monitor for GPU restrictions' },
            { severity: 'low', message: 'EU carbon border tax — potential impact on Berlin exports' },
            { severity: 'low', message: 'India local manufacturing mandate — Mumbai factory mitigates' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Geopolitical Risk',
    footerRight: 'Mar 15, 2030',
  },

  // ─── q1-decision-journal ───────────────────────────────────────
  // Layout 1-2-2 → 5 cards
  'q1-decision-journal': {
    badge: 'Decision Log',
    title: 'Q1 2030 Decision Journal',
    subtitle: 'CEO decision log, outcomes, and accuracy tracking',
    layout: '1-2-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Decisions Logged', value: '47' },
            { label: 'Accuracy Rate', value: '82%' },
            { label: 'Avg Time to Outcome', value: '18 days' },
            { label: 'Reversals', value: '3' },
          ],
        },
      },
      {
        type: 'journal-entry',
        props: {
          title: 'Recent Decisions',
          entries: [
            { date: 'Mar 11', decision: 'Reject Robotaxi spinoff', outcome: 'pending', confidence: 'high' },
            { date: 'Mar 8', decision: 'Jakarta failover to Singapore', outcome: 'success', confidence: 'high' },
            { date: 'Mar 1', decision: 'Model 2 ramp acceleration', outcome: 'on-track', confidence: 'medium' },
          ],
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Decision Accuracy by Domain',
          bars: [
            { label: 'Engineering', value: 91 },
            { label: 'Finance', value: 84 },
            { label: 'Operations', value: 80 },
            { label: 'Policy', value: 73 },
          ],
          unit: '%',
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'Q1 Patterns',
          items: [
            { label: 'Total Decisions', value: '47' },
            { label: 'High Confidence', value: '31 (66%)' },
            { label: 'Correct Outcomes', value: '82%' },
            { label: 'Reversals', value: '3 (6.4%)' },
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Journal Note',
          body: 'Decision journal entries are populated by search_knowledge from the CEO\'s personal decision log. Accuracy is measured against realized outcomes at 30/60/90-day intervals.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Decision Journal',
    footerRight: 'Mar 15, 2030',
  },

  // ─── regulatory-compliance-tracker ─────────────────────────────
  // Layout 1-2-2 → 5 cards
  'regulatory-compliance-tracker': {
    badge: 'Compliance',
    title: 'Regulatory & Compliance Tracker',
    subtitle: 'EU AI Act, NHTSA, and active litigation status',
    layout: '1-2-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Open Items', value: '12' },
            { label: 'Critical', value: '2' },
            { label: 'EU AI Act', value: 'Q3 2030', unit: 'deadline' },
            { label: 'NHTSA Recalls', value: '0 active' },
          ],
        },
      },
      {
        type: 'status-grid',
        props: {
          title: 'Regulatory Status',
          items: [
            { label: 'EU AI Act Compliance', value: 'In Progress', status: 'yellow', note: 'Deadline Q3 2030' },
            { label: 'NHTSA FSD Review', value: 'Cleared', status: 'green' },
            { label: 'China L4 Approval', value: 'Pending', status: 'yellow', note: 'Q3 2030 target' },
            { label: 'India Type Approval', value: 'Approved', status: 'green' },
          ],
        },
      },
      {
        type: 'table',
        props: {
          title: 'Active Compliance Items',
          columns: ['Item', 'Jurisdiction', 'Status', 'Deadline'],
          rows: [
            ['AI Act Classification', 'EU', 'In Progress', 'Q3 2030'],
            ['FSD L4 Certification', 'China', 'Under Review', 'Q3 2030'],
            ['Optimus Safety Standards', 'Global', 'Drafting', 'Q4 2030'],
            ['Data Privacy (GDPR)', 'EU', 'Compliant', 'Ongoing'],
          ],
        },
      },
      {
        type: 'checklist',
        props: {
          title: 'Litigation Tracker',
          items: [
            { task: 'FSD accident liability case — TX', owner: 'Legal', status: 'in-progress' },
            { task: 'Optimus workplace safety inquiry', owner: 'Brandon Ehrhart', status: 'pending' },
            { task: 'Patent dispute — BYD battery tech', owner: 'IP Team', status: 'in-progress' },
          ],
        },
      },
      {
        type: 'callout',
        props: {
          title: 'Priority',
          body: 'EU AI Act compliance is the top regulatory priority. FSD classified as high-risk AI. Rohan Patel leads the compliance effort with an estimated $120M budget.',
          severity: 'info',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Regulatory Compliance',
    footerRight: 'Mar 15, 2030',
  },

  // ─── financial-q1-deep-dive ────────────────────────────────────
  // Layout 1-3-3 → 7 cards
  'financial-q1-deep-dive': {
    badge: 'Finance',
    title: 'Financial Deep Dive — Q1 2030',
    subtitle: 'Record quarter: $310B revenue, 24% operating margin',
    layout: '1-3-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Revenue', value: '$310B/Q', unit: '$1.24T ann.' },
            { label: 'Gross Margin', value: '31.3%', delta: '+3.2 pts' },
            { label: 'Operating Margin', value: '24.0%', delta: '+3.9 pts' },
            { label: 'Net Income', value: '$60B/Q', delta: '+57.9%' },
            { label: 'EPS', value: '$17.80', delta: '+58.9%' },
          ],
        },
      },
      {
        type: 'waterfall',
        props: {
          title: 'Margin Expansion Drivers',
          items: [
            { label: 'Base Margin', value: 20.1 },
            { label: 'Robotaxi (64% GM)', value: 2.2 },
            { label: 'Optimus (42% GM)', value: 1.0 },
            { label: 'Energy', value: 0.5 },
            { label: 'Mix / Other', value: 0.2 },
            { label: 'Operating Margin', value: 24.0, isTotal: true },
          ],
          unit: '%',
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Revenue by Division ($B/Q)',
          bars: [
            { label: 'Automotive', value: 165 },
            { label: 'Robotaxi', value: 77 },
            { label: 'Energy', value: 38 },
            { label: 'Optimus', value: 18 },
            { label: 'Dojo CaaS', value: 9 },
            { label: 'Other', value: 3 },
          ],
          unit: '$B',
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Profitability Records',
          items: [
            { label: 'Net Income', value: '$60B/Q' },
            { label: 'YoY Growth', value: '+57.9%' },
            { label: 'FCF', value: '$28.4B record' },
          ],
        },
      },
      {
        type: 'line-chart',
        props: {
          title: 'Quarterly EPS Trend',
          series: [
            { label: 'EPS', data: [{ x: 'Q1 2029', y: 11.20 }, { x: 'Q2 2029', y: 12.80 }, { x: 'Q3 2029', y: 14.50 }, { x: 'Q4 2029', y: 16.00 }, { x: 'Q1 2030', y: 17.80 }] },
          ],
        },
      },
      {
        type: 'split-stat',
        props: {
          title: 'Margin Drivers',
          left: { label: 'Robotaxi Gross Margin', value: '64%', detail: 'Highest-margin segment' },
          right: { label: 'Optimus Gross Margin', value: '42%', detail: 'Improving with scale' },
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'R&D Investment',
          items: [
            { label: 'R&D Spend', value: '$10B/Q' },
            { label: 'R&D % Revenue', value: '3.2%' },
            { label: 'Key Focus', value: 'Gen 4 Optimus, FSD v19' },
            { label: 'Dojo CapEx', value: '$4.2B/Q' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Q1 Financial Deep Dive',
    footerRight: 'Mar 15, 2030',
  },

  // ─── charging-network-moat ─────────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'charging-network-moat': {
    badge: 'Infrastructure',
    title: 'Charging Network Moat',
    subtitle: '82,400 stations — 2x all competitors combined',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Stations', value: '82,400' },
            { label: 'vs Competitors', value: '2x', unit: 'combined' },
            { label: 'NACS Standard', value: 'Adopted' },
            { label: 'V4 Rollout', value: 'In Progress' },
          ],
        },
      },
      {
        type: 'bar-chart',
        props: {
          title: 'Charging Network Size (stations)',
          bars: [
            { label: 'Tesla SC', value: 82400 },
            { label: 'ChargePoint', value: 18200 },
            { label: 'EVgo', value: 8400 },
            { label: 'Electrify America', value: 6800 },
            { label: 'Others', value: 7600 },
          ],
          unit: 'stations',
        },
      },
      {
        type: 'stat',
        props: {
          title: 'Network Economics',
          items: [
            { label: 'Total Stations', value: '82,400' },
            { label: 'Utilization Rate', value: '72%' },
            { label: 'Revenue/Station', value: '$180K/yr' },
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'NACS Standard Adoption',
          body: 'Tesla\'s North American Charging Standard (NACS) has been adopted by all major automakers. Non-Tesla vehicles now account for 28% of Supercharger sessions.',
        },
      },
      {
        type: 'callout',
        props: {
          title: 'V4 Supercharger',
          body: 'V4 stalls deliver 350kW+ peak charging. Rollout to 40% of stations by end of 2030. New cabinet design supports CCS and NACS simultaneously.',
          severity: 'info',
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'Competitive Moat Factors',
          items: [
            { label: 'Network Size', value: '2x competitors combined' },
            { label: 'Reliability', value: '99.1% uptime' },
            { label: 'Speed (V4)', value: '350kW+ peak' },
            { label: 'Integration', value: 'Native nav + billing' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Charging Network',
    footerRight: 'Mar 15, 2030',
  },

  // ─── brand-earned-media ────────────────────────────────────────
  // Layout 1-2 → 3 cards
  'brand-earned-media': {
    badge: 'Brand',
    title: 'Brand & Earned Media',
    subtitle: 'Net promoter score, brand value, and media sentiment',
    layout: '1-2',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'NPS', value: '72', unit: 'score' },
            { label: 'Brand Value', value: '$218B', delta: '+14%' },
            { label: 'Media Sentiment', value: '68%', unit: 'positive' },
          ],
        },
      },
      {
        type: 'gauge',
        props: {
          title: 'Net Promoter Score',
          value: 72,
          max: 100,
          unit: 'NPS',
          status: 'healthy',
          note: 'Industry auto average: 39',
        },
      },
      {
        type: 'metric-list',
        props: {
          title: 'Brand Metrics',
          items: [
            { label: 'Brand Value', value: '$218B (+14% YoY)' },
            { label: 'Earned Media Value', value: '$4.2B/yr' },
            { label: 'Social Followers', value: '320M+' },
            { label: 'Media Sentiment', value: '68% positive, 12% negative' },
          ],
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · Brand & Media',
    footerRight: 'Mar 15, 2030',
  },

  // ─── f1-racing-season ──────────────────────────────────────────
  // Layout 1-2-3 → 6 cards
  'f1-racing-season': {
    badge: 'F1 Racing',
    title: 'Tesla F1 Racing Season',
    subtitle: '2030 Formula 1 World Championship campaign',
    layout: '1-2-3',
    cards: [
      {
        type: 'kpi-strip',
        span: 'full',
        props: {
          items: [
            { label: 'Constructor Pos.', value: 'P3' },
            { label: 'Points', value: '142' },
            { label: 'Wins', value: '2' },
            { label: 'Podiums', value: '6' },
            { label: 'Races Completed', value: '4 of 24' },
          ],
        },
      },
      {
        type: 'table',
        props: {
          title: 'Constructor Standings',
          columns: ['Pos', 'Team', 'Points'],
          rows: [
            ['1', 'Red Bull Racing', '198'],
            ['2', 'Ferrari', '172'],
            ['3', 'Tesla Racing', '142'],
            ['4', 'McLaren', '128'],
            ['5', 'Mercedes', '114'],
          ],
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Driver 1',
          role: 'Lead Driver',
          focus: '86 points — P4 in drivers\' championship. 1 win, 3 podiums.',
        },
      },
      {
        type: 'person-card',
        props: {
          name: 'Driver 2',
          role: 'Second Driver',
          focus: '56 points — P7 in drivers\' championship. 1 win, 3 podiums.',
        },
      },
      {
        type: 'timeline',
        props: {
          title: 'Upcoming Races',
          events: [
            { date: 'Mar 23', label: 'Australian Grand Prix — Melbourne' },
            { date: 'Apr 6', label: 'Japanese Grand Prix — Suzuka' },
            { date: 'Apr 20', label: 'Chinese Grand Prix — Shanghai' },
            { date: 'May 4', label: 'Miami Grand Prix' },
          ],
        },
      },
      {
        type: 'info-card',
        props: {
          title: 'Season Notes',
          body: 'Tesla Racing entered F1 in 2029. Strong first full season with innovative battery-hybrid powertrain. Target: P2 in constructors\' by season end.',
        },
      },
    ],
    footerLeft: 'Tesla Intelligence · F1 Racing',
    footerRight: 'Mar 15, 2030',
  },
};
