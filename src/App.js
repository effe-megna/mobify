import React, { Component } from 'react';
import { ThemeProvider } from "styled-components"

import theme from "./themes"
import Home from './views/Home/Home';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
