<template>
  <v-card color ="basil">
    <v-toolbar
    >
        <v-card-title class="text-center justify-center py-6">
            <h2 class="font-weight-bold display-3 basil--text">Setter de la Barrera</h2>
        </v-card-title>
        

        <template v-slot:extension>
            <v-tabs
                v-model="currentItem"
                background-color="basil"
                color="basil"
                grow
            >
            <v-tab
                v-for="item in items"
                :key="item"
                @click="addItem(item)"
            >
            {{ item }}
          </v-tab>
        
        </v-tabs>
      </template>
    </v-toolbar>

  



  </v-card>
</template>

<script>
  import router from '../router'

  export default {
    data: () => ({
      currentItem: 'tab-Web',
      items: [
        'Presentacion', 'Camadas', 'Otras', 'Futuras','Calculadora','VistaBotonesCalculadora','PEÑA',  ]
       }),
    methods: {
      addItem (item){
        console.log("entra")
        console.log(item)
        var valor
        valor=item
        console.log(valor)
        switch (valor) {
          case "Presentacion":
            this.$router.push("/")
          break;

          case "Camadas":
            this.$router.push("/camadas")
          break;
        
          case "Otras":
            this.$router.push("/relacionadas")
          break; 

          case "Futuras":
            this.$router.push("/futuras")
          break; 

          case "Calculadora":
            this.$router.push("/calculadora")
          break; 

          case "VistaBotonesCalculadora":
          this.$router.push("/VistaBotonesCalculadora")
          break; 
        
          case "PEÑA":
            this.$router.push("/Soluciones")
          break;
        
        default:
        break;
      }





      }
    }
  }
</script>



<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>