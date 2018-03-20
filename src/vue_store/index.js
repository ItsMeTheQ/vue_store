const VueData = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log('Mounted!')
      },
      $store: 'test'
    })
  }
}

export default VueData
