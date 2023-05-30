import React from 'react';

import Post from './Post';
import Header from './Header';

// const tituloUm = 'Título UM';

function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </ Header>

      <hr/>

      <Post 
        likes={20}
        post={{
          title: 'Título UM',
          subtitle: 'Subtítulo da notícia 01',
        }}
      />
      <Post 
        likes={10}
        post={{
          title: 'Título DOIS',
          subtitle: 'Subtítulo da notícia 02',
        }}
      />
      <Post 
        likes={50}
        post={{
          title: 'Título DOIS',
          subtitle: 'Subtítulo da notícia 02',
        }}
      />
    </>
  );
}

export default App;