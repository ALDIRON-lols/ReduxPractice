"use client";
import { removeUser } from "@/app/redux/slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const RemoveUser = () => {
  const userData = useSelector((data) => data.usersData.users);
  const listColor = useSelector((data)=>data.usersData.color) ? "blue" : "red";
  const dispatch = useDispatch();
  return (
    <div style={{color: "black"}}>
      RemoveUserpage
      <div >
        {userData.map((item) => (
          <div
            className="text-xl"
            style={{
              backgroundColor: `${listColor}`,
              color: "white",
              marginBottom: "5px",
              borderRadius: "25px",
              padding: "6px",
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
                  padding: "2px",
                  color: "black"
                }}
                onClick={()=>dispatch(removeUser(item.id))}
              >
                Remove
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoveUser;
