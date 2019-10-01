<template>
    <div >
<!--
    <h3>Otros Afijos</h3>
      <li><a href="http://www.setterdelabarrera.com" style="color:black;" >La barrera</a></li>
      <li><a href="http://www.piedrallada.com" style="color:black;">Piedrallada</a></li>
      <li><a href="https://setterdelabarrera.wordpress.com" style="color:black;" >Blog</a></li>-->
  
  <main-layout>

  </main-layout>    
    
	<verpedigree>


    
  </verpedigree>

<!--
<template>
  <div class="text--primary">
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          class="mx-auto pa-6 "
        >
      <li><a href="https://setterdelabarrera.wordpress.com" style="color:black;" >Blog Setter de la barrera</a></li>
        </v-card>
      </template>
    </v-hover>

    <div class="my-6"></div>

    <v-hover>
      <template v-slot="{ hover }">
        <div
          :class="`elevation-${hover ? 24 : 6}`"
          class="mx-auto pa-6 transition-swing"
        >
      <li><a href="http://www.piedrallada.com" style="color:black;">Piedrallada</a></li>
        </div>
      </template>
    </v-hover>


 <v-hover>
      <template v-slot="{ hover }">
        <div
          :class="`elevation-${hover ? 24 : 6}`"
          class="mx-auto pa-6 transition-swing"
        >
      <li><a href="https://setterdelabarrera.wordpress.com" style="color:black;" >Blog setter</a></li>
        </div>
      </template>
    </v-hover>

  </div>
</template>-->



<template>
  
</template>
    </div>

	

</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import verpedigree from '../components/verpedigree.vue'


  export default {
      name: 'Relacionadas',
    components: {
    MainLayout,verpedigree
    }, data () {
      return {
        cactiveBtn: 1,
        showNav: true,
      }
    },	
  }
</script>
