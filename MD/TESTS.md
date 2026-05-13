# Tests

## How to run

Backend unit tests (includes the audit engine tests):

- `cd Backend`
- `npm ci`
- `npm test`

Backend lint:

- `cd Backend`
- `npm run lint`

Frontend lint:

- `cd Frontend`
- `npm ci`
- `npm run lint`

## Automated tests written

1. `Backend/tests/auditEngine.test.js`
   - Unit tests for `evaluateTool` verdicts:
     - `UNKNOWN_TOOL`
     - `INVALID_PLAN`
     - `USAGE_BASED_PRICING`
     - `TEAM_LIMIT_EXCEEDED`
     - `PLAN_OVERKILL`
     - `OVERPAYING`
     - `NEGOTIATED_DEAL`
     - `SWITCH_RECOMMENDED`
     - `OPTIMAL`
   - Unit test for `runAudit` totals aggregation (monthly + yearly savings)
