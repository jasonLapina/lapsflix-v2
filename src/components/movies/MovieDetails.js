import Modal from '../UI/Modal';
import classes from './MovieDetails.module.scss';
function MovieDetails({ text, pic, title, onHideModal, rating, votes, date }) {
  let avgStyle;

  if (rating >= 8) {
    avgStyle = { backgroundColor: 'green' };
  }

  if (rating < 8 && rating > 4) {
    avgStyle = { backgroundColor: 'orange' };
  }
  if (rating < 5) {
    avgStyle = { backgroundColor: 'red' };
  }

  const releaseYear = date.slice(0, 4);
  const ratingPercentage = `${rating * 10}%`;

  return (
    <Modal onHideModal={onHideModal}>
      <div className={classes.modal}>
        <div className={classes.title}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.youtube.com/watch?v=aRsWk4JZa5k'
          >
            <img src={`https://image.tmdb.org/t/p/w500${pic}`} alt={title} />
          </a>
        </div>
        <div className={classes.details}>
          <h3>
            {title} ({releaseYear})
          </h3>
          <p className={classes.overview}>{text}</p>
          <p className={classes.rating}>
            <span style={avgStyle}>
              {ratingPercentage}
              <ion-icon name='star' />
            </span>
            <span className={classes.count}>
              {votes}
              <ion-icon name='people-outline' />
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}
export default MovieDetails;
