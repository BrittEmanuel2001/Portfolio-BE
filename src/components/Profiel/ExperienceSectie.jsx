import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../api/ExperienceData";

const tabs = ["Opleiding", "Werkervaring"];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
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
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    className="experience-cards"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    initial="hidden"
                    exit="hidden"
                >
                    {data[activeTab].map((card) => (
                        <motion.div
                            key={card.title}
                            className="experience-card"
                            variants={cardVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -8 }}
                        >
                            <p className="date">{card.date}</p>
                            <p className="title">{card.title}</p>
                            <p className="description">{card.description}</p>
                            <p className="location">{card.location}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>

    );
};

export default ExperienceSectie;
