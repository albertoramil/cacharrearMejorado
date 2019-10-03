<template >
  <div>
    
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
      ausers:[],
      info:[],albumid:'',    
      cabecera2: [
          {
            text: 'Caralladas',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Título', value: 'title' },
          { text: 'url', value: 'url' },
                    { text: 'album', value: 'albumId' },

        ]
    }
  }, mounted () {
    console.log ("entra en el mounted")
    this.$axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => (this.info = response.data))
  },
  
  

  methods: {
     
     async aconsulta() {
      try {
        const baseURI = 'https://jsonplaceholder.typicode.com/photos'
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
  
