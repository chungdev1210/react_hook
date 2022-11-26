import React from "react";
import Content from "./Context/Content";
import DemoContext from "./Context/DemoContext";
import Home from "./Pages/Home";
import Player from "./Player/Player";
import Counter from "./Reducer/Counter";
//import ToDo from "./Effect/ToDo/ToDo";
import RefDemo from "./Refs/RefDemo";
//import Counter from "./State/Counter";
import Login from "./State/Login";
// import StateProvider from "./StateProvider/StateProvider";
// import ToDo from "./ToDo/ToDo";
// import DemoForm from "./Hook18/DemoForm/DemoForm";
import Product from "./memo/Product";
import ToDo from "./ToDoListApi/Components/ToDo/ToDo";
import StateProvider from "./ToDoListApi/Context/StateProvider";

function App() {
  return (
    <StateProvider>
      <ToDo />
    </StateProvider>
    // <Product />
  );
}

export default App;
