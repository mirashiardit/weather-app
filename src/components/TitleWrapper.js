function TitleWrapper(props) {
  return (
    <div className="weather-title">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default TitleWrapper;
