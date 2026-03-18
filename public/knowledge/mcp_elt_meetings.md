# ENTITY
entity_id: mcp_elt_meetings
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-elt
data_window: december_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: elt_overview

MCP Domain: ELT (Executive Leadership Team) Weekly Meeting Notes.

Server ID: `mcp-elt`
Authentication: Tesla UKM scoped JWT (read: exec.meetings.elt.*, classification: CONFIDENTIAL)
Data refresh: Weekly uploads post-meeting (Tuesday meetings, notes uploaded Wednesday)
Classification: CONFIDENTIAL — restricted to CEO, ELT members, and authorized intelligence briefings

This domain contains weekly ELT meeting notes, agendas, decisions, action items, and open issues from the last 90 days. Meetings are held every Tuesday at 9:00 AM CT in Austin (or video for remote ELT). Notes are structured: Agenda → Key Decisions → Action Items → Open Issues.

---

# SECTION: MEETING_NOTES
section_id: elt_meetings

---

## Week of March 11, 2030 (Most Recent)

**Attendees:** CEO, Vaibhav, Tom, Drew, Ashok, Karn, Brandon, Valerie, Rohan, Franz
**Location:** Austin HQ — Executive Conference Room 4A

**Agenda & Key Points:**

1. **Dojo Jakarta outage (Ashok)** — Cluster 7 cooling relay failure. 12% compute loss. FSD v18.5 training delayed ~6h. Singapore failover at 96%. Root cause: relay firmware bug in Q4 2029 upgrade. Ashok committed to patch across all 8 clusters by March 17. Action: Milan Kovac to present hardening plan next week.

2. **Optimus Mumbai rollback (Karn)** — 340 units rolled back from v9.2 to v9.1.4 due to IMU humidity drift on Line 7. Hotfix v9.2.1 submitted to testing. ETA March 16. Tom flagged that Mumbai throughput is now −3.2% — at risk of Q1 delivery commitment if hotfix slips. Action: Tom + Karn daily sync through March 18.

3. **São Paulo robotaxi demand (Tom)** — 23% ride rejection at peak. 214K requests vs 165K fleet available. Approved rebalancing 8,400 vehicles from Buenos Aires corridor. Surge pricing set to 1.8×. Monitoring for price sensitivity impact.

4. **Q1 2030 financial tracking (Vaibhav)** — Revenue tracking to $308B (target: $310B). Gross margin at 31.1% (target: 31.3%). Two risk items: Mumbai throughput loss and energy storage margin compression from lithium spot price spike (+18% vs. Q4). Vaibhav to present hedge options next week.

5. **F1 Round 5 recap (Rohan)** — Shanghai GP: Sainz P6, Antonelli P7. Best team result (13 points in one race). NVIDIA AI strategy system credited with 2-position gain via real-time undercut call in lap 38. Positive press. CEO confirmed Monaco GP attendance June 15.

6. **Wei Zhang departure update (Valerie)** — FSD Perception team at 68% capacity. 3 internal transfers approved (from SLAM team). 2 external hires in final rounds (ex-Waymo, ironically). Valerie flagged AI/ML compensation gap — recommending $420M retention grant pool increase for L8+ AI roles. Decision: CEO approved in principle, Vaibhav to model impact on SBC expense.

**Decisions made:**
- ✅ Mumbai v9.2.1 hotfix approved for emergency track
- ✅ São Paulo rebalancing approved (8,400 vehicles)
- ✅ AI/ML retention grant pool increase approved in principle ($420M)
- ✅ Cluster 7 hardening plan commissioned

**Open issues carried forward:**
- ⏳ Lithium hedging strategy (Vaibhav → next week)
- ⏳ FSD Perception team rebuild plan (Ashok → 2 weeks)

---

## Week of March 3, 2030

**Key Topics:**
1. **Q1 2030 budget review (Vaibhav)** — $10B R&D spend on track. CapEx $28.4B (80% on Giga expansion). Free cash flow $28.4B — record quarter projected.
2. **Model 2 ramp (Tom)** — Shanghai producing 78,000/month (+12K vs. target). Mumbai 34,000/month. Combined 112K/month. Target 150K/month by Q3 2030.
3. **Optimus v3 hand timeline (Karn)** — Project FINE prototype hit 4,200 tactile points at 6ms latency. On track for Optimus v3 Q3 2030. GRASP v1.2 at 78% novel object success rate. Ashok: GRASP v2 needs more Dojo compute — requested 0.4 EF allocation from FSD training. CEO approved sharing allocation.
4. **F1 Australia DNF (Rohan)** — Antonelli brake failure. Investigation: brake-by-wire calibration issue in heat cycle. Fixed for Japan. No structural concern.
5. **Riyadh Giga groundbreaking (Tom)** — March 12 ceremony. CEO attendance confirmed. First production target Q1 2032.

**Decisions:**
- ✅ Dojo compute sharing: 0.4 EF allocated to Optimus GRASP training
- ✅ Riyadh groundbreaking — CEO attending March 12

---

## Week of February 24, 2030

**Key Topics:**
1. **FSD v18.5 training update (Ashok)** — New architecture test on 4.2B miles accumulated data. Projected 15% disengagement improvement vs. v18.4. Target Q2 2030 OTA release.
2. **Energy storage margin (Drew)** — Lithium carbonate price spike +18% in 6 weeks. Megapack margin compressed 2.1pts. Drew proposing Chilean lithium direct offtake renegotiation. Vaibhav to model hedging options.
3. **Dr. Wei Zhang departure response (Valerie + Ashok)** — 3 internal candidates identified for Sr. Director role. External search: 2 finalists. Ashok: No single replacement — recommending restructure into 2 roles (Perception Lead + Sensor Fusion Lead). CEO: approved restructure.
4. **Supercharger NACS expansion (Drew + Rohan)** — 4 new NACS licensing deals signed (Volkswagen NAM, Toyota NA, Hyundai, Stellantis). Total NACS licensees now 14. Projected $1.8B revenue in 2030 from licensing + usage fees.
5. **ESG annual report (Nadia Bouchard via Drew)** — FY2029 carbon credits: 2.84M MT CO2 equivalent sold. Net Scope 1 emissions down 42% vs. 2025.

**Decisions:**
- ✅ FSD Perception team restructured into 2 roles
- ✅ Chilean lithium renegotiation authorized (Drew + Vaibhav joint)
- ✅ NACS licensing expansion confirmed — 4 new deals

---

## Week of February 17, 2030 (President's Day — shortened)

**Key Topics:**
1. **Robotaxi EU expansion (Tom + Rohan)** — 3 new EU cities: Amsterdam, Stockholm, Vienna. Launch Q3 2030 pending local permits. 18 cities total in EU as of launch. Brussels regulatory alignment complete.
2. **Cybertruck production milestone (Tom)** — 2.8M units produced since launch. First quarter with positive contribution margin per unit.
3. **Optimus consumer pilot (Karn)** — 12 households in Austin pilot program. Average 4.2 task completions per day per unit. Issues: charging interruptions during overnight cleaning cycles (software fix deployed). NPS from pilot households: 84.
4. **Insurance actuarial review (Lisa Park via Vaibhav)** — 18.4M policies. Loss ratio: 42% (industry avg: 68%). FSD safety data driving underwriting advantage. Q1 2030 insurance profit: $1.4B.

---

## Week of February 10, 2030

**Key Topics:**
1. **Full-year 2030 targets reaffirmed** — $1.24T revenue, 32% gross margin by Q4, 12M Optimus units by end 2030 (stretch goal).
2. **GRASP foundation model v1.0 deployed to factory fleet** — 2,100 Optimus units in Texas running GRASP. 91% task success rate on assigned assembly tasks (up from 74% with rule-based system).
3. **ELT offsite planning (Valerie)** — Q2 2030 offsite: June 5–6, Ojai, CA. Theme: "The Next Decade." CEO to present 2035 vision. Each ELT member presenting their 5-year domain strategy.
4. **Talent pipeline review (Valerie)** — 6,430 open roles. 42% AI/ML engineering. Average time-to-close: 68 days (target: 45). University pipeline: 1,840 offers extended to 2030 new grads.

---

## Week of February 3, 2030

**Key Topics:**
1. **Q4 2029 earnings prep (Vaibhav)** — $292B revenue, 29.8% gross margin, $52B net income. Record quarter on all metrics. Earnings call Feb 14.
2. **F1 team sponsorship policy ratified** — No fossil fuel sponsors, no alcohol sponsors. Rohan presented policy. CEO: "We're not going to let F1 buy visibility for industries we're replacing."
3. **Optimus v3 hands program briefing (Karn + Omar Khalid)** — Shadow Robot IP integration complete. EAP actuator feasibility confirmed. Project FINE kickoff authorized with $380M budget.
4. **Capital allocation review (Vaibhav)** — $28.4B FCF Q4 2029. Allocation: 60% Giga expansion, 20% R&D, 12% buybacks, 8% strategic acquisitions/investments. CEO approved.

---

## Week of January 27, 2030

**Key Topics:**
1. **CES 2030 recap (Franz + Rohan)** — Optimus v2.5 demo generated 4.2B media impressions. Model 2 Performance teased. Press reception: "Tesla's AI robot moment."
2. **China L4 regulatory timeline (Rohan)** — Ministry of Industry and IT: decision expected Q3 2030. If approved, 12.4M Tesla fleet in China eligible for FSD activation — $8.4B incremental revenue opportunity.
3. **Mumbai Giga capacity expansion (Tom)** — ₹480B capex approved (with India government subsidy of ₹120B). Adding Line 8 and 9. Capacity expansion from 900K to 1.4M units/year by Q2 2032.

---

# EMBEDDING_TAGS
tags:
- tesla_elt
- mcp_elt_meetings
- executive_meetings
- leadership_decisions
- weekly_meetings
- action_items
- dojo
- optimus
- robotaxi
- f1
- talent
- compensation
- financial_tracking
- meeting_notes
- confidential
