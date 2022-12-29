
import React from 'react';
import './index.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
function App() {
  return (
    <div className="App">
      <OwlCarousel className='owl-theme' items='1' loop autoplay autoplayTimeout='2000'>
        {/*OwlCarousel className='owl-theme'  items='2' loop >*/}


        <div className="card">
          <img className="card-img-top" src={img1} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Couscous</h4>
            <p className="card-text">Tunisian masfouf is a sweet couscous with extra fine grains. It is usually prepared during the holy month of Ramadan for Suhur.</p>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={img2} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Couscous</h4>
            <section><ul className="grid">
              <li className="is-6 recipe-ingredients-item" data-id="2384">
                <span className="recipe-ingredients-item-label">500 g de semoule moyenne</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="1119">
                <span className="recipe-ingredients-item-label">Gigot de mouton ou Gigot de veau</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="784">
                <span className="recipe-ingredients-item-label">2 c. à s. de concentré de tomates</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="236">
                <span className="recipe-ingredients-item-label">1 oignon</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="147">
                <span className="recipe-ingredients-item-label">4 pommes de terre</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="179">
                <span className="recipe-ingredients-item-label">3 carottes</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="1225">
                <span className="recipe-ingredients-item-label">3 piments verts</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="228">
                <span className="recipe-ingredients-item-label">3 verres d'huile d'olive</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="2113">
                <span className="recipe-ingredients-item-label">Poudre de piment rouge</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="1618">
                <span className="recipe-ingredients-item-label">Mélange d'épices tunisien</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="671">
                <span className="recipe-ingredients-item-label">Sel ou sel fin</span>
              </li>
              <li className="is-6 recipe-ingredients-item" data-id="72">
                <span className="recipe-ingredients-item-label">Poivre</span>
              </li>
            </ul></section>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={img3} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Lablebi</h4>
            <p className="card-text">Il Lablabi è un piatto tunisino popolare. Si tratta di una zuppa di ceci, solitamente consumata a colazione durante la stagione fredda. È fondamentalmente un piatto per i poveri, che è diventato molto popolare negli ultimi decenni. Oltre a questo valore nutritivo, il lablabi è un pasto essenziale per qualsiasi tunisino in inverno</p>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={img5} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src={img6} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
          </div>
        </div>




        {/* 
          <div className="row">
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={img1} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={img2} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={img3} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
          </div>



          <div className="row">
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={img1} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={img2} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={img3} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
          </div>
*/}


      </OwlCarousel>
    </div>
  );
}

export default App;
