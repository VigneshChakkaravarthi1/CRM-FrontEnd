
import {getAllTickets} from "./../../api/ticketApi"
import {fetchTicketLoading,fetchTicketSuccess,fetchTicketFail,searchTickets} from "./TicketSlice"
export const fetchAllTickets=()=>async(dispatch)=>
    {

        dispatch(fetchTicketLoading())
        try{
              //Fetch Data from API
            const result = await getAllTickets()

            console.log("The result is",result.data.result)
            dispatch(fetchTicketSuccess(result.data.result))
        }
        catch(error)
        {
            console.log(error)
            dispatch(fetchTicketFail(error.message))
        }
        
    }

   export  const filterSearchTicket=(searchStr)=>dispatch=>{
  
        dispatch(searchTickets(searchStr))
    }
