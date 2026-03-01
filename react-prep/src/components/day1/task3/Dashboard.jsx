import React from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
const Dashboard = () => {
     const [users, setUsers] = useState([
    { id: 1, name: "Raja", role: "junior" },
    { id: 2, name: "Bindu", role: "junior" },
    { id: 3, name: "Divya", role: "junior" },
  ]);
  const promote = (id) => {
    console.log("clicked");
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: "senior" } : user,
    );
    setUsers(updatedUsers);
  };
  return (
      <>
      {users.map((user) => {
        return (
            <UserCard
              key={user.id}
              userId={user.id}
              userName={user.name}
              userRole={user.role}
              promote={promote}
            ></UserCard>
        );
      })}
    </>
  )
}

export default Dashboard