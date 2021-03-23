import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import Home from './pages/Home';
import React, {useState} from 'react';
import { siteData } from './SiteData';


function App() {
const [siteState, updateSiteState] = useState(siteData)
  return (
    <div className="App">
      <GlobalStyle />
      <Nav navData={siteState.nav}/>
      <Home sliderData={siteState.slider}/>
    </div>
  );
}

export default App;
