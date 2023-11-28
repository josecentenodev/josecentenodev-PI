import React, { useEffect, useState } from "react";
import Drivers from "../../components/Drivers";
import Pagination from "../../components/Pagination";
import Filters from "../../components/Filters";
import useDrivers from "../../hooks/useDrivers";
import usePagination from "../../hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";
import { setAllDrivers } from "../../redux/actions";
import { DataToolsWrapper } from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const { drivers } = useDrivers();

  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(setAllDrivers(drivers));
  }, [drivers]);

  const {
    currentPage,
    nextPage,
    prevPage,
    dataToRender,
    totalPages,
    setCurrentPage,
  } = usePagination(allDrivers, 9);

  return (
    <>
      <DataToolsWrapper>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <Filters />
      </DataToolsWrapper>
      
      <Drivers drivers={dataToRender} />
    </>
  );
};

export default Home;
