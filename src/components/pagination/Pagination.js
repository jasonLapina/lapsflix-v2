import { useDispatch } from 'react-redux';
import classes from './Pagination.module.scss';
import { actions } from '../../store/store';
import { useState } from 'react';

function Pagination({ pages }) {
  const [base, setBase] = useState(1);
  const dispatch = useDispatch();
  const changePageHandler = (pageNum) => {
    // CHANGE PAGE PARAMS IN API REQUEST
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
    return (
      <span
        onClick={() => {
          changePageHandler(page);
        }}
        key={page}
      >
        {page}
      </span>
    );
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

  const jumpToLastPage = () => {
    // JUMPS PAGINATION TO LAST 10 AVAILABLE PAGES
    setBase(pages - 9);
  };

  const jumpToFirstPage = () => {
    // JUMPS PAGINATION TO FIRST 10 AVAILABLE PAGES
    setBase(1);
  };

  return (
    <div className={classes.pages}>
      {base > 2 && (
        <button onClick={jumpToFirstPage}>
          <ion-icon name='arrow-undo-outline' />
        </button>
      )}
      {base > 1 && (
        <button onClick={prevPageHandler}>
          <ion-icon name='chevron-back-outline' />
        </button>
      )}

      {renderPages}

      {!reachedMaxPage && pages > 10 && (
        <button onClick={nextPageHandler}>
          <ion-icon name='chevron-forward-outline' />
        </button>
      )}
      {pages > 11 && !reachedMaxPage && (
        <button onClick={jumpToLastPage}>
          <ion-icon name='arrow-redo-outline' />
        </button>
      )}
    </div>
  );
}
export default Pagination;
