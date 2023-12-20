interface Props{
    Img: any,
    Header: string,
    Text: string
}

function Featured(props: Props) {
    return (
        <div className="Featured">
            <div className="Featured-Img-Container">
            <img src={props.Img} alt="" />
            </div>
            <div className="Featured-Content">
                <h2>{props.Header}</h2>
                <p>{props.Text}</p>
            </div>
        </div>
    )
}

export default Featured