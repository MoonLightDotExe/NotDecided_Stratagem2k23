import React from 'react'

import Button from '../../../shared/Button'

import logo from '../../../assets/logo.png'
import './LogIn.css'

function LogIn() {
  return (
    <div className="container">

      <div className="logo_box">
        <img src={logo} alt="logo" className='logo' />
      </div>

      <div className="login_box">

        <div className="logIn">log in</div>
        
        <form action="" className='newForm'>
          <div className="form">
            <label>Username</label>
            <input type="text" id='user'/>
            <label className='password'>Password</label>
            <input type="password" id='pass'/>
            <div className="submit">
              <Button version='secondary' type='submit' isDisabled={true} >Submit</Button>
            </div>
          </div>
        </form>

      </div>      

    </div>
  )
}

export default LogIn