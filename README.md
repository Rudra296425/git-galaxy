# Git Galaxy

A collection of programming exercises, QA automation examples, and Python learning projects.

This repository is a learning archive rather than a single application. Its most self-contained runnable example is the interactive calculator in [`calci_python/`](calci_python/).

## Contents

| Path | Description |
| --- | --- |
| [`calci_python/`](calci_python/) | Command-line calculator with arithmetic and unit conversions. |
| [`python_practice_programs/`](python_practice_programs/) | Python exercises covering JSON, APIs, collections, strings, and algorithms. |
| [`java_practice_programs/`](java_practice_programs/) | Java examples for API calls and JSON processing. |
| [`robot_practice_programs/`](robot_practice_programs/) | Robot Framework examples for web and API testing. |
| [`The-Ultimate-Python-Course/`](The-Ultimate-Python-Course/) | Course exercises, projects, and reference material. |
| [`sql_commands.txt`](sql_commands.txt) | SQL command notes and examples. |

## Showcase projects

The following self-contained project templates are ready to be split into their own repositories when published:

| Project | Focus |
| --- | --- |
| [`showcase-projects/python-api-automation-framework/`](showcase-projects/python-api-automation-framework/) | Pytest API tests with an injectable client, Docker, and CI. |
| [`showcase-projects/robot-framework-api-suite/`](showcase-projects/robot-framework-api-suite/) | Robot Framework API suite organized with reusable resources and tags. |
| [`showcase-projects/playwright-ui-automation/`](showcase-projects/playwright-ui-automation/) | Playwright UI suite using the Page Object Model and failure artifacts. |

## Quick start

Run the calculator with Python 3.9 or later:

```bash
python3 calci_python/main.py
```

Some practice scripts call external APIs or expect local JSON/text files. Read the script before running it and provide any required inputs or credentials locally; do not commit secrets.

## Quality checks

The calculator has a small automated test suite and is checked on every push and pull request.

```bash
python3 -m pip install -r requirements-dev.txt
python3 -m ruff check calci_python tests
python3 -m pytest
```

## Repository conventions

- Keep standalone, portfolio-ready projects in their own repositories with setup instructions, tests, and CI.
- Keep learning exercises self-contained and label any required data or dependencies.
- Do not add generated files, credentials, or personal documents intended for private distribution.

## License

This project is available under the [MIT License](LICENSE).
