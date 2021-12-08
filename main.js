import Vue from 'vue'

import ref from "vue-ref" // npm install --save vue-ref

Vue.config.productionTip = false
Vue.use(ref, { name: "ant-ref" });

new Vue({
  render: h => h(App),
}).$mount('#app')
