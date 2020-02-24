import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 第一个子应用装载完毕
  // eslint-disable-next-line no-unused-vars
  setDefaultMountApp, // 设置默认装载子应用
  start // 启动
} from "qiankun";


Vue.use(ElementUI);

// eslint-disable-next-line no-unused-vars
let app = null;

// eslint-disable-next-line no-unused-vars
function render({ appContent, loading } = {}) {
  if (!app) {

    app = new Vue({
      el: "#main-app",
      router,
      store,

      data() {
        return {
          content: appContent,
          loading
        };
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading
          }
        });
      }
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}


// eslint-disable-next-line no-unused-vars
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}


console.log();


// 调用渲染主应用
render();
// 注册子应用
registerMicroApps(
  [
    {
      name: "zc",
      // 此处根据环境来展示相应的接口
      entry: process.env.NODE_ENV == 'development' ? 'http://192.168.199.181:3333/' : 'http://localhost:5501',//{ html: '127.0.0.1:5500/', scripts: ['http://localhost:5500/js/chunk-vendors.39c71157.js', 'http://localhost:5500/js/app.312768a1.js'] },//"//localhost:5500", //"//localhost:8082",
      render,
      activeRule: genActiveRule("/zc")
    },
    {
      name: "订单模块",
      entry: process.env.NODE_ENV == 'development' ? 'http://192.168.199.181:3334/' : "http://localhost:5500",
      render,
      activeRule: genActiveRule("/order")
    },

  ],
  {
    beforeLoad: [
      app => {
        console.log("before load", app);
      }
    ], // 挂载前回调
    beforeMount: [
      app => {
        console.log("before mount", app);
      }
    ], // 挂载后回调
    afterUnmount: [
      app => {
        console.log("after unload", app);
      }
    ] // 卸载后回调
  }
)

// 设置默认子应用,参数与注册子应用时genActiveRule("/order")函数内的参数一致
//setDefaultMountApp("/zc");


// 第一个子应用加载完毕回调
runAfterFirstMounted(() => { });

// 启动微服务
start({ prefetch: true });




//Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
