"use client";
import { removeUser } from "@/app/redux/slice";
import { addTodo } from "@/app/redux/todoSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((data) => data.todosData.todo);
  return (
    <div style={{ color: "black", display: "flex", flexDirection: "column" }}>
      TodoList Page
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter your name"
        style={{
          border: "1px solid black",
          marginBottom: "20px",
          marginTop: "20px",
          borderRadius: "25px",
          width: "250px",
          padding: "7px",
          color: "black",
        }}
      />
      <button
        style={{
          border: "1px solid black",
          borderRadius: "25px",
          width: "200px",
          padding: "3px",
          color: "black",
        }}
        onClick={() => dispatch(addTodo(todo))}
      >
        Add Todos
      </button>
      <h1 className="text-2xl">TODOLIST</h1>
      {todoData.length && todoData.map((item) => (
        <div key={item.id} className="text-sm" style={{ color: "black" }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
