import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import AddProperty from './AddProperty';
import ManageProperty from './ManageProperty';

class Body extends Component {

    render() {
        return (
            <div className="App-intro">
                <Switch>
                <Route path="/AddProperty" component={AddProperty} />
                <Route path="/ManageProperty" component={ManageProperty} />
                <Redirect to="/" />
                </Switch>
            </div>
        );
    }
} 

export default Body;