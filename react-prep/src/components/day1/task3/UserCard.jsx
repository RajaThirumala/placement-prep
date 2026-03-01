import React from "react";
import { useState } from "react";
const UserCard = ({ userId, userName, userRole, promote }) => {
  const isSenior = userRole === "senior" ? true : false;
  return (
    <div>
      <h1>username:{userName}</h1>
      <h2>userrole:{userRole}</h2>
      <button
        className="bg-blue-600"
        onClick={() => {
          promote(userId);
        }}
        disabled={isSenior}
      >
        Promote
      </button>
    </div>
  );
};

export default UserCard;
