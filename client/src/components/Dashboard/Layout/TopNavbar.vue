<template>
  <navbar v-model="showNavbar">
    <div class="navbar-wrapper">
      <div class="navbar-minimize">
        <button id="minimizeSidebar" class="btn btn-icon btn-round" @click="minimizeSidebar">
          <i class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"></i>
          <i class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"></i>
        </button>
      </div>
      <div class="navbar-toggle">
        <navbar-toggle-button @click.native="toggleSidebar"></navbar-toggle-button>
      </div>
      <a class="navbar-brand" href="/">Portfolio management</a>
    </div>

    <template slot="navbar-menu">
      <router-link to="/admin" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-layout-11"></i> Dashboard
        </a>
      </router-link>
      <router-link to="/register" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-book-bookmark"></i> Register
        </a>
      </router-link>
      <router-link to="/login" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-tap-01"></i> Login
        </a>
      </router-link>

      <router-link to="/pages/user" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-satisfied"></i> User
        </a>
      </router-link>
      <router-link to="/login" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-key-25"></i> Logout
        </a>
      </router-link>
    </template>
  </navbar>
</template>
<script>
import { Navbar, NavbarToggleButton } from "src/components/UIComponents";

export default {
  components: {
    Navbar,
    NavbarToggleButton
  },
  data() {
    return {
      activeNotifications: false,
      showNavbar: false
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    minimizeSidebar() {
      this.$sidebar.toggleMinimize();
    }
  }
};
</script>
<style>
</style>
