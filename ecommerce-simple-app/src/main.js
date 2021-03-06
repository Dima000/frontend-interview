import Vue from 'vue'
import ElementUI from 'element-ui';

import App from './App.vue'
import router from './plugins/router.js'
import './plugins/axios-config.js';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale: 'en' });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
