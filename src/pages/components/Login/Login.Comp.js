import React from 'react'
import {Row,Col,Form, Container, Button} from 'react-bootstrap'
import propTypes from 'prop-types';
export const Login = ({handleOnChange,handleOnSubmit,formSwitcher,email,pass}) => {
  return (
    <div >
        <Container>
            <Row>
                <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr></hr>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" value={email} name="email" placeholder='Enter Email' required onChange={handleOnChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value= {pass}name="password" placeholder='Enter password' onChange={handleOnChange} required/>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                    
                    
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
    handleOnChange:propTypes.func.isRequired,
    handleOnSubmit:propTypes.func.isRequired,
    formSwitcher:propTypes.func.isRequired,
    email :propTypes.string.isRequired,
    pass:propTypes.string.isRequired,

}