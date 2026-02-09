import { motion } from "framer-motion";
import SkillsSectie from "./SkillsSectie";
import './Profiel.css';

const About = ({ activeTab, setActiveTab }) => {
    return (
        <div className="profiel-section">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="outside-container">
                    <div className="inside-container">
                        <h3 id="profiel">Profiel</h3>
                        <h2>Skills & ervaring</h2>

                        <SkillsSectie activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </div>
            </motion.div>
        </div>
        
    )
}

export default About