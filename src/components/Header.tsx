interface Props{
    Img: any,
    Title: string
}

function Header(props: Props){
    return(
        <div className="Hero Header" style={{backgroundImage: "url('" + props.Img + "')"}}>
            <div className="Hero-Overlay Header-Overlay"></div>
            <div className="Header-Title">
                <h1>{props.Title}</h1>
            </div>
        </div>
    )
}

export default Header