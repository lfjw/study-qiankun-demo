import Vue from 'vue'
import VueRouter from "vue-router";
import routes from "./router";
import App from './App.vue'
import store from './store'

Vue.use(VueRouter)

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 声明变量管理vue及路由实例
let router = null;
let instance = null;

export async function bootstrap(props = {}) {
  Array.isArray(props.fns) && props.fns.map(i => {
    Vue.prototype[i.name] = i[i.name]
  });
}

// eslint-disable-next-line no-unused-vars
export async function mount(props) {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/order" : "/",
    mode: "history",
    routes
  });
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}
// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();

