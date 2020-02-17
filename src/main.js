import Vue from 'vue'
import App from './App.vue'
require("bootstrap/scss/bootstrap.scss");


Vue.config.productionTip = false
Vue.config.devtools = false;
new Vue({
  render: h => h(App),
}).$mount('#app')
