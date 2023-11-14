import React from 'react'
import Paperz from '../assets/images/paperz.svg'
import Dorfus from '../assets/images/dorfus.svg'
import Martino from '../assets/images/martino.svg'
import Square from '../assets/images/square.svg'
import Gobona from '../assets/images/gobona.svg'

const Logo = () => {
  return (
         <div className="logo-container">
            <div className="-logo">
                <img src={Paperz} alt="Paperz"/>
                <img src={Dorfus} alt="Dorfus"/>
                <img src={Martino} alt="Martino"/>
                <img src={Square} alt="Square"/>
                <img src={Gobona} alt="Gobona"/>
            </div>
        </div>
    
  )
}

export default Logo