<!--
<template>
  <v-row align="center">
    <v-form
      ref="form"
      v-model="valid">

      <v-text-field
        v-model="perro"
        :counter="10"
        :rules="nameRules"
        label="Perro"
        required
      ></v-text-field>
      <v-btn
        color="success"
        class="mr-4"
        @click="handleClick"
      >
        Ver Pedigree
      </v-btn>     
    </v-form>
  </v-row>
</template>-->


<template>
  <v-form>
    <v-container>
         <v-form
      ref="form"
      v-model="habilitar"
    >
          <v-text-field
            v-model="perro"
                  :rules="[v => !!v || '']"

            maxlength="25"
            hint="Tamaño máximo"
            label="Introduce el nombre del perro"
          ></v-text-field>

         <v-btn
               :disabled="!habilitar"

        color="success"
        class="mr-4"
        @click="handleClick">
        Ver Pedigree
      </v-btn> 
          </v-form>

    </v-container>
 
  </v-form>
</template>

<script>

  export default { 
    data: () => ({
      habilitar:true,
        perro: ''
      
    }),
  
    methods: {
      handleClick: function(event) {      
      var valor = this.perro;
      console.log(valor)
      switch (valor) {
        case "cora":
          location.href = "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=11475&fn=pedigree&rq=CORA"; 
          break;

        case "imba":
          location.href = "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=32657"; 
          break;
        
        case "lula":
          location.href = "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=48852"; 
          break; 

        case "lupin":
          location.href = "https://pedigree.setter-anglais.fr/genealogie/arbre.php?id=48853&fn=pedigree&rq=LUPIN+DE+LA+BARRERA"; 
          break; 
        
        default:
        break;
      }

    
     
    }
  }
}
</script>
<style scoped>
  .container {
    max-width: 1500px;
    margin:  auto;
    padding: 15px 30px;
  /*  background-color: rgb(136,126,0);*/
    font-size: 180%;

  }
</style>


