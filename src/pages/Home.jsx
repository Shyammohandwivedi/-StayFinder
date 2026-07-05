import { useState, useEffect } from "react";
import { getHotels } from "../services/api.js";
import SearchBar from "../components/SearchBar.jsx";
import HotelList from "../components/HotelList.jsx";
import Loader from "../components/Loader.jsx";
import "../styles/home.css";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getHotels(query)
      .then((data) => setHotels(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="home">
      <h1 className="home-title">Explore Hotels</h1>

      <SearchBar
        value={search}
        onChange={setSearch}
        onSubmit={() => setQuery(search)}
      />

      {loading && <Loader />}

      {error && (
        <p className="error">
          Failed to load hotels.
          <br />
          Please try again.
        </p>
      )}

      {!loading && !error && <HotelList hotels={hotels} />}
    </div>
  );
}

export default Home;
