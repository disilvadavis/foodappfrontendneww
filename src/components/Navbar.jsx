import { Link } from 'react-router-dom';
const Header = () => (
    <header>
      <img src={logo} alt="Logo" />
    </header>
  );
  
  

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
