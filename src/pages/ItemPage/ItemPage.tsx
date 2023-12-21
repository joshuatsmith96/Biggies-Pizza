import './ItemPage.css'
import { useLocation } from "react-router-dom"
import Header from "../../components/Header";
import Option from "./ItemPage-Components/Option";
import { useEffect } from 'react'

function ItemPage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    //Grabbing Item Data
    const location = useLocation();
    const data = location.state.data;
    let options = data.Options.map((option:any) => {
        return(
            <Option Name={option.Name} Price={option.Price} Description={option.Desc} Img={option.img}/>
        )
    })

    return(
        <div className="ItemPage">
            <Header Img={data.HeaderImage} Title={data.CategoryName} BackToMenu={true}/>
            <div className="item-option-container">
                {options}
            </div>
        </div>
    )
}

export default ItemPage