import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueTheMask from 'vue-the-mask'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'
import { SweetAlertOptions } from 'sweetalert2'

const options: SweetAlertOptions = {
  confirmButtonColor: '#00517C',
  customClass: {
    title: 'alert-title',
    confirmButton: 'alert-button'
  }
}

Vue.use(VueSweetalert2, options)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
