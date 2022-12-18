import classes from './Header.module.scss';
import headerImg from '../../assets/header.webp';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <img src={headerImg} alt='family watching television' />
      <h1>
        Enjoy the classics or Catch up with the trend! <br /> We've got all
        kinds of movies and shows!
      </h1>
      <Button
        onClick={() => {
          navigate('/pricing');
        }}
        className={classes.btn}
      >
        Subscribe
      </Button>
    </header>
  );
}

export default Header;
