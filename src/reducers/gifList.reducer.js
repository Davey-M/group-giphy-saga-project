
const gifList = (state = [], action) => {
  switch (action.type) {
      case 'GET_GIFS':
          return action.payload;
      default:
          return state;
  }
};   

export default gifList;