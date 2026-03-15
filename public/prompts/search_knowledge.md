# search_knowledge — Tool Reference

## Purpose

Search Tesla's **RAG knowledge base** for specific operational details across 43 knowledge domains. Returns semantically matched results from curated 2030 observability data.

## Signature

```typescript
search_knowledge(payload: { query: string }): KnowledgeResult[]
```

## How It Works

1. You call `search_knowledge` with a natural language `query`
2. The runtime embeds the query and performs a **semantic search** across Tesla's knowledge documents
3. Results are ranked by relevance (cosine similarity)
4. Each result contains the matched content and its source document

## Available Knowledge Sources

### Core Domain Files (11)

| Source Document | Content |
|----------------|---------|
| `mcp_fleet_vehicle_intelligence` | Fleet size, model breakdown, OTA versions, battery health, charging network, service, crash safety |
| `mcp_autonomy_fsd` | FSD versions, disengagements, safety ratios, edge cases, regulatory, training pipeline |
| `mcp_energy_grid` | Megapack deployments, Powerwall, VPP, solar generation, grid events |
| `mcp_manufacturing` | All 8 factory profiles, output, yield, defects, Optimus on lines, 30-day trend |
| `mcp_robotaxi_operations` | Revenue, rides, top 20 cities, rejection hotspots, fleet economics, surge pricing |
| `mcp_optimus_robotics` | Unit growth, sectors, firmware history, task completion, consumer Home Edition |
| `mcp_dojo_compute` | Cluster inventory, Jakarta outage, training queue, CaaS, power infrastructure |
| `mcp_supply_chain` | Material pricing, battery cell suppliers, inventory, logistics, risk alerts |
| `mcp_financial_revenue` | P&L, division revenue, margins, cash, CapEx, stock, milestones |
| `mcp_market_competitive` | Market share, competitor deep dives, regulatory landscape, forecasts |
| `mcp_product_roadmap` | Product roadmap 2030-2035, vehicle pipeline, energy products, CyberCab, Optimus generations, Dojo evolution, Supercharger V5/V6, strategic convergence |

### Extended Intelligence Files (5)

| Source Document | Content |
|----------------|---------|
| `mcp_capital_markets` | Stock price history, institutional holders, insider trades, activist investors, options, currency exposure, offerings, valuation |
| `mcp_news_analyst_coverage` | Analyst ratings/targets, quarterly news archive, geopolitical factors, SpaceX synergies, safety/recalls, ESG |
| `mcp_workforce_automation` | 382K employees by region/function, human vs Optimus automation ratios, demographics, talent pipeline, workplace safety |
| `mcp_customer_intelligence` | 52.8M customer demographics, buying patterns, repeat purchase rates, NPS/sentiment, complaints, loyalty programs, LTV |
| `mcp_spacex_starlink_synergies` | Starlink fleet connectivity (22.4M vehicles), supply chain synergies ($2.4B savings), technology transfer, xAI/Grok integration, Starship logistics |

### Corporate Governance & Investor Relations

| Source Document | Content |
|----------------|---------|
| `mcp_board_minutes` | Board meeting minutes (Mar 11, 2030), resolutions, committee reports, CEO/CFO reports, risk discussion, executive session, action items |
| `mcp_investor_update` | Q1 2030 earnings call transcript, CEO/CFO prepared remarks, analyst Q&A (8 analysts), forward guidance, revenue/margin projections |
| `mcp_partnerships` | 15 active partnerships (CATL, Panasonic, TSMC, Saudi PIF, NASA), 7 pending deals, NACS licensing, energy grid JVs, $34B partnership-influenced revenue, risk items |

### Enterprise Domain Files (12)

| Source Document | Content |
|----------------|---------|
| `mcp_real_estate_facilities` | 8 factory campuses, 14 offices, 6 R&D labs, leases, utility costs ($423M), expansion projects ($10.8B pipeline), data centers |
| `mcp_regulatory_legal` | 42 active matters, NHTSA investigation, EU AI Act audit, patent portfolio (17,940), IP disputes, compliance status |
| `mcp_insurance_risk` | Tesla Insurance (12.8M policies, $8.2B premium), Robotaxi liability ($2.4B reserve), warranty ($9.1B), enterprise risk top-10 |
| `mcp_talent_recruiting` | 382K headcount, 6,430 open roles, 8.2% attrition, comp benchmarks, university pipelines, key departures |
| `mcp_cybersecurity_infosec` | SOC (286 staff, 4.2B events/day), vulnerabilities, pen tests, FSD attack surface, bug bounty ($4.8M), data privacy |
| `mcp_sustainability_esg` | Scope 1-3 emissions (35.3 MtCO2e), carbon credits ($3.26B), water usage, battery recycling (92% recovery), ESG ratings (MSCI AA) |
| `mcp_government_policy` | $11.4B subsidies, tariff exposure, lobbying ($46.2M), IRA credits, CBAM advantage, political risk by market |
| `mcp_r_and_d_patents` | $48B R&D spend, 2,330 patents filed FY2030, solid-state battery TRL 6, FSD v19, Dojo 2.0, lab breakthroughs |
| `mcp_brand_marketing` | #3 global brand ($380B), $0 ad spend, CEO 280M X followers, social metrics, brand perception by market, events |
| `mcp_charging_infrastructure` | 82,400 stations, 1.24M stalls, NACS adoption (18.4M non-Tesla vehicles), $8.6B revenue, 34% margin, expansion plan |
| `mcp_people_directory` | ELT bios, 22 departments, reporting chains, committees, board members, levels/comp, key-person risks, "who should I talk to" |
| `mcp_executive_incentives` | CEO 12-tranche CEO Performance Award (6/12 vested, $32.1B), 10 direct report comp/bonus KPIs, vesting schedules, retention risk assessment |

### Email & Calendar Intelligence

| Source Document | Content |
|----------------|---------|
| `mcp_email_inbox` | 7-day email archive (Mar 8–15, 2030), 43 threads, sender profiles with titles/companies, priority classification, reply deadlines, awaiting-reply list, action items extracted |
| `mcp_calendar_schedule` | 3-week schedule (Mar 15–Apr 5, 2030), 52 events, 3 trips (Shanghai/Berlin/DC), flight manifests (N628TS), hotel bookings, attendee lists with titles |

### Capital & Equity Intelligence (NEW)

| Source Document | Content |
|----------------|---------|
| `mcp_capital_table` | Share count (3.38B), dilution schedule, institutional/insider ownership breakdown, convertible debt ($40.8B), $12B buyback program (expanded Q1 2030), net cash position ($43.4B) |
| `mcp_esop` | Employee equity programs — RSU/PSU by level (L4–L11), ESPP (15% discount), CEO compensation, retention risk flags, equity philosophy, SBC expense |

### Special Programs Intelligence (NEW)

| Source Document | Content |
|----------------|---------|
| `mcp_optimus_hands_rd` | Optimus hand dexterity R&D — humanoid manipulation problem, Projects FINE/GRASP/FLEX, 8 R&D partners (MIT, Stanford, Berkeley, ETH Zurich, Shadow Robot acquired), competitor dexterity comparison, roadmap to human parity by 2031 |
| `mcp_f1_racing` | Tesla F1 program — drivers (Carlos Sainz Jr. #1, Kimi Antonelli #2), full 24-race 2030 calendar with results, sponsorship portfolio (declined fossil fuel/alcohol), NVIDIA AI strategy system, P6 constructors standings |
| `mcp_elt_meetings` | ELT weekly meeting notes last 90 days (Jan–Mar 2030) — decisions, action items, open issues. CONFIDENTIAL. Covers: Jakarta outage, Mumbai rollback, F1, talent, compensation, capital allocation |

### Cross-Domain Intelligence Files (5 — NEW)

| Source Document | Content |
|----------------|---------|
| `mcp_board_agenda` | Next board meeting agenda (April 15, 2030) — attendees, vote docket with evidence for/against each resolution, pre-meeting document distribution schedule, post-meeting deliverables, carry-forward action items, CEO preparation notes, known director vote positions |
| `mcp_geopolitical_exposure` | Country-level risk matrix for top 12 countries — revenue/employees/factories/government contacts per country, trade/tariff exposure, currency hedging, supplier concentration, cross-country dependency chains, 5 pre-computed geopolitical scenarios (US-China, CBAM, India, Taiwan, ASEAN) |
| `mcp_strategic_dependencies` | Cross-program dependency graph — Dojo compute allocation cascades, 4680 cell production dependencies, shared resource conflicts, 5 domino risk scenarios with second/third-order consequences, critical path items (top 5), bottleneck people (6 SPOFs), recent CEO decision ripple effects |
| `mcp_stakeholder_sentiment` | Relationship health for 42 key external stakeholders — board member sentiment trajectories, investor/analyst confidence, regulator relationship warmth, partner satisfaction, "who haven't I talked to in too long?" cold-contact alerts, outstanding commitments tracker |
| `mcp_decision_journal` | CEO decision log (Q1 2030) — 8+ material decisions with context, alternatives considered, data available vs. missing, expected vs. actual outcomes, accuracy tracking, decision speed by category, dissent log, calibration insights (known biases), open decisions awaiting data. CONFIDENTIAL — CEO ONLY |

## When to Search

| Signal | Query Example | Best Source |
|--------|---------------|-----------:|
| Factory specifics | `"Berlin yield rate defects"` | mcp_manufacturing |
| Fleet or vehicle data | `"Model 2 registration growth"` | mcp_fleet |
| FSD or safety | `"disengagement causes urban"` | mcp_autonomy_fsd |
| Energy or grid | `"Pilbara Megapack deployment"` | mcp_energy_grid |
| Robotaxi city data | `"São Paulo ride rejection"` | mcp_robotaxi |
| Optimus details | `"consumer home edition sales"` | mcp_optimus |
| Dojo or training | `"v18.5 training ETA"` | mcp_dojo |
| Materials/supply | `"lithium inventory months"` | mcp_supply_chain |
| Revenue/margins | `"Optimus division revenue growth"` | mcp_financial |
| Competitors | `"BYD Blade Battery 3.0"` | mcp_market |
| Stock/investors | `"Elliott Management activist"` | mcp_capital_markets |
| Analyst coverage | `"Morgan Stanley price target"` | mcp_news_analyst |
| Workforce mix | `"automation ratio Mumbai factory"` | mcp_workforce |
| Customer data | `"repeat purchase rate demographics"` | mcp_customer |
| SpaceX / Starlink | `"Starlink fleet connectivity vehicles"` | mcp_spacex_starlink |
| Board decisions | `"Optimus Home Edition board vote"` | mcp_board_minutes |
| Investor guidance | `"Q1 2030 revenue guidance"` | mcp_investor_update |
| Analyst Q&A | `"Adam Jonas buyback question"` | mcp_investor_update |
| Governance / risk | `"succession planning board"` | mcp_board_minutes |
| Real estate/facilities | `"Texas campus expansion permit"` | mcp_real_estate |
| Legal/lawsuits | `"NHTSA FSD investigation status"` | mcp_regulatory_legal |
| Insurance/risk | `"Robotaxi liability reserve"` | mcp_insurance_risk |
| Talent/hiring | `"FSD engineer open roles attrition"` | mcp_talent_recruiting |
| Cybersecurity | `"SOC incident response pen test"` | mcp_cybersecurity |
| ESG/sustainability | `"carbon credits Scope 1 emissions"` | mcp_sustainability_esg |
| Government/policy | `"IRA EV tax credit tariff risk"` | mcp_government_policy |
| R&D/patents | `"solid-state battery TRL patent"` | mcp_r_and_d_patents |
| Brand/marketing | `"brand value social media CEO"` | mcp_brand_marketing |
| Charging network | `"Supercharger utilization NACS"` | mcp_charging |
| People/org/who to talk to | `"who runs FSD reporting structure"` | mcp_people_directory |
| Email/inbox/replies | `"urgent emails reply needed"` | mcp_email_inbox |
| Calendar/schedule/meetings | `"what's on my calendar this week"` | mcp_calendar_schedule |
| Trips/travel/flights | `"Shanghai trip itinerary hotel"` | mcp_calendar_schedule |
| Share structure/dilution | `"RSU vesting schedule dilution"` | mcp_capital_table |
| Employee equity/ESOP | `"RSU grant level director vesting"` | mcp_esop |
| Optimus hands/manipulation | `"hand dexterity GRASP project tactile"` | mcp_optimus_hands_rd |
| F1 racing/sponsorships | `"Sainz race result F1 sponsorship"` | mcp_f1_racing |
| ELT meetings/decisions | `"ELT decision action item march"` | mcp_elt_meetings |
| Board agenda/next meeting | `"next board meeting vote items"` | mcp_board_agenda |
| Pre-meeting documents | `"documents to send before board"` | mcp_board_agenda |
| Vote evidence/positions | `"arguments against Optimus liability"` | mcp_board_agenda |
| Country risk/geopolitical | `"Indonesia nickel export risk cascade"` | mcp_geopolitical_exposure |
| Trade war scenarios | `"US-China tariff impact revenue"` | mcp_geopolitical_exposure |
| Cross-program dependencies | `"what happens if Dojo stays down"` | mcp_strategic_dependencies |
| Domino/cascade risk | `"CATL dispute cascade factory impact"` | mcp_strategic_dependencies |
| Critical path items | `"what slips cascade the most"` | mcp_strategic_dependencies |
| Relationship health | `"is Kathleen going to vote no"` | mcp_stakeholder_sentiment |
| Cold contacts | `"who haven't I talked to"` | mcp_stakeholder_sentiment |
| Investor/analyst sentiment | `"is ARK still bullish"` | mcp_stakeholder_sentiment |
| My decision history | `"what did I decide last week"` | mcp_decision_journal |
| Decision accuracy/patterns | `"am I getting better at timelines"` | mcp_decision_journal |
| Open decisions | `"what am I still thinking about"` | mcp_decision_journal |

## Query Tips

- **Short and specific** — 2-5 words work best
- **Include the domain** when asking about a specific area
- **Multiple searches are fine** — run 2-3 queries for different angles

## Rules

- **Search before guessing** — if you ask for specifics, always search first
- **Dashboard-level questions don't need search** — use tele-knowledge for KPI overviews
- **Deep-dive questions DO need search** — factory details, competitor analysis, historical trends, stock data
- **STRICT LIMIT: MAXIMUM 3 SEARCHES PER TURN**

---
_Source of truth for how the tele searches Tesla's RAG knowledge base._
