

<template>
  <v-content>


<cabecera>
</cabecera>

<SolucionesC>
</SolucionesC>

  </v-content>

</template>




<script>
  import SolucionesC from '../components/SolucionesC.vue'
  import cabecera from '../components/cabecera-navegacion.vue'


  export default {
      name:'SolucionesV',
 data: () => ({
      
    }),
    components: {
      SolucionesC,cabecera
    }
  }
</script>