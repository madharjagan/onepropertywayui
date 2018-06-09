import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
  
import AddProperty from './AddProperty';
import ManageProperty from './ManageProperty';
import AddClient from './AddClient';
import AddClientWorkFlow from './AddClientWorkFlow';
import ManageClient from './ManageClient';

class Body extends Component {
    render() {
        return (
            <div className="App-intro">
                <Switch>
                <Route path="/AddProperty/:propertyID?" component={AddProperty} />
                <Route path="/ManageProperty" component={ManageProperty} />
                <Route path="/AddClient" component={AddClientWorkFlow} />
                <Route path="/ManageClient" component={ManageClient} />
                <Redirect to="/" />
                </Switch>
            </div>
        );
    }
} 

export default Body;