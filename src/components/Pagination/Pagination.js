import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber ,setPageNumber }) => {
  return (
    <ReactPaginate pageCount={info?.pages == info.pages == 42}/>
  );
};

export default Pagination;
