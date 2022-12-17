import Movie from './Movie';
import classes from './MovieList.module.scss';
function MovieList({ movies }) {
  const renderMovies = movies.map((movie) => {
    const { title, text, pic, id, rating, votes, date } = movie;
    return (
      <Movie
        id={id}
        title={title}
        text={text}
        pic={pic}
        key={title}
        rating={rating}
        votes={votes}
        date={date}
      />
    );
  });
  return <div className={classes.movies}>{renderMovies}</div>;
}
export default MovieList;
