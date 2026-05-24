"""
main.py — AI Test Case Generator Backend
Author: Ashish Kumar | Staff QA Automation Engineer
Stack: FastAPI + Anthropic Claude API
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import anthropic
import json
import os

app = FastAPI(title="AI Test Case Generator", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))


class RequirementInput(BaseModel):
    requirement: str
    test_type: str = "functional"   # functional | api | regression | edge
    format: str = "gherkin"         # gherkin | table | plain


SYSTEM_PROMPT = """You are an expert QA Automation Engineer with 12+ years of experience.
Given a software requirement, generate comprehensive test cases.

Return ONLY a valid JSON object in this exact format:
{
  "summary": "Brief summary of what is being tested",
  "total_cases": <number>,
  "test_cases": [
    {
      "id": "TC001",
      "title": "Test case title",
      "type": "Positive/Negative/Edge/Performance",
      "priority": "High/Medium/Low",
      "preconditions": "What needs to be set up",
      "steps": ["Step 1", "Step 2", "Step 3"],
      "expected_result": "What should happen",
      "tags": ["tag1", "tag2"]
    }
  ]
}

Generate at least 6-10 test cases covering: positive, negative, edge cases, and boundary conditions.
No markdown, no preamble, just pure JSON."""


@app.post("/generate")
async def generate_test_cases(data: RequirementInput):
    if not data.requirement.strip():
        raise HTTPException(status_code=400, detail="Requirement cannot be empty")

    prompt = f"""Requirement: {data.requirement}

Test Type Focus: {data.test_type}
Format Preference: {data.format}

Generate comprehensive test cases for this requirement."""

    try:
        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=3000,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": prompt}]
        )

        raw = message.content[0].text.strip()
        # Strip markdown fences if present
        if raw.startswith("```"):
            raw = raw.split("```")[1]
            if raw.startswith("json"):
                raw = raw[4:]
        result = json.loads(raw)
        return result

    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Failed to parse AI response")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health():
    return {"status": "ok", "service": "AI Test Case Generator"}
