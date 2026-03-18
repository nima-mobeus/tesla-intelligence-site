# ENTITY
entity_id: mcp_financial_revenue
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-finance
data_window: april_2029_to_march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: finance_overview

MCP Domain 9: Financial & Revenue.

Server ID: `mcp-finance`
Authentication: Tesla UKM scoped JWT (read: finance.*, write: none — read-only)
Uptime SLA: 99.99%
Data refresh: Real-time (revenue counters), hourly (margins), daily (P&L), quarterly (SEC filings)

This domain aggregates financial data across all Tesla divisions — vehicle sales, robotaxi, energy, Optimus, Dojo CaaS, software, and licensing. This intelligence is used to answer questions about revenue, margins, costs, and financial projections.

Primary data feeds:
- `finance.revenue.annualized` — annualized run-rate
- `finance.revenue.by_division` — revenue by business unit
- `finance.margin.gross` — gross margin by product
- `finance.cost.per_vehicle` — blended and per-factory CPV
- `finance.capex.plan` — capital expenditure allocation
- `finance.cash.position` — cash, debt, and free cash flow

---

# SECTION: QUARTERLY_P_AND_L
section_id: finance_quarterly

Quarterly P&L (last 5 quarters):

| Line Item | Q1 2029 | Q2 2029 | Q3 2029 | Q4 2029 | Q1 2030 (Proj) |
|-----------|---------|---------|---------|---------|---------------|
| Revenue | $242B | $258B | $278B | $292B | $310B |
| COGS | $174B | $184B | $196B | $205B | $213B |
| Gross Profit | $68B | $74B | $82B | $87B | $97B |
| Gross Margin | 28.1% | 28.7% | 29.5% | 29.8% | 31.3% |
| R&D | $8.4B | $8.8B | $9.2B | $9.6B | $10.0B |
| SG&A | $6.2B | $6.4B | $6.6B | $6.8B | $7.0B |
| Other OpEx | $4.8B | $5.0B | $5.2B | $5.4B | $5.6B |
| Operating Income | $48.6B | $53.8B | $61.0B | $65.2B | $74.4B |
| Operating Margin | 20.1% | 20.9% | 21.9% | 22.3% | 24.0% |
| Net Income | $38B | $42B | $48B | $52B | $60B |
| EPS (diluted) | $11.20 | $12.40 | $14.20 | $15.40 | $17.80 |

Annual revenue growth: Q1 2029 → Q1 2030 = +28.1%
Margin expansion driven by: Robotaxi (64% margin), Optimus (42% margin), manufacturing efficiency gains.

---

# SECTION: REVENUE_BY_DIVISION
section_id: finance_divisions

Revenue by division (quarterly annualized run-rates):

| Division | Q1 2029 (Ann.) | Q2 2029 | Q3 2029 | Q4 2029 | Q1 2030 |
|----------|---------------|---------|---------|---------|---------|
| Vehicle Sales | $408B | $418B | $432B | $448B | $480B |
| Robotaxi | $172B | $192B | $218B | $258B | $309B |
| Energy | $52B | $58B | $62B | $68B | $74B |
| Optimus | $28B | $42B | $58B | $82B | $120B |
| Software & Services | $48B | $52B | $56B | $62B | $72B |
| Dojo CaaS | $14B | $18B | $22B | $28B | $36B |
| Licensing & Other | $28B | $30B | $32B | $34B | $35.8B |
| **Total** | **$750B** | **$810B** | **$880B** | **$980B** | **$1,126.8B** |

Growth rates (Q1 2030 YoY):
- Optimus: +328% (fastest)
- Robotaxi: +79.7%
- Dojo CaaS: +157%
- Energy: +42.3%
- Vehicle Sales: +17.6%
- Software: +50%

Robotaxi overtook Energy as second-largest division in Q1 2030.
Optimus projected to overtake Energy by Q3 2030.

---

# SECTION: REVENUE_MILESTONES
section_id: finance_milestones

Revenue milestones (2029-2030):

| Date | Milestone |
|------|-----------|
| Apr 2029 | Annualized revenue crossed $750B |
| Jul 2029 | Robotaxi division crossed $200B annualized |
| Sep 2029 | Tesla entered Fortune Global 500 at #3 (behind Walmart, Amazon) |
| Nov 2029 | Annualized revenue crossed $950B |
| Jan 22, 2030 | **Tesla crosses $1 TRILLION annualized revenue** — first automaker ever |
| Feb 2030 | Optimus division crosses $100B annualized |
| Mar 2030 | Annualized revenue: $1.2T |

$1T milestone context: Tesla became the 6th company ever to reach $1T annual revenue (after Walmart, Amazon, Apple, Saudi Aramco, and UnitedHealth Group). Unlike the others, Tesla achieved it in 21 years from founding.

---

# SECTION: MARGINS_AND_COSTS
section_id: finance_margins

Gross margin by product (Q1 2030):

| Product | Revenue | COGS | Gross Margin | Trend |
|---------|---------|------|-------------|-------|
| Robotaxi | $309B | $111B | 64.1% | ↑ Improving |
| Optimus Leasing | $68B | $34B | 50.0% | ↑ Improving |
| Software & Services | $72B | $18B | 75.0% | → Stable |
| Dojo CaaS | $36B | $14B | 61.1% | ↑ Improving |
| Vehicle Sales | $480B | $360B | 25.0% | ↑ Improving |
| Energy | $74B | $48B | 35.1% | ↑ Improving |
| **Blended** | **$1,127B** | **$585B** | **48.1%** | ↑ |

Cost per vehicle by factory (detailed in MCP 4, summarized here):
- Global blended: $18,400 (down from $21,200 in Q1 2029 → −13.2%)
- Lowest: Mumbai at $12,800
- Highest: Fremont at $38,200 (premium vehicles)
- Target: $16,000 blended by end of 2030 (Model 2 driving down)

---

# SECTION: CASH_AND_CAPITAL
section_id: finance_cash

Cash position (Q1 2030):

| Metric | Value | vs. Q4 2029 |
|--------|-------|-------------|
| Cash & equivalents | $142B | +$18B |
| Short-term investments | $28B | +$4B |
| Total liquidity | $170B | +$22B |
| Total debt | $28B | −$4B |
| Net cash | $142B | +$22B |
| Free cash flow (Q1 annualized) | $86B | +$12B |

Capital expenditure (2030 plan):

| Category | Budget ($B) | Spent YTD | Status |
|----------|-----------|----------|--------|
| Manufacturing (new lines, expansions) | $18.0 | $4.2 | On track |
| Dojo expansion | $12.0 | $2.8 | On track |
| Energy infrastructure | $8.0 | $1.8 | On track |
| R&D facilities | $4.0 | $0.9 | On track |
| Robotaxi fleet expansion | $3.2 | $0.8 | On track |
| Other (IT, logistics, real estate) | $2.8 | $0.6 | On track |
| **Total CapEx** | **$48.0** | **$11.1** | On track |

Quarterly free cash flow trend:

| Quarter | FCF ($B) | FCF Margin |
|---------|---------|-----------|
| Q1 2029 | $14.2 | 5.9% |
| Q2 2029 | $16.8 | 6.5% |
| Q3 2029 | $18.4 | 6.6% |
| Q4 2029 | $18.6 | 6.4% |
| Q1 2030 (proj) | $21.5 | 6.9% |

---

# SECTION: EBITDA_AND_NET_MARGINS
section_id: finance_ebitda

EBITDA (quarterly trend):

| Quarter | Revenue | EBITDA | EBITDA Margin | D&A | Operating Income | Net Income | Net Margin |
|---------|---------|--------|--------------|-----|-----------------|-----------|-----------|
| Q1 2029 | $242B | $61.8B | 25.5% | $13.2B | $48.6B | $38.0B | 15.7% |
| Q2 2029 | $258B | $67.4B | 26.1% | $13.6B | $53.8B | $42.0B | 16.3% |
| Q3 2029 | $278B | $75.2B | 27.1% | $14.2B | $61.0B | $48.0B | 17.3% |
| Q4 2029 | $292B | $80.0B | 27.4% | $14.8B | $65.2B | $52.0B | 17.8% |
| Q1 2030 (proj) | $310B | $90.0B | 29.0% | $15.6B | $74.4B | $60.0B | 19.4% |

**TTM EBITDA (trailing 12 months as of Q1 2030):** $278B (vs. your Tranche 7 target: $300B)
**Gap to milestone:** $22B — achievable by Q3 2030 at current trajectory.

Net margin expansion drivers:
1. **Robotaxi mix shift** — 64% gross margin vs. 25% for vehicles. Every 1% shift = +40bps net margin.
2. **Optimus scaling** — unit cost falling 18% QoQ as production ramps.
3. **Software attach rate** — FSD subscription + CaaS now 6.4% of revenue at 75% margin.
4. **Operating leverage** — SG&A growing at 8% vs. revenue at 28%.

Cash flow waterfall (Q1 2030 projected):

| Item | Amount ($B) |
|------|-----------|
| Net income | $60.0 |
| + Depreciation & Amortization | $15.6 |
| + Stock-based comp | $4.2 |
| − Working capital changes | ($6.8) |
| = Operating cash flow | $73.0 |
| − CapEx | ($12.0) |
| − Acquisitions | ($0.5) |
| = **Free cash flow** | **$60.5** |
| − Share buyback | $0 |
| − Dividend | $0 |
| = **Net cash generation** | **$60.5** |

---

# SECTION: STOCK_AND_VALUATION
section_id: finance_stock

Tesla stock (as of market close March 16, 2030):

| Metric | Value |
|--------|-------|
| Share price | $1,842 |
| Market cap | $6.2T |
| P/E ratio (trailing) | 38.4 |
| P/E ratio (forward) | 28.2 |
| 52-week high | $1,940 (Feb 28, 2030 — Model 2 launch day) |
| 52-week low | $1,120 (May 2029 — broader market correction) |
| YTD return | +24.8% |
| 1-year return | +52.4% |
| Shares outstanding | 3.37B |
| Dividend | $0 (no dividend — reinvesting in growth) |

Analyst consensus:
- Buy: 34
- Hold: 12
- Sell: 4
- Average price target: $2,100 (12-month)
- Range: $1,400 – $2,800

---

# SECTION: TAX_AND_INCENTIVES
section_id: finance_tax

Government incentives and tax credits (2030):

| Program | Annual Value | Status |
|---------|------------|--------|
| US IRA manufacturing credits | $4.8B | Active through 2032 |
| EU Green Deal manufacturing subsidy | $2.1B | Active through 2031 |
| India PLI scheme | $1.4B | Active through 2034 |
| Saudi Arabia Giga subsidy | $2.1B (total) | 5-year installment |
| China NEV credits | $1.2B | Active |
| US EV purchase credits (consumer) | $3.2B (pass-through) | Active through 2032 |

Effective tax rate: 14.2% (down from 16.8% in 2029 due to R&D credits and international structuring).

---

# EMBEDDING_TAGS
tags:
- tesla_financial
- mcp_finance
- revenue
- profit
- margin
- earnings
- eps
- cash_flow
- capex
- cost_per_vehicle
- division_revenue
- robotaxi_revenue
- optimus_revenue
- vehicle_sales
- energy_revenue
- stock_price
- market_cap
- valuation
- trillion_dollar
- tax_incentives
