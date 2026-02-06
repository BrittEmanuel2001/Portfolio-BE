import './Hero.css';

const Hero = () => {
    return (
        <div id="home" className="hero-section">
            <div className="hero-content-col">
                <div className="text">
                    <h1>Be bold, Be real <br></br> Be you.</h1>
                    <p><span>&gt;</span> Graphic design</p>
                    <p><span>&gt;</span> Development</p>
                    <button>Get to know me</button>
                </div>
                <div className="socials">
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-solid fa-square-phone"></i></a>
                </div>
            </div>
            <div className="hero-image-col">
                <div className="gradient"></div>
            </div>
        </div>
    )
}

export default Hero;