import classes from './Plan.module.scss';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import SubscriptionForm from './Form';
import { useState } from 'react';
function Plan({ title, features, price, onSubscribe }) {
  const [showForm, setShowForm] = useState(false);
  let planClass;
  if (title == 'Starter') planClass = classes.starter;
  else planClass = classes.binge;
  const renderFeatures = features.map((feat) => <li key={feat}>{feat}</li>);

  const clickHandler = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <Modal onHideModal={closeModal}>
          <SubscriptionForm title={title} />
        </Modal>
      )}
      <div className={`${planClass} ${classes.plan}`}>
        <h3>{title}</h3>
        <p className={classes.price}>{`$${price}/mo. Only`}</p>
        <Button onClick={clickHandler}>Subscribe</Button>
        <ul className={classes.feats}>{renderFeatures}</ul>
      </div>
    </>
  );
}
export default Plan;
