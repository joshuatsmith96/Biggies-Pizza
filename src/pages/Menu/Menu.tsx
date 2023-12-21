import './Menu.css'
import Header from '../../components/Header'
import MenuItem from './Menu-Components/MenuItem'
import { useEffect } from 'react'

//Images
import PizzaHeader from '../../assets/Images/Menu/_Thumbnail/PizzaHeaderImage.jpg'

import Pizza from '../../assets/Images/Menu/_Category Images/Pizza.png'
import Burger from '../../assets/Images/Menu/_Category Images/burger.png'
import Sandwiches from '../../assets/Images/Menu/_Category Images/sandwich.png'
import Desserts from '../../assets/Images/Menu/_Category Images/dessert.png'

//-------------------------- ITEM DATA IMAGES ---------------------------- //
//Header Images
import pizzaHeader from '../../assets/Images/Menu/_Thumbnail/PizzaHeaderImage.jpg'
import sandwichHeader from '../../assets/Images/Menu/_Thumbnail/Sandwiches.jpg'
import burgerHeader from '../../assets/Images/Menu/_Thumbnail/Burgers.jpg'


//Thumbnail Images
import SpicyPizza from '../../assets/Images/Menu/Pizzas/spicy pizza.png';
import PinneapplePizza from '../../assets/Images/Menu/Pizzas/Pinneapple Pizza.png';
import PepperoniPizza from '../../assets/Images/Menu/Pizzas/pepperoni pizza.png';
import ChickenBaconRanchPizza from '../../assets/Images/Menu/Pizzas/chicken bacon ranch.png';
import JalapenoPizza from '../../assets/Images/Menu/Pizzas/spicy pizza.png';

import ChickenSandwich from '../../assets/Images/Menu/Sandwiches/Chicken Sandwich.png';
import HamClassic from '../../assets/Images/Menu/Sandwiches/Ham Classic.png';
import HamHoagie from '../../assets/Images/Menu/Sandwiches/Ham Hoagie.png';

import BBQBurger from '../../assets/Images/Menu/Burgers/BBQ Burger.png';
import BaconBurger from '../../assets/Images/Menu/Burgers/Bacon Burger.png';
import ClassicBurger from '../../assets/Images/Menu/Burgers/Classic Burger.png';



//Setup Menu Item Data
let pizzaData = {
    CategoryName: "Pizzas",
    HeaderImage: pizzaHeader,
    ReturnButton: true,
    Options: [
        {
            Name: "Spicy",
            Price: "$12.99",
            img: SpicyPizza,
            Desc: "The Jalapeno pizza will burn your taste buds with its combination of jalapenos, ghost peppers, and chili oil. Topped with pepperoni, sausage and black olives"
        },
        {
            Name: "Pinneapple",
            Price: "$15.99",
            img: PinneapplePizza,
            Desc: "This controversial classic contains the basics; Pinneapple and pepperoni."
        },
        {
            Name: "Pepperoni",
            Price: "$10",
            img: PepperoniPizza,
            Desc: "This not so controversial pizza contains cheese and pepperoni. Ahh. Classic!"
        },
        {
            Name: "Chicken Bacon Ranch",
            Price: "$13.99",
            img: ChickenBaconRanchPizza,
            Desc: "The Chicken bacon ranch contains... well... Chicken, Bacon and Ranch. Its all right there in the name!"
        },
        {
            Name: "Jalapeno",
            Price: "$13.99",
            img: JalapenoPizza,
            Desc: "The Jalapeno Pizza is similar to the Spicy pizza. It is VERY spicy, and contains Jalapeno peppers."
        },
    ]
}

let sandwichData = {
    CategoryName: "Sandwiches",
    HeaderImage: sandwichHeader,
    ReturnButton: true,
    Options: [
        {
            Name: "Chicken Sandwich",
            Price: "$10",
            img: ChickenSandwich,
            Desc: "The classic chicken sandwich! Chicken patty with lettuce and mayo."
        },
        {
            Name: "Ham Classic",
            Price: "$6.99",
            img: HamClassic,
            Desc: "Sometimes simple is best. A ham sandwich with cheese, lettuce, tomato and mayo."
        },
        {
            Name: "Ham Hoagie",
            Price: "$8.99",
            img: HamHoagie,
            Desc: "An upgraded version of the ham classic. Ham, cheese, lettuce, tomato and mayo on a hoagie bun."
        },
    ]
}

let burgerData = {
    CategoryName: "Burgers",
    HeaderImage: burgerHeader,
    ReturnButton: true,
    Options: [
        {
            Name: "Classic Burger",
            Price: "$8.99",
            img: ClassicBurger,
            Desc: "The classic burger! Beef patties, lettuce, tomato and cheese."
        },
        {
            Name: "Bacon Burger",
            Price: "$11.99",
            img: BaconBurger,
            Desc: "A fan favorite! Lots of bacon, and lots of cheese. Yum!"
        },
        {
            Name: "BBQ Burger",
            Price: "$12.99",
            img: BBQBurger,
            Desc: "Grab some napkins, because this bad boy is dripping with bbq sauce, onion straws and bacon."
        },
    ]
}



function Menu(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="Menu">
            <Header Img={PizzaHeader} Title={"Menu"}/>
            <div className="MenuItemContainer">
                <MenuItem Img={Pizza} Link="/Biggies-Pizza/Menu/Pizza" ButtonName='Pizza' itemData={pizzaData}/>
                <MenuItem Img={Sandwiches} Link="/Biggies-Pizza/Menu/Sandwiches" ButtonName='Sandwiches' itemData={sandwichData}/>
                {/* <MenuItem Img={Desserts} Link="/Biggies-Pizza/Menu/Desserts" ButtonName='Desserts'/> */}
                <MenuItem Img={Burger} Link="/Biggies-Pizza/Menu/Burgers" ButtonName='Burgers' itemData={burgerData}/>
            </div>
        </div>
    )
}

export default Menu