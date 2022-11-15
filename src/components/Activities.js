import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import ACtivityCard from "./ACtivityCard";

function Activities({ activities }) {

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(activities.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(activities.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, activities]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % activities.length;
    setItemOffset(newOffset);
  };
   
  return (
    <div className="activities">
      <div className="right">
        <h3>Upcoming Activities/Events</h3>
        {currentItems.map((activity) => (
          <ACtivityCard key={activity.id} activity={activity} />
        ))}
           <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
      </div>
    </div>
  );
}

export default Activities;
