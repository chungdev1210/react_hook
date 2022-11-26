// import React, { useContext } from "react";
// import { StateContext } from "../StateProvider/StateProvider";
// import { addToDo, deleteToDo } from "../StateProvider/Actions/toDoActions";

// export default function Home() {
//    const { state, dispatch } = useContext(StateContext);

//    const getText = (length) => {
//       var result = "";
//       var characters =
//          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//       var charactersLength = characters.length;
//       for (var i = 0; i < length; i++) {
//          result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       return result;
//    };

//    const handleAddToDo = () => {
//       dispatch(addToDo(getText(20)));
//    };

//    const handleDelete = (id) => {
//       dispatch(deleteToDo(id));
//    };

//    const { todos } = state;

//    return (
//       <div>
//          <h1>ToDo</h1>
//          <div>
//             {todos.length > 0 &&
//                todos.map((todo, index) => (
//                   <p
//                      key={index}
//                      onClick={() => {
//                         handleDelete(index);
//                      }}
//                   >
//                      {todo}
//                   </p>
//                ))}
//          </div>
//          <button onClick={handleAdd}>Add</button>
//       </div>
//    );
// }
