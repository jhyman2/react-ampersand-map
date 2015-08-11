import React from 'react'

export default React.createClass({
  displayName: 'PublicPage',
  render () {
    return (
      <div className='container'>
        <header role='banner center'>
          <h1>React-ampersand</h1>
        </header>
        <div>
          <p>React app displaying a google map with incidents and corresponding videos</p>
        </div>
      </div>
    )
  }
})