<template>
  <div>
    <button outlined large fab>
      <p class="text-sm-left">Resultado:   <br>  
        {{ $store.getters.getresultado }}  
      </p>
    </button>




    
  </div>



</template>






<script>
  export default {
    data: () => ({
      show: true
    })
  }
</script>


<style scoped>
button {
  padding: 25px 122px;
  border: 3px solid #1A237E;
  color:"white";
  font-size: 20px;
}
</style>>