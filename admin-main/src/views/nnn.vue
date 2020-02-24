<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->

  <div id="root" class="main-container">
    <!-- <login></login> -->
    <router-view />
    <!-- <div class="main-container-menu">
      <div @click='n("/order")'>订单模块</div>
      <div @click='n("/zc")'>展翅模块</div>
    </div>
    <div id="root-view" class="app-view-box" v-html="content"></div> -->
  </div>

</template>

<script>
//import layout from "./views/layout.vue";

export default {
  name: "root-view",
  props: {
    loading: Boolean,
    content: String
  },
  components: {
    
  },
  methods: {
    n(href) {
      let stateObj = {};
      let title = "";
      window.history.pushState(stateObj, title, href);
    }
  },
  created() {
    console.log(this.content);
  }
};
</script>

<style scoped>
</style>

