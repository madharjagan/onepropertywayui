/*global google*/
import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';

class AddClient extends Component {

  constructor(props) {
    super(props);
    this.propsClientData = {};  
    this.options = {
      place: 'tl',
      message: (
          <div>
              <div>
                  Alert !!!
              </div>
          </div>
      ),
      type: "success",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    }
    this.addClient = this.addClient.bind(this)
  }

  componentDidMount() {
  }

  addClient() {
    this.propsClientData["clientname"] = this.refs["clientname"].value;
    this.propsClientData["firstname"] = this.refs["firstname"].value;
    this.propsClientData["lastname"] = this.refs["lastname"].value;
    this.propsClientData["email"] = this.refs["email"].value;
    this.propsClientData["phone"]  = this.refs["phone"].value;
    this.propsClientData["fax"] = this.refs["fax"].value; 
    console.log(JSON.stringify(this.propsPropertyData));
    fetch('http://ec2-34-229-126-140.compute-1.amazonaws.com:8081/addClient/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.propsClientData),
  });
    this.options.message = "Client Added Successfully !!!"
    this.options.type = "success"
    this.refs.notify.notificationAlert(this.options);
  }

  render() {
      return (
          <div className="container">
          <h1 className="well">Add Client</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form>
                <NotificationAlert ref="notify" />
                <div className="col-sm-12">		
                  <div className="form-group">
                    <label>Client Name</label>
                    <input ref="clientname" type="text" placeholder="Client Name ..." autoCorrect="off" autoCapitalize="off" spellCheck="off" className="form-control"/>
                  </div>	
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label>Point of Contact</label>
                      <input ref="firstname" type="text"  placeholder="First Name" className="form-control" />
                    </div>	
                    <div className="col-sm-6 form-group">
                      <label></label>
                      <input ref="lastname" type="text"  placeholder="Last Name" className="form-control" />
                    </div>	
                  </div>
                  <div className="row">
                    <div className="col-sm-4 form-group">
                      <label>Email</label>
                      <input ref="email" type="text" name="city" placeholder="example@somewebsite.com" className="form-control" />
                    </div>	
                    <div className="col-sm-4 form-group">
                      <label>Phone</label>
                      <input ref="phone" type="text" placeholder="999-999-9999" className="form-control" />
                    </div>	
                    <div className="col-sm-4 form-group">
                      <label>Fax</label>
                      <input ref="fax" type="text" className="form-control" />
                    </div>		
                  </div>			
                  <button type="button" onClick= {this.addClient} className="btn btn-lg btn-info">Add Client</button>					
                </div>
              </form> 
            </div>
          </div>
        </div>
      );
  }
} 

export default AddClient;