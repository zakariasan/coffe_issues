import React from 'react'

interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
}
const Users = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return (
    <>
    <h1>Users</h1>
      <ul>
      {users.map((user)=> <li key={user.id}>{user.username}</li>)}
      </ul>
    </>
  )
}

export default Users
