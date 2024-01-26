import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

//функцію для передачі значення інпуту під час сабміту форми
export const SearchBar = () => {
  const inputRef = useRef();
  const handleSumbit = evt => {
    evt.preventDefault();
    const inputValue = inputRef.current.value;

    if (!inputValue.trim()) {
      toast.error('Please enter a value');
      return;
    }

    evt.target.reset();
  };

  return (
    <>
      <header>
        <div className={css.conteiner}>
          <form onSubmit={handleSumbit}>
            <div className={css.inputContainer}>
              <input
                ref={inputRef}
                type="text"
                autoComplete="off"
                autoFocus="true"
                placeholder="Search images and photos"
                className={css.inputField}
              />
              <button type="submit" className={css.submitButton}>
                Search
              </button>
            </div>

            <Toaster containerStyle={{ marginTop: 40 }} />
          </form>
        </div>
      </header>
    </>
  );
};
