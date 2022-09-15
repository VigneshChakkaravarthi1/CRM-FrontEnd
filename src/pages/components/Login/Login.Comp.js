import React from 'react'
import {Row,Col,Form, Container, Button, Spinner, Alert} from 'react-bootstrap'
import propTypes from 'prop-types';
import {loginPending,loginSuccess,loginFailure} from "./LoginSlice"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {userLogin} from '../../../api/userApi.js'
import { useHistory } from 'react-router-dom';
import {getUserProfile} from "./../../dashboard/userAction"
export const Login = () => {
    const history=useHistory()
    const dispatch = useDispatch()
    const {isLoading,isAuth,error}=useSelector(state=>state.login)
    const [formLoad,setFormLoad]=useState('login')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    

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
    const handleOnSubmit=async(event)=>{

        event.preventDefault()
        if(!email || !password)
        {
            return alert("Fill up the form")
        }

        dispatch(loginPending())

        try{
            const result = await userLogin({email,password})
            if(result.status==="error")
            {
                dispatch(loginFailure(result.message))
            }
            else
            {
                history.push("/dashboard")
                dispatch(loginSuccess())
                dispatch(getUserProfile())
            }
            
        }
        catch(error)
        {
            dispatch(loginFailure(error))
        }
    }
  return (
    <div >
        <Container>
            <Row>
                <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr></hr>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" value={email} name="email" placeholder='Enter Email' required onChange={handleOnChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value= {password}name="password" placeholder='Enter password' onChange={handleOnChange} required/>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                    {isLoading && <Spinner variant="primary" animation='border'></Spinner>}
                    
                    
                </Form>
                <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" onClick={()=>formSwitcher('reset')}>Forget Password ?</a>
                </Col>
            </Row>

        </Container>
    </div>
  )
}
Login.propTypes={
   

}