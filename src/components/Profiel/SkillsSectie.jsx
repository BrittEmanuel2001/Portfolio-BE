import { useState, useEffect } from "react";

const tabs = [
  { id: 1, title: "Graphic design", content: "Design" },
  { id: 2, title: "UI / UX design", content: "UI/UX" },
  { id: 3, title: "Front-end development", content: "Frontend" },
  { id: 4, title: "Back-end development", content: "Backend" },
];

const SkillsSectie = ({ activeTab, setActiveTab }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === tabs.length ? 1 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, [setActiveTab]);

  return (
    <div id="skills" style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      {/* Links: tab buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "1rem",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
              background: activeTab === tab.id ? "#4c2cff" : "#333",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Rechts: content */}
      <div
        style={{
          flex: 1,
          background: "#111",
          color: "#fff",
          padding: "2rem",
          borderRadius: "12px",
        }}
      >
        <h2>{tabs.find((tab) => tab.id === activeTab).title}</h2>
        <p>{tabs.find((tab) => tab.id === activeTab).content}</p>
      </div>
    </div>
  );
};

export default SkillsSectie;
