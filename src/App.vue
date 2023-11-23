
import { RouterView } from 'vue-router';
<template>
  <div id="app">
      <the-logo></the-logo>
      <the-nav-bar></the-nav-bar>
      <router-view></router-view>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  </div>
</template>
<script>
import TheNavBar from './components/TheNavBar.vue'
import TheLogo from './components/TheLogo.vue'

export default {
  name: 'App',
  components: {
    TheLogo,
    TheNavBar,
  },
  // mounted:{

  // },
  // updated:{

  // }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
