/*global google*/
import React, { Component } from 'react';

class AddProperty extends Component {

/*autocompleteFormField = document.getElementById(`street-address-field`);
autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
  types: [`address`],
  componentRestrictions: [`us`],
});*/


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
  this.autocomplete = new google.maps.places.Autocomplete((this.refs.autocompleteFormField), {types: ['geocode'], componentRestrictions: [`us`],});
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
            <div className="container">
            <h1 className="well">Add Property</h1>
            <div className="col-lg-12 well">
              <div className="row">
                <form>
                  <div className="col-sm-12">		
                    <div className="form-group">
                      <label>Lookup Address</label>
                      <input ref="autocompleteFormField" type="text" placeholder="Lookup Address Here.." autoCorrect="off" autoCapitalize="off" spellCheck="off" className="form-control"/>
                    </div>	
                    <div className="row">
                      <div className="col-sm-3 form-group">
                        <label>Street Address 1</label>
                        <input ref="street_number" type="text" name="street_number" className="form-control" />
                      </div>	
                      <div className="col-sm-9 form-group">
                        <label>Street Address 2</label>
                        <input ref="route" type="text" className="form-control" />
                      </div>	
                    </div>
                    <div className="row">
                      <div className="col-sm-3 form-group">
                        <label>City</label>
                        <input ref="locality" type="text" name="city" placeholder="City" className="form-control" />
                      </div>	
                      <div className="col-sm-3 form-group">
                        <label>State</label>
                        <input ref="administrative_area_level_1" type="text" placeholder="State" className="form-control" />
                      </div>	
                      <div className="col-sm-3 form-group">
                        <label>Country</label>
                        <input ref="country" type="text" placeholder="Country" className="form-control" />
                      </div>
                      <div className="col-sm-3 form-group">
                        <label>Zip</label>
                        <input ref="postal_code" type="text" placeholder="Zip Code" className="form-control" />
                      </div>		
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea placeholder="Enter Description ..." rows={3} className="form-control" defaultValue={""} />
                    </div>	
                    <div className="row">
                      <div className="col-sm-3 form-group">
                        <label>Type</label>
                        <select className="custom-select custom-select-lg mb-3">
                          <option selected />
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>		
                      <div className="col-sm-3 form-group">
                        <label>Bed Rooms</label>
                        <select className="custom-select custom-select-lg mb-3">
                          <option selected />
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="col-sm-3 form-group">
                        <label>Bath Rooms</label>
                        <select className="custom-select custom-select-lg mb-3">
                          <option selected />
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="col-sm-3 form-group">
                        <label>Rent</label>
                        <select className="custom-select custom-select-lg mb-3">
                          <option selected />
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>	
                    </div>						
                    <div className="form-group">
                      <label>Other Features</label>
                      <textarea placeholder="Add Other Features here ..." rows={3} className="form-control" defaultValue={""} />
                    </div>			
                    <button type="button" className="btn btn-lg btn-info">Add Property</button>					
                  </div>
                </form> 
              </div>
            </div>
          </div>
        );
    }
} 

export default AddProperty;