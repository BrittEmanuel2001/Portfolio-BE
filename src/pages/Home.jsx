import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import ServicesSection from "../components/Hero/ServicesSection";

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

            <motion.div
              style={{
                height: "600px",
                backgroundColor: "var(--darker-grey)",
                padding: "100px 110px",
                margin: "60px",
                color: "white",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 style={{ fontSize: "3rem", marginBottom: "30px" }}>Scroll Reveal Section</h2>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>

            <motion.div
              style={{
                height: "600px",
                backgroundColor: "var(--darker-grey)",
                padding: "100px 110px",
                color: "white",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 id="about" style={{ fontSize: "3rem", marginBottom: "30px" }}>Scroll Reveal Section</h2>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>
        </>
    );
};

export default Home;
