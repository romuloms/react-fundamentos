import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  constructor(props) {
    // super é o construtor da classe pai no javascript
    super(props);   // boas praticas em react (repassar as props para o super)
    
    this.state = {
      theme: 'dark',
    };
  }

  render() {
    const { theme } = this.state

    console.log(this.state);

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout 
          onToggleTheme={() => {
            // o use state com class components pega o objeto this inteiro, por isso precisa usar
            // prevState.theme
            this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
          }}
          selectedTheme={theme}  
        />
      </ThemeProvider>
    );
  }
}

// function App() {
//   const [theme, setTheme] = useState('dark');

//   const firstRender = useRef(true);

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);
//   // useMemo: memorizar valores

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   }

//   useEffect(() => {
//     if (firstRender.current) {
//       firstRender.current = false;
//       return;
//     }

//     console.debug({ theme });
//   }, [theme]);

//   // useLayoutEffect(() => {
//   //   for (let i = 0; i < 1500; i++) {
//   //     console.debug(i);
//   //   }

//   //   // executado de forma sincrona, trava a aplicacao
//   // });

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout 
//         onToggleTheme={handleToggleTheme}
//         selectedTheme={theme}  
//       />
//     </ThemeProvider>
//   );
// };

export default App;
