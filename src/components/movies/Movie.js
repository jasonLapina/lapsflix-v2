import classes from './Movie.module.scss';

function Movie({ title, pic, text }) {
  return (
    <div>
      <img
        className={classes.img}
        src={`https://image.tmdb.org/t/p/w500${pic}`}
        alt={title}
      />
    </div>
  );
}

export default Movie;
