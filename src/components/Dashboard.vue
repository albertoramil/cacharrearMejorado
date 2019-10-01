<template>
  <v-navigation-drawer permanent>
    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="$router.push(`/dashboard/${item.route}`)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Snom Provisioning', icon: 'dashboard', route: 'snom-provisioning'},
          { title: 'About', icon: 'question_answer', route: 'about' }
        ],
        right: null
      }
    }
  }
</script>
