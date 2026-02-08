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
        <div id="home" className="hero-section">
            <div className="gradient"></div>
            <div className='BE-letters'>
                <img src='./BE-letters.svg'></img>
            </div>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className="text">
                        <AnimatedH1 />
                        <p style={{fontSize: "1.2rem", paddingBottom: "20px", fontFamily: "montserrat"}}>Krachtig, authentiek en helemaal jij.</p>
                        <p><span style={{color: "var(--dark-grey)", fontSize: "1.2rem"}}>By Britt Emanuel</span></p>
                        {/* <p style={{fontSize: "1.2rem"}}><span>_</span> Graphic design</p>
                        <p style={{fontSize: "1.2rem"}}><span>_</span> Development</p> */}
                        {/* <p><span style={{color: "var(--grey)", fontSize: "1.2rem"}}>Krachtig, authentiek en helemaal jij.</span></p> <br />
                        <p><span>_</span> Graphic design</p>
                        <p><span>_</span> Development</p> */}
                        
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
    )
}

export default Hero;