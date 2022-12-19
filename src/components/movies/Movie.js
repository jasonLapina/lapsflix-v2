import classes from './Movie.module.scss';
import Button from '../UI/Button';
import MovieDetails from './MovieDetails';
import { useState } from 'react';

function Movie({ title, pic, text, id, votes, rating, date }) {
  const [showInfo, setShowInfo] = useState(false);
  if (!pic) return;
  return (
    <div className={classes.movie}>
      <img src={`https://image.tmdb.org/t/p/w500${pic}`} alt={title} />
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.youtube.com/watch?v=aRsWk4JZa5k'
        className={classes.play}
      >
        <ion-icon name='play-outline' />
      </a>
      <Button
        onClick={() => {
          setShowInfo(true);
        }}
        className={classes.more}
      >
        <ion-icon name='information-circle-outline' />
        Info
      </Button>
      {showInfo && (
        <MovieDetails
          onHideModal={() => {
            setShowInfo(false);
          }}
          title={title}
          votes={votes}
          rating={rating}
          pic={pic}
          text={text}
          date={date}
        />
      )}
    </div>
  );
}

export default Movie;
