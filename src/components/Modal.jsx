import React from 'react'
// eslint-disable-next-line
import modalstyle from './styles/modal.style.css'
import metamask from '../assets/metamask logo.svg'
import walletconnect from '../assets/wallet connect.svg'
import close from '../assets/x.svg'


const Modal = ({setIsOpen}) => {
  return (
    <div className="modalbackgroundcontainer" onClick ={()=>setIsOpen(false)}>
            <div className='modal'>
                <div className="connectClose">
                    <p className="connect">Connect Wallet</p>
        
                    <img src={close} alt='close modal' className="closemodal" onClick ={()=>setIsOpen(false)}/>
                    
                </div>

                <p className="choose">Choose your preferred wallet:</p>

                <div className="metamaskbox">
                    <div className="metapluslogo">
                        <img src={metamask} alt='meta mask logo' />
                        <p className="meta">Metamask</p>
                    </div>
                    <p>&#62;</p>
                </div>

                <div className="walletConnectbox">
                    <div className="walletconnectlogo">
                        <img src ={walletconnect} alt='wallet connect logo' />
                        <p className="walletconnect">Connect Wallet</p>
                    </div>
                    <p>&#62;</p>
                </div>

            </div>
    </div>
  )
}

export default Modal