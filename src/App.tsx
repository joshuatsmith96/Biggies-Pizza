import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Nav'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import ItemPage from './pages/ItemPage/ItemPage'
import Contact from './pages/ContactUs/Contact'


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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
