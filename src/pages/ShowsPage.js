import MovieList from '../components/movies/MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ShowsPage() {
  const [movies, setMovies] = useState([]);
  const url = useSelector((state) => state.BASE_URL);
  const params = useSelector((state) => state.params);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${url}/tv/popular`, {
        params,
      });
      const data = res.data.results;
      const updatedMovies = data.map((item) => ({
        title: item.title,
        pic: item.backdrop_path,
        text: item.overview,
        id: item.id,
        rating: item.vote_average,
        votes: item.vote_count,
        date: item.release_date,
      }));
      setMovies(updatedMovies);
    };
    fetchMovies();
  }, [url, params]);
  return <MovieList movies={movies} />;
}
export default ShowsPage;
