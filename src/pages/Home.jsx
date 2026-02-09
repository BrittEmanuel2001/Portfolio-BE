import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import ServicesSection from "../components/Hero/ServicesSection";
import About from "../components/About/About";

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
                    <ServicesSection />
                </motion.div>
            </motion.div>

            <About />
        </>
    );
};

export default Home;
