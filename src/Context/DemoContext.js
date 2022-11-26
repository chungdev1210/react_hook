import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function DemoContext({ children }) {
  const [data, setData] = useState({
    msg: "Tech2",
    posts: [],
    theme: "light",
  });

  const setMsg = (msg) => {
    const dataUpdate = { ...data };
    dataUpdate.msg = msg;
    setData(dataUpdate);
  };

  const setTheme = (theme) => {
    const dataUpdate = { ...data };
    dataUpdate.theme = theme;
    setData(dataUpdate);
  };

  return (
    <MyContext.Provider
      value={{
        data,
        setMsg,
        setTheme,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
