# ENTITY
entity_id: mcp_capital_table
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-capital
data_window: march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: capital_overview

MCP Domain: Capital Table & Ownership Structure.

Server ID: `mcp-capital`
Authentication: Tesla UKM scoped JWT (read: capital.*, finance.equity.*)
Data refresh: Real-time (price), daily (ownership filings), quarterly (dilution schedule)

This domain maintains Tesla's full capital table — share counts, ownership breakdown by class, dilution schedule from options/RSUs/warrants, convertible debt, and institutional/insider ownership. Used to answer questions about equity structure, ownership stakes, dilution events, and shareholder composition.

---

# SECTION: SHARE_STRUCTURE
section_id: capital_shares

## Outstanding Shares (March 17, 2030)

| Class | Shares | Notes |
|-------|--------|-------|
| Common Stock (outstanding) | 3,382,000,000 | Listed on NASDAQ: TSLA |
| Treasury (repurchased) | 48,000,000 | Authorized buyback program |
| Options outstanding | 142,000,000 | Weighted avg strike: $186.40 |
| RSUs outstanding | 218,000,000 | 4-year vest, 1-year cliff |
| Performance RSUs (PSUs) | 84,000,000 | Revenue + margin milestones |
| Warrants | 12,000,000 | Legacy 2020 convertible notes |
| Fully diluted shares | 3,838,000,000 | Assumes all options/RSUs exercised |

Stock price (March 17, 2030): $1,847.20
Market cap (basic): $6.25T
Market cap (diluted): $7.09T

---

# SECTION: OWNERSHIP_BREAKDOWN
section_id: capital_ownership

## Institutional & Insider Ownership

| Holder | Shares | % (Basic) | Type |
|--------|--------|-----------|------|
| CEO (insider) | 411,800,000 | 12.17% | Insider — direct + trust |
| Vanguard Group | 202,400,000 | 5.98% | Institutional — passive index |
| BlackRock | 184,200,000 | 5.44% | Institutional — passive index |
| State Street | 128,400,000 | 3.80% | Institutional — passive index |
| Fidelity | 92,800,000 | 2.74% | Institutional — active + passive |
| ARK Invest | 48,200,000 | 1.42% | Institutional — active (Cathie Wood) |
| Vaibhav Taneja (CFO) | 1,240,000 | 0.037% | Insider |
| Tom Zhu (SVP) | 880,000 | 0.026% | Insider |
| Other ELT insiders | 4,200,000 | 0.12% | Insider — combined |
| Retail investors | ~840,000,000 | ~24.8% | Estimated float retail |
| Other institutions | ~1,368,880,000 | ~40.5% | Remaining float |

**Total insider ownership (all insiders):** ~12.5%
**Total institutional ownership:** ~60.1%
**Retail float:** ~24.8% (estimated)

---

# SECTION: DILUTION_SCHEDULE
section_id: capital_dilution

## Upcoming Dilution Events (Next 24 Months)

| Event | Shares | Date | Impact |
|-------|--------|------|--------|
| RSU vest tranche (Q2 2030) | 28,400,000 | Apr–Jun 2030 | +0.84% dilution |
| PSU settlement (revenue milestone) | 18,200,000 | Q3 2030 (proj) | Triggered if $1.3T revenue hit |
| Option exercises (est. Q2–Q3 2030) | 14,800,000 | Rolling | Weighted avg $186 strike |
| RSU vest tranche (Q4 2030) | 26,800,000 | Oct–Dec 2030 | +0.79% dilution |
| PSU settlement (margin milestone) | 12,400,000 | Q1 2031 (proj) | Triggered if 32% gross margin |
| New hire grant pool (annual) | 48,000,000 | Jan 2031 | Board approved |

**Annual dilution rate (estimated):** ~2.8–3.4% depending on PSU triggers.
**Buyback offset:** Board authorized $10B buyback program (Q4 2029), ~5.4M shares repurchased to date.

---

# SECTION: CONVERTIBLE_DEBT
section_id: capital_converts

## Convertible Notes & Debt

| Instrument | Principal | Maturity | Coupon | Conv. Price | Status |
|------------|-----------|----------|--------|-------------|--------|
| 2020 Convertible Notes | $1.84B | Mar 2025 | 0% | $726.32 | Settled in cash (all converted or paid) |
| 2022 Sustainable Bonds | $5.0B | Jun 2032 | 3.65% | N/A — straight debt | Outstanding |
| 2025 Green Bonds | $8.0B | Sep 2035 | 4.10% | N/A — straight debt | Outstanding |
| 2027 Term Loan | $12.0B | Dec 2032 | SOFR+1.8% | N/A — straight debt | Outstanding |
| 2029 Infrastructure Bonds | $15.0B | Mar 2039 | 4.85% | N/A — straight debt | Issued Q4 2029 |

**Total long-term debt:** $40.84B
**Cash & equivalents (March 2030):** $84.2B (operational cash + restricted cash)
**Liquidity including money markets & short-term investments:** $142B (per capital markets report)
**Net cash position (operational):** $43.4B (net cash positive)
**Free cash flow (Q1 2030):** $28.4B

---

# SECTION: BUYBACK_PROGRAM
section_id: capital_buybacks

## Share Repurchase Program

Board-authorized buyback (Q4 2029, expanded Q1 2030): $12B total authorization.
- Executed to date: $4.2B (2.8M shares at avg $1,500)
- Remaining authorization: $7.8B
- Execution pace: ~$400M/month
- Target: Offset annual RSU dilution (~2–3% annually)
- Method: Open market, 10b5-1 plan + accelerated share repurchase

*Note: CEO has indicated preference for using cash for capital expenditure and Optimus scaling over buybacks. Buybacks treated as dilution management only.*

---

# EMBEDDING_TAGS
tags:
- tesla_capital
- mcp_capital
- shares_outstanding
- dilution
- ownership_structure
- institutional_ownership
- insider_ownership
- convertible_notes
- buyback
- market_cap
- equity
- rsu
- options
