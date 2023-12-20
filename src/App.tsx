import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Nav'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'


function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Biggies-Pizza/" element={ <Home /> } />
        <Route path="/Biggies-Pizza/Menu" element={ <Menu /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
