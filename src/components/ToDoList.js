import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ toDos, toggleToDo }) {
  return toDos.map((toDo) => {
    return <ToDo key={toDo.id} toggleToDo={toggleToDo} toDo={toDo} />;
  });
}
