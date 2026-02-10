import { motion } from "framer-motion";
import projects from "../../api/ProjectsData";
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

                        <div className="images-container">
                            {projects.map((p, index) => (
                                <motion.div 
                                    className="project-card" 
                                    key={p.id}
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    whileHover={{ y: -8 }}
                                >
                                    <img className="project-image" src={`./projects/${p.image}`} alt={p.name} />
                                    <div className="overlay">
                                        <span className="project-name">{p.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

    );
};

export default Projects;