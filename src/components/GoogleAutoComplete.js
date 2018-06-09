/*global google*/
import React from 'react';

export default class GoogleAutoComplete extends React.Component {
  
  static propTypes = {
    }
  constructor(props) {
    super(props);
      this.fillInAddress = this.fillInAddress.bind(this);

    }

    componentDidMount() {
      this.initAutocomplete();
    }


    initAutocomplete() {
      this.autocomplete = new google.maps.places.Autocomplete((this.refs.autoCompletePlaces), {types: ['geocode']});

      this.autocomplete.addListener('place_changed', this.fillInAddress);

    }

    geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    }

    fillInAddress() {
      const componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };
    // Get the place details from the autocomplete object.
      this.place = this.autocomplete.getPlace();
      /*this.setState({placeResult: this.place.address_components})*/

      for (let component in this.componentForm) {
        this.refs.component.value = '';
        this.refs.component.disabled = false;
      }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.

    this.place.address_components.forEach((component, index) => {
      const addressType = this.place.address_components[index].types[0];
      if (componentForm[addressType]) {
        const val = this.place.address_components[index][componentForm[addressType]];
        this.refs[addressType].value = val;
      }
    })   
  }    

  render() {
    return (
      <div>
        <div>
          <input 
            placeholder="Enter your address"
            onFocus={this.geolocate}
            ref="autoCompletePlaces"
            className="form-control"
            type="text"
          />
        </div>
        <table ref="address">
          <tbody>
            <tr>
              <td>Street address</td>
              <td>
                <input 
                  ref="street_number"
                  disabled="true"
                  value=''
                  />
              </td>
              <td>
                <input 
                  ref="route"
                  disabled="true"/>
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input 
                  ref="locality"
                  disabled="true"/>
              </td>
            </tr>
            <tr>
              <td>State</td>
              <td>
                <input 
                  ref="administrative_area_level_1" 
                  disabled="true"/>
                </td>
              <td>Zip code</td>
              <td>
                <input
                  ref="postal_code"
                  disabled="true"/>
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <input
                  ref="country" 
                  disabled="true"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>      
    );
  }
}