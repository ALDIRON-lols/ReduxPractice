"use client";
import { fetchApiUsers } from "@/app/redux/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ApiUsers = () => {
  const dispatch = useDispatch();
  const apiUsers = useSelector((data) => data.usersData.userApiData);

  useEffect(()=>{
    dispatch(fetchApiUsers());
  }, [])
  return (
    <div style={{ color: "black" }}>
        <h1 className="text-2xl">ApiUsersPage</h1>
      
      <h1 className="text-xl">API Users List</h1>
      {apiUsers.length &&
        apiUsers.map((item) => (
          <div key={item.id} className="text-sm" style={{ color: "black" }}>
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default ApiUsers;
