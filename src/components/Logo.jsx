import React from 'react'
// eslint-disable-next-line
import logostyle from './styles/logo.style.css'
import mbtoken from '../assets/mbtoken.svg'
import metamask from '../assets/metamask.svg'
import opensea from '../assets/opensea.svg'


const Logo = () => {
  return (
    <div className='logos'>
      <img src={mbtoken} alt="mb token logo" />
      <img src={metamask} alt="metamask logo" />
      <img src={opensea} alt="opensea logo" />
    </div>
  )
}

export default Logo
