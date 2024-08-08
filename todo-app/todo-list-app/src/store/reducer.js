import { nanoid } from "nanoid"


const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Task":
      let newTodo = action.payload;
      newTodo.dateCreated = new Date().toLocaleString();
      newTodo.dateUpdated = new Date().toLocaleString();
      newTodo._id = nanoid();
      return [...state, newTodo]

    case "Delete_Task":
      return state.filter((eachTodo) => eachTodo._id !== action.payload)

    default:
      throw Error('Unknown action: ' + action.type);

  }
};

export default reducer;
