# ENTITY
entity_id: mcp_government_policy
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-govpol
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: government_overview

MCP Domain: Government & Policy.

Server ID: `mcp-govpol`
Data refresh: Weekly (legislative tracking), monthly (subsidy accounting), real-time (tariff alerts)

Covers EV subsidies, tariffs, trade agreements, lobbying, political risk by market, and government relations.

---

# SECTION: SUBSIDIES_RECEIVED
section_id: subsidies

Government subsidies and incentives (FY2030):

| Country | Subsidy Type | Amount | Status |
|---------|------------|--------|--------|
| US | IRA EV tax credits (consumer) | $4.2B (pass-through) | Active — $7,500/vehicle |
| US | IRA battery manufacturing | $1.8B | Active — Texas + Nevada |
| China | NEV purchase subsidies | $2.1B (pass-through) | Reduced 20% from FY2029 |
| India | PLI (Production Linked Incentive) | $680M | Active — 5yr commitment |
| Saudi Arabia | Riyadh factory infrastructure | $2.1B | Disbursing — 45% received |
| Indonesia | EV manufacturing incentive | $340M | Active — 3yr remaining |
| Germany | Battery plant subsidy | €420M | Fully received |
| Japan | Clean vehicle incentive | ¥28B ($180M) | Active |
| **Total** | — | **$11.4B** | — |

At-risk subsidies:
- US IRA credits: 2026 election risk — potential phase-out under policy change. Impact: $4.2B/yr.
- China NEV subsidies: Declining 15-20%/yr. Expected to end by 2032.

---

# SECTION: TARIFFS_TRADE
section_id: tariffs

Active tariff exposure:

| Trade Route | Tariff | Annual Impact | Mitigation |
|------------|--------|-------------|-----------|
| US → China (components) | 25% | $180M | Shanghai local sourcing 94% |
| China → EU (vehicles) | 21% (provisional) | $420M | Berlin factory handles EU demand |
| EU → US (vehicles) | 2.5% | $62M | Minimal — most US demand made locally |
| India import (components) | 15-40% | $280M | Mumbai localization at 68%, target 80% |
| Indonesia export tax (nickel) | 10% | $140M | Strategic reserves + CATL JV |

Pending trade actions:
- **EU Carbon Border Adjustment (CBAM)**: Effective 2026, fully enforced by 2030. Tesla advantage — lower carbon intensity than competitors. Net benefit estimated +$200M/yr vs legacy OEMs.
- **US-China tech export controls**: Dojo chips classified as dual-use. Export license secured for Shanghai R&D center through 2031.

---

# SECTION: LOBBYING
section_id: lobbying

Lobbying and government relations (FY2030):

| Jurisdiction | Spend | Focus Areas | Key Wins |
|-------------|-------|------------|---------|
| US Federal | $18.2M | AV regulation, IRA extension, NACS standard | NHTSA AV Framework 3.0 |
| US State (all) | $8.4M | Direct sales, L4 approval | 28 states L4 certified |
| EU | €12.6M | AI Act classification, CBAM, charging | NACS adopted as EU standard |
| China | $4.2M | L4 approval, data localization | 4 cities L4 approved |
| India | $2.8M | Import duty reduction, L4 expansion | 6 cities L4 approved |
| **Total** | **$46.2M** | — | — |

Registered federal lobbyists: 14
PAC contributions: $0 (Tesla does not operate a PAC)

---

# SECTION: POLITICAL_RISK
section_id: political_risk

Political risk assessment by market (March 2030):

| Market | Risk Level | Key Concern | Revenue Exposure |
|--------|-----------|------------|-----------------|
| China | HIGH | Forced JV, data sovereignty, geopolitical | $340B (28%) |
| US | MEDIUM | IRA policy change, AV regulation shifts | $380B (32%) |
| EU | LOW-MEDIUM | AI Act compliance, CBAM advantage | $210B (18%) |
| India | LOW | Pro-EV government, expanding approval | $86B (7%) |
| Saudi Arabia | LOW | Government partner, aligned incentives | $42B (4%) |
| Indonesia | LOW | Strong EV mandate, local manufacturing | $38B (3%) |

---

# EMBEDDING_TAGS
tags:
- tesla_government
- mcp_government_policy
- subsidies
- tariffs
- lobbying
- political_risk
- trade_agreements
- ev_tax_credit
- ira
- cbam
- nacs_standard
