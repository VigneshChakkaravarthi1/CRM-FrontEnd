import React, { useEffect } from 'react'
import {Container,Row, Col,Button} from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb/BreadCrumb.comp'
import { SearchForm } from '../components/search-form/SearchForm.comp'
import { TicketTable } from '../components/ticket-table/TicketTable.comp'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAllTickets } from './TicketAction'

export const TicketList = () => {

    const dispatch = useDispatch()

   
 
  
    useEffect(()=>{

        dispatch(fetchAllTickets())
    },[])

  


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
            <SearchForm ></SearchForm>
            </Col>
        </Row>
<hr/>

<Row className="mt-10">
    <Col>
    <TicketTable ></TicketTable>
    </Col>
</Row>
    </Container>
  )
}
