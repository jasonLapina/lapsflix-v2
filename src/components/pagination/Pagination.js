import { useDispatch } from 'react-redux';
import classes from './Pagination.module.scss';
import { actions } from '../../store/store';

function Pagination({ pages }) {
  const dispatch = useDispatch();
  const clickHandler = (pageNum) => {
    dispatch(actions.changePage(pageNum));
  };

  let pagesLength;

  if (pages > 10) {
    pagesLength = 10;
  }

  const renderPages = Array.from({ length: pagesLength }).map((_, i) => {
    return (
      <span
        onClick={() => {
          clickHandler(i + 1);
        }}
        key={i}
      >
        {i + 1}
      </span>
    );
  });

  return <div className={classes.pages}>{renderPages}</div>;
}
export default Pagination;
