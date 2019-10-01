<template>
    <v-content fluid grid-list-md>
      <v-layout row wrap fill-height>
        <v-flex shrink>
          <Dashboard/>
        </v-flex>
        <v-flex>
          <router-view></router-view>
        </v-flex >
      </v-layout>
        
    </v-content>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard'

export default {
  name: 'dashboard',
  components: {
    Dashboard
  }
}
</script>
