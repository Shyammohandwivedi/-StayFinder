import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getHotelById } from "../services/api.js";
import Loader from "../components/Loader.jsx";
import "../styles/hotel.css";

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getHotelById(id)
      .then((data) => setHotel(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader text="Loading hotel..." />;

  if (error || !hotel) {
    return (
      <p className="error">
        Failed to load hotel.
        <br />
        Please try again.
      </p>
    );
  }

  return (
    <div className="details">
      <Link to="/" className="back-link">
        ← Back to hotels
      </Link>

      <img className="details-img" src={hotel.thumbnail} alt={hotel.name} />

      <div className="details-header">
        <h1>{hotel.name}</h1>
        <span className="rating">★ {hotel.rating}</span>
      </div>

      <p className="details-location">📍 {hotel.location}</p>
      <p className="details-price">₹{hotel.price} / night</p>
      <p className="details-desc">{hotel.description}</p>

      {hotel.photos && hotel.photos.length > 0 && (
        <div className="gallery">
          {hotel.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`${hotel.name} ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelDetails;
