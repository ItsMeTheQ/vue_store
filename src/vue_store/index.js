const VueData = {
  install(Vue, options) {
    Vue.mixin({
        mounted() {
          console.log('Mounted!')
        }
      },
      Vue.prototype.$store = {test: 'hallo!!! :D'}
    )
  }
}

export default VueData
