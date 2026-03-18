# ENTITY
entity_id: mcp_insurance_risk
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-insurance
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: insurance_overview

MCP Domain: Insurance & Risk Management.

Server ID: `mcp-insurance`
Data refresh: Monthly (claims), quarterly (reserves), real-time (incident feed)

Covers fleet insurance, product liability, Robotaxi incident reserves, warranty provisions, property coverage, and enterprise risk exposure.

---

# SECTION: FLEET_INSURANCE
section_id: fleet_insurance

Tesla Insurance (direct-to-consumer) — March 2030:

| Metric | Value | YoY Change |
|--------|-------|-----------|
| Policies active | 18.4M | +42% |
| Premium revenue | $8.2B/yr | +38% |
| Combined ratio | 82.4% | −3.2pt (improving) |
| Claims processed FY2030 | 1.2M | +28% |
| Average claim cost | $4,200 | −8% (FSD safety improvement) |
| Safety Score avg | 92.4 | +2.1pt |
| States active | 48 (all except HI, AK) | +6 |
| International markets | 12 countries | +4 (UK, DE, FR, AU) |

Loss ratio by model:
| Model | Loss Ratio | Avg Premium | Safety Score |
|-------|-----------|------------|-------------|
| Model 3 | 64% | $1,120/yr | 94 |
| Model Y | 68% | $1,240/yr | 93 |
| Model 2 | 72% | $980/yr | 91 (new model) |
| Cybertruck | 78% | $1,680/yr | 88 |
| Model S | 62% | $1,540/yr | 95 |
| Model X | 65% | $1,620/yr | 94 |

---

# SECTION: ROBOTAXI_LIABILITY
section_id: robotaxi_liability

Robotaxi insurance and liability (March 2030):

| Metric | Value |
|--------|-------|
| Self-insured reserve | $2.4B |
| Incidents per 1M rides | 0.42 |
| Fatalities (cumulative since launch) | 0 |
| Injury claims (FY2030 YTD) | 18 |
| Average injury claim | $180K |
| Pending lawsuits | 4 |
| Total litigation exposure | $340M (fully reserved) |
| Reinsurance coverage | $5B excess layer (Swiss Re + Munich Re) |

Robotaxi safety vs human comparison:
- Tesla Robotaxi: 0.42 incidents per 1M rides
- Human rideshare (Uber/Lyft): 3.8 incidents per 1M rides
- Tesla is **9.0× safer** than human rideshare drivers

---

# SECTION: WARRANTY_PROVISIONS
section_id: warranty

Warranty and recall reserves:

| Category | Reserve | Claims FY2030 | Avg Cost | Trend |
|----------|---------|-------------|----------|-------|
| Battery warranty (8yr/150K mi) | $4.8B | 82,000 | $3,400 | ↓ (cell quality improving) |
| Drivetrain warranty | $1.2B | 34,000 | $2,100 | ↓ |
| FSD hardware warranty | $800M | 12,000 | $1,800 | → |
| General vehicle warranty | $2.1B | 140,000 | $1,200 | ↓ |
| Optimus warranty (2yr commercial) | $180M | 4,200 | $2,800 | ↑ (new product) |
| **Total** | **$9.1B** | **272,200** | — | ↓ overall |

Recall history (FY2030):
| Date | Scope | Vehicles | Type | Cost |
|------|-------|----------|------|------|
| Jun 2029 | Cybertruck wiper motor | 84,000 | OTA + hardware | $12M |
| Oct 2029 | Model Y seat belt sensor | 320,000 | OTA fix | $0.8M |
| Jan 2030 | Model 2 headlight calibration | 42,000 | OTA fix | $0.2M |

---

# SECTION: PROPERTY_COVERAGE
section_id: property_insurance

Property and business interruption coverage:

| Property | Coverage | Annual Premium | Deductible |
|----------|---------|---------------|-----------|
| All 8 factories | $48B replacement value | $86M | $50M |
| Data centers (Dojo) | $12B | $24M | $25M |
| Supercharger network | $8.4B | $14M | $10M |
| Corporate offices | $2.1B | $3.8M | $5M |
| Business interruption | $200M/day coverage | Included | 72hr waiting period |

---

# SECTION: ENTERPRISE_RISK
section_id: enterprise_risk

Top 10 enterprise risks (Board Risk Committee, March 2030):

| Rank | Risk | Likelihood | Impact | Mitigation | Owner |
|------|------|-----------|--------|-----------|-------|
| 1 | China market exit / forced JV | Medium | $340B revenue | Dual-source, ramp alternatives | CEO/Vaibhav |
| 2 | Robotaxi fatal incident | Low | $50B+ market cap | 42× safety ratio, reserves | Brandon |
| 3 | EU AI Act non-compliance | Medium | €200M fine + L4 ban | Audit underway | Brandon |
| 4 | CATL supply disruption | Medium | 34% cell supply | Texas refinery Phase 3 | Supply chain |
| 5 | Cybersecurity breach (fleet) | Low | $10B+ liability | SOC 24/7, bug bounty | Tom |
| 6 | Optimus liability (consumer) | Medium | Product recall risk | 2yr warranty, kill switch | Ashok |
| 7 | Key person risk (CEO) | Low | Market cap volatility | Succession plan (board) | Board |
| 8 | Macro recession | Medium | 15-20% demand drop | Model 2 price elasticity | Vaibhav |
| 9 | Rare earth supply shock | Low | 60-day production halt | Strategic reserves (180 days) | Supply chain |
| 10 | Climate event (factory damage) | Medium | $2-5B per event | Insurance + geographic spread | Facilities |

---

# SECTION: MONTHLY_CLAIMS_TREND
section_id: claims_monthly

Insurance claims trend (12-month rolling):

| Month | New Claims | Resolved | Open | Avg Settlement | Total Paid ($M) |
|-------|-----------|---------|------|---------------|----------------|
| Apr 2029 | 82,000 | 78,000 | 124,000 | $4,800 | $374 |
| May 2029 | 84,000 | 80,000 | 128,000 | $4,700 | $376 |
| Jun 2029 | 88,000 | 84,000 | 132,000 | $4,600 | $386 |
| Jul 2029 | 92,000 | 88,000 | 136,000 | $4,500 | $396 |
| Aug 2029 | 96,000 | 94,000 | 138,000 | $4,400 | $414 |
| Sep 2029 | 98,000 | 96,000 | 140,000 | $4,400 | $422 |
| Oct 2029 | 100,000 | 98,000 | 142,000 | $4,300 | $421 |
| Nov 2029 | 96,000 | 98,000 | 140,000 | $4,300 | $421 |
| Dec 2029 | 94,000 | 96,000 | 138,000 | $4,200 | $403 |
| Jan 2030 | 98,000 | 100,000 | 136,000 | $4,200 | $420 |
| Feb 2030 | 92,000 | 96,000 | 132,000 | $4,200 | $403 |
| Mar 2030 | 100,000 | 98,000 | 134,000 | $4,200 | $412 |

Trend: Claims volume rising with fleet growth, but avg settlement declining 12.5% YoY due to FSD safety improvements. Net claims paid growing slower than premium revenue — combined ratio improving.

Claims by category (FY2030):
| Category | % of Claims | Avg Cost | Trend |
|----------|------------|---------|-------|
| Collision (minor) | 48% | $2,800 | ↓ (FSD reduction) |
| Collision (major) | 18% | $12,400 | ↓ |
| Theft | 12% | $8,200 | → |
| Weather/natural disaster | 8% | $6,400 | ↑ (climate events) |
| Vandalism | 6% | $1,800 | → |
| Glass/windshield | 8% | $1,200 | → |

---

# SECTION: TOTAL_COST_OF_RISK
section_id: cost_of_risk

Annual total cost of risk (FY2030):

| Component | Amount ($M) | % of Revenue | YoY |
|----------|-----------|-------------|-----|
| Insurance premiums (paid) | $128M | 0.010% | +8% |
| Self-insured retention (SIR) | $480M | 0.039% | +12% |
| Claims paid (net of recoveries) | $4,890M | 0.395% | +18% |
| Warranty reserves (net change) | $1,200M | 0.097% | −8% |
| Litigation defense | $180M | 0.015% | +12% |
| Risk management staff | $42M | 0.003% | +6% |
| **Total cost of risk** | **$6,920M** | **0.559%** | **+10%** |

Total cost of risk as % of revenue: **0.56%** — among the lowest in the auto industry (industry avg: 1.2–1.8%). Key driver: FSD safety improvements reducing collision frequency and severity faster than fleet growth increases claim volume.

Comparison to traditional auto:
| Company | Cost of Risk (% of Rev) | Combined Ratio | Fleet Safety Score |
|---------|----------------------|---------------|--------------------|
| Tesla | 0.56% | 82.4% | 92.4 |
| Allstate (benchmark) | 1.8% | 98.2% | N/A |
| State Farm | 1.6% | 96.8% | N/A |
| GEICO | 1.4% | 94.2% | N/A |

---

# SECTION: OPTIMUS_LIABILITY_FRAMEWORK
section_id: optimus_liability

Optimus Product Liability Framework (March 2030):

**Current deployment categories:**
| Category | Units | Liability Model | Coverage |
|----------|-------|----------------|---------|
| Factory (internal) | 1,400,000 | Self-insured (workers' comp applies) | Internal reserves |
| Commercial (external deployment) | 680,000 | Customer liability + Tesla warranty | 2yr warranty, $50K/incident cap |
| Home Edition (pilot) | 20,000 | **Pending — board vote April 1** | Proposed: Tesla-backed pool |

**Home Edition Liability Framework v2.0** (pending board vote):
- Tesla carries primary product liability for Home Edition
- Insurance pool: $2B initial reserve (Tesla-funded)
- Per-incident cap: $5M bodily injury, $2M property
- Kill switch: Hardware-level remote disable (13ms response time)
- Incident classification: 4 tiers (cosmetic → property → injury → critical)
- Reinsurance: $3B excess layer (Swiss Re, Munich Re)
- Total coverage: $5B

Board status:
- Predicted vote: 9-1 or 10-1 approval
- Conditional: Kathleen Wilson-Thompson wants $5B total insurance (current proposal is $5B)
- Dissent risk: Hiro Mizuno (labor displacement concerns, not liability-specific)
- Brandon Ehrhart presenting at April 1 board meeting

Optimus incident history (commercial deployment, FY2030):
| Incident Type | Count | Avg Cost | Most Serious |
|-------------|-------|---------|-------------|
| Minor collision (with human) | 42 | $8,200 | Bruised arm, full recovery |
| Property damage | 18 | $14,000 | Dropped pallet, production line |
| Software malfunction (stopped safely) | 124 | $0 | Safety systems worked |
| Hardware failure (joint/motor) | 86 | $2,800 (repair) | No injuries |
| **Zero fatalities or serious injuries** | — | — | — |

---

# SECTION: REINSURANCE_PROGRAM
section_id: reinsurance

Reinsurance tower structure (FY2030):

| Layer | Coverage | Reinsurer | Annual Premium | Attachment |
|-------|---------|----------|---------------|-----------|
| Primary (SIR) | $500M | Self-insured | N/A | $0 |
| 1st Excess | $2.0B | Swiss Re | $48M | $500M |
| 2nd Excess | $2.0B | Munich Re | $36M | $2.5B |
| 3rd Excess | $1.0B | Berkshire Hathaway | $18M | $4.5B |
| Catastrophe | $500M | Lloyd's syndicate | $12M | $5.5B |
| **Total** | **$6.0B** | — | **$114M/yr** | — |

Coverage adequacy:
- Largest single-event scenario modeled: Robotaxi multi-vehicle incident in dense urban area → $200M exposure
- Current tower provides 30× coverage over worst-case scenario
- Annual premium cost: $114M (0.009% of revenue — extremely efficient)

Reinsurance renewal:
- Swiss Re: Renewed Jan 2030 at flat rates (Tesla's improving loss record = leverage)
- Munich Re: Renewal due Dec 2030, preliminary indication of 5% rate decrease
- Berkshire: Multi-year deal, no renewal needed until 2032

---

# SECTION: ACTUARIAL_TRENDS
section_id: actuarial

FSD impact on insurance actuarials (12-month view):

| Month | Safety Score (fleet avg) | Collision Rate (per M mi) | Avg Claim Cost | Loss Ratio |
|-------|----------------------|--------------------------|---------------|-----------|
| Apr 2029 | 88.2 | 4.8 | $4,800 | 72% |
| Jun 2029 | 89.0 | 4.4 | $4,600 | 70% |
| Aug 2029 | 90.1 | 4.0 | $4,400 | 68% |
| Oct 2029 | 90.8 | 3.8 | $4,300 | 66% |
| Dec 2029 | 91.4 | 3.6 | $4,200 | 64% |
| Feb 2030 | 92.0 | 3.4 | $4,200 | 64% |
| Mar 2030 | 92.4 | 3.2 | $4,200 | 64% |

Correlation: Every 1-point improvement in fleet Safety Score reduces collision rate by ~6% and loss ratio by ~2 points. FSD v18.4 is the primary driver — vehicles with FSD engaged have 42% lower collision rate than manual-mode driving.

Pricing advantage:
- Tesla can offer 22% lower premiums than traditional insurers because real-time Safety Score data eliminates adverse selection
- Traditional insurers rely on proxy data (age, zip code, claims history) — Tesla has actual driving behavior per vehicle
- Regulatory barrier: Insurance regulators in 8 states still require traditional actuarial methods; Tesla lobbying for behavior-based pricing approval nationwide

---

# EMBEDDING_TAGS
tags:
- tesla_insurance
- mcp_insurance_risk
- fleet_insurance
- robotaxi_liability
- warranty
- recalls
- enterprise_risk
- property_coverage
- claims
- safety_score
- reinsurance
- monthly_claims
- cost_of_risk
- optimus_liability
- reinsurance_tower
- actuarial
- loss_ratio
