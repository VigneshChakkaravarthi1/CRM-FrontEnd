import React from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import './AddTicketForm.css'
import propTypes from 'prop-types';


export const AddTicketForm = ({handleOnChange,handleOnSubmit,frmData,formDataError}) => {
  
    return (
    <div className='jumbotron add-new-ticket mt-3'>
        <h1 className='text-info text-center mb-5'>Add New Ticket</h1>
        { <Form  onSubmit={handleOnSubmit}>
            <Form.Group className ="mt-2 mb-3"as={Row}>
                <Form.Label column sm={3}>Subject</Form.Label>
                <Col sm={9}>
                <Form.Control
                name="subject"
                type="text"
                value={frmData.subject}
                placeholder='Enter Subject'
                onChange={handleOnChange}
                ></Form.Control>
                <Form.Text className="text-danger">{formDataError.subject&&"Subject is required"}</Form.Text>
                </Col>
            </Form.Group>
            <Form.Group className ="mt-2 mb-3" as={Row}>
                <Form.Label column sm={3}>Issue Found</Form.Label>
                <Col sm={9}>
                <Form.Control
                name="issueDate"
                type="date"
                value={frmData.issueDate}
                onChange={handleOnChange}
                ></Form.Control>
                </Col>
                </Form.Group>
                <Form.Group className ="mt-2 mb-3" as={Row}>
                <Form.Label column sm={3}>Details</Form.Label>
                <Col>
                <Form.Control
                name="detail"
                as="textarea"
                row="5"
                value={frmData.detail}
                onChange={handleOnChange}
                minLength="3"
                ></Form.Control>
                </Col>
            </Form.Group>
            <Button className="mt-2" type="submit" variant="info" block="true" onSubmit={handleOnSubmit}>
                Submit
            </Button>

        </Form> }
    </div>
  )
}

AddTicketForm.propTypes={
    handleOnChange:propTypes.func.isRequired,
    handleOnSubmit:propTypes.func.isRequired,
    frmData:propTypes.object.isRequired
}