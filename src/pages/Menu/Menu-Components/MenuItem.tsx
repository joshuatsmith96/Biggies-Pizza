import { Link } from 'react-router-dom'

interface Props{
    Img: any,
    Link: string,
    ButtonName: string
}

function MenuItem(props:Props){
    return(
        <div className="MenuItem">
            <img src={props.Img} alt="" />
            <Link className="menulink" to={props.Link}>{props.ButtonName}</Link>
        </div>
    )
}

export default MenuItem