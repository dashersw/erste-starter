export default {
  increment({ state }) {
    state.counter.count++
  },

  decrement({ state }) {
    state.counter.count--
  }
}
