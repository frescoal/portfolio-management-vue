<template>
  <div class="user">
    <div class="photo">
      <img
        src="https://vignette.wikia.nocookie.net/onepiece/images/7/77/Tony_Tony_Chopper_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/270?cb=20130525185102&path-prefix=fr"
        alt="user avatar"
      />
    </div>
    <div class="info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click="toggleMenu" href="#">
        <span>
          Toni Chopper
          <b class="caret"></b>
        </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <collapse-transition>
          <ul class="nav nav-menu" v-show="!isClosed">
            <li>
              <a href="#">
                <span class="sidebar-mini-icon">Mp</span>
                <span class="sidebar-normal">My Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="sidebar-mini-icon">Ep</span>
                <span class="sidebar-normal">Edit Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="sidebar-mini-icon">S</span>
                <span class="sidebar-normal">Settings</span>
              </a>
            </li>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";

export default {
  components: {
    CollapseTransition
  },
  data() {
    return {
      isClosed: true
    };
  },
  methods: {
    toggleMenu() {
      this.isClosed = !this.isClosed;
    }
  }
};
</script>
<style scoped>
.nav.nav-menu {
  margin-top: 0;
}
</style>
