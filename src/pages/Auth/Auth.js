import React, { useState } from 'react';
import './Auth.css';

import logo from '../../assets/logo2.png';
import SignUpCard from '../../components/SignUpCard/SignUpCard';
import SignInCard from '../../components/SignInCard/SignInCard';
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
const Auth = ({getCurrentDateAndTime}) => {
  const [isSignUp, setIsSignUp] = useState(false);
 const navigate = useNavigate();
const dispatch = useDispatch();

  return (
    <div
      style={{
        flexGrow: 1,
        width: '100%',
        margin: 0,
        background: '#f1f2f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isSignUp && (
        <div className='signUp-description'>
          <h1 className="headline">Join the Stack Overflow community</h1>
          <div className="sub-text">Get unstuck — ask a question</div>
          <div className="sub-text">Unlock new privileges like voting and commenting</div>
          <div className="sub-text">Save your favorite tags, filters, and jobs</div>
          <div className="sub-text">Earn reputation and badges</div>
          <div className="helper-text">
            Collaborate and share knowledge with a private group for FREE.
            <br />
            <span className="link-text">Get Stack Overflow for Teams free for up to 50 users.</span>
          </div>
        </div>
      )}

      <div className="form-container">
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <img className="logo2" src={logo} alt="stackoverflowlogo" width="42" height="50" />
        </div>
        <div className='form' >
         {isSignUp ? <SignUpCard navigate={navigate} dispatch={dispatch} getCurrentDateAndTime={getCurrentDateAndTime}/> : <SignInCard navigate={navigate} dispatch={dispatch}/>}
        </div>

        <div style={{ textAlign: 'center', padding: '12px', fontSize: '13px' }}>
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button className="link-button" onClick={() => setIsSignUp(false)}>
                <span className="link-text">Sign in</span>
              </button>
            </>
          ) : (
            <>
              Dont Have an account?{' '}
              <button className="link-button" onClick={() => setIsSignUp(true)}>
                <span className="link-text">Sign up</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
