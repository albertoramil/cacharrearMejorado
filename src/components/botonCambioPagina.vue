<template>

 
    
  

  

</template>

<script>

  export default {
    
  methods: {
    handleClick: function(event) {
      
     event.preventDefault()
        this.$root.currentRoute = "/botonCambioPagina"
        window.history.pushState(
        null,
        "/botonCambioPagina",
        console.log("botonCambioPagina")
     )
    }
  }
}
</script>

<style scoped>
  .active {
    color: rgb(105, 102, 98);
    font-size: 150%;

  }
</style>
