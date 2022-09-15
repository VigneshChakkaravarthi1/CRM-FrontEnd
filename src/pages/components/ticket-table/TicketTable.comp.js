import React from 'react'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const TicketTable = () => {

  const {serachTicketList,tickets,isLoading,error}=useSelector((state)=>state.tickets)
  if(isLoading) return <h3>Loading....</h3>
  if(error) return error
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                
                <th>Subjects</th>
                
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {serachTicketList.length>0 ? serachTicketList.map((row,index)=>
            <tr key={index}>
            <td>{row._id}</td>
            
            <td><Link to={`/ticket/${row._id}`}>{row.subject} </Link></td>
           
            <td>{row.status}</td>
            <td>{row.openAt}</td>
            </tr>

            ):( <tr><td colSpan="4" className='text-center'>No Tickets Found</td></tr>)
            }
        </tbody>
    </Table>
  )
}
TicketTable.propTypes={
  tickets:PropTypes.array
}