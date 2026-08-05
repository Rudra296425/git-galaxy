# Playwright UI Automation

A browser-test template using Playwright Test and the Page Object Model. The example stays local to avoid an external website dependency.

See the [architecture and sample report](docs/architecture.md).

## Run locally

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

On failure, Playwright retains screenshots, videos, and traces in `test-results/`.
