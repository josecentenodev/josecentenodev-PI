const initialState = {
  allDrivers: [],
  filteredDrivers: [],
};

//[NOTA]: ten en cuenta que el id que recibes por payload es un string, y el id de los personajes es un número.

const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DRIVERS':
      return {
        ...state,
        allDrivers: action.payload,
        filteredDrivers: action.payload,
      };
    case 'APPLY_FILTERS':
      console.log(action.payload)
      let filteredDrivers = state.allDrivers
      const {teamName, sortOrder, includeDB, includeAPI} = action.payload
      if(teamName) {
        filteredDrivers = filteredDrivers.filter((driver) => {
          const teams = driver.teams || driver.Teams
          if (Array.isArray(teams)) {
            return teams.some((team) => team.nombre === teamName);
          } else {
            return driver.teams?.includes(teamName)
          }
        });
      }

      return {...state, 
        filteredDrivers
      }
    default:
      return state;
  }
};

export default driversReducer;
