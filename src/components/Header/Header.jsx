import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg - bg-red-200 mb-5">
      <nav>
        <ul className="flex flex-row gap-10 py-5 ps-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
