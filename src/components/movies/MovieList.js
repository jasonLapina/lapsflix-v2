import Movie from './Movie';
import classes from './MovieList.module.scss';
function MovieList({ movies }) {
  const renderMovies = movies.map((movie, i) => {
    const { title, text, pic } = movie;
    return <Movie title={title} text={text} pic={pic} key={i} />;
  });
  return <div className={classes.movies}>{renderMovies}</div>;
}
export default MovieList;
