<template >
  <div>
    {{info}}
      <button> </button>

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
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }
  }
}
</script>
  
