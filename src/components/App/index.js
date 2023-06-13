import React, { useState } from 'react';

import styles from './App.scss';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

function App() {
  const [posts, setPosts] = useState([
    { 
      id: Math.random(),
      title: 'Titulo#01',
      subtitle: 'Subtitulo#01',
      likes: 10,
      read: false,
      removed: true,
    },
    { 
      id: Math.random(),
      title: 'Titulo#02',
      subtitle: 'Subtitulo#02',
      likes: 20,
      read: true,
      removed: false,
    },
    { 
      id: Math.random(),
      title: 'Titulo#03',
      subtitle: 'Subtitulo#03',
      likes: 100,
      read: false,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      // é boa pratica usar o argumento prevState porque
      // evita o uso direto do array posts e evita
      // possíveis problemas na renderizacao do codigo
      ...prevState,
      {
        id: Math.random(),
        title: `Título#0${prevState.length + 1}`,
        subtitle: `Subtítulo#0${prevState.length + 1}`,
        likes: 20
      },
    ]);
  }
  
  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => post.id === postId
        ? { ...post, removed: true } // retorna um novo objeto mantendo as propriedades anteriores, só mudando o removed para true
        : post
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </ Header>

      <hr/>

      {posts.map(post => (
        <Post 
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </ThemeProvider>
  );
}

export default App;