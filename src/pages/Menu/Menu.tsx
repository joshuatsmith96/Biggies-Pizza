import './Menu.css'
import Header from '../../components/Header'
import MenuItem from './Menu-Components/MenuItem'

//Images
import PizzaHeader from '../../assets/Images/Menu/_Thumbnail/PizzaHeaderImage.jpg'

import Pizza from '../../assets/Images/Menu/_Category Images/Pizza.png'
import Burger from '../../assets/Images/Menu/_Category Images/burger.png'
import Sandwiches from '../../assets/Images/Menu/_Category Images/sandwich.png'
import Desserts from '../../assets/Images/Menu/_Category Images/dessert.png'

function Menu(){
    return(
        <div className="Menu">
            <Header Img={PizzaHeader} Title={"Menu"}/>
            <div className="MenuItemContainer">
                <MenuItem Img={Pizza} Link="/Biggies-Pizza/Menu/Pizza" ButtonName='Pizza'/>
                <MenuItem Img={Sandwiches} Link="/Biggies-Pizza/Menu/Sandwiches" ButtonName='Sandwiches'/>
                <MenuItem Img={Desserts} Link="/Biggies-Pizza/Menu/Desserts" ButtonName='Desserts'/>
                <MenuItem Img={Burger} Link="/Biggies-Pizza/Menu/Burgers" ButtonName='Burgers'/>
            </div>
        </div>
    )
}

export default Menu