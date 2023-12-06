import React, { useState } from "react";
import {
  PaginationWrapper,
  PageButton,
  NavButton,
  PageInput,
  ConfirmButton,
  Wrapper,
  InputWrapper,
} from "./styles";

const Pagination = ({
  prevPage,
  nextPage,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  //   const pageButtons = Array.from(
  //     { length: totalPages },
  //     (_, index) => index + 1
  //   );
  const [inputPage, setInputPage] = useState("");

  const handlePageInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleConfirmPage = () => {
    const newPage = parseInt(inputPage, 10);

    if (!isNaN(newPage) && newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setInputPage("");
    } else {
      alert("Número de página inválido");
    }
  };
  return (
    <Wrapper>
      <PaginationWrapper>
        <NavButton
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          {currentPage === 1 ? `⛔` : `👈🏻`}
        </NavButton>
        {`${currentPage} /${totalPages}`}
        <NavButton
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          {currentPage === totalPages ? `⛔` : `👉🏻`}
        </NavButton>
      </PaginationWrapper>

      <InputWrapper>
        <PageInput
          type="text"
          placeholder="N° de Página"
          value={inputPage}
          onChange={handlePageInputChange}
        />

        <ConfirmButton onClick={handleConfirmPage}>Ir</ConfirmButton>
      </InputWrapper>
    </Wrapper>
  );
};

export default Pagination;
