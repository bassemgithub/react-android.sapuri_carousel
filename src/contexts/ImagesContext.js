import React, { Component, createContext } from 'react';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'

export const ImageContext = createContext();
class ImageContextProvider extends Component {
  state = {
    images :{img1, img2, img3, img5, img6, img7}
  }
  render() { 
    return (
      <ImageContext.Provider value={{...this.state}}>
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
 
export default ImageContextProvider;