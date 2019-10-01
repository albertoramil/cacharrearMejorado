<template>
  <v-content>
    <Main></Main>
    <Midiseno></Midiseno>
    <formulario></formulario>
  </v-content>
</template>


  
<script>
  import Main from '../layouts/Main.vue'
  import Midiseno from '../layouts/Midiseno.vue'
  import formulario from '../layouts/formulario.vue'

  export default {
    components: {
     
      Midiseno,
      Main,formulario

    }
  }
</script>

