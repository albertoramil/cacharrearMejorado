
<template>
  <v-btn outlined large fab v-on:click="anadir">
    avanz
  </v-btn>
</template>



<script>
  export default {
    data: () => ({
    }),
    methods: {
        anadir(event){
            if (this.$store.getters.getcientifica==false) {
              this.$store.commit('SET_CIENTIFICA', true)	
                console.log( "Cambio a "+ this.$store.getters.getcientifica )
            }else{
              this.$store.commit('SET_CIENTIFICA', false)	
                console.log( "Cambio a " + this.$store.getters.getcientifica )
            }
        }
    },
       
      
    

  }
</script>