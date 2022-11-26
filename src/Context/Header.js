import React, { useContext } from "react";
import { MyContext } from "./DemoContext";

export default function Header() {
  const { data, setTheme } = useContext(MyContext);

  const { theme } = data;

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h1>Header</h1>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
}
