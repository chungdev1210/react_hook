/*
  Action Creator
*/
export const addToDo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

export const deleteToDo = (index) => {
  return {
    type: "todos/delete",
    payload: index,
  };
};

export const completedToDo = (todo) => {
  return {
    type: "todos/completed",
    payload: todo,
  };
}
