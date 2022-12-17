import classes from './Plan.module.scss';
import Button from '../UI/Button';
function Plan({ title, features, price }) {
  let planClass;
  if (title == 'Starter') planClass = classes.starter;
  else planClass = classes.binge;
  return (
    <div className={`${planClass} ${classes.plan}`}>
      <h3>{title}</h3>
      <p className={classes.price}>{`$${price}/mo.`}</p>
      <Button>Subscribe</Button>
    </div>
  );
}
export default Plan;
