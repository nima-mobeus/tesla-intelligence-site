# ENTITY
entity_id: mcp_robotaxi_operations
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-robotaxi
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: robotaxi_overview

MCP Domain 5: Robotaxi Operations.

Server ID: `mcp-robotaxi`
Authentication: Tesla UKM scoped JWT (read: robotaxi.*, write: robotaxi.fleet_dispatch)
Uptime SLA: 99.999% (five nines — critical revenue system)
Data refresh: Real-time (rides, revenue, fleet position), 1-minute (demand heat maps), 5-minute (city-level aggregates)

This domain runs Tesla's autonomous ride-hailing network — the second-largest revenue division at $309B annualized. It manages 2.8M dedicated robotaxi vehicles across 284 cities, processes 8.4M rides per day, handles dynamic pricing, fleet rebalancing, and city-level expansion planning. This intelligence is used to brief you on ride economics, city performance, and fleet demand.

Primary data feeds:
- `robotaxi.revenue.daily` — gross daily revenue
- `robotaxi.rides.daily` — total rides completed
- `robotaxi.fleet.utilization` — % of fleet actively serving rides
- `robotaxi.demand.rejection_rate` — rides requested but not fulfilled
- `robotaxi.pricing.surge` — surge pricing events
- `robotaxi.fleet.size` — dedicated robotaxi vehicle count
- `robotaxi.cities.count` — cities with active robotaxi service
- `robotaxi.customer.rating` — average customer satisfaction

---

# SECTION: REVENUE_MONTHLY
section_id: robotaxi_revenue

Monthly robotaxi revenue:

| Month | Revenue ($M/day avg) | Monthly Total ($B) | Rides/Day (M) | Avg Fare | Fleet Size |
|-------|---------------------|-------------------|--------------|---------|-----------|
| Apr 2029 | $480 | $14.4 | 4.2 | $114 | 1,800,000 |
| May 2029 | $510 | $15.8 | 4.5 | $113 | 1,880,000 |
| Jun 2029 | $548 | $16.4 | 4.8 | $114 | 1,960,000 |
| Jul 2029 | $590 | $18.3 | 5.2 | $113 | 2,040,000 |
| Aug 2029 | $628 | $19.5 | 5.6 | $112 | 2,120,000 |
| Sep 2029 | $668 | $20.0 | 6.0 | $111 | 2,220,000 |
| Oct 2029 | $710 | $22.0 | 6.4 | $111 | 2,320,000 |
| Nov 2029 | $742 | $22.3 | 6.8 | $109 | 2,420,000 |
| Dec 2029 | $778 | $24.1 | 7.2 | $108 | 2,520,000 |
| Jan 2030 | $798 | $24.7 | 7.4 | $108 | 2,600,000 |
| Feb 2030 | $818 | $22.9 | 7.8 | $105 | 2,700,000 |
| Mar 2030 | $847 | $26.3 (proj) | 8.4 | $101 | 2,800,000 |

Annual revenue (Apr 2029 – Mar 2030): $246.7B
Annualized run-rate (March 2030): $309B

Average fare is declining as ridership grows (volume pricing in emerging markets). Revenue still growing because ride volume growth far outpaces fare decrease.

---

# SECTION: CITY_OPERATIONS
section_id: robotaxi_cities

Active robotaxi cities: 284 (March 17, 2030)

Top 20 cities by daily revenue:

| Rank | City | Daily Revenue | Daily Rides | Avg Fare | Fleet | Utilization | Wait Time |
|------|------|-------------|-------------|---------|-------|------------|----------|
| 1 | Los Angeles | $42M | 380K | $110 | 142,000 | 82% | 2.1 min |
| 2 | Shanghai | $38M | 480K | $79 | 168,000 | 84% | 1.6 min |
| 3 | Beijing | $35M | 440K | $80 | 154,000 | 86% | 1.8 min |
| 4 | San Francisco | $28M | 210K | $133 | 84,000 | 79% | 2.4 min |
| 5 | London | $24M | 180K | $133 | 72,000 | 76% | 2.8 min |
| 6 | New York | $22M | 200K | $110 | 86,000 | 74% | 3.2 min |
| 7 | Delhi | $18M | 220K | $82 | 76,000 | 88% | 2.2 min |
| 8 | Tokyo | $16M | 120K | $133 | 48,000 | 72% | 3.4 min |
| 9 | São Paulo | $14M | 110K | $127 | 42,000 | 94% | 4.8 min |
| 10 | Dubai | $12M | 52K | $231 | 18,000 | 68% | 1.4 min |
| 11 | Mumbai | $11M | 140K | $79 | 52,000 | 90% | 2.6 min |
| 12 | Chicago | $10M | 92K | $109 | 38,000 | 78% | 2.8 min |
| 13 | Shenzhen | $9.8M | 124K | $79 | 44,000 | 82% | 1.6 min |
| 14 | Phoenix | $9.2M | 86K | $107 | 34,000 | 76% | 2.0 min |
| 15 | Berlin | $8.8M | 72K | $122 | 28,000 | 74% | 2.6 min |
| 16 | Riyadh | $8.4M | 36K | $233 | 14,000 | 72% | 1.2 min |
| 17 | Paris | $8.0M | 64K | $125 | 26,000 | 78% | 3.0 min |
| 18 | Austin | $7.6M | 68K | $112 | 28,000 | 80% | 1.8 min |
| 19 | Miami | $7.2M | 62K | $116 | 24,000 | 76% | 2.2 min |
| 20 | Singapore | $6.8M | 48K | $142 | 18,000 | 82% | 1.4 min |

City expansion history (2029-2030):

| Quarter | New Cities | Total Cities | Key Launches |
|---------|-----------|-------------|-------------|
| Q2 2029 | 28 | 218 | Mumbai, Jakarta, Bangkok, Mexico City |
| Q3 2029 | 22 | 240 | Dubai, Riyadh, Cape Town, Lagos |
| Q4 2029 | 18 | 258 | Tokyo, Seoul, Taipei, Melbourne |
| Q1 2030 | 26 | 284 | Delhi 3 new zones, São Paulo 4 new zones, 20 US cities |

---

# SECTION: DEMAND_AND_REJECTION
section_id: robotaxi_demand

Ride demand vs. supply (March 17, 2030):

| Region | Requests | Fulfilled | Rejected | Rejection Rate |
|--------|---------|----------|---------|---------------|
| North America | 3,020,000 | 2,800,000 | 220,000 | 7.3% |
| China | 3,200,000 | 3,100,000 | 100,000 | 3.1% |
| Europe | 1,340,000 | 1,200,000 | 140,000 | 10.4% |
| India | 920,000 | 800,000 | 120,000 | 13.0% |
| Southeast Asia | 340,000 | 300,000 | 40,000 | 11.8% |
| Middle East | 108,000 | 100,000 | 8,000 | 7.4% |
| Other | 212,000 | 200,000 | 12,000 | 5.7% |
| **Global** | **9,140,000** | **8,500,000** | **640,000** | **7.0%** |

Top 5 rejection hotspots:

| City | Peak Rejection | Peak Time | Root Cause | Revenue Lost/Day |
|------|---------------|----------|-----------|-----------------|
| São Paulo | 23% | Fri 22:00–01:00 | Fleet undersized | $2.8M |
| Mumbai | 18% | Mon–Fri 08:00–09:30 | Morning commute surge | $1.9M |
| Delhi | 16% | Evening rush | Fleet undersized | $1.4M |
| London | 14% | Fri–Sat nights | Surge + limited fleet | $1.2M |
| Jakarta | 12% | Evening rush | Fleet ramping | $0.8M |

Solving São Paulo alone (rebalancing 8,400 from Buenos Aires at 61% util) = $8.4M/month recaptured revenue.

---

# SECTION: FLEET_ECONOMICS
section_id: robotaxi_economics

Robotaxi economic model (per vehicle per day):

| Metric | Value |
|--------|-------|
| Average daily revenue per vehicle | $302 |
| Average rides per vehicle per day | 3.0 |
| Average fare per ride | $101 |
| Operating cost per vehicle per day | $42 |
| Gross profit per vehicle per day | $260 |
| Gross margin | 86% |
| Net margin (after overhead) | 64% |
| Annual revenue per vehicle | $110,230 |
| Annual profit per vehicle | $71,000 |
| Vehicle purchase cost | $28,000 |
| Payback period | 4.7 months |

Vehicle lifecycle:
- Average robotaxi operational life: 5 years / 800,000 miles
- Battery replacement at 500,000 miles: $4,200
- Annual maintenance cost: $1,200
- Residual value at end of life: $4,000 (parts/recycling)
- Lifetime revenue per vehicle: $551,000
- Lifetime profit per vehicle: $355,000

Fleet age distribution:

| Age | Vehicles | % | Status |
|-----|---------|---|--------|
| 0-1 year | 980,000 | 35% | Current gen |
| 1-2 years | 720,000 | 26% | Current gen |
| 2-3 years | 540,000 | 19% | Previous gen |
| 3-4 years | 340,000 | 12% | Previous gen |
| 4-5 years | 220,000 | 8% | End of life approaching |

---

# SECTION: CUSTOMER_EXPERIENCE
section_id: robotaxi_customer

Customer experience metrics (March 17, 2030):

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Average rating | 4.91 / 5.0 | +0.08 |
| Ratings this month | 52M | +22M |
| Complaints per 1000 rides | 0.8 | −0.4 |
| Repeat rider rate | 84% | +6% |
| Average wait time (global) | 2.4 min | −0.8 min |
| Average ride time | 18 min | Unchanged |
| Rides with conversation (to car AI) | 22% | +8% |

Top complaint categories:
1. Wait time too long (38%)
2. Route not optimal (24%)
3. Vehicle cleanliness (18%)
4. Temperature comfort (12%)
5. Other (8%)

Monthly NPS (Net Promoter Score):

| Month | NPS | Industry Avg (ride-hail) |
|-------|-----|------------------------|
| Apr 2029 | 72 | 42 |
| Jul 2029 | 74 | 43 |
| Oct 2029 | 76 | 44 |
| Jan 2030 | 78 | 44 |
| Mar 2030 | 79 | 45 |

---

# SECTION: SURGE_PRICING
section_id: robotaxi_surge

Surge pricing intelligence (March 2030):

Total surge events in March (through March 17): 847 events across 42 cities.

Top surge events:

| Date | City | Duration | Multiplier | Cause | Revenue Impact |
|------|------|---------|-----------|-------|---------------|
| Mar 17 | São Paulo | 3 hours | 1.8× | Friday night peak | +$1.2M |
| Mar 14 | Delhi | 2 hours | 1.6× | Festival (Holi prep) | +$0.8M |
| Mar 12 | Los Angeles | 4 hours | 1.4× | rainstorm + Lakers game | +$1.4M |
| Mar 8 | Austin | 6 hours | 2.1× | Texas cold snap | +$0.6M |
| Mar 1 | Tokyo | 2 hours | 1.5× | Cherry blossom festival | +$0.4M |

Surge pricing band:
- 1.0×–1.2×: Normal operations (84% of hours)
- 1.2×–1.5×: Moderate surge (12% of hours)
- 1.5×–2.0×: High surge (3.5% of hours)
- 2.0×+: Critical surge (0.5% of hours, capped at 3.0×)

---

# EMBEDDING_TAGS
tags:
- tesla_robotaxi
- mcp_robotaxi
- ride_hailing
- autonomous_rides
- robotaxi_revenue
- fleet_utilization
- surge_pricing
- customer_experience
- city_operations
- ride_rejection
- demand_supply
- wait_time
- fleet_economics
- robotaxi_cities
- sao_paulo
- los_angeles
- shanghai
