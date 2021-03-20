import GlobalStyle from './components/GlobalStyles';
import Home from './pages/Home';
import Slider from './components/Swiper';

function App() {
  return (
    <div className="App">
      <Slider />
      <GlobalStyle>
        <Home />
      </GlobalStyle>
    </div>
  );
}

export default App;
