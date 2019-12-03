import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {NoLayoutRoutes} from "router"
import routeEach from "utils/routeEach"
import {HashRouter as Router,Switch,Route} from "react-router-dom"

ReactDOM.render(
    <Router>
        <Switch>
            {routeEach(NoLayoutRoutes)}
            <Route render={()=>{
                return <App/>
            }}/>
            
        </Switch>
    </Router>, 
    
    document.getElementById('root'));


