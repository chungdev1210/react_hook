export const rootReducer = (state, action) => {
  switch (action.type) {
    case "todos/add":
      return { ...state, todos: state.todos.concat(action.payload)};

    case "todos/delete":
      const data = [...state.todos];
      data.splice(action.payload, 1);
      return {
        ...state,
        todos: data,
      };
    
    case "todos/completed": 
      const dataCompleted = [...state.todos];
      dataCompleted[action.payload.index].isCompleted = action.payload.status
      return {
        ...state,
        todos: dataCompleted,
      }

    default:
      return state;
  }
};
