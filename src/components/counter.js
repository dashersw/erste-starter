import { Component } from 'erste'

export default class Counter extends Component {
  ['observe counter.count'](count) {
    this.$('.counter').innerText = count
  }

  template({ counter }) {
    return pug`
      p counter:&nbsp;
        span.counter ${counter.count}
    `
  }
}
