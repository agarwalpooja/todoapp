import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);
// Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});
//filters
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase();
});

Vue.filter('snippet', function(value){
    return value.slice(0,100) + '...';
});
new Vue({
  el: '#app',
  render: h => h(App)
})
