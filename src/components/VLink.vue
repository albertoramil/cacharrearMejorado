<template>
  <a
          v-bind:direcion="direcion"

    v-on:click="go"
  >
  <!-- con on click se ejecuta esto al hacer click --> 

    <slot></slot>
  </a>
</template>

<script>
  import router from '../router'

  export default {
    props: {
      direcion: {
        type:String,
        required: true 
      }
    },
    methods: {

      go (event) {
              console.log("dentro de vlink")
              console.log(this.direcion)
              console.log("despues")

        this.$router.push(this.direcion)
        

              }
    }
  }
</script>

<style scoped>
  .active {
    font-size: 150%;
    color: rgb(0,0,0);

  }
</style>





