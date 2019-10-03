<template >
  <div>
    {{info}}
    <v-btn outlined large fab v-on:click="consulta"></v-btn>
    {{users}}

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: [],
      info:null
    }
  },mounted () {
    this.$axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  },
  methods: {
    consulta: function () {
      console.log("sdfsdfs")
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }
  }
}
</script>
  
