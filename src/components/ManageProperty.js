import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ManageProperty extends Component {

    render() {
        return (
        <div className="container">
        <Table datatable className="row-border hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Foo</td>
              <td>Bar</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Someone</td>
              <td>Youknow</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Iamout</td>
              <td>Ofinspiration</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Yoda</td>
              <td>Skywalker</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Patrick</td>
              <td>Dupont</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Barack</td>
              <td>Obama</td>
            </tr>
            <tr>
              <td>7</td>
              <td>François</td>
              <td>Holland</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Michel</td>
              <td>Popo</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Chuck</td>
              <td>Norris</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Simon</td>
              <td>Robin</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Louis</td>
              <td>Lin</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Zelda</td>
              <td>Link</td>
            </tr>
          </tbody>
        </Table>
      </div>
        );
    }
} 

export default ManageProperty;