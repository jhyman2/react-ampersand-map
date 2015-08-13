import React from 'react'
import leaflet from 'leaflet'

export default React.createClass({
  displayName: 'Map',

  render () {
    var incidents = (this.state.incidents)
    return (
      var map = this.map = leaflet.map(this.getDOMNode(), {
        minZoom: 2,
        maxZoom: 20,
        center: [39.2833, -76.6167],
        layers: [
          leaflet.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
              attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
            }
          )
        ],
        attributionControl: false,
      });

      map.on('click', this.onMapClick);
      map.fitWorld();
    )
  }
})