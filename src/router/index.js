import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/pages/Top.vue'
import SignIn from '../components/pages/SignIn.vue'
import SignUp from '../components/pages/SignUp.vue'
import SignOut from '../components/pages/SignOut.vue'
import ServiceManagement from "../components/pages/ServiceManagement";
import ServiceSettings from "../components/pages/ServiceSettings";
import DeviceManagement from "../components/pages/DeviceManagement";
import DeviceSettings from "../components/pages/DeviceSettings";
import DeviceTakeover from "../components/pages/DeviceTakeover";
import CreateServices from "../components/pages/CreateServices";
import menubar from "../components/modules/menubar";
// import firebase from 'firebase/app';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Top',
            component: Top
        },
        {
            path: '/SignIn',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '*',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/SignOut',
            name: 'SignOut',
            component: SignOut
        },
        {
            path: '/ServiceManagement',
            name: 'ServiceManagement',
            component: ServiceManagement
        },
        {
            path: '/ServiceSettings',
            name: 'ServiceSettings',
            component: ServiceSettings
        },
        {
            path: '/DeviceManagement',
            name: 'DeviceManagement',
            component: DeviceManagement
        },
        {
            path: '/DeviceSettings',
            name: 'DeviceSettings',
            component: DeviceSettings
        },
        {
            path: '/DeviceTakeover',
            name: 'DeviceTakeover',
            component: DeviceTakeover
        },
        {
            path: '/CreateServices',
            name: 'CreateServices',
            component: CreateServices
        },
        {
            path: '/menubar',
            name: 'menubar',
            component: menubar
        }
    ]
});

//未認証の場合はSignIn画面へ
router.beforeResolve((to, from, next) => {
    if (to.path == '/SignIn') {
        next();
    }else {
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         console.log("認証中");
        //         next();
        //     } else {
        //         console.log("未認証");
        //         next({path: "/SignIn"});
        //     }
        // });
        next();
    }
});

export default router;
