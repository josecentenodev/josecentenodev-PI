import React, { useEffect } from "react";
import Drivers from "../../components/Drivers";
import Pagination from "../../components/Pagination";
import useDrivers from "../../hooks/useDrivers";
import usePagination from "../../hooks/usePagination";
import { useDispatch, useSelector } from "react-redux";
import { setAllDrivers } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { getDrivers } = useDrivers();
  const drivers = useSelector((state)=> state.allDrivers)
  const {
    currentPage,
    nextPage,
    prevPage,
    dataToRender,
    totalPages,
    setCurrentPage,
  } = usePagination(drivers, 9);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const drivers = await getDrivers();
        console.log('all drivers: ', drivers)

        dispatch(setAllDrivers(drivers))
      } catch (error) {
        console.log(error)
      }
    }
    fetchDrivers()
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
