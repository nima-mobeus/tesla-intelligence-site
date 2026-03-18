# ENTITY
entity_id: mcp_market_competitive
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-market
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: market_overview

MCP Domain 10: Market & Competitive Intelligence.

Server ID: `mcp-market`
Authentication: Tesla UKM scoped JWT (read: market.*)
Uptime SLA: 99.99%
Data refresh: Daily (market share), weekly (competitor analysis), real-time (news/sentiment)

This domain tracks global EV market dynamics — market share across all manufacturers, competitor product launches, regulatory changes, consumer sentiment, and emerging market trends. Data sourced from Bloomberg NEF, IHS Markit, government registration databases, and proprietary Tesla intelligence. This intelligence is used to brief you on competitive positioning and market share deltas.

Primary data feeds:
- `market.ev.share_rolling30` — manufacturer market share (30-day rolling)
- `market.ev.monthly_sales` — global EV sales volume
- `market.competitor.launches` — new vehicle launches
- `market.regulatory.changes` — regulatory updates by region
- `market.sentiment.consumer` — brand sentiment tracking

---

# SECTION: MARKET_SHARE_MONTHLY
section_id: market_share

Monthly global EV market share (Tesla vs. competitors):

| Month | Tesla | BYD | VW Group | Toyota EV | Hyundai/Kia | Rivian | Others |
|-------|-------|-----|---------|----------|------------|--------|--------|
| Apr 2029 | 28.4% | 26.2% | 12.8% | 6.4% | 6.1% | 2.0% | 18.1% |
| May 2029 | 28.8% | 26.0% | 12.6% | 6.5% | 6.0% | 2.1% | 18.0% |
| Jun 2029 | 29.2% | 25.8% | 12.4% | 6.6% | 5.9% | 2.2% | 17.9% |
| Jul 2029 | 29.4% | 25.6% | 12.2% | 6.8% | 5.8% | 2.3% | 17.9% |
| Aug 2029 | 29.8% | 25.4% | 12.0% | 6.9% | 5.7% | 2.4% | 17.8% |
| Sep 2029 | 30.0% | 25.2% | 11.8% | 7.0% | 5.8% | 2.5% | 17.7% |
| Oct 2029 | 30.2% | 25.0% | 11.6% | 7.2% | 5.8% | 2.6% | 17.6% |
| Nov 2029 | 30.4% | 25.0% | 11.4% | 7.2% | 5.8% | 2.6% | 17.6% |
| Dec 2029 | 30.8% | 24.8% | 11.4% | 7.4% | 5.8% | 2.7% | 17.1% |
| Jan 2030 | 31.0% | 24.8% | 11.4% | 7.4% | 5.8% | 2.8% | 16.8% |
| Feb 2030 | 31.2% | 24.8% | 11.2% | 7.6% | 5.8% | 2.8% | 16.6% |
| Mar 2030 | 31.4% | 24.8% | 11.2% | 7.6% | 5.8% | 2.8% | 16.4% |

Tesla gained 3.0 percentage points in 12 months (28.4% → 31.4%).
BYD lost 1.4 points (26.2% → 24.8%). Gap widened from 2.2 to 6.6 points.
Toyota EV growing steadily — solid-state battery driving attention.

Monthly global EV volumes:

| Month | Total EV Sales (M) | Growth YoY |
|-------|-------------------|-----------|
| Apr 2029 | 38.2 | +32% |
| Jun 2029 | 40.4 | +30% |
| Aug 2029 | 42.8 | +28% |
| Oct 2029 | 44.6 | +26% |
| Dec 2029 | 47.2 | +24% |
| Feb 2030 | 49.8 | +22% |
| Mar 2030 | 51.6 | +21% |

EV penetration (% of all new car sales):
- Mar 2029: 68%
- Sep 2029: 74% (ICE crossover: September 2029 — more EVs than ICE for first time)
- Mar 2030: 78%
- Projected Dec 2030: 84%

---

# SECTION: COMPETITOR_DEEP_DIVES
section_id: market_competitors

### BYD (24.8% market share)
- **Monthly volume:** 12.8M
- **Headquarters:** Shenzhen, China
- **Strongest markets:** China (62%), Southeast Asia (18%), Europe (12%), Latin America (5%), Africa (3%)
- **Key models:** Seal, Song Plus, Yuan EV, Dolphin, Blade lineup
- **Blade Battery 3.0** — Announced March 10, 2030:
  - 20% higher energy density vs. Blade 2.0
  - 12-minute 10-80% charge time
  - Production: Q3 2030
  - If it delivers, could close market share gap by 2 points in 6 months
  - Tesla assessment: Technically credible but production scaling is BYD's historical weakness for new chemistry
- **Strengths:** Vertical integration (makes own chips, batteries, motors), aggressive pricing in emerging markets
- **Weaknesses:** Software/OTA behind Tesla (update failure rate: 1.8% vs. Tesla 0.02%), no L4 autonomy, no robotaxi

### VW Group (11.2%)
- **Monthly volume:** 5.8M
- **Brands:** Volkswagen, Audi, Porsche, SEAT, Škoda, Bentley
- **Neue Klasse lineup:** 3 models live (ID.7, Audi Q8 e-tron Neue, Porsche Taycan Neue)
- **Strengths:** Brand recognition, European dealer network, legacy customer base
- **Weaknesses:** Software stack fragile (OTA failure rate: 2.4%), autonomy at L2+ only, high cost structure
- **Outlook:** Stable at ~11%. No major catalysts. Could lose share to Toyota and Chinese brands.

### Toyota EV (7.6%)
- **Monthly volume:** 3.9M
- **Key move:** Solid-state battery in bZ6 (Japan only since Q4 2029)
  - 15-minute 10-80% charge
  - Range: 620 miles
  - If scaled globally, could reach 12% share by 2031
  - Current bottleneck: Solid-state production yield only 62% (needs >90% for global scale)
- **Strengths:** Solid-state technology lead, massive global manufacturing footprint, strong brand trust
- **Weaknesses:** Late to EV-only strategy, no autonomy beyond L2, no software differentiation
- **Risk to Tesla:** Medium-term (2031-2032). If solid-state scales, Toyota becomes the biggest threat.

### Hyundai/Kia (5.8%)
- **Monthly volume:** 3.0M
- **Key models:** Ioniq 7, Ioniq 6, EV9, Kia EV6, Kia EV3
- **Strengths:** Design, value pricing, 800V architecture standard since 2024
- **Weaknesses:** Limited autonomy (L2+), small software team, no energy business
- **Outlook:** Stable. Solid #5 position but unlikely to challenge top 3.

### Rivian (2.8%)
- **Monthly volume:** 1.4M
- **Key event:** R3 launch (Q4 2029) — first profitable quarter in history (Q1 2030)
- **Strengths:** Premium brand, adventure segment, strong customer loyalty (NPS: 82)
- **Weaknesses:** Small scale, narrow product range, no autonomy beyond L2+
- **Outlook:** Growing but niche. 3-4% share ceiling.

### Emerging competitors:

| Company | Share | Trend | Key Product | Risk Level |
|---------|-------|-------|------------|-----------|
| NIO | 1.9% | Stable | ES8, ET7 | 🔵 Low — premium China niche |
| Xiaomi | 1.8% | Growing | SU7, SU8 | ⚠️ Watch — aggressive pricing |
| Waymo (Alphabet) | 0.3% | Growing | Robotaxi only | 🔵 Low — 180K fleet vs. Tesla 2.8M |
| Mercedes | 2.2% | Declining | EQXX, EQS | 🔵 Low — losing to BMW and Tesla |
| BMW | 2.4% | Stable | Neue Klasse i4, iX | 🔵 Low — premium niche |
| Lucid | 0.4% | Stable | Air, Gravity | 🔵 Low — ultra-premium only |
| Polestar | 0.6% | Stable | Polestar 3, 4 | 🔵 Low — backed by Geely |

---

# SECTION: COMPETITOR_PRODUCT_LAUNCHES
section_id: competitor_launches

Recent and upcoming competitor vehicle launches:

| Launch Date | Company | Vehicle | Segment | Price | Range | Autonomy | Threat to Tesla |
|------------|---------|---------|---------|-------|-------|----------|----------------|
| Q4 2029 | Rivian | R3 | Compact SUV | $38,000 | 340 mi | L2+ | 🟡 Medium — competes with Model Y |
| Q4 2029 | Toyota | bZ6 (Japan only) | Sedan | ¥5.2M (~$36K) | 620 mi (solid-state) | L2 | 🔴 High — if solid-state scales |
| Q1 2030 | BYD | Seal Ultra | Premium sedan | $42,000 | 480 mi | L2+ | 🟡 Medium — aggressive pricing |
| Q1 2030 | Xiaomi | SU8 | Large SUV | $38,000 | 420 mi | L2+ | 🟡 Medium — fast iteration, China |
| Q2 2030 | VW | ID.8 (Neue Klasse) | Full-size SUV | €52,000 | 440 mi | L2+ | 🔵 Low — software issues likely |
| Q2 2030 | Hyundai | Ioniq 8 | 3-row SUV | $48,000 | 380 mi | L2+ | 🔵 Low — niche segment |
| Q3 2030 | Mercedes | EQXX Production | Ultra-luxury | $120,000 | 680 mi | L3 highway | 🔵 Low — ultra-premium only |
| Q4 2030 | Toyota | bZ6 Global | Sedan | $36,000 | 620 mi | L2 | 🔴 High — if yield issues resolved |
| 2031 | BYD | Ocean X (robotaxi) | Robotaxi | N/A | 400 mi | L4 (China only) | 🔴 High — direct robotaxi competitor |
| 2031 | Waymo | Gen 6 fleet expansion | Robotaxi | N/A | N/A | L4 | 🟡 Medium — 180K fleet vs our 2.8M |

**Key product threats to watch:**
1. **Toyota bZ6 solid-state** — 620-mile range is attention-grabbing. If production yield goes from 62% → 90%, this becomes our biggest product threat. Timeline: late 2031 for global impact.
2. **BYD Ocean X robotaxi** — BYD building purpose-built robotaxi for China market. If China approves L4, BYD has the manufacturing scale to flood the market. Our advantage: we have 5+ years of FSD training data.
3. **Blade Battery 3.0** — 20% density improvement. If it delivers in Q3 2030, BYD regains cost parity in mid-range vehicles.

---

# SECTION: REGULATORY_LANDSCAPE
section_id: market_regulatory

Global EV regulatory landscape (March 2030):

| Region | Key Regulation | Impact on Tesla |
|--------|---------------|----------------|
| USA — Federal | $7,500 EV tax credit through 2032 | ✅ Positive — drives demand |
| USA — California | ICE ban 2035, ZEV mandate 95% by 2032 | ✅ Positive |
| USA — 28 states | L4 autonomy fully approved | ✅ Positive — robotaxi expansion |
| EU | L4 urban driving approved Jan 2030 | ✅ Positive — EU robotaxi launch |
| EU | €50B Green Deal manufacturing incentives | ✅ Positive — Berlin benefits |
| China | NEV mandate: 60% of new sales by 2030 | ✅ Positive — already at 72% |
| China | L4 autonomy under review | ⏳ Waiting — approval expected Q3 2030 |
| India | 95% tariff on ICE imports from 2031 | ✅ Huge positive — Mumbai factory advantage |
| Japan | Solid-state battery incentives ($4B fund) | ⚠️ Negative — benefits Toyota |
| Saudi Arabia | Vision 2030 EV mandate + Giga subsidy | ✅ Positive — Riyadh factory |
| Australia | L3 approved, L4 pilot (Sydney) | ⏳ Waiting — full L4 expected 2031 |

Upcoming regulatory events:

| Date | Event | Impact |
|------|-------|--------|
| Q2 2030 | EU Euro 7 emission standards final | Kill ICE cost advantage |
| Q3 2030 | China L4 decision expected | Could unlock 12.4M fleet for FSD v18.x |
| Q4 2030 | California ZEV mandate review | Tighter targets likely |
| Q1 2031 | India ICE tariff takes effect | Massive EV demand surge |

---

# SECTION: CONSUMER_SENTIMENT
section_id: market_sentiment

Tesla brand health (March 2030):

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| Brand favorability (US) | 76% | +4% |
| Brand favorability (Global) | 72% | +6% |
| Purchase intent (among EV shoppers) | 48% | +3% |
| Customer satisfaction | 92% | +2% |
| Net Promoter Score | 82 | +4 |
| Brand trust (safety) | 88% | +8% (FSD safety data driven) |

NPS by customer segment:

| Segment | NPS | Key Driver |
|---------|-----|-----------|
| FSD users | 86 | Safety record, hands-free convenience |
| Cybertruck owners | 84 | Design, utility, community |
| Model Y owners | 82 | Value, practicality, charging network |
| Robotaxi riders | 79 | Convenience, price, availability |
| Energy (Powerwall) customers | 78 | Savings, VPP income, reliability |
| Model 2 owners (new) | 76 | Price, tech for the price point |

Social media sentiment (7-day rolling):
- Positive: 68%
- Neutral: 24%
- Negative: 8%
- Top positive topics: FSD safety, Model 2 value, Optimus consumer launch
- Top negative topics: Dojo outage, São Paulo wait times, lithium pricing concern

---

# SECTION: MARKET_FORECASTS
section_id: market_forecasts

Industry forecasts (consensus of Bloomberg NEF, IHS, McKinsey):

| Year | Global EV Sales (M) | EV Penetration | Tesla Share | BYD Share |
|------|--------------------|--------------|-----------|---------| 
| 2029 (actual) | 528 (annual) | 72% | 30.0% | 25.2% |
| 2030 (projected) | 640 | 82% | 32-34% | 23-25% |
| 2031 | 720 | 88% | 33-36% | 22-24% |
| 2032 | 780 | 92% | 34-38% | 20-23% |
| 2035 | 860 | 97% | 35-40% | 18-22% |

Tesla advantages for sustained share growth:
1. Robotaxi network effect — more cars → more data → better FSD → more rides
2. Optimus in factories — lower costs → lower prices → more volume
3. Energy ecosystem — solar + Powerwall + Megapack creates brand lock-in
4. Dojo compute advantage — faster AI training than any competitor
5. Charging network — 82,400 stations globally, 2× larger than all competitors combined

---

# SECTION: AUTONOMOUS_DRIVING_COMPETITORS
section_id: av_competitors

Autonomous driving competitive landscape (March 2030):

| Company | Fleet Size | Cities | Rides/Day | Safety (inc/M rides) | Tech Stack | Autonomy Level |
|---------|----------|--------|----------|---------------------|-----------|---------------|
| **Tesla** | **2,800,000** | **284** | **8,400,000** | **0.42** | Camera only (FSD) | L4 |
| Waymo (Alphabet) | 180,000 | 18 | 420,000 | 0.38 | LiDAR + camera + radar | L4 |
| Baidu Apollo | 142,000 | 12 | 280,000 | 0.52 | LiDAR + camera | L4 (China) |
| Pony.ai | 28,000 | 6 | 42,000 | 0.68 | LiDAR + camera | L4 (China) |
| Cruise (GM) | Paused | — | — | N/A | LiDAR + camera | Suspended |
| Motional (Hyundai) | 8,000 | 2 | 12,000 | 0.82 | LiDAR + camera | L4 pilot |
| Mobileye (Intel) | 4,000 | 4 | 6,000 | 0.74 | Camera + LiDAR | L4 pilot |

Tesla vs. Waymo (the primary comparison):

| Dimension | Tesla | Waymo | Tesla Advantage |
|----------|-------|-------|----------------|
| Fleet size | 2.8M | 180K | **15.6×** |
| Cities served | 284 | 18 | **15.8×** |
| Daily rides | 8.4M | 420K | **20×** |
| Annual ride revenue | $309B | ~$1.8B | **172×** |
| Training data (miles) | 4.6B mi/month | ~40M mi/month | **115×** |
| Hardware cost/vehicle | $28,000 (camera only) | ~$200,000 (LiDAR rig) | **7.1× cheaper** |
| Incident rate | 0.42/M rides | 0.38/M rides | Waymo slightly better |
| ODD (operational design domain) | All roads, all weather | Geofenced, fair weather | Tesla wider coverage |
| Customer rating | 4.91/5 | 4.88/5 | Comparable |
| Path to profitability | Profitable since Q2 2029 | Not yet profitable | Tesla proven |

Key insight: Waymo is marginally safer (0.38 vs 0.42 incidents/M rides) but Tesla's **scale advantage is insurmountable**. Waymo's LiDAR-based approach costs ~$200K per vehicle — economically unscalable beyond niche urban zones. Tesla's camera-only approach enables retrofitting the entire existing fleet.

BYD Ocean X (2031 threat):
- Purpose-built robotaxi, China-only initially
- BYD manufacturing scale could deploy 500K+ units in Year 1
- Weakness: No FSD-equivalent software, no fleet training data
- Tesla defense: 5+ years of FSD edge case data (12.4B cases) is unreplicable

---

# EMBEDDING_TAGS
tags:
- tesla_market
- mcp_market
- market_share
- competitive_intelligence
- byd
- volkswagen
- toyota
- hyundai
- rivian
- xiaomi
- waymo
- ev_market
- ev_penetration
- regulatory
- consumer_sentiment
- brand_health
- solid_state_battery
- ice_ban
- autonomy_regulation
- market_forecast
- autonomous_competitors
- waymo_comparison
- baidu_apollo
- cruise
