// import './App.css';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { fetchArticlesWithTopic } from '../unsplash-api';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './App.module.css';

import axios from 'axios';

export const App = () => {
  // 1. Оголошуємо стан
  const [images, setImages] = useState([]);

  axios.defaults.baseURL = 'https://api.unsplash.com/';
  useEffect(() => {
    const fetchImages = async () => {
      const clientId = '3Zba2qXtOr_E0rNXT3JHdHzbbWgVSBtiHasHiQngoL8';
      const page = 1;
      const orientation = 'landscape';

      try {
        const response = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              query: 'audi',
              client_id: clientId,
              page: page,
              orientation: orientation,
            },
          }
        );

        // 2. Записуємо дані в стан
        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  console.log(images);

  return (
    <div className={css.container}>
      <SearchBar />

      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
};
