import React from 'react'
import ManImage from './man.png'
import Square from './square.png'
import Oval from './Oval.png'
import './Section3.css'

const Section3 = () => {
  return (
   <section className='section-3'>
   <div className='square-image'>
    <img src={Square} alt="square" />
   </div>
   <div className='oval-image'>
    <img src={Oval} alt="oval" />
   </div>
   <div>
    <img src={ManImage} alt="manimage" />
    </div>
    <div>
        <button className="section3-btn">Mapa</button>
      </div>
      <div  className='section3-main-text'>
        <h1>Encuentra en <br /> 
        el mapa las mejores <br />
        fondas</h1>
      </div>
      <div className="section3-sub-text">
        <p>Encuentra las fondas cercanas por sí quieres hacer pick up <br />
        directo en las tiendas. </p>
      </div>
      <div className="section3-search">
      <input type="text" placeholder="Tu código postal" />
    </div>
    <div section className='section3-sub-btn-div'>
        <button className='section3-sub-btn'>Buscar en mapa</button>
    </div>

   </section>
  )
}

export default Section3;