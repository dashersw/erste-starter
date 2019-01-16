import erste from 'erste'
import regie from 'regie'

import actionsDefinitions from './actions'
import mutationsDefinitions from './mutations'

const initialState = {
  counter: {
    count: 0
  }
}

const store = regie({ initialState, actions: actionsDefinitions, mutations: mutationsDefinitions })

erste.use(store)

export const { state, actions } = store
