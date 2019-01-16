import { View } from 'erste'

import DetailView from './detail-view'

import './main-view.css'

export default class ListView extends View {
  constructor(vm) {
    super()

    this.items = [1, 2, 3]
    this.vm = vm

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  template() {
    return `<div>
      ${this.items.map(i => `<div class="item" data-index="${i}">${i}</div>`).join('')}
    </div>`
  }

  ['tap .item'](e) {
    this.vm.pull(new DetailView(e.target.getAttribute('data-index')), true)
  }
}
