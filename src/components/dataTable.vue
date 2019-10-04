<template>
    <div>
         <v-btn
          color="indigo"
          class="white--text"
          @click="aconsulta"
        >
          Carga
        </v-btn>

  <v-card>
    <v-card-title>
      Albunes
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        label="Buscar"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="cabecera2"
      :items="ausers"
      :search="search"
    ></v-data-table>
  </v-card>



</div>
</template>




<script>
export default {
  name: 'app',
  data () {
    return {
      ausers:[],
      info:[],
      search:'',
      cabecera2: [
        {
            text: 'Caralladas',
            align: 'left',
            sortable: false,
            value: 'title',
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
        this.ausers=respuesta.data
      } catch (error) {
        console.log("error")
        console.log(error)
        console.log("error")
      }  
    },
  }
}
</script>
  
