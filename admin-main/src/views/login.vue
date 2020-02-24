<template>
  <div class='system-index'>
    <el-button @click="btn">登录</el-button>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  
  methods: {
    btn() {
      this.$router.push('/')
    },
    
  }
};
</script> 
<style scoped lang='less'>
</style>