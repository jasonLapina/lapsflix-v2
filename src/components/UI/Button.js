import classes from './Button.module.scss';
function Button({ children, ...rest }) {
  return (
    <button
      className={`${classes.btn} ${rest.className}`}
      onClick={rest.onClick}
    >
      {children}
    </button>
  );
}

export default Button;
