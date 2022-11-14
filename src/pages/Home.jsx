import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logo from '../components/Logo'
import Card from '../components/Card'
import Nfts from '../components/Nfts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Card/>
      <Nfts/>
      <Footer/>
    </div>
  )
}

export default Home
