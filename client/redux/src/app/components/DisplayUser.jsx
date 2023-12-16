"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUser = () => {
  const userData = useSelector((data) => data.usersData.users);
  const listColor = useSelector((data) => data.usersData.color) ? "blue" : "red";
  const dispatch = useDispatch();
  return (
    <div
      className="text-2xl"
      style={{
        padding: "20px",
        flexDirection: "column",
        display: "flex",
        minHeight: "300px",
        border: "1px solid blue",
        color: "black",
      }}
    >
      DisplayUser
      {userData.map((item) => (
        <div
          key={item.id}
          className="text-xl"
          style={{
            backgroundColor: `${listColor}`,
            color: "white",
            marginBottom: "5px",
            borderRadius: "25px",
            padding: "6px",
            color: "white",
          }}
        >
          {item.name}
          <span>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                position: "sticky",
                left: "90%",
                borderRadius: "25px",
                color: "black",
                padding: "2px",
              }}
              onClick={() => dispatch(removeUser(item.id))}
            >
              Remove
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
