<template >
  <div>
    <v-btn outlined large fab v-on:click="consulta"></v-btn>
      {{users}}
      <br>      <br>
      <br>
    <v-btn outlined large fab v-on:click="aconsulta"></v-btn>

            {{ausers}}

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users:null,
      ausers:null

    }
  },
  methods: {
    consulta: function () {
      console.log("sdfsdfs")
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
        this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }, 
        async aconsulta() {
      try {
              const baseURI = 'https://jsonplaceholder.typicode.com/posts6'
              let respuesta=await this.$axios.get(baseURI)
              this.ausers=respuesta
        
      } catch (error) {
        console.log("error")
        console.log(error)
        console.log("error")

        
      }
      
    }
  }
}
</script>
  
