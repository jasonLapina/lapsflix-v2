import { useRef, useState } from 'react';
import classes from './Search.module.scss';
function Search({ onSearch }) {
  const [value, setValue] = useState('');
  const searchHandler = (e) => {
    e.preventDefault();
    onSearch(value);
    setValue('');
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className={classes.searchBar} onSubmit={searchHandler}>
      <input
        value={value}
        onChange={changeHandler}
        placeholder='Search titles'
        type='text'
      />
      <button type='submit'>
        <ion-icon name='search-outline' />
      </button>
    </form>
  );
}

export default Search;
