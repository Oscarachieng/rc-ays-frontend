import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import ResourceCard from "./ResourceCard";



function Resources({resources, setResources}) {

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(resources.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(resources.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, resources]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % resources.length;
    setItemOffset(newOffset);
  };
   
  
  return (
    <div className="resources">
      <h1>Our Materials</h1>
      {currentItems.map((resource) => <ResourceCard key={resource.product_id} resource={resource} setResources={setResources}/>
      )}
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
  );
}

export default Resources;
