import React from 'react';

import Post from './Post';
import Header from './Header';

// const tituloUm = 'Título UM';

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <Post 
          post={{
            title: 'Passado via children',
            subtitle: 'Subtítulo children',
          }}
        />
      </ Header>

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