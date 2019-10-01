<template>
  <div>




    <div v-if="visible">
      {{visible}}<br>
      {{this.$store.getters.getcientifica}}<br>
      {{operacionEntradaCientifica}}
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
    }),   
    methods: {
      anadir(event){
      console.log(this.operacionEntradaCientifica)
      var valor
      valor=this.operacionEntradaCientifica
      switch (valor) {
        case "/":
          console.log("div")
          if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntradaCientifica)	
          }
        break;
        case "*":
          if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntradaCientifica)	
          }
          console.log("multi")
        break;
        case "-":
          if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntradaCientifica)	
          }
          console.log("resta")
        break; 
        case "+":
          if (this.$store.getters.gettercera=="") {
            this.$store.commit('SET_TERCERA', this.operacionEntradaCientifica)	
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
        },
    },props: {
       visible: {
          default:function() {
            return this.$store.getters.getcientifica
          }
      },
      operacionEntradaCientifica: { 
              required: true
      }
    }
  }
</script>