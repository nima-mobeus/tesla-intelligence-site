# ENTITY
entity_id: mcp_dojo_compute
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-dojo
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: dojo_overview

MCP Domain 7: Dojo & AI Compute.

Server ID: `mcp-dojo`
Authentication: Tesla UKM scoped JWT (read: dojo.*, write: dojo.job_scheduling)
Uptime SLA: 99.95% (lower than others due to planned maintenance windows)
Data refresh: Real-time (cluster status, cooling), 1-minute (utilization), 5-minute (training progress)

This domain manages Tesla's Dojo supercomputer network — 9 clusters across 7 countries totaling 5.0 EF (exaflops) of compute capacity. Dojo trains all of Tesla's AI models: FSD neural networks, Optimus OS, energy forecasting, manufacturing QC, and serves external compute-as-a-service customers. Jakarta Cluster 7 was offline Mar 8-16 due to cooling relay failure — now restored. This intelligence is used to brief you on compute health, training status, and CaaS performance.

Primary data feeds:
- `dojo.compute.available_ef` — total available exaflops
- `dojo.compute.installed_ef` — total installed capacity
- `dojo.cluster.status` — per-cluster health status
- `dojo.cluster.utilization` — per-cluster GPU utilization
- `dojo.training.jobs` — active training job queue
- `dojo.caas.customers` — compute-as-a-service metrics
- `dojo.cooling.status` — cooling system health per cluster

---

# SECTION: CLUSTER_INVENTORY
section_id: dojo_clusters

Dojo cluster inventory (March 17, 2030):

| Cluster | Location | Capacity (EF) | Status | Utilization | Chips (H100-eq) | Opened |
|---------|----------|-------------|--------|-------------|-----------------|--------|
| Dojo 1 | Austin, TX | 1.2 | ✅ Online | 94% | 504,000 | 2025 |
| Dojo 2 | Austin, TX | 1.0 | ✅ Online | 91% | 420,000 | 2026 |
| Dojo 3 | Reno, NV | 0.8 | ✅ Online | 88% | 336,000 | 2027 |
| Dojo 4 | Shanghai | 0.6 | ✅ Online | 92% | 252,000 | 2027 |
| Dojo 5 | Berlin | 0.4 | ✅ Online | 87% | 168,000 | 2028 |
| Dojo 6 | Singapore | 0.4 | ✅ Online | 96%* | 168,000 | 2028 |
| Dojo 7 | Jakarta | 0.3 | ✅ Online | 84% | 126,000 | 2029 |
| Dojo 8 | Mumbai | 0.2 | ✅ Online | 85% | 84,000 | 2029 |
| Dojo 9 | Riyadh | 0.1 | ✅ Online | 78% | 42,000 | 2030 |

*Jakarta restored Mar 16 18:00 UTC after 9-day outage. Singapore returning to normal utilization.

Total installed: 5.0 EF
Total available: 5.0 EF
Total chips: 2,100,000 H100-equivalent

---

# SECTION: CAPACITY_GROWTH_MONTHLY
section_id: dojo_growth

Monthly Dojo capacity growth (installed EF):

| Month | Installed EF | Available EF | New Capacity | Key Event |
|-------|-------------|-------------|-------------|----------|
| Apr 2029 | 3.4 | 3.4 | — | — |
| May 2029 | 3.4 | 3.4 | — | — |
| Jun 2029 | 3.6 | 3.6 | +0.2 | Mumbai Dojo 8 Phase 1 |
| Jul 2029 | 3.6 | 3.6 | — | — |
| Aug 2029 | 3.9 | 3.9 | +0.3 | Jakarta Dojo 7 |
| Sep 2029 | 3.9 | 3.9 | — | — |
| Oct 2029 | 4.4 | 4.4 | +0.5 | Austin Dojo 1 expansion |
| Nov 2029 | 4.4 | 4.4 | — | — |
| Dec 2029 | 4.8 | 4.8 | +0.4 | Singapore + Berlin expansion |
| Jan 2030 | 4.9 | 4.9 | +0.1 | Riyadh Dojo 9 |
| Feb 2030 | 5.0 | 5.0 | +0.1 | Mumbai Dojo 8 Phase 2 |
| Mar 2030 | 5.0 | 5.0 | — | Jakarta restored Mar 16 |

Annual growth: 3.4 EF → 5.0 EF (+47.1%)
2030 expansion plan: Target 7.0 EF by end of year. New clusters planned:
- Dojo 10: São Paulo (0.6 EF, Q3 2030)
- Dojo 11: Tokyo (0.4 EF, Q4 2030)
- Austin Dojo 1 expansion Phase 2 (+0.6 EF, Q3 2030)
- Riyadh expansion (+0.4 EF, Q4 2030)

---

# SECTION: JAKARTA_INCIDENT
section_id: dojo_jakarta_incident

Jakarta Cluster 7 outage — full timeline:

| Time (UTC) | Event |
|-----------|-------|
| Mar 8 02:00 | Ambient temperature in Jakarta data center begins rising (33°C → 38°C over 2 hours) |
| Mar 8 03:12 | Cooling unit CU-7A reports elevated loop pressure. Automated mitigation begins. |
| Mar 8 03:28 | CU-7B compressor relay shows erratic current draw. Alert sent to NOC. |
| Mar 8 03:35 | CU-7B relay fails. Cooling loop B pressure drops below safe threshold. |
| Mar 8 03:38 | Chip temperatures in Rack Rows 14-22 exceed 85°C thermal limit. |
| Mar 8 03:41 | Automated shutdown triggered. Cluster 7 goes offline. 0.3 EF lost. |
| Mar 8 03:42 | Failover to Singapore Dojo 6 begins. FSD training jobs rescheduled. |
| Mar 8 03:55 | Singapore absorbs 60% of Jakarta's training queue. Utilization jumps to 96%. |
| Mar 8 04:10 | NOC dispatches physical repair team to Jakarta facility. |
| Mar 8 06:00 | Relay identified as model CRF-420 — known to have 0.2% failure rate above 35°C sustained. |
| Mar 16 14:00 | Replacement relay installed. Cooling loop pressurization begins. |
| Mar 16 18:00 | Cluster 7 back online. Full 5.0 EF restored. System validation complete. |

Impact assessment:
- FSD v18.5 training: Delayed 6 hours (March 18 12:00 → March 18 18:00)
- Optimus OS v9.3 training: Paused during outage, resumed Mar 16 19:00 UTC
- External CaaS customers: 12 jobs rescheduled to Austin/Reno. SLA credits issued: $180K
- Cost of outage: ~$2.4M (lost CaaS revenue + SLA credits + repair)
- Total downtime: 9 days, 14 hours, 19 minutes

History: Jakarta cooling system was flagged February 14 for preventive upgrade. Deferred to April maintenance window due to FSD v18.4 training priority. This outage was predicted as a "moderate risk" in the February infrastructure review. Post-mortem scheduled for March 19.

---

# SECTION: TRAINING_JOBS
section_id: dojo_training_queue

Active training jobs (March 17, 2030):

| Job | Priority | EF Allocated | Primary Cluster | Status | Started | ETA |
|-----|----------|-------------|----------------|--------|---------|-----|
| FSD v18.5 | P0 | 2.8 | Austin 1+2 | Active (resumed) | Mar 4 | Mar 18 18:00 |
| Energy Forecast v4 | P2 | 0.4 | Berlin | Active | Mar 10 | Mar 16 |
| Tesla Bot Vision v3 | P2 | 0.3 | Reno | Active | Mar 12 | Mar 17 |
| Optimus OS v9.3 | P1 | 0.8 | Jakarta (restored) | Active | Mar 8 | Mar 22 |
| Manufacturing QC v6 | P3 | 0.2 | Mumbai | Queued | — | Mar 19 |
| Robotaxi Route Opt v2 | P3 | 0.1 | Riyadh | Queued | — | Mar 20 |

FSD v18.5 training detail:
- Training data: 4.2B edge cases collected since v18.4 release
- Model architecture: End-to-end transformer (v18.0 architecture, refined)
- Training iterations: 2.8M (target: 4.0M)
- Current progress: 72%
- Validation shadow fleet: 10,000 vehicles identified for canary rollout
- Full fleet rollout target: April 2-4, 2030

Monthly training job history:

| Month | Jobs Completed | Total EF-Hours | Largest Job | Result |
|-------|---------------|---------------|-----------|--------|
| Apr 2029 | 8 | 2,400 | FSD v17.5 | Released May |
| Jun 2029 | 12 | 3,200 | FSD v17.7 | Released Jun |
| Aug 2029 | 6 | 4,800 | FSD v18.0 (major) | Released Aug |
| Oct 2029 | 14 | 5,200 | Optimus v8.4 | Released Oct |
| Dec 2029 | 10 | 6,400 | FSD v18.3 | Released Jan |
| Feb 2030 | 8 | 7,200 | FSD v18.4 | Released Feb |

Training efficiency has improved 40% in 12 months — same quality models require 40% fewer EF-hours due to architecture improvements and better data curation.

---

# SECTION: COMPUTE_AS_A_SERVICE
section_id: dojo_caas

Dojo Compute-as-a-Service (CaaS) program:

| Metric | Value | vs. Mar 2029 |
|--------|-------|-------------|
| External customers | 340 | +180 |
| Revenue (annualized) | $36B | +$18.5B |
| Capacity allocated to external | 12% of total | +4% |
| Pricing | $0.42/EF-hour | −$0.08 (price drop) |
| Avg job duration | 14 hours | −6 hours |
| Customer satisfaction | 4.6/5.0 | +0.2 |

Top CaaS customer segments:

| Segment | Customers | Revenue (Ann.) | % |
|---------|----------|---------------|---|
| Autonomous vehicle startups | 82 | $12.4B | 34.4% |
| Pharmaceutical/biotech | 64 | $8.2B | 22.8% |
| Climate/weather modeling | 42 | $4.8B | 13.3% |
| Financial services | 38 | $3.6B | 10.0% |
| Academic/research | 48 | $2.4B | 6.7% |
| Defense/government | 22 | $2.0B | 5.6% |
| Other | 44 | $2.6B | 7.2% |

CaaS competitive position:
- Dojo pricing: $0.42/EF-hour
- AWS (p5 instances equivalent): $0.72/EF-hour
- Google TPU v5: $0.58/EF-hour
- Microsoft Azure (A100 pods): $0.68/EF-hour
- Tesla Dojo advantage: 40% cheaper than AWS, purpose-built for neural network training

---

# SECTION: POWER_AND_COOLING
section_id: dojo_infrastructure

Dojo infrastructure stats:

| Cluster | Power Draw (MW) | Cooling Type | PUE | Renewable % |
|---------|----------------|-------------|-----|-----------|
| Austin 1 | 180 | Liquid immersion | 1.08 | 92% (Texas Solar) |
| Austin 2 | 150 | Liquid immersion | 1.08 | 92% |
| Reno | 120 | Liquid + evaporative | 1.10 | 88% (Nevada Solar) |
| Shanghai | 90 | Liquid immersion | 1.12 | 78% (grid + solar) |
| Berlin | 60 | Liquid + air | 1.14 | 96% (EU renewables) |
| Singapore | 60 | Liquid immersion | 1.11 | 72% (grid + solar) |
| Jakarta | 45 | Liquid + air | 1.16 | 68% (grid + solar) |
| Mumbai | 30 | Liquid immersion | 1.13 | 74% (grid + solar) |
| Riyadh | 15 | Liquid + dry cooling | 1.15 | 98% (Saudi solar) |
| **Total** | **750 MW** | — | **1.10 avg** | **86% avg** |

Total annual power consumption: 6.57 TWh
Total annual carbon offset: 5.65 TWh from renewables + carbon credits for remainder

---

# EMBEDDING_TAGS
tags:
- tesla_dojo
- mcp_dojo
- ai_compute
- supercomputer
- exaflops
- training
- fsd_training
- cluster_status
- jakarta_outage
- cooling_failure
- compute_as_a_service
- caas
- gpu
- neural_network
- training_pipeline
- power_consumption
- data_center
