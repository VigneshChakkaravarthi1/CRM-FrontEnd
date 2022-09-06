import React from 'react'
import { Container ,Row,Col,Button} from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb/BreadCrumb.comp'
import { TicketTable } from '../components/ticket-table/TicketTable.comp'
import {Link} from 'react-router-dom'
import tickets from "./../../assets/data/dummy-tickets.json"

export const Dashboard= () => {
  return (
    <Container>
        <Row>
            <Col>
            <BreadCrumb page="Dashboard"/>
            
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2">
        <Link to="/add-ticket">
        <Button variant="info" style={{'fontSize':'2rem','padding':'10px 30px' }}>Add New Ticket</Button>
        </Link>
            
            </Col>
        </Row>
        <Row>
            <Col className="text-center mb-2">
                <div>Total tickets: 50</div>
                <div>Pending tickets: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mb-2">
                Recently Added Tickets
            </Col>
        </Row>
        <Row>
            <Col className="recent-ticket">
                <TicketTable tickets={tickets}></TicketTable>
            </Col>
        </Row>
    </Container>
  )
}
