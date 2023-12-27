import './About.css'

//Images


function About() {
    return (
        <div className="About">
            <div className="About-Header">
                <h1>Who Are We?</h1>
                <div className="overlay"></div>
            </div>
            <div id="about-origin">
                <div id="image-overlap-container">
                    <div id="image-overlap"></div>
                </div>
                <div id="content">
                    <h1>Origin Story</h1>
                    <p>Biggies was started 85 years ago by John Smith, A WW2 veteran. After the war, John went to culinary school and fell in love with cooking. After many trips to Italy, John developed his world-famous crust and sauce recipes that are used at Biggies today, and opened up shop on Main Street in a small building.</p>
                </div>
            </div>
        </div>
    )
}

export default About;