import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Receivement from '../pages/Receivement'
import Company from '../pages/Company'
import Investment from '../pages/Investment'

const AppStack = () =>{
    
    return(
    <Router>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/receive" component={Receivement}/>
            <Route path="/company" component={Company}/>
            <Route path="/investment" component={Investment}/>
            <Route path="*" component={NotFound} />
        </Switch>
        </Router>
    )
}

export default AppStack