const Controls = (props) => {
  const listOfRadios = ["Radio 1", "Radio 2", "Radio 3", "Radio 4", "Radio 5"];

  return (
    <>
      {listOfRadios.map((radio, i) => (
        <div key={i}>
          <button
            className="matter-button-contained"
            value={radio}
            onClick={(e) => props.handlePlayRadio(e.target.value)}
          >
            {`Play ${radio}`}
          </button>
          {props.favoriteRadios.includes(radio) ? (
            <button
              className="matter-button-text"
              value={radio}
              onClick={(e) => props.handleDeleteFavorite(e.target.value)}
            >
              ❤️
            </button>
          ) : (
            <button
              className="matter-button-text"
              value={radio}
              onClick={(e) => props.handleAddToFavorites(e.target.value)}
            >
              🤍
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default Controls;
