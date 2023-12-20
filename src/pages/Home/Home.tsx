import './Home.css'

//Sections
import Hero from './Home-Components/Hero'
import Featured from './Home-Components/Featured'

//Images
import Pinneapple from '../../assets/Images/Menu/Pizzas/Pinneapple Pizza.png'
import Chickenbacon from '../../assets/Images/Menu/Pizzas/chicken bacon ranch.png'
import Spicy from '../../assets/Images/Menu/Pizzas/spicy pizza.png'

function Home() {

  return (
    <div className="Home">
      <Hero />
      <h1 className="Featured-Header">Featured</h1>
      <div className="FeaturedContainer">
      <Featured Img={Pinneapple} Header={"Pinneapple"} Text={"This controversial classic contains the basics; Pinneapple and pepperoni."}/>
      <Featured Img={Chickenbacon} Header={"Chicken Bacon Ranch"} Text={"Chicken bacon ranch contains... well... Chicken, Bacon and Ranch."}/>
      <Featured Img={Spicy} Header={"Spicy"} Text={"The Jalapeno pizza will burn your taste buds with its combination of jalapenos, ghost peppers, and chili oil. Topped with pepperoni, sausage and black olives"}/>
      </div>
    </div>
  )
}

export default Home
