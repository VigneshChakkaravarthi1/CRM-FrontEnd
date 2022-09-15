import {configureStore} from '@reduxjs/toolkit'
import  ticketsReducer  from './pages/ticket-listing/TicketSlice'
import loginReducer from "./pages/components/Login/LoginSlice"
import userReducer from "./pages/dashboard/userSlice"
const store=configureStore({
reducer:{
    tickets:ticketsReducer,
    login:loginReducer,
    user:userReducer
}
})

export default store