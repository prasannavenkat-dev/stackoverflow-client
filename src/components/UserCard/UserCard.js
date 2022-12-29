import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import "./UserCard.css"
const UserCard = ({name,email,userId}) => {
  return (
    <div className='user-card-container'>
      <Link style={{textDecoration:"none"}} to={`/users/${userId}/${name.split(" ").join("-")}`}>
        <Avatar backgroundColor="#009dff" color="white" width="48" height="48">
          <span style={{ fontSize: "25px" }}>
            {name.slice(0,1).toUpperCase()}
          </span>
        </Avatar>
      </Link>

      <div >
      <Link style={{textDecoration:"none"}}  to={`/users/${userId}/${name.split(" ").join("-")}`}>

          <div className='user-name link-text' style={{ fontSize: "15px" }}>
            {name}
          </div>
        </Link>

        <div style={{ fontSize: "12px", color: "#6A737C", marginLeft: "9px" }}>
          {email}
        </div>
      </div>

    </div>
  )
}

export default UserCard