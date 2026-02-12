import { useEffect, useState, useRef } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import './Navbar.css';

const sections = ["home", "about", "profiel", "werk", "contact"];

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [indicatorStyle, setIndicatorStyle] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => setMobileOpen(prev => !prev);

    const menuVariants = {
        hidden: { y: "-100%"},
        visible: { y: "0%", transition: { duration: 0.5, ease: "easeOut" } },
        exit: { y: "-100%", transition: { duration: 0.4, ease: "easeIn" } },
    };


    // DESKTOP OBSERVER
    // ================

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                setActive(entry.target.id);
                }
            });
            },
            { threshold: 0.6 }
        );

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const updateIndicator = () => {
            const activeLink = nav.querySelector(`a[href="#${active.toLowerCase()}"]`);
            if (activeLink) {
                const { offsetTop, offsetHeight } = activeLink;
                setIndicatorStyle({ top: offsetTop - 30, height: offsetHeight + 20 });
            }
        };

        updateIndicator();

        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [active]);

    return (
        <>
            {/* Desktop: nav */}
            <div className='navbar-desktop' ref={navRef}>
                <div className="nav-top">
                    <img src="BE-logo.svg"></img>
                    <ul>
                        {sections.map(sectie => (
                            <li key={sectie}>
                                <a href={`#${sectie}`} className={active === sectie ? "active" : ""}>{sectie}</a>
                            </li>
                        ))}

                        {indicatorStyle && (
                            <div
                                className="indicator"
                                style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
                            />
                        )}
                    </ul>
                </div>

                <div className="cv">
                    <a href="files/cv_BrittEmanuel_2025.pdf" download>
                        <Download />
                        <p>CV</p>
                    </a>
                </div>
            </div>

            {/* Mobile: nav */}
            <div className="navbar-mobile">
                <div className="nav-top-mobile">
                    <img src="BE-logo.svg" alt="Logo" />
                    {/* <button className="hamburger" onClick={toggleMenu}>
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button> */}
                    <button 
                        className={`hamburger ${mobileOpen ? "open" : ""}`} 
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

                <AnimatePresence>
                    {mobileOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <ul>
                        {sections.map((sectie) => (
                            <li key={sectie}>
                            <a href={`#${sectie}`} onClick={() => setMobileOpen(false)}>
                                {sectie}
                            </a>
                            </li>
                        ))}
                        </ul>

                        <div className="cv">
                        <a href="files/cv_BrittEmanuel_2025.pdf" download>
                            <Download size={32} />
                            <p>CV</p>
                        </a>
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Navbar;