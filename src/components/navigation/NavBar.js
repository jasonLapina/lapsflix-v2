import classes from './NavBar.module.scss';

function NavBar() {
  const navItems = ['home', 'movies', 'shows', 'pricing'];
  const renderNavItems = navItems.map((item) => {
    const path = item === 'home' ? '/' : `/${item}`;
    return (
      <li key={item}>
        <a href={path} key={item}>
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
