import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const navItems = ['home', 'movies', 'shows', 'pricing'];
  const renderNavItems = navItems.map((item) => {
    const path = item === 'home' ? '' : `/${item}`;
    return (
      <li key={item}>
        <NavLink
          to={path}
          className={(data) => (data.isActive ? classes.active : '')}
          key={item}
        >
          {item}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <ul className={classes.navBar}>{renderNavItems}</ul>
    </nav>
  );
}

export default NavBar;
