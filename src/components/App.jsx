import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const clientId = '3Zba2qXtOr_E0rNXT3JHdHzbbWgVSBtiHasHiQngoL8';
      const page = 1;
      const orientation = 'landscape';
      const numberPage = 12;

      try {
        const response = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              query: searchQuery,
              client_id: clientId,
              page: page,
              orientation: orientation,
              per_page: numberPage,
            },
          }
        );

        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [searchQuery]);

  const handleSearch = inputValue => {
    setSearchQuery(inputValue);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
};
