import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Header = () => {
  return (
    <div className="nav">
      <span>My website:</span> <br />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/* <Link to="/users">User</Link> */}
      <NavLink to="/users">Users</NavLink>
      {/* <Link to="/posts">Posts</Link> */}
      <NavLink to="/posts">Posts</NavLink>
    </div>
  );
};

export default Header;
