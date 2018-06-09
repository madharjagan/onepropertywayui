import React, { Component } from 'react';
import { Table } from 'reactstrap';


class ManageClient extends Component {

  constructor(props) {
    super(props);
    console.log("Constructor Called ...");
    this.state = {clientDetails: []};
  }

  componentDidMount = () => {
    console.log("componentDidMount called ...");
    fetch('http://ec2-34-229-126-140.compute-1.amazonaws.com:8081/getClientDetails/')
    .then(response => response.json())
      .then(data => 
      {
        console.log(data);
        this.setState({clientDetails: data})
      }
    );
}
    render() {
        return (
        <div className="container">
        <form>
          <Table datatable className="row-border hover">
            <thead>
              <tr>
                <th>ClientID</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Add Property</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientDetails.map(client =>
              <tr>
                <td>{client.clientID}</td>
                <td>{client.clientname}</td>
                <td>
                <p>
                  <button type="button" className="btn btn-default btn-sm" onClick={this.editProperty} >
                    <span className="glyphicon glyphicon-pencil"></span> Edit 
                  </button>
                </p>
                </td>
                <td>
                  <button type="button" className="btn btn-default btn-sm" onClick={this.removeProperty}>
                    <span className="glyphicon glyphicon-trash"></span> Remove 
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-default btn-sm" onClick={this.assignClientToProperty}>
                    <span className="glyphicon glyphicon-arrow-right"></span> Add Property 
                  </button>
                </td>
              </tr>
              )}
            </tbody>
          </Table>
        </form>
      </div>
        );
    }
} 

export default ManageClient;