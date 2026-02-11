import { motion } from "framer-motion";
import SkillsSectie from "./SkillsSectie";
import ExperienceSectie from "./ExperienceSectie";
import './Profiel.css';

const About = ({ activeTab, setActiveTab }) => {
    return (
        <div className="profiel-section">
            <div className="outside-container profiel-container-relative">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="inside-container">
                        <h3 id="profiel">Profiel</h3>
                        <h2>Skills & ervaring</h2>

                        <SkillsSectie activeTab={activeTab} setActiveTab={setActiveTab} />
                        <ExperienceSectie />
                    </div>
                </motion.div>
                <img src="./background/BE-letters-klein.svg" className="profiel-letters" />
            </div>
        </div>
        
    )
}

export default About