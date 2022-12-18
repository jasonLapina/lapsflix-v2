import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from '../components/movies/MovieList';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';

function Home() {
  const [movies, setMovies] = useState([]);
  const url = useSelector((state) => state.BASE_URL);
  const params = useSelector((state) => state.params);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${url}/discover/movie`, {
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

  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
}

export default Home;
