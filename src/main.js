import  Vue from 'vue'
import  App from './App.vue'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);
Vue.use(ElementUI, {
  size: 'small'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
