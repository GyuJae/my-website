import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/GlobalStyles";
import Header from "./Components/Header";
import Router from "./Components/Router";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [dark, setMode] = useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Header setDark={() => setMode(!dark)} dark={dark} />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
