import { useEffect, useState, useRef } from "react";
import { Download, Menu, X } from "lucide-react";
import './Navbar.css';

const sections = ["Home", "About", "Profiel", "Werk", "Contact"];

const Navbar = ({ isLoaded }) => {

    const [active, setActive] = useState("Home");
    const [indicatorStyle, setIndicatorStyle] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => setMobileOpen(prev => !prev);

    // DESKTOP OBSERVER
    // ================

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if(e.isIntersecting) {
                        setActive(e.target.id)
                    }
                })
            },
            { threshold: 0.6 }
        )

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        })

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const activeLink = nav.querySelector(`a[href="#${active}"]`);
        if (activeLink) {
            const { offsetTop, offsetHeight } = activeLink;
            setIndicatorStyle({ top: offsetTop - 10, height: offsetHeight + 20});
        }
    }, [active, navRef]);

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
                    <button className="hamburger" onClick={toggleMenu}>
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                    <ul>
                        {sections.map(sectie => (
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
                </div>
            </div>
        </>
    )
}

export default Navbar;