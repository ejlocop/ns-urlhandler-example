import Vue from 'nativescript-vue'
import App from './components/App.vue'
import store from './store'
import { handleOpenURL, AppURL } from 'nativescript-urlhandler'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


handleOpenURL((appURL: AppURL) => {
	console.log('Got the following appURL', appURL)
})

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
