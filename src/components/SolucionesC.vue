<template >
  <div>
    <v-btn outlined large fab v-on:click="aconsulta"></v-btn>
     
      {{ausers}}

      <template>
        <v-data-table
          :headers="cabecera2"
          :items="info"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </template>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users:[],
      ausers:null,
      info:[],    
      cabecera2: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Título', value: 'title' },
          { text: 'Contenido', value: 'body' },
        ]
    }
    
  }, mounted () {
    console.log ("entra en el mounted")
    this.$axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.info = response.data))
  },
  
  
  

  methods: {
    consulta: function () {
      console.log("sdfsdfs")
      const baseURI = 'https://jsonplaceholder.typicode.com/posts'
      this.$http.get(baseURI)
      .then((result) => {
      this.users = result.data
      })
    },  
     async aconsulta() {
      try {
        const baseURI = 'https://jsonplaceholder.typicode.com/posts'
        let respuesta=await this.$axios.get(baseURI)
        this.ausers=respuesta
      } catch (error) {
        console.log("error")
        console.log(error)
        console.log("error")
      }  
    },
 
  }
}
</script>
  
