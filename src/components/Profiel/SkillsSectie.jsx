import { useEffect } from "react";
import tabs from "../../api/SkillsData";
import CIcon from "@coreui/icons-react";
import * as icons from "@coreui/icons";

const SkillsSectie = ({ activeTab, setActiveTab }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === tabs.length ? 1 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, [setActiveTab]);

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="skills-tabs">
        <div className="skills-buttons">
            {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            opacity: activeTab === tab.id ? "1" : "0.3",
                            fontWeight: activeTab === tab.id ? "800" : "bold",
                        }}
                    >
                        <span style={{ borderBottom: activeTab === tab.id ? "2px solid var(--primary)" : "" }}>
                            <TabIcon />
                        </span>
                        {tab.title}
                    </button>
                );
            })}
        </div>

        <div className="skills-content">
            <div className="content-text">
                <p className="skills-since">Since {active.since}</p>
                <h4>{active.title} skillset</h4>
                <p>{active.content}</p>
                <p className="skills-products">{active.products}</p>

                <p className="skills-tools"><strong>Tools:</strong></p>
                <div className="badges">
                    {active.tools.map((tool, i) => {
                        const ToolIcon = tool.icon;
                        return (
                            <div className="tool-badge" key={i} data-type={tool.type}>
                                <CIcon icon={icons[tool.icon]} size="sm" className="tool-icon" />
                                {tool.name}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="content-image">
                <img src={`./projects/${active.image}`} />
            </div>
        </div>
    </div>
  );
};

export default SkillsSectie;
