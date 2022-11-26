import React, { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateProvider({ children }) {

   const [todos, setTodos] = useState([]);

   const dispatch = (data) => {
      setTodos(data)
   }

   return (
      <StateContext.Provider
         value={{
            data: todos,
            dispatch,
         }}
      >
         {children}
      </StateContext.Provider>
   );
}