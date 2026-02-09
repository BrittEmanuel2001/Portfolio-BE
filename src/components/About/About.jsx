import { motion } from "framer-motion";
import './About.css';

const About = () => {
    return (
        <div id="about" className="about-section white-border">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="outside-container">
                <div className="inside-container">
                        <h3>About</h3>
                        <h2>Get to know me</h2>
                        <div className="flex-center">
                            <p>Hello there! Ik ben Britt Emanuel, grafisch ontwerper en webdeveloper. Van kinds af aan speelde ik met Paint en WordArt en bewonderde ik games om hun design. Wat ooit nieuwsgierigheid was, groeide uit tot een passie voor digitale ervaringen die zowel mooi als slim zijn.</p>
                            <p>In 2019 startte ik met <strong>Grafische en Digitale Media</strong> en in 2023 breidde ik mijn kennis uit met <strong>Toegepaste Informatica</strong> aan HOGENT.</p>
                            <p>In mijn persoonlijke leven ben ik trotse kattenbaasje van mijn Maine Coon, Tigrou, die stiekem dienstdoet als kwaliteitscontroleur van alles wat ik doe. Daarnaast ben ik actief bij studentenvereniging Heimdal, waar ik momenteel help met het ontwikkelen van hun nieuwe website.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        
    )
}

export default About