const initialState = {
  allDrivers: [],
};

//[NOTA]: ten en cuenta que el id que recibes por payload es un string, y el id de los personajes es un número.

const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DRIVERS':
      return {
        ...state,
        allDrivers: action.payload,
      };
    default:
      return state;
  }
};

export default driversReducer;
