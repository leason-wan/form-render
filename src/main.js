import  Vue from 'vue'
import  App from './App.vue'
// import  Element from 'element-ui';
import  'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Vue.use(Element, { size: 'small' })