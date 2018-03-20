import Record from '../record/record'

export default {
  createRecord(state, modelList, value) {
    let record = null
    if (modelList[value.model] !== null && modelList[value.model] !== undefined) {
      record = new Record(modelList[value.model], value.values)
    } else {
      console.log('model not defined:', value.model)
      return 'model not defined: ' + value.model
    }

    if (state[modelList[value.model].name] === null || state[modelList[value.model].name] === undefined) {
      state[modelList[value.model].name] = []
    }

    if (record !== null || record !== undefined) {
      state[modelList[value.model].name].push(record)
      console.log(record)
      console.log(state[modelList[value.model].name])
    }
    return record
  },

  addWholeFunctionality(store, modelList) {
    console.log(store)
    this.addAllVariables(store, modelList)
    // this.addAllGetters(store, state, modelList)
  },

  addAllVariables(store, modelList) {
    for (let key in modelList) {
      store.state[modelList[key].name] = []
      store.state[(modelList[key].name + '_')] = []
    }
  }
}
