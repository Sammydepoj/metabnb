import React from 'react'
import settings from '../assets/placetostayimages/settings.svg'
// eslint-disable-next-line
import filterstyle from './styles/filter.style.css'

const Filter = () => {
  return (
    <div className='filterhouses'>
        <ul className='filterlist'>
            <li className='placesfilter'>Restaurant</li>
            <li className='placesfilter'>Cottage</li>
            <li className='placesfilter'>Castle</li>
            <li className='placesfilter'>Fantastic City</li>
            <li className='placesfilter'>Beach</li>
            <li className='placesfilter'>Cabins</li>
            <li className='placesfilter'>Off-Grid</li>
            <li className='placesfilter'>Farms</li>
        </ul>
         <select name="" id="">
          <option className='placesfilter' value="Restaurant">Restaurant</option>
          <option className='placesfilter' value="Cottage">Cottage</option>
          <option className='placesfilter' value="Castle">Castle</option>
          <option className='placesfilter' value="Fantastic">Fantastic</option>
          <option className='placesfilter' value="Beach">Beach</option>
          <option className='placesfilter' value="Cabins">Cabins</option>
          <option className='placesfilter' value="Off-grid">Off-Grid</option>
          <option className='placesfilter' value="Farms">Farms</option>
        </select>
        <div className="location">
            <label>Location</label>
            <img src={settings} alt='settings icon' />
        </div>
       
        
      
    </div>
  )
}

export default Filter
