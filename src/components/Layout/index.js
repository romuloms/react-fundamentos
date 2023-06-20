import React, {  useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme}) {
  useEffect(() => {
    // é necessario fazer essa funcao pro eventListener pra depois poder
    // remover ele; e é necessario remover o eventListener pra poupar
    // memoria e evitar memory leaks
    function handleScroll() {
      console.debug('scrolou');
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header 
        onToggleTheme={onToggleTheme} 
        selectedTheme={selectedTheme}  
      />
      <PostsList />
      <Footer 
        onToggleTheme={onToggleTheme} 
        selectedTheme={selectedTheme}  
      />
    </>
  );
}
