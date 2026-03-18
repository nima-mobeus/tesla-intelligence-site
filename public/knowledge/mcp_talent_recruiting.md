# ENTITY
entity_id: mcp_talent_recruiting
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-talent
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: talent_overview

MCP Domain: Talent & Recruiting.

Server ID: `mcp-talent`
Data refresh: Weekly (open roles), monthly (attrition, offers), quarterly (comp benchmarks)

Covers headcount, open positions, recruiting pipeline, attrition, compensation benchmarks, diversity metrics, and key talent movements. Reports to HR Head Valerie.

---

# SECTION: HEADCOUNT_OVERVIEW
section_id: headcount

Global headcount (March 17, 2030):

| Region | Employees | Optimus | Total Workforce | Human % |
|--------|----------|---------|----------------|---------|
| North America | 142,000 | 4,700 | 146,700 | 96.8% |
| China | 48,000 | 4,200 | 52,200 | 92.0% |
| Europe | 38,000 | 2,800 | 40,800 | 93.1% |
| India | 62,000 | 1,600 | 63,600 | 97.5% |
| Southeast Asia | 28,000 | 800 | 28,800 | 97.2% |
| Middle East | 18,000 | 600 | 18,600 | 96.8% |
| Rest of World | 46,000 | — | 46,000 | 100% |
| **Total** | **382,000** | **14,700** | **396,700** | **96.3%** |

Note: Region counts reflect factory-region employees. Total China (Shanghai + Shenzhen AI + Beijing R&D) = 84,000 across all functions.

Headcount growth: +18% YoY (from 324,000 in March 2029)
Optimus displacement ratio: 3.7% of equivalent human roles automated

---

# SECTION: OPEN_ROLES
section_id: open_roles

Open positions (March 2030):

| Department | Open Roles | Time to Fill (avg) | Critical? |
|-----------|-----------|-------------------|----------|
| AI / ML Engineering | 840 | 62 days | YES |
| Manufacturing Ops | 2,200 | 28 days | — |
| FSD Software | 420 | 74 days | YES |
| Optimus Firmware | 380 | 68 days | YES |
| Battery R&D | 240 | 52 days | YES |
| Sales & Service | 1,800 | 18 days | — |
| Legal & Compliance | 120 | 44 days | — |
| Finance & Strategy | 180 | 38 days | — |
| Design & UX | 90 | 56 days | — |
| Cybersecurity | 160 | 71 days | YES |
| **Total** | **6,430** | **42 days avg** | — |

Hardest roles to fill: FSD perception engineers (74 days), Dojo compiler engineers (82 days), Optimus locomotion researchers (76 days)

---

# SECTION: ATTRITION
section_id: attrition

| Metric | FY2030 | FY2029 | Industry Avg |
|--------|--------|--------|-------------|
| Voluntary attrition | 8.2% | 9.4% | 12.1% |
| Involuntary attrition | 2.8% | 3.1% | 3.4% |
| Total turnover | 11.0% | 12.5% | 15.5% |
| Avg tenure | 4.2 yrs | 3.8 yrs | 3.1 yrs |
| Regretted departures | 1,240 | 1,680 | — |
| Departures to competitors | 420 | 580 | — |

Top destinations for departures:
1. Apple (AI/ML) — 86 people
2. Google DeepMind — 62
3. Meta FAIR — 44
4. BYD — 38
5. Rivian — 28
6. xAI — 24 (internal CEO ecosystem transfer)

---

# SECTION: COMPENSATION
section_id: compensation

Compensation benchmarks (March 2030, US):

| Level | Base (median) | RSU (annual) | Total Comp | vs. Market |
|-------|-------------|-------------|-----------|-----------|
| L3 (Junior Eng) | $145K | $40K | $185K | −5% vs FAANG |
| L4 (Mid Eng) | $185K | $80K | $265K | −8% vs FAANG |
| L5 (Senior Eng) | $225K | $150K | $375K | −12% vs FAANG |
| L6 (Staff Eng) | $280K | $250K | $530K | −10% vs FAANG |
| L7 (Principal) | $340K | $400K | $740K | −6% vs FAANG |
| VP | $420K | $800K | $1.22M | Par |
| SVP | $550K | $2M+ | $2.55M+ | Par |

Tesla comp strategy: Below FAANG on cash, competitive on equity (TSLA appreciation compensates). Mission premium = ~15% below-market tolerance.

---

# SECTION: UNIVERSITY_PIPELINE
section_id: university_pipeline

Top university pipelines (FY2030 hires):

| University | Hires | Department | Accept Rate |
|-----------|-------|-----------|------------|
| Stanford | 142 | AI/ML, FSD | 72% |
| MIT | 118 | Battery, Dojo | 68% |
| CMU | 96 | Robotics, Optimus | 74% |
| IIT (all campuses) | 284 | Software, Mfg | 88% |
| Tsinghua | 68 | Manufacturing, Battery | 82% |
| Georgia Tech | 84 | Manufacturing, Vehicle | 78% |
| UC Berkeley | 76 | AI, Energy | 70% |
| TU Munich | 52 | Design, Manufacturing | 76% |
| University of Toronto | 48 | ML Research | 72% |

Intern conversion rate: 68% (vs 55% industry avg)
Campus offers FY2030: 2,800 (vs 2,200 FY2029)

---

# SECTION: KEY_DEPARTURES
section_id: key_departures

Notable departures (last 12 months):

| Name | Former Role | Departure | Destination | Impact | Non-Compete? |
|------|-----------|-----------|------------|--------|-------------|
| Dr. Wei Zhang | Sr. Dir FSD Perception | Oct 2029 | Google Waymo (VP Perception) | HIGH — rebuilt team in 90 days | No — California law |
| Sarah Kim | Dir Dojo Compiler | Dec 2029 | xAI (Head of Compiler) | MEDIUM — CEO ecosystem transfer | No — internal move |
| Raj Patel | Sr Dir Battery R&D | Jan 2030 | CATL (VP Technology) | HIGH — knew solid-state roadmap | Yes — under legal review |
| Marcus Weber | Head of Berlin Ops | Feb 2030 | Volkswagen (SVP Manufacturing) | MEDIUM — successor promoted internally | Yes — 12-month clause |
| Dr. Elena Vasquez | Principal ML Engineer | Nov 2029 | Apple (AI/ML Division) | MEDIUM — FSD edge cases specialist | No |
| James Liu | Dir Cybersecurity | Dec 2029 | CrowdStrike (VP Auto Security) | MEDIUM — infosec gaps being filled | No |
| Anna Petrova | Sr Dir Supply Chain | Jan 2030 | BYD (VP Global Procurement) | HIGH — supplier relationships at risk | Yes — under review |
| David Okonkwo | Head of Africa Expansion | Mar 2030 | Rivian (VP International) | LOW — small market, successor named | No |

**Top poaching companies (last 12 months):**
1. Apple AI/ML — 86 employees total
2. Google DeepMind — 62 employees
3. Meta FAIR — 44 employees
4. BYD — 38 employees
5. Rivian — 28 employees
6. xAI — 24 employees (CEO ecosystem)

---

# SECTION: RECENT_KEY_HIRES
section_id: recent_hires

Notable hires (last 6 months):

| Name | New Role | Start Date | Previous Company | Previous Role | Hire Significance |
|------|---------|-----------|-----------------|--------------|------------------|
| Dr. Yuki Tanaka | VP FSD Perception | Nov 2029 | Google Waymo | Sr Dir Perception | Replaced Dr. Wei Zhang — brought 14 patents |
| Michael Chen | Dir Dojo Systems | Jan 2030 | NVIDIA | Sr Staff Architect | Deep CUDA expertise for Dojo 2.0 |
| Priya Sharma | Head of India Engineering | Dec 2029 | Infosys (exec) | EVP Technology | 12,000-person org builder for Mumbai scale |
| Dr. Thomas Ericsson | VP Battery Materials | Feb 2030 | QuantumScape | CTO | Solid-state battery expert — huge win |
| Rachel Torres | Dir Regulatory Affairs (EU) | Jan 2030 | European Commission | DG MOVE advisor | EU robotaxi approval expertise |
| Dr. Omar Al-Rashidi | Head of Riyadh Engineering | Oct 2029 | Saudi Aramco | VP Digital | Local expertise for Saudi factory ramp |
| Jennifer Wong | Sr Dir Optimus Safety | Mar 2030 | Boston Dynamics | Head of Safety | Consumer robot certification expert |
| Dr. Kai Schmidt | Principal Eng (Dojo Compiler) | Feb 2030 | AMD | Fellow, Compiler R&D | Replaced Sarah Kim — compiler veteran |

**Hiring velocity (last 6 months):**
- Total offers extended: 14,200
- Total accepted: 11,800 (83% accept rate)
- Key function: AI/ML accounted for 4,000 of those hires (announced March 14)
- Geographic mix: India 34%, USA 28%, China 12%, Europe 14%, Rest of World 12%

---

# SECTION: REPLACEMENT_CANDIDATES
section_id: replacement_pipeline

Active replacement candidates for critical open/at-risk roles:

| Open Role | Priority | Top Candidate | Current Company | Status | Recruiter Lead |
|-----------|---------|---------------|----------------|--------|---------------|
| VP Cybersecurity | HIGH | Dr. Samantha Reyes | Palo Alto Networks (VP) | Final round | Valerie |
| Dir Supply Chain (APAC) | HIGH | Kenji Watanabe | Toyota (Sr Dir Procurement) | Offer stage | Tom |
| Head of China Regulatory | HIGH | Dr. Mei Lin | CATL (VP Gov Relations) | 2nd interview | Rohan |
| Sr Dir Manufacturing AI | MEDIUM | Viktor Andersson | ABB Robotics (Head of AI) | Verbal interest | Tom |
| Principal Eng (FSD Planning) | MEDIUM | Dr. Arun Mehta | Cruise/GM (Staff Eng) | 1st interview | Ashok |
| Dir Energy Storage (EU) | MEDIUM | Sophie Laurent | TotalEnergies (Dir R&D) | Sourced | Drew |
| Head of Optimus QA | MEDIUM | Roberto Espinoza | Fanuc (VP Quality) | Screening | Karn |

**Critical unfilled roles (>90 days open):**
1. VP Cybersecurity — 94 days open (James Liu departure gap)
2. Principal Dojo Performance Engineer — 102 days open (niche ASIC skills)
3. Dir FSD Edge Computing — 88 days open (competing with Apple/NVIDIA offers)

---

# EMBEDDING_TAGS
tags:
- tesla_talent
- mcp_talent_recruiting
- headcount
- open_roles
- attrition
- compensation
- university_pipeline
- key_departures
- recent_hires
- replacement_candidates
- retention
- diversity
- valerie
- hr
- recruiting
- poaching
- apple
- google
- byd
