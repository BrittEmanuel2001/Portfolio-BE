import { motion } from "framer-motion";

const socials = [
    { href: "https://www.linkedin.com/in/britt-emanuel", icon: "fa-brands fa-linkedin" },
    { href: "https://github.com/BrittEmanuel2001", icon: "fa-brands fa-github" }
];

const Footer = () => {
    return (
        <div className="outside-container footer-container white-border">
            <div className="inside-container footer">
                <p>© 2026 Britt Emanuel - Alle rechten voorbehouden</p>
                <div>
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
        </div>
    )
}

export default Footer;