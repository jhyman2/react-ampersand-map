import React from 'react'
import $ from 'jquery'
import GoogleMap from 'react-google-maps'

export default React.createClass({
  displayName: 'PublicPage',
  getInitialState () {
    return {
      incidents: []
    };
  },

  componentDidMount () {
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
    var GoogleMapsAPI = window.google.maps
    var Map = ReactGoogleMaps.Map
    var OverlayView = ReactGoogleMaps.OverlayView
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
        <div>
          <p>Google Map</p>
          <GoogleMap containerProps={{
            ...this.props,
            style: {
              height: "100%",
            },
          }}
          defaultZoom={10}
          defaultCenter={{lat: -34.397, lng: 150.644}} />
        </div>
      </div>
    )
  }
})