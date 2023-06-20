import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);
  // useMemo: memorizar valores

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  // useEffect(() => {
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);

  useLayoutEffect(() => {
    for (let i = 0; i < 1500; i++) {
      console.debug(i);
    }

    // executado de forma sincrona, trava a aplicacao
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}  
      />
    </ThemeProvider>
  );
};

export default App;
