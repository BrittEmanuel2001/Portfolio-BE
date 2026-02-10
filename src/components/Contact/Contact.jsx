import { useState } from "react";
import { motion } from "framer-motion";
import './Contact.css';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email.trim()) && message.trim() !== "";

    return (
        <div className="contact-section">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="outside-container">
                    <div className="inside-container">
                        <div className="contact-info">
                            <h3 id="contact">Contact</h3>
                            <h2>Samenwerken?</h2>
                            <p>Ik ben altijd benieuwd naar nieuwe ideeën en uitdagingen. Stuur me gerust een mail en we kijken wat mogelijk is.</p>
                            <a href="tel:+32484070169"><i className="fa-solid fa-square-phone"></i> +32 484 070 169</a>
                            <a href="mailto:britt.emanuel@telenet.be"><i class="fa-solid fa-envelope"></i> britt.emanuel@telenet.be</a>
                            <a href="https://www.linkedin.com/in/britt-emanuel"><i className="fa-brands fa-linkedin"></i> britt-emanuel</a>
                        </div>
                        <div className="contact-form-col">
                            <form class="contact-form">
                                <div class="form-group">
                                    <label htmlFor="email">E-mailadres</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="user@mail.be"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="message">Boodschap</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="9"
                                        placeholder="Schrijf hier je boodschap…"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    class="submit-btn"
                                    disabled={!isValid}
                                >
                                    Verzenden
                                </button>
                            </form>
                        </div>
                    </div>
                    <img src="./background/BE-letters.svg" className="contact-letters" />
                </div>
            </motion.div>
        </div>
    )
}

export default Contact;