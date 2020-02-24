<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <div v-for='(item, index) in arr' :key='index'>
          {{pathname}}
          <div @click='n(item.path)' :class="[ pathname.startsWith(item.name) ? 'active' : '']">{{item.name}}</div>
        </div>
        <!-- <div @click='n("/zc")' class='active'>展翅模块</div>
         <div @click='n("/order")'>订单模块</div> -->
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div v-html='content'></div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    content: String
  },
  data() {
    return {
      arr: [
        { name: "展翅", path: "/zc" },
        { name: "订单", path: "/order" }
      ],
      pathname: window.location.pathname
    };
  },
  mounted() {
    console.log(window.location.pathname);

    console.log(this.content);
  },
  watch: {
    'location.pathname'(val) {
      console.log(val,'------');
      
    }
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
.active {
  color: red;
}
</style>

