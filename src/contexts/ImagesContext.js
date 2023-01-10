import React, { Component, createContext, useState } from 'react';
import { v4 as uuid } from 'uuid'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'

export const ImageContext = createContext();

const ImageContextProvider = (props) => {
  const [images, setImages] = useState([
    { img: img1, title: "Couscous", description: "description", key: uuid() },
    { img: img2, title: "Couscous", description: "description", key: uuid() },
    { img: img3, title: "Lablebi", description: "description", key: uuid() },
    { img: img5, title: "Lablebi", description: "description", key: uuid() },
    { img: img6, title: "Kafteji", description: "description", key: uuid() },
    { img: img7, title: "Kafteji", description: "description", key: uuid() },


  ]
  );
  return (
    <ImageContext.Provider value={{ images }}>
      {props.children}
    </ImageContext.Provider>
  );
}


export default ImageContextProvider;