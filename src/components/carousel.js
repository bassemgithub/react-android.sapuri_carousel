import React, { Component, useContext } from 'react';
import { ImageContext } from '../contexts/ImagesContext';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
  const { images } = useContext(ImageContext)
  return (
    <OwlCarousel className='owl-theme' items='1' loop autoplay autoplayTimeout='4000'>
      {images.map(image => {
        return (
          <div className="card" key={image.key}>
            <div className='wrapper-img'>
              <img className="card-img-top  img-responsive img-fluid responsiveClass" src={image.img} alt="Card image" />
            </div>
            <div className="card-body">
              <h4 className="card-title">{image.title}</h4>
              <p className="card-text">{image.description}</p>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
}


export default Carousel;