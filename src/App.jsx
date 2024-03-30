import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import NavServices from './components/NavServices'
import NavOurWork from './components/NavOurWork'
import NavAboutUs from './components/NavAboutUs'
import NavInsights from './components/NavInsights'
import NavContacts from './components/NavContacts'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path='/Services' element={<NavServices/>}/>
      </Routes>
      <Routes>
        <Route exact path='/OurWork' element={<NavOurWork/>}/>
      </Routes>
      <Routes>
        <Route exact path='/AboutUs' element={<NavAboutUs/>}/>
      </Routes>
      <Routes>
        <Route exact path='/Insights' element={<NavInsights/>}/>
      </Routes>
      <Routes>
        <Route exact path='/Contact' element={<NavContacts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
