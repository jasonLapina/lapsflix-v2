import Plan from './Plan';
import classes from './PricingPlans.module.scss';

function PricingPlans() {
  const features = {
    starter: [
      'up to 1080p Quality 💯',
      'Limited to 3 devices 📱',
      'You can only watch 🥲',
    ],
    binge: [
      'up to 4k Quality 😍',
      'Limited to 10 devices 💻',
      'You can teleport into the movie 😲',
    ],
  };

  return (
    <>
      <div className={classes.plans}>
        <Plan features={features.starter} title='Starter' price={5} />
        <Plan features={features.binge} title='Binge HD' price={9} />
      </div>
    </>
  );
}

export default PricingPlans;
