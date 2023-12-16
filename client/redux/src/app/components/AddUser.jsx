"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeColor } from "../redux/slice";
import Link from "next/link";

const AddUser = () => {
  const [name, setName] = useState("");
  const isBlueColor = useSelector((data) => data.usersData.color);
  const dispatcher = useDispatch();
  const userDispatch = () => {
    dispatcher(addUser(name));
  };

  return (
    <div
      style={{
        padding: "20px",
        flexDirection: "column",
        display: "flex",
        minHeight: "200px",
        border: "1px solid blue",
      }}
    >
      <div className="text-2xl">AddUser</div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
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
        onClick={userDispatch}
      >
        Add User
      </button>
      <button
        style={{
          border: "1px solid black",
          borderRadius: "25px",
          width: "200px",
          padding: "3px",
          color: "black",
        }}
        onClick={() => dispatcher(changeColor(isBlueColor))}
      >
        Change list color
      </button>
      <Link style={{ color: "black" }} href="/pages/removeuser">
        Remove User Page
      </Link>
      <Link style={{ color: "black" }} href="/pages/todoList">
        Todo List Page
      </Link>
      <Link style={{ color: "black" }} href="/pages/apiusers">
        Api Users Page
      </Link>
    </div>
  );
};

export default AddUser;
