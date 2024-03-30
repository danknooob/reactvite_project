import React from 'react'

import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Marquee from './Marquee'
import About from './About'
import Eyes from './Eyes'
import Featured from './Featured'
import Cards from './Cards'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';
import NavServices from './NavServices'

const Home = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
       <Marquee/>
       <About/>
       <Eyes/>
       <Featured/>
       <Cards/>
       <Footer/>
    </div>
  )
}

export default Home
