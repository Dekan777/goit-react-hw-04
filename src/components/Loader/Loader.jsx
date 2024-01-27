import css from './Loader.module.css';
import { TailSpin } from 'react-loading-icons'; // Подставьте правильный путь к вашей библиотеке для отрисовки спиннера

export const Loader = ({ loading }) => (
  <div className={css.spinner}>
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
);
