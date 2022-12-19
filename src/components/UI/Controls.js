import Filter from '../filter/Filter';
import Search from '../search/Search';
import classes from './Controls.module.scss';

function Controls({ onSearch, onFilter }) {
  return (
    <div className={classes.controls}>
      <Search onSearch={onSearch} />
      <Filter onFilter={onFilter} />
    </div>
  );
}
export default Controls;
