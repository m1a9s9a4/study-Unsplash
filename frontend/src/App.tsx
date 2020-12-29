import React, {useState} from 'react';
import Item from './components/Item';
import './App.css';
import Header from "./components/Navbar/Header";

type Image = {
  url: string;
  title: string;
}

const createImageType = (url: string, title: string) => {
  return {
    url,
    title
  }
}

const getInitialImages = () => {
  return [
    createImageType('https://unsplash.it/600/400?random', '1st item'),
    createImageType('https://unsplash.it/600/600?random', '2nd item'),
    createImageType('https://unsplash.it/720/460?random', '3rd item'),
    createImageType('https://unsplash.it/800/400?random', '4th item'),
    createImageType('https://unsplash.it/480/700?random', '5th item'),
    createImageType('https://unsplash.it/680/420?random', '6th item'),
    createImageType('https://unsplash.it/740/480?random', '7th item'),
    createImageType('https://unsplash.it/840/440?random', '8th item'),
    createImageType('https://unsplash.it/640/380?random', '9th item'),
    createImageType('https://unsplash.it/500/680?random', '10th item'),
  ];
}

const hasLetter = (original: string, find: string) => {
  return original.indexOf(find) >= 0;
}

const filterImagesByInput = (images: [Image], input: string) => {
  const originalImages = getInitialImages();
  if (!input) {
    return originalImages;
  }

  return originalImages.filter((image: Image) => {
    return hasLetter(image.title, input);
  })
}

const App: React.FC = () => {
  const [images, setImages] = useState(getInitialImages());
  const [keyword, setKeyword] = useState('');
  const handleSearch = () => {
  }

  const handleKeyup = (element: any) => {
    const input = element.target.value;
    setKeyword(input);
    //@ts-ignore
    setImages(filterImagesByInput(images, input));
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} handleKeyup={handleKeyup} />
      <div className="flexbox">
        {images.map((image, i) => (
          <Item title={image.title} imageSrc={image.url} index={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
