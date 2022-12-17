import Plan from './Plan';
import classes from './PricingPlans.module.scss';

function PricingPlans() {
  return (
    <div className={classes.plans}>
      <Plan title='Starter' price={25} />
      <Plan title='Binge HD' price={50} />
    </div>
  );
}

export default PricingPlans;
