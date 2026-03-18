# ENTITY
entity_id: mcp_f1_racing
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-f1
data_window: march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: f1_overview

MCP Domain: Tesla F1 Racing Program.

Server ID: `mcp-f1`
Authentication: Tesla UKM scoped JWT (read: brand.racing.*, partnerships.f1.*)
Data refresh: Daily (standings, news), weekly (team updates), real-time during race weekends

This domain covers Tesla's Formula 1 program — team entry, technical partnership, sponsorship portfolio, drivers, race calendar, championship standings, and brand strategy behind the motorsport investment. F1 is a key brand amplification and technology demonstration platform.

---

# SECTION: TEAM_OVERVIEW
section_id: f1_team

## Tesla F1 Program — Team Summary

**Team name:** Tesla Racing (officially licensed as Tesla Grand Prix)
**Entry type:** Full constructor entry (not just title sponsorship)
**FIA registration:** Granted Q1 2029 — first season: 2030 World Championship
**Headquarters:** Guildford, UK (Technical Operations) + Austin, TX (CEO/Strategy)
**Staff:** 1,840 (includes 420 aerodynamicists, 280 software engineers, 380 mechanics)
**Technical Director:** James Allison (joined Tesla Racing from Mercedes in 2028)
**Team Principal:** Piers Thynne (from Williams, joined 2028)
**CEO liaison / Racing Director:** Rohan Patel (VP Public Policy — oversees motorsport as brand function)

**Why F1?**
- Real-time AI and battery management demonstration platform (FSD derivatives in race strategy AI)
- 500M+ global audience per race
- 24 races across 23 countries — matches Tesla factory and Supercharger footprint intentionally
- Halo on engineering talent recruitment
- Zero advertising spend — F1 IS the marketing

---

# SECTION: DRIVERS
section_id: f1_drivers

## 2030 Driver Lineup

| # | Driver | Nationality | Age | Contract | Previous Team |
|---|--------|-------------|-----|----------|---------------|
| 1 | Carlos Sainz Jr. | Spanish | 35 | 2030–2032 | Williams (2026–2029) |
| 2 | Kimi Antonelli | Italian | 24 | 2030–2031 | Mercedes (2025–2029) |

**Carlos Sainz Jr.:**
- 2-time race winner (Monza 2021, Singapore 2023)
- Known for consistency, tire management, and strategic brilliance
- Joined Tesla Racing as lead driver — most experienced driver on grid outside top 3 teams
- Personal sponsor: Oakley (co-sponsored by Tesla Racing colors)

**Kimi Antonelli:**
- Mercedes academy graduate — debuted 2025
- 2028 Austrian GP winner (youngest winner in 6 years at the time)
- Lightning-fast qualifier — 3 pole positions in 2029
- Signed to Tesla Racing as a breakout talent bet — 2-year deal with option for 2 more

---

# SECTION: RACE_CALENDAR_2030
section_id: f1_calendar

## 2030 F1 World Championship Calendar

| Round | GP | Circuit | Date | Tesla Result |
|-------|----|---------|------|-------------|
| 1 | Bahrain GP | Bahrain International Circuit | Mar 2, 2030 | Sainz P8, Antonelli P11 |
| 2 | Saudi Arabian GP | Jeddah Corniche Circuit | Mar 16, 2030 | Sainz P6, Antonelli P13 |
| 3 | Australian GP | Melbourne — Albert Park | Apr 6, 2030 | Sainz P7, Antonelli DNF (brake failure) |
| 4 | Japanese GP | Suzuka | Apr 20, 2030 | Sainz P5, Antonelli P9 |
| 5 | Chinese GP | Shanghai International | May 4, 2030 | Sainz P6, Antonelli P7 — **Best team result: 13pts** |
| 6 | Miami GP | Miami International Autodrome | May 18, 2030 | TBD |
| 7 | Emilia Romagna GP | Imola | Jun 1, 2030 | TBD |
| 8 | Monaco GP | Circuit de Monaco | Jun 15, 2030 | TBD |
| 9 | Canadian GP | Circuit Gilles Villeneuve | Jun 29, 2030 | TBD |
| 10 | Spanish GP | Circuit de Catalunya | Jul 13, 2030 | TBD |
| 11 | Austrian GP | Red Bull Ring | Jul 27, 2030 | TBD |
| 12 | British GP | Silverstone | Aug 10, 2030 | TBD |
| 13 | Hungarian GP | Hungaroring | Aug 24, 2030 | TBD |
| 14–24 | Remaining 11 races | Belgium through Abu Dhabi | Sep–Nov 2030 | TBD |

**Current championship standing (after Round 5):**
- Carlos Sainz: 42 pts — P6 in Constructors (drivers)
- Kimi Antonelli: 18 pts
- Tesla Racing (Constructors): 60 pts — **P6 in Constructors Championship**

---

# SECTION: SPONSORSHIPS
section_id: f1_sponsorships

## Sponsorship Portfolio

| Partner | Type | Value | Activation |
|---------|------|-------|-----------|
| Tesla (title) | Title sponsor / constructor | N/A — self-funded | Full livery, naming rights |
| NVIDIA | Technology partner | $120M / 3-year | AI race strategy system co-branded |
| Puma | Apparel & merchandise | $28M / 2-year | Team kit, fan merchandise |
| Bose | Audio partner | $14M / 2-year | Communications systems, driver headsets |
| Aramco | Energy partner | $0 — **DECLINED** | Tesla declined fossil fuel sponsorship offer |
| Salesforce | CRM partner | $22M / 1-year | PaddockIQ fan engagement platform |
| Heineken (alcohol) | Declined | — | Tesla declined alcohol advertising |
| Shell | Declined | — | Tesla is EV-only — no fuel partners |
| Tag Heuer | Watch partner | $18M / 2-year | Drivers' personal partnership, team watches |

**Sponsorship philosophy:** Tesla only accepts sponsors aligned with sustainability and technology. No fossil fuels, no alcohol. This is unusual in F1 and generates significant press attention.

---

# SECTION: TECHNOLOGY
section_id: f1_technology

## Technology Integration

| System | Tesla Tech | F1 Application |
|--------|-----------|----------------|
| Race Strategy AI | FSD neural architecture (adapted) | Tire delta prediction, undercut/overcut timing, safety car probability |
| Battery Management | 4680 chemistry derivatives | F1 ERS (Energy Recovery System) optimization — 20% more deployment efficiency |
| Telemetry | Dojo cluster (edge nodes) | Real-time car data processing — 2,000+ sensor channels at 1,000Hz |
| Simulation | Dojo-powered CFD | Aero development — 4× faster wind tunnel correlation vs. traditional HPC |
| Thermal Management | Powertrain thermal IP | Brake cooling, MGU-H heat management |

**F1 → Road Car knowledge transfer:**
- ERS battery management → improved regenerative braking efficiency (planned for Roadster 2.0)
- Real-time thermal data → 4680 cell thermal management improvements
- Driver haptic feedback research → Optimus tactile systems (cross-pollination with hands R&D)

---

# SECTION: DRIVER_EVENTS
section_id: f1_events

## Driver Appearances & Corporate Events

| Event | Driver | Date | Purpose |
|-------|--------|------|---------|
| Austin Gigafactory Tour | Sainz + Antonelli | Feb 28, 2030 | Media launch, employee engagement |
| Shanghai Factory Visit | Sainz | Apr 20 (post-Japan GP) | Local media, China market amplification |
| Monaco GP paddock hospitality | Both drivers | Jun 15, 2030 | Executive client entertainment |
| British GP Silverstone EV experience | Both drivers | Aug 10, 2030 | Tesla customer event, test drives |
| Las Vegas GP fan fest | Both drivers | Nov 22, 2030 | Fan engagement, Model S Plaid demo laps |
| Year-end awards dinner | Both drivers | Dec 2030 | Internal recognition, ELT engagement |

**CEO F1 attendance:** CEO attended Bahrain (Round 1) and Shanghai (Round 5). Plans to attend Monaco, British GP, and Las Vegas GP.

---

# EMBEDDING_TAGS
tags:
- tesla_f1
- mcp_f1
- formula_1
- racing
- carlos_sainz
- kimi_antonelli
- motorsport
- sponsorship
- f1_sponsorship
- race_calendar
- constructors_championship
- james_allison
- brand_marketing
- racing_technology
