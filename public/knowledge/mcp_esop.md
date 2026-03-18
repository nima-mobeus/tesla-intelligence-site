# ENTITY
entity_id: mcp_esop
entity_type: mcp_domain_server
parent_system: tesla_unified_observability
server_id: mcp-esop
data_window: march_2030

---

# SECTION: SERVER_OVERVIEW
section_id: esop_overview

MCP Domain: Employee Stock Ownership & Equity Programs.

Server ID: `mcp-esop`
Authentication: Tesla UKM scoped JWT (read: hr.equity.*, finance.equity.compensation.*)
Data refresh: Real-time (vesting events), daily (grant pool), quarterly (plan audits)

This domain covers Tesla's full employee equity programs — RSU/PSU grants by level, ESPP details, executive compensation packages, vesting schedules, retention triggers, and equity program philosophy. Used to answer questions about team member equity, compensation structure, and retention strategy.

---

# SECTION: EQUITY_PROGRAM_OVERVIEW
section_id: esop_programs

## Tesla Equity Programs (Active, March 2030)

| Program | Eligible | Annual Grant Pool | Participants |
|---------|----------|-------------------|--------------|
| RSU Program (L4+) | All employees L4 and above | ~$9.2B | 184,000 employees |
| PSU Program (L8+) | Directors and above | ~$2.4B | 8,200 employees |
| ESPP (Employee Stock Purchase Plan) | All employees | $800M cap/yr | 214,000 employees |
| New Hire Grant | All new hires L4+ | ~$2.8B | Rolling |
| Retention Grant (spot) | Critical talent at risk | $420M discretionary | ~1,200/yr |
| CEO Compensation Package | CEO only | Special board package | 1 person |

**Total equity compensation cost (FY 2030 est.):** $15.6B (stock-based compensation expense)

---

# SECTION: RSU_STRUCTURE
section_id: esop_rsu

## RSU Vesting Structure by Level

| Level Band | Title | Annual Grant Value | Vesting | Cliff |
|-----------|-------|-------------------|---------|-------|
| L4 | Sr. Associate / Specialist | $24,000–$48,000 | 4-year, quarterly | 1-year (25%) |
| L5 | Manager / Sr. Specialist | $48,000–$96,000 | 4-year, quarterly | 1-year (25%) |
| L6 | Sr. Manager | $96,000–$180,000 | 4-year, quarterly | 1-year (25%) |
| L7 | Staff / Principal | $180,000–$360,000 | 4-year, quarterly | 1-year (25%) |
| L8 | Director | $360,000–$720,000 | 4-year, quarterly | 1-year (25%) |
| L9 | Sr. Director | $720,000–$1.8M | 4-year, quarterly + PSU | 1-year (25%) |
| L10 | VP | $1.8M–$4.2M | 4-year, quarterly + PSU | 1-year (25%) |
| L11 | C-Suite | $4.2M–$12M | 4-year, quarterly + PSU | 1-year (25%) |

**Grant refresh:** Annual refresh grants at 40–60% of original grant, subject to performance review.
**Acceleration:** Single-trigger acceleration on involuntary termination following change of control (CIC).

---

# SECTION: PSU_STRUCTURE
section_id: esop_psu

## Performance Stock Units (L8+)

PSUs vest based on company performance milestones. Two active PSU tranches:

### PSU Tranche A — Revenue Milestone
- **Target:** $1.3T annual revenue (Q3 2030 projected)
- **Shares:** 18,200,000 (company-wide pool)
- **Multiplier:** 0.5×–2.0× of target shares depending on revenue achieved
- **Eligible:** L8+ (Director and above)
- **Payout curve:** 50% at $1.2T / 100% at $1.3T / 200% cap at $1.6T

### PSU Tranche B — Gross Margin Milestone
- **Target:** 32% gross margin (Q1 2031 projected)
- **Shares:** 12,400,000 (company-wide pool)
- **Multiplier:** 0.5×–1.5×
- **Eligible:** L8+ (Director and above)
- **Payout curve:** 50% at 30% margin / 100% at 32% / 150% cap at 35%

---

# SECTION: ESPP
section_id: esop_espp

## Employee Stock Purchase Plan (ESPP)

- **Discount:** 15% off the lower of the stock price at offering start or purchase date
- **Purchase periods:** 6-month offering periods (Jan–Jun and Jul–Dec)
- **Contribution limit:** Up to 15% of base salary, max $25,000/year (IRS limit)
- **Look-back provision:** Yes — uses the lower of price at start or end of period
- **Enrollment:** 214,000 employees enrolled (56% of eligible workforce)
- **Annual purchase volume:** ~$800M in TSLA stock
- **Effective ROI for employees (typical):** 15–30% annualized (includes discount + look-back)

---

# SECTION: CEO_COMPENSATION
section_id: esop_ceo

## CEO Compensation Package

*Note: CEO has historically taken $0 salary and $0 bonus. Compensation is entirely equity-based.*

- **Base salary:** $0 (waived since 2019)
- **Cash bonus:** $0
- **Equity (current holdings):** 411,800,000 shares (~$760B market value at March 2030 price)
- **Outstanding options:** 0 (2018 performance option package fully completed)
- **Current active equity:** Holdings only — no new grants pending
- **Board-approved new package:** Under discussion — tied to Optimus reaching 10M units deployed and $2T revenue milestone. Details not yet publicly disclosed.

---

# SECTION: RETENTION_ANALYSIS
section_id: esop_retention

## Equity Retention Flags (March 2030)

High-risk departures tracked by People team:

| Risk Level | Count | Key Concern | Action |
|-----------|-------|-------------|--------|
| 🔴 Critical | 14 | <6 months unvested, FAANG offer known | Spot grants approved for 9 of 14 |
| 🟡 High | 82 | 1-year cliff approaching, competitive recruits | Refresh grant letters in progress |
| 🔵 Moderate | 248 | 50%+ vested, open to conversations | Annual refresh auto-process |

**Key departure already occurred:** Dr. Wei Zhang (Sr. Dir FSD Perception, L9) — Oct 2029. Departed to Waymo. Had $8.2M in unvested RSUs. Exit package not disclosed. Perception team gap now critical.

**FAANG competition benchmark:** Tesla L8 Director RSU grants run 15–25% below Google DeepMind and OpenAI for AI/ML roles. Valerie is tracking. Compensation committee review scheduled Q2 2030.

---

# SECTION: EQUITY_PHILOSOPHY
section_id: esop_philosophy

## Tesla Equity Philosophy

1. **Equity over cash.** Tesla pays below-market base salaries and compensates with equity. Every employee is an owner.
2. **Mission alignment.** Equity is tied to milestones that advance the mission — not just financial targets.
3. **No golden parachutes.** CIC acceleration only on involuntary termination. Executives do not receive enhanced severance.
4. **Retention tool, not reward.** Spot grants and refresh grants are proactive retention tools, not performance rewards.
5. **Transparency.** TSLA stock price is public. Every employee knows what their equity is worth in real-time.

---

# EMBEDDING_TAGS
tags:
- tesla_esop
- mcp_esop
- employee_equity
- rsu
- psu
- espp
- stock_options
- vesting
- compensation
- retention
- ceo_compensation
- equity_program
- stock_based_compensation
