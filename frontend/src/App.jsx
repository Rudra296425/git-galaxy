import { useState } from "react";

const API_URL = "http://localhost:8000";

const PRIORITY_COLORS = {
  High: { bg: "#ff4444", text: "#fff" },
  Medium: "#f59e0b",
  Low: "#22c55e",
};

const TYPE_COLORS = {
  Positive: "#22c55e",
  Negative: "#ef4444",
  Edge: "#f59e0b",
  Performance: "#3b82f6",
  Security: "#8b5cf6",
};

function Badge({ label, color, small }) {
  return (
    <span style={{
      display: "inline-block",
      padding: small ? "2px 8px" : "3px 10px",
      borderRadius: "4px",
      fontSize: small ? "10px" : "11px",
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      background: typeof color === "object" ? color.bg : color + "22",
      color: typeof color === "object" ? color.text : color,
      border: `1px solid ${typeof color === "object" ? color.bg : color}44`,
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {label}
    </span>
  );
}

function TestCaseCard({ tc, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: "#0d1117",
      border: "1px solid #21262d",
      borderRadius: "8px",
      marginBottom: "12px",
      overflow: "hidden",
      transition: "border-color 0.2s",
      cursor: "pointer",
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "#388bfd"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "#21262d"}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Card Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 18px",
        background: "#161b22",
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          color: "#388bfd",
          fontWeight: 700,
          minWidth: "52px",
        }}>{tc.id}</span>

        <span style={{
          flex: 1,
          fontSize: "14px",
          fontWeight: 600,
          color: "#e6edf3",
          fontFamily: "'JetBrains Mono', monospace",
        }}>{tc.title}</span>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Badge
            label={tc.type}
            color={TYPE_COLORS[tc.type] || "#888"}
            small
          />
          <Badge
            label={tc.priority}
            color={PRIORITY_COLORS[tc.priority] || "#888"}
            small
          />
          <span style={{
            color: "#8b949e",
            fontSize: "16px",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            marginLeft: "4px",
          }}>▾</span>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div style={{ padding: "18px", borderTop: "1px solid #21262d" }}>
          {tc.preconditions && (
            <div style={{ marginBottom: "14px" }}>
              <div style={{ fontSize: "11px", color: "#8b949e", fontFamily: "'JetBrains Mono', monospace", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                📋 Preconditions
              </div>
              <div style={{ fontSize: "13px", color: "#c9d1d9", background: "#161b22", padding: "10px 14px", borderRadius: "6px", borderLeft: "3px solid #388bfd" }}>
                {tc.preconditions}
              </div>
            </div>
          )}

          <div style={{ marginBottom: "14px" }}>
            <div style={{ fontSize: "11px", color: "#8b949e", fontFamily: "'JetBrains Mono', monospace", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              🔢 Test Steps
            </div>
            <ol style={{ margin: 0, paddingLeft: "20px" }}>
              {tc.steps.map((step, i) => (
                <li key={i} style={{
                  fontSize: "13px",
                  color: "#c9d1d9",
                  marginBottom: "6px",
                  lineHeight: "1.5",
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <div style={{ fontSize: "11px", color: "#8b949e", fontFamily: "'JetBrains Mono', monospace", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              ✅ Expected Result
            </div>
            <div style={{ fontSize: "13px", color: "#22c55e", background: "#22c55e11", padding: "10px 14px", borderRadius: "6px", borderLeft: "3px solid #22c55e", fontFamily: "'JetBrains Mono', monospace" }}>
              {tc.expected_result}
            </div>
          </div>

          {tc.tags && tc.tags.length > 0 && (
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {tc.tags.map((tag, i) => (
                <span key={i} style={{
                  fontSize: "11px",
                  color: "#8b949e",
                  background: "#21262d",
                  padding: "2px 8px",
                  borderRadius: "20px",
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StatsBar({ testCases }) {
  const counts = testCases.reduce((acc, tc) => {
    acc[tc.type] = (acc[tc.type] || 0) + 1;
    return acc;
  }, {});

  const priorities = testCases.reduce((acc, tc) => {
    acc[tc.priority] = (acc[tc.priority] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      padding: "14px 18px",
      background: "#161b22",
      borderRadius: "8px",
      border: "1px solid #21262d",
      marginBottom: "20px",
    }}>
      <div style={{ fontSize: "12px", color: "#8b949e", fontFamily: "'JetBrains Mono', monospace", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ color: "#388bfd", fontWeight: 700 }}>Total: {testCases.length}</span>
      </div>
      <div style={{ width: "1px", background: "#21262d" }} />
      {Object.entries(counts).map(([type, count]) => (
        <span key={type} style={{ fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", color: TYPE_COLORS[type] || "#888" }}>
          {type}: {count}
        </span>
      ))}
      <div style={{ width: "1px", background: "#21262d" }} />
      {Object.entries(priorities).map(([p, count]) => (
        <span key={p} style={{ fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", color: typeof PRIORITY_COLORS[p] === "object" ? PRIORITY_COLORS[p].bg : PRIORITY_COLORS[p] }}>
          {p}: {count}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [requirement, setRequirement] = useState("");
  const [testType, setTestType] = useState("functional");
  const [format, setFormat] = useState("gherkin");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!requirement.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requirement, test_type: testType, format }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Server error");
      }
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "test_cases.json";
    a.click();
  };

  const copyAll = () => {
    const text = result.test_cases.map(tc =>
      `${tc.id}: ${tc.title}\nType: ${tc.type} | Priority: ${tc.priority}\nPreconditions: ${tc.preconditions}\nSteps:\n${tc.steps.map((s, i) => `  ${i + 1}. ${s}`).join("\n")}\nExpected: ${tc.expected_result}\n`
    ).join("\n---\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#010409",
      fontFamily: "'JetBrains Mono', monospace",
      color: "#e6edf3",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0d1117; }
        ::-webkit-scrollbar-thumb { background: #21262d; border-radius: 3px; }
        textarea:focus, select:focus { outline: none; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes slideIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Top Bar */}
      <div style={{
        borderBottom: "1px solid #21262d",
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: "#0d1117",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", gap: "6px" }}>
          {["#ff5f57", "#febc2e", "#28c840"].map(c => (
            <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        <span style={{ fontSize: "13px", color: "#8b949e" }}>ai-test-generator</span>
        <div style={{ flex: 1 }} />
        <div style={{
          fontSize: "11px",
          color: "#388bfd",
          background: "#388bfd11",
          border: "1px solid #388bfd33",
          padding: "3px 10px",
          borderRadius: "20px",
        }}>
          ⚡ Powered by Claude AI
        </div>
        <div style={{
          fontSize: "11px",
          color: "#22c55e",
          background: "#22c55e11",
          border: "1px solid #22c55e33",
          padding: "3px 10px",
          borderRadius: "20px",
        }}>
          by Ashish Kumar
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            fontSize: "11px",
            color: "#388bfd",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            AI-Powered QA Tool
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            color: "#e6edf3",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            Test Case Generator
          </h1>
          <p style={{
            fontSize: "15px",
            color: "#8b949e",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Input any requirement → Get comprehensive test cases instantly.<br />
            Positive · Negative · Edge · Boundary — all covered.
          </p>
        </div>

        {/* Input Section */}
        <div style={{
          background: "#0d1117",
          border: "1px solid #21262d",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "24px",
        }}>
          <div style={{
            fontSize: "11px",
            color: "#8b949e",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "12px",
          }}>
            $ input_requirement
          </div>

          <textarea
            value={requirement}
            onChange={e => setRequirement(e.target.value)}
            placeholder="e.g. User should be able to login with email and password. After 3 failed attempts, the account should be locked for 30 minutes..."
            rows={5}
            style={{
              width: "100%",
              background: "#161b22",
              border: "1px solid #21262d",
              borderRadius: "8px",
              padding: "14px",
              color: "#e6edf3",
              fontSize: "13px",
              fontFamily: "'JetBrains Mono', monospace",
              resize: "vertical",
              lineHeight: 1.6,
              transition: "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "#388bfd"}
            onBlur={e => e.target.style.borderColor = "#21262d"}
          />

          {/* Options Row */}
          <div style={{ display: "flex", gap: "12px", marginTop: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label style={{ fontSize: "10px", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.08em" }}>Test Type</label>
              <select
                value={testType}
                onChange={e => setTestType(e.target.value)}
                style={{
                  background: "#161b22",
                  border: "1px solid #21262d",
                  borderRadius: "6px",
                  color: "#e6edf3",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "pointer",
                }}
              >
                <option value="functional">Functional</option>
                <option value="api">API</option>
                <option value="regression">Regression</option>
                <option value="edge">Edge Cases</option>
                <option value="security">Security</option>
                <option value="performance">Performance</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label style={{ fontSize: "10px", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.08em" }}>Format</label>
              <select
                value={format}
                onChange={e => setFormat(e.target.value)}
                style={{
                  background: "#161b22",
                  border: "1px solid #21262d",
                  borderRadius: "6px",
                  color: "#e6edf3",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "pointer",
                }}
              >
                <option value="gherkin">Gherkin (BDD)</option>
                <option value="table">Table Format</option>
                <option value="plain">Plain Steps</option>
              </select>
            </div>

            <div style={{ flex: 1 }} />

            <button
              onClick={generate}
              disabled={loading || !requirement.trim()}
              style={{
                background: loading ? "#21262d" : "#238636",
                border: "1px solid",
                borderColor: loading ? "#21262d" : "#2ea043",
                borderRadius: "8px",
                color: loading ? "#8b949e" : "#fff",
                padding: "10px 24px",
                fontSize: "13px",
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                cursor: loading || !requirement.trim() ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "auto",
              }}
            >
              {loading ? (
                <>
                  <span style={{ animation: "pulse 1s infinite" }}>⚙</span>
                  Generating...
                </>
              ) : (
                <>⚡ Generate Test Cases</>
              )}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: "#ff444411",
            border: "1px solid #ff4444",
            borderRadius: "8px",
            padding: "14px 18px",
            color: "#ff4444",
            fontSize: "13px",
            marginBottom: "20px",
          }}>
            ❌ {error}
          </div>
        )}

        {/* Results */}
        {result && (
          <div style={{ animation: "slideIn 0.3s ease" }}>
            {/* Summary Bar */}
            <div style={{
              background: "#161b22",
              border: "1px solid #388bfd33",
              borderRadius: "10px",
              padding: "18px 22px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontSize: "11px", color: "#8b949e", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Summary</div>
                <div style={{ fontSize: "14px", color: "#e6edf3" }}>{result.summary}</div>
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={copyAll}
                  style={{
                    background: "#21262d",
                    border: "1px solid #30363d",
                    borderRadius: "6px",
                    color: copied ? "#22c55e" : "#8b949e",
                    padding: "7px 14px",
                    fontSize: "12px",
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: "pointer",
                  }}
                >
                  {copied ? "✅ Copied!" : "📋 Copy All"}
                </button>
                <button
                  onClick={exportJSON}
                  style={{
                    background: "#388bfd22",
                    border: "1px solid #388bfd44",
                    borderRadius: "6px",
                    color: "#388bfd",
                    padding: "7px 14px",
                    fontSize: "12px",
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: "pointer",
                  }}
                >
                  ⬇ Export JSON
                </button>
              </div>
            </div>

            <StatsBar testCases={result.test_cases} />

            {/* Test Cases */}
            <div style={{ marginBottom: "8px", fontSize: "11px", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {result.total_cases} test cases generated — click to expand
            </div>
            {result.test_cases.map((tc, i) => (
              <TestCaseCard key={tc.id} tc={tc} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
