import { useDispatch } from 'react-redux';
import classes from './Pagination.module.scss';
import { actions } from '../../store/store';
import { useState } from 'react';

function Pagination({ pages }) {
  const [base, setBase] = useState(1);
  const dispatch = useDispatch();
  const clickHandler = (pageNum) => {
    dispatch(actions.changePage(pageNum));
  };
  let pagesLength;
  if (pages > 10) {
    pagesLength = 10;
  } else {
    pagesLength = pages;
  }
  const renderPages = Array.from({ length: pagesLength }).map((_, i) => {
    const page = base + i;
    return <span key={page}>{page}</span>;
  });

  const reachedMaxPage = base + 9 === pages;

  const nextPageHandler = () => {
    if (reachedMaxPage) return;
    setBase((prev) => prev + 1);
  };
  const prevPageHandler = () => {
    if (base === 1) return;
    setBase((prev) => prev - 1);
  };
  return (
    <div className={classes.pages}>
      {base > 1 && (
        <button onClick={prevPageHandler} className={classes.ctrl}>
          <ion-icon name='chevron-back-outline' />
        </button>
      )}

      {renderPages}

      {!reachedMaxPage && pages > 10 && (
        <button onClick={nextPageHandler} className={classes.ctrl}>
          <ion-icon name='chevron-forward-outline' />
        </button>
      )}
    </div>
  );
}
export default Pagination;
