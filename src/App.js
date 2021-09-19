import Clock from "./Clock";
import MainContextProvider from "./contexts/MainContext";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemContext";
import { GlobalStyle } from "./GlobaleStyle";



function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <ThemeContextProvider>
    <MainContextProvider>
      <Clock />
    </MainContextProvider>
    </ThemeContextProvider> 
    </div>
  );
}

export default App;
