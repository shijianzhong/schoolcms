// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import home from './pages/home'
// import Mint from 'mint-ui';
import weimingSchool from './pages/weimingSchool'
import berkeleySchool from './pages/berkeleySchool'
import berkeleyPrim from './pages/berkeleyPrim'
import berkeleyAbbre from './pages/berkeleyAbbre'
import berkeleyHigh from './pages/berkeleyHigh'
import berkeleyPre from './pages/berkeleyPre'
import cooperateHigh from './pages/cooperateHigh'
import publicProject from './pages/publicpageForProject'
import detailinter from './components/detailInterinfo.vue'
import activespecial from './pages/activespecial.vue'
import activespecialdetail from './pages/activespecialdetail.vue'
import michiganLearningcenter from './pages/michiganLearningcenter.vue'
// Vue.use(Mint);


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
    },
    {
        path: '/berkeleyprim',
        component: berkeleyPrim
    },
    {
        path: '/berkeleyabbre',
        component: berkeleyAbbre
    },
    {
        path: '/berkeleyhigh',
        component: berkeleyHigh
    },
    {
        path: '/berkeleypre',
        component: berkeleyPre
    },
    {
        path: '/cooperatehigh',
        component: cooperateHigh
    },
    {
        path: '/publicproject',
        component: publicProject
    },
    {
        path: '/detailinter',
        component: detailinter
    },
    {
        path: '/activespecial',
        component: activespecial
    },
    {
        path: '/activespecialdetail',
        component: activespecialdetail
    },
    {
        path: '/michiganlearncenter',
        component: michiganLearningcenter
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