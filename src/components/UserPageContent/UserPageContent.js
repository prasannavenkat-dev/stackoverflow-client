import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard'
import axios from "axios"
import "./UserPageContent.css"
const UserPageContent = () => {

  const [users,setUsers] = useState([]);

useEffect(() => {
 

 async function getAllUsers(){
let res = await axios.get("https://stackoverflow-server-16ku.onrender.com/getAllUsers")
if(res.status==200){
  setUsers(res.data.data)
}
else{
  alert(res.data.message)
}
 }

 getAllUsers();


}, [])

   


  return (
    <div className='user-page-container w-100'>
      <div className='user-header'>
       <h1>
         Users
       </h1>
      </div>

       <div className='grid-container'>

       {
        users.map(({name,email,userId},id) => <UserCard key={id} name={name} email={email} userId={userId} /> )
       }
          
       </div>

    </div>
  )
}

export default UserPageContent