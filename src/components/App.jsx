// import './App.css';
// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './App.module.css';
export const App = () => {
  return (
    <div className={css.container}>
      <SearchBar />
      <ImageGallery />
    </div>
  );
};
