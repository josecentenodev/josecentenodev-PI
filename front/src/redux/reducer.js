const initialState = {
  allDrivers: [],
  filteredDrivers: [],
};

const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DRIVERS":
      return {
        ...state,
        allDrivers: action.payload,
        filteredDrivers: action.payload,
      };
    case "APPLY_FILTERS":
      const getNameFromDriver = (driver) =>
        driver.nombre
          ? driver.nombre
          : driver.name.forename
          ? driver.name.forename
          : "";
      const getDobFromDriver = (driver) =>
        driver.fechaNacimiento || driver.dob || "";
      const getValueToCompare = (driver, filter) => {
        switch (filter) {
          case "name":
            return getNameFromDriver(driver);
          case "dob":
            return getDobFromDriver(driver);
          default:
            return "";
        }
      };

      let filteredDrivers = [...state.allDrivers];
      // hago el destructuring del objeto que creé con los filtros/ordenamientos
      const { teamName, sortOrder, includeDB, includeAPI } = action.payload;

      // Filtro de equipos
      if (teamName) {
        filteredDrivers = filteredDrivers.filter((driver) => {
          const teams = driver.teams || driver.Teams;
          if (Array.isArray(teams)) {
            return teams.some((team) => team.nombre === teamName);
          } else {
            return driver.teams?.includes(teamName);
          }
        });
      }

      // Ordenar por nombre:
      const { name, sorting } = sortOrder;
      if (name && sorting) {
        filteredDrivers = filteredDrivers.sort((a, b) => {
          const nameA = getValueToCompare(a, name);
          const nameB = getValueToCompare(b, name);

          if (sorting === "ASC") {
            return nameA.localeCompare(nameB);
          } else if (sorting === "DESC") {
            return nameB.localeCompare(nameA);
          }

          return 0;
        });
      }

      // Filtrar por origen, si el ID es un numero entonces viene de la API y si tiene uuid entonces es de la DB.
      if (!includeAPI) {
        filteredDrivers = filteredDrivers.filter(
          (driver) => typeof driver.id !== "number"
        );
      }

      if (!includeDB) {
        filteredDrivers = filteredDrivers.filter(
          (driver) => typeof driver.id === "number"
        );
      }

      return { ...state, filteredDrivers: filteredDrivers };
    case "GET_DRIVERS_BY_NAME":
      const driversByName = action.payload;
      return { ...state, filteredDrivers: driversByName };
    default:
      return state;
  }
};

export default driversReducer;
