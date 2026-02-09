import { useState } from "react";

const tabs = ["Opleiding", "Werkervaring"];

const cardsData = {
    Opleiding: [
        { title: "School 1", description: "Beschrijving 1" },
        { title: "School 2", description: "Beschrijving 2" },
        { title: "School 3", description: "Beschrijving 3" }
    ],
    Werkervaring: [
        { title: "job 1", description: "Beschrijving 1" },
        { title: "job 2", description: "Beschrijving 2" },
        { title: "job 3", description: "Beschrijving 3" }
    ],
};

const ExperienceSectie = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="experience-section">
            {/* Tabs */}
            <div className="experience-tabs">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                opacity: isActive ? "1" : "0.3",
                                fontWeight: isActive ? "800" : "bold",
                            }}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            {/* Cards */}
            <div className="experience-cards">
                {cardsData[activeTab].map((card, index) => (
                    <div className="experience-card">
                        <p>01.09.2013 - 30.06.2019</p>
                        <p>Diploma Secundair Onderwijs</p>
                        <p>Economie-moderne talen <span>(met grote onderscheiding)</span></p>
                        <p>Sint-Vincentiuscollege, Buggenhout</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ExperienceSectie;
