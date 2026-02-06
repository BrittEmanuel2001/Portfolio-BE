import { useEffect, useState, useRef } from "react";
import './Navbar.css';

const sections = ["Home", "About", "Profiel", "Werk", "Contact"];

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
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
    }, [active]);

    return (
        <div className='navbar' ref={navRef}>
            <ul>
                {sections.map(sectie => (
                    <li key={sectie}>
                        <a href={`#${sectie}`} className={active === sectie ? "active" : ""}>{sectie}</a>
                    </li>
                ))}

                <div 
                    className="indicator" 
                    style={{ top: indicatorStyle.top, height: indicatorStyle.height }} 
                />
            </ul>
        </div>
    )
}

export default Navbar;