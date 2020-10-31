import React from 'react';
import {Carousel, Button} from 'react-bootstrap';
import Caja from '../img/caja.jpg'
import Camion from '../img/camion.jpg'
import Subiendo from '../img/subiendo.jpg'

const Carrusel2 = () => {
    return (
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 imagenCarrusel"
      src={Caja}
      alt="First slide"
    />
    <Carousel.Caption className="mb-4">
      <h2>MUDANZAS TOMASSONI</h2>
      <h3 className="mb-4">Desde 1960</h3>
      <button className="botonCarrusel mx-2">Mandanos un Mail</button>
      <button className="botonCarrusel mx-2">Llamanos</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 imagenCarrusel"
      src={Subiendo}
      alt="Third slide"
    />
    <Carousel.Caption className="mb-4">
    <h2 className="display-3">Mudanzas Tomassoni</h2>
      <h3 className="mb-4">Desde 1960</h3>
      <button className="botonCarrusel mx-2">Mandanos un Mail</button>
      <button className="botonCarrusel mx-2">Llamanos</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imagenCarrusel"
      src={Camion}
      alt="Third slide"
    />
    <Carousel.Caption className="mb-4">
    <h2>Mudanzas Tomassoni</h2>
      <h3 className="mb-4">Desde 1960</h3>
      <button className="botonCarrusel mx-2">Mandanos un Mail</button>
      <button className="botonCarrusel mx-2">Llamanos</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Carrusel2;