import React, { createContext, useReducer } from "react";
import { rootReducer } from "./rootReducer";

export const StateContext = createContext();

export default function StateProvider({ children }) {
   const initialState = {
      todos: []
   };

   const [state, dispatch] = useReducer(rootReducer, initialState);

   return (
      <StateContext.Provider
         value={{
            state,
            dispatch,
         }}
      >
         {children}
      </StateContext.Provider>
   );
}
