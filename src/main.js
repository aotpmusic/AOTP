import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

document.title = '𝓐 𝓞 𝓣 𝓟';
Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);
