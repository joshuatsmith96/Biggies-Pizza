import { Link } from 'react-router-dom'

interface Props{
    Img: any,
    Link: string,
    ButtonName: string,
    itemData?: Object
}

function MenuItem(props:Props){
    //Gathering data to send over
    const itemData = props.itemData;

    return(
        <div className="MenuItem">
            <img src={props.Img} alt="" />
            <Link className="menulink" to={props.Link} state={{data: itemData}}>{props.ButtonName}</Link>
        </div>
    )
}

export default MenuItem