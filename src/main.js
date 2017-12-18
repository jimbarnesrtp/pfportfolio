
String.prototype.startsWithI = function(s) {
  return this.toLowerCase().startsWith(s.toLowerCase())
} 

var sortPlayers = function(a, b) {
  if(b.init==a.init) {
        return b.bonus-a.bonus;
    } else {
      return b.init-a.init;
    }

}


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router

import store from './store/store'

Vue.use(VueRouter)


//define your routes
//import the hello component
import Hello from './components/Hello'
//import the about component

//define your routes
const routes = [
  //route for the home route of the web page
  { path: '/', component: Hello },
  //route for the about route of the web page
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  // template: '<App/>',
  render: h => h(App),
  //declare components that the root component can access
  //pass in the router to the Vue instance
  router,
  store
  
}).$mount('#app')//mount the router on the app