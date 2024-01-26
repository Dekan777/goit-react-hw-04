import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { TailSpin } from 'react-loader-spinner';
import css from './App.module.css';
import axios from 'axios';
import { Btn } from './Btn/Btn';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const clientId = '3Zba2qXtOr_E0rNXT3JHdHzbbWgVSBtiHasHiQngoL8';
      const page = 1;
      const orientation = 'landscape';
      const numberPage = 12;

      try {
        setError(false);
        setLoading(true);
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
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery]);

  const handleSearch = inputValue => {
    setSearchQuery(inputValue);
  };

  // const handleAddPage = () => {
  //   setPage(prevPage => prevPage + 1);
  //   setIsLoading(true);
  // };

  return (
    <div className={css.btn}>
      <SearchBar onSearch={handleSearch} />
      <div className={css.spiner}>
        {loading && (
          <TailSpin
            visible={true}
            height="50"
            width="50"
            color="#2da4c4"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
      {error && (
        <p className={css.error}>
          Whoops, something went wrong! Please try reloading this page!
        </p>
      )}
      {images.length > 0 && <ImageGallery items={images} />}
      <Btn />
    </div>
  );
};
