import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <Link to={`/hotel/${hotel.id}`} className="card">
      <img className="card-img" src={hotel.thumbnail} alt={hotel.name} />
      <div className="card-body">
        <div className="card-top">
          <h3 className="card-name">{hotel.name}</h3>
          <span className="rating">★ {hotel.rating}</span>
        </div>
        <p className="card-location">📍 {hotel.location}</p>
        <p className="card-desc">{hotel.description}</p>
        <p className="card-price">₹{hotel.price} / night</p>
      </div>
    </Link>
  );
}

export default HotelCard;
