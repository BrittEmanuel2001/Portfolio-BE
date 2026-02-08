import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },    // start net onder en transparant
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "power3.out",
      staggerChildren: 0.2,        // als je meerdere children hebt
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "power3.out" } },
};

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ overflow: "hidden" }}
    >
      <motion.div variants={contentVariants}>
        <Hero />
      </motion.div>

      <motion.div
        variants={contentVariants}
        style={{
          backgroundColor: "var(--black)",
          borderTop: "1px solid white",
          padding: "30px 110px",
        }}
      />
    </motion.div>
  );
};

export default Home;
