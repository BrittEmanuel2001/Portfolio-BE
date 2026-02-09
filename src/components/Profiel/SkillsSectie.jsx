import { useEffect } from "react";
import { PenTool, Monitor, Server } from "lucide-react";

const tabs = [
  { 
    id: 1, 
    title: "Graphic design", 
    content: "Design", 
    icon: <PenTool className="mirror" /> 
  },
  { 
    id: 2, 
    title: "UI / UX design", 
    content: "UI/UX", 
    icon: <Monitor /> 
  },
  { 
    id: 3, 
    title: "Front-end development", 
    content: "Frontend", 
    icon: <i className="fa-solid fa-code" /> 
  },
  { 
    id: 4, 
    title: "Back-end development", 
    content: "Backend", 
    icon: <Server /> 
  },
];

const SkillsSectie = ({ activeTab, setActiveTab }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === tabs.length ? 1 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, [setActiveTab]);

  return (
    <div id="skills" className="skills-tabs">
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                        opacity: activeTab === tab.id ? "1" : "0.3",
                        fontWeight: activeTab === tab.id ? "800" : "bold",
                    }}
                >
                    <span
                        style={{
                            borderBottom: activeTab === tab.id ? "2px solid var(--primary)" : ""
                        }}
                    >
                        {tab.icon}
                    </span>
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
