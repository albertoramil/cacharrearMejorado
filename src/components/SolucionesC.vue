
<!--
<template>
<div>

<div id="app">
  <h1>Bitcoin Price Index</h1>
  
    {{ info }}:
    <span class="lighten">
    </span>
  </div>


</div>
</template>-->



<template>
<div>
    {{info}}
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-system-bar color="pink darken-2"></v-system-bar>

    <v-app-bar dark color="pink">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col>
          <v-card
            color="#385F73"
            dark
          >
            

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>




        <v-col
          v-for="(item, i) in info"
          :key="i"
        >
          <v-card           
          >
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <v-list-item-title
                  class="headline mb-2"
                  v-text="item.name"
                ></v-list-item-title>
<br>
                <v-list-item-subtitle v-text="item.username"></v-list-item-subtitle>
                <br>
                <br>
                <br>
                
              </v-list-item-content>

              
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>

</template>




<!--*********************************-->

<script>

export default {
  
    data () { 
      const axios = require('axios');

        return { items: [
        {
          name: 'Supermodel',
          username: 'Foster the People',
        },
        {
          name: 'Halcyon Days',
          username: 'Ellie Goulding',
        },
      ],
            info : null 
        }
    }, 
    mounted () {
        axios .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
        },
  
    
  }
</script>
