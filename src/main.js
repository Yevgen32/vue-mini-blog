import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import App from './App.vue'
import Post from './components/Post.vue'
import Hello from './components/Hello.vue'
import Blog from './components/Blog.vue'


Vue.use(BootstrapVue);
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Post,
      props: true,
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
