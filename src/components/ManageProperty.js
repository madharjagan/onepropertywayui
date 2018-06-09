import React, { Component } from 'react';
import { Table } from 'reactstrap';


class ManageProperty extends Component {

  constructor(props) {
    super(props);
    console.log("Constructor Called ...");
    this.state = {propertyDetails: []};
    this.editProperty = this.editProperty.bind(this);
  }

  componentDidMount(){
    console.log("componentDidMount called ...");
    fetch('http://ec2-34-229-126-140.compute-1.amazonaws.com:8081/getPropertyDetails/')
    .then(response => response.json())
      .then(data => 
      {
        console.log(data);
        this.setState({propertyDetails: data})
      }
    );
  }

  editProperty(property , event){
    console.log("editProperty called ..."+"/AddProperty/"+property.propertyID);
    this.props.history.push("/AddProperty/"+property.propertyID)
  }

    render() {
        return (
        <div className="container">
        <form>
          <Table datatable className="row-border hover">
            <thead>
              <tr>
                <th>PropertyID</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Assign Client</th>
              </tr>
            </thead>
            <tbody>
              {this.state.propertyDetails.map((property, pid) =>
              <tr>
                <td>{property.propertyID}</td>
                <td>{property.street_number} {" "} {property.route}{" "} {property.locality}</td>
                <td>
                <p>
                  <button type="button" className="btn btn-default btn-sm" key={pid} data-id={property.PropertyID} onClick={this.editProperty.bind(this,property)} >
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
                    <span className="glyphicon glyphicon-arrow-right"></span> Assign Client 
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

export default ManageProperty;