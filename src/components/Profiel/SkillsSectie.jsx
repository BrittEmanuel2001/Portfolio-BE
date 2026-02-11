import { useEffect } from "react";
import tabs from "../../api/SkillsData";
import CIcon from "@coreui/icons-react";
import * as icons from "@coreui/icons";
import { motion, AnimatePresence } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};


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
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontWeight: isActive ? "700" : "400",
                }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span style={{borderBottom: isActive ? "2px solid var(--primary)" : "2px solid transparent"}}>
                  <TabIcon />
                </span>
                <p>{tab.title}</p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="skills-content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="content-text">
                <p className="skills-since">Since {active.since}</p>
                <h4>{active.title} skillset</h4>
                <p>{active.content}</p>
                {/* <p className="skills-products">{active.products}</p> */}

                <p className="skills-tools"><strong>Tools:</strong></p>
                <motion.div className="badges">
                    {active.tools.map((tool, i) => {
                        return (
                            <motion.div
                              className="tool-badge"
                              key={i}
                              data-type={tool.type}
                              variants={badgeVariants}
                            >
                                <CIcon icon={icons[tool.icon]} size="sm" className="tool-icon" />
                                {tool.name}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
            <div className="content-image">
                <img src={`./projects/${active.image}`} />
            </div>
          </motion.div>
        </AnimatePresence>
    </div>
  );
};

export default SkillsSectie;
