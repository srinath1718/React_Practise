import React, { Component} from 'react';
import { Switch, Route , BrowserRouter } from 'react-router-dom';
import C1 from './C1';
import C2 from './C2';
import Dashboard from './Dashboard';
import ReactState from './ReactState';
import EmployeeProfile from '../EmployeeInfo/Employee'
import Create from '../crud/Create';
import Index from '../crud/Index';
import Update from '../crud/Update';

class Home extends Component{

    render(){

        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/C1" component = { C1 } />
                <Route exact path="/C2" component = { C2 } />
                <Route exact path='/react-state' component = { ReactState} />
                <Route exact path='/employee' component = { EmployeeProfile } />
                <Route exact path='/create' component={Create} />
                <Route exact path="/index" component={Index} />
                <Route exact path="/update/:id" component={Update} />
            </Switch>
            </BrowserRouter>
        )



    }


}

export default Home