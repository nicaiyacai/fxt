import Vue from 'vue'
import App from './App.vue'
import store from '../store'
import { button, Select,Row} from 'element-ui'
import router from "../router"
Vue.use(button);Vue.use(Select);Vue.use(Row)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
