# Contributing

## Before opening a pull request

1. Keep changes focused on one exercise or showcase project.
2. Do not commit credentials, generated reports, virtual environments, or personal documents.
3. Run the applicable checks:

   ```bash
   python3 -m ruff check calci_python tests
   python3 -m pytest
   ```

4. Update the relevant README when setup or behavior changes.

## Commit messages

Use a concise imperative subject, for example: `feat: add API client retry tests` or `docs: explain Robot test tags`.
