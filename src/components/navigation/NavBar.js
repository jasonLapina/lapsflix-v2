import { useLocation, useParams } from 'react-router-dom';
import classes from './NavBar.module.scss';

function NavBar() {
  const params = useParams();
  const pathname = useLocation().pathname;

  console.log(params);
  const navItems = ['home', 'movies', 'shows', 'pricing'];

  const renderNavItems = navItems.map((item) => {
    const path = item === 'home' ? '/' : `/${item}`;
    const isActive = path.includes(pathname);
    return (
      <li key={item}>
        <a className={isActive ? classes.active : ''} href={path} key={item}>
          {item}
        </a>
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
