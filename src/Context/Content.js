import React, { useContext } from "react";
import { MyContext } from "./DemoContext";
import Header from "./Header";
import "./Content.scss";
export default function Content() {
  const { data, setMsg } = useContext(MyContext);

  const { msg, theme } = data;

  const handleClick = (data) => {
    setMsg(data);
  };

  return (
    <div className={`theme-${theme}`}>
      <Header />
      <h1>{msg}</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button
        onClick={(e) => {
          handleClick(e.target.innerText);
        }}
      >
        Change
      </button>
    </div>
  );
}
