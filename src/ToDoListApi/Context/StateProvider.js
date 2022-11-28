import React, { createContext, useState, useEffect } from "react";
import config from '../Components/Config/Config.json'
const { SERVER_API } = config;
const todoApi = SERVER_API + '/todos';

export const StateContext = createContext();

export default function StateProvider({ children }) {

   const [todos, setTodos] = useState([]);
   
   useEffect( () => {
      getTodos();
   }, [])

   const getTodos = async () => {
      const response = await fetch(todoApi);
      const todos = await response.json();
      if (response.ok) {
         setTodos(todos)
      }
   } 

   const addTodo = async (todo) => {
      const response = await fetch(todoApi, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(todo),
     });

     if (response.ok) {
         const data = await response.json();
         let dataUpdate = { ...todos }
         dataUpdate = todos.concat(data)
         setTodos(dataUpdate);
     }
   }

   const removeToDo = async (id) => {
      const response = await fetch(todoApi + "/" + id, {
         method: "DELETE",
      });
      if (response.ok) {
         const doLists = [...todos];
         const index = doLists
            .map((x) => {
               return x.id;
            })
            .indexOf(id);
         doLists.splice(index, 1);
         setTodos(doLists)
      }
   }

   const completeToDo = async (id, checkedStatus) => {
      const response = await fetch(todoApi + "/" + id, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            isCompleted: checkedStatus,
         }),
      });
      if (response.ok) {
         getTodos();
      }
   }

   return (
      <StateContext.Provider
         value={{
            data: todos,
            addTodo,
            removeToDo,
            completeToDo,
         }}
      >
         {children}
      </StateContext.Provider>
   );
}