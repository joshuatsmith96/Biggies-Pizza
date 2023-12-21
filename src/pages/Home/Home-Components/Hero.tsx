import { Link } from 'react-router-dom'

function Hero(){
    return(
        <div className="Hero">
            <div className="Hero-Text">
                <h1>Biggies</h1>
                <p>Great Pizza</p>
                <p>Good Vibes</p>
                <div className="Hero-Buttons">
                    <Link to={"/Biggies-Pizza/Menu"} className="heroButton">View Menu</Link>
                    <Link to={"/Biggies-Pizza"}className="heroButton">Book A Table</Link>
                </div>
            </div>
            <div className="Hero-Overlay"></div>
        </div>
    )
}

export default Hero