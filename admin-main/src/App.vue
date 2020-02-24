<template>
  <div>
    <template v-if='isLogin'>
      <router-view />
    </template>
    <template v-else>
      <layout :content='content' :loading='loading'></layout>
    </template>

  </div>
</template>

<script>
import layout from "./views/layout.vue";
export default {
  props: {
    loading: Boolean,
    content: String
  },
  computed: {
    isLogin() {
      if (this.$route.path.match("login")) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    layout
  },
  methods: {
    n(href) {
      let stateObj = {};
      let title = "";
      window.history.pushState(stateObj, title, href);
    }
  }
};
</script>

<style scoped>
</style>

