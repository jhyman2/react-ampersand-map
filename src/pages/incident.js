import $ from 'jquery'
import React from 'react'

export default class extends React.Component {
  displayName: 'IncidentComponent'
  getInitialState () {
    return {
      incidents: <div id="incidents"></div>
    }
  }
  componentDidMount () {
    $.getJSON("https://s3.amazonaws.com/uploads.hipchat.com/107111/789315/gejty0Pwb1nkuCs/incidents.json", (res) => {
      if (this.isMounted()) {
        this.setState({
          incidents:
          <ul>
            {res.map(inc => <li>{inc.title} <p>lat: {inc.loc.coordinates[0]} long: {inc.loc.coordinates[1]}</p></li>)}
          </ul>
        })
      }
    })
  }

  render () {
    var incidents = (this.state.incidents)
    return (
      {incidents}
    )
  }
}