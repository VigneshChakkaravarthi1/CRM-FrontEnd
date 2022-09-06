import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb/BreadCrumb.comp'
import {AddTicketForm} from '../components/add-ticket-form/AddTicketForm.comp'
import {shortText} from '../../utils/validation'
export const AddTicket = () => {

    
    const  initialFormData={
        subject:"",
        issueDate:"",
        detail:""
    }
    const initialFormError={
        subject:"",
        issueDate:"",
        detail:""

    }
    const [formData, setFormdata]= useState(initialFormData)
    const [formDataError, setFormdataError]= useState(initialFormError)
    // setFormdataError(initialFormError)
    useEffect(()=>{},[formData])
    const handleOnChange=(event)=>{
        const {name,value}=event.target
        setFormdata({...formData,[name]:value})
        

    }
    const handleOnSubmit=async(event)=>
    {
       
        event.preventDefault();
        const isSubjectValid = await shortText(formData.subject)
        setFormdataError({
            ...formDataError,
            subject:!isSubjectValid
        })
        

        console.log("Form Request Received",formData)
    }
  return (
    <Container>
        <Row>
            <Col>
            <BreadCrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={formData}
            formDataError={formDataError}/>
            </Col>
        </Row>
    </Container>
  )
}
