import React from 'react'
import $ from 'jquery'
import leaflet from 'leaflet'
import IncidentComponent from './incident'
import MapComponent from './map'

export default React.createClass({
  displayName: 'PublicPage',
  getInitialState () {
    return {
      incidents: []
    };
  },

  render () {
    var incidents = (this.state.incidents)
    return (
      <div className='container'>
        <header role='banner center'>
          <h1>Claris 1.0</h1>
        </header>
        <div>
          <p>React app displaying a google map with incidents and corresponding videos</p>
          {<IncidentComponent />}
          {<MapComponent />}
        </div>
        <div id="map">
        </div>
      </div>
    )
  }
})