import React, { useState } from 'react'
import './entry.page.css'

import {Login} from "../components/Login/Login.Comp"
import { PasswordReset } from '../components/PasswordReset/PasswordReset.comp'

export const Entry = () => {
    const [formLoad,setFormLoad]=useState('login')


   
  return (
    <div className='entry-page bg-info'>
        
        <div className='jumbotron form-box'>
          {  (formLoad==='login')&&
        <Login></Login>}
        {(formLoad==="reset")&&
         <PasswordReset
        ></PasswordReset>}
        </div>

    
    </div>
  )
}
