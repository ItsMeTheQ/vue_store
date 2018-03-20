import Store from '../vue_store/plugin/store'
//import models
import models from '../models'

console.log(models)

const store = new Store(models, 'lol')

export default store
