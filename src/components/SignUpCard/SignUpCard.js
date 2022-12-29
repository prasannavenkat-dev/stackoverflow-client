import React, { useState } from 'react'
import  {signUp}  from '../../actions/auth'

const SignUpCard = ({navigate,dispatch,getCurrentDateAndTime}) => {
 
 const [signUpData,setSignUpData] = useState({name:"",email:"",password:"",joinedOn:""})
 
 
function signUpHandler(event){
    setSignUpData((prev)=>{
        return {...prev,[event.target.name]:event.target.value}
    })
}

function signUpSubmit(){
    
    const {name,email,password} = signUpData;

    if(!name || !email || !password ){
        alert("Missing Input Fields")
        return;
    }

let joinedOn = new Date();
setSignUpData((prev)=>{
    return {name:prev.name.trim(),email:email.trim(),password:prev.password,joinedOn}
})

 dispatch(signUp({name:name.trim(),email:email.trim(),password,joinedOn},navigate));
  
}



    return (
        <>

            <div className="input-container">
                <label htmlFor="email">
                    <h1>Display Name</h1>
                </label>
                <input className="form-input" type="text" name='name' onChange={signUpHandler} value={signUpData.name} />
            </div>

            <div className="input-container">
                <label htmlFor="email">
                    <h1>Email</h1>
                </label>
                <input className="form-input" type="text" name="email"  onChange={signUpHandler} value={signUpData.email}/>
            </div>

            <div className="input-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label htmlFor="email">
                        <h1>Password</h1>
                    </label>
                </div>

                <input className="form-input"  name="password" type="password" style={{ marginBottom: '0' }} onChange={signUpHandler} value={signUpData.password} />
                <p style={{ overflowWrap: ' break-word', color: '#6a737c', fontSize: '12px' }}>
                    Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <input className="checkbox" type="checkbox" name="vehicle3" value="Boat" />
                <label className="checkbox-label" htmlFor="vehicle3">
                    Opt-in to receive occasional product updates, user research invitations, company announcements, and
                    digests.
                </label>
            </div>

            <div className="input-container">
                <button className="btn w-100" onClick={signUpSubmit}>Submit</button>
            </div>
            <div className="input-container" style={{ marginTop: '32px' }}>

                <p style={{ overflowWrap: ' break-word', color: '#6a737c', fontSize: '12px' }}>
                    By clicking “Sign up”, you agree to our <span className="link-text">terms of service</span>,{' '}
                    <span className="link-text">privacy policy</span> and <span className="link-text">cookie policy</span>{' '}
                </p>

            </div>
        </>

    )

}

export default SignUpCard