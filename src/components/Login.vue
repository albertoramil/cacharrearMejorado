<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Inicio sesion</v-toolbar-title>
            <v-spacer></v-spacer>            
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="checkLogin(form)" id="check-login-form">
              <v-text-field prepend-icon="person" name="login" label="Usuario" type="text" v-model="form.login"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Contraseña" id="password" type="password" v-model="form.password"></v-text-field>
            </v-form>
          </v-card-text>
            <v-alert
              :value=loginAlert
              type="error"
              transition="scale-transition">
              
              Login Error! Incorrect username or password.
            </v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit" form="check-login-form">Entrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>



  </v-container>
</template>

<script>
  export default {
    data: () => ({
      form : {
        login: '',
        password: ''
      },
      loginAlert: false      
    }),
    methods: {
      checkLogin(form) {

        const goLogin = async () => {
          try {
            return await axios.post(`${this.$apiURL}/auth/login`, {
              "email": form.login,
              "password": form.password
            });
          } catch {
          }
        }

        const processLoginResult = async () => {
          const login_result = await goLogin()

          if(login_result){
            if (login_result.data.status == "success") {
              console.log(login_result.data.Authorization);
              this.$data.loginAlert = false;
              this.$store.dispatch('setLoggedIn');
              this.$store.dispatch('setToken', login_result.data.Authorization);
              this.$store.dispatch('setUsername', form.login)
              this.$router.push('/dashboard/');

            } else {
              console.log("Bad Login!");
              this.$data.loginAlert = true;
            }
          } else {
            console.log("Bad Loginn!");
            this.$data.loginAlert = true;
          }
        }

        processLoginResult()
      }
    }
  }
</script>

<style>

</style>
