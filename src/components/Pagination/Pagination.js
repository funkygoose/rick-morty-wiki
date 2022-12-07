import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return <ReactPaginate className="pagination justify-content-center" pageCount={info?.pages} />;
};

export default Pagination;
