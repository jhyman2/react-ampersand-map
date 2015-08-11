import app from 'ampersand-app'
import styles from './styles/main.styl'
import Router from './router'


// as opposed to window.app = {}...
// one advantage of ampersand
// @todo how is this done in backbone?

app.extend({
  init() {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()