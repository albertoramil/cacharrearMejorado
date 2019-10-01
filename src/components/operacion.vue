
<template>
    <v-btn  large fab  v-on:click="anadir">
    {{operacionEntrada}}
  </v-btn>
</template>



<script>
  export default {
    data: () => ({
    }),
    methods: {
        anadir(event){
        console.log(this.operacionEntrada)
        var valor
        valor=this.operacionEntrada
switch (valor) {
        case "/":
        console.log("div")

            if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntrada)	
            }
          break;

        case "*":
          if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntrada)	
            }
        console.log("multi")
          break;
        
        case "-":
          if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntrada)	
            }
        console.log("resta")
          break; 

        case "+":
          if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntrada)	
            }
        console.log("suma")
          break; 

        case "C":
          console.log("C")
          this.$store.commit('SET_PRIMERA', "")	
          this.$store.commit('SET_SEGUNDA', "")	
          this.$store.commit('SET_TERCERA', "")	        
          this.$store.commit('SET_RESULTADO', "0.0")	

          console.log( "Op "+ this.$store.getters.gettercera   )
          break; 
        
        case "=":
          var primero
          var segundo
          var op 
          var resultado
          primero=this.$store.getters.getprimera 
          segundo =this.$store.getters.getsegunda 
          op =this.$store.getters.gettercera

            var operacion=op
            switch (operacion) {
            case "+":
              resultado=(parseInt(primero,10))+(parseInt(segundo,10))
              console.log(resultado)
                        this.$store.commit('SET_RESULTADO', resultado)	

            break;
            case "-":
              resultado=(parseInt(primero,10))-(parseInt(segundo,10))
              console.log("resultado es " + resultado)
                                      this.$store.commit('SET_RESULTADO', resultado)	

            break;
            case "*":
              resultado=(parseInt(primero,10))*(parseInt(segundo,10))
              console.log("resultado es " + resultado)
                                      this.$store.commit('SET_RESULTADO', resultado)	

            break; 
            case "/":
              resultado=(parseInt(primero,10))/(parseInt(segundo,10))
              console.log("resultado es " + resultado)
                                      this.$store.commit('SET_RESULTADO', resultado)	
            break; 
            default:
            break;
      }

          break; 


        default:
        break;
      }

        }
    },props: {
      operacionEntrada: { 
              required: true 
      }
    }

  }
</script>