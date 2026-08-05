# Architecture

```mermaid
flowchart LR
    T[Playwright spec] --> P[TodoPage]
    P --> B[Chromium browser]
    B --> A[Application page]
    T --> R[HTML report, traces, screenshots]
```

## Sample result

```text
1 passed (Chromium)
Failure artifacts: screenshot, trace, and video in test-results/
```
