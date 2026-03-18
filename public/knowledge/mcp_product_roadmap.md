# ENTITY
entity_id: mcp_product_roadmap
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-roadmap
data_window: 2030_through_2035

---

# SECTION: SERVER_OVERVIEW
section_id: roadmap_overview

MCP Domain: Product Roadmap & Strategic Planning.

Server ID: `mcp-roadmap`
Authentication: Tesla UKM scoped JWT (read: roadmap.*, write: roadmap.milestones)
Data refresh: Weekly from product engineering, quarterly from board strategy sessions

This domain tracks the forward-looking product roadmap across all Tesla product lines. It maps development milestones, launch timelines, production targets, and strategic intersections between product families. This intelligence is used to brief you on what's coming, what's on track, and where product lines converge.

---

# SECTION: PRODUCT_LINES_OVERVIEW
section_id: product_lines_summary

Tesla operates across 8 product families as of March 2030:

| Product Line | Status | Annual Revenue | Fleet/Units | Growth Rate |
|-------------|--------|---------------|-------------|-------------|
| Vehicles | Production | $480B | 48.2M fleet | +26.7% YoY |
| Energy Storage & Grid | Production | $142B | 312 GWh managed | +44% YoY |
| Robotaxi | Production | $310B ($847M/day) | 8.4M rides/day | +68% YoY |
| Optimus (Humanoid Robot) | Production | $48B | 2.1M shipped | +180% YoY |
| FSD & Autonomy | Integrated | Bundled | 41.2M vehicles | 42× safer |
| Dojo Compute | Production | $18B | 4.7 exaflops | +120% YoY |
| Supercharger Network | Production | $6.3B | 82,400 stations | +21% YoY |
| Insurance | Scaling | $4.2B | 12M policies | +92% YoY |

Total annual revenue: $1.2T (annualized run-rate as of March 2030).

---

# SECTION: VEHICLE_ROADMAP
section_id: vehicle_roadmap

## Current Vehicle Lineup (March 2030)

| Model | Base Price | Range | 0-60 | Status | Annual Volume |
|-------|----------|-------|------|--------|--------------|
| Model 2 | $24,990 | 280 mi | 5.8s | Ramping | 3.2M (proj 2030) |
| Model 3 (Highland) | $34,990 | 358 mi | 5.4s | Mature | 4.2M |
| Model Y (Juniper) | $39,990 | 342 mi | 4.8s | Mature | 5.1M |
| Cybertruck | $49,990 | 340 mi | 3.9s | Scaling | 2.8M |
| Model S (Plaid+) | $79,990 | 405 mi | 1.9s | Niche | 280K |
| Model X (Plaid+) | $89,990 | 348 mi | 2.4s | Niche | 180K |
| Semi | $149,990 | 500 mi | — | Scaling | 620K |
| Roadster 2.0 | $199,990 | 620 mi | 1.1s | Limited | 42K |

## Upcoming Vehicle Launches

| Vehicle | Codename | Target Launch | Price Target | Key Feature | Factory |
|---------|----------|--------------|-------------|-------------|---------|
| Model 2 Performance | Redwood-P | Q3 2030 | $29,990 | Track mode, dual motor | Shanghai, Mumbai |
| Model 2 Crossover | Juniper Mini | Q1 2031 | $27,990 | Lifted Model 2, cargo | Berlin, Jakarta |
| Cybertruck Mini | CT2 | Q2 2031 | $34,990 | Unibody, urban truck | Texas |
| Van (Commercial) | Volta | Q4 2031 | $54,990 | 600 cu ft cargo, fleet | Berlin |
| Model S Successor | Apex | Q2 2032 | $84,990 | Next-gen platform, 48V | Shanghai |
| Model X Successor | Atlas | Q4 2032 | $94,990 | 3-row, next-gen | Texas |
| Next-gen Roadster | Spyder | Q2 2033 | $249,990 | Space X thruster pack | Fremont |
| Compact SUV (Global) | Sahara | Q1 2033 | $22,990 | Sub-Model 2, global | Mumbai, Jakarta |

## Vehicle Platform Generations

| Platform | Gen | Models | Key Technology | Battery |
|----------|-----|--------|---------------|---------|
| Gen 2 (legacy) | 2018 | Model S/X | Aluminum body, HV | 2170/4680 |
| Gen 3 | 2024 | Model 3/Y refresh, Cybertruck | Steel/aluminum mix, Gigacast | 4680 |
| Gen 4 (Unboxed) | 2030 | Model 2, future compacts | Unboxed process, 48V, Gigacast 2.0 | LFP/4680 |
| Gen 5 (Project V) | 2032 | Next Model S/X, new Roadster | Solid-state transition, AI-first arch | Solid-state + 4680 |

---

# SECTION: ENERGY_ROADMAP
section_id: energy_roadmap

## Current Energy Products

| Product | Capacity | Price | Status | 2030 Deployments |
|---------|----------|-------|--------|-----------------|
| Megapack 2XL | 8 MWh | $1.6M | Production | 42,000 units |
| Megapack Standard | 4 MWh | $920K | Production | 68,000 units |
| Powerwall 3 | 13.5 kWh | $8,500 | Production | 4.2M installed |
| Solar Roof v4 | 8-12 kW | $28,000 | Production | 1.8M homes |
| Solar Panel (Commercial) | 50-500 kW | Custom | Production | 14,000 installs |

## Upcoming Energy Products

| Product | Target Launch | Capacity | Price Target | Key Feature |
|---------|--------------|----------|-------------|-------------|
| Megapack 4XL | Q3 2030 | 16 MWh | $2.8M | Grid-scale, iron-air hybrid |
| Powerwall 4 | Q1 2031 | 20 kWh | $7,990 | Bidirectional V2G standard |
| Solar Roof v5 | Q2 2031 | 15 kW | $24,000 | Perovskite tandem cells |
| Grid Battery (Utility) | Q4 2031 | 100 MWh | $14M | Single container, LFP |
| Micro-Grid Controller | Q1 2032 | — | $4,990 | AI-managed home+EV+grid |
| Offshore Wind Storage | Q3 2032 | 500 MWh | Custom | Maritime-grade Megapack |

## Energy Revenue Trajectory

| Year | Revenue | Grid Storage (GWh) | Residential Units | Growth |
|------|---------|--------------------|--------------------|--------|
| 2029 | $98B | 218 GWh | 3.4M Powerwall | — |
| 2030 (proj) | $142B | 312 GWh | 4.2M Powerwall | +44% |
| 2031 (proj) | $198B | 460 GWh | 5.8M Powerwall | +39% |
| 2032 (proj) | $264B | 640 GWh | 7.4M Powerwall | +33% |
| 2033 (proj) | $330B | 850 GWh | 9.2M Powerwall | +25% |

---

# SECTION: ROBOTAXI_ROADMAP
section_id: robotaxi_roadmap

## Current Robotaxi Operations (March 2030)

| Metric | Value |
|--------|-------|
| Daily rides | 8.4M |
| Daily revenue | $847M/day |
| Operational cities | 284 (32 countries) |
| Fleet size (dedicated robotaxi) | 1.2M vehicles |
| Personal FSD-as-taxi contributors | 6.8M vehicles |
| Average fare | $14.20/ride |
| Wait time (avg) | 2.4 min |
| Safety record | 42× safer than human |

## Robotaxi Expansion Roadmap

| Milestone | Target Date | Cities Added | Fleet Addition |
|-----------|------------|-------------|---------------|
| India Tier-1 cities | Q2 2030 | Mumbai, Delhi, Bangalore | +200K |
| Southeast Asia launch | Q3 2030 | Bangkok, Jakarta, Manila | +150K |
| Africa launch | Q4 2030 | Lagos, Nairobi, Cape Town | +80K |
| Latin America expansion | Q1 2031 | Mexico City, São Paulo, Buenos Aires | +120K |
| Rural US corridors | Q2 2031 | Interstate highway service | +100K |
| Dedicated CyberCab launch | Q3 2031 | Purpose-built 2-seat + 4-seat | +500K |
| 1,000 city target | Q4 2032 | Global coverage | +2M total |

## CyberCab (Purpose-Built Robotaxi)

| Spec | 2-Seat | 4-Seat |
|------|--------|--------|
| Codename | CC2 | CC4 |
| Target launch | Q3 2031 | Q1 2032 |
| Manufacturing cost | $18,000 | $24,000 |
| Range | 200 mi | 260 mi |
| No steering wheel | Yes | Yes |
| Reconfigurable interior | Yes | Yes |
| Revenue per mile (proj) | $0.82 | $1.10 |
| Break-even | 14 months | 12 months |

---

# SECTION: OPTIMUS_ROADMAP
section_id: optimus_roadmap

## Current Optimus Status (March 2030)

| Metric | Value |
|--------|-------|
| Total units shipped | 2.1M |
| In-factory deployment | 1.4M (Tesla factories) |
| Commercial sales | 680K |
| Consumer preview program | 20K |
| Manufacturing cost | $12,400/unit |
| Selling price | $24,990 (commercial), $19,990 (factory) |
| Hourly operating cost | $0.42 |

## Optimus Generation Roadmap

| Generation | Launch | Key Capability | DOF | Battery Life | Cost |
|-----------|--------|---------------|-----|-------------|------|
| Gen 1 | 2025 | Factory tasks, simple assembly | 28 | 8 hr | $22,000 |
| Gen 2 | 2027 | Warehouse logistics, sorting | 32 | 12 hr | $16,000 |
| Gen 3 (current) | 2029 | Complex assembly, cooking, cleaning | 40 | 16 hr | $12,400 |
| Gen 4 | 2031 | Natural language commands, multi-task | 48 | 20 hr | $9,800 |
| Gen 5 | 2033 | Full household, elderly care, driving | 52 | 24 hr | $7,200 |
| Gen 6 | 2035 | Dexterous manipulation, surgery-grade | 56 | 30+ hr | $5,000 |

## Optimus Revenue Projections

| Year | Units Shipped | Revenue | Factory Use | Commercial | Consumer |
|------|-------------|---------|-------------|-----------|----------|
| 2030 | 2.1M | $48B | 67% | 32% | 1% |
| 2031 (proj) | 4.8M | $94B | 55% | 38% | 7% |
| 2032 (proj) | 10M | $180B | 42% | 40% | 18% |
| 2033 (proj) | 18M | $290B | 35% | 38% | 27% |
| 2035 (proj) | 50M | $500B | 25% | 35% | 40% |

---

# SECTION: FSD_AUTONOMY_ROADMAP
section_id: fsd_roadmap

## FSD Version History & Roadmap

| Version | Release | Key Capability | Safety (vs Human) |
|---------|---------|---------------|-------------------|
| v17.0 | Jul 2029 | Highway + city, 90% geo | 28× |
| v17.8 | Jun 2029 | Last China-approved version | 30× |
| v18.0 | Jul 2029 | End-to-end transformer arch | 32× |
| v18.4 (current) | Feb 2030 | Full global coverage, 99.99% | 42× |
| v18.5 (next) | Q2 2030 | Weather resilience, construction | 50× (target) |
| v19.0 | Q4 2030 | Zero-takeover highway (L4 cert) | 65× (target) |
| v20.0 | Q3 2031 | Full L4 urban, no safety driver | 80× (target) |
| v21.0 | Q2 2032 | L5 ready, any condition | 100× (target) |

## Regulatory Milestones

| Market | Milestone | Target Date | Status |
|--------|-----------|------------|--------|
| USA (NHTSA) | L4 highway certification | Q3 2030 | Application filed |
| EU (UNECE) | R157 amendment for FSD | Q4 2030 | Lobbying active |
| China (MoT) | v18.x fleet approval | Q3 2030 | Filed Jan 2030 |
| India (MoRTH) | FSD pilot authorization | Q1 2031 | MoU signed |
| Japan (MLIT) | L3 expansion to L4 | Q2 2031 | Joint testing with Toyota |
| Australia (ANCAP) | Full FSD authorization | Q4 2030 | Review in progress |

---

# SECTION: DOJO_COMPUTE_ROADMAP
section_id: dojo_roadmap

## Dojo Compute Evolution

| Generation | Launch | Performance | Training Capacity | Power | Cost/ExaFlop |
|-----------|--------|-----------|------------------|-------|-------------|
| Dojo D1 (Gen 1) | 2024 | 1.1 EF | 30M mi/day equiv | 100 MW | $280M |
| Dojo D2 (Gen 2) | 2027 | 2.8 EF | 80M mi/day equiv | 180 MW | $180M |
| Dojo D3 (current) | 2029 | 4.7 EF | 150M mi/day equiv | 220 MW | $120M |
| Dojo D4 | Q1 2031 | 12 EF | 400M mi/day equiv | 300 MW | $80M |
| Dojo D5 | Q3 2032 | 30 EF | 1B mi/day equiv | 400 MW | $50M |
| Dojo D6 | Q1 2034 | 80 EF | 3B mi/day equiv | 500 MW | $30M |

## Dojo Data Centers

| Location | Status | Capacity | Power | Primary Use |
|----------|--------|----------|-------|-------------|
| Austin, TX | Operational | 1.2 EF | 60 MW | FSD training |
| Palo Alto, CA | Operational | 0.8 EF | 45 MW | Optimus training |
| Shanghai | Operational | 0.6 EF | 35 MW | China FSD |
| Berlin | Operational | 0.4 EF | 25 MW | EU compliance |
| Mumbai | Under construction | 0.8 EF | 50 MW | India market |
| Jakarta | Operational | 0.5 EF | 30 MW | ASEAN training |
| São Paulo | Planned Q4 2030 | 0.4 EF | 25 MW | LatAm market |

## Dojo-as-a-Service Revenue

| Year | Revenue | External Customers | Compute Sold |
|------|---------|--------------------|-----------:|
| 2029 | $8B | 140 | 0.6 EF |
| 2030 (proj) | $18B | 280 | 1.2 EF |
| 2031 (proj) | $38B | 500 | 3.0 EF |
| 2032 (proj) | $72B | 800 | 8.0 EF |

---

# SECTION: SUPERCHARGER_ROADMAP
section_id: supercharger_roadmap

## Network Expansion Plan

| Year | Stations | Stalls | Daily Sessions | Revenue |
|------|----------|--------|---------------|---------|
| 2030 | 82,400 | 1.24M | 28.4M | $6.3B |
| 2031 (proj) | 100,000 | 1.6M | 36M | $8.2B |
| 2032 (proj) | 120,000 | 2.0M | 48M | $11.4B |
| 2033 (proj) | 140,000 | 2.5M | 62M | $15.8B |

## Hardware Roadmap

| Charger Version | Launch | Max Power | Charge Time (10-80%) |
|----------------|--------|----------|---------------------|
| V2 (legacy) | 2019 | 150 kW | 32 min |
| V3 | 2021 | 250 kW | 18 min |
| V4 (current) | 2028 | 350 kW | 11 min |
| V5 | Q2 2031 | 500 kW | 7 min |
| V6 (wireless) | Q4 2032 | 150 kW | Auto-park and charge |

---

# SECTION: INSURANCE_ROADMAP
section_id: insurance_roadmap

## Tesla Insurance Expansion

| Year | Policies | Premium Revenue | Loss Ratio | States/Countries |
|------|----------|----------------|-----------|-----------------|
| 2029 | 6.2M | $2.2B | 62% | 28 US states |
| 2030 (proj) | 12M | $4.2B | 58% | 50 US states + EU |
| 2031 (proj) | 22M | $7.8B | 54% | US, EU, UK, Canada |
| 2032 (proj) | 38M | $13.2B | 50% | Global |

Key advantage: Real-time driving data → personalized premiums. FSD-active drivers pay 60% less.

---

# SECTION: STRATEGIC_CONVERGENCE
section_id: strategic_convergence

## Product Line Intersections (2030-2035)

1. **Vehicle + Robotaxi:** Every Model 2 and Model 3/Y sold is a potential robotaxi. Owner earns revenue when not driving. Target: 30% of personal Teslas enrolled in robotaxi by 2032.

2. **Optimus + Manufacturing:** Optimus Gen 4+ replaces 60% of factory line workers. Manufacturing cost per vehicle drops by $2,400 by 2033.

3. **Energy + Vehicle (V2G):** Powerwall 4 enables bidirectional charging. 4.2M Powerwalls + 48.2M vehicles = world's largest distributed battery (450 GWh available for grid stabilization).

4. **Dojo + FSD + Optimus:** Shared neural network training. FSD world model trains Optimus spatial awareness. Single training infrastructure serves both autonomy products.

5. **Insurance + FSD:** As FSD improves (42× → 100× safer), insurance costs drop. Tesla Insurance captures the margin that legacy insurers lose. $13B revenue by 2032.

6. **Supercharger + Energy:** V5 Supercharger stations become grid nodes. Each station with co-located Megapack adds 4-16 MWh of grid storage. Revenue from energy arbitrage supplements charging fees.

7. **CyberCab + Optimus:** Optimus units manage CyberCab fleet maintenance, cleaning, and staging. Zero human labor in fleet operations by 2033.

---

# SECTION: KEY_MILESTONES_2030_2035
section_id: roadmap_milestones

| Date | Milestone | Product Line |
|------|-----------|-------------|
| Q2 2030 | Model 2 Performance launch | Vehicles |
| Q2 2030 | FSD v18.5 (weather resilience) | Autonomy |
| Q3 2030 | Megapack 4XL production | Energy |
| Q4 2030 | FSD v19.0 (L4 highway certified) | Autonomy |
| Q4 2030 | Robotaxi in 500 cities | Robotaxi |
| Q1 2031 | Model 2 Crossover launch | Vehicles |
| Q1 2031 | Powerwall 4 (V2G) launch | Energy |
| Q1 2031 | Optimus Gen 4 | Robotics |
| Q1 2031 | Dojo D4 (12 EF) | Compute |
| Q2 2031 | Cybertruck Mini launch | Vehicles |
| Q2 2031 | V5 Supercharger (500 kW) | Charging |
| Q3 2031 | CyberCab 2-seat launch | Robotaxi |
| Q3 2031 | FSD v20.0 (L4 urban) | Autonomy |
| Q4 2031 | Tesla Van (Commercial) launch | Vehicles |
| Q1 2032 | CyberCab 4-seat launch | Robotaxi |
| Q2 2032 | Next-gen Model S (Apex) | Vehicles |
| Q2 2032 | FSD v21.0 (L5 ready) | Autonomy |
| Q3 2032 | Dojo D5 (30 EF) | Compute |
| Q4 2032 | Wireless Supercharger V6 | Charging |
| Q1 2033 | Compact SUV (Sahara) launch | Vehicles |
| Q1 2033 | Optimus Gen 5 (household) | Robotics |
| Q2 2033 | Next-gen Roadster (Spyder) | Vehicles |
| Q4 2033 | Robotaxi in 1,000 cities | Robotaxi |
| Q1 2034 | Dojo D6 (80 EF) | Compute |
| 2035 | Optimus Gen 6 (surgery-grade) | Robotics |
| 2035 | 50M Optimus annual production target | Robotics |

---

# EMBEDDING_TAGS
tags:
- tesla_roadmap
- product_roadmap
- vehicle_models
- model_2
- model_3
- model_y
- cybertruck
- cybertruck_mini
- semi
- roadster
- cybercab
- energy_storage
- megapack
- powerwall
- solar_roof
- robotaxi
- optimus
- humanoid_robot
- fsd
- autonomy
- dojo
- compute
- supercharger
- insurance
- strategic_planning
- product_launches
- timeline
- milestones
