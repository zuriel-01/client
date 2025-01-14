//import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Choose from './components/Choose'
import Download from './components/Download'
import Footer from './components/Footer'


function App() {
  //const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar/>
    <Hero/>
    <Choose/>
   <Download/>
   <Footer/>
  </div>
      
   
  )
}

export default App
