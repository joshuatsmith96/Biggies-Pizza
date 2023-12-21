import { Link } from 'react-router-dom'

interface Props{
    Img: any,
    Title: string,
    BackToMenu?: boolean
}

function Header(props: Props){
    let link = ["Back To Menu"]
    let button;
    if(props.BackToMenu === true){
        button = link.map((x) => {return(<Link to="/Biggies-Pizza/Menu" id="back-to-menu">{x}</Link>)})
    }

    return(
        <div className="Hero Header" style={{backgroundImage: "url('" + props.Img + "')"}}>
            <div className="Hero-Overlay Header-Overlay"></div>
            <div className="Header-Title">
                <h1>{props.Title}</h1>
                {button}
            </div>
        </div>
    )
}

export default Header