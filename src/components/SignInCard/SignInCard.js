import React, { useState } from 'react'
import { signIn } from '../../actions/auth'

const SignInCard = ({ navigate, dispatch }) => {
  const [signInData, setSignInData] = useState({ email: "", password: "" })

  function signInHandler(event) {
    setSignInData(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })

  }

  function signInSubmit() {

    if (signInData.email === "" && signInData.password === "") {
      alert("Email and Password is required");
      return;
    }

    else if (signInData.password === "") {
      alert("Password is Required")
      return
    }
    else if (signInData.email === "") {
      alert("Email Required");
      return;
    }

    dispatch(signIn(signInData, navigate));

  }



  return (
    <>
      <div className="input-container">
        <label htmlFor="email">
          <h1>Email</h1>
        </label>
        <input className="form-input" name="email" type="text" onChange={signInHandler} value={signInData.email} />
      </div>

      <div className="input-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label htmlFor="email">
            <h1>Password</h1>
          </label>
          <span className="link-text">Forgot Password?</span>
        </div>

        <input className="form-input" name="password" type="password" onChange={signInHandler} value={signInData.password} />

      </div>

      <div className="input-container">
        <button className="btn w-100" onClick={signInSubmit}>Submit</button>
      </div>
    </>
  )
}

export default SignInCard