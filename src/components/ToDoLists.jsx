import { list } from "postcss";
import React from "react";
const ToDoLists = (props) => {
  return (
    <>  
    <div className=" flex content-center align-middle justify-center">
    <i className="fa-solid fa-xmark m-[11px] rounded-full p-2 bg-purple-600 hover:bg-red-700" onClick={() => {
      // eslint-disable-next-line react/prop-types
      props.onSelect(props.id);
    }} ></i>
  <li className="text-green-500 text-3xl">{props.text}</li>
  </div>

  </>
  )
};

export default ToDoLists;