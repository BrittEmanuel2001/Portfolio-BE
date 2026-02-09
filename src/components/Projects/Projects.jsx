import { motion } from "framer-motion";
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects-section white-border">
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="outside-container">
                    <div className="inside-container">
                        <h3 id="werk">Werk</h3>
                        <h2>Projectoverzicht</h2>
                    </div>
                </div>
            </motion.div>
        </div>

    );
};

export default Projects;