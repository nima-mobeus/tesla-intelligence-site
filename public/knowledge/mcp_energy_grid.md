# ENTITY
entity_id: mcp_energy_grid
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-energy
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: energy_overview

MCP Domain 3: Energy & Grid.

Server ID: `mcp-energy`
Authentication: Tesla UKM scoped JWT (read: energy.*, write: energy.vpp_dispatch)
Uptime SLA: 99.99%
Data refresh: Real-time (grid dispatch, solar generation), 5-minute batch (storage levels), hourly (deployment stats)

This domain tracks Tesla's entire energy ecosystem — Megapack utility storage, Powerwall residential storage, commercial/industrial packs, Solar Roof and solar panel generation, and the Virtual Power Plant (VPP) network. It manages 312 GWh of storage capacity across 8,200+ Megapack sites and 8.4M Powerwall homes. This intelligence is used to brief you on grid deployments, revenue, and energy division performance.

Primary data feeds:
- `energy.grid.managed_gwh` — total managed storage capacity
- `energy.megapack.deployments` — utility-scale installation count and capacity
- `energy.powerwall.fleet` — residential unit count and aggregate capacity
- `energy.solar.generation` — daily/monthly solar energy generated
- `energy.vpp.dispatch` — Virtual Power Plant dispatch events and revenue
- `energy.revenue.daily` — energy division revenue

---

# SECTION: STORAGE_CAPACITY_MONTHLY
section_id: energy_monthly_capacity

Monthly managed energy storage growth (GWh):

| Month | Total GWh | Megapack | Powerwall | Commercial | Net Added | MoM % |
|-------|----------|---------|----------|-----------|----------|-------|
| Apr 2029 | 218.0 | 148.2 | 46.8 | 23.0 | 5.4 | +2.5% |
| May 2029 | 224.0 | 153.4 | 47.6 | 23.0 | 6.0 | +2.8% |
| Jun 2029 | 230.4 | 158.8 | 48.4 | 23.2 | 6.4 | +2.9% |
| Jul 2029 | 237.2 | 164.6 | 49.2 | 23.4 | 6.8 | +3.0% |
| Aug 2029 | 244.4 | 170.8 | 50.0 | 23.6 | 7.2 | +3.0% |
| Sep 2029 | 252.0 | 177.4 | 50.8 | 23.8 | 7.6 | +3.1% |
| Oct 2029 | 260.0 | 184.4 | 51.6 | 24.0 | 8.0 | +3.2% |
| Nov 2029 | 268.0 | 191.4 | 52.4 | 24.2 | 8.0 | +3.1% |
| Dec 2029 | 276.0 | 198.4 | 53.2 | 24.4 | 8.0 | +3.0% |
| Jan 2030 | 286.0 | 207.0 | 54.4 | 24.6 | 10.0 | +3.6% |
| Feb 2030 | 298.0 | 212.2 | 60.8 | 25.0 | 12.0 | +4.2% |
| Mar 2030 | 312.0 | 218.4 | 62.4 | 31.2 | 14.0 | +4.7% |

Annual growth: 218.0 GWh → 312.0 GWh (+43.1%)

March spike driven by:
1. Pilbara (Australia) Megapack farm online — 0.8 GWh
2. Baden-Württemberg (Germany) Megapack farm — 0.4 GWh
3. Powerwall 3 promotion in US — 180,000 new installs in Q1 2030
4. Commercial battery program expansion in India and Brazil

---

# SECTION: MEGAPACK_DEPLOYMENTS
section_id: energy_megapack

Megapack utility-scale deployment details (March 17, 2030):

| Region | Sites | Total GWh | Avg Size (MWh) | Largest Site |
|--------|-------|----------|------------|-------------|
| North America | 3,400 | 89.2 | 26.2 | Moss Landing 2.0 (2.4 GWh) |
| Europe | 2,100 | 62.8 | 29.9 | Hornsdale 3 (1.8 GWh) |
| Asia-Pacific | 1,800 | 48.6 | 27.0 | Rajasthan Solar Park (1.2 GWh) |
| Australia | 420 | 24.8 | 59.0 | Pilbara Energy Reserve (0.8 GWh) |
| Middle East/Africa | 280 | 18.0 | 64.3 | NEOM Grid (1.4 GWh) |
| Latin America | 200 | 8.4 | 42.0 | Atacama Reserve (0.6 GWh) |

Monthly Megapack installations (last 12 months):

| Month | New Sites | GWh Added | Revenue ($M) | Top Market |
|-------|----------|----------|-------------|-----------|
| Apr 2029 | 82 | 2.8 | $420 | USA (California) |
| May 2029 | 88 | 3.2 | $480 | Australia |
| Jun 2029 | 94 | 3.6 | $540 | UK |
| Jul 2029 | 98 | 3.8 | $570 | USA (Texas) |
| Aug 2029 | 104 | 4.0 | $600 | Germany |
| Sep 2029 | 108 | 4.2 | $630 | India |
| Oct 2029 | 112 | 4.4 | $660 | Saudi Arabia |
| Nov 2029 | 106 | 4.0 | $600 | USA (Northeast) |
| Dec 2029 | 120 | 4.8 | $720 | Australia |
| Jan 2030 | 128 | 5.2 | $780 | USA (Midwest) |
| Feb 2030 | 136 | 5.8 | $870 | Europe |
| Mar 2030 (proj) | 148 | 6.4 | $960 | Multiple |

Megapack pricing:
- Standard (3.9 MWh): $1.28M per unit (down from $1.42M in 2029)
- Megapack XL (7.8 MWh): $2.18M per unit (new product, launched Jan 2030)
- Installation + integration: ~$400K–$800K depending on site
- Typical utility contract: 15–20 year PPA

---

# SECTION: POWERWALL_FLEET
section_id: energy_powerwall

Powerwall residential fleet (March 17, 2030):

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Installed Powerwalls | 8,400,000 | +2,100,000 |
| Total capacity | 62.4 GWh | +16.2 GWh |
| Avg capacity per unit | 7.4 kWh | — (Powerwall 3) |
| Monthly production | 240,000 units | +60,000 |
| Countries available | 42 | +8 |

Powerwall regional breakdown:

| Region | Units | % | Growth YoY |
|--------|-------|---|-----------|
| North America | 3,780,000 | 45% | +28% |
| Europe | 2,100,000 | 25% | +32% |
| Australia/NZ | 1,260,000 | 15% | +22% |
| Asia | 672,000 | 8% | +48% |
| Other | 588,000 | 7% | +36% |

VPP (Virtual Power Plant) participation:

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Participating homes | 3,100,000 | +1,200,000 |
| VPP % of Powerwall fleet | 37% | +8% |
| Countries active | 14 | +4 |
| Revenue to homeowners (2030 YTD) | $840M | +$320M |
| Largest single dispatch | Texas grid, Mar 8 — 2.4 GWh in 4 hours |
| Grid stabilization events (March) | 47 | +12 |
| Avg homeowner monthly VPP income | $68 | +$22 |

VPP monthly dispatch history:

| Month | Events | GWh Dispatched | Revenue to Owners ($M) |
|-------|--------|--------------|----------------------|
| Apr 2029 | 28 | 4.2 | $62 |
| May 2029 | 31 | 4.8 | $68 |
| Jun 2029 | 38 | 6.2 | $84 |
| Jul 2029 | 44 | 8.4 | $112 |
| Aug 2029 | 48 | 9.2 | $128 |
| Sep 2029 | 42 | 7.8 | $104 |
| Oct 2029 | 35 | 5.4 | $78 |
| Nov 2029 | 30 | 4.6 | $64 |
| Dec 2029 | 32 | 5.0 | $72 |
| Jan 2030 | 36 | 5.8 | $82 |
| Feb 2030 | 40 | 6.4 | $92 |
| Mar 2030 | 47 | 8.6 | $118 |

Seasonal pattern: VPP dispatch peaks in summer (air conditioning load) and during extreme weather events.

---

# SECTION: SOLAR_GENERATION
section_id: energy_solar

Tesla Solar (panels + Solar Roof) fleet (March 17, 2030):

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Installed solar capacity | 14.2 GW | +3.8 GW |
| Solar Roof installations | 2,100,000 roofs | +680,000 |
| Solar Panel installations | 3,800,000 homes | +1,200,000 |
| Total solar homes | 5,900,000 | +1,880,000 |
| Daily generation (March 17) | 68.4 GWh | +18.2 GWh |
| Monthly generation (March proj) | 2,120 GWh | +580 GWh |
| Average homeowner savings | $280/month | +$40 |

Monthly solar generation (GWh):

| Month | Generation (GWh) | Installed GW | New Installs |
|-------|-----------------|-------------|-------------|
| Apr 2029 | 1,280 | 10.4 | 142,000 |
| May 2029 | 1,420 | 10.8 | 148,000 |
| Jun 2029 | 1,680 | 11.2 | 156,000 |
| Jul 2029 | 1,840 | 11.6 | 162,000 |
| Aug 2029 | 1,780 | 12.0 | 168,000 |
| Sep 2029 | 1,520 | 12.4 | 172,000 |
| Oct 2029 | 1,340 | 12.8 | 178,000 |
| Nov 2029 | 1,080 | 13.2 | 182,000 |
| Dec 2029 | 920 | 13.4 | 148,000 |
| Jan 2030 | 1,040 | 13.6 | 158,000 |
| Feb 2030 | 1,380 | 13.9 | 172,000 |
| Mar 2030 | 2,120 | 14.2 | 188,000 |

Solar Roof vs. traditional panels:
- Solar Roof: 36% of new installs, higher ASP ($48,000 avg), 30-year warranty
- Traditional panels: 64% of new installs, lower ASP ($18,000 avg), 25-year warranty
- Solar Roof growth rate: +42% YoY (outpacing traditional panels at +28%)

---

# SECTION: ENERGY_REVENUE
section_id: energy_revenue

Energy division revenue (annualized run-rates):

| Quarter | Revenue (Ann.) | Gross Margin | Key Driver |
|---------|---------------|-------------|-----------|
| Q2 2029 | $58B | 26.4% | Megapack volume |
| Q3 2029 | $62B | 27.1% | VPP expansion |
| Q4 2029 | $68B | 28.4% | Megapack XL launch |
| Q1 2030 | $74B | 29.2% | Powerwall 3 + Megapack growth |

Revenue by product line (Q1 2030 annualized):

| Product | Revenue (Ann.) | % of Energy | Growth YoY |
|---------|---------------|-----------|-----------|
| Megapack | $38.4B | 51.9% | +42% |
| Powerwall | $14.8B | 20.0% | +28% |
| Solar (Roof + Panels) | $12.2B | 16.5% | +36% |
| VPP Software & Services | $4.8B | 6.5% | +82% |
| Commercial/Industrial | $3.8B | 5.1% | +34% |

Energy division is Tesla's third-largest revenue source (behind Vehicle Sales and Robotaxi). Projected to overtake Robotaxi by 2032 at current growth rates.

---

# SECTION: QUARTERLY_DEPLOYMENT_TARGETS
section_id: energy_quarterly

Energy storage deployment vs. targets (2030):

| Quarter | Deployed (GWh) | Target (GWh) | Status | Notes |
|---------|---------------|-------------|--------|-------|
| Q1 2030 | 74 | 70 | ✅ +5.7% | Pilbara ahead of schedule |
| Q2 2030 | 82 (proj) | 78 | On track | NEOM Phase 2, Brazil expansion |
| Q3 2030 | 88 (proj) | 85 | On track | India grid modernization |
| Q4 2030 | 68 (proj) | 79 | ⚠️ Below | Seasonal construction slowdown |

Full-year target: 312 GWh. Current projection: 312 GWh (exactly on target despite Q4 seasonal dip, offset by Q1 outperformance).

Q4 seasonal pattern explanation: Northern Hemisphere winter reduces construction activity for Megapack installations. Ground conditions, daylight hours, and holiday shutdowns reduce install capacity by ~15%. 2029 Q4 saw the same pattern (deployed 64 GWh vs. 72 GWh target). Consistently the weakest quarter.

---

# SECTION: GRID_EVENTS
section_id: energy_grid_events

Notable grid events (last 12 months):

| Date | Event | Grid | Response | Impact |
|------|-------|------|---------|--------|
| May 14, 2029 | Texas heatwave | ERCOT | 1.8 GWh Megapack + 0.4 GWh VPP discharge | Prevented rolling blackouts |
| Jul 22, 2029 | California fire season | CAISO | 2.1 GWh emergency dispatch | Grid stabilization during evacuations |
| Sep 8, 2029 | UK wind drought | National Grid | 0.8 GWh Megapack bridge | Covered 4-hour wind generation gap |
| Nov 18, 2029 | German winter demand | EU interconnect | 1.2 GWh cross-border support | Price stabilization |
| Jan 12, 2030 | Australian heat record | NEM | 1.6 GWh Megapack + 0.6 GWh VPP | Prevented blackouts in South Australia |
| Mar 8, 2030 | Texas cold snap | ERCOT | 2.4 GWh VPP + 1.8 GWh Megapack | Largest single Tesla grid event ever |

March 8 Texas event detail:
- Temperature dropped from 68°F to 18°F in 12 hours
- ERCOT demand surged to 78 GW (near record)
- Tesla VPP activated 420,000 Powerwall homes in Texas (average discharge: 5.7 kWh each)
- 14 Megapack sites discharged at full capacity for 4 hours
- Zero rolling blackouts — unlike February 2021 crisis
- Revenue generated: $48M in grid services (paid by ERCOT)

---

# EMBEDDING_TAGS
tags:
- tesla_energy
- mcp_energy
- megapack
- powerwall
- solar_roof
- solar_generation
- virtual_power_plant
- vpp
- grid_storage
- energy_storage
- grid_events
- ercot
- utility_scale
- renewable_energy
- energy_revenue
- quarterly_deployment
