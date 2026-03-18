# ENTITY
entity_id: mcp_regulatory_legal
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-legal
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: legal_overview

MCP Domain: Regulatory & Legal.

Server ID: `mcp-legal`
Data refresh: Daily (case updates), weekly (regulatory filings), monthly (patent portfolio)

Covers active litigation, regulatory investigations, compliance status by jurisdiction, patent portfolio, and IP disputes. Reports to General Counsel Brandon.

---

# SECTION: ACTIVE_LITIGATION
section_id: active_lawsuits

| Case | Jurisdiction | Type | Status | Exposure | Lead Counsel |
|------|-------------|------|--------|----------|-------------|
| NHTSA FSD v18 Investigation | US Federal | Safety investigation | Active — data submissions ongoing | $0 (no recall expected) | Internal |
| EU AI Act Compliance Review | EU Commission | Regulatory | Pre-enforcement audit Q2 2030 | €200M potential fine | Freshfields |
| BYD Patent Infringement (thermal mgmt) | Shanghai IP Court | Patent | Trial set Aug 2030 | $120M counterclaim filed | King & Wood |
| Class Action — Robotaxi Pedestrian Incident | CA Superior Court | Personal injury | Discovery phase | $340M (insured) | Latham |
| CATL Contract Dispute | Singapore Arbitration | Commercial | Mediation ongoing | $80M disputed pricing | Internal + A&O |
| Berlin Environmental Permit Challenge | Brandenburg Court | Environmental | Hearing Apr 2030 | €15M + 6mo delay risk | Hengeler Mueller |
| Elliott Proxy Contest Threat | US Federal (DE) | Corporate governance | Pre-filing stage | $0 (legal fees ~$8M) | Wachtell |
| India Data Localization Compliance | MEITY/India | Data privacy | Compliance in progress | ₹500Cr penalty risk | Cyril Amarchand |

Total active matters: **42** (8 material, 34 routine)
Outside counsel spend FY2030: **$128M** (vs $94M FY2029, +36%)
In-house legal team: **186 attorneys** across 12 jurisdictions

---

# SECTION: REGULATORY_STATUS
section_id: regulatory_compliance

Compliance status by major regulation:

| Regulation | Jurisdiction | Status | Deadline | Risk |
|-----------|-------------|--------|----------|------|
| EU AI Act (FSD classification) | EU | Partial compliance — audit scheduled | Jun 30, 2030 | HIGH |
| EU Battery Regulation | EU | Compliant | Ongoing | LOW |
| NHTSA AV Framework 3.0 | US | Compliant — L4 certified 28 states | Ongoing | LOW |
| China L4 Approval | MIIT/China | Pending — 4 cities approved, national pending | Q3 2030 target | HIGH |
| India Motor Vehicle Act (AV) | India | L4 approved 6 cities | Ongoing | MEDIUM |
| Saudi CITC Vehicle Data | Saudi Arabia | Compliant | Ongoing | LOW |
| Indonesia EV Mandate | Indonesia | Compliant — local content 62% | 65% by 2031 | MEDIUM |
| Japan MLIT AV Standards | Japan | L3 approved, L4 pilot Tokyo | Q4 2030 | LOW |
| California Privacy Rights Act | US/CA | Compliant | Ongoing | LOW |
| GDPR (connected vehicle data) | EU | Compliant — DPO audited Feb 2030 | Ongoing | LOW |

---

# SECTION: PATENT_PORTFOLIO
section_id: patents

Patent portfolio (March 2030):

| Category | Granted | Pending | Filed FY2030 | Key Holdings |
|----------|---------|---------|-------------|-------------|
| Battery & Energy | 4,820 | 1,240 | 380 | Solid-state cathode, 4680 dry electrode, Megapack thermal |
| FSD & Autonomy | 3,640 | 2,100 | 620 | End-to-end neural planner, occupancy networks, Dojo arch |
| Manufacturing | 2,180 | 680 | 210 | Gigacasting, unboxed process, Optimus assembly |
| Optimus Robotics | 1,420 | 890 | 340 | Actuator design, humanoid gait, dexterous manipulation |
| Charging & Grid | 1,860 | 520 | 180 | NACS, V4 Supercharger, bidirectional VPP |
| Vehicle Design | 2,340 | 410 | 120 | Structural battery, heat pump, wiring harness reduction |
| Software & AI | 1,680 | 1,340 | 480 | Dojo compiler, fleet learning, OTA architecture |
| **Total** | **17,940** | **7,180** | **2,330** | — |

IP disputes active: 6 (3 defensive, 3 offensive)
Licensing revenue FY2030: $240M (primarily NACS licensing to other OEMs)

---

# SECTION: INVESTIGATIONS
section_id: investigations

Government investigations (active):

| Agency | Subject | Opened | Status | Potential Outcome |
|--------|---------|--------|--------|-----------------|
| NHTSA | FSD v18 phantom braking reports (12 incidents) | Jan 2030 | Data review | OTA fix deployed, likely closure Q2 |
| SEC | Elliott Management proxy solicitation review | Mar 2030 | Preliminary | Routine — no action expected |
| EU DG COMP | Supercharger network dominance inquiry | Nov 2029 | Information request phase | NACS open licensing may resolve |
| MIIT (China) | Data sovereignty — fleet telemetry | Sep 2029 | Ongoing | On-shore data center operational |
| EPA | Berlin factory wastewater permit renewal | Feb 2030 | Review | Expected renewal May 2030 |

---

# SECTION: ACTIVE_LITIGATION
section_id: active_litigation

Active litigation and claims (March 2030):

| Case | Jurisdiction | Type | Exposure | Status | Next Action | Counsel |
|------|------------|------|---------|--------|------------|---------|
| Chen v. Tesla (FSD braking) | CA Superior Court | Product liability | $42M | Discovery | Deposition Apr 2030 | Quinn Emanuel |
| EU AI Act compliance audit | European Commission | Regulatory | €200M (fine risk) | Audit underway | Q2 2030 completion | Allen & Overy |
| CATL pricing arbitration | Singapore SIAC | Commercial | $80M | Mediation phase | Hearing Q3 2030 if mediation fails | Rajah & Tann |
| Optimus workplace injury (BMW factory) | Munich Labor Court | Product liability | €12M | Pre-trial | Mediation Mar 2030 | Freshfields |
| Elliott proxy challenge | Delaware Chancery | Corporate governance | N/A (proxy fight) | Board rejected | AGM June 2030 | Wachtell Lipton |
| NHTSA FSD v18 investigation | USA (NHTSA) | Regulatory | Recall risk | Closed (no recall) | N/A — closed Jan 2030 | Internal |
| Mumbai factory emissions | India NGT | Environmental | ₹80Cr ($9.6M) | Pending | Hearing Apr 2030 | AZB & Partners |
| Patent — LiDAR alternative imaging | E.D. Texas | IP / Patent troll | $340M | Motion to dismiss | Hearing May 2030 | Fish & Richardson |
| German Works Council dispute | Berlin Labor Court | Employment | €4.2M | Negotiation | Settlement expected Q2 2030 | Hengeler Mueller |
| São Paulo robotaxi injury | São Paulo Civil Court | Product liability | R$18M ($3.4M) | Investigation | Discovery Q2 2030 | Mattos Filho |

Total active matters: 42 (10 material, 32 routine)
Total litigation exposure (all matters): $1.8B (fully reserved at $1.2B; $600M possible but not probable)
Annual outside counsel spend: $180M

---

# SECTION: COMPLIANCE_DEADLINE_TRACKER
section_id: compliance_deadlines

Regulatory compliance deadlines (next 12 months):

| Regulation | Jurisdiction | Deadline | Status | Owner | Risk if Missed |
|-----------|------------|---------|--------|-------|---------------|
| EU AI Act Level 4 audit | EU | Jun 30, 2030 | ⚠️ 62% complete | Brandon | €200M fine + L4 suspension |
| NHTSA AV Framework 3.0 renewal | US | Sep 2030 | ✅ On track | Rohan | L4 cert revocation in 3 states |
| China PIPL data localization audit | China | Apr 2030 | ✅ Complete | Legal-China | Data processing suspension |
| India DPDP Act annual compliance | India | Dec 2030 | ✅ On track | Legal-India | ₹250Cr fine |
| UK Automated Vehicles Act certification | UK | Aug 2030 | ⚠️ In progress | Brandon | L4 launch delay in UK |
| Saudi AV operating license renewal | Saudi Arabia | Jul 2030 | ✅ On track | Rohan | Riyadh robotaxi suspension |
| GDPR DPO audit | EU | Feb 2031 | 🔵 Future | Data Privacy Officer | €20M fine |
| Japan Road Transport Vehicle Act AI amendment | Japan | Nov 2030 | ✅ Lobbying active | Rohan | L4 expansion blocked |
| Brazil LGPD robotaxi data audit | Brazil | Oct 2030 | 🔵 Future | Legal-LatAm | Service suspension |
| Indonesia EV manufacturing compliance | Indonesia | Dec 2030 | ✅ On track | Jakarta ops | Subsidy forfeiture ($340M) |

Critical path: EU AI Act (Jun 30) — requires FSD decision transparency logging, bias testing, and human override documentation. Ashok's team delivering technical documentation; Brandon coordinating with EU regulators.

---

# SECTION: RECALL_HISTORY_TREND
section_id: recall_trend

Recall history (24 months):

| Date | Campaign | Scope | Vehicles | Type | Cost | Resolution Time |
|------|---------|-------|----------|------|------|----------------|
| Apr 2029 | Cybertruck window seal | 120,000 | Physical | Service visit | $18M | 6 weeks |
| Jun 2029 | Cybertruck wiper motor | 84,000 | Physical | Service visit | $12M | 4 weeks |
| Aug 2029 | Model Y rear camera calibration | 240,000 | OTA | Software | $0.4M | 48 hours |
| Oct 2029 | Model Y seat belt sensor | 320,000 | OTA | Software | $0.8M | 72 hours |
| Jan 2030 | Model 2 headlight calibration | 42,000 | OTA | Software | $0.2M | 24 hours |
| Mar 2030 | Semi braking software | 8,200 | OTA | Software | $0.1M | 36 hours |

Recall metrics (FY2030 vs FY2029):

| Metric | FY2030 | FY2029 | Trend |
|--------|--------|--------|-------|
| Total recall campaigns | 6 | 9 | ↓ −33% |
| Vehicles affected | 814,200 | 1,420,000 | ↓ −43% |
| OTA-resolvable % | 67% | 56% | ↑ improving |
| Total recall cost | $31.5M | $68M | ↓ −54% |
| Avg resolution time (OTA) | 45 hours | 72 hours | ↓ faster |
| Avg resolution time (physical) | 5 weeks | 8 weeks | ↓ faster |

OTA capability reduces recall cost by ~90% vs traditional automakers. Industry avg recall cost: $400–$800 per vehicle. Tesla OTA recall cost: $2–$5 per vehicle.

---

# SECTION: REGULATORY_CHANGE_WATCH
section_id: regulatory_watch

Pending legislation and regulatory changes impacting Tesla:

| Bill / Regulation | Jurisdiction | Probability | Impact | Tesla Position | Status |
|------------------|------------|------------|--------|---------------|--------|
| EU AI Act Level 4 autonomy rules | EU | 100% (enacted) | FSD compliance burden, €200M fine risk | Supportive (with amendments) | Audit Q2 2030 |
| US AV SELF DRIVE Act 3.0 | US Congress | 55% | Federal AV preemption — eliminates state-by-state approval | Strongly supportive | Committee stage |
| China Autonomous Vehicle Data Law | China | 70% | Data localization + algo transparency | Neutral (already compliant) | Public comment |
| India Motor Vehicle AI Amendment | India | 60% | Formal L4 framework for 50+ cities | Strongly supportive | Lobbying active |
| US IRA EV credit phase-down | US Congress | 25% (election risk) | $4.2B/yr consumer credit at risk | Opposed (but diversified) | No active bill |
| EU CBAM enforcement expansion | EU | 90% | Net benefit +$200M/yr (lower carbon intensity vs competitors) | Supportive | 2030 full enforcement |
| Japan AV liability framework | Japan | 80% | Manufacturer liability for L4 (vs driver) | Cautiously supportive | Diet deliberation |
| Saudi AV national strategy | Saudi Arabia | 95% | Government co-investment in AV infrastructure | Strongly supportive | Implementation |

Key risk: US IRA phase-out has only 25% probability but $4.2B impact. Mitigation: Model 2 pricing already profitable without credit.

---

# SECTION: LEGAL_SPEND
section_id: legal_spend

Annual legal spend breakdown (FY2030):

| Category | Spend ($M) | YoY | Notes |
|----------|----------|-----|-------|
| Litigation defense | $180M | +12% | 42 active matters |
| Regulatory compliance | $120M | +28% | EU AI Act driving increase |
| IP / Patent | $86M | +8% | 2,330 patents filed, 14 defensive matters |
| Corporate / M&A | $42M | −15% | Fewer acquisitions in FY2030 |
| Employment / Labor | $34M | +6% | Global workforce compliance |
| Environmental | $18M | +22% | Mumbai emissions + ESG reporting |
| Government affairs | $12M | — | Separate from lobbying spend |
| **Total legal** | **$492M** | **+11%** | — |

Legal department headcount: 420 lawyers + 280 paralegals + 180 support = 880 total
General Counsel: Brandon Ehrhart
Deputy GC: Sarah Chen (IP), Marcus Williams (regulatory), Ana Torres (employment)

---

# EMBEDDING_TAGS
tags:
- tesla_legal
- mcp_regulatory_legal
- litigation
- nhtsa
- eu_ai_act
- patent_portfolio
- compliance
- investigations
- ip_disputes
- regulatory_status
- general_counsel
- brandon
