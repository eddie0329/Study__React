import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ position: 'fixed', right: '100px' }}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;