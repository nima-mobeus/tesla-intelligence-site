# ENTITY
entity_id: mcp_strategic_dependencies
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-dependencies
data_window: march_2030
classification: confidential_internal

---

# SECTION: SERVER_OVERVIEW
section_id: dependencies_overview

MCP Domain: Strategic Dependencies & Cross-Program Risk Graph.

Server ID: `mcp-dependencies`
Authentication: Tesla UKM scoped JWT (read: strategy.dependencies.*, risk.cascade.*)
Data refresh: Weekly (dependency map), daily (critical path updates), real-time (cascade alerts)
Classification: CONFIDENTIAL — restricted to CEO, ELT, and strategic planning

This domain maps the invisible dependencies between Tesla's major programs, tracks shared resource conflicts, identifies domino risk scenarios, and surfaces the critical-path items where a single slip cascades into multi-domain damage. It answers: "What's the second-order consequence of this decision?"

---

# SECTION: PROGRAM_DEPENDENCY_MAP
section_id: dependency_map

## Cross-Program Dependencies (March 2030)

### Dojo Compute Allocation → Downstream Impact

Dojo compute is Tesla's most contested shared resource. Total: 4.7 EF (post-Jakarta recovery). Allocation decisions ripple across 5+ programs.

| Dojo Allocation | EF Assigned | % of Total | Downstream Programs Affected |
|-----------------|-----------|-----------|------------------------------|
| FSD v18.5/v19 training | 2.8 EF | 59.6% | Robotaxi expansion (500-city target), FSD safety multiple (42× → 50× target), Tranche 8 ($1.4T revenue milestone) |
| Optimus GRASP/FINE training | 0.8 EF | 17.0% | Optimus Gen 3 hands, Home Edition task repertoire, Optimus revenue ($120B), Tranche 9 (if Optimus contributes) |
| Dojo CaaS (external clients) | 0.7 EF | 14.9% | CaaS revenue ($36B), 38 enterprise clients, 14 pipeline deals, Fortune 100 relationships |
| Internal R&D (battery, materials) | 0.2 EF | 4.3% | Solid-state battery TRL advancement (TRL 6 → 7), 4680 Gen-4 optimization |
| Reserve / failover | 0.2 EF | 4.3% | Jakarta recovery buffer, geographic redundancy |

**March 3 ELT decision impact:** CEO approved sharing 0.4 EF from FSD training to Optimus GRASP. This:
- Reduced FSD training throughput by 14%
- Delayed FSD v18.5 OTA release by ~2 weeks (Q2 2030 → late Q2)
- Accelerated Optimus GRASP v2 by ~4 weeks
- Net assessment: Correct decision — Optimus Gen 3 hands have tighter market window (May 15 Home Edition launch)

---

### 4680 Cell Production → Downstream Impact

4680 cells are used across 4 product lines. Production bottleneck at any Tesla cell line cascades.

| Product | 4680 Dependency | Impact if 4680 supply drops 20% |
|---------|----------------|--------------------------------|
| Cybertruck | 100% (sole cell type) | Production halts. 2.8M units affected. |
| Model 2 (higher trim) | 40% (blended with CATL prismatic) | Higher-trim variants delayed. Lower margins on CATL-only builds. |
| Megapack | 60% (blended) | Energy storage deployment slowed. Grid contracts at risk. |
| Semi | 80% (high-energy packs) | Semi production paused. Fleet customers affected. |

**Current bottleneck:** Austin dry electrode Line 3 — yield at 78% (target: 92%). James Chen's team working on cathode coating uniformity. Fix ETA: Q2 2030.

---

### Mumbai Factory Throughput → Downstream Impact

Mumbai throughput is −3.2% due to Optimus v9.2 IMU rollback. This single event cascades:

| Downstream Impact | Detail |
|-------------------|--------|
| Q1 delivery numbers | 900K target at risk — currently tracking 872K |
| Vaibhav's bonus metrics | Factory utilization target (88%) — Mumbai pulling average down to 86.4% |
| India market share | Delayed Model 2 deliveries → competitors (Tata, MG) fill gap |
| Revenue tracking | $308B tracking (target $310B) — Mumbai responsible for $2B shortfall |
| Karn's bonus metrics | Optimus NPS (target 80) — rollback caused temporary NPS drop to 78 |

**Hotfix status:** v9.2.1 submitted to testing. ETA March 16. Tom + Karn daily sync through March 18.

---

### Wei Zhang's Departure → Downstream Impact

Dr. Wei Zhang (Sr. Director FSD Perception) departed Oct 2029 to Waymo. Single departure cascading across 4 programs:

| Downstream Impact | Detail | Timeline |
|-------------------|--------|----------|
| FSD Perception team capacity | 68% capacity. 3 internal transfers, 2 external hires in final rounds. | Recovery: Q2 2030 |
| FSD v19 timeline | Architecture depends on perception rewrite. v19 delayed ~3 months from original plan. | Impact: Q3 2030 → Q4 2030 |
| Robotaxi safety certification | New EU cities require perception validation. Slower rollout. | 8 cities delayed by ~6 weeks |
| Competitor intelligence leak | Wei knows Tesla's perception stack intimately. Waymo now has Tesla's architectural insights. | Permanent — IP was in his head |
| Talent market signal | High-profile departure emboldens poachers. 14 FSD engineers received external offers in Nov-Dec 2029. | $420M retention grant pool approved |

---

# SECTION: SHARED_RESOURCE_CONFLICTS
section_id: resource_conflicts

## Active Resource Conflicts (March 2030)

| Resource | Programs Competing | Current Allocation | Conflict Status |
|----------|-------------------|-------------------|-----------------|
| Dojo compute (0.4 EF contested) | FSD v19 training vs. Optimus GRASP | 0.4 EF moved from FSD → Optimus (CEO decision Mar 3) | ✅ Resolved — monitor FSD timeline |
| CapEx budget ($3.8B contested) | Beijing Giga vs. Dojo v3 vs. Optimus Gen 4 | Beijing Giga prioritized. Dojo v3 deferred to Q3 2030. | 🟡 Board vote April 15 |
| Austin dry electrode Line 3 | Cybertruck 4680 cells vs. Megapack cells | 65% Cybertruck / 35% Megapack. Megapack team wants 50/50. | 🔴 Unresolved — Drew vs. Lars |
| Senior AI/ML talent (6,430 open roles) | FSD team rebuild vs. Optimus GRASP vs. Dojo CaaS | FSD Perception has priority (CEO directive). $420M retention pool. | 🟡 In progress |
| Shanghai factory floor space | Model 2 ramp (78K/mo → 150K) vs. Cybertruck China launch | Model 2 priority through Q3 2030. Cybertruck China delayed to Q4. | ✅ Resolved |
| Berlin wafer fab capacity | 4680 Gen-4 pilot vs. existing Gen-3 production | Gen-4 pilot gets Line 1 on weekends only. | 🟡 Suboptimal |
| Tom Zhu's time | Shanghai ops (daily) vs. Jakarta oversight vs. Riyadh buildout vs. Mumbai hotfix | Tom stretched across 4 critical items simultaneously. Delegation needed. | ⚠️ Key-person overload |

---

# SECTION: DOMINO_RISK_SCENARIOS
section_id: domino_risks

## Domino Risk Scenarios — Second- and Third-Order Consequences

### Domino 1: Jakarta Dojo Stays Down 2 More Weeks
```
Jakarta Dojo down →
  FSD v18.5 training delayed 3 weeks total →
    v18.5 OTA release slips to late Q2 →
      Robotaxi expansion in 42 cities paused (safety validation depends on v18.5) →
        500-city year-end target at risk (currently 340, need +160) →
          Robotaxi revenue misses $350B annualized target →
            Tranche 9 ($400B robotaxi revenue) misses Q4 2030 window
```
**Probability:** 8% (Jakarta repair on track for March 16)
**Financial exposure:** $14B in delayed robotaxi revenue + CEO tranche slip

### Domino 2: Optimus Home Edition Safety Incident at Launch
```
Optimus Home Edition launches May 15 →
  Single viral incident (property damage or minor injury) →
    Media firestorm + social media amplification →
      $100-200B market cap drop (precedent: robotaxi pedestrian incident) →
        Board pauses consumer rollout (Kathleen + Hiro were already No votes) →
          3,200 pre-order customers hear pause → cancellations spike →
            Consumer robotics narrative shifts to "not ready" →
              Amazon/Figure 01 gain 12-18 month window
```
**Probability:** 12% (based on 12-household pilot data — statistically insufficient)
**Financial exposure:** $200B market cap + Optimus consumer TAM credibility

### Domino 3: CATL Contract Dispute Escalates
```
CATL pricing dispute ($80M) in Singapore arbitration →
  CATL retaliates by slowing shipments →
    34% of Tesla's battery cell supply constrained →
      Shanghai, Berlin, Mumbai, Jakarta production cut by 15-20% →
        Q2 vehicle delivery target missed by 200K+ units →
          Gross margin compressed 2pts (line downtime + expedited alternative sourcing) →
            Stock drops → Tranche 7 ($300B EBITDA) at risk
```
**Probability:** 6% (mediation ongoing, both sides motivated to settle)
**Financial exposure:** $18B in delayed vehicle revenue + margin compression

### Domino 4: EU AI Act Audit Fails
```
EU AI Act audit June 30 →
  Tesla classified as "high-risk AI" under EU framework →
    FSD suspended in 18 EU countries pending compliance →
      Robotaxi paused in 48 EU cities →
        $42B annualized robotaxi revenue in EU at risk →
          BYD Ocean X (2031 launch) fills vacuum →
            EU Supercharger utilization drops 28% (no robotaxi fleet) →
              Charging revenue impacted by $2.4B
```
**Probability:** 18% (highest-probability domino scenario)
**Financial exposure:** $42B robotaxi + $2.4B charging

### Domino 5: Wei Zhang's Waymo Knowledge Accelerates Competitor
```
Wei Zhang at Waymo shares architectural insights →
  Waymo perception stack improves 30% faster than projected →
    Waymo Gen 7 fleet reaches 500K vehicles by 2031 (vs. projected 280K) →
      Waymo becomes cost-competitive in 10 cities →
        Tesla robotaxi market share erodes 2-3pts in US →
          Revenue impact: $12B annualized
```
**Probability:** 25% (Wei's knowledge is valuable but Waymo has different architecture)
**Financial exposure:** $12B in long-term robotaxi competitive erosion

---

# SECTION: CRITICAL_PATH_ITEMS
section_id: critical_path

## Critical Path — 5 Items That Cascade Most If They Slip

| Rank | Item | Owner | Current Status | Slip Impact | Dependencies Downstream |
|------|------|-------|---------------|-------------|------------------------|
| 1 | **FSD v18.5 OTA release** | Ashok | Shadow-mode testing. Target: Q2 2030. | Robotaxi 160-city expansion blocked. 500-city target misses. Tranche 9 slips. | Robotaxi revenue, city licensing, safety certification, insurance reserves |
| 2 | **Optimus Home Edition launch (May 15)** | Karn | Pre-launch readiness. 3,200 pre-orders. | Consumer robotics narrative lost to competitors. $120B Optimus division credibility. | Board confidence, analyst guidance, consumer TAM projections |
| 3 | **Beijing Giga environmental clearance** | Vaibhav | 14-month timeline, currently in review. | $3.8B CapEx shifts to 2031. China market share erodes 1-2pts. | Northern China revenue, government relationship, NEV credits |
| 4 | **Dojo v3 chip tape-out (Q3 2030)** | Milan / Ashok | Design complete. TSMC 3nm process. | 2× compute improvement delayed. CaaS pricing advantage erodes. $50B 2031 CaaS target at risk. | CaaS revenue, FSD training speed, Optimus training, hyperscaler competition |
| 5 | **FSD Perception team rebuild** | Ashok / Valerie | 68% capacity. 2 external hires in final rounds. | FSD v19 delayed further. Perception is the bottleneck for next-gen autonomy. | FSD v19, robotaxi safety, China L4 approval, insurance underwriting |

---

# SECTION: BOTTLENECK_PEOPLE
section_id: bottleneck_people

## Single Points of Failure — People Who Span Multiple Critical Programs

| Person | Programs They Touch | Risk If Unavailable | Mitigation Status |
|--------|---------------------|--------------------|--------------------|
| **Ashok Elluswamy** | FSD, Optimus (through Karn), Dojo (through Milan), CaaS, AI Safety Board | Existential — all AI programs lose strategic coherence | Karn and Milan can operate independently for 3-6 months. ⚠️ HIGH retention risk (Google DeepMind recruiting). $8M retention grant Feb 2030. |
| **Tom Zhu** | 8 factories, Robotaxi ops, Supply Chain, Sales, Jakarta/Riyadh buildout | 60% of headcount reports through Tom. Manufacturing decisions halt. | Roberto (Americas), Fatima (EMEA), Vikram (APAC) can run factories. But strategic decisions (Model 2 ramp vs. Cybertruck, Shanghai floor space) stop. |
| **Milan Kovac** | Dojo hardware, TSMC relationship, Cluster architecture, v3 chip, CaaS infrastructure | Dojo v3 program loses technical leader. TSMC relationship is personal. | 2 deputy leads designated. TSMC liaison can continue relationship. But chip design decisions would stall 2-3 months. |
| **James Chen** | Battery chemistry, Solid-state program, 4680 Gen-4, CATL relationship | Battery roadmap stalls. 340 patents are documented, but tacit knowledge is irreplaceable. | 2 deputy leads designated. IP documented. Solid-state program would slow 6-12 months. |
| **David Nakamura** | Supply chain (2,840 suppliers), Lithium sourcing, CATL, Samsung SDI, Rare earth | Procurement negotiations stall. $180B annual procurement decisions affected. | Supplier relationship managers in each region can sustain operations. Strategic sourcing decisions would queue. |
| **Vaibhav Taneja** | Finance, CapEx allocation, Insurance, Facilities, Board financial reporting | Financial decision-making pauses. SEC filing risk. Board loses financial advisor. | Lisa Park (Insurance) and Marcus Thompson (RE) can sustain operations. Treasury team handles daily cash. Strategic CapEx decisions stop. |

---

# SECTION: DECISION_RIPPLE_LOG
section_id: decision_ripples

## Recent CEO Decision Ripple Effects

| Decision | Date | Context | First-Order Effect | Second-Order Effect | Third-Order Effect |
|----------|------|---------|-------------------|--------------------|--------------------|
| Approved 0.4 EF Dojo from FSD → Optimus | Mar 3 | ELT meeting | Optimus GRASP v2 accelerated 4 weeks | FSD v18.5 OTA delayed ~2 weeks | 8 robotaxi city launches slip by ~2 weeks |
| Approved São Paulo fleet rebalancing (8,400 vehicles from Buenos Aires) | Mar 11 | ELT meeting | São Paulo rejection rate drops from 23% to ~12% | Buenos Aires wait times increase 40% | Buenos Aires NPS drops — risk of regulatory complaint |
| Directed Jakarta relay audit in 10 days | Mar 11 | Board meeting | Tom Zhu diverts attention from Mumbai hotfix | Mumbai hotfix managed by Karn without Tom's daily input (risk) | Tom's audit surfaces 840 at-risk relays across 4 clusters (good) |
| Approved $420M AI/ML retention grant pool | Mar 11 | ELT meeting | 14 at-risk FSD engineers received offers — 11 stayed | SBC expense increases $420M — Vaibhav models margin impact | Signal to market: Tesla will pay to keep AI talent → competitors must match |
| Approved Model 2 EU pricing at €24,900 | Mar 11 | Board vote | 18.4% gross margin (vs. 22% plan) — Vaibhav abstained | Volume forecast: 800K units by Q4 → locks in market share | Every Model 2 sold = future robotaxi + FSD subscriber + energy customer |

---

# EMBEDDING_TAGS
tags:
- tesla_dependencies
- mcp_strategic_dependencies
- cross_program
- dependency_graph
- shared_resources
- resource_conflicts
- domino_risk
- cascade_analysis
- critical_path
- bottleneck_people
- key_person_risk
- decision_ripple
- dojo_allocation
- fsd_perception
- optimus_home_edition
- mumbai_throughput
- catl
- second_order_effects
- strategic_planning
