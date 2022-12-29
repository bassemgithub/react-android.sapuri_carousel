
import React from 'react';
import Carousel from './components/carousel';
import ImageContextProvider from './contexts/ImagesContext';

import './index.css'
function App() {
  return (
    <div className="App">
      <ImageContextProvider>
        <Carousel />
      </ImageContextProvider>
    </div>
  );
}

export default App;
