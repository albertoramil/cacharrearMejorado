<template>
  <v-snackbar
    v-model="snackbar"
    :bottom=true
    :right=true
    :timeout=6000
    :color="snack_color"
  >
    {{ snack_text }}
    <v-btn
      dark
      flat
      @click="snackbar = false"
    >
      Cerrar
    </v-btn>
  </v-snackbar>
</template>

<script>
  /**
   * Vuetify Toast component
   *
   * Insert component where you want to use it:
   * <toast ref="toast"></toast>
   *
   * Call it:
   * this.$refs.toast.go("OK!", "success")
   * this.$refs.toast.go("ERROR!", "error")
   *
   * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
   * <template>
   *   <v-app>
   *     ...
   *     <toast ref="toast"></toast>
   *   </v-app>
   * </template>
   *
   * mounted() {   
   *   this.$root.$toast = this.$refs.toast.go
   * }
   */
  export default {
    data: () => ({
      snackbar: false,
      snack_color: "",
      snack_text: ""
    }),
    methods: {
      go(msg, color) {
        this.snack_text = msg;
        this.snack_color = color;
        this.snackbar = true;
      }
    }
  }
</script>