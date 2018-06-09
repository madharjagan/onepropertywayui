/*global google*/
import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AddProperty from './AddProperty';
import AddClient from './AddClient';

import ReactWizard from 'react-bootstrap-wizard';
import {
    Container, Row, Col
} from 'reactstrap';


class AddClientWorkFlow extends Component {

    

  constructor(props) {
    super();
  }

  componentDidMount() {
  }

  render() {
    const steps =
    [
      {stepName: 'Add Client', component: <AddClient />},
      {stepName: 'Add Property', component: <AddProperty />}

    ]
      return (
            <Container fluid style={{marginTop: "15px"}}>
                <Row>
                    <Col xs={12} md={9} className="mr-auto ml-auto">
                        <ReactWizard
                            steps={steps}
                            navSteps
                            validate
                        />
                    </Col>
                </Row>
            </Container>
      );
  }
} 

export default AddClientWorkFlow;