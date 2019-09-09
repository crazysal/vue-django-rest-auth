<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input v-model="user" type="text" class="form-control" placeholder="Username">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input  v-model="pass" type="password" class="form-control" placeholder="Password">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" class="px-4" v-on:click="login(user, pass)">Login</b-button>
                  </b-col>
                  <!-- <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">Forgot password?</b-button>
                  </b-col> -->
                  <b-col cols="6" class="text-right" v-if="loginFailed">
                    <span style="color: red">Login Failed</span>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p> Register now to use the MaDE@UB Machine Learning Toolkit with interactive graphical user interface to perform machine learning tasks on your datasets.</p>
                  <p> click below to send mail to our system administerators to create account</p>
                  <a href="mailto:sahmed9@buffalo.edu"><b-button variant="primary" class="active mt-3">Register Now!</b-button></a>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pass: ''
    }
  },
  computed: {
    ...mapGetters({
      loginFailed: 'auth/loginFailed'
    })
  },
  methods: {
    ...mapActions({
      authLogin: 'auth/login'
    }),
    login (username, password) {
      this.authLogin({ username, password })
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
