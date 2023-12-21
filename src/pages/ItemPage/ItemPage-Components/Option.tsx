interface Props{
    Name: string,
    Price: string,
    Description: string,
    Img: any
}

function Option(props: Props){
    return(
        <div className="Option">
            <img src={props.Img} alt="" />
            <h1>{props.Name}</h1>
            <p>{props.Price}</p>
            <p>{props.Description}</p>
        </div>
    )
}

export default Option