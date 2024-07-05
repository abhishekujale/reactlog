import React, { useState } from 'react'
import user_icon from '../assets/person.png'
import eamil_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import './LogSin.css';
import PasswordInput from './PasswordInput';



const LogSin = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className="sec-container">
        <div className='header'>
          <div className="text">{ action}</div>
        <div className="underline"></div>
        <div className="inputs">
          
            
              {action == "Login" ? <div></div> :
               <div className="input">
              <img src={user_icon} alt="" />
            <input type="text"  placeholder='Name'/>
            </div>}
            
        

          <div className="input">
            <img src={eamil_icon} alt="" />
            <input type="email" placeholder='Email' />
          </div>

          <div className="input">
             <img src={password_icon} alt="" />
            <PasswordInput></PasswordInput>
          </div>
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password ? <span>Click Here</span></div>}
       
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>
          Sign Up
        </div>
        <div className={action==="Sign Up"?"submit gray" : "submit"}onClick={() => { setAction("Login") }}>
          Login
        </div>
        </div>
        </div>
      </div>
  )
}

export default LogSin
