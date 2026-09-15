import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Dashboard");

  return (
    <div className="app">

      <aside className="sidebar">
        <h1>🚨 DISASTER</h1>
        <p>RESPONSE COMMAND</p>

        <nav>
          <button onClick={() => setPage("Dashboard")}>
            ▣ Dashboard
          </button>

          <button onClick={() => setPage("Incidents")}>
            ⚠ Incidents
          </button>

          <button onClick={() => setPage("Resources")}>
            🚑 Resources
          </button>

          <button onClick={() => setPage("Reports")}>
            📝 Reports
          </button>
        </nav>

        <div className="system">
          🟢 System Online
        </div>
      </aside>

      <main className="main">

        <header className="header">
          <div>
            <h2>{page}</h2>
            <p>Emergency response command center</p>
          </div>

          <div>
            🔔 Commander
          </div>
        </header>

        <section className="hero">
          <div>
            <span>● LIVE MONITORING</span>
            <h2>Disaster Response Command Center</h2>
            <p>
              Monitor emergencies and coordinate rescue operations.
            </p>
          </div>

          <div className="hero-icon">
            🚨
          </div>
        </section>

        <section className="stats">

          <div className="stat-card">
            <p>ACTIVE INCIDENTS</p>
            <h2>4</h2>
            <span>Requires attention</span>
          </div>

          <div className="stat-card">
            <p>HIGH PRIORITY</p>
            <h2>2</h2>
            <span>Immediate response</span>
          </div>

          <div className="stat-card">
            <p>AVAILABLE RESOURCES</p>
            <h2>16</h2>
            <span>Ready for deployment</span>
          </div>

          <div className="stat-card">
            <p>RESOLVED TODAY</p>
            <h2>12</h2>
            <span>Successful responses</span>
          </div>

        </section>

        <section className="welcome">
          <h2>Welcome to the Command Center</h2>
          <p>
            Select a section from the sidebar to manage incidents,
            emergency resources and reports.
          </p>
        </section>

      </main>

    </div>
  );
}

export default App;