const Favorites = (props) => {
  return (
    <ul>
      {props.favoriteRadios.map((radio, i) => (
        <li key={i}>
          {radio}
          <button
            className="matter-button-text"
            value={radio}
            onClick={(e) => props.handleDeleteFavorite(e.target.value)}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Favorites;
