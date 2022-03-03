
const getFav = (state = [], action) => {
  switch (action.type) {
      case 'GET_FAV':
          return action.payload;
      default:
          return state;
  }
};   

export default getFav;