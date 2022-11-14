import React from 'react'
import nftstyle from './styles/nft.style.css'
import nft1 from '../assets/image 7.png'
import nft2 from '../assets/image 8.png'
import nft3 from '../assets/image 9.png'

const Nfts = () => {
  return (
    <div className='nft'>
        <div className='nftText'>
            <h2>Metabnb NFTs</h2>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            
            <button className='learnmore'>Learn more</button>
        </div>

        <div className='nftImages'>
            <img src={nft3} alt='nft 1' className='nftImg1'/>

            <img src={nft1} alt='nft 2' className='nftImg2'/>

            <img src={nft2} alt='nft 3' className='nftImg3'/>
        </div>


    </div>
  )
}

export default Nfts
