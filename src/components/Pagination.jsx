import React from "react";

function Pagination({ page, totalCount, perPage, handlePageChangeClick }) {
  console.log(page, totalCount, perPage, "inside paginations");

  return (
    <div>
      <button
        disabled={page === 1}
        onClick={() => handlePageChangeClick(page - 1)}
      >
        Prev
      </button>

      <button
        disabled={page >= Math.ceil(totalCount / perPage)}
        onClick={() => handlePageChangeClick(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
