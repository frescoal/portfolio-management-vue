<template>
  <div class="login-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login">
                <card type="login">
                  <h3 slot="header" class="header text-center">Login</h3>

                  <fg-input v-model="form.username" addon-left-icon="nc-icon nc-single-02" placeholder="Email..."></fg-input>

                  <fg-input v-model="form.password" addon-left-icon="nc-icon nc-key-25" placeholder="Password" type="password"></fg-input>
                  <br>

                  <p-checkbox>
                    Remember me !
                  </p-checkbox>

                  <p-button native-type="submit" slot="footer" type="success" round block class="mb-3">Let's get in !</p-button>
                </card>
              </form>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background" :style="{backgroundImage: `url(${backgroundImage}`}"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Checkbox, Button } from '../components/UIComponents';
  import AppNavbar from '../components/Dashboard/Views/Pages/Layout/AppNavbar'
  import AppFooter from '../components/Dashboard/Views/Pages/Layout/AppFooter'

  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button
    },
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      getBackground() {
        const backgrounds = [
          'https://images.pexels.com/photos/733174/pexels-photo-733174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          'https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        ];

        return backgrounds[Math.floor(Math.random() * backgrounds.length)];
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      login() {
        const { username, password } = this.form;
        const { dispatch } = this.$store;
          if (username && password) {
            dispatch('authentication/login', { username, password });
          }
      }
    },
    data() {
      return {
        backgroundImage: this.getBackground(),
        form: {
          username: process.env.NODE_ENV === 'production' ? '' : 'alain.fresco@gmail.com',
          password: process.env.NODE_ENV === 'production' ? '' : '123456'
        },
        loading: false
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
