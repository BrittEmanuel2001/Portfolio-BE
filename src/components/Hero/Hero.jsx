import { color, motion } from "framer-motion";
import AnimatedH1 from "./AnimatedH1";
import './Hero.css';

const socials = [
    { href: "https://www.linkedin.com/in/britt-emanuel", icon: "fa-brands fa-linkedin" },
    { href: "https://github.com/BrittEmanuel2001", icon: "fa-brands fa-github" },
    { href: "tel:+32484070169", icon: "fa-solid fa-square-phone" },
];

const Hero = () => {

    return (
        <div id="home" className="hero-section relative-container">
            <div className="gradient"></div>
            <div className='BE-letters'>
                <img src='./BE-letters.svg'></img>
            </div>
            <div className='outside-container relative-container'>
                <div className="inside-container relative-container">
                    <div className='hero-content'>
                    <div className="text">
                            <AnimatedH1 />
                            <p style={{fontSize: "1.2rem", paddingBottom: "20px", fontFamily: "montserrat"}}>Krachtig, authentiek en helemaal jij.</p>
                            <p><span style={{color: "var(--dark-grey)", fontSize: "1.2rem"}}>By Britt Emanuel</span></p>
                            
                            <motion.button
                                className="button-primary"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 1.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                onClick={() => {
                                    const el = document.getElementById("about");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                whileTap={{ scale: 0.92 }}
                            >
                                <i className="fa-solid fa-terminal"></i> &nbsp; whoami
                            </motion.button>
                        </div>
                    </div>
                    <div className="socials">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="blank"
                                whileHover={{ rotate: 15, scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className={social.icon}></i>
                            </motion.a>
                        ))}
                    </div>
                </div>
                <div className='hero-container-image'>
                    <div className='me-groot'>
                        <img src='./Portfolio_Britt_v4.png'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;