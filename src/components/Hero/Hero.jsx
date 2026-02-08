import { motion } from "framer-motion";
import AnimatedH1 from "./AnimatedH1";
import './Hero.css';

const socials = [
    { href: "#", icon: "fa-brands fa-linkedin" },
    { href: "#", icon: "fa-brands fa-github" },
    { href: "#", icon: "fa-solid fa-square-phone" },
];

const Hero = () => {

    return (
        <div id="home" className="hero-section">
            <div className="gradient"></div>
            <div className='BE-letters'>
                <img src='./BE-letters.svg'></img>
            </div>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className="text">
                        <AnimatedH1 />
                        <p><span>_</span> Graphic design</p>
                        <p><span>_</span> Development</p>
                        <motion.button
                            className="button-primary"
                            onClick={() => {
                                const el = document.getElementById("about");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="fa-solid fa-terminal"></i> whoami
                        </motion.button>
                    </div>
                </div>
                <div className="socials">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
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
    )
}

export default Hero;