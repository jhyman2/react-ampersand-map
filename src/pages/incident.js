import $ from 'jquery'
import React from 'react'

export default class extends React.Component {
  displayName: 'IncidentComponent'
  getInitialState () {
    return {
      incidents: []
    }
  }
  componentDidMount () {
    $.getJSON("https://s3.amazonaws.com/uploads.hipchat.com/107111/789315/gejty0Pwb1nkuCs/incidents.json", (res) => {
      if (this.isMounted()) {
        this.setState({
          incidents: res
        });
      }
    }.bind(this));
  }

  render () {
    var incidents = [
    {
      title: "State Route 155 eastbound in Davidson County",
      details: "State Route 155 eastbound in Davidson County - Vehicle - Disabled between EXIT 28: I-40 RT. & LT. and OAKMONT CIR. reported at 8:25 AM 5/1/2015 and estimated to be cleared by 8:37 AM 5/1/2015 (Central Time Zone). Eastbound traffic is affected with no delays. Westbound traffic is affected with no delays.",
      type: "Incident",
      county: "Davidson County - Vehicle",
      time_received: "8:25 AM 5/1/2015",
      _id: "554385f2ccc7f01e6bc77c95",
      loc: {
      type: "Point",
      coordinates: [
      -86.85798345,
      36.14678898
      ]
      }
      },
      {
      title: "Interstate 65 southbound in Davidson County",
      details: "Interstate 65 southbound in Davidson County - Crash - Multiple Vehicles at MILE MARKER 88 (Mile Marker: 88) reported at 8:39 AM 5/1/2015 and estimated to be cleared by 8:49 AM 5/1/2015 (Central Time Zone). Southbound traffic is affected with no delays. Northbound traffic is affected with no delays.",
      type: "Incident",
      county: "Davidson County - Crash",
      time_received: "8:39 AM 5/1/2015",
      _id: "554385f2ccc7f01e6bc77c96",
      loc: {
      type: "Point",
      coordinates: [
      -86.77507876,
      36.21589261
      ]
      }
      },
      {
      title: "State Route 84 northbound in Putnam County",
      details: "State Route 84 northbound in Putnam County - Highway Maintenance - Unscheduled between WOODCLIFF RD. and BOSWELL RD. reported at 7:52 PM 4/30/2015 and estimated to be cleared by 7:00 PM 5/6/2015 (Central Time Zone). Northbound traffic is affected with roadway closed. Southbound traffic is affected with roadway closed. Both Directions of traffic are being diverted to alternate routes.",
      type: "Incident",
      county: "Putnam County - Highway Maintenance",
      time_received: "7:52 PM 4/30/2015",
      _id: "554385f2ccc7f01e6bc77c97",
      loc: {
      type: "Point",
      coordinates: [
      -85.28024369,
      36.16193574
      ]
      }
      }
    ]
    return (
      <ul>
        {incidents.map(inc => <li>{inc.title} <p>lat: {inc.loc.coordinates[0]} long: {inc.loc.coordinates[1]}</p></li>)}
      </ul>
    )
  }
}