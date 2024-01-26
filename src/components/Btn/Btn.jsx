import css from './Btn.module.css';
export const Btn = ({ handleAddPage }) => {
  return (
    <>
      <button className={css.button} onClick={() => handleAddPage()}>
        Load more
      </button>
    </>
  );
};
