import { View } from 'erste'

import './main-view.css'

export default class DetailView extends View {
  constructor(item) {
    super()

    this.item = item
    this.supportsBackGesture = true
  }

  template() {
    return `<div>
      ${this.item}
    </div>`
  }
}
