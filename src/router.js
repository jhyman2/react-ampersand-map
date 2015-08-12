import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import PublicPage from './pages/public'

export default Router.extend({
  routes: {
    '': 'public'
  },

  public () {
    React.render(<PublicPage source="https://s3.amazonaws.com/uploads.hipchat.com/107111/789315/gejty0Pwb1nkuCs/incidents.json" />, document.body)
  }
})