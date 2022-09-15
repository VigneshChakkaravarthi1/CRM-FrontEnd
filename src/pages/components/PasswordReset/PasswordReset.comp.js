import React from 'react'
import {Row,Col,Form, Container, Button} from 'react-bootstrap'
import propTypes from 'prop-types';
export const PasswordReset = ({handleOnChange,handleOnResetSubmit,formSwitcher,email}) => {
  return (
    <div >
        <Container>
            <Row>
                <Col>
                <h1 className='text-info text-center'>Password Reset</h1>
                <hr></hr>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" value={email} name="email" placeholder='Enter Email' required onChange={handleOnChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Reset Password</Button>
                    </Form.Group>
                    
                    
                    
                </Form>
                <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#" onClick={()=>{formSwitcher('login')}}>Login</a>
                </Col>
            </Row>

        </Container>
    </div>
  )
}
PasswordReset.propTypes={

}