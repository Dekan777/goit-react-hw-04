export const ImageGallery = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <div>
          <img src={item.urls.small} alt={item.alt_description} />
          <div>
            <ul>
              <li>
                <p>Author photo:</p>
                <strong>{item.user.name}</strong>
              </li>
              <li>
                <p>Total photos by author: </p>
                {item.user.total_photos}
              </li>
              <li>
                <p>Likes: </p>
                {item.likes}
              </li>
              <li>
                <a
                  href={item.links.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
