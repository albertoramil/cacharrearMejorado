<!--
<template>
  <v-container>


   <div class="text-center">
    <v-btn numero=7 @click="añadir(7)" id='n7' class="ma-2" outlined large fab color="indigo">7</v-btn>
    <v-btn numero=8 @click="añadir(8)" id='n8' class="ma-2" outlined large fab color="indigo">8</v-btn>
    <v-btn numero=9 @click="añadir(9)" id='n9' class="ma-2" outlined large fab color="indigo">9</v-btn>
  </div>

  
  <div class="text-center" >
    <v-btn numero=4 @click="añadir(4)" id='n4' class="ma-2"  outlined large fab color="indigo" >4</v-btn>
    <v-btn numero=5 @click="añadir(5)" id='n5' class="ma-2" outlined large fab color="indigo">5</v-btn>
    <v-btn numero=6 @click="añadir(6)" id='n6' class="ma-2" outlined large fab color="indigo">6</v-btn>
  </div>



  <div class="text-center">
    <v-btn numero=1 @click="añadir(1)" id='n1' class="ma-2" outlined large fab color="indigo">1 </v-btn>
    <v-btn numero=2 @click="añadir(2)" id='n2' class="ma-2" outlined large fab color="indigo">2</v-btn>
    <v-btn numero=3 @click="añadir(3)" id='n3' class="ma-2" outlined large fab color="indigo">3</v-btn>
  </div>


 
  </v-container>

</template>
-->
<template>
    <v-btn outlined large fab v-on:click="anadir">

    {{numeroEntrada}}
  </v-btn>



</template>




<script>
  export default {
    data: () => ({
    }),
    methods: {
        anadir(event){
        console.log(this.numeroEntrada)
            if (this.$store.getters.getprimera=="") {
                this.$store.commit('SET_PRIMERA', this.numeroEntrada)	
            }else{
                this.$store.commit('SET_SEGUNDA', this.numeroEntrada)	
            }
            console.log( "1º numero "+ this.$store.getters.getprimera + " 2º numero "+ this.$store.getters.getsegunda  )
        }
    },props: {
      numeroEntrada: { 
             type:String, required: true 
      }
    }

  }
</script>