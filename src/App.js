import { useState, createContext, useMemo } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import { ThemeContext } from './context';
import Toggle from "./components/Toggle";
//import { Routes, Route } from 'react-router-dom';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toggle ColorModeContext={ColorModeContext}/>
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

/*
  <div style={{ backgroundColor: darkMode ? "#222222" : "white", color: darkMode && "white" }}>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>
*/

export default App;
