# 🤖 AI Test Case Generator

> **Author:** Ashish Kumar — Staff QA Automation Engineer | CI/CD & Cloud  
> **Stack:** Python · FastAPI · React · Claude AI · Docker · GitLab CI

---

## 📌 Overview

An AI-powered test case generator that takes any software requirement as input and generates comprehensive, structured test cases — covering positive, negative, edge, and boundary conditions — in seconds.

Built using **Anthropic Claude** as the AI backbone with a **FastAPI** backend and a **React** frontend styled as a professional QA terminal tool.

---

## ✨ Features

- 🧠 **AI-generated test cases** from plain English requirements
- ✅ Covers **Positive, Negative, Edge, Boundary** scenarios automatically
- 🎯 Supports **Functional, API, Regression, Security, Performance** test types
- 📋 **Gherkin (BDD), Table, and Plain** format options
- 📊 **Stats breakdown** by type and priority
- ⬇️ **Export to JSON** for integration with test management tools
- 📋 **Copy all** test cases to clipboard
- 🐳 **Dockerized** — run with one command
- 🔁 **CI/CD ready** with GitLab CI pipeline

---

## 🗂️ Project Structure

```
ai-test-case-generator/
├── backend/
│   ├── main.py              # FastAPI app + Claude AI integration
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Full React UI
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
├── docker-compose.yml
└── .gitlab-ci.yml
```

---

## 🚀 Getting Started

### Option 1 — Docker (Recommended)

```bash
git clone https://github.com/Rudra296425/ai-test-case-generator.git
cd ai-test-case-generator

# Add your Anthropic API key
echo "ANTHROPIC_API_KEY=your_key_here" > .env

# Run both services
docker-compose up --build
```

Open: `http://localhost:3000`

---

### Option 2 — Manual Setup

**Backend:**
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Add your ANTHROPIC_API_KEY to .env
uvicorn main:app --reload --port 8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open: `http://localhost:3000`

---

## 🔑 Get Anthropic API Key

1. Go to `https://console.anthropic.com`
2. Sign up / Log in
3. API Keys → Create Key
4. Add to `backend/.env`

---

## 📸 How It Works

```
User inputs requirement
        ↓
FastAPI receives request
        ↓
Prompt sent to Claude AI (claude-sonnet-4)
        ↓
AI generates structured JSON test cases
        ↓
React UI renders expandable test case cards
        ↓
Export to JSON or copy to clipboard
```

---

## 🧪 Example Output

**Input:**
> User should be able to login with email and password. After 3 failed attempts, account should be locked for 30 minutes.

**Generated:**
- TC001 — Successful login with valid credentials (Positive | High)
- TC002 — Login with invalid password (Negative | High)
- TC003 — Login with unregistered email (Negative | Medium)
- TC004 — Account locked after 3 failed attempts (Edge | High)
- TC005 — Account unlocks after 30 minutes (Edge | High)
- TC006 — Login attempt during lockout period (Negative | High)
- TC007 — Empty email field validation (Negative | Medium)
- TC008 — SQL injection in email field (Security | High)
- TC009 — Concurrent login sessions (Edge | Low)
- TC010 — Password with special characters (Edge | Medium)

---

## 🔧 CI/CD Pipeline

```
lint → test → frontend build → docker build (main branch)
```

---

## 📜 License
MIT
