import React, { useState } from 'react'
import './entry.page.css'

import {Login} from "../components/Login/Login.Comp"
import { PasswordReset } from '../components/PasswordReset/PasswordReset.comp'

export const Entry = () => {
 


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [formLoad,setFormLoad]=useState('login')

const handleOnSubmit = (event)=>{
event.preventDefault()
if(!email || !password)
{alert("Hey Enter Email and password")}
// To submit form later
console.log("The email is",email,"The password is ",password)
}
const handleOnChange = (event)=>{
    const {name,value}=event.target
    if(name === 'email')
        {
            setEmail(value)
        }
    else if (name ==='password')
    {
    setPassword(value)
    }
    }

    const formSwitcher= formType=>{
        setFormLoad(formType)
    }

    const handleOnResetSubmit=(event)=>{
        event.preventDefault();
        //
    }
  return (
    <div className='entry-page bg-info'>
        
        <div className='jumbotron form-box'>
          {  (formLoad==='login')&&
        <Login
         handleOnChange={handleOnChange}
         handleOnSubmit={handleOnSubmit}
         email={email}
         pass={password}
         formSwitcher={formSwitcher}
        ></Login>}
        {(formLoad==="reset")&&
         <PasswordReset
         handleOnChange={handleOnChange}
         handleOnResetSubmit={handleOnResetSubmit}
         formSwitcher={formSwitcher}
         email={email}  
        ></PasswordReset>}
        </div>

    
    </div>
  )
}
