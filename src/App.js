import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
