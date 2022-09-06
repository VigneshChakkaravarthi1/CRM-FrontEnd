import React, { useState,useEffect } from 'react'
import {Container,Row, Col,Button} from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb/BreadCrumb.comp'
import { SearchForm } from '../components/search-form/SearchForm.comp'
import { TicketTable } from '../components/ticket-table/TicketTable.comp'
import tickets from "./../../assets/data/dummy-tickets.json"
import {Link} from 'react-router-dom'


export const TicketList = () => {

    const [str,setStr]=useState("")
    const [dispTicket,setDispTicket]=useState(tickets)
  
    useEffect(()=>{
    searchTicket(str)
    },[str])

  

    const handleOnChange=(event)=>{
        var value =event.target.value
       
         setStr(value)

        console.log("Hnadle on change",str)
        //  searchTicket(str)
    }
    const searchTicket=(str)=>{
        if (str.length===0)
        {
            setDispTicket(tickets)
            return
        }
        
       var filteredTickets = tickets.filter(row=>row.subject.toLowerCase().includes(str.toLowerCase()))
    
        
        setDispTicket(filteredTickets)
    }
  return (
    <Container>
      
        <Row>
            <Col>
            <BreadCrumb page="TicketList"></BreadCrumb> 
            </Col>
        </Row>
        <Row>
            <Col>
            <Link to="/add-ticket">
            <Button variant="info">Add New Ticket</Button>
            </Link>
            </Col>
            <Col className='text-right'>
            <SearchForm handleOnChange={handleOnChange} str={str} ></SearchForm>
            </Col>
        </Row>
<hr/>

<Row className="mt-10">
    <Col>
    <TicketTable 
    tickets={dispTicket}></TicketTable>
    </Col>
</Row>
    </Container>
  )
}
