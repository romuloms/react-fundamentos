import React from 'react';
import Post from './Post';

// const tituloUm = 'Título UM';

function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr/>

      <Post 
        post={{
          title: 'Título UM',
          subtitle: 'Subtítulo da notícia 01',
        }}
      />
      <Post 
        post={{
          title: 'Título DOIS',
          subtitle: 'Subtítulo da notícia 02',
        }}
      />
    </>
  );
}

export default App;