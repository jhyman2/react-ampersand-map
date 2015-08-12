import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

export default class SimpleMapPage extends Component {
  constructor(props) {
    let hello = "hi"
    super(props);
  }

  render() {
    return (
       <GoogleMap
        center={[59.938043, 30.337157]}
        zoom={9}>
      </GoogleMap>
    )
  }
}