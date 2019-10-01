<template>
  <v-content>
    <main-layout>  </main-layout> 
    <v-container>
      <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"  
          >         
          <p v-if="esCientifica"> 
            <entrada entradaNum="7"  />
            <entrada entradaNum="8" />
            <entrada entradaNum="9" />
            <entrada entradaOp="/"  />
            <entrada entradaOp="sin" />
          </p>
          >  
          </transition>
    
        <transition
          name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"  
            >         
            <p v-if="!esCientifica"> 
              <entrada entradaNum="7"  />
              <entrada entradaNum="8" />
              <entrada entradaNum="9" />
              <entrada entradaOp="/"  />
            </p>
            >  
          </transition>
    </v-container>


     <v-container>


      <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
          <transition
              name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"  
              >         
            <p v-if="esCientifica"> 
          <entrada entradaNum="4"  />
        <entrada entradaNum="5" />
        <entrada entradaNum="6" />
        <entrada entradaOp="*"  />
        <entrada entradaOp="cos" />
            </p>
              >  
          </transition>
    


 <transition
              name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"  
              >         
            <p v-if="!esCientifica"> 
          <entrada entradaNum="4"  />
        <entrada entradaNum="5" />
        <entrada entradaNum="6" />
        <entrada entradaOp="*"  />
            </p>
              >  
          </transition>
    </v-container>

     <v-container>

 
      <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
          <transition
              name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"  
              >         
            <p v-if="esCientifica"> 
          <entrada entradaNum="1"  />
        <entrada entradaNum="2" />
        <entrada entradaNum="3" />
        <entrada entradaOp="-"  />
        <entrada entradaOp="tan" />
            </p>
              >  
          </transition>
    


 <transition
              name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"  
              >         
            <p v-if="!esCientifica"> 
           <entrada entradaNum="1"  />
        <entrada entradaNum="2" />
        <entrada entradaNum="3" />
        <entrada entradaOp="-"  />
            </p>
              >  
          </transition>
    </v-container>


    <v-container>
      <entrada entradaNum="0" />
      <entrada entradaOp="="  />
      <entrada entradaOp="C"  />
      <entrada entradaOp="+"  />
       <v-btn outlined large fab v-on:click="esCientifica=!esCientifica">
        cientifica
      </v-btn>
    </v-container>


    <v-container>
            <salida min-height="500px" />
  </v-container>

 

  </v-content>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import entrada from '../components/botonesCalculadora.vue'
  import salida from '../components/salida.vue'

  export default {
    name: 'VistaBotonesCalculadora',
      data: () => ({
        esCientifica:true ,show :true    
      }),
    components: {
      MainLayout,salida,entrada
    }
  }
</script>

