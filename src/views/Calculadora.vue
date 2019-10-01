<template>
  <v-content>
    <main-layout>  </main-layout> 


  <v-container>
    <numero numeroEntrada="7" />
    <numero numeroEntrada="8"/>
    <numero numeroEntrada="9" />
    <operacion operacionEntrada="/" />

 </v-container>


  <v-container>
    <numero numeroEntrada="4"/>
    <numero numeroEntrada="5"/>
    <numero numeroEntrada="6"/>
    <operacion operacionEntrada="*" />
  </v-container>


  <v-container>
    <numero numeroEntrada="1"/>
    <numero numeroEntrada="2"/>
    <numero numeroEntrada="3"/>
    <operacion operacionEntrada="-" />

  </v-container>


  <v-container>
    <numero numeroEntrada="0"/>
    <operacion operacionEntrada="=" />
    <operacion operacionEntrada="C" />
    <operacion operacionEntrada="+" />



  </v-container>
  <v-container>
  <salida min-height="500px"/>


  </v-container>

  </v-content>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import numero from '../components/numero.vue'
  import operacion from '../components/operacion.vue'
  import salida from '../components/salida.vue'
  import cientifica from '../components/cientifica.vue'

  export default {
    name: 'Calculadora',
     data: () => ({
      
        mostrarOpCientifica: false
      
    }),
    components: {
      MainLayout,numero,operacion,salida,cientifica
    }
  }
</script>


