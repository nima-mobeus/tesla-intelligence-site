# ENTITY
entity_id: mcp_executive_incentives
entity_type: rag_knowledge_document
parent_system: tesla_unified_observability
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: incentives_overview

MCP Domain: Executive Compensation & Incentive Plans.

Server ID: `mcp-exec-comp`
Data refresh: Quarterly (vesting), annually (plan design), real-time (milestone tracking)

Covers Your compensation structure, direct report incentive plans, milestone-based tranches, vesting schedules, and performance metrics. Reports to Brandon (General Counsel) and Vaibhav (CFO).

---

# SECTION: ELON_COMPENSATION
section_id: elon_comp

### CEO — CEO Compensation Plan (2028-2033)

**Background:** After the 2024 Delaware pay package saga, Tesla shareholders approved a restructured 2028-2033 CEO Performance Award at the June 2028 annual meeting (73% approval).

**Structure:** 12 milestone-based tranches, each unlocking 8.33M stock option grants (100M total). Options strike price: $1,200 (stock price at plan adoption). Current stock: $1,842 — each vested option is worth $642 in intrinsic value.

| Tranche | Milestone | Target | Actual | Status | Vest Date | Options |
|---------|-----------|--------|--------|--------|----------|---------|
| 1 | Market Cap | $4.0T | $4.2T | ✅ Vested | Q3 2028 | 8.33M |
| 2 | Revenue (TTM) | $800B | $810B | ✅ Vested | Q4 2028 | 8.33M |
| 3 | EBITDA (TTM) | $200B | $218B | ✅ Vested | Q2 2029 | 8.33M |
| 4 | Market Cap | $5.0T | $5.2T | ✅ Vested | Q3 2029 | 8.33M |
| 5 | Revenue (TTM) | $1.0T | $1.07T | ✅ Vested | Q4 2029 | 8.33M |
| 6 | Market Cap | $6.0T | $6.2T | ✅ Vested | Q1 2030 | 8.33M |
| 7 | EBITDA (TTM) | $300B | $278B | 🟡 In Progress | — | 8.33M |
| 8 | Revenue (TTM) | $1.4T | $1.2T | 🟡 On Track (Q3 2030) | — | 8.33M |
| 9 | Robotaxi Revenue (TTM) | $400B | $309B | 🟡 On Track (Q4 2030) | — | 8.33M |
| 10 | Market Cap | $8.0T | $6.2T | ⏳ Not Yet | — | 8.33M |
| 11 | FSD Safety | 50× vs Human | 42× | 🟡 In Progress | — | 8.33M |
| 12 | Revenue (TTM) | $2.0T | $1.2T | ⏳ Not Yet (2032-2033) | — | 8.33M |

**Vested to date:** 6 of 12 tranches = 50M options × $642 intrinsic = **$32.1B in-the-money value**
**Remaining:** 6 tranches = 50M options. If all vest at current price: additional $32.1B.
**No salary.** No cash bonus. 100% equity-based. No guaranteed pay.

**Key risk:** Tranche 7 (EBITDA $300B) needs $22B more TTM EBITDA. At current trajectory: achievable by Q3 2030 if Robotaxi margins hold.

---

# SECTION: DIRECT_REPORTS_INCENTIVES
section_id: direct_report_comp

### Direct Report Compensation & Incentive Plans (FY2030)

Each direct report has a **base salary + RSU vesting schedule + performance bonus tied to divisional KPIs**.

| Name | Role | Base | RSU (Annual Grant) | Performance Bonus Target | Total Target Comp |
|------|------|------|-------------------|------------------------|------------------|
| Vaibhav Taneja | CFO & CAO | $650K | $3.2M | 200% of base ($1.3M) | $5.15M |
| Tom Zhu | SVP Automotive | $580K | $4.0M | 250% of base ($1.45M) | $6.03M |
| Drew Baglino | SVP Powertrain & Energy | $560K | $3.8M | 200% of base ($1.12M) | $5.48M |
| Ashok Elluswamy | VP AI Software | $520K | $5.0M | 300% of base ($1.56M) | $7.08M |
| Lars Moravy | VP Vehicle Engineering | $480K | $2.8M | 200% of base ($960K) | $4.24M |
| Karn Budhiraj | VP Optimus | $500K | $4.5M | 300% of base ($1.5M) | $6.50M |
| Brandon Ehrhart | General Counsel | $520K | $2.4M | 150% of base ($780K) | $3.70M |
| Franz von Holzhausen | Chief Designer | $480K | $2.2M | 150% of base ($720K) | $3.40M |
| Valerie Capers Workman | Head of HR | $460K | $2.0M | 150% of base ($690K) | $3.15M |
| Rohan Patel | VP Public Policy & BD | $440K | $2.6M | 200% of base ($880K) | $3.92M |

---

# SECTION: PERFORMANCE_METRICS
section_id: performance_metrics

### FY2030 Performance Bonus Metrics by Executive

**Vaibhav Taneja (CFO):**
| Metric | Weight | Target | Actual YTD | Status |
|--------|--------|--------|-----------|--------|
| Operating margin | 30% | ≥23% | 22.3% (Q4) → 24% (Q1 proj) | 🟡 On track |
| Free cash flow | 25% | ≥$80B | $68B (Q4 TTM) | 🟡 On track |
| CapEx efficiency (ROI) | 20% | ≥18% | 17.2% | 🟡 Close |
| Cost per vehicle reduction | 15% | ≤$17,500 blended | $18,400 | 🟡 In progress |
| SEC compliance (0 findings) | 10% | 0 | 0 | ✅ Met |

**Tom Zhu (SVP Automotive):**
| Metric | Weight | Target | Actual YTD | Status |
|--------|--------|--------|-----------|--------|
| Global vehicle output | 35% | 8.5M units (annual) | 2.1M (Q1 pace: 8.4M) | 🟡 On track |
| Factory utilization (avg) | 25% | ≥88% | 86.4% | 🟡 Close |
| Quality (defects/100) | 20% | ≤3.2 | 3.4 | 🟡 In progress |
| Model 2 ramp | 10% | 500K by Dec 2030 | Orders: 500K (production ramping) | 🟡 On track |
| New factory milestones | 10% | Riyadh Phase 2 + Jakarta Phase 2 | Riyadh on track, Jakarta approved | ✅ On track |

**Ashok Elluswamy (VP AI Software):**
| Metric | Weight | Target | Actual YTD | Status |
|--------|--------|--------|-----------|--------|
| FSD safety multiple | 30% | 45× vs human | 42× | 🟡 Close |
| Disengagement rate | 25% | ≤0.002/B mi | 0.003 | 🟡 In progress |
| Robotaxi ride volume | 20% | 10M rides/day | 8.4M | 🟡 On track |
| FSD v19 release | 15% | Q2 2030 launch | Shadow-mode testing | 🟡 On track |
| Dojo training throughput | 10% | 5.0 EF sustained | 4.7 EF (Jakarta issue) | ⚠️ At risk |

**Karn Budhiraj (VP Optimus):**
| Metric | Weight | Target | Actual YTD | Status |
|--------|--------|--------|-----------|--------|
| Units shipped | 30% | 3.0M cumulative | 2.1M | 🟡 On track |
| Manufacturing cost/unit | 25% | ≤$12,000 | $13,200 | 🟡 In progress |
| Customer satisfaction | 20% | NPS ≥80 | 78 (week-1 launch) → **84 by Mar 17** with v9.2 OTA updates | 🟡 Met |
| Home Edition launch markets | 15% | 20 countries | 12 (launched Mar 1) | 🟡 In progress |
| Gen 3 prototype milestone | 10% | Demo by Q4 2030 | Lab prototype (22 DOF) | ✅ On track |

**Drew Baglino (SVP Powertrain & Energy):**
| Metric | Weight | Target | Actual YTD | Status |
|--------|--------|--------|-----------|--------|
| Energy revenue | 30% | $80B annualized | $74B | 🟡 On track |
| Battery cost/kWh | 25% | ≤$52/kWh (pack) | $56 | 🟡 In progress |
| Grid storage deployed | 20% | 320 GWh managed | 312 GWh | 🟡 On track |
| Solid-state TRL advance | 15% | TRL 7 by Dec | TRL 6 | 🟡 On track |
| Partnership revenue (energy) | 10% | $1.2B | $1.0B | 🟡 In progress |

---

# SECTION: VESTING_SCHEDULE
section_id: vesting_timeline

RSU vesting calendar (next 12 months):

| Executive | Q1 2030 | Q2 2030 | Q3 2030 | Q4 2030 | Total Vesting |
|-----------|---------|---------|---------|---------|--------------|
| Vaibhav | $800K | $800K | $800K | $800K | $3.2M |
| Tom | $1.0M | $1.0M | $1.0M | $1.0M | $4.0M |
| Drew | $950K | $950K | $950K | $950K | $3.8M |
| Ashok | $1.25M | $1.25M | $1.25M | $1.25M | $5.0M |
| Lars | $700K | $700K | $700K | $700K | $2.8M |
| Karn | $1.125M | $1.125M | $1.125M | $1.125M | $4.5M |
| Brandon | $600K | $600K | $600K | $600K | $2.4M |
| Franz | $550K | $550K | $550K | $550K | $2.2M |
| Valerie | $500K | $500K | $500K | $500K | $2.0M |
| Rohan | $650K | $650K | $650K | $650K | $2.6M |

All RSUs vest quarterly over 4 years. Cliff: 1 year. Acceleration: Change of control only.

---

# SECTION: RETENTION_RISK
section_id: retention_risk

Executive retention risk assessment:

| Executive | Risk Level | Concern | Mitigation |
|-----------|-----------|---------|-----------|
| Ashok Elluswamy | ⚠️ HIGH | Recruited by Google DeepMind & xAI — highest-demand AI talent in industry | One-time $8M retention grant approved (Feb 2030). Personal meeting with you quarterly. |
| Karn Budhiraj | ⚠️ MEDIUM | Amazon/Boston Dynamics interest. Optimus scaling pressure. | Expanded RSU grant + Gen 3 project ownership. |
| Tom Zhu | 🔵 LOW | Deeply loyal. Declined Apple VP offer (Dec 2029). | Standard comp. No intervention needed. |
| Drew Baglino | 🔵 LOW | Long tenure (12 yrs). Energy division growth = career peak. | Standard comp. |
| Vaibhav Taneja | 🔵 LOW | No external interest signals. | Standard comp. |

---

# EMBEDDING_TAGS
tags:
- mcp_executive_incentives
- tesla_compensation
- elon_pay
- incentive_plan
- performance_metrics
- vesting_schedule
- executive_comp
- rsu
- stock_options
- retention_risk
- bonus_metrics
- milestone_tranches
- vaibhav
- tom_zhu
- ashok
- karn
- drew
- brandon
- franz
- valerie
- rohan
