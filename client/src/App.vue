<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in">
      <component v-bind:is="layout"></component>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
// Loading some plugin css asynchronously
import "sweetalert2/dist/sweetalert2.css";
import "vue-notifyjs/themes/default.css";
import DashboardLayout from "@/components/Dashboard/Layout/DashboardLayout";

export default {
  components: {
    'app-layout': DashboardLayout,
  },
  computed: {
    layout () {
      return this.$route.meta.layout !== undefined ? this.$route.meta.layout : 'app-layout';
    }
  },
};
</script>
<style lang="scss">
</style>
