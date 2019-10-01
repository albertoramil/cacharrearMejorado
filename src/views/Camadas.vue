<template>
    <v-content>
        <main-layout>  </main-layout>

        <div class="container">

<h2>Perro buscado</h2>


    <p class="text-sm-left">Perro buscado de  {{ $store.getters.getedad }}, genero {{ $store.getters.getgenero }} y lineas {{ $store.getters.getlinea }} </p>



    <h3>Camadas del 2019</h3>
      <!--  <p>Padre {{ $store.getters.nombre }}</p>
        <p>Madre {{ $store.getters.apellidos }}</p>
        <p>Edad {{ $store.getters.getedad }}</p> -->






  <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"  
      >         
      <p v-if="deslizar"> 
        <v-card
          max-width="800"
          class="mx-left"
        >
          <v-card-title>CAMADA O1 " Gio  X  Goya de La Barrera"</v-card-title>
          <v-card-text> Nacidos 14/02/2019 (4 Machos, 1 Hembra) NO DISPONIBLE"</v-card-text>
          <v-card-actions>
            <v-btn text href="http://www.setterdelabarrera.com/camada_O1.html"  v-on:click="deslizar=!deslizar">Ver Detalles</v-btn>
          </v-card-actions>
        </v-card>
      </p>
        > 
    </transition>
    


<br>
<template>
  <v-card
    max-width="800"
    class="mx-left"
  >
    <v-card-title>CAMADA O2 "Iuri  X  Ray de Piedrallada</v-card-title>
    <v-card-text> Nacidos 15/02/2019 (2 Machos, 3Hembras) NO DISPONIBLE"</v-card-text>
    <v-card-actions>
      <v-btn text href="http://www.setterdelabarrera.com/camada%20O2.html" >Ver Detalles</v-btn>
    </v-card-actions>
  </v-card>
</template>

<br>
<template>
  <v-card
    max-width="800"
    class="mx-left"
  >
    <v-card-title>CAMADA O3 "Imba de La Barrera x Lupin de La Barrera"</v-card-title>
    <v-card-text> Nacidos 20/05/2019 (2 Machos, 3Hembras)" </v-card-text>
    <v-card-actions>
      <v-btn text href="http://www.setterdelabarrera.com/camada%20O3.html" >Ver Detalles</v-btn>
    </v-card-actions>
  </v-card>
</template>


<br>
<template>
  <v-card
    max-width="800"
    class="mx-left"
  >
    <v-card-title>CAMADA O4 "Lula de  La Barrera x Lupin de La Barrera "</v-card-title>
    <v-card-text> Nacidos 15/02/2019 (2 Machos, 3Hembras) NO DISPONIBLE"</v-card-text>
    <v-card-actions>
      <v-btn text  href="http://www.setterdelabarrera.com/camada%20O4.html">Ver Detalles</v-btn>
    </v-card-actions>
  </v-card>
</template>


<br>
<template>
  <v-card
    max-width="800"
    class="mx-left"
  >
    <v-card-title>CAMADA O5 "Viva x Lupin de La Barrera"</v-card-title>
    <v-card-text> Nacidos 06/06/2019 (5 Machos, 1 Hembra)"</v-card-text>
    <v-card-actions>
      <v-btn text href="http://www.setterdelabarrera.com/camada%20O5.html">Ver Detalles</v-btn>
    </v-card-actions>
  </v-card>
</template>

   






    
      </div>

    </v-content>

</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
     data: () => ({
      deslizar:true,      name: 'Camadas'

      }),

    components: {
            MainLayout

    }
  }
</script>



<style scoped>
  .active {
    font-size: 150%;
    color: rgb(0,0,0);

  }
  .container {
    max-width: 1500px;
       /* background-color: rgb(136,126,0);*/

    margin: 0 auto;
    padding: 15px 30px;
    font-size: 150%;
  }

</style>
