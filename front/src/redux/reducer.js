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
      const {teamName, sortOrder, includeDB, includeAPI} = action.payload
      return {...state, 
        filteredDrivers: []
      }
    default:
      return state;
  }
};

export default driversReducer;
