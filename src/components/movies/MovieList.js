import Movie from './Movie';
import classes from './MovieList.module.scss';
function MovieList({ movies }) {
  const renderMovies = movies.map((movie, i) => {
    const { title, text, pic, id, rating, votes, date } = movie;
    return (
      <Movie
        key={`${title}${i}`}
        id={id}
        title={title}
        text={text}
        pic={pic}
        rating={rating}
        votes={votes}
        date={date}
      />
    );
  });
  return <div className={classes.movies}>{renderMovies}</div>;
}
export default MovieList;
