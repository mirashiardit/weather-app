function SearchInput(props) {
  return (
    <div className="search-input">
      <input
        type="text"
        onChange={(event) => {
          props.setCityName(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchInput;
