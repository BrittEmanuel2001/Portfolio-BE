import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../api/ExperienceData";

const tabs = ["Opleiding", "Werkervaring"];

const ExperienceSectie = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="experience-section">
            {/* Tabs */}
            <div className="experience-tabs">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                opacity: isActive ? "1" : "0.3",
                                fontWeight: isActive ? "700" : "400",
                                fontSize: isActive ? "1rem" : "0.9rem",
                            }}
                            whileHover={{ scale: 1.05, opacity: 1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {tab}
                        </motion.button>
                    );
                })}
            </div>

            {/* Cards */}
            <div className="experience-cards">
                <AnimatePresence mode="wait">
                    {data[activeTab].map((card, index) => (
                        <motion.div 
                            key={card.title}
                            className="experience-card"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <p className="date">{card.date}</p>
                            <p className="title">{card.title}</p>
                            <p className="description">{card.description}</p>
                            <p className="location">{card.location}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>

    );
};

export default ExperienceSectie;
