const Player = (props) => {
  return (
    <>
      <progress className="matter-progress-linear"></progress>
      <p>
        Currently playing: <b>{props.valueRadio}</b>
      </p>
      <button className="matter-button-contained">PLAY</button>
      <button className="matter-button-contained">PAUSE</button>
      {props.favoriteRadios.includes(props.valueRadio) ? (
        <button
          className="matter-button-text"
          value={props.valueRadio}
          onClick={(e) => props.handleDeleteFavorite(e.target.value)}
        >
          ❤️
        </button>
      ) : (
        <button
          className="matter-button-text"
          value={props.valueRadio}
          onClick={(e) => props.handleAddToFavorites(e.target.value)}
        >
          🤍
        </button>
      )}
    </>
  );
};

export default Player;
