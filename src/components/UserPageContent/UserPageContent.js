import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard'
import axios from "axios"
import "./UserPageContent.css"
import { Skeleton } from '@mui/material'
const UserPageContent = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {


    async function getAllUsers() {
      let res = await axios.get("https://stackoverflow-server-16ku.onrender.com/getAllUsers")
      if (res.status == 200) {
        setUsers(res.data.data)
      }
      else {
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
      {
        users.length ? <div className='grid-container'>

          {
            users.map(({ name, email, userId }, id) => <UserCard key={id} name={name} email={email} userId={userId} />)
          }

        </div> : <div className='default' style={{marginLeft:0}}>
          {(users.length == 0) &&
            <Skeleton variant="rectangular" width={"100%"} height={"50%"} sx={{ borderRadius: "3px",background:"hsl(210deg 8% 95%)" }} />

          }
        </div>
      }


    </div>
  )
}

export default UserPageContent