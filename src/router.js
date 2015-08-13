import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import PublicPage from './pages/public'

export default Router.extend({
  routes: {
    '': 'public'
  },

  public () {
    React.render(<PublicPage />, document.body)
  }
})