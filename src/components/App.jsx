import { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com/';
import css from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Btn } from './Btn/Btn';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';
import { ImageModal } from './ImageModal/ImageModal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const clientId = '3Zba2qXtOr_E0rNXT3JHdHzbbWgVSBtiHasHiQngoL8';
      const orientation = 'landscape';
      const numberPage = 12;

      if (!searchQuery) {
        return;
      }

      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              query: searchQuery,
              client_id: clientId,
              page: currentPage,
              orientation: orientation,
              per_page: numberPage,
            },
          }
        );
        const totalPages = response.data.total_pages;
        setTotalPages(totalPages);
        setImages(prevImages => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [currentPage, searchQuery]);

  const handleSearch = inputValue => {
    setImages([]);
    setCurrentPage(1);
    setSearchQuery(inputValue);
  };

  const handleAddPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const openModal = imageUrl => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.btn}>
      <SearchBar onSearch={handleSearch} />

      <Loader loading={loading} />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}

      {images.length > 0 && currentPage < totalPages && (
        <Btn handleAddPage={handleAddPage} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
};
