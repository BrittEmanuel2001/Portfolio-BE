import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../api/ProjectsData";
import CIcon from "@coreui/icons-react";
import * as icons from "@coreui/icons";
import "./Projects.css";

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const popupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const badgeVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
};

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        if (!activeProject) return;

        const projectLink = activeProject.link;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Check dit project: ${activeProject.name}`,
                    url: projectLink,
                });
            } catch (err) {
                console.log("Share canceled or failed:", err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(projectLink);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.log("Copy failed:", err);
            }
        }
    };

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
                        <h2>In de spotlight</h2>

                        <AnimatePresence mode="wait">
                            <motion.div
                                variants={containerVariants}
                                className="images-container"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                initial="hidden"
                                exit="hidden"
                            >
                                {projects.map((p) => (
                                    <motion.div
                                        className="project-card"
                                        key={p.id}
                                        onClick={() => setActiveProject(p)}
                                        variants={cardVariants}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        whileHover={{ y: -8 }}
                                    >
                                        <img
                                            className="project-image"
                                            src={`./projects/${p.image}`}
                                            alt={p.name}
                                        />
                                        <div className="overlay">
                                            <span className="project-name">{p.name}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* POPUP */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        className="popup-bg"
                        onClick={() => setActiveProject(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="popup"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="col1">
                                <img
                                    src={`./projects/${activeProject.image}`}
                                    alt={activeProject.name}
                                />
                            </div>

                            <div className="col2">
                                <div className="actions">
                                    <motion.button
                                        className="popup-close"
                                        onClick={() => setActiveProject(null)}
                                        whileHover={{ backgroundColor: "var(--grey)", color: "var(--primary)" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        ✕
                                    </motion.button>

                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        whileTap={{ scale: 0.9, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="link-icon"
                                    >
                                        <a href={activeProject.link} target="_blank">
                                            {activeProject.category === "Development" && (<CIcon icon={icons["cibGithub"]} />)}
                                            {activeProject.category === "Design" && (<CIcon icon={icons["cilExternalLink"]} />)}
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        whileTap={{ scale: 0.9, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="link-icon"
                                        onClick={handleShare}
                                    >
                                        <span><CIcon icon={icons["cilShareAlt"]} /></span>
                                        {copied && <span className="copied-tooltip">Gekopieerd!</span>}
                                    </motion.div>
                                </div>

                                <AnimatePresence mode="wait">
                                <motion.div
                                    className="popup-content"
                                    variants={popupVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.p className="category" variants={itemVariants}>
                                        {activeProject.category}
                                    </motion.p>
                                    <motion.p className="project-name" variants={itemVariants}>
                                        {activeProject.name}
                                    </motion.p>
                                    <motion.p className="project-description" variants={itemVariants}>
                                        {activeProject.description}
                                    </motion.p>

                                    {activeProject.team && (
                                        <motion.p className="project-group" variants={itemVariants}>
                                            <span className="accent">Team:</span>{" "}
                                            {activeProject.team.map((member, index) => (
                                                <span key={index}>
                                                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                                                        {member.firstname}
                                                    </a>
                                                    {index < activeProject.team.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </motion.p>
                                    )}

                                    <motion.div className="badges">
                                        {activeProject.tools.map((tool, i) => (
                                            <motion.div
                                                className="tool-badge"
                                                key={i}
                                                data-type={tool.type}
                                                variants={badgeVariants}
                                            >
                                                <CIcon icon={icons[tool.icon]} size="sm" className="tool-icon" />
                                                {tool.name}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
