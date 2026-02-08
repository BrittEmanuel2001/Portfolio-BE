import { motion } from "framer-motion";
import AnimatedH1 from "./AnimatedH1";
import './Hero.css';

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
                        <p><span>&gt;</span> Graphic design</p>
                        <p><span>&gt;</span> Development</p>
                        <motion.button
                            whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Get to know me
                        </motion.button>
                        </div>
                        
                    <div className="socials">
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                        <a href="#"><i className="fa-solid fa-square-phone"></i></a>
                    </div>
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