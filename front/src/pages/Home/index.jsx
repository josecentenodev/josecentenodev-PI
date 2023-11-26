import React, { useEffect, useState } from "react";
import Drivers from "../../components/Drivers";
import useDrivers from "../../hooks/useDrivers";

const Home = () => {
  const { drivers, getDrivers } = useDrivers();
  // logica de paginacion TODO: Una vez realizada, intentar extraerla para que no sea responsabilidad del Home.
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 9;
  const totalPages = Math.ceil(drivers.length / driversPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * driversPerPage;
  const endIndex = startIndex + driversPerPage;

  const driversToRender = drivers.slice(startIndex, endIndex);

  useEffect(() => {
    getDrivers();
  }, [currentPage]);

  const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <Drivers drivers={driversToRender} />
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {pageButtons.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </>
  );
};

export default Home;
