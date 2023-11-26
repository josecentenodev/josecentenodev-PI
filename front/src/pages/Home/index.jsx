import React, { useEffect } from "react";
import Drivers from "../../components/Drivers";
import Pagination from "../../components/Pagination";
import useDrivers from "../../hooks/useDrivers";
import usePagination from "../../hooks/usePagination";

const Home = () => {
  const { drivers, getDrivers } = useDrivers();
  const {
    currentPage,
    nextPage,
    prevPage,
    dataToRender,
    totalPages,
    setCurrentPage,
  } = usePagination(drivers, 9);

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <>
      <Drivers drivers={dataToRender} />
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
