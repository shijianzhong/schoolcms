// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import home from './pages/home'
import Mint from 'mint-ui';
import weimingSchool from './pages/weimingSchool'
import berkeleySchool from './pages/berkeleySchool'
Vue.use(Mint);


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/weimingschool',
        component: weimingSchool
    },
    {
        path: '/berkeleyschool',
        component: berkeleySchool
    }
]

const router = new VueRouter({
    routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')