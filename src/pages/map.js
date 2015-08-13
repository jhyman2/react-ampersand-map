import React from 'react'
import Leaflet from 'leaflet'

export default class extends React.Component {
  displayName: 'MapComponent'

  componentDidMount () {

    var map = this.map = Leaflet.map(this.getDOMNode(), {
      minZoom: 2,
      maxZoom: 20,
      center: [39.2833, -76.6167],
      layers: [
        Leaflet.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
          }
        )
      ],
      attributionControl: false
    })

    map.on('click', this.onMapClick)
    map.fitWorld()
    console.log(map)
  }

  render () {
    return (
      <p>MAKING SOME MAP HERE</p>
    )
  }
}