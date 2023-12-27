import './About.css'

//Images
import img1 from '../../assets/Images/founder-image-example.jpg'
import img2 from '../../assets/Images/building.jpg'

function About() {
    return (
        <div className="About">
            <div className="About-Header">
                <h1>Who Are We?</h1>
                <div className="overlay"></div>
            </div>
            <div id="about-origin">
                <div id="image-overlap-container">
                    <div id="image-overlap">
                        <img src={img1} alt="Founder" />
                        <img src={img2} alt="Building" />
                    </div>
                </div>
                <div id="about-content">
                    <h1>Origin Story</h1>
                    <p>Biggies was started 85 years ago by John Smith, A WW2 veteran. After the war, John went to culinary school and fell in love with cooking. After many trips to Italy, John developed his world-famous crust and sauce recipes that are used at Biggies today, and opened up shop on Main Street in a small building.</p>
                </div>
            </div>
            <div className="about-mission">
                <h1>Our Mission</h1>
                <p>Our goal is to provide amazing service, great food, and fond memories. We will always treat the customer with respect, regardless of the situation.</p>
            </div>
            <div className="about-promise">
                <h1>Our Promise To You</h1>
                <ul>
                    <li>We <span className='Bold Italic'>promise</span> that if an order is wrong, we will fix it no questions asked.</li>
                    <li>We <span className='Bold Italic'>promise</span> that all customers will be treated with respect.</li>
                    <li>We <span className='Bold Italic'>promise</span> that all are welcome.</li>
                </ul>
                <p>The world is tough, so lets all gets together and eat some great pizza.</p>
            </div>
        </div>
    )
}

export default About;