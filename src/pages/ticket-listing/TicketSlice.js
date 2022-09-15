import {createSlice} from "@reduxjs/toolkit"

const initialState={
    tickets:[],
    isLoading:false,
    error:'',
    serachTicketList:[]
}
const ticketListSlice=createSlice({
   

    name:'ticketList',
    initialState,
    reducers:{
        fetchTicketLoading:(state)=>{
            state.isLoading=true
        },
        fetchTicketSuccess:(state,action)=>{
            state.tickets=action.payload
            state.serachTicketList= action.payload
            state.isLoading=false
        },
        fetchTicketFail:(state,{payload})=>{
            state.isLoading = false
            state.error=payload

        },
        searchTickets:(state,{payload})=>{
            console.log(state.tickets)
            state.serachTicketList= state.tickets.filter(row=>{
                
                if(!payload) {return row}
                console.log("THe subject is",row.subject,row.subject.toLowerCase().includes(payload))
                return row.subject.toLowerCase().includes(payload.toLowerCase())
            })

        }


    }
})

const {reducer,actions}=ticketListSlice
export default reducer
export const {fetchTicketLoading,fetchTicketSuccess,fetchTicketFail,searchTickets}=actions