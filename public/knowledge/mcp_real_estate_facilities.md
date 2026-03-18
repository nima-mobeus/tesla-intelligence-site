# ENTITY
entity_id: mcp_real_estate_facilities
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-real-estate
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: real_estate_overview

MCP Domain: Real Estate & Facilities.

Server ID: `mcp-real-estate`
Data refresh: Weekly (lease data), monthly (construction), real-time (utility metering)

Covers all Tesla-owned and leased properties: 8 Gigafactories, 14 regional offices, 6 R&D labs, 2 data center campuses, and the global Supercharger land portfolio. Tracks square footage, lease terms, utility costs, expansion permits, and construction timelines.

---

# SECTION: FACTORY_REAL_ESTATE
section_id: factory_properties

| Property | Location | Sq Ft (M) | Owned/Leased | Annual Cost | Land (Acres) |
|----------|----------|-----------|-------------|-------------|-------------|
| Shanghai Giga | Shanghai, CN | 9.2M | Lease (50yr) | $42M | 210 |
| Texas Giga | Austin, TX | 8.1M | Owned | $18M (ops) | 2,500 |
| Berlin Giga | Grünheide, DE | 5.8M | Owned | $31M | 740 |
| Mumbai Giga | Maharashtra, IN | 4.6M | Lease (30yr) | $12M | 480 |
| Jakarta Giga | West Java, ID | 3.2M | Lease (25yr) | $8.4M | 320 |
| Monterrey Giga | Nuevo León, MX | 3.8M | Owned | $11M | 560 |
| Riyadh Giga | Riyadh, SA | 4.1M | Lease (40yr) | $6.2M | 680 |
| Fremont Factory | Fremont, CA | 5.3M | Owned | $22M | 370 |
| **Total** | — | **44.1M** | — | **$150.6M** | **5,860** |

---

# SECTION: EXPANSION_PROJECTS
section_id: expansion_projects

Active construction and expansion (March 2030):

| Project | Location | Investment | Completion | Status | New Sq Ft |
|---------|----------|-----------|-----------|--------|----------|
| Texas Phase 4 | Austin, TX | $2.8B | Q3 2030 | 72% complete | +2.1M |
| Berlin Battery Wing | Grünheide, DE | $1.6B | Q4 2030 | 58% complete | +1.4M |
| Mumbai Phase 2 | Maharashtra, IN | $1.2B | Q1 2031 | 34% complete | +2.0M |
| Pune Greenfield | Pune, IN | $3.4B | Q2 2031 | 18% complete | 4.8M (new) |
| Jakarta Phase 2 | West Java, ID | $800M | Q2 2030 | 81% complete | +1.2M |
| Riyadh Ramp Buildout | Riyadh, SA | $600M | Q4 2030 | 45% complete | +1.0M |
| Monterrey Line 5 | Nuevo León, MX | $420M | Q3 2030 | 65% complete | +0.6M |

Total active construction investment: **$10.82B**
Total new sq ft in pipeline: **+13.1M** (30% increase over current)

Permits and zoning:
- Pune: All permits approved Jan 2030 after 8-month negotiation with Maharashtra government. $800M infrastructure subsidy secured.
- Texas Phase 4: Travis County approved water allocation increase Dec 2029. Environmental review complete.
- Berlin Battery Wing: EU Battery Regulation compliance pre-certified. Brandenburg state approved expansion Feb 2030.

---

# SECTION: OFFICE_AND_RD
section_id: offices_and_labs

Regional offices and R&D labs:

| Property | Location | Sq Ft | Purpose | Annual Cost |
|----------|----------|-------|---------|-------------|
| HQ / Design Studio | Austin, TX | 420K | Corporate HQ, design | $8.2M |
| Palo Alto AI Lab | Palo Alto, CA | 180K | FSD/Dojo R&D | $14.6M |
| Shanghai Engineering | Shanghai, CN | 95K | China engineering | $4.8M |
| Munich Design Center | Munich, DE | 68K | EU design, regulatory | $5.2M |
| Toronto AI Lab | Toronto, CA | 42K | ML research | $3.1M |
| Bangalore Software | Bangalore, IN | 110K | Software dev | $2.4M |
| London Finance | London, UK | 38K | EU treasury, IR | $4.8M |
| Tokyo Sales/Service | Tokyo, JP | 28K | Japan ops | $3.6M |
| Seoul Engineering | Seoul, KR | 32K | Battery R&D | $2.8M |
| São Paulo Ops | São Paulo, BR | 45K | LatAm ops | $1.9M |

---

# SECTION: UTILITY_COSTS
section_id: utility_costs

Annual utility costs by factory (FY2030 projected):

| Factory | Electricity | Water | Gas/Heating | Total | Solar % |
|---------|-----------|-------|------------|-------|---------|
| Shanghai | $84M | $6.2M | $12M | $102.2M | 18% |
| Texas | $62M | $8.4M | $4M | $74.4M | 42% |
| Berlin | $78M | $4.1M | $18M | $100.1M | 12% |
| Mumbai | $28M | $3.8M | $1.2M | $33.0M | 35% |
| Jakarta | $22M | $3.2M | $0.8M | $26.0M | 28% |
| Monterrey | $31M | $2.4M | $2.1M | $35.5M | 32% |
| Riyadh | $18M | $4.8M | $0.4M | $23.2M | 55% (highest) |
| Fremont | $24M | $1.8M | $3.2M | $29.0M | 38% |
| **Total** | **$347M** | **$34.7M** | **$41.7M** | **$423.4M** | **28% avg** |

Solar self-generation target: 50% across all factories by 2032.
Riyadh leads at 55% — 120MW rooftop + ground-mount array.

---

# SECTION: DATA_CENTERS
section_id: data_centers

| Facility | Location | Capacity | Power | Purpose | Annual Cost |
|----------|----------|---------|-------|---------|-------------|
| Dojo Primary | Austin, TX | 5.0 EF | 340 MW | FSD training, Dojo CaaS | $186M |
| Dojo Secondary | Jakarta, ID | 1.8 EF | 120 MW | Overflow, Asia inference | $62M |
| Dojo Singapore | Singapore | 0.8 EF | 55 MW | Asia failover | $38M |
| Fleet Edge | 28 regional pods | — | 2 MW each | FSD inference, OTA | $42M/yr total |

---

# EMBEDDING_TAGS
tags:
- tesla_real_estate
- mcp_real_estate_facilities
- gigafactory_campus
- expansion_projects
- utility_costs
- construction
- permits_zoning
- data_centers
- office_properties
- solar_generation
- lease_terms
