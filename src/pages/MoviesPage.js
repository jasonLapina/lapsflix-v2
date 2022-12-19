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
  const [pages, setPages] = useState(1);
  const url = useSelector((state) => state.BASE_URL);
  const path = useSelector((state) => state.path);
  const params = useSelector((state) => state.params);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${url}/${path}`, {
        params,
      });
      const data = res.data;
      const movies = res.data.results;
      const totalPages = res.data.total_pages;
      const updatedMovies = movies.map((item) => ({
        title: item.title,
        pic: item.backdrop_path,
        text: item.overview,
        id: item.id,
        rating: item.vote_average,
        votes: item.vote_count,
        date: item.release_date,
      }));
      totalPages > 100 ? setPages(100) : setPages(totalPages);
      setMovies(updatedMovies);
    };
    fetchMovies();
  }, [url, params, path, pages]);

  const searchHandler = (value) => {
    dispatch(actions.search(value));
  };

  return (
    <>
      <Search onSearch={searchHandler} />
      <MovieList movies={movies} />
      <Pagination pages={pages} />
    </>
  );
}
export default MoviesPage;
