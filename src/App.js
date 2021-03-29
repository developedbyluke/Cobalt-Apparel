import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import React, { useState } from "react";
import { siteData } from "./SiteData";

function App() {
  const [siteState, updateSiteState] = useState(siteData);
  return (
    <div className="App">
      <GlobalStyle />
      <Header navData={siteState.nav} />
      <Home sliderData={siteState.slider} productData={siteState.products} />
    </div>
  );
}

export default App;
