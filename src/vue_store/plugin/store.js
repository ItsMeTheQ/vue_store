import loader from './modules/loader'

export default class {
  constructor(modelList, state) {
    this.state = {}

    for (let i = 0; i < modelList.length; i++) {
      this.state[modelList[i].name] = []
      this.state[(modelList[i].name + '_')] = []
    }

    this.createRecord = function (modelName, obj) {
      return loader.createRecord(this.state, modelList, obj)
    }

    this.getList = function () {
    }
    this.getElement = function () {
    }
  }
}
