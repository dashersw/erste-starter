import { View } from 'erste'
import { state, actions } from '../store'
import './main-view.css'
import Counter from '../components/counter'

export default class MainView extends View {
  constructor() {
    super()

    this.counter = new Counter({ counter: state.counter })
  }

  ['tap .increment']() {
    actions.increment()
  }

  ['tap .decrement']() {
    actions.decrement()
  }

  template() {
    return pug`
      .main-view
        img(src="static/logo.png")
        h1 Welcome to your erste app
        div ${this.counter}
        input.increment(type="button" value="Increment")
        input.decrement(type="button" value="Decrement")
    `
  }
}
