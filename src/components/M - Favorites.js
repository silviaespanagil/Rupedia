//COMPONENTS
import NoFavorites from "./M-F - NoFavorites";

const Favorites = (props) => {
  if (props.favorites.length === 0) {
    return <NoFavorites isDark={props.isDark} />;
  }

  const favoriteQueens = props.favorites.map((favorite, index) => {
    const isFavorite = props.queens.find((queen) => favorite.id === queen.id);
    return (
      <li key={favorite.id} className="apiList__card">
        <button
          id={index}
          onClick={() => props.favQueen(favorite.id)}
          className="apiList__card--fav"
          aria-label="favorite icon button"
        >
          <i
            className={
              isFavorite
                ? "fas fa-lg fa-star apiList__card--fav-icon "
                : "far fa-lg fa-star apiList__card--fav-icon"
            }
          ></i>
        </button>

        <article className="apiList__card--content">
          <img
            src={favorite.image_url}
            alt={`Portrait of ${favorite.name}`}
            className="apiList__card--content-img"
          />
          <h2
            className={
              props.isDark
                ? "apiList__card--content-name"
                : "apiListD__card--content-name"
            }
          >
            {favorite.name}
          </h2>
        </article>
      </li>
    );
  });

  return (
    <section className="favorites">
      <h2 className="favorites__title">My top queens</h2>
      <ul className="favorites__list">{favoriteQueens}</ul>
    </section>
  );
};

export default Favorites;
