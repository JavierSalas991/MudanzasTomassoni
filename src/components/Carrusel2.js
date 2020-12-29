import React from 'react';
import Camion from '../img/camion de mudanzas.png'
import Camion2 from '../img/camion de mudanzas 2.png'

const Carrusel2 = () => {
  return (
   
    <div>
      <img src={Camion} alt="Mudanzas Tucuman" className="w-100 d-none d-md-block"/>

      <img src={Camion2} alt="Mudanzas Tucuman" className="w-100 d-md-none mt-0"/>
    </div>
  );
};

export default Carrusel2;