function Loader({ text = "Loading hotels..." }) {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default Loader;
