# ENTITY
entity_id: mcp_geopolitical_exposure
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-geopolitical
data_window: march_2030
classification: confidential_internal

---

# SECTION: SERVER_OVERVIEW
section_id: geopolitical_overview

MCP Domain: Geopolitical Exposure & Country-Level Risk Matrix.

Server ID: `mcp-geopolitical`
Authentication: Tesla UKM scoped JWT (read: geopolitical.*, risk.country.*)
Data refresh: Weekly (risk scores), daily (regulatory/trade alerts), real-time (crisis events)
Classification: CONFIDENTIAL — restricted to CEO, CFO, General Counsel, VP Public Policy

This domain maps Tesla's operational, financial, and regulatory exposure by country — connecting factory presence, revenue, supply chain dependency, government relationships, political stability, trade risk, and currency exposure into a single integrated view. Used to answer cross-domain questions about country-level risk cascades.

---

# SECTION: GLOBAL_EXPOSURE_SUMMARY
section_id: exposure_summary

## Tesla Global Footprint (March 2030)

| Metric | Value |
|--------|-------|
| Countries with direct operations | 68 |
| Countries with factory presence | 8 |
| Employees outside US | 224,000 (58.6% of 382K) |
| Revenue from non-US markets | $720B (58.1% of $1.24T annualized) |
| Supplier countries | 42 |
| Active regulatory proceedings by country | 14 |
| Currency exposures | 28 currencies |

---

# SECTION: COUNTRY_RISK_CARDS
section_id: country_cards

## Top 12 Country Exposure Cards

---

### 🇺🇸 United States

| Dimension | Detail |
|-----------|--------|
| Revenue | $520B annualized (41.9%) |
| Employees | 158,000 (41.4%) |
| Factories | Texas (1.8M), Fremont (180K) |
| Key government contacts | DOE Secretary, NHTSA Administrator (last meeting: Feb 14), IRA program office |
| Regulatory status | L4 certified 28 states. NHTSA FSD v18 investigation closing Q2. |
| Political risk | MEDIUM — IRA credits ($6.0B/yr) at risk if administration changes 2032. 7 EV mandate states may revise. |
| Trade exposure | 25% tariff on China imports affects sourced components ($840M/yr). USMCA compliant for Mexico operations. |
| Currency | USD (base currency) |
| Supplier concentration | 680 US-based suppliers (24% of total procurement) |
| Election timeline | Midterms Nov 2030. Presidential 2032. |
| Relationship health | ✅ Strong — CEO engaged at federal level, Rohan active in DC |

---

### 🇨🇳 China

| Dimension | Detail |
|-----------|--------|
| Revenue | $298B annualized (24.0%) |
| Employees | 22,400 (5.9%) |
| Factories | Shanghai (2.4M units/yr) |
| Key government contacts | MIIT Vice Minister Li (last meeting: Jan 22), Shanghai Municipal Party Secretary, CATL CEO Dr. Zeng |
| Regulatory status | L4 approved in 4 cities. National approval pending Q3 2030. Data localization: all fleet data on-shore (Shanghai Dojo cluster). |
| Political risk | HIGH — US-China tensions could escalate. Forced JV scenario: 15% probability. Asset seizure: 3% probability. |
| Trade exposure | 15% import duty avoided via local production. NEV credits ($2.1B/yr) may phase down 20% in 2031. Export tariff risk for Shanghai→EU vehicles. |
| Currency | CNY — hedged 60% via forward contracts. ¥/$ volatility: 8.2% annualized. |
| Supplier concentration | 420 China-based suppliers (34% of battery cell supply from CATL). |
| Election timeline | N/A — CPC Congress 2032. |
| Relationship health | 🟡 Stable but watchful — CEO's political activities create periodic tension. Tom Zhu is primary relationship manager. |

**Cascade scenario:** If China imposes data export restrictions → all FSD training data stays on-shore → Shanghai Dojo cluster must be expanded (+$800M) → FSD v19 China variant delayed 6 months → 12.4M fleet can't activate FSD → $8.4B incremental revenue at risk.

---

### 🇩🇪 Germany (EU Hub)

| Dimension | Detail |
|-----------|--------|
| Revenue | $124B annualized (10.0%) — covers all EU |
| Employees | 18,600 (4.9%) |
| Factories | Berlin (1.2M units/yr) |
| Key government contacts | EU DG COMP Commissioner (Supercharger dominance inquiry), Brandenburg Environmental Minister, German Chancellor's office |
| Regulatory status | EU L4 approved in 18 countries. EU AI Act audit scheduled Jun 30 — partial compliance. €200M fine risk. Berlin environmental permit hearing Apr 2030. |
| Political risk | MEDIUM — EU AI Act is highest regulatory risk globally. CBAM (Carbon Border Adjustment) is actually favorable to Tesla. |
| Trade exposure | €24,900 Model 2 pricing — 18.4% gross margin (compressed from 22%). CBAM gives Tesla 4.2% cost advantage over Chinese competitors. |
| Currency | EUR — hedged 55%. €/$ volatility: 6.4% annualized. |
| Supplier concentration | 180 EU-based suppliers. Battery cells: mix of Berlin in-house + CATL Hungary plant. |
| Election timeline | German federal election Sep 2030. EU Parliament stable until 2029 cycle. |
| Relationship health | 🟡 Strained — Berlin environmental permit challenge creating friction. EU AI Act audit is adversarial. |

**Cascade scenario:** If EU AI Act audit fails → €200M fine + FSD suspension in 18 EU countries → Robotaxi EU expansion pauses (48 cities affected) → $42B annualized robotaxi revenue at risk → BYD fills vacuum with Ocean X robotaxi (2031 launch).

---

### 🇮🇳 India

| Dimension | Detail |
|-----------|--------|
| Revenue | $68B annualized (5.5%) |
| Employees | 14,200 (3.7%) |
| Factories | Mumbai (900K units/yr) |
| Key government contacts | MEITY Secretary (data localization), Commerce Minister, Maharashtra CM |
| Regulatory status | L4 approved in 6 cities. Data localization (DPDP Act) compliance in progress — ₹500Cr penalty risk. Local content at 62% (target 65% by 2031). |
| Political risk | MEDIUM — India protectionism is rising. Local content requirements may increase to 75% in 2032. PLI incentive ($680M) tied to export commitments. |
| Trade exposure | Import duty 15-40% (avoided via Mumbai factory). Local content rules favor Indian-made components. |
| Currency | INR — hedged 40%. ₹/$ volatility: 9.8% annualized. |
| Supplier concentration | 120 India-based suppliers. Growing local battery supply (Tata Chemicals, Amara Raja). |
| Election timeline | General election 2029 completed. State elections ongoing. |
| Relationship health | ✅ Good — PLI partnership strong. CEO visited Mumbai Nov 2029. |

**Cascade scenario:** If India raises local content to 75% → Mumbai factory must source 13% more locally → ₹480B capex expansion (Lines 8-9) must include local supplier development → timeline slips 6 months → 1.4M capacity target delayed to Q4 2032.

---

### 🇸🇦 Saudi Arabia

| Dimension | Detail |
|-----------|--------|
| Revenue | $18B annualized (1.5%) — growing fastest (Middle East hub) |
| Employees | 4,200 (1.1%) |
| Factories | Riyadh (340K units/yr, Phase 1 — ramping) |
| Key government contacts | PIF Governor, CITC Chairman, Crown Prince's economic team |
| Regulatory status | CITC vehicle data: compliant. Robotaxi licensing: Vision 2030 framework. Optimus industrial: approved for GCC markets. |
| Political risk | LOW-MEDIUM — Strong government partnership. PIF co-investing $1.8B in Phase 2. Risk: regional instability (Yemen, Iran) could disrupt. |
| Trade exposure | 18% import tariff avoided via local production. Saudi PIF subsidy: $2.1B installment received Feb 2030. |
| Currency | SAR — pegged to USD (minimal FX risk). |
| Supplier concentration | 28 Saudi/GCC suppliers. Import-heavy for now (batteries from Shanghai). |
| Relationship health | ✅ Strong — CEO attended Riyadh groundbreaking March 12. PIF relationship is Tesla's strongest sovereign partnership. |

---

### 🇮🇩 Indonesia

| Dimension | Detail |
|-----------|--------|
| Revenue | $24B annualized (1.9%) |
| Employees | 8,400 (2.2%) |
| Factories | Jakarta (650K units/yr) |
| Key government contacts | Industry Minister, Nickel mining regulatory body |
| Regulatory status | EV mandate compliant — local content 62% (target 65% by 2031). Dojo Jakarta cluster (operational, post-outage). |
| Political risk | MEDIUM — Nickel export ban could be expanded. New government (elected 2029) is more protectionist. |
| Trade exposure | Nickel sourcing: Indonesia supplies 38% of Tesla's nickel. Export restrictions would affect all non-Indonesian factories. |
| Currency | IDR — hedged 30%. IDR/$ volatility: 11.2% annualized (highest exposure). |
| Supplier concentration | 64 Indonesia-based suppliers. Critical: nickel laterite processing (3 suppliers). |
| Relationship health | 🟡 Good but requires attention — last CEO visit: Aug 2029. |

**Cascade scenario:** If Indonesia imposes nickel export restrictions → 38% of Tesla's nickel supply disrupted → 4680 cell production at Texas, Berlin, Mumbai affected → battery pack costs increase 8-12% → vehicle margins compressed 1.5-2.0pts across entire fleet.

---

### 🇲🇽 Mexico

| Dimension | Detail |
|-----------|--------|
| Revenue | $14B annualized (1.1%) |
| Employees | 12,800 (3.4%) |
| Factories | Monterrey (580K units/yr) |
| Key government contacts | Economy Secretary, Nuevo León Governor |
| Regulatory status | USMCA compliant. No L4 framework yet — lobbying in progress. |
| Political risk | LOW-MEDIUM — USMCA renegotiation due 2026 (completed). Nearshoring trend favorable. New government cooperative. |
| Trade exposure | USMCA allows tariff-free export to US/Canada. Supply chain beneficiary of US-China decoupling. |
| Currency | MXN — hedged 45%. MXN/$ volatility: 7.8% annualized. |
| Supplier concentration | 92 Mexico-based suppliers. Growing as nearshoring accelerates. |
| Relationship health | ✅ Strong — Monterrey factory is a government showcase. |

---

### 🇯🇵 Japan

| Dimension | Detail |
|-----------|--------|
| Revenue | $32B annualized (2.6%) |
| Employees | 2,400 (0.6%) |
| Factories | None (supplied from Shanghai) |
| Key government contacts | MLIT AV Standards committee, Toyota leadership (NACS licensing partner) |
| Regulatory status | L3 approved. L4 pilot in Tokyo (target Q4 2030). Optimus Home Edition: METI approval granted March 28. |
| Political risk | LOW — Stable regulatory environment. Pro-EV government policy. |
| Trade exposure | Import duties: 0% on EVs. Yen weakness benefits Tesla pricing. Strong Toyota NACS partnership. |
| Currency | JPY — hedged 50%. ¥/$ at historic lows — favorable for Tesla pricing. |
| Relationship health | ✅ Strong — Toyota NACS deal is crown jewel partnership. |

---

### 🇬🇧 United Kingdom

| Dimension | Detail |
|-----------|--------|
| Revenue | $28B annualized (2.3%) |
| Employees | 3,200 (0.8%) |
| Factories | None (supplied from Berlin) |
| Key government contacts | Transport Secretary (L4 framework), Competition & Markets Authority |
| Regulatory status | L4 approved for motorways. Urban L4 pending (expected H2 2030). |
| Political risk | LOW — Post-Brexit regulatory independence allows faster L4 adoption than EU. |
| Trade exposure | UK-EU TCA: 0% tariff on EVs with sufficient local content. Tesla Berlin production qualifies. |
| Currency | GBP — hedged 50%. |
| Relationship health | ✅ Good — F1 team (James Allison, Silverstone) raises profile. |

---

### 🇧🇷 Brazil

| Dimension | Detail |
|-----------|--------|
| Revenue | $12B annualized (1.0%) |
| Employees | 3,800 (1.0%) |
| Factories | None (São Paulo is robotaxi hub, supplied from Monterrey) |
| Key government contacts | São Paulo Governor, ANEEL (energy regulator) |
| Regulatory status | Robotaxi pilot approved in São Paulo. EV import duty: 35% (lobbying for reduction). |
| Political risk | MEDIUM — High import duties discourage vehicle sales. Favorable for energy (Megapack + grid). |
| Trade exposure | 35% import duty on vehicles. Megapack: no duty (infrastructure exemption). |
| Currency | BRL — hedged 25%. BRL/$ volatility: 14.2% annualized (high). |
| Relationship health | 🟡 Developing — São Paulo robotaxi launch is relationship-building opportunity. |

---

### 🇦🇺 Australia

| Dimension | Detail |
|-----------|--------|
| Revenue | $16B annualized (1.3%) |
| Employees | 1,800 (0.5%) |
| Factories | None. Pilbara Megapack (4.2 GWh) — largest single energy project. |
| Key government contacts | Energy Minister, Western Australia Premier |
| Regulatory status | EV-friendly. No L4 framework yet. Energy storage: fully approved. |
| Political risk | LOW — Pro-renewable government. Critical minerals partnership opportunity. |
| Trade exposure | 0% EV tariff. Critical minerals: lithium, rare earth potential source (diversification from China). |
| Currency | AUD — hedged 35%. |
| Relationship health | ✅ Strong — Pilbara project is government flagship. |

---

### 🇰🇷 South Korea

| Dimension | Detail |
|-----------|--------|
| Revenue | $22B annualized (1.8%) |
| Employees | 1,200 (0.3%) |
| Factories | None. Samsung SDI battery partnership. |
| Key government contacts | Industry Minister, Samsung SDI CEO, Hyundai leadership (NACS) |
| Regulatory status | EV subsidies active. L3 approved. Autonomous taxi pilot in Sejong City. |
| Political risk | LOW — Strong tech-friendly government. Samsung SDI partnership critical. |
| Trade exposure | 0% EV tariff under KORUS FTA. Samsung SDI supplies 18% of Tesla's prismatic cells. |
| Currency | KRW — hedged 40%. |
| Relationship health | ✅ Good — Samsung partnership deepening. |

---

# SECTION: CROSS_COUNTRY_DEPENDENCIES
section_id: cross_dependencies

## Critical Cross-Country Dependency Chains

| Dependency Chain | Source Country | Dependent Countries | Disruption Impact |
|-----------------|---------------|--------------------|--------------------|
| CATL battery cells (34% of supply) | China | All factories (TX, Berlin, Mumbai, Jakarta, Monterrey) | 6-8 week production disruption at 5 factories |
| Nickel ore (38% from Indonesia) | Indonesia | 4680 cell production globally | 8-12% cost increase on battery packs |
| TSMC Dojo chips | Taiwan | All Dojo clusters (Austin, Jakarta, Singapore, Berlin) | 12-18 month chip shortage — Dojo expansion halts |
| Shanghai → EU vehicle exports | China | European sales (pre-Berlin capacity) | €4.2B revenue gap until Berlin absorbs volume |
| Chilean lithium (40% of supply) | Chile | All battery production | $1.2B/yr cost increase if spot pricing resumes |
| Rare earth (magnets) | China (82% of global supply) | Motor production at all factories | 4-6 month production slowdown, $2.8B cost exposure |

---

# SECTION: SCENARIO_MODELING
section_id: scenarios

## Pre-Computed Geopolitical Scenarios

### Scenario 1: US-China Trade War Escalation
**Trigger:** US raises China tariffs to 50%. China retaliates with export controls on rare earth.
**Impact:** Shanghai factory unaffected (domestic sales). EU exports from Shanghai halted ($4.2B gap). Rare earth supply disrupted — motor production at all factories slowed. Battery cell supply from CATL at risk.
**Revenue at risk:** $42B annualized (3.4% of total)
**Mitigation:** Berlin + Mumbai + Monterrey absorb EU/Americas demand within 6 months. Rare earth: 18-month Australian alternative supply chain (Lynas Corp).

### Scenario 2: EU Carbon Border Adjustment (CBAM) — Favorable
**Trigger:** EU CBAM reaches full implementation 2030.
**Impact:** Tesla benefits — lowest carbon footprint per vehicle in industry. BYD, Chinese EV imports face 8-14% additional cost. Tesla's Berlin factory is fully compliant.
**Revenue upside:** $6-8B annualized competitive advantage in EU pricing.

### Scenario 3: India Protectionism Increase
**Trigger:** India raises local content requirements to 75% and increases import duties to 50%.
**Impact:** Mumbai factory must accelerate local supplier development. Lines 8-9 expansion timeline extends 6 months. Vehicle margins compressed 1.5pts.
**Revenue at risk:** $8B annualized from import-dependent models.
**Mitigation:** Tata Chemicals partnership for local battery cell production. PLI incentive offset partially.

### Scenario 4: Taiwan Strait Crisis
**Trigger:** China-Taiwan military confrontation disrupts TSMC production.
**Impact:** Dojo chip supply cut off for 12-18 months. No new Dojo clusters. CaaS expansion halted. FSD training capacity frozen.
**Revenue at risk:** $36B Dojo CaaS + delayed FSD v19 ($12B incremental)
**Mitigation:** Samsung foundry backup (6-month qualification). Intel alternative 18 months out. Existing compute sustains current operations.

### Scenario 5: ASEAN Currency Crisis
**Trigger:** IDR, MYR, THB devalue 20%+ simultaneously.
**Impact:** Jakarta factory costs drop in USD terms (favorable). Local demand depressed. Nickel pricing in USD increases. Supply chain payment disruptions.
**Revenue at risk:** $12B ASEAN revenue at risk of demand destruction.
**Mitigation:** Currency hedges cover 30-40%. Pricing flexibility in local markets.

---

# EMBEDDING_TAGS
tags:
- tesla_geopolitical
- mcp_geopolitical
- country_risk
- political_risk
- trade_risk
- tariff
- currency_exposure
- cross_country
- supply_chain_dependency
- china_risk
- eu_risk
- india_risk
- indonesia_risk
- scenario_modeling
- cascade_analysis
- regulatory_exposure
- sanctions
- trade_war
- cbam
- rare_earth
- lithium
- nickel
- catl
- tsmc
- taiwan
