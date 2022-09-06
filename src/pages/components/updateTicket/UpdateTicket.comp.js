import React from 'react'
import { Form ,Button} from 'react-bootstrap'

export const UpdateTicket = ({handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Text>Please reply your mesage here </Form.Text>
        <Form.Control as="textarea" row="5"name="detail"
        
        onChange={handleOnChange}>

        </Form.Control>
        <div className='text-right mt-3 mb-3'>
        <Button variant="info" type="submit">Reply</Button>
        </div>
    </Form>
    
  )
}
