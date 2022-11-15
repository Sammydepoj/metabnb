import React from 'react'
// eslint-disable-next-line
import footerstyle from './styles/footer.style.css'

import footerlogo from '../assets/footerlogo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logoSocial">
            <img src={footerlogo} className='footerlogo' alt='black and white meta logo' />
            <div className="socials">
            <i className="fa-brands fa-facebook fa-1x"></i>
            <i className="fa-brands fa-instagram fa-1x"></i>
            <i className="fa-brands fa-twitter fa-1x"></i>
            </div>
            <p> &copy; 2022 Metabnb</p>

        </div>
        <div className="community">
            <h4>Community</h4>
            <p className='footerLinks'>NFT</p>
            <p className='footerLinks'>Tokens</p>
            <p className='footerLinks'>Landlords</p>
            <p className='footerLinks'>Discord</p>

        </div>
        <div className="places">
            <h4>Places</h4>
            <p className='footerLinks'>Castle</p>
            <p className='footerLinks'>Form</p>
            <p className='footerLinks'>Beach</p>
            <p className='footerLinks'>Learn more</p>
        </div>
        <div className="aboutUs">
            <h4>About Us</h4>
            <p className='footerLinks'>Roadmap</p>
            <p className='footerLinks'>Creator</p>
            <p className='footerLinks'>Carrier</p>
            <p className='footerLinks'>Contact-us</p>

        </div>
      
    </div>
  )
}

export default Footer
