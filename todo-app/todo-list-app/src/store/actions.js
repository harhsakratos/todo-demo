export const Actions = {
  Add_Task: "Add_Task",

  addTask: (task) => ({
    type: Actions.Add_Task,
    payload: task,
  }),
};
