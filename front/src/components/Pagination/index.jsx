import React from "react";
import { PaginationWrapper, PageButton, NavButton } from "./styles";

const Pagination = ({
  prevPage,
  nextPage,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const pageButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <PaginationWrapper>
      <NavButton
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        ⬅️
      </NavButton>
      {pageButtons.map((page) => (
        <PageButton
          key={page}
          onClick={() => setCurrentPage(page)}
          disabled={page === currentPage}
        >
          {page}
        </PageButton>
      ))}
      <NavButton
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        ➡️
      </NavButton>
    </PaginationWrapper>
  );
};

export default Pagination;
