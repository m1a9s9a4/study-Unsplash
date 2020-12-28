import React from 'react';
import Item from './components/Item';
import './App.css';

function App() {
  const images = [
    'https://unsplash.it/600/400?random',
    'https://unsplash.it/600/600?random',
    'https://unsplash.it/720/460?random',
    'https://unsplash.it/800/400?random',
    'https://unsplash.it/480/700?random',
    'https://unsplash.it/680/420?random',
    'https://unsplash.it/740/480?random',
    'https://unsplash.it/840/440?random',
    'https://unsplash.it/640/380?random',
    'https://unsplash.it/500/680?random',
  ];

  return (
    <div className="App">

      <div className="flexbox">
        {images.map((image, i) => (
          <Item title={i+1+" item"} imageSrc={image} index={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
