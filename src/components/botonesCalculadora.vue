
<template>
    <v-btn outlined large fab v-on:click="anadir">
        {{entradaNum}}{{entradaOp}}
    </v-btn>
</template>


<script>
  export default {
    data: () => ({
    }),
    methods: {
        anadir(entradaNum,entradaOp){
        var numero=""
        numero=this.entradaNum
        var operacion=""
        operacion=this.entradaOp

        if (operacion==undefined) {
            if (this.$store.getters.getprimera=="") {
                this.$store.commit('SET_PRIMERA', this.entradaNum)	
            }else{
                if (this.$store.getters.gettercera=="") {
                    this.$store.commit('SET_PRIMERA', this.$store.getters.getprimera+this.entradaNum)	
                }
            }
            if (this.$store.getters.gettercera!=="") {
                if (this.$store.getters.getsegunda=="") {
                    this.$store.commit('SET_SEGUNDA',this.entradaNum)	

                }else{
                    this.$store.commit('SET_SEGUNDA',this.$store.getters.getsegunda+this.entradaNum)	
                } 
            }
            console.log( "1º numero "+ this.$store.getters.getprimera + " 2º numero "+ this.$store.getters.getsegunda  )
        } 
        if (numero==undefined){
            console.log(this.entradaOp)
            var valor
            valor=this.entradaOp
            switch (valor) {
                case "/":
                    console.log("div")
                    if (this.$store.getters.gettercera=="") {
                        this.$store.commit('SET_TERCERA', this.entradaOp)	
                    }
                break;
                case "*":
                    if (this.$store.getters.gettercera=="") {
                        this.$store.commit('SET_TERCERA', this.entradaOp)	
                    }
                    console.log("multi")
                break;
                case "-":
                    if (this.$store.getters.gettercera=="") {
                        this.$store.commit('SET_TERCERA', this.entradaOp)	
                    }
                    console.log("resta")
                break; 
                case "+":
                    if (this.$store.getters.gettercera=="") {
                        this.$store.commit('SET_TERCERA', this.entradaOp)	
                    }
                    console.log("suma")
                break; 
                case "sin":
                    if (this.$store.getters.gettercera=="") {
                        this.$store.commit('SET_TERCERA', this.entradaOp)	
                    }
                    console.log("seno")
                break;
                 case "cos":
                    if (this.$store.getters.gettercera=="") {
                        this.$store.commit('SET_TERCERA', this.entradaOp)	
                    }
                    console.log("coseno")
                break;
                 case "tan":
                    if (this.$store.getters.gettercera=="") {
                        this.$store.commit('SET_TERCERA', this.entradaOp)	
                    }
                    console.log("tangente")
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
                    op =this.$store.getters.gettercera
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
                           resultado =resultado.toFixed(2)
                            console.log("resultado es " + resultado)
                            this.$store.commit('SET_RESULTADO', resultado)	
                        break; 
                        case "sin":
                            resultado=Math.sin((parseInt(primero,10)))
                           resultado =resultado.toFixed(2)
                            console.log("resultado es " + resultado)
                            this.$store.commit('SET_RESULTADO', resultado)	
                        break; 
                        case "cos":
                            resultado=Math.cos((parseInt(primero,10)))
                           resultado =resultado.toFixed(2)
                            console.log("resultado es " + resultado)
                            this.$store.commit('SET_RESULTADO', resultado)	
                        break; 
                        case "tan":
                            resultado=Math.tan((parseInt(primero,10)))
                           resultado =resultado.toFixed(2)
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
        },
        anadirOp(entradaOp){
        
        }
    },props: {
      entradaOp: { 
             type:String
      },entradaNum: { 
             type:String
      }
    }
  }
</script>