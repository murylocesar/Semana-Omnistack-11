import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logan from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component = { Logan }/>
                <Route path="/register"  component = { Register }/>
                
                <Route path="/profile"  component = { Profile }/>
                <Route path="/incidente/new"  component = { NewIncident }/>
            </Switch>
        </BrowserRouter>

    );
}