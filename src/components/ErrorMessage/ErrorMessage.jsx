import css from './ErrorMessage.module.css';

export const ErrorComponent = () => {
  return (
    <p className={css.error}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
};
