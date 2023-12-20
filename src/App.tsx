import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Nav'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'


function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Biggies-Pizza/" element={ <Home /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
