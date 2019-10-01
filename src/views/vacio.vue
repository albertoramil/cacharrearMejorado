<

<template>
  <v-content>
  <main-layout></main-layout>
    <grafico></grafico>

	</v-content>
</template>




<script>
  import MainLayout from '../layouts/Main.vue'
  import grafico from '../components/grafico.vue'


  export default {
      name:'vacio',

    components: {
      MainLayout,grafico
    }
  }
</script>