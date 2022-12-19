import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../components/movies/MovieList';
import Pagination from '../components/pagination/Pagination';
import Search from '../components/search/Search';
import { actions } from '../store/store';

function MoviesPage() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const url = useSelector((state) => state.BASE_URL);
  const path = useSelector((state) => state.path);
  const params = useSelector((state) => state.params);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${url}/${path}`, {
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
  }, [url, params, path]);

  const searchHandler = (value) => {
    dispatch(actions.search(value));
  };

  return (
    <>
      <Search onSearch={searchHandler} />
      <MovieList movies={movies} />
      <Pagination pages={20} />
    </>
  );
}
export default MoviesPage;
