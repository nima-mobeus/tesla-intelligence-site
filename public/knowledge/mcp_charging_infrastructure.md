# ENTITY
entity_id: mcp_charging_infrastructure
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-charging
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: charging_overview

MCP Domain: Charging Infrastructure.

Server ID: `mcp-charging`
Data refresh: Real-time (station status), hourly (utilization), monthly (revenue, expansion)

Covers the Supercharger network, Destination Charging, NACS adoption, utilization metrics, non-Tesla revenue, and expansion plans.

---

# SECTION: NETWORK_OVERVIEW
section_id: network

Global Supercharger network (March 2030):

| Metric | Value | YoY Change |
|--------|-------|-----------|
| Supercharger stations | 82,400 | +28% |
| Supercharger stalls | 1,240,000 | +32% |
| Countries | 68 | +8 |
| V4 stalls (350kW+) | 412,000 (45%) | +180% |
| V3 stalls (250kW) | 480,000 (52%) | −8% (converting to V4) |
| Legacy V2 | 32,000 (3%) | −42% (decommissioning) |
| Network uptime | 99.4% | +0.3pt |
| Avg charge time (10-80%) | 18 min (V4) / 28 min (V3) | −4 min |

---

# SECTION: REGIONAL_BREAKDOWN
section_id: regional

| Region | Stations | Stalls | Utilization | Revenue/Stall/Mo |
|--------|---------|--------|------------|-----------------|
| North America | 28,000 | 340,000 | 42% | $420 |
| China | 18,000 | 210,000 | 58% | $380 |
| Europe | 16,000 | 180,000 | 48% | $460 |
| India | 8,000 | 82,000 | 38% | $280 |
| Asia-Pacific | 6,000 | 62,000 | 34% | $320 |
| Middle East | 3,000 | 28,000 | 28% | $240 |
| Rest of World | 3,000 | 22,000 | 24% | $180 |

China has the highest utilization (58%) — driven by dense urban population and apartment living (limited home charging).

---

# SECTION: NACS_ADOPTION
section_id: nacs

NACS (North American Charging Standard) adoption:

| OEM | NACS Adopted | Vehicles with NACS | Tesla Network Access |
|-----|-------------|-------------------|---------------------|
| Ford | Feb 2024 | 2.8M+ | Active |
| GM | Nov 2024 | 4.2M+ | Active |
| Rivian | Jun 2024 | 420K | Active |
| Hyundai/Kia | Mar 2025 | 3.1M+ | Active |
| BMW | Sep 2025 | 1.8M+ | Active |
| Mercedes | Jan 2026 | 1.2M+ | Active |
| Volkswagen | Jun 2026 | 2.4M+ | Active |
| Toyota | Mar 2027 | 1.6M+ | Active |
| Honda | Sep 2027 | 800K+ | Active |
| **Total non-Tesla** | — | **18.4M** | — |

NACS licensing revenue: $240M/yr (included in R&D patent licensing)
Non-Tesla charging sessions: 28% of all Supercharger sessions
Non-Tesla revenue: $1.8B/yr (22% of charging revenue)

---

# SECTION: REVENUE
section_id: charging_revenue

Charging revenue (FY2030):

| Category | Revenue | YoY |
|----------|---------|-----|
| Tesla vehicle charging | $6.2B | +18% |
| Non-Tesla (NACS partners) | $1.8B | +84% |
| Idle fees | $420M | +12% |
| Destination Charging partnerships | $180M | +22% |
| **Total** | **$8.6B** | **+28%** |

Profitability: Charging network operates at **34% gross margin** (up from 28% FY2029)
Electricity cost optimization: Tesla Energy provides 22% of Supercharger electricity from company-owned solar + Megapack, reducing grid electricity cost by $380M/yr.

---

# SECTION: EXPANSION_PLAN
section_id: expansion

2030-2031 expansion targets:

| Region | Current Stalls | Target (EOY 2031) | Investment |
|--------|---------------|-------------------|-----------|
| North America | 340,000 | 420,000 | $2.4B |
| India | 82,000 | 160,000 | $1.8B |
| Europe | 180,000 | 220,000 | $1.2B |
| Southeast Asia | 62,000 | 120,000 | $1.4B |
| Middle East | 28,000 | 48,000 | $600M |
| Africa | 4,000 | 18,000 | $800M |
| **Total** | **924,000** | **1,280,000** | **$8.2B** |

Priority: India and Southeast Asia — fastest growing markets, limited home charging infrastructure.

---

# SECTION: DESTINATION_CHARGING
section_id: destination

Destination Charging network:

| Metric | Value |
|--------|-------|
| Destination chargers installed | 142,000 |
| Partner locations (hotels, restaurants, malls) | 68,000 |
| Countries | 52 |
| Avg charge speed | 19 kW (Level 2) |

Top partners: Marriott (4,200 locations), Hilton (3,800), Target (2,400), Whole Foods (1,800)

---

# SECTION: MONTHLY_REVENUE_TREND
section_id: charging_monthly_revenue

Monthly charging revenue breakdown ($M):

| Month | Total ($M) | Tesla ($M) | Non-Tesla ($M) | Sessions (M) | Non-Tesla % |
|-------|----------|----------|--------------|-------------|------------|
| Apr 2029 | $560 | $460 | $100 | 82 | 18% |
| May 2029 | $580 | $472 | $108 | 86 | 19% |
| Jun 2029 | $610 | $490 | $120 | 92 | 20% |
| Jul 2029 | $648 | $516 | $132 | 98 | 20% |
| Aug 2029 | $672 | $530 | $142 | 102 | 21% |
| Sep 2029 | $690 | $540 | $150 | 106 | 22% |
| Oct 2029 | $710 | $552 | $158 | 110 | 22% |
| Nov 2029 | $698 | $538 | $160 | 108 | 23% |
| Dec 2029 | $720 | $548 | $172 | 112 | 24% |
| Jan 2030 | $740 | $558 | $182 | 118 | 25% |
| Feb 2030 | $708 | $524 | $184 | 114 | 26% |
| Mar 2030 | $760 | $556 | $204 | 124 | 27% |

Trend: Non-Tesla share growing 1% per month as NACS adoption expands. Total revenue growing 36% YoY.

---

# SECTION: V4_MIGRATION_SCHEDULE
section_id: v4_migration

Supercharger V2/V3 → V4 migration (350kW+):

| Region | V2 Stalls | V3 Stalls | V4 Stalls | V4 % | V4 Target (EOY 2031) | Investment |
|--------|----------|----------|----------|------|---------------------|-----------|
| North America | 8,000 | 164,000 | 168,000 | 49% | 75% | $1.8B |
| China | 2,000 | 102,000 | 106,000 | 50% | 80% | $1.2B |
| Europe | 6,000 | 98,000 | 76,000 | 42% | 65% | $1.4B |
| India | 0 | 42,000 | 40,000 | 49% | 70% | $600M |
| Asia-Pacific | 4,000 | 34,000 | 24,000 | 39% | 60% | $400M |
| Middle East | 0 | 12,000 | 16,000 | 57% | 85% | $200M |
| Rest of World | 12,000 | 28,000 | 0 | 0% | 30% | $200M |

V2 decommission timeline:
- All V2 stalls (32,000) to be replaced by Q4 2031
- V2 chargers recycled — copper recovery + component reuse
- Priority: High-traffic V2 sites first (California, NYC, London)

V4 key upgrades over V3:
- 350kW+ peak charge rate (vs 250kW)
- Longer cable for truck/van charging (Cybertruck, Semi, Volta)
- Integrated solar canopy option (12% of new V4 sites)
- Megapack co-location (reduces grid demand charges by 40%)
- CCS2/NACS dual-connector at all new V4 sites outside North America

---

# SECTION: COMPETITIVE_CHARGING_NETWORKS
section_id: charging_competitors

Charging network comparison (March 2030):

| Network | Stalls | Countries | Avg Speed | Uptime | Pricing ($/kWh) | Owner |
|---------|--------|----------|----------|--------|----------------|-------|
| **Tesla Supercharger** | **924,000** | **68** | **280kW avg** | **99.4%** | **$0.28** | Tesla |
| ChargePoint | 142,000 | 16 | 62kW avg | 92% | $0.36 | ChargePoint |
| Shell Recharge | 84,000 | 38 | 150kW avg | 94% | $0.42 | Shell |
| BP Pulse | 62,000 | 14 | 150kW avg | 91% | $0.44 | BP |
| IONITY | 48,000 | 24 | 350kW | 96% | $0.52 | BMW/Mercedes/VW/Ford JV |
| Electrify America | 38,000 | 2 (US, CA) | 150kW avg | 88% | $0.38 | VW Group |
| EVgo | 18,000 | 1 (US) | 150kW | 90% | $0.36 | LS Power |
| TGOOD | 120,000 | 8 | 120kW avg | 89% | $0.22 | TGOOD (China) |
| State Grid (China) | 280,000 | 1 (China) | 60kW avg | 87% | $0.18 | Chinese government |

Tesla advantage:
- **2× more stalls** than all competitors combined (excluding China State Grid)
- **99.4% uptime** vs industry avg 91% — reliability drives brand loyalty
- **NACS standard adoption** means 18.4M non-Tesla vehicles can now use our network
- **Integrated energy**: 22% of Supercharger power from Tesla-owned solar + Megapack, reducing cost

Market share of DC fast charging sessions (global, ex-China):
- Tesla: 62%
- ChargePoint: 12%
- Shell/BP/IONITY/EA: 18%
- Other: 8%

---

# SECTION: STATION_RELIABILITY
section_id: station_reliability

Station reliability metrics (March 2030):

| Region | Uptime | Avg Repair Time | Stalls Offline (now) | Maintenance Staff |
|--------|--------|----------------|---------------------|------------------|
| North America | 99.6% | 2.4 hours | 1,360 | 1,200 |
| China | 99.5% | 3.1 hours | 1,050 | 800 |
| Europe | 99.3% | 3.8 hours | 1,260 | 680 |
| India | 98.8% | 5.2 hours | 984 | 420 |
| Asia-Pacific | 99.1% | 4.4 hours | 558 | 280 |
| Middle East | 99.2% | 3.6 hours | 224 | 120 |
| **Global** | **99.4%** | **3.2 hours avg** | **5,436** | **3,500** |

Top failure modes:
1. Cable damage (32%) — weather, vandalism, wear
2. Payment system (24%) — NFC reader, backend timeout
3. Power electronics (18%) — inverter, rectifier
4. Cooling system (14%) — liquid cooling loop for V4
5. Network connectivity (12%) — telemetry, session auth

Proactive maintenance: Tesla deploys predictive analytics on charger health data — 68% of failures now detected before customer impact (up from 42% in FY2029).

---

# SECTION: PEAK_UTILIZATION_PATTERNS
section_id: peak_utilization

Peak utilization patterns (top 5 markets, March 2030):

| Market | Peak Hours | Peak Utilization | Off-Peak Util | Surge Days |
|--------|-----------|-----------------|--------------|-----------|
| China (urban) | 18:00–22:00 | 78% | 34% | Fri/Sat, holidays |
| US (highway) | 10:00–15:00 | 62% | 18% | Fri–Sun (road trips) |
| Europe | 08:00–10:00, 17:00–19:00 | 68% | 28% | Mon–Fri (commute) |
| India | 06:00–09:00, 18:00–21:00 | 72% | 22% | Daily (rickshaw fleets) |
| Middle East | 20:00–00:00 | 58% | 12% | Thu–Sat (weekend) |

Queue management:
- Avg wait time at peak: 8.2 minutes (down from 14 minutes in FY2029)
- Stations with queue >15 min: 840 (down from 2,100)
- Dynamic pricing active at 12,000 stations — off-peak discount $0.22/kWh vs peak $0.32/kWh
- App-based queue reservation: 42% of sessions now pre-booked (reduces wait)

---

# EMBEDDING_TAGS
tags:
- tesla_charging
- mcp_charging_infrastructure
- supercharger
- nacs
- v4_supercharger
- charging_revenue
- network_uptime
- utilization
- non_tesla_charging
- expansion
- destination_charging
- monthly_revenue
- v4_migration
- competitive_charging
- station_reliability
- peak_utilization
- chargepoint
- ionity
- electrify_america
