import Vue from 'vue'

import ref from "vue-ref" // npm install --save vue-ref
// import App from './App.vue'
// import App from './newapp.vue'
// import App from './index_prop.vue'
// import App from './index_event.vue'
// import App from './index_model.vue'
// import App from './index_computed.vue'
// import App from './index_watch.vue'
// import App from './index_functional.vue'
// import App from './index_zhiling.vue'
// import App from './index_provide_inject.vue'
// import App from './index_getComponentsInstance.vue'
import App from './index_JsOrJsxRender.vue1'



Vue.config.productionTip = false
Vue.use(ref, { name: "ant-ref" });

new Vue({
  render: h => h(App),
}).$mount('#app')
