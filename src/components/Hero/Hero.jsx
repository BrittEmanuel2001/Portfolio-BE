import './Hero.css';

const Hero = () => {
    return (
        <div id="home" className="hero-section">
            <div className="gradient"></div>
            <div className='BE-letters'>
                <img src='./BE-letters.svg'></img>
            </div>
            <div className='hero-container'>
                <div className='hero-content'>
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
            </div>
            <div className='hero-container-image'>
                <div className='me-groot'>
                    <img src='./Portfolio_Britt_v2.png'></img>
                </div>
            </div>
        </div>
        //     <div className='me-groot'>
        //         <img src='./Portfolio_Britt_v2.png'></img>
        //     </div>
        // </div>
    )
}

export default Hero;