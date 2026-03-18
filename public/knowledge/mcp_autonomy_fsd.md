# ENTITY
entity_id: mcp_autonomy_fsd
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-autonomy
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: autonomy_overview

MCP Domain 2: Autonomy & Full Self-Driving.

Server ID: `mcp-autonomy`
Authentication: Tesla UKM scoped JWT (read: autonomy.*, write: autonomy.edge_cases)
Uptime SLA: 99.99%
Data refresh: Real-time (disengagements, safety), 15-minute batch (fleet rollout), hourly (training metrics)

This domain tracks the entire FSD stack — from neural network training on Dojo through deployment to 41.2M vehicles. This intelligence is used to brief you on version rollouts, disengagement events, safety ratios, edge case collection, regulatory compliance, and the robotaxi autonomy layer.

**Fleet vs. FSD context:** Total Tesla fleet = 48.2M vehicles. FSD subscription penetration = **85.4%** (41.2M vehicles). The remaining 7.0M vehicles operate on standard Autopilot (ADAS, ACC, lane centering). FSD subscription rate has grown from 62% in March 2029.

Primary data feeds:
- `autonomy.fsd.fleet_count` — vehicles running each FSD version
- `autonomy.fsd.disengagement_rate` — disengagements per billion miles
- `autonomy.safety.ratio` — safety multiple vs. human driving
- `autonomy.edge_cases.daily` — new edge cases collected
- `autonomy.training.progress` — current Dojo training job status
- `autonomy.regulatory.status` — approval status by region
- `autonomy.robotaxi.autonomy_score` — confidence metrics for robotaxi operations

---

# SECTION: FSD_VERSION_HISTORY
section_id: autonomy_version_history

Full FSD version release history (2029-2030):

| Version | Release Date | Key Features | Adoption at 30d | Critical Fixes |
|---------|-------------|-------------|-----------------|---------------|
| v17.4 | Mar 17, 2029 | Highway merge improvement | 76% | — |
| v17.5 | Apr 22, 2029 | Night driving neural net v3 | 78% | — |
| v17.6 | May 18, 2029 | Roundabout handling (EU) | 78% | Rain sensor false positive |
| v17.7 | Jun 20, 2029 | Construction zone detect v2 | 79% | — |
| v17.8 | Jul 28, 2029 | Emergency vehicle interaction | 81% | — |
| v18.0 | Aug 15, 2029 | Major architecture rewrite: end-to-end transformer | 72% | Slow adoption — major version |
| v18.0.1 | Aug 28, 2029 | Hotfix: intersection hesitation | 84% | Critical hesitation bug |
| v18.1 | Oct 1, 2029 | Parking structure navigation | 82% | — |
| v18.2 | Nov 15, 2029 | Highway lane change confidence +12% | 83% | — |
| v18.3 | Jan 2, 2030 | Construction zone navigation v3 | 85% | — |
| v18.4 | Feb 8, 2030 | Rain handling +14%, unprotected left turns +22% | 85.5% | Current release |
| v18.5 | In training | Pedestrian low-light +30%, roundabouts (EU priority) | — | ETA: Mar 18 18:00 UTC |

v18.0 was the most significant release — complete transition from modular perception + planning to end-to-end transformer architecture. Initial adoption was slower (72% at 30 days) because users reported "different driving feel." Performance metrics were superior across all categories.

---

# SECTION: DISENGAGEMENT_DATA
section_id: autonomy_disengagements

Monthly disengagement rates (per billion miles driven):

| Month | Rate | Delta | Top Cause | Miles Driven (B) |
|-------|------|-------|----------|-----------------|
| Apr 2029 | 0.018 | — | Construction zones | 3.2 |
| May 2029 | 0.016 | −0.002 | Sensor occlusion | 3.4 |
| Jun 2029 | 0.014 | −0.002 | Construction zones | 3.6 |
| Jul 2029 | 0.012 | −0.002 | Emergency vehicles | 3.8 |
| Aug 2029 | 0.010 | −0.002 | Construction zones | 4.0 |
| Sep 2029 | 0.009 | −0.001 | Unmapped roads | 4.1 |
| Oct 2029 | 0.008 | −0.001 | Sensor occlusion | 4.2 |
| Nov 2029 | 0.007 | −0.001 | Construction zones | 4.2 |
| Dec 2029 | 0.006 | −0.001 | Adverse weather | 4.3 |
| Jan 2030 | 0.005 | −0.001 | Construction zones | 4.4 |
| Feb 2030 | 0.004 | −0.001 | Adverse weather | 4.5 |
| Mar 2030 | 0.003 | −0.001 | Construction zones | 4.6 |

Annualized improvement: 83% reduction in disengagement rate (0.018 → 0.003).
v18.0 architecture rewrite in August 2029 accelerated the decline curve.

Disengagement causes breakdown (March 17, 2030):

| Cause | % of Disengagements | Trend | Fix Target |
|-------|-------------------|-------|-----------|
| Construction zone ambiguity | 34% | Improving | v18.5 |
| Sensor occlusion (rain/snow/mud) | 22% | Improving | v18.4 helped, v18.5 continues |
| Unmapped road features | 18% | Stable | Map update cycle |
| Emergency vehicle interaction | 14% | Improving | v17.8 fix holding |
| Pedestrian edge cases | 8% | Improving | v18.5 target |
| Other | 4% | Various | — |

Disengagement by road type (March 17):

| Road Type | Rate (per B mi) | vs. Dec 2029 | vs. Jun 2029 |
|-----------|----------------|-------------|-------------|
| Highway | 0.001 | Stable | −0.004 |
| Urban | 0.004 | −0.001 | −0.012 |
| Rural | 0.002 | Stable | −0.003 |
| Construction zones | 0.012 | −0.004 | −0.028 |
| Adverse weather | 0.008 | −0.003 | −0.014 |
| Parking structures | 0.006 | −0.002 | −0.018 |

---

# SECTION: SAFETY_RATIO_HISTORY
section_id: autonomy_safety

Monthly safety ratio vs. human driving:

| Month | Safety Multiple | Tesla Incidents/M mi | Human Incidents/M mi |
|-------|---------------|---------------------|---------------------|
| Apr 2029 | 28× | 0.0035 | 0.0980 |
| May 2029 | 29× | 0.0034 | 0.0978 |
| Jun 2029 | 30× | 0.0033 | 0.0976 |
| Jul 2029 | 31× | 0.0031 | 0.0974 |
| Aug 2029 | 32× | 0.0030 | 0.0972 |
| Sep 2029 | 34× | 0.0029 | 0.0970 |
| Oct 2029 | 35× | 0.0028 | 0.0968 |
| Nov 2029 | 36× | 0.0027 | 0.0968 |
| Dec 2029 | 38× | 0.0026 | 0.0968 |
| Jan 2030 | 39× | 0.0025 | 0.0968 |
| Feb 2030 | 41× | 0.0024 | 0.0966 |
| Mar 2030 | 42× | 0.0023 | 0.0966 |

The safety multiple improved by 50% in 12 months (28× → 42×). The improvement comes from both Tesla's FSD getting safer AND human driving remaining roughly constant.

Insurance industry impact timeline:
- Jun 2029: 12 US states approved FSD-only insurance policies
- Sep 2029: 20 US states approved
- Dec 2029: 26 US states approved
- Mar 2030: 28 US states approved. Average premium reduction: 60%
- EU considering: Framework expected Q3 2030
- Impact on Tesla revenue: $12B annualized insurance-related revenue (partnerships + Tesla Insurance)

Safety by severity (March 17, 2030):

| Severity | Tesla FSD Rate | Human Rate | Multiple |
|----------|---------------|-----------|----------|
| Fatal | 0.00001/M mi | 0.0012/M mi | 120× safer |
| Serious injury | 0.0003/M mi | 0.018/M mi | 60× safer |
| Minor injury | 0.0005/M mi | 0.020/M mi | 40× safer |
| Property damage only | 0.0015/M mi | 0.057/M mi | 38× safer |

---

# SECTION: EDGE_CASE_LIBRARY
section_id: autonomy_edge_cases

The FSD edge case library is the largest autonomous driving dataset in history.

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Total edge cases (lifetime) | 12.4 billion | +4.2B |
| New edge cases per day | 485,000 | +180K |
| Auto-resolved rate | 94.2% | +6.2% |
| Requiring human review | 5.8% | −6.2% |
| Average resolution time | 4.2 hours | −12 hours |

Edge case categories (lifetime):

| Category | Cases (B) | Daily New (K) | Resolution Rate |
|----------|----------|-------------|----------------|
| Construction zones | 2.4 | 180 | 94% |
| Adverse weather | 1.8 | 140 | 91% |
| Pedestrian interactions | 1.2 | 95 | 96% |
| Emergency vehicles | 0.68 | 42 | 97% |
| Unmapped roads | 0.42 | 28 | 88% |
| Parking structures | 0.38 | 24 | 92% |
| Animal crossings | 0.28 | 18 | 89% |
| Traffic signal ambiguity | 0.24 | 14 | 95% |
| Cyclist interactions | 0.22 | 12 | 93% |
| Debris/road hazards | 0.18 | 8 | 90% |
| Other | 4.52 | 124 | 93% |

Every edge case feeds back into the Dojo training pipeline. The virtuous cycle: more fleet miles → more edge cases → better training data → fewer disengagements → more fleet miles.

---

# SECTION: ROBOTAXI_AUTONOMY
section_id: autonomy_robotaxi

Robotaxi autonomy layer operates on top of FSD with additional safety margins.

Robotaxi-specific autonomy metrics (March 17, 2030):

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Autonomy confidence score | 99.97% | +0.12% |
| Remote intervention rate | 0.003% of rides | −0.008% |
| Time between interventions | 33,333 rides | +16,000 rides |
| Passenger comfort score | 4.88 / 5.0 | +0.14 |

Monthly remote intervention history:

| Month | Intervention Rate | Interventions | Total Rides (M) |
|-------|-----------------|--------------|----------------|
| Apr 2029 | 0.011% | 462 | 4.2 |
| Jun 2029 | 0.009% | 432 | 4.8 |
| Aug 2029 | 0.007% | 392 | 5.6 |
| Oct 2029 | 0.006% | 384 | 6.4 |
| Dec 2029 | 0.004% | 296 | 7.4 |
| Feb 2030 | 0.003% | 246 | 8.2 |
| Mar 2030 | 0.003% | 252 | 8.4 |

Remote operators: 1,200 operators across 6 global centers (Austin, Shanghai, London, Mumbai, Tokyo, São Paulo). Average workload: 1 intervention per 10-hour shift per operator.

---

# SECTION: REGULATORY_STATUS
section_id: autonomy_regulatory

Global regulatory status for autonomous driving and robotaxi operations (March 2030):

| Region | FSD Level | Status | Robotaxi | Key Date |
|--------|----------|--------|----------|---------|
| USA — 28 states | L4 unrestricted | Fully approved | Yes | Various (2027-2029) |
| USA — 12 states | L4 with monitor | Conditional | Some | Various |
| USA — 10 states | L3 | Limited | No | Pending |
| EU — 18 countries | L4 highway + urban | Approved | 8 countries | Jan 2030 |
| EU — 9 countries | L3 | Limited | No | Pending |
| China — 4 pilot cities | L3 (v17.8) | Approved | Pilot | 2028 |
| China — national | L4 | Under review | Pending | Expected Q3 2030 |
| India — 6 cities | L4 urban | Approved | Yes | Nov 2029 |
| Japan | L4 highway | Approved | Tokyo pilot | Feb 2030 |
| UAE | L4 unrestricted | Approved | Yes | Sep 2029 |
| Saudi Arabia | L4 | Approved | Yes | Oct 2029 |
| Australia | L3 | Limited | Pilot (Sydney) | Dec 2029 |
| South Korea | L4 highway | Approved | Seoul pilot | Mar 2030 |
| Brazil | L3 | Limited | São Paulo pilot | Jan 2030 |

China is the biggest regulatory prize. Full L4 approval would unlock 12.4M fleet vehicles for FSD v18.x and enable robotaxi operations in 20+ cities. Expected Q3 2030.

---

# SECTION: TRAINING_PIPELINE
section_id: autonomy_training

FSD training pipeline overview:

| Stage | Description | Duration | Current Status |
|-------|------------|---------|---------------|
| Data collection | Fleet sends edge cases to cloud | Continuous | Active |
| Data labeling | Auto-label + human review | 2-4 hours | Active |
| Training | Dojo clusters train neural nets | 14-21 days | v18.5 in progress |
| Validation | Shadow mode testing on 10K vehicles | 5-7 days | — |
| Canary rollout | 100K vehicles, monitoring | 3-5 days | — |
| Fleet rollout | OTA push to full fleet | 14-18 days | — |

v18.5 training timeline:
- Started: March 4, 2030
- Original ETA: March 18, 2030
- Revised ETA: March 18, 18:00 UTC (6h delay from Jakarta Dojo outage)
- Dojo capacity used: 2.8 EF (56% of total)
- Training data: 4.2B new edge cases since v18.4

v18.5 target improvements:
- Pedestrian detection in low-light: +30%
- Construction zone navigation: +25%
- Roundabout handling (EU priority): +40%
- Parking lot navigation: +15%
- Cyclist interaction: +20%

---

# EMBEDDING_TAGS
tags:
- tesla_autonomy
- fsd
- full_self_driving
- mcp_autonomy
- disengagement
- safety_ratio
- edge_cases
- robotaxi_autonomy
- regulatory
- training_pipeline
- dojo
- v18
- insurance
- remote_intervention
- construction_zones
- pedestrian_detection
