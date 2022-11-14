import React from 'react'
// eslint-disable-next-line
import herostyle from './styles/hero.style.css'
import img1 from '../assets/image 3.png'
import img2 from '../assets/image 4.png'
import img3 from '../assets/image 5.png'
import img4 from '../assets/image 6.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="heroText">
            <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <form action="">
                <input type="text" name="" id="" placeholder='Search for Location'/>
                <input type="submit" value="Search" />
            </form>
        </div>
        <div className="heroImages">
            <div className="imggroup1">
                <img src={img1} alt="home 1" />
                <img src={img2} alt="home 2" />
            </div>

            <div className="imggroup2">
            <img src={img3} alt="home 3" />
            <img src={img4} alt="home 4" />
            </div>
        </div>
      
    </div>
  )
}

export default Hero
