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

const filterImagesByTitle = (images: [Image], title: string) => {
  console.log(title);
  if (!title) {
    return images;
  }

  return images.filter((image: Image) => {
    return image.title.indexOf(title) > 0;
  })
}

const App: React.FC = () => {
  const [images, setImages] = useState(getInitialImages());
  const [keyword, setKeyword] = useState('');
  const handleSearch = () => {
  }

  const handleKeyup = (element: any) => {
    setKeyword(element.target.value);
    //@ts-ignore
    setImages(filterImagesByTitle(images, keyword));
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
