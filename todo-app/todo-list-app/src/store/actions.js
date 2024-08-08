export const Actions = {
  Add_Task: "Add_Task",
  Delete_Task: "Delete_Task",

  addTask: (task) => ({
    type: Actions.Add_Task,
    payload: task,
  }),

  deleteTask: (Taskid) => ({ type: Actions.Delete_Task, payload: Taskid })

};
