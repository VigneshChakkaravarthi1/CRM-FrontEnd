import React,{useEffect, useState} from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb/BreadCrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../components/message-history/Message.History'
import { UpdateTicket } from '../components/updateTicket/UpdateTicket.comp'
import { useParams } from 'react-router-dom'

export const Ticket = () => {
    const {tId} = useParams()

    const [message,setMessgae]=useState("")
    const [ticket ,setTicket]=useState(tickets[0])

    useEffect(( )=>{   for(var i=0;i<tickets.length;i++)
        {
            if(tickets[i].id ==tId)
            {
                setTicket(tickets[i])
                break
            }
        }},[message,tId])
    const handleOnChange=function(event){
        setMessgae(event.target.value)

    }
    const handleOnSubmit = function(event)
    {
        event.preventDefault()
        
    }
  return (
   <Container>
    <Row>
      
        <Col>
        <BreadCrumb page="Ticket"></BreadCrumb>
        </Col>
    </Row>
    <Row>
        <Col className='text-weight-bolder text-secondary'>
        <div className='subject'>Subject: {ticket.subject}</div>
        <div className='date'>Ticket Opened on :{ticket.addedAt}</div>
        <div className='status'>Status:{ticket.status}</div>
        </Col>
        <Col className='text-right'>
        <Button variant="outline-info">Close Ticket</Button>
        </Col>
    </Row>
    <Row className='mt-4'>
        <Col>
       { (ticket.history &&<MessageHistory msg={ticket.history}></MessageHistory>)}
        
        </Col>
    </Row>
    <hr/>
    <Row className='mt-4'>
        <Col>
        <UpdateTicket handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}></UpdateTicket>
        </Col>
    </Row>

   </Container>
  )
}
