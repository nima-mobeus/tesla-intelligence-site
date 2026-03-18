# ENTITY
entity_id: mcp_supply_chain
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-supply
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: supply_overview

MCP Domain 8: Supply Chain & Materials.

Server ID: `mcp-supply`
Authentication: Tesla UKM scoped JWT (read: supply.*, write: supply.purchase_orders)
Uptime SLA: 99.99%
Data refresh: Hourly (spot pricing), daily (inventory levels), weekly (supplier reports)

This domain tracks raw material pricing, battery cell supply, supplier relationships, inventory levels, logistics, and supply chain risk. Tesla's vertical integration strategy means this domain also covers Tesla's own lithium refinery, cathode production, and 4680+ cell manufacturing. This intelligence is used to brief you on material costs, supplier disputes, and inventory health.

Primary data feeds:
- `supply.materials.pricing` — spot and contract pricing for critical materials
- `supply.battery.cell_supply` — cell supply by manufacturer
- `supply.inventory.months` — months of inventory for key materials
- `supply.logistics.status` — shipping and transport metrics
- `supply.risk.alerts` — supply chain disruption alerts

---

# SECTION: MATERIALS_PRICING_MONTHLY
section_id: supply_materials

Critical materials pricing (monthly averages, $/ton):

| Month | Lithium | Nickel | Cobalt | Copper | Rare Earth | Silicon |
|-------|---------|--------|--------|--------|-----------|---------|
| Apr 2029 | $11,200 | $19,800 | $32,400 | $8,600 | $78,000 | $13,200 |
| May 2029 | $11,400 | $19,600 | $31,800 | $8,700 | $79,000 | $13,000 |
| Jun 2029 | $11,800 | $19,400 | $31,200 | $8,800 | $79,500 | $12,800 |
| Jul 2029 | $12,000 | $19,200 | $30,600 | $8,900 | $80,000 | $12,600 |
| Aug 2029 | $12,200 | $19,000 | $30,000 | $9,000 | $80,200 | $12,400 |
| Sep 2029 | $12,600 | $18,800 | $29,600 | $9,200 | $80,400 | $12,200 |
| Oct 2029 | $12,800 | $18,800 | $29,200 | $9,400 | $80,800 | $12,200 |
| Nov 2029 | $13,000 | $18,900 | $29,000 | $9,400 | $81,000 | $12,200 |
| Dec 2029 | $13,200 | $19,000 | $28,800 | $9,500 | $81,200 | $12,100 |
| Jan 2030 | $13,600 | $18,800 | $28,600 | $9,600 | $81,600 | $12,100 |
| Feb 2030 | $13,800 | $18,800 | $29,000 | $9,700 | $81,800 | $12,100 |
| Mar 2030 | $14,200 | $18,600 | $28,400 | $9,800 | $82,000 | $12,100 |

Lithium trend: +26.8% over 12 months. Driven by:
1. Chilean earthquake (Feb 2030) — mine output disruption
2. Global EV production scaling faster than lithium mining expansion
3. Battery recycling not yet at scale (projected 2032 for meaningful contribution)

Nickel trend: −6.1% over 12 months. Indonesian production expansion stabilized global supply.

Cobalt trend: −12.3% over 12 months. Tesla and industry moving to low-cobalt/no-cobalt chemistries.

---

# SECTION: BATTERY_CELL_SUPPLY
section_id: supply_battery_cells

Battery cell supply chain (March 2030):

| Supplier | Share | Cells/Month (M) | Chemistry | Contract Through | Risk |
|----------|-------|----------------|----------|-----------------|------|
| Tesla Internal (4680+) | 38% | 684 | LFP + NMC811 | N/A | ✅ Low |
| CATL | 28% | 504 | LFP + NMC | Dec 2032 | ✅ Low |
| Panasonic | 22% | 396 | NMC + 4680 | Dec 2031 | ✅ Low |
| LG Energy | 8% | 144 | NMC622 | Jun 2031 | ⚠️ Renewal |
| BYD Blade (licensed) | 4% | 72 | LFP | Mar 2033 | ✅ Low |

Quarterly cell supply history:

| Quarter | Total Cells (B) | Tesla % | CATL % | Panasonic % | LG % | BYD % |
|---------|---------------|---------|--------|-------------|------|-------|
| Q2 2029 | 4.2 | 32% | 30% | 24% | 10% | 4% |
| Q3 2029 | 4.8 | 34% | 29% | 23% | 10% | 4% |
| Q4 2029 | 5.4 | 36% | 28% | 23% | 9% | 4% |
| Q1 2030 | 5.4 | 38% | 28% | 22% | 8% | 4% |

Tesla internal cell production:
- 4680+ cell: Primary format for new vehicles (Cybertruck, Semi, Model 2)
- Production sites: Texas (400M/month), Nevada (180M/month), Shanghai (104M/month)
- Cost: $62/kWh (down from $78/kWh in Q2 2029)
- Target: $48/kWh by end of 2030 (dry electrode process improvements)

LG Energy renewal risk:
- Current contract: 144M cells/month through June 2031
- Renewal negotiations started February 2030
- LG requesting 8% price increase citing material costs
- Tesla leverage: Can increase internal production to absorb LG's volume if needed
- Likelihood of renewal: 75% at current terms, 90% with 4% price increase compromise

---

# SECTION: INVENTORY_LEVELS
section_id: supply_inventory

Months of inventory for critical materials (March 2030):

| Material | Months of Inventory | Target | Status | Trend |
|----------|-------------------|--------|--------|-------|
| Lithium | 14 | 12 | ✅ Above target | Declining (rising prices) |
| Nickel | 10 | 8 | ✅ Above target | Stable |
| Cobalt | 18 | 6 | ✅ Well above (reducing usage) | Declining (intentional) |
| Copper | 8 | 6 | ✅ On target | Stable |
| Rare earth | 6 | 4 | ✅ On target | Stable |
| Silicon (solar) | 12 | 8 | ✅ Above target | Stable |
| Steel | 4 | 3 | ✅ On target | Stable |
| Aluminum | 5 | 3 | ✅ On target | Stable |
| Glass | 6 | 4 | ✅ On target | Stable |

Tesla's lithium refinery (Austin, TX):
- Opened: 2028
- Capacity: Processes 18% of Tesla's global lithium needs
- Source: Spodumene from Australia + brine from Nevada
- Cost advantage: 22% below market spot price
- Expansion plan: Phase 2 (2031) to process 30% of needs

---

# SECTION: LOGISTICS
section_id: supply_logistics

Global logistics network (March 2030):

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Supplier count | 2,840 | +420 |
| Countries sourced from | 62 | +8 |
| Average delivery time | 4.2 days | −1.8 days |
| On-time delivery rate | 96.8% | +2.4% |
| Freight cost per vehicle | $340 | −$60 |
| Vehicles in transit (global) | 1,800,000 | +400,000 |
| Dedicated cargo ships | 14 | +4 |
| Rail cars | 2,400 | +600 |

Shipping route efficiency:

| Route | Monthly Volume | Transit Time | Mode |
|-------|---------------|-------------|------|
| Shanghai → EU | 180,000 vehicles | 28 days | Ship |
| Shanghai → SE Asia | 120,000 vehicles | 8 days | Ship |
| Texas → US dealers | 240,000 vehicles | 3 days | Rail + truck |
| Berlin → EU dealers | 180,000 vehicles | 2 days | Rail |
| Mumbai → India dealers | 140,000 vehicles | 1 day | Rail |

---

# SECTION: SUPPLY_RISK_ALERTS
section_id: supply_risks

Active supply chain risk alerts (March 2030):

| Risk | Severity | Material | Region | Impact | Mitigation |
|------|---------|---------|--------|--------|-----------|
| Chilean lithium disruption | ⚠️ Medium | Lithium | South America | +12% price, 3-month recovery | 14 months inventory + Texas refinery |
| LG contract renewal | 🔵 Low | Battery cells | South Korea | 8% of cell supply | Increase internal production |
| Copper price rising | 🔵 Low | Copper | Global | +6% in 90 days | Within budget tolerance |
| Taiwan strait tension | 🔵 Watch | Semiconductors | Taiwan | TSMC chip supply | 8 months chip inventory |
| Red Sea shipping delays | ✅ Resolved | All | Middle East | Was +4 days transit | Alternative routes established |

Historical disruptions (2029-2030):

| Date | Event | Impact | Recovery Time |
|------|-------|--------|-------------|
| Apr 2029 | Nickel supplier strike (Indonesia) | −4% supply for 2 weeks | 3 weeks |
| Jul 2029 | Taiwan typhoon (TSMC facility) | Chip delivery delayed 5 days | 2 weeks |
| Oct 2029 | German rail strike | Berlin deliveries delayed 3 days | 1 week |
| Feb 2030 | Chilean earthquake (lithium mines) | Lithium price +8% in 2 weeks | Ongoing (est. April recovery) |

---

# SECTION: ACTIVE_SUPPLIER_DISPUTES
section_id: supplier_disputes

Active supplier disputes and negotiations (March 2030):

**CATL Pricing Dispute ($80M):**
- Filed: December 2029 in Singapore International Arbitration Centre (SIAC)
- Issue: Pricing formula disagreement on nickel-indexed battery cells for Q2-Q4 2029
- CATL claim: Tesla owes $80M adjustment based on their interpretation of nickel price escalation clause
- Tesla position: Contract formula is clear; the escalation threshold was not triggered. Tesla's reading supported by independent commodity pricing data (Shanghai Metals Market)
- Supply impact: **None** — supply continues uninterrupted. Both sides have firewall provisions
- Status: Mediation phase commenced Feb 2030. If mediation fails, formal arbitration hearing scheduled Q3 2030
- Risk: Low. Even worst-case $80M = 0.006% of revenue. Relationship is commercially valuable to both parties ($504M/month in cell supply)
- Owner: Brandon Ehrhart (GC), with Sarah Chen (Deputy GC, IP) on contract interpretation
- Contingency: Tesla can increase internal 4680+ production by 15% to absorb CATL's volume if relationship deteriorates

**LG Energy Renewal Negotiation:**
- Current contract: 144M cells/month through June 2031
- LG requesting 8% price increase ($0.04/cell) citing raw material costs
- Tesla leverage: Internal production can absorb LG's volume if needed (demonstrated capacity)
- Likely outcome: 4% compromise ($0.02/cell), renewal through Dec 2033
- Timeline: Decision needed by Sep 2030 for production planning

---

# SECTION: SINGLE_SOURCE_RISK
section_id: single_source

Single-source and concentration risk assessment (March 2030):

| Component | Supplier | Concentration | Risk | Mitigation | Timeline |
|----------|---------|--------------|------|-----------|---------|
| FSD inference chip (HW4) | TSMC (5nm) | 100% | ⚠️ HIGH | 8 months chip inventory + Samsung 4nm qualification | Samsung qual Q4 2030 |
| Ultra-high-purity silicon | Wacker Chemie | 82% | ⚠️ MEDIUM | Shin-Etsu as backup (18%), new supplier qual underway | Diversified by Q2 2031 |
| Permanent magnets | Hitachi Metals | 68% | 🔵 LOW-MEDIUM | TDK (22%), Vacuumschmelze (10%) | Stable |
| Optimus actuators | Harmonic Drive | 74% | ⚠️ MEDIUM | Nabtesco (26%), internal development underway | Internal by 2032 |
| Glass (windshields) | AGC | 48% | 🔵 LOW | Saint-Gobain (32%), Fuyao (20%) | Well-diversified |
| Seat foam | Woodbridge | 56% | 🔵 LOW | Lear (28%), local suppliers (16%) | Stable |

Critical single-source: **TSMC** for FSD inference chips. Taiwan Strait scenario would halt FSD chip supply in ~8 months. Samsung 4nm qualification in progress — expected operational Q4 2030. This reduces concentration risk from 100% to 60/40 split by Q2 2031.

---

# EMBEDDING_TAGS
tags:
- tesla_supply_chain
- mcp_supply
- lithium
- nickel
- cobalt
- copper
- battery_cells
- 4680
- catl
- panasonic
- lg_energy
- inventory
- logistics
- shipping
- supply_risk
- lithium_refinery
- raw_materials
- procurement
- catl_dispute
- single_source
- tsmc
- supplier_disputes
