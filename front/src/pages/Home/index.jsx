import React, { useEffect, useState } from "react";
import Drivers from "../../components/Drivers";
import Pagination from "../../components/Pagination";
import Filters from "../../components/Filters";
import useDrivers from "../../hooks/useDrivers";
import usePagination from "../../hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";
import { setAllDrivers } from "../../redux/actions";
import {
  DataToolsWrapper
} from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const { getDrivers } = useDrivers();
  const drivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const drivers = await getDrivers();
        dispatch(setAllDrivers(drivers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchDrivers();
  }, []);

  const {
    currentPage,
    nextPage,
    prevPage,
    dataToRender,
    totalPages,
    setCurrentPage,
  } = usePagination(drivers, 9);

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
