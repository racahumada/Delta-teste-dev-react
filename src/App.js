import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { theme } from './configs/theme';
import { Main } from './pages/index';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Main />
      </Router>
    </ThemeProvider>
  );
}

export default App;
