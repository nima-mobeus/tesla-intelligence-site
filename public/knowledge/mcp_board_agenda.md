# ENTITY
entity_id: mcp_board_agenda
entity_type: corporate_governance
parent_system: tesla_unified_observability
document_type: board_meeting_agenda
meeting_date: april_15_2030
classification: confidential_internal

---

# SECTION: MEETING_LOGISTICS
section_id: board_logistics

Tesla, Inc. — Board of Directors
Next Regular Meeting Agenda
Date: April 15, 2030, 9:00 AM PT
Location: Tesla HQ, Austin, Texas (Giga Texas Boardroom + Secure Video)
Estimated Duration: 5 hours
Video Bridge: Tesla Secure Conference ID TBD (link distributed 24h before)

**Quorum Requirement:** 6 of 11 directors (simple majority)

---

# SECTION: ATTENDEES
section_id: board_attendees

## Confirmed Attendees

| Director | Status | Attendance Mode | Committee Role(s) |
|----------|--------|-----------------|-------------------|
| CEO — Chairman & CEO | ✅ Confirmed | In-person | Chair, Product Review, Capital Allocation |
| Robyn Denholm — Lead Independent Director | ✅ Confirmed | In-person | Audit (Chair), Compensation |
| Kimbal Musk — Director | ✅ Confirmed | In-person | Sustainability, Product Review |
| James Murdoch — Director | ✅ Confirmed | Video (London) | Compensation (Chair), Governance |
| Kathleen Wilson-Thompson — Director | ✅ Confirmed | In-person | Governance (Chair), Compliance |
| Joe Gebbia — Director | ✅ Confirmed | In-person | Compensation, Governance |
| JB Straubel — Director | ✅ Confirmed | In-person | Sustainability (Chair), Technology |
| Hiro Mizuno — Director | ✅ Confirmed | Video (Tokyo) | Audit, Risk (Chair) |
| Drew Baglino — Director | ✅ Confirmed | In-person | Technology, Energy |
| Ira Ehrenpreis — Director | 🟡 Tentative | Video (San Francisco) | Audit, Capital Allocation (Chair) |
| Larry Ellison — Director | 🟡 Tentative | Video (Hawaii) | Technology |

**Management Presenters:**
- Vaibhav Taneja — CFO (finance update, Beijing Giga, lithium hedging)
- Tom Zhu — SVP Automotive (Jakarta relay audit, Scope 3 update, manufacturing)
- Brandon Ehrhart — General Counsel (Optimus Home Edition liability framework, Elliott response)
- Ashok Elluswamy — VP AI (FSD v18.5 post-repair validation, Dojo CaaS pricing rollout)
- Karn Budhiraj — VP Optimus (Home Edition pre-launch readiness)

**Recording Secretary:** Brandon Ehrhart, General Counsel

---

# SECTION: PRE_MEETING_DOCUMENTS
section_id: board_pre_reads

## Documents to Distribute BEFORE Meeting

| Document | Author | Send By | Recipients | Format | Status |
|----------|--------|---------|------------|--------|--------|
| Q1 2030 Financial Summary (Board Deck) | Vaibhav Taneja | April 8, 2030 | All directors | Google Drive (restricted) | 🟡 In draft |
| Jakarta Relay Monitoring Audit Report | Tom Zhu / Milan Kovac | April 8, 2030 | All directors | PDF attachment | 🟡 In review |
| Optimus Home Edition Liability Framework v2.0 | Brandon Ehrhart | April 8, 2030 | All directors | Google Drive (restricted) | 🔴 Not started |
| Scope 3 Emissions Update (FY2029 vs FY2028) | Tom Zhu / Nadia Bouchard | April 10, 2030 | All directors (Hiro requested) | PDF attachment | 🟡 Data collection |
| Beijing Giga Environmental Review Progress | Vaibhav Taneja | April 10, 2030 | All directors | Google Drive (restricted) | 🟡 Awaiting China counsel |
| Elliott Management Proxy Threat Assessment | Brandon Ehrhart / Wachtell | April 10, 2030 | Independent directors only | Confidential memo | 🟡 In draft |
| CEO Time Allocation Framework (Draft) | Robyn Denholm | April 10, 2030 | Executive session only | Confidential memo | 🟡 In review |
| Board Candidate Shortlist (Manufacturing) | Robyn Denholm / Kathleen Wilson-Thompson | April 12, 2030 | Independent directors only | Google Drive (restricted) | 🟡 3 candidates identified |
| Dojo CaaS Pricing Implementation Report | Ashok Elluswamy | April 8, 2030 | All directors | PDF attachment | ✅ Complete |

**Distribution channel:** Google Drive with Tesla Board-restricted sharing. Brandon (Board Secretary) distributes via `send_message` tool to all directors.

---

# SECTION: AGENDA_ITEMS
section_id: board_agenda_items

## Agenda & Vote Docket

---

### Item 1: CEO Strategic Update (30 min) — Informational, No Vote

**Presenter:** CEO
**Purpose:** Q1 2030 performance recap and strategic outlook for Q2-Q4.

**Key topics:**
- $310B Q1 revenue — beat consensus by $12B
- Model 2 ramp progress (112K/month, targeting 150K by Q3)
- Optimus Home Edition launch readiness (May 15 target)
- Robotaxi expansion pace (340 → 500 cities by year-end)

---

### Item 2: Jakarta Relay Monitoring Audit (20 min) — Informational, No Vote

**Presenter:** Tom Zhu
**Purpose:** Carry-forward from March 11 board meeting. CEO directed Tom to present relay monitoring audit within 10 days.
**Status:** Audit completed March 20, 2030. Results to be presented.

**What the board should know:**
- Root cause confirmed: CRF-420 relay firmware bug introduced in Q4 2029 upgrade
- 14,000 relays across 4 clusters — 840 flagged as at-risk
- Predictive monitoring retrofit: $18M cost, completion by May 2030
- No repeat incidents since March 16 repair

---

### Item 3: Optimus Home Edition Liability Framework — VOTE REQUIRED

**Presenter:** Brandon Ehrhart
**Resolution:** 2030-04-01 — Approve Optimus Home Edition Product Liability Framework v2.0
**Required Majority:** Simple majority (6 of 11)

**Background:** At the March 11 board meeting, the Home Edition pricing was approved 7-2, but Kathleen Wilson-Thompson and Hiro Mizuno voted NO citing unfinished liability framework. Brandon was tasked with presenting a finalized framework at this meeting.

**Evidence FOR approval:**
1. **Insurance coverage secured.** Tesla Insurance + AIG consortium provides $2B aggregate product liability coverage for Home Edition at $4.2M annual premium. Loss ratio modeling shows 2.1% claim probability per unit per year.
2. **Regulatory clearance.** UL 4600 autonomous safety certification obtained for US markets. EU CE marking in progress (expected May 1). Japan METI approval granted March 28.
3. **Consumer consent framework.** 47-page Terms of Service with mandatory 8-minute video walkthrough before activation. Liability waiver for unsupervised operation in "Autonomous Mode."
4. **Incident response protocol.** 24/7 rapid response team (12 engineers) with 15-minute remote diagnostic, 2-hour on-site in major metros. OTA kill switch tested successfully on 340 consumer pre-order units.
5. **Pilot data.** 12-household Austin pilot: 4.2 task completions/day, zero injuries, zero property damage over 8 weeks. NPS 84.
6. **ARK Invest TAM modeling.** Consumer robotics TAM of $2.4T by 2035. First-mover advantage critical — delay risks ceding market to Amazon/Figure 01.

**Evidence AGAINST approval (Kathleen & Hiro's concerns):**
1. **Untested at scale.** 12-household pilot is statistically insignificant. No data on edge cases: children, pets, elderly with dementia, multi-story homes, outdoor use.
2. **Regulatory fragmentation.** 3 US states (CA, NY, IL) have pending bills restricting autonomous home robots. If passed, units may need recall or geofencing.
3. **Product liability case law.** No precedent for autonomous humanoid robot liability. Courts may apply strict liability (manufacturer always liable) rather than negligence standard.
4. **Reputational risk.** A single viral incident (Optimus hurts a child, damages property) could wipe $200B+ in market cap. Robotaxi had years of gradual rollout — Home Edition is going direct to consumers immediately.
5. **Insurance gap.** $2B aggregate coverage may be insufficient if class action develops. Kathleen wants $5B minimum.
6. **Hiro's ESG concern.** Home Edition displaces domestic workers — potential labor displacement narrative could damage ESG ratings.

**Known director positions:**
| Director | Likely Vote | Reasoning |
|----------|------------|-----------|
| CEO | ✅ Yes | Product champion. "Every month we delay, Amazon gets closer." |
| Robyn Denholm | ✅ Yes | Supports with insurance increase condition |
| Kimbal Musk | ✅ Yes | Consumer product enthusiast |
| James Murdoch | ✅ Yes | Revenue growth priority |
| Joe Gebbia | ✅ Yes | Consumer experience focus |
| JB Straubel | ✅ Yes | Technical confidence in safety systems |
| Drew Baglino | ✅ Yes | Aligned with CEO |
| Kathleen Wilson-Thompson | ⚠️ Conditional | Will vote YES if insurance raised to $5B and pilot extended to 100 households |
| Hiro Mizuno | ❌ Likely No | ESG and liability concerns remain. May abstain if framework addresses pilot extension. |
| Ira Ehrenpreis | ✅ Likely Yes | VC perspective — speed to market critical |
| Larry Ellison | ✅ Likely Yes | Technology optimist |

**Predicted outcome:** 9-1 or 10-1 approval (Hiro sole dissent or abstention), IF Brandon addresses the insurance increase and pilot extension in his presentation.

**CEO preparation notes:** Engage Kathleen before the meeting — her condition ($5B insurance) is achievable and converts her to YES. Hiro's ESG concern may require a public statement on "Optimus augments, not replaces" domestic workers.

---

### Item 4: Scope 3 Emissions Update (20 min) — Informational, No Vote

**Presenter:** Tom Zhu / Nadia Bouchard
**Purpose:** Carry-forward from March 11. Hiro Mizuno requested Scope 3 emissions update.

**Key data points:**
- FY2029 Scope 3: 28.4 MtCO2e (vs. 31.2 MtCO2e FY2028) — down 9%
- Largest Scope 3 source: supplier manufacturing (44%), vehicle use phase (28%), logistics (12%)
- Carbon credit sales: $3.26B FY2029
- Net Scope 1 emissions: down 42% vs. 2025 baseline

---

### Item 5: Beijing Giga Environmental Review — VOTE REQUIRED

**Presenter:** Vaibhav Taneja
**Resolution:** 2030-04-02 — Approve Phase 2 Pre-Construction Funding for Beijing Gigafactory ($3.8B)
**Required Majority:** Simple majority

**Background:** Board approved $3.8B earmark in March. Environmental review is underway. This vote authorizes release of funds contingent on environmental clearance.

**Evidence FOR approval:**
1. **Market opportunity.** China is a $300B annual opportunity. 12.4M Tesla fleet in China. Beijing Giga adds 600K units/year capacity.
2. **Government support.** Beijing municipal government fast-tracking permits. Environmental review on schedule (14-month timeline).
3. **Financial modeling.** NPV of $18.2B over 10 years at 12% discount rate. Payback period: 3.2 years.
4. **Local production advantage.** Avoids 15% import duty. Data localization compliance built-in.
5. **Competitive necessity.** BYD, NIO, Xpeng all expanding capacity. Without Beijing Giga, Tesla risks losing market share in northern China.

**Evidence AGAINST approval:**
1. **Geopolitical risk.** US-China tensions could escalate. Worst case: forced divestiture or asset seizure (precedent: Russia 2022).
2. **Data sovereignty complexity.** All FSD data must remain on-shore. Separate Dojo cluster required. Additional $800M infrastructure cost not in original budget.
3. **NEV credit phase-down.** 20% reduction expected 2031. Reduces government subsidy value by ~$400M over project life.
4. **Capital allocation opportunity cost.** $3.8B could fund 2 additional Dojo clusters or accelerate Optimus Gen 4.

**Known director positions:**
| Director | Likely Vote | Reasoning |
|----------|------------|-----------|
| CEO | ✅ Yes | "China is a $300B opportunity. The regulatory friction is manageable." |
| Robyn Denholm | ✅ Yes | Supports diversification |
| Vaibhav Taneja (presenter, non-voting) | ⚠️ Noted concerns on record about capital allocation timing |
| Hiro Mizuno | ✅ Yes | Former Japan GPIF CIO — pro-Asia expansion |
| JB Straubel | ⚠️ Cautious | Concerned about geopolitical scenario |

**Predicted outcome:** 9-2 or 10-1 approval.

---

### Item 6: Lithium Hedging Strategy (15 min) — VOTE REQUIRED

**Presenter:** Vaibhav Taneja
**Resolution:** 2030-04-03 — Approve $2.4B Lithium Carbonate Forward Purchase Agreement
**Required Majority:** Simple majority

**Background:** Lithium carbonate spot price spiked +18% in 6 weeks (Q4 2029 → Q1 2030). Drew and Vaibhav authorized to negotiate Chilean lithium direct offtake renegotiation. Vaibhav presenting hedge options.

**Evidence FOR approval:**
1. **Margin protection.** Energy storage margin compressed 2.1pts from lithium spike. Hedge locks in $48/kg for 18 months (vs. current spot $62/kg).
2. **Supply security.** 24-month forward contract with SQM (Chile) ensures 180,000 MT supply — covers 40% of Tesla's annual lithium needs.
3. **Competitive advantage.** BYD and CATL are exposed to spot pricing. Locked-in price gives Tesla 12% cost advantage on battery packs.

**Evidence AGAINST approval:**
1. **Price may decline.** If lithium prices drop below $48/kg, Tesla overpays by up to $1.2B over contract life.
2. **Capital lockup.** $2.4B committed to a single commodity. Reduces financial flexibility.
3. **Chilean political risk.** Chile's lithium nationalization debate is ongoing. Contract may be renegotiated by government.

**Predicted outcome:** 9-0 or unanimous approval. Straightforward risk management.

---

### Item 7: Board Composition — Search Committee Update (15 min) — Discussion, No Vote

**Presenters:** Robyn Denholm, Kathleen Wilson-Thompson
**Purpose:** Carry-forward from March 11. Board discussed adding a director with deep automotive manufacturing background. Presenting 3 candidate profiles.

**Candidates (confidential):**
1. **Candidate A** — Former GM SVP Manufacturing, 28 years automotive. Currently independent board member at 2 Fortune 500 companies.
2. **Candidate B** — Former Toyota Production System executive, pioneer of lean manufacturing. Japanese national, based in Nagoya.
3. **Candidate C** — Former Stellantis COO, expertise in multi-factory global operations. European, based in Paris.

**Next step:** Board to select finalist(s) for formal interviews at May meeting.

---

### Item 8: Executive Session (Independent Directors Only) — 30 min

**Chair:** Robyn Denholm
**Management recused.**

**Expected topics:**
- CEO Time Allocation Framework (Robyn to present draft)
- Succession planning update (Tom Zhu interim, Ashok long-term)
- Q1 2030 CEO performance assessment
- Elliott proxy strategy — June 2030 AGM preparation

---

# SECTION: POST_MEETING_DELIVERABLES
section_id: board_post_meeting

## Documents to Distribute AFTER Meeting

| Document | Author | Send By | Recipients | Format |
|----------|--------|---------|------------|--------|
| Board Minutes (Draft) | Brandon Ehrhart | April 18, 2030 | All directors for review | Google Drive (restricted) |
| Resolution Packets (signed) | Brandon Ehrhart | April 18, 2030 | Corporate records + Delaware filing | PDF |
| Action Item Tracker (updated) | Brandon Ehrhart | April 16, 2030 | All directors + relevant ELT | Google Sheets (restricted) |
| Financial Summary (public, post-Q1 earnings) | Vaibhav Taneja / IR | April 3, 2030 | Public (SEC filing) | EDGAR |
| Optimus Liability Framework (final, post-vote) | Brandon Ehrhart | April 18, 2030 | All directors, Tesla Insurance, AIG | PDF |
| Board Candidate Interview Schedule | Robyn Denholm | April 22, 2030 | Search committee + candidates | Calendar invites |
| Lithium Hedge Execution Confirmation | Vaibhav Taneja | April 20, 2030 | Board + Drew Baglino | Email |

---

# SECTION: CARRY_FORWARD_FROM_MARCH
section_id: board_carry_forward

## Open Action Items from March 11, 2030 Board Meeting

| # | Action | Owner | Original Due | Status | April 15 Update |
|---|--------|-------|-------------|--------|----------------|
| 1 | Present Jakarta relay monitoring audit | Tom Zhu | March 20 | ✅ Complete | Presenting at April meeting |
| 2 | Finalize Optimus Home Edition liability framework | Brandon Ehrhart | April board | 🟡 In progress | Presenting v2.0 — key item |
| 3 | Present Scope 3 emissions update | Tom Zhu | April board | 🟡 Data collection | Presenting with Nadia |
| 4 | Beijing Giga environmental review follow-up | Vaibhav Taneja | April 15 | 🟡 Awaiting China counsel | Update in financial report |
| 5 | Board candidate search (manufacturing) | Robyn / Kathleen | May board | 🟡 3 candidates | Interim update at April meeting |
| 6 | Dojo CaaS pricing implementation | Ashok Elluswamy | April 1 | ✅ Complete | New pricing live March 28 |
| 7 | Model 2 EU launch pricing finalization | Franz von Holzhausen | March 25 | ✅ Complete | €24,900 confirmed |
| 8 | CEO time allocation framework | Robyn Denholm | April 4 | 🟡 In review | Executive session topic |

---

# SECTION: MEETING_PREP_NOTES
section_id: board_prep_ceo

## CEO Preparation Notes

**1. Kathleen conversion strategy:** Call Kathleen before April 10. Her condition for YES on Optimus liability is achievable: increase insurance coverage from $2B to $5B (AIG has indicated willingness at $6.8M annual premium) and commit to 100-household extended pilot by June. This converts a 7-2 vote to 10-1.

**2. Hiro's ESG concern:** Prepare a 1-page "Optimus Employment Impact Statement" showing that Home Edition creates 4,200 new Tesla jobs (support, maintenance, content creation) for every 10,000 jobs potentially displaced. Frame as "augmentation, not replacement."

**3. Beijing Giga debate:** JB may push back on geopolitical risk. Prepare a 2-scenario risk model: (a) US-China escalation — Tesla's China assets are ringfenced via Shanghai WFOE structure, (b) Forced JV — Tesla IP is architecturally separated, FSD runs on separate on-shore infrastructure.

**4. Lithium hedge:** This should be the easiest vote. Present as pure risk management, not speculation. Vaibhav has the modeling.

**5. Elliott proxy:** Brandon should provide an update on Elliott's solicitation timeline. Current assessment: Low risk. But June AGM is 2 months away — board alignment is critical. Remind directors of the 9-2 vote from March.

---

# EMBEDDING_TAGS
tags:
- tesla_board
- board_agenda
- board_meeting
- next_board_meeting
- vote_docket
- pre_meeting
- post_meeting
- documents
- attendees
- optimus_liability
- beijing_giga
- lithium_hedging
- scope_3
- board_candidates
- elliott_proxy
- ceo_preparation
- carry_forward
- action_items
- evidence_for_against
- director_positions
- corporate_governance
