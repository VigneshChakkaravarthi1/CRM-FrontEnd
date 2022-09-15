import React from 'react'
import {Form, Row,Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {filterSearchTicket} from "./../../ticket-listing/TicketAction"
export const SearchForm= () => {
  const dispatch=useDispatch()
  const handleOnChange=(event)=>{
const {value}=event.target
dispatch(filterSearchTicket(value))

  }
  return (
    <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Search</Form.Label>
                <Col sm="9">
                <Form.Control name="searchStr"
                // value=
                onChange={handleOnChange} 
                placeholder='Search..'>
                    
                </Form.Control>
                
                </Col>
            </Form.Group>
        </Form>
  
    </div>
  )
}
SearchForm.propTypes={
   

}
