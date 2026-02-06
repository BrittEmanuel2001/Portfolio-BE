import { useEffect, useState, useRef } from "react";
import { Download } from "lucide-react";
import './Navbar.css';

const sections = ["Home", "About", "Profiel", "Werk", "Contact"];

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [indicatorStyle, setIndicatorStyle] = useState(null);
    const navRef = useRef(null);

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
        <div className='navbar' ref={navRef}>
            <div className="nav-top">
                {/* Logo */}
                <img src="BE-logo.svg"></img>

                {/* Links */}
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

            {/* CV link */}
            <div className="cv">
                <a href="files/cv_BrittEmanuel_2025.pdf" download>
                    <Download />
                    <p>CV</p>
                </a>
            </div>
        </div>
    )
}

export default Navbar;