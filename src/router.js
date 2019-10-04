import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Inicio from './views/Inicio.vue'

import Fallo from './views/vacio.vue'
import Camadas from './views/Camadas.vue'
import Relacionadas from './views/Relacionadas.vue'
import Calculadora from './views/Calculadora.vue'
import VistaBotonesCalculadora from './views/VistaBotonesCalculadora.vue'
import Soluciones from './views/SolucionesV.vue'

import DataTableV from './views/DataTableV.vue'
import mapV from './views/mapV.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
    name: 'Inicio',
    component: Inicio
    //name: 'SolucionesV',
      //component: Soluciones
    },
    {
      path: '/camadas',
      name: 'Camadas',
      component: Camadas
    },  
    {
      path: '/relacionadas',
     name: 'Relacionadas',
      component: Relacionadas
    },
    {
      path: '/futuras',
      name: 'vacio',
      component: Fallo
    },{
      path: '/calculadora',
      name: 'Calculadora',
      component: Calculadora
    },{
      path: '/VistaBotonesCalculadora',
      name: 'VistaBotonesCalculadora',
      component: VistaBotonesCalculadora
    },{
      path: '/Soluciones',
      name: 'SolucionesV',
      component: Soluciones
    },{
      path: '/DataTableV',
      name: 'DataTableV',
      component: DataTableV
    },{
      path: '/mapV',
      name: 'mapV',
      component: mapV
    },
  ]



  //routes: [
   // {
    //  path: '/',
    //  name: 'Relacionadas',
    //  component: Relacionadas
   // },
   // {
    //  path: '/camadas',
    //  beforeEnter: guard, // Using guard before entering the route      
    //  name: 'Camadas',
    //  component: Camadas,
    ///  children: [
      //  {
      //    path: 'relacionadas',
      //    name: 'relacionadas',
      //    component: Relacionadas
      //  },
       // {
      //    path: 'futuras',
     //     name: '404',
     //     component: Fallo
     //   }
    //  ]
   // }
  //]




})


