//默认导入的vue不带解析器
import Vue from "vue";
//需要导入带解析器版本的vue
// import Vue from "vue/dist/vue.esm.js";
import App from "./App";

// 去除console警告
Vue.config.productionTip = false;

new Vue({
  el: "#root",
  //第一种渲染方式，内部自带（常用）
  // 渲染 1.把导入的App组件配置对象，在vue模板中注册解析为一个标签名<App/>并使用
  //      2.把标签在模板中渲染
  render: (h) => h(App),

  //第二种渲染方式，默认导入的vue无模板解析器，
  //没有用带解析器的render函数（安装的vue-template-compiler没用上）
  //需要导入带解析器版本的vue=> vue/dist/vue.esm.js
  //注册
  // components: {
  //   App,
  // },
  // //模板
  // template: "<App/>",
});
