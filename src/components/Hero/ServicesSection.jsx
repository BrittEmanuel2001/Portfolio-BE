import { PenTool, Monitor, Server } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const ServicesSection = ({ setActiveTab }) => {

    const handleNavigation = (tabId) => {
        setActiveTab(tabId);
        const target = document.getElementById("skills");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="outside-container white-border skills-section">
            <motion.div
                className="inside-container flex-between"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div 
                    className="flex-center skill-topic" 
                    variants={itemVariants}
                    onClick={() => handleNavigation(1)}
                >
                    <div><PenTool className="mirror" /></div>
                    <p>Graphic Design</p>
                </motion.div>

                <motion.div 
                    className="flex-center skill-topic" 
                    variants={itemVariants}
                    onClick={() => handleNavigation(2)}
                >
                    <div><Monitor /></div>
                    <p>UI/UX design</p>
                </motion.div>

                <motion.div 
                    className="flex-center skill-topic" 
                    variants={itemVariants}
                    onClick={() => handleNavigation(3)}
                >
                    <div><i className="fa-solid fa-code" /></div>
                    <p>Front-end development</p>
                </motion.div>

                <motion.div 
                    className="flex-center skill-topic" 
                    variants={itemVariants}
                    onClick={() => handleNavigation(4)}
                >
                    <div><Server /></div>
                    <p>Back-end development</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ServicesSection;
