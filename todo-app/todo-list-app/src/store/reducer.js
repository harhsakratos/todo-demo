
const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Task": {
        return [...state,action.payload]
    }
    default:{
        throw Error('Unknown action: ' + action.type);
    }
  }
};

export default reducer;
