import { motion } from "framer-motion";
import { useState } from "react";
import Hero from "../components/Hero/Hero";
import ServicesSection from "../components/Hero/ServicesSection";
import About from "../components/About/About";
import Profiel from "../components/Profiel/Profiel";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "power3.out",
          staggerChildren: 0.2,
        },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "power3.out" } },
};

const Home = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ overflow: "hidden" }}
            >
                <motion.div variants={contentVariants}>
                    <Hero />
                    <ServicesSection setActiveTab={setActiveTab} />
                </motion.div>
            </motion.div>

            <About />
            <Profiel activeTab={activeTab} setActiveTab={setActiveTab} />
            <About />
        </>
    );
};

export default Home;
