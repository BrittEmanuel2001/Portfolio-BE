import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import './Contact.css';

const Contact = () => {
    const [snackbar, setSnackbar] = useState({ show: false, message: '', type: 'success'});
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } = useForm({mode: "onChange"});

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            formData.append("access_key", "26fa8eb4-e21c-439b-87b2-88f5ac032a7f");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                reset();
                setSnackbar({ show: true, message: 'Bericht succesvol verzonden!', type: 'success' });
            } else {
                setSnackbar({ show: true, message: 'Er ging iets mis.', type: 'error' });
            }

        } catch(err) {
            setSnackbar({ show: true, message: 'Er is iets misgegaan. Probeer opnieuw.', type: 'error' });
        }
    };

    useEffect(() => {
        if (snackbar.show) {
            const timer = setTimeout(() => setSnackbar({ ...snackbar, show: false }), 3000);
            return () => clearTimeout(timer);
        }
    }, [snackbar]);

    return (
        <div className="contact-section">
                <div className="outside-container">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                    <div className="inside-container">
                        <div className="contact-info">
                            <h3 id="contact">Contact</h3>
                            <h2>Samenwerken?</h2>
                            <p>Ik ben altijd benieuwd naar nieuwe ideeën en uitdagingen. Stuur me gerust een mail en we kijken wat mogelijk is.</p>
                            <a href="tel:+32484070169"><i className="fa-solid fa-square-phone"></i> +32 484 070 169</a>
                            <a href="mailto:britt.emanuel@telenet.be"><i className="fa-solid fa-envelope"></i> britt.emanuel@telenet.be</a>
                            <a href="https://www.linkedin.com/in/britt-emanuel"><i className="fa-brands fa-linkedin"></i> britt-emanuel</a>
                        </div>
                        <div className="contact-form-col">
                            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="email">E-mailadres</label>
                                    <input type="email" id="email" placeholder="user@mail.be" 
                                        {...register("email", {
                                            required: "E-mailadres is verplicht",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Ongeldig e-mailadres"
                                            }
                                        })}
                                    />
                                    {errors.email && <p className='error'>{errors.email.message}</p>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Boodschap</label>
                                    <textarea id="message" rows="9" placeholder="Schrijf hier je boodschap…"
                                        {...register("message", {
                                            required: "Boodschap is verplicht",
                                            minLength: {
                                                value: 10,
                                                message: "Boodschap moet minimaal 10 tekens lang zijn"
                                            }
                                        })}
                                    ></textarea>
                                    {errors.message && <p className='error'>{errors.message.message}</p>}
                                </div>
                                <button 
                                    type="submit" 
                                    className="submit-btn"
                                    disabled={!isValid || isSubmitting}
                                >
                                    {isSubmitting && (
                                        <motion.div className='spinner' animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        />
                                    )}
                                    <span>{isSubmitting ? "" : "Verzenden"}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    </motion.div>
                    <img src="./background/BE-letters.svg" className="contact-letters" />
                </div>

            <AnimatePresence>
                {snackbar.show && (
                <motion.div 
                    className={`snackbar ${snackbar.type}`} 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: 'ease', stiffness: 200 }} 
                >
                    <span>{snackbar.message}</span>
                    <button 
                        className="close-btn" 
                        onClick={() => setSnackbar({ ...snackbar, show: false })}
                        disabled={isSubmitting}
                    >
                    ×
                    </button>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Contact;