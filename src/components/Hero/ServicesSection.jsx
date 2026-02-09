import { PenTool, Monitor, Server } from "lucide-react";

const ServicesSection = () => {

    return (
        <div className="outside-container white-border">
            <div className="inside-container flex-between">
                <div className="flex-center skill-topic">
                    <div><PenTool className="mirror" /></div>
                    <p>Graphic Design</p>
                </div>
                <div className="flex-center skill-topic">
                    <div><Monitor /></div>
                    <p>UI/UX design</p>
                </div>
                <div className="flex-center skill-topic">
                    <div><i class="fa-solid fa-code"></i></div>
                    <p>Front-end development</p>
                </div>
                <div className="flex-center skill-topic">
                    <div><Server /></div>
                    <p>Back-end development</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;