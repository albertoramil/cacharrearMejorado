

<template>
  <v-content>
  <main-layout></main-layout>
<grafico></grafico>
	</v-content>
</template>




<script>
  import MainLayout from '../layouts/Main.vue'
  import grafico from '../components/dataTable.vue'


  export default {
      name:'DataTableV',

    components: {
      MainLayout,grafico,
    }
  }
</script>