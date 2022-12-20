import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from './Filter.module.scss';

function Filter({ onFilter }) {
  const [filterValue, setFilterValue] = useState('Popular');
  const [showGenres, setShowGenres] = useState(false);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const res = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=b294078ac9e5deee42e81781ed53a00c&language=en-US'
      );
      const updatedGenres = Object.values(res.data).flat();

      setGenres(updatedGenres);
    };

    fetchGenres();
  }, []);

  const changeGenreHandler = (name, id) => {
    setFilterValue(name);
    onFilter(id);
  };
  const renderGenres = genres.map((genre) => {
    const { name, id } = genre;
    return (
      <span
        onClick={() => {
          changeGenreHandler(name, id);
        }}
        key={name}
      >
        {name}
      </span>
    );
  });
  const showGenresHandler = () => {
    setShowGenres((prev) => !prev);
  };

  return (
    <div className={classes.filter}>
      <button onClick={showGenresHandler} className={classes.value}>
        {filterValue}
        <ion-icon name='chevron-down-outline' />
      </button>
      {showGenres && <div className={classes.genres}>{renderGenres}</div>}
    </div>
  );
}
export default Filter;
