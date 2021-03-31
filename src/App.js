import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import React, { useState } from "react";
import { siteData } from "./SiteData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [siteState, updateSiteState] = useState(siteData);
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <GlobalStyle />
        <Header navData={siteState.nav} />
        <Switch>
          <Route path="/" exact>
            <Home
              sliderData={siteState.slider}
              productData={siteState.products}
            />
          </Route>
          <Route path="/product/:id">
            <ProductPage productData={siteState.products} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
