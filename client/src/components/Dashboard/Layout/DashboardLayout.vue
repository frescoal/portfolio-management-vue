<template>
  <div class="wrapper">

    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">
      <user-menu></user-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <div class="content" id="netos">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import UserMenu from 'src/components/UIComponents/SidebarPlugin/UserMenu.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      UserMenu,
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
