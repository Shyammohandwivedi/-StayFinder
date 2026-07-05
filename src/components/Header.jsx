import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          🏨 StayFinder
        </Link>
        <span className="tagline">Find your perfect stay</span>
      </div>
    </header>
  );
}

export default Header;
