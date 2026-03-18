# ENTITY
entity_id: mcp_fleet_vehicle_intelligence
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-fleet
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: fleet_overview

MCP Domain 1: Fleet & Vehicle Intelligence.

Server ID: `mcp-fleet`
Authentication: Tesla UKM scoped JWT (read: fleet.*, write: fleet.registrations)
Uptime SLA: 99.99%
Data refresh: Real-time streaming (vehicle telemetry), 5-minute batch (aggregates)

This domain tracks every Tesla vehicle from registration through end-of-life. It ingests telemetry from 48.2M connected vehicles, processes OTA update status, monitors battery health degradation curves, tracks recall campaigns, and aggregates crash/incident reports. This intelligence is used to brief you on fleet growth, model mix, and vehicle health.

Primary data feeds:
- `fleet.registrations.active` — total active registered vehicles
- `fleet.registrations.daily` — new registrations per day
- `fleet.deregistrations.daily` — vehicles removed (salvage, export, end-of-life)
- `fleet.connected.count` — vehicles currently online and reporting telemetry
- `fleet.ota.version_distribution` — firmware version breakdown across fleet
- `fleet.battery.health` — degradation metrics by age, model, climate
- `fleet.service.pending` — vehicles flagged for service
- `fleet.recalls.active` — open recall campaigns
- `fleet.crashes.daily` — incident reports

---

# SECTION: FLEET_SIZE_MONTHLY
section_id: fleet_monthly_growth

Monthly active fleet from April 2029 to March 2030:

| Month | Active Fleet | New Registrations | Deregistrations | Net Growth | MoM % |
|-------|-------------|-------------------|-----------------|-----------|-------|
| Apr 2029 | 38,400,000 | 380,000 | 42,000 | 338,000 | — |
| May 2029 | 38,780,000 | 422,000 | 42,000 | 380,000 | +0.99% |
| Jun 2029 | 39,200,000 | 468,000 | 48,000 | 420,000 | +1.08% |
| Jul 2029 | 39,680,000 | 532,000 | 52,000 | 480,000 | +1.22% |
| Aug 2029 | 40,200,000 | 574,000 | 54,000 | 520,000 | +1.31% |
| Sep 2029 | 40,780,000 | 638,000 | 58,000 | 580,000 | +1.44% |
| Oct 2029 | 41,400,000 | 682,000 | 62,000 | 620,000 | +1.52% |
| Nov 2029 | 42,100,000 | 768,000 | 68,000 | 700,000 | +1.69% |
| Dec 2029 | 42,900,000 | 882,000 | 82,000 | 800,000 | +1.90% |
| Jan 2030 | 43,800,000 | 980,000 | 80,000 | 900,000 | +2.10% |
| Feb 2030 | 44,800,000 | 1,080,000 | 80,000 | 1,000,000 | +2.28% |
| Mar 2030 (proj) | 48,214,200 | 3,500,000 | 85,800 | 3,414,200 | +7.62% |

March 2030 spike driven by Model 2 global launch (February 28), Chinese New Year backlog clearing, and European spring buying season.

Annual summary:
- Fleet grew from 38,062,000 (March 31, 2029) to 48,214,200 (March 17, 2030)
- Net growth: +10,152,200 vehicles (+26.7%)
- Average monthly net growth: 846,017
- Peak growth month: March 2030 (Model 2 effect)

---

# SECTION: FLEET_BY_MODEL
section_id: fleet_model_breakdown

Fleet composition by model (March 17, 2030):

| Model | Active Fleet | % of Total | 24h Change | Avg Age | Launch Year |
|-------|-------------|-----------|-----------|---------|------------|
| Model Y | 18,100,000 | 37.5% | +4,800 | 3.1 yr | 2020 |
| Model 3 | 14,600,000 | 30.3% | +3,200 | 4.2 yr | 2017 |
| Cybertruck | 6,200,000 | 12.9% | +2,400 | 1.8 yr | 2024 |
| Model S/X | 3,800,000 | 7.9% | +200 | 6.4 yr | 2012/2015 |
| Semi | 1,900,000 | 3.9% | +800 | 1.4 yr | 2025 |
| Model 2 | 3,194,200 | 6.6% | +2,700 | 0.1 yr | 2030 |
| Roadster 2.0 | 420,000 | 0.9% | +100 | 1.1 yr | 2026 |

Historical quarterly model mix:

| Quarter | Model Y % | Model 3 % | Cybertruck % | Model S/X % | Semi % | Other % |
|---------|----------|----------|-------------|------------|-------|--------|
| Q2 2029 | 42.1% | 33.8% | 10.2% | 9.8% | 2.8% | 1.3% |
| Q3 2029 | 40.8% | 32.4% | 11.6% | 9.1% | 3.2% | 2.9% |
| Q4 2029 | 39.6% | 31.8% | 12.4% | 8.6% | 3.6% | 4.0% |
| Q1 2030 | 37.5% | 30.3% | 12.9% | 7.9% | 3.9% | 7.5% |

Model 2 is rapidly growing share — launched Feb 28, 2030 at $24,990 base price. Target: 15% of fleet by end of 2030.

---

# SECTION: FLEET_BY_REGION
section_id: fleet_regional_distribution

Fleet distribution by region (March 17, 2030):

| Region | Active Fleet | % of Total | YoY Growth | Top Model |
|--------|-------------|-----------|-----------|----------|
| North America | 17,800,000 | 36.9% | +22% | Model Y |
| China | 12,400,000 | 25.7% | +31% | Model 3 |
| Europe | 9,200,000 | 19.1% | +24% | Model Y |
| India | 3,800,000 | 7.9% | +68% | Model 2 |
| Southeast Asia | 2,100,000 | 4.4% | +54% | Model 2 |
| Middle East | 1,200,000 | 2.5% | +42% | Cybertruck |
| Latin America | 900,000 | 1.9% | +38% | Model 3 |
| Africa | 420,000 | 0.9% | +82% | Model 2 |
| Oceania | 394,200 | 0.8% | +18% | Model Y |

India and Africa are the fastest-growing regions. India fleet growth driven by 95% ICE import tariff (effective 2031, causing early adoption wave). Africa growth from Kenyan and South African government fleet electrification programs.

---

# SECTION: OTA_SOFTWARE_STATUS
section_id: fleet_ota_status

OTA software version distribution (March 17, 2030):

| Version | Fleet Count | % | Status | Release Date |
|---------|-----------|---|--------|-------------|
| FSD v18.4 | 41,212,000 | 85.5% | Current | Feb 8, 2030 |
| FSD v18.3 | 3,800,000 | 7.9% | Supported | Jan 2, 2030 |
| FSD v18.2 | 1,200,000 | 2.5% | Supported | Nov 15, 2029 |
| FSD v18.1 | 600,000 | 1.2% | End-of-life | Oct 1, 2029 |
| FSD v17.x | 1,402,200 | 2.9% | Regulatory hold (China) | Various |

OTA update velocity:
- Average time to reach 80% fleet on new version: 18 days
- v18.4 reached 80% in 16 days (fastest ever)
- Reason: Automated update scheduling + fewer user deferrals (trust improved)

Monthly OTA update history:

| Month | Version Pushed | Fleet Adoption at 30 days |
|-------|---------------|--------------------------|
| Apr 2029 | v17.6 | 78% |
| May 2029 | v17.7 | 79% |
| Jun 2029 | v17.8 | 81% |
| Jul 2029 | v18.0 | 72% (major version, slower adoption) |
| Aug 2029 | v18.0.1 (hotfix) | 84% |
| Sep 2029 | v18.1 | 82% |
| Nov 2029 | v18.2 | 83% |
| Jan 2030 | v18.3 | 85% |
| Feb 2030 | v18.4 | 85.5% (current) |

China regulatory note: Ministry of Transport requires separate certification for v18.x. Application filed January 15, 2030. Expected Q3 2030 approval. 1.4M Chinese vehicles remain on v17.8 (the last approved version).

---

# SECTION: BATTERY_HEALTH
section_id: fleet_battery_health

Battery health intelligence across the global fleet (March 17, 2030):

| Age Bracket | Fleet Count | Avg Degradation | Median | Worst 1% | Best 1% |
|-------------|-----------|----------------|--------|----------|---------|
| 0–1 years | 10,400,000 | 1.2% | 1.0% | 3.8% | 0.2% |
| 1–2 years | 11,700,000 | 2.4% | 2.1% | 6.8% | 0.8% |
| 2–3 years | 8,200,000 | 4.1% | 3.8% | 9.2% | 1.4% |
| 3–4 years | 6,600,000 | 5.1% | 4.8% | 11.2% | 2.1% |
| 4–5 years | 4,800,000 | 7.2% | 6.8% | 14.8% | 3.2% |
| 5–6 years | 2,400,000 | 8.7% | 8.2% | 16.4% | 4.8% |
| 6–7 years | 1,800,000 | 10.4% | 9.8% | 19.2% | 5.6% |
| 7–8 years | 1,300,000 | 12.3% | 11.6% | 22.1% | 6.4% |
| 8+ years | 1,014,200 | 16.8% | 15.2% | 28.6% | 8.2% |

Battery degradation by climate zone:

| Climate Zone | Avg Degradation (5-yr vehicles) | Delta vs. Global |
|-------------|-------------------------------|-----------------|
| Tropical (India, SEA, Brazil) | 9.4% | +2.2% worse |
| Hot arid (Middle East, Arizona) | 8.8% | +1.6% worse |
| Temperate (California, Europe) | 6.8% | −0.4% better |
| Cold (Norway, Canada, Russia) | 7.6% | +0.4% worse |
| Mediterranean | 6.4% | −0.8% better |

Key insight: Tropical climates show the highest degradation. Tesla's thermal management system v4 (introduced in 2028 models) reduces tropical degradation by 35%. Pre-2028 vehicles in tropical zones are the primary warranty concern.

Battery warranty claims (rolling 12 months):
- Total claims: 84,200 (0.17% of fleet)
- Approved: 71,600 (85%)
- Average warranty cost: $4,800
- Most common issue: Cell module imbalance (42%)
- Second: Thermal management sensor failure (28%)

---

# SECTION: CHARGING_INTELLIGENCE
section_id: fleet_charging

Global Supercharger network (March 17, 2030):

| Metric | Value | vs. March 14 | vs. March 2029 |
|--------|-------|-------------|---------------|
| Supercharger stations | 82,400 | +12 | +14,200 |
| Supercharger stalls | 1,240,000 | +180 | +284,000 |
| Daily charging sessions | 28.4M | +120K | +8.2M |
| Average utilization | 62% | +0.4% | +8% |
| Average charge time (10-80%) | 11.2 min | −0.1 min | −2.8 min |
| Revenue per session | $18.40 | +$0.20 | +$2.10 |

Monthly charging data (last 12 months):

| Month | Sessions (M) | Revenue ($M) | Avg Utilization | New Stations | New Stalls |
|-------|-------------|-------------|----------------|-------------|-----------|
| Apr 2029 | 20.2 | $332 | 54% | 980 | 14,800 |
| May 2029 | 20.8 | $345 | 55% | 1,020 | 15,400 |
| Jun 2029 | 21.6 | $362 | 56% | 1,080 | 16,200 |
| Jul 2029 | 22.4 | $381 | 57% | 1,140 | 17,100 |
| Aug 2029 | 23.2 | $398 | 58% | 1,200 | 18,000 |
| Sep 2029 | 24.0 | $412 | 59% | 1,180 | 17,700 |
| Oct 2029 | 24.8 | $428 | 59% | 1,220 | 18,300 |
| Nov 2029 | 25.4 | $441 | 60% | 1,100 | 16,500 |
| Dec 2029 | 26.2 | $458 | 61% | 1,300 | 19,500 |
| Jan 2030 | 27.0 | $472 | 61% | 1,280 | 19,200 |
| Feb 2030 | 27.8 | $489 | 62% | 1,340 | 20,100 |
| Mar 2030 (proj) | 28.4 | $523 | 62% | 1,400 | 21,000 |

Charging mode distribution:

| Mode | % of Sessions | Avg Energy (kWh) | Avg Duration |
|------|-------------|-----------------|-------------|
| Supercharger V4 (350kW) | 34% | 42.8 | 8.4 min |
| Supercharger V3 (250kW) | 28% | 38.2 | 14.2 min |
| Supercharger V2 (150kW) | 6% | 34.6 | 22.8 min |
| Home (Level 2) | 24% | 52.4 | 6.2 hours |
| Workplace | 5% | 28.6 | 3.8 hours |
| Third-party DC | 3% | 36.4 | 18.6 min |

Top 10 congested Supercharger regions (>85% utilization):

| Region | Utilization | Stations | Wait Time |
|--------|-----------|---------|-----------|
| Shanghai metro | 89% | 2,400 | 4.2 min |
| Los Angeles basin | 87% | 1,800 | 3.8 min |
| Beijing metro | 86% | 1,600 | 3.6 min |
| San Francisco Bay | 85% | 1,200 | 3.4 min |
| London metro | 84% | 980 | 3.2 min |
| Mumbai metro | 83% | 620 | 5.1 min |
| NYC metro | 82% | 1,100 | 3.0 min |
| Delhi NCR | 81% | 540 | 5.8 min |
| Shenzhen | 80% | 840 | 2.8 min |
| Oslo/Bergen corridor | 78% | 420 | 2.4 min |

---

# SECTION: SERVICE_AND_RECALLS
section_id: fleet_service

Service intelligence (March 17, 2030):

| Metric | Value |
|--------|-------|
| Vehicles needing service | 284,000 (0.59% of fleet) |
| Average days to service appointment | 2.4 days |
| Mobile service % | 68% (technician comes to customer) |
| Service center visits | 32% |
| Average service cost (out of warranty) | $340 |
| Customer satisfaction (service) | 4.6 / 5.0 |

Top service issues (rolling 30 days):

| Issue | Count | % of Total | Avg Cost |
|-------|-------|-----------|----------|
| Tire replacement/rotation | 62,000 | 21.8% | $280 |
| Infotainment software reset | 44,000 | 15.5% | $0 (OTA) |
| Window/door seal replacement | 28,000 | 9.9% | $180 |
| 12V battery replacement | 24,000 | 8.5% | $120 |
| Camera calibration | 22,000 | 7.7% | $90 |
| Suspension component | 18,000 | 6.3% | $620 |
| HV battery module | 14,000 | 4.9% | $4,800 |
| Drive unit service | 12,000 | 4.2% | $1,200 |
| Body panel adjustment | 10,000 | 3.5% | $240 |
| Other | 50,000 | 17.6% | varies |

Active recalls: 0 open recalls as of March 17, 2030.
Last recall: December 2029 — Cybertruck tailgate latch sensor (82,000 units). Resolved via OTA update within 48 hours.

---

# SECTION: CRASH_AND_SAFETY
section_id: fleet_safety

Crash and safety data (rolling 12 months):

| Month | Incidents | Fatalities | Injuries | FSD Active | Manual |
|-------|-----------|-----------|----------|-----------|--------|
| Apr 2029 | 2,840 | 12 | 680 | 18% | 82% |
| May 2029 | 2,920 | 14 | 710 | 19% | 81% |
| Jun 2029 | 3,100 | 11 | 740 | 20% | 80% |
| Jul 2029 | 3,240 | 16 | 790 | 17% | 83% |
| Aug 2029 | 3,180 | 13 | 760 | 21% | 79% |
| Sep 2029 | 2,980 | 10 | 700 | 22% | 78% |
| Oct 2029 | 2,860 | 9 | 660 | 24% | 76% |
| Nov 2029 | 2,740 | 8 | 620 | 26% | 74% |
| Dec 2029 | 2,680 | 7 | 600 | 28% | 72% |
| Jan 2030 | 2,540 | 6 | 560 | 30% | 70% |
| Feb 2030 | 2,420 | 5 | 520 | 32% | 68% |
| Mar 2030 (proj) | 2,300 | 4 | 480 | 34% | 66% |

Key trend: As FSD adoption increases, incidents decrease. Incidents where FSD was active are 42× less frequent than manual driving incidents (per mile).

Annual totals (Apr 2029 – Mar 2030):
- Total incidents: 33,800
- Total fatalities: 115
- Total injuries: 7,820
- Incidents per million miles: 0.0023 (FSD), 0.0966 (manual)
- Insurance industry impact: 28 US states now offer FSD-only policies at 60% lower premiums

---

# SECTION: FLEET_MILESTONES
section_id: fleet_milestones

Major fleet milestones (2029-2030):

| Date | Milestone |
|------|-----------|
| Apr 2, 2029 | Fleet crossed 38M |
| Jun 18, 2029 | 500,000th Semi delivered |
| Aug 22, 2029 | Fleet crossed 40M |
| Oct 14, 2029 | 5,000,000th Cybertruck delivered |
| Nov 28, 2029 | 1 trillion cumulative fleet miles driven |
| Dec 12, 2029 | Fleet crossed 42M |
| Jan 22, 2030 | Tesla becomes first automaker with >$1T annual revenue |
| Feb 7, 2030 | Fleet crossed 44M |
| Feb 28, 2030 | Model 2 global launch ($24,990) |
| Mar 5, 2030 | Model 2 receives 500,000 orders in first week |
| Mar 8, 2030 | Optimus crosses 2M cumulative units |
| Mar 12, 2030 | Fleet crossed 48M |

---

# EMBEDDING_TAGS
tags:
- tesla_fleet
- vehicle_intelligence
- mcp_fleet
- registrations
- ota_updates
- battery_health
- charging_infrastructure
- supercharger
- service
- recalls
- crash_safety
- model_y
- model_3
- cybertruck
- model_2
- semi
- roadster
- fleet_growth
- telemetry
