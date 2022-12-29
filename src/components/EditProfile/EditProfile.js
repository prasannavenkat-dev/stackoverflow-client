import axios from 'axios'
import React, { useState } from 'react'
import "./EditProfile.css"
const EditProfile = ({ setUserInfo, setEditProfile, user, setUser }) => {

  const [newUserInfo, setNewUserInfo] = useState({ name: '' })

  async function saveProfile() {
    if (newUserInfo.name == "") {
      alert("Name Is Required!!")
    }
    else if(newUserInfo.name == user.data.name || newUserInfo.name.trim() == user.data.name ){
      alert("Changes Required!!")

    }
    else {

      let res = await axios.post("https://stackoverflow-server-16ku.onrender.com/editUser", { userId: user.data.userId, name: newUserInfo.name.trim() });
      if (res.status == 200) {
        setUserInfo(res?.data.data)
        window.sessionStorage.clear()
        window.sessionStorage.setItem("user", JSON.stringify({data:res?.data.data}));

        // setUser(res?.data)
      }
      alert(res?.data.message)
      
      cancelSave();

    }
  }

  function newUserHandler(event) {

    setNewUserInfo(prev => {
      return { [event.target.name]: event.target.value }
    })

  }

  function cancelSave() {
    setEditProfile(false)

  }

  return (
    <div>

      <div className='edit-header'>
        <h1>
          Edit your profile
        </h1>
      </div>

      <div className='sub-header'>
        Public information
      </div>

      <div className='input-edit-container'>

        <div className="input-container">
          <label htmlFor="email">
            <h1>Display Name</h1>
          </label>
          <input className="form-input" type="text" name='name' value={newUserInfo.name} onChange={newUserHandler} />
        </div>
      </div>

      <div className='edit-footer'>
        <button className="btn" onClick={() => saveProfile()} >
          Save profile
        </button>

        <button className="btn cancel-btn" onClick={() => cancelSave()}  >
          Cancel
        </button>
      </div>

    </div>
  )
}

export default EditProfile