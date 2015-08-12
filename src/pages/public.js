import React from 'react'
import $ from 'jquery'
import leaflet from 'leaflet'

export default React.createClass({
  displayName: 'PublicPage',
  getInitialState () {
    return {
      incidents: []
    };
  },

  componentDidMount () {

    var map = this.map = L.map(this.getDOMNode(), {
      minZoom: 2,
      maxZoom: 20,
      layers: [
        L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
      ],
      attributionControl: false,
    });

    map.on('click', this.onMapClick);
    map.fitWorld();
    $.getJSON(this.props.source, (res) => {
      if (this.isMounted()) {
        this.setState({
          incidents: res
        });
      }
    }.bind(this));
  },

  render () {
    var incidents = (this.state.incidents)
    return (
      <div className='container'>
        <header role='banner center'>
          <h1>React-ampersand</h1>
        </header>
        <div>
          <p>React app displaying a google map with incidents and corresponding videos</p>
          <ul>
            {incidents.map(inc => <li>{inc.title} <p>lat: {inc.loc.coordinates[0]} long: {inc.loc.coordinates[1]}</p></li>)}
          </ul>
        </div>
        <div className="map">
          <p>Google Map</p>
        </div>
      </div>
    )
  }
})