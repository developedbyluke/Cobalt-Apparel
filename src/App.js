import GlobalStyle from './components/GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import React, { useState, useEffect } from 'react';
import { siteData } from './SiteData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './pages/Product';
import CollectionPage from './pages/Collection';
import ScrollToTop from './components/ScrollToTop';
import Delivery from './components/Delivery';
import './styles/swiperStyles.scss';

function App() {
  const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
  const [siteState, updateSiteState] = useState(siteData);
  const [cartContent, updateCartContent] = useState(cartStorage);
  const [collection, updateCollection] = useState(null);
  const [isNavActive, updateIsNavActive] = useState(false);
  const [isNavButtonActive, updateIsNavButtonActive] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartContent));
  }, [cartContent]);
  console.log(isNavButtonActive);
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="App">
        <GlobalStyle />
        <Header
          isNavActive={isNavActive}
          updateIsNavActive={updateIsNavActive}
          productData={siteState.products}
          navData={siteState.nav}
          cartContent={cartContent}
          updateCartContent={updateCartContent}
          updateCollection={updateCollection}
          updateIsNavButtonActive={updateIsNavButtonActive}
          isNavButtonActive={isNavButtonActive}
        />
        <div className={isNavButtonActive ? 'blur' : ''}>
          <Switch>
            <Route path="/" exact>
              <Home
                sliderData={siteState.slider}
                productData={siteState.products}
              />
            </Route>
            <Route path="/product/:id">
              <ProductPage
                productData={siteState.products}
                updateCartContent={updateCartContent}
              />
            </Route>
            <Route path="/collection/:id">
              <CollectionPage
                updateIsNavActive={updateIsNavActive}
                collection={collection}
                productData={siteState.products}
                updateCartContent={updateCartContent}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
