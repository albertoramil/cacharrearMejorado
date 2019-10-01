<template>
  <div class="container">
  <template>
    <v-select
    v-model="edad"
    :items="['3M', '5M','M']"
    label="Edad"
  ></v-select>

  <v-select
    v-model="genero"
    :items="['Macho', 'Hembra']"
    label="Genero"
  ></v-select>

  <v-select
    v-model="linea"
    :items="['Francesa', 'Italiana','Española']"
    label="Linea"
  ></v-select>

  <v-btn
    color="success"
    class="mr-4"
    @click="guardar">
    Validate
  </v-btn>

</template>

 	
			</form>
		</div>           		
  </div> 
</template>
z
<script>
	import botonCambioPagina from '../components/botonCambioPagina.vue'
	export default {
    data: () => ({
     
        edad: '',
        genero: '',
        linea:''
      
    }),
		components: {
    	botonCambioPagina   
    },
  	methods: {
      guardar: function(event) {
		  console.log("llega")
		  console.log(this.edad)
		  console.log(this.genero)
		  console.log(this.linea)

	    this.$store.commit('SET_EDAD', this.edad)	
	    this.$store.commit('SET_GENERO', this.genero)
      this.$store.commit('SET_LINEA', this.linea)
      this.$router.push("/camadas")

	    console.log("pasa")
	  }
  }
}   



</script>

<style scoped>
  .container {
    max-width: 1500px;
    margin:  auto;
    padding: 15px 30px;
   /* background-color: rgb(136,126,0);*/
    font-size: 180%;

  }
  box{
				width: 200px;
				height: 250px;
				float: left;
				margin: 50px;
			}
			.dashed{
				border: 3px dashed black;
				padding:5px;
			}
</style>

