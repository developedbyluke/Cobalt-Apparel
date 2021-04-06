import GlobalStyle from './components/GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import React, { useState } from 'react';
import { siteData } from './SiteData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './pages/Product';
import CollectionPage from './pages/Collection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [siteState, updateSiteState] = useState(siteData);
  const [cartContent, updateCartContent] = useState(
    // JSON.parse(localStorage.getItem('cart'))
    []
  );
  const [collection, updateCollection] = useState(null);
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <GlobalStyle />
        <Header
          productData={siteState.products}
          navData={siteState.nav}
          cartContent={cartContent}
          updateCartContent={updateCartContent}
          updateCollection={updateCollection}
        />
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
              collection={collection}
              productData={siteState.products}
              updateCartContent={updateCartContent}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
