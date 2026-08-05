# Robot Framework API Suite

A maintainable Robot Framework API test template using a reusable resource file, tags, and deterministic public demo data.

## Run locally

```bash
python -m pip install -r requirements.txt
robot --outputdir results tests
```

The generated `log.html` and `report.html` files are ignored by Git. In CI, upload `results/` as an artifact.
