import React from 'react'
import ChefImage from './chef.png'
import Square from './square.png'
import Oval from './Oval.png'
import './Section4.css'

const Section4 = () => {
  return (
   <section className='section-4'>
    <div className='oval-image'>
    <img src={Oval} alt="oval" />
   </div>
   <div>
    <img src={ChefImage} alt="chefimage" />
    </div>
    <div>
        <button className="section4-btn">Mapa</button>
      </div>
      <div  className='section4-main-text'>
        <h1>Sube tu fonda <br />
        a fonditas duplica
        tus ingresos </h1>
      </div>
      <div className="section4-sub-text">
        <p>Inscríbete a nuestra plataforma y comienza a generar en estos momentos de crísis </p>
      </div>
    <div section className='section4-sub-btn-div'>
        <button className='section4-sub-btn'>Buscar en mapa</button>
    </div>

   </section>
  )
}

export default Section4;