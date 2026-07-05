import HotelCard from "./HotelCard.jsx";

function HotelList({ hotels }) {
  if (hotels.length === 0) {
    return <p className="empty">No hotels found.</p>;
  }

  return (
    <div className="hotel-grid">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelList;
