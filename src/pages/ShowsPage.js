import MovieList from '../components/movies/MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Controls from '../components/UI/Controls';
import Pagination from '../components/pagination/Pagination';
import { useDispatch } from 'react-redux';
import { actions } from '../store/store';

function ShowsPage() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const dispatch = useDispatch();
  const url = useSelector((state) => state.BASE_URL);
  const params = useSelector((state) => state.params);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${url}/tv/popular`, {
        params,
      });
      const movies = res.data.results;
      const totalPages = res.data.total_pages;
      const updatedMovies = movies.map((item) => ({
        title: item.name,
        pic: item.backdrop_path,
        text: item.overview,
        id: item.id,
        rating: item.vote_average,
        votes: item.vote_count,
        date: item.first_air_date,
      }));
      totalPages > 100 ? setPages(100) : setPages(totalPages);
      setMovies(updatedMovies);
    };
    fetchMovies();
  }, [url, params]);

  const searchHandler = (value) => {
    dispatch(actions.search(value));
  };
  const filterHandler = (id) => {
    dispatch(actions.getMoviesByGenre(id));
  };

  return (
    <>
      <Controls onFilter={filterHandler} onSearch={searchHandler} />
      <MovieList movies={movies} />
      <Pagination pages={pages} />
    </>
  );
}
export default ShowsPage;
