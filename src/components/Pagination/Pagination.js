import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension)
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      nextClassName="btn"
      previousClassName="btn"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
