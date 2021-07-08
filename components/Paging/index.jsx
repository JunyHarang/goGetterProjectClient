import React, { useState, useEffect } from 'react';
import '@components/Paging/styles.css';
import Pagination from 'react-js-pagination';

const Paging = ({ totalElements, currentPage, handlePageChange }) => {
  return (
    <div>
      <Pagination
        activePage={currentPage + 1}
        itemsCountPerPage={7}
        totalItemsCount={totalElements}
        pageRangeDisplayed={10}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Paging;
