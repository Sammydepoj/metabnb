import React,{useState} from 'react'
// eslint-disable-next-line
import navstyle from './styles/navbar.style.css'
import logo from '../assets/metalogo.svg'
import Modal from '../components/Modal'
import {Link} from 'react-router-dom'


const showMenu = () => {
    let nav=document.getElementById('nav');
    if (nav.style.display==='block'){
      nav.style.display='none';
    }
      else{
        nav.style.display='block';
      }
    }

  const closeMenu =() => {
    let nav=document.getElementById('nav');
    nav.style.display='none';
  }  

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
      <img src={logo} alt="metabnb logo" />

      <nav>
        <ul className='navs' id='nav'>
          <li>
            <Link to = '/' >Home</Link>           
          </li>
          <li>
            <Link to = '/placetostay' > Place to stay </Link>
          </li>
          <li>
            <Link to = '/' >NFTs</Link>
          </li>
          <li>
            <Link to ='/'>Community</Link>
          </li>
          <li className='close' onClick={closeMenu}>&times;</li>
        </ul>
      </nav>

      <button onClick={()=>setIsOpen(true)}>Connect Wallet</button>
      <button id='menuButton' onClick = {showMenu}>Menu</button>

      {isOpen && <Modal setIsOpen={setIsOpen} />}

    </div>
  );
}

export default Navbar
