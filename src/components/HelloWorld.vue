<template>
  <div class="hello">
    <h1>{{ test2 }}</h1>
    <v-btn flat outline color="primary" @click="add">add</v-btn>
    <v-btn flat outline color="primary" @click="createRecord">create</v-btn>
    <v-btn flat outline color="primary" @click="testState">test</v-btn>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      test2: 'lol'
    }
  },
  methods: {
    testState() {
      console.log(this.$store)
    },
    createRecord() {
      // console.log(store.dispatch('createRecord'))
      console.log(this)
    },
    add() {
      store.commit('increment', 2)
    }
  },
  computed: {
    ...mapGetters({
      users: 'userModel'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
