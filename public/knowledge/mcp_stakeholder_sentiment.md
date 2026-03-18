# ENTITY
entity_id: mcp_stakeholder_sentiment
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-stakeholders
data_window: october_2029_to_march_2030
classification: confidential_internal

---

# SECTION: SERVER_OVERVIEW
section_id: stakeholder_overview

MCP Domain: Stakeholder Sentiment & Relationship Health Dashboard.

Server ID: `mcp-stakeholders`
Authentication: Tesla UKM scoped JWT (read: stakeholder.*, relationships.*)
Data refresh: Weekly (relationship scores), after each interaction (event log), monthly (trend analysis)
Classification: CONFIDENTIAL — restricted to CEO, General Counsel, VP Public Policy

This domain tracks the health, trajectory, and risk level of Tesla's ~40 key external relationships — regulators, investors, board members, partners, analysts, and media figures. Each relationship has a sentiment trajectory, last interaction log, outstanding commitments, and risk assessment. Answers: "Who haven't I talked to in too long?" and "Which relationships are silently deteriorating?"

---

# SECTION: RELATIONSHIP_HEALTH_SUMMARY
section_id: relationship_summary

## Relationship Health Overview (March 17, 2030)

| Category | Total Tracked | 🟢 Strong | 🟡 Watch | 🔴 At Risk | ⚪ Cold (>60 days) |
|----------|--------------|-----------|---------|----------|-------------------|
| Board Members | 11 | 7 | 3 | 1 | 0 |
| Key Investors & Analysts | 12 | 8 | 3 | 1 | 0 |
| Regulators & Government | 8 | 3 | 3 | 2 | 0 |
| Partners & Suppliers | 6 | 4 | 1 | 1 | 0 |
| Media & Public Figures | 5 | 2 | 2 | 1 | 0 |
| **Total** | **42** | **24** | **12** | **6** | **0** |

**Key concern:** 6 relationships at "At Risk" — highest count in 12 months.

---

# SECTION: BOARD_MEMBER_SENTIMENT
section_id: board_sentiment

## Board Member Relationship Cards

### Robyn Denholm — Lead Independent Director
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | → Stable (no change in 6 months) |
| Last interaction | March 11 — Board meeting. Chaired executive session. |
| Outstanding commitments | CEO time allocation framework — she's drafting, expects your feedback by April 4 |
| Known concerns | CEO time split between Tesla/SpaceX/xAI. Wants minimum 60% Tesla commitment documented. |
| Next scheduled | April 15 board meeting |
| Risk level | LOW |
| Notes | Your most trusted independent director. Call her weekly. She appreciates the access. |

### Kathleen Wilson-Thompson — Director, Governance Chair
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟡 Watch |
| Trajectory | ↓ Cooling (was Strong in Q4 2029, moved to Watch after March 11 vote) |
| Last interaction | March 11 — Board meeting. Voted NO on Optimus Home Edition. |
| Outstanding commitments | Expects $5B insurance coverage (currently $2B) before she'll vote YES at April meeting |
| Known concerns | Product liability risk for consumer Optimus. "We're rushing to market without adequate legal framework." |
| Next scheduled | April 15 board meeting |
| Risk level | MEDIUM |
| Notes | **ACTION NEEDED:** Call Kathleen before April 10. Her condition ($5B insurance) is achievable. Converting her vote prevents a public dissent that analysts will notice. She's not opposed to Optimus — she's opposed to the current liability posture. |

### Hiro Mizuno — Director, Risk Chair
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🔴 At Risk |
| Trajectory | ↓ Cooling (steadily since Dec 2029) |
| Last interaction | March 11 — Board meeting (video from Tokyo). Voted NO on Optimus Home Edition. Requested Scope 3 update. |
| Outstanding commitments | Scope 3 emissions update at April meeting. He also wants an "Optimus Employment Impact Statement." |
| Known concerns | (1) ESG impact of Optimus displacing domestic workers. (2) Insufficient product liability framework. (3) Feels his risk concerns are being outvoted rather than addressed. |
| Next scheduled | April 15 board meeting (video) |
| Risk level | HIGH |
| Notes | **ACTION NEEDED:** Schedule a 1-on-1 video call with Hiro before April meeting. He's the only director whose sentiment has been declining for 3 consecutive months. His ESG concern is legitimate and addressable — prepare the employment impact data. If he feels heard, he may abstain rather than vote No. A pattern of No votes from a Risk Committee chair gets analyst attention. |

### Kimbal Musk — Director
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟡 Watch |
| Trajectory | → Stable but unpredictable |
| Last interaction | March 11 — Board meeting. One of 2 dissenting votes on Elliott robotaxi spinoff rejection. |
| Outstanding commitments | None |
| Known concerns | Believes robotaxi spinoff could unlock $200B+ in shareholder value. Not opposed to Tesla strategy but sees financial opportunity in separation. |
| Next scheduled | April 15 board meeting |
| Risk level | LOW-MEDIUM |
| Notes | Kimbal's dissent on the Elliott vote is notable — he rarely breaks from you. His concern is financial, not strategic. Worth a private conversation about why the integrated model is superior long-term. |

### JB Straubel — Director, Strategic Advisor
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | → Stable |
| Last interaction | March 11 — Board meeting. Also dissented on Elliott vote (with Kimbal). Raised solid-state battery timeline concerns. |
| Outstanding commitments | None |
| Known concerns | Solid-state timeline may be too aggressive. Battery recycling at Redwood Materials could be better integrated with Tesla. |
| Next scheduled | April 15 board meeting |
| Risk level | LOW |
| Notes | JB's Elliott dissent was philosophical, not adversarial. He thinks the market would value a separate robotaxi entity higher. He's not aligned with Elliott — he's aligned with shareholder value. |

### Larry Ellison — Director
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟡 Watch |
| Trajectory | → Unknown (missed March meeting) |
| Last interaction | January 22 — Annual planning call. Missed March 11 board meeting (Oracle conflict). |
| Outstanding commitments | None |
| Known concerns | Time availability — serves on many boards. |
| Next scheduled | April 15 board meeting (tentative) |
| Risk level | LOW |
| Notes | Larry missed the March meeting. Two consecutive absences would be unusual. Confirm his April attendance early. His vote is reliably aligned with the CEO. |

---

# SECTION: INVESTOR_ANALYST_SENTIMENT
section_id: investor_sentiment

## Key Investor & Analyst Relationship Cards

### Cathie Wood — ARK Invest
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | → Stable (Tesla's #1 public advocate) |
| Last interaction | Feb 14 — Q4 2029 earnings call. Tasha Keeney (ARK) asked Optimus Home Edition TAM question. |
| Ownership | 48.2M shares (1.42%) |
| Public position | Tesla price target: $8,400 by 2034 (highest on Street). Robotaxi = 60% of value. |
| Known concerns | None publicly. Privately: concerned about Dojo CaaS competitive positioning vs. hyperscalers. |
| Risk level | LOW |

### Adam Jonas — Morgan Stanley
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | ↑ Warming (raised price target Jan 2030) |
| Last interaction | Feb 14 — Earnings call. Asked Vaibhav about operating margin sustainability. |
| Current rating | Overweight. PT: $2,800 → $3,200 (raised Jan 2030). |
| Known concerns | Buyback question — keeps pushing for capital return narrative. |
| Risk level | LOW |
| Notes | Adam is constructive. His "buyback question" is a signal that buy-side clients want capital return. Worth addressing proactively at April earnings call. |

### Ryan Brinkman — JP Morgan
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟡 Watch |
| Trajectory | → Flat (historically bearish, recently upgraded) |
| Last interaction | Feb 14 — Earnings call. Challenged Model 2 EU pricing margin compression. |
| Current rating | Neutral (upgraded from Underweight Jan 2030). PT: $1,600. |
| Known concerns | Model 2 margin compression. Believes Tesla is "buying market share" at the expense of profitability. |
| Risk level | LOW |
| Notes | Ryan is the Street bear. His upgrade was significant — means consensus is shifting. Keep delivering on margins and he'll follow. |

### Elliott Management (Paul Singer)
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🔴 At Risk |
| Trajectory | ↓ Adversarial and escalating |
| Last interaction | March 8 — Elliott's public letter to shareholders proposing robotaxi spinoff IPO. |
| Ownership | 0.8% stake (~$50B position at current price) |
| Public position | Robotaxi spinoff would unlock $800B-$1.2T in value. Board is "failing its fiduciary duty." |
| Known concerns | (1) Integrated model undervalues robotaxi. (2) CEO distraction (SpaceX/xAI/political). (3) Board independence questions (Kimbal, JB). |
| Risk level | HIGH |
| Notes | June 2030 AGM is the battlefield. Elliott may submit proxy resolution. Brandon has Wachtell engaged. Board voted 9-2 against spinoff March 11, but Elliott will use Kimbal and JB's dissent in their proxy materials. Need to neutralize before AGM. |

### Vanguard / BlackRock / State Street (passive)
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | → Stable (index investors, vote with management on most issues) |
| Last interaction | Feb 2030 — Annual proxy engagement meetings (IR team). |
| Combined ownership | 15.2% |
| Known concerns | ESG disclosure quality. Governance (board independence, CEO time). Vote predictably with management. |
| Risk level | LOW |

---

# SECTION: REGULATOR_SENTIMENT
section_id: regulator_sentiment

## Regulator & Government Relationship Cards

### NHTSA Administrator
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟡 Watch |
| Trajectory | → Stable but formal |
| Last interaction | Feb 14 — Data submission meeting on FSD v18 phantom braking investigation. |
| Outstanding commitments | Tesla committed to provide additional 90 days of fleet telemetry data. |
| Known concerns | 12 phantom braking incidents triggered investigation. OTA fix deployed — likely closure Q2 2030. |
| Next scheduled | Q2 2030 (investigation review) |
| Risk level | MEDIUM |
| Notes | The NHTSA relationship is professional but not warm. Rohan manages day-to-day. A proactive briefing on FSD v18.5 safety improvements could accelerate investigation closure. |

### EU DG Competition Commissioner
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🔴 At Risk |
| Trajectory | ↓ Cooling (Supercharger dominance inquiry opened Nov 2029) |
| Last interaction | Nov 2029 — Information request received. No direct meeting. |
| Outstanding commitments | Tesla must respond to Supercharger market dominance inquiry by May 2030. |
| Known concerns | Supercharger network = 2× all competitors combined. NACS licensing may not be sufficient "openness." |
| Next scheduled | No meeting scheduled — **this is the problem** |
| Risk level | HIGH |
| Notes | **ACTION NEEDED:** No direct engagement since November. Rohan should request a meeting to present NACS open licensing data. Proactive engagement reduces fine risk. Currently: "they're talking about us, not to us." |

### China MIIT Vice Minister Li
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | → Stable (Tom Zhu maintains relationship) |
| Last interaction | Jan 22, 2030 — CES discussions on China L4 timeline. |
| Outstanding commitments | FSD data sovereignty compliance (on-shore Shanghai Dojo). Beijing Giga environmental review documents. |
| Known concerns | Data localization. CEO's US political activities create periodic sensitivity. |
| Next scheduled | CEO Shanghai trip March 20-23 |
| Risk level | MEDIUM |
| Notes | Tom Zhu is the relationship anchor here. CEO meetings are ceremonial but important. Shanghai trip should include Ministry briefing. |

### India MEITY Secretary
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟡 Watch |
| Trajectory | ↓ Slightly cooling (data localization compliance gap identified) |
| Last interaction | Dec 2029 — Compliance review meeting in Delhi. |
| Outstanding commitments | DPDP Act compliance deadline approaching. ₹500Cr penalty risk. |
| Known concerns | Tesla fleet data processing partially done in US. Must transition to India by Q3 2030. |
| Next scheduled | No meeting scheduled |
| Risk level | MEDIUM |
| Notes | Rohan should schedule a compliance progress briefing. Showing good faith reduces penalty risk. |

---

# SECTION: PARTNER_SENTIMENT
section_id: partner_sentiment

## Key Partner Relationship Cards

### CATL (Dr. Robin Zeng, CEO)
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🔴 At Risk |
| Trajectory | ↓ Deteriorating (pricing dispute since Q4 2029) |
| Last interaction | Jan 2030 — Mediation session in Singapore. |
| Outstanding commitments | $80M pricing dispute in arbitration. Tesla committed to mediation in good faith. |
| Known concerns | CATL believes Tesla is undervaluing their contribution. BYD is offering CATL higher margins. CATL may prioritize BYD supply if dispute continues. |
| Next scheduled | CEO Shanghai trip March 20-23 — CATL negotiation is key meeting |
| Risk level | HIGH |
| Notes | **CRITICAL:** CATL supplies 34% of Tesla's battery cells. This relationship is the most strategically important supplier partnership. The $80M dispute is small relative to the $62B annual procurement, but the sentiment damage is real. CEO must personally engage Dr. Zeng in Shanghai. A handshake deal resolves this faster than arbitration. |

### Saudi PIF (Governor)
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | ↑ Warming (Riyadh groundbreaking was a highlight) |
| Last interaction | March 12 — Riyadh Gigafactory groundbreaking ceremony. CEO attended. |
| Outstanding commitments | Phase 2 co-investment ($1.8B PIF share) — approvals in progress. |
| Known concerns | PIF wants Optimus production for GCC market. Timeline is aggressive but achievable. |
| Risk level | LOW |

### Toyota (NACS Partnership)
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | ↑ Warming (NACS adoption deepening) |
| Last interaction | Feb 2030 — NACS integration milestone meeting in Nagoya. |
| Outstanding commitments | NACS deployment across Toyota NA fleet by Q4 2030. |
| Known concerns | None — mutually beneficial partnership. |
| Risk level | LOW |

### TSMC (Dojo chip manufacturing)
| Dimension | Detail |
|-----------|--------|
| Sentiment | 🟢 Strong |
| Trajectory | → Stable |
| Last interaction | Feb 2030 — Dojo v3 chip design review. Milan Kovac leads relationship. |
| Outstanding commitments | 3nm process allocation for Dojo v3 tape-out Q3 2030. |
| Known concerns | Taiwan geopolitical risk. TSMC capacity allocation is competitive (Apple, NVIDIA). |
| Risk level | MEDIUM (geopolitical, not relationship) |

---

# SECTION: COLD_RELATIONSHIPS
section_id: cold_contacts

## "Who Haven't I Talked To In Too Long?"

| Stakeholder | Role | Last CEO Contact | Days Since | Why It Matters | Recommended Action |
|------------|------|-----------------|-----------|----------------|-------------------|
| EU DG COMP Commissioner | Supercharger inquiry lead | Never (direct) | — | €200M fine risk. No proactive engagement. | Rohan to request meeting. CEO to join if escalated. |
| Hiro Mizuno | Board Risk Chair | March 11 (board only) | 4 days | 3 consecutive months of cooling sentiment. Feels outvoted. | Schedule 1-on-1 video call before April board. |
| India MEITY Secretary | Data localization regulator | Dec 2029 (via Rohan) | ~90 days | ₹500Cr penalty risk. Compliance gap identified. | Rohan to brief. CEO letter of commitment helps. |
| Larry Ellison | Director | Jan 22 (annual planning) | ~52 days | Missed March board meeting. Two absences = pattern. | Personal call to confirm April attendance. |
| Dr. Robin Zeng (CATL) | CEO, #1 battery supplier | Jan 2030 (Singapore mediation) | ~60 days | 34% of battery supply. Dispute souring relationship. | **CEO must meet in Shanghai March 20-23.** |
| Brandenburg Environmental Minister | Berlin factory permit | Never (direct) | — | €15M + 6mo delay risk on Berlin permit challenge. | Fatima Al-Rashid managing. CEO intervention unlikely needed. |

---

# EMBEDDING_TAGS
tags:
- tesla_stakeholder
- mcp_stakeholder_sentiment
- relationship_health
- board_sentiment
- investor_sentiment
- regulator_sentiment
- partner_sentiment
- analyst_sentiment
- elliott_management
- cathie_wood
- hiro_mizuno
- kathleen_wilson_thompson
- catl
- nhtsa
- eu_dg_comp
- cold_relationships
- who_to_call
- sentiment_trajectory
- at_risk
- cooling
- warming
