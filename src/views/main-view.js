import { View } from 'erste'

import './main-view.css'

export default class MainView extends View {
  template() {
    return pug`
      .main-view
        img(src="static/logo.png")
        h1 Welcome to your erste app
    `
  }
}
