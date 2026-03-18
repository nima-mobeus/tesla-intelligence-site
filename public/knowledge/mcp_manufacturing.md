# ENTITY
entity_id: mcp_manufacturing
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-manufacturing
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: manufacturing_overview

MCP Domain 4: Manufacturing & Gigafactories.

Server ID: `mcp-manufacturing`
Authentication: Tesla UKM scoped JWT (read: manufacturing.*, write: manufacturing.scheduling)
Uptime SLA: 99.99%
Data refresh: Real-time (line sensors), 1-minute batch (output counters), 5-minute (yield/quality), hourly (shift summaries)

This domain tracks all 8 Gigafactories — production output, line uptime, yield rates, defect rates, shift scheduling, Optimus deployment on manufacturing lines, and cost-per-vehicle metrics. This intelligence is used to brief you on factory performance and the Executive Dashboard bar chart.

Primary data feeds:
- `manufacturing.output.daily` — daily vehicle output per factory
- `manufacturing.output.global_daily` — aggregated global daily total
- `manufacturing.yield.rate` — first-pass yield by factory and line
- `manufacturing.uptime.line` — individual line uptime percentages
- `manufacturing.defects.per10k` — defect rate per 10,000 vehicles
- `manufacturing.cost.per_vehicle` — cost per vehicle by factory
- `manufacturing.optimus.line_count` — Optimus units deployed per factory
- `manufacturing.shift.active` — current shift status and worker count

---

# SECTION: GLOBAL_PRODUCTION_MONTHLY
section_id: manufacturing_monthly

Monthly global vehicle production (all factories):

| Month | Vehicles Produced | Daily Avg | Factories Active | MoM % |
|-------|------------------|----------|-----------------|-------|
| Apr 2029 | 12,800,000 | 426,667 | 7 | — |
| May 2029 | 13,200,000 | 425,806 | 7 | +3.1% |
| Jun 2029 | 13,600,000 | 453,333 | 7 | +3.0% |
| Jul 2029 | 14,000,000 | 451,613 | 7 | +2.9% |
| Aug 2029 | 14,400,000 | 464,516 | 7 | +2.9% |
| Sep 2029 | 14,800,000 | 493,333 | 8 (Riyadh launch) | +2.8% |
| Oct 2029 | 15,400,000 | 496,774 | 8 | +4.1% |
| Nov 2029 | 15,000,000 | 500,000 | 8 | −2.6% |
| Dec 2029 | 15,600,000 | 503,226 | 8 | +4.0% |
| Jan 2030 | 16,000,000 | 516,129 | 8 | +2.6% |
| Feb 2030 | 14,800,000 | 528,571 | 8 | −7.5% (28 days) |
| Mar 2030 (proj) | 16,600,000 | 535,484 | 8 | +12.2% |

Annual production (Apr 2029 – Mar 2030): 176,200,000 vehicles
Annualized rate: 196,000,000+ vehicles

November dip: Planned maintenance at Shanghai (5-day line shutdown for Model 2 tooling installation).
February: Fewer days in month, but daily rate continued climbing.

---

# SECTION: FACTORY_PROFILES
section_id: manufacturing_factories

### Shanghai Gigafactory
- **Location:** Shanghai, China
- **Opened:** 2019
- **Models:** Model 3 (55%), Model Y (35%), Model 2 (10%)
- **Workers:** 12,800 + 4,200 Optimus units
- **Shifts:** 3 shifts, 24/7
- **Monthly capacity:** 2,600,000 vehicles
- **March MTD output:** 2,400,000 (92.3% utilization)
- **Yield rate:** 98.4% (best in network)
- **Line uptime:** 96.8%
- **Cost per vehicle:** $14,200 (lowest globally)
- **Defect rate:** 2.1 per 10K (lowest)
- **Key events 2029-2030:**
  - Jun 2029: Installed 400 additional Optimus units on paint line
  - Nov 2029: 5-day shutdown for Model 2 tooling
  - Feb 2030: Model 2 production started (500/day initial, ramping to 2,000/day)
  - Mar 2030: Model 2 line reached 95% target speed

Monthly output history:

| Month | Output | Utilization | Notes |
|-------|--------|------------|-------|
| Apr 2029 | 2,200,000 | 84.6% | — |
| Jul 2029 | 2,280,000 | 87.7% | — |
| Oct 2029 | 2,340,000 | 90.0% | — |
| Nov 2029 | 1,980,000 | 76.2% | Model 2 tooling shutdown |
| Jan 2030 | 2,380,000 | 91.5% | — |
| Mar 2030 | 2,400,000 | 92.3% | Model 2 ramp |

---

### Texas Gigafactory
- **Location:** Austin, Texas, USA
- **Opened:** 2022
- **Models:** Model Y (40%), Cybertruck (30%), Semi (15%), Optimus production (15%)
- **Workers:** 9,600 + 3,100 Optimus units
- **Shifts:** 3 shifts
- **Monthly capacity:** 2,000,000 vehicles
- **March MTD output:** 1,800,000 (90.0% utilization)
- **Yield rate:** 97.1%
- **Line uptime:** 95.2%
- **Cost per vehicle:** $19,800
- **Defect rate:** 3.4 per 10K
- **Key events 2029-2030:**
  - May 2029: Cybertruck line hit 7,000/day milestone
  - Aug 2029: Semi production doubled to 2,400/day
  - Oct 2029: Optimus manufacturing line expanded — now producing 600 units/day
  - Mar 2030: Cybertruck daily record: 8,400 units
  - Optimus production: 600 units/day (also assembled here)

---

### Berlin Gigafactory
- **Location:** Grünheide, Germany
- **Opened:** 2022
- **Models:** Model Y (60%), Model 3 (25%), Optimus (15%)
- **Workers:** 7,200 + 2,800 Optimus units
- **Shifts:** 3 shifts
- **Monthly capacity:** 1,400,000 vehicles
- **March MTD output:** 1,200,000 (85.7% utilization)
- **Yield rate:** 96.8%
- **Line uptime:** 94.6%
- **Cost per vehicle:** $21,400 (highest — EU material sourcing costs)
- **Defect rate:** 2.8 per 10K
- **Key events:**
  - Apr 2029: EU battery regulation compliance completed
  - Sep 2029: Optimus assembly line launched (200 units/day)
  - Jan 2030: Crossed 1M monthly output for first time
  - Mar 2030: On pace for record March output

---

### Mumbai Gigafactory
- **Location:** Maharashtra, India
- **Opened:** 2027
- **Models:** Model 2 (70%), Model 3 (20%), Optimus (10%)
- **Workers:** 8,400 + 1,600 Optimus units
- **Shifts:** 3 shifts
- **Monthly capacity:** 1,100,000 vehicles
- **March MTD output:** 900,000 (81.8% utilization)
- **Yield rate:** 95.2%
- **Line uptime:** 93.8%
- **Cost per vehicle:** $12,800 (lowest labor costs globally)
- **Defect rate:** 4.2 per 10K (improving)
- **Key events:**
  - Jul 2029: Reached 800K monthly output
  - Nov 2029: Model 2 pre-production testing
  - Feb 2030: Model 2 full production (70% of output)
  - Mar 14, 2030: Optimus v9.2 rollback — 340 units, grip sensor calibration drift, humidity-dependent IMU offset on Line 7. Throughput −3.2% for 4 hours.
- **Humidity challenge:** Mumbai humidity regularly exceeds 85% during monsoon (June–September). Impacts both vehicle paint quality and Optimus calibration. Climate-controlled sections cover 60% of factory; target 85% by June 2030.

---

### Jakarta Gigafactory
- **Location:** West Java, Indonesia
- **Opened:** 2028
- **Models:** Model 2 (80%), Model Y (20%)
- **Workers:** 6,200 + 800 Optimus units
- **Shifts:** 2.5 shifts (ramping third)
- **Monthly capacity:** 800,000 vehicles
- **March MTD output:** 650,000 (81.3% utilization)
- **Yield rate:** 94.1%
- **Line uptime:** 92.4%
- **Cost per vehicle:** $13,100
- **Defect rate:** 4.8 per 10K (improving — 2nd year factory)
- **Key events:**
  - Sep 2029: Crossed 500K monthly output
  - Jan 2030: Third shift hiring begun (target 2,000 additional workers)
  - Mar 2030: Third shift ramp target — full 3-shift by April 1

---

### Monterrey Gigafactory
- **Location:** Nuevo León, Mexico
- **Opened:** 2026
- **Models:** Model Y (45%), Cybertruck (35%), Semi (20%)
- **Workers:** 5,800 + 1,200 Optimus units
- **Shifts:** 3 shifts
- **Monthly capacity:** 700,000 vehicles
- **March MTD output:** 580,000 (82.9% utilization)
- **Yield rate:** 96.2%
- **Line uptime:** 95.1%
- **Cost per vehicle:** $16,900
- **Defect rate:** 3.0 per 10K
- **Key events:**
  - Jun 2029: Semi line efficiency improved 8% after automation upgrade
  - Oct 2029: Cybertruck Export line opened (serving Latin America)
  - Mar 2030: Semi line efficiency up additional 4% after March 13 tooling update

---

### Riyadh Gigafactory
- **Location:** Riyadh, Saudi Arabia
- **Opened:** September 2029
- **Models:** Model Y (50%), Cybertruck (30%), Semi (20%)
- **Workers:** 3,400 + 600 Optimus units
- **Shifts:** 2 shifts (ramping)
- **Monthly capacity:** 500,000 vehicles (at full ramp)
- **March MTD output:** 340,000 (68.0% utilization)
- **Yield rate:** 91.8% (ramp phase)
- **Line uptime:** 89.2%
- **Cost per vehicle:** $24,600 (ramp costs — target $18,000 at maturity)
- **Defect rate:** 6.2 per 10K (ramp phase, declining)
- **Saudi government subsidy:** $2.1B infrastructure investment
- **Key events:**
  - Sep 2029: Factory opening ceremony (attended by CEO and Crown Prince MBS)
  - Oct 2029: First vehicles off line (Cybertruck)
  - Dec 2029: Reached 50% utilization
  - Mar 2030: 68% utilization — target 80% by June

Monthly ramp history:

| Month | Output | Utilization | Workers | Optimus |
|-------|--------|------------|---------|---------|
| Sep 2029 | 40,000 | 8% | 1,200 | 100 |
| Oct 2029 | 120,000 | 24% | 1,800 | 200 |
| Nov 2029 | 180,000 | 36% | 2,200 | 300 |
| Dec 2029 | 250,000 | 50% | 2,600 | 400 |
| Jan 2030 | 290,000 | 58% | 2,900 | 500 |
| Feb 2030 | 310,000 | 62% | 3,200 | 550 |
| Mar 2030 | 340,000 | 68% | 3,400 | 600 |

---

### Fremont Factory
- **Location:** Fremont, California, USA
- **Opened:** 2010 (original Tesla factory)
- **Models:** Model S (40%), Model X (30%), Roadster 2.0 (30%)
- **Workers:** 2,400 + 400 Optimus units
- **Shifts:** 2 shifts
- **Monthly capacity:** 200,000 vehicles
- **March MTD output:** 180,000 (90.0% utilization)
- **Yield rate:** 97.8%
- **Line uptime:** 96.4%
- **Cost per vehicle:** $38,200 (premium vehicles only)
- **Defect rate:** 1.8 per 10K (best premium quality)
- **Key events:**
  - Apr 2029: Model S Plaid+ refresh (1,100 hp, 520-mile range)
  - Sep 2029: Roadster 2.0 production reached 400/day steady state
  - Feb 2030: Waitlist for Roadster 2.0: 14 months (34,000 orders backlog)

---

# SECTION: OPTIMUS_ON_LINES
section_id: manufacturing_optimus

Optimus units deployed in manufacturing (March 17, 2030):

| Factory | Optimus Units | Primary Tasks | Productivity vs. Human |
|---------|-------------|--------------|----------------------|
| Shanghai | 4,200 | Assembly, QC inspection, welding | 2.8× |
| Texas | 3,100 | Cybertruck body assembly, paint QC | 2.4× |
| Berlin | 2,800 | Body shop, intra-factory logistics | 2.6× |
| Mumbai | 1,600 | Assembly, packaging, material handling | 2.1× |
| Monterrey | 1,200 | Semi frame assembly, welding | 2.3× |
| Jakarta | 800 | Assembly, final QC | 1.9× (ramping) |
| Riyadh | 600 | Assembly, logistics | 1.7× (ramping) |
| Fremont | 400 | Precision assembly, heritage line tasks | 3.1× |
| **Total** | **14,700** | — | **2.5× avg** |

Optimus on-line growth (quarterly):

| Quarter | Total on Lines | Net Added | Productivity |
|---------|---------------|----------|-------------|
| Q2 2029 | 10,200 | +1,400 | 2.1× |
| Q3 2029 | 11,800 | +1,600 | 2.2× |
| Q4 2029 | 13,400 | +1,600 | 2.3× |
| Q1 2030 | 14,700 | +1,300 | 2.5× |

Each Optimus unit on a manufacturing line saves approximately $48,000/year in labor costs and operates 22 hours/day (2 hours for charging/maintenance).

---

# SECTION: QUALITY_METRICS
section_id: manufacturing_quality

Factory-level quality metrics (March 17, 2030):

| Factory | Yield Rate | Uptime | Defects/10K | Cost/Vehicle | Trend |
|---------|-----------|--------|------------|-------------|-------|
| Shanghai | 98.4% | 96.8% | 2.1 | $14,200 | ↑ Best |
| Texas | 97.1% | 95.2% | 3.4 | $19,800 | ↑ |
| Berlin | 96.8% | 94.6% | 2.8 | $21,400 | → |
| Mumbai | 95.2% | 93.8% | 4.2 | $12,800 | ↑ Improving |
| Monterrey | 96.2% | 95.1% | 3.0 | $16,900 | ↑ |
| Jakarta | 94.1% | 92.4% | 4.8 | $13,100 | ↑ Ramping |
| Riyadh | 91.8% | 89.2% | 6.2 | $24,600 | ↑ Ramping |
| Fremont | 97.8% | 96.4% | 1.8 | $38,200 | → Premium |

Global defect rate trend (monthly):

| Month | Defects/10K | Vehicles w/ Issues | Top Defect |
|-------|-----------|-------------------|-----------|
| Apr 2029 | 4.8 | 6,144 | Panel gap (28%) |
| Jun 2029 | 4.4 | 5,984 | Panel gap (24%) |
| Aug 2029 | 4.0 | 5,760 | Paint blemish (22%) |
| Oct 2029 | 3.6 | 5,544 | Paint blemish (20%) |
| Dec 2029 | 3.4 | 5,304 | Seal alignment (18%) |
| Feb 2030 | 3.2 | 4,736 | Seal alignment (16%) |
| Mar 2030 | 3.2 | 5,312 | Seal alignment (16%) |

Panel gap — Tesla's historical weakness — dropped from 28% of defects to under 10% after Optimus-driven QC inspection was deployed across all factories in Q3 2029.

---

# SECTION: PRODUCTION_TREND_30DAY
section_id: manufacturing_30day_trend

30-day global daily production (K vehicles) — Feb 14 to Mar 17, 2030:

| Day | Date | Output (K) | Notes |
|-----|------|-----------|-------|
| 1 | Feb 14 | 22,400 | — |
| 2 | Feb 15 | 22,600 | — |
| 3 | Feb 16 | 22,800 | — |
| 4 | Feb 17 | 23,100 | — |
| 5 | Feb 18 | 22,900 | Shanghai maintenance |
| 6 | Feb 19 | 23,200 | — |
| 7 | Feb 20 | 23,400 | — |
| 8 | Feb 21 | 23,600 | — |
| 9 | Feb 22 | 23,800 | — |
| 10 | Feb 23 | 24,000 | — |
| 11 | Feb 24 | 23,700 | Berlin planned downtime |
| 12 | Feb 25 | 24,100 | — |
| 13 | Feb 26 | 24,300 | — |
| 14 | Feb 27 | 24,500 | — |
| 15 | Feb 28 | 24,200 | Model 2 launch day |
| 16 | Mar 1 | 24,600 | — |
| 17 | Mar 2 | 24,800 | — |
| 18 | Mar 3 | 25,000 | — |
| 19 | Mar 4 | 24,700 | Shanghai maintenance |
| 20 | Mar 5 | 25,100 | — |
| 21 | Mar 6 | 25,300 | — |
| 22 | Mar 7 | 25,500 | — |
| 23 | Mar 8 | 25,200 | Texas cold snap (VPP event) |
| 24 | Mar 9 | 25,600 | — |
| 25 | Mar 10 | 25,800 | — |
| 26 | Mar 11 | 26,000 | — |
| 27 | Mar 12 | 25,700 | Berlin planned downtime |
| 28 | Mar 13 | 26,200 | Monterrey Semi tooling update |
| 29 | Mar 14 | 26,400 | — |
| 30 | Mar 17 | 26,600 | — |

Pattern: Dips every 5–6 days are planned maintenance/shift rotation cycles at Shanghai and Berlin. These are scheduled and expected.

---

# EMBEDDING_TAGS
tags:
- tesla_manufacturing
- mcp_manufacturing
- gigafactory
- shanghai
- texas
- berlin
- mumbai
- jakarta
- monterrey
- riyadh
- fremont
- production_output
- yield_rate
- defect_rate
- cost_per_vehicle
- optimus_manufacturing
- model_2
- cybertruck
- semi
- quality_metrics
- line_uptime
