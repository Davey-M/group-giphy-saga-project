
const gifList = (state = [], action) => {
  switch (action.type) {
      case 'LIST_GIFS':
          return action.payload;
      default:
          return state;
  }
};   

export default gifList;