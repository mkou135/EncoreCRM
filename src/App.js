import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";


const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
    <header className="App-header">
      <h1>Encore CRM</h1>
    </header>
    <nav className={`side-nav ${isNavOpen ? "open" : ""}`}>
      <button className="nav-toggle close-nav" onClick={toggleNav}>
        &times;
      </button>
      <ul>
        <li>Dashboard</li>
        <li>Contacts</li>
        <li>Opportunities</li>
        <li>Tasks</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </nav>
    <main className={`App-main ${isNavOpen ? "shrink" : ""}`}>
      <button className={`nav-toggle open-nav ${isNavOpen ? "blue" : "white"}`} onClick={toggleNav}>
        ☰
      </button>
      <Dashboard />
      {/* Your main content goes here */}
    </main>
  </div>
  );
};

export default App;
