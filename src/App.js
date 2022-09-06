import {Entry} from './pages/entry/Entry.Page'
import {DefaultLayout} from './layout/default-layout/DefaultLayout'
import "./App.css"
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/addTicketpage';
import { TicketList } from './pages/ticket-listing/TicketList.page';
import { Ticket } from './pages/ticket/Ticket.Page';
import { PrivateRoute } from './pages/components/private-route/PrivateRoute.comp';
import{BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {



  return (

    <div className="App">
    
  <Router>
    
    <Switch>
 
  <Route  exact path="/" >{ <Entry></Entry>}</Route>
  <PrivateRoute path="/dashboard">{<Dashboard></Dashboard>}</PrivateRoute>
  <PrivateRoute path="/add-ticket">{<AddTicket></AddTicket>}</PrivateRoute>
  <PrivateRoute path="/tickets">{<TicketList></TicketList>}</PrivateRoute>
  <PrivateRoute path="/ticket/:tId">{<Ticket></Ticket>}</PrivateRoute>
 
    </Switch>
 
    
  </Router>


   

    </div>
  );
}

export default App;
