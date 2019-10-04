

<template>
  <v-content>
  <main-layout></main-layout>

<div id="app">
    <google-map />
  </div>
	</v-content>
</template>




<script>
  import MainLayout from '../layouts/Main.vue'

  import GoogleMap from '../components/mapC.vue'

  export default {
      name:'mapV',

    components: {
      MainLayout,GoogleMap
        }
  }
</script>