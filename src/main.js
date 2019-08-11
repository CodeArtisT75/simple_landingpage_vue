import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import router from './routes/router';

/** import bootstrap for app */
import bootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import scrollTo from 'vue-scrollto';

/** particle js */
import particleJS from 'vue-particles';

Vue.use(bootstrapVue);
Vue.use(scrollTo, { offset: -86, duration: 1100, easing: 'ease-in-out' });
Vue.use(particleJS);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
