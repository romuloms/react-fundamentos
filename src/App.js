import React from 'react';

import Post from './Post';
import Header from './Header';

const posts = [
  { 
    title: 'Titulo#01',
    subtitle: 'Subtitulo#01',
    likes: 10
  },
  { 
    title: 'Titulo#02',
    subtitle: 'Subtitulo#02',
    likes: 20
  },
  { 
    title: 'Titulo#03',
    subtitle: 'Subtitulo#03',
    likes: 100
  },
];

function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </ Header>

      <hr/>

      {posts.map(post => (
        <Post 
          key={post.title}
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