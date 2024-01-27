import css from './ImageGallery.module.css';

export const ImageGallery = ({ items, onImageClick }) => (
  <ul className={css.containerLiTopi}>
    {items.map(item => (
      <li className={css.coneinerLiTop} key={item.id}>
        <div className={css.container}>
          <div className={css.hiden}>
            <img
              src={item.urls.small}
              alt={item.alt_description}
              onClick={() => onImageClick(item.urls.regular)}
            />
          </div>

          <div className={css.containerUl}>
            <ul className={css.containerUl}>
              <li className={css.textLi}>
                <p>Author photo: </p>
                <span>{item.user.name}</span>
              </li>
              <li className={css.textLi}>
                <p>Total photos by author: </p>
                <span>{item.user.total_photos}</span>
              </li>
              <li className={css.textLi}>
                <p>Likes:</p>
                <span>{item.likes}</span>
              </li>
              <li>
                <a
                  href={item.links.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open full size
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
