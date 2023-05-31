import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { 
      id: Math.random(),
      title: 'Titulo#01',
      subtitle: 'Subtitulo#01',
      likes: 10
    },
    { 
      id: Math.random(),
      title: 'Titulo#02',
      subtitle: 'Subtitulo#02',
      likes: 20
    },
    { 
      id: Math.random(),
      title: 'Titulo#03',
      subtitle: 'Subtitulo#03',
      likes: 100
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
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 20
      },
    ]);
  }

  return (
    <>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </ Header>

      <hr/>

      {posts.map(post => (
        <Post 
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}

    </>
  );
}

export default App;