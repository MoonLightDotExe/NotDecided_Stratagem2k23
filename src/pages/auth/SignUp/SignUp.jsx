import React from 'react'

import logo from '../../../assets/logo.png'
import './SignUp.css'

function SignUp() {
  return (
    <>
        <div className="signUp">
          <div className="logo_box">
            <img src={logo} alt="logo" className='logo' />
          </div>
            <form action="">
                <div className="input-group">
                <span className="sign">SIGN UP</span>
                    <label id='user'> Username </label>
                    <input type="text" id='user' placeholder='Enter Username' />
                    <label id='pass'> Password </label>
                    <input type="password" id='user' placeholder='Enter Password' />
                    <label id='email'> Email </label>
                    <input type="email" id='user' placeholder='Enter Email' />
                    <label id='phone'> Phone No. </label>
                    <input type="phone" id='user' placeholder='Enter Phone Number' />
                </div>
            </form>
        </div>
    </>
  )
}

export default SignUp