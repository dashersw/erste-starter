import { View, ViewManager } from 'erste'
import ListView from './list-view'

import './main-view.css'

export default class MainView extends View {
  constructor() {
    super()

    this.vm = new ViewManager(this)
  }

  onAfterRender() {
    this.vm.setCurrentView(new ListView(this.vm))
  }

  template() {
    return `
      <main-view></main-view>
    `
  }
}
