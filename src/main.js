// 1번 vue.runtime.esm.js?2b0e:619 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

// import Vue from 'vue'
// import Vue from 'vue/dist/vue'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
 // rouet index.js에서 Vue.use(VueRouter)시 오류 WHY ??? ??



new Vue({
  el: '#app',
  // routes,
  store,
  router,
  render: h => h(App),
})


