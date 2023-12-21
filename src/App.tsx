import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Nav'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import ItemPage from './pages/ItemPage/ItemPage'
import Contact from './pages/ContactUs/Contact'
import About from './pages/AboutUs/About'


function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Biggies-Pizza/" element={ <Home /> } />
        <Route path="/Biggies-Pizza/Menu" element={ <Menu /> } />
        <Route path="/Biggies-Pizza/Menu/Pizza" element={ <ItemPage /> } />
        <Route path="/Biggies-Pizza/Menu/Sandwiches" element={ <ItemPage /> } />
        <Route path="/Biggies-Pizza/Menu/Burgers" element={ <ItemPage /> } />
        <Route path="/Biggies-Pizza/Contact" element={ <Contact /> } />
        <Route path="/Biggies-Pizza/About" element={ <About /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
