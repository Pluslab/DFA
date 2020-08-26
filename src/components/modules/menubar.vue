<template>
    <div>
        <header class="header">
            <div class="header__menu">
                <div class="header__menu__line" @click=" naviOpen " :class="{'is-active': active}">
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
            </div>
        </header>
        <transition name="navi">
            <b-nav vertical class="text-center " v-show="navi">
                   <li class="mt-4" v-for="item in items" :key="item.id">
                       <b-nav-item :to="item.pathname">
                           <h4>{{ item.title }}</h4>
                       </b-nav-item>
                       <hr class="mt-4" v-if="item.id=='3'">
                   </li>
            </b-nav>
        </transition>
    </div>
</template>

<script>

    export default {
        name: "menubar",
        components:{
        },
        data: function(){
            return {
                active: false,
                navi: false,
                items: [
                    {
                        id: 1,
                        pathname: '/ServiceManagement',
                        title: 'Service Management'
                    },
                    {
                        id: 2,
                        pathname: '/DeviceManagement',
                        title: 'Device Management'
                    },
                    {
                        id:3,
                        pathname: '/CreateManagement',
                        title: 'Create Management'
                    },
                    {
                        id:4,
                        pathname: '/',
                        title: 'Sign Out'
                    },
                    {
                        id:5,
                        pathname: '/AccountDelete',
                        title: 'Account Delete'
                    },
                    {
                        id:6,
                        pathname: '/AddFunction',
                        title: 'Add Function'
                    }
                ]
            };
        },
        methods: {
            naviOpen: function() {
                this.active = !this.active;
                this.navi = !this.navi;
                this.$emit('change');
            },
        },
    }
</script>

<style css>
    div {
        display: inline-block;
        width: 100%;
    }
    .header {
        background: #fff;
        height: 60px;
        text-md-align: right;
    }
    .header__menu {
        width: 62px;
        height: 28px;
        opacity: 1;

    }
    .header__menu__line {
        width: 62px;
        height: 28px;
        margin-top: 0px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        cursor: pointer;
    }
    .header__menu__line span {
        width: 100%;
        height: 2px;
        background: #000;
        display: block;
        transition: .6s;
        position: absolute;
    }
    .header__menu__line span:first-child {
        top: 0;
    }
    .header__menu__line span:nth-child(2) {
        top: 14px;
    }
    .header__menu__line span:last-child {
        bottom: 0;
    }
    .header__menu__line.is-active span {
        transition: .6s;
    }
    .header__menu__line.is-active span:first-child {
        transform: rotate(45deg);
        top: 50%;
    }
    .header__menu__line.is-active span:nth-child(2) {
        opacity: 0;
    }
    .header__menu__line.is-active span:last-child {
        transform: rotate(-45deg);
        top: 50%;
    }
    hr {
        width: 60%;
        border-width: 1px 0px 0px 0px;
        border-style: solid;
        border-color: black;
    }
    h4 {
        font: normal normal normal 25px/38px Gujarati Sangam MN;
        color: black;
    }
    /*button {*/
    /*    background-color: white;*/
    /*    text-align: center;*/
    /*}*/
    /*.navi-enter, .navi-leave-to {*/
    /*    opacity: 0;*/
    /*}*/
    /*.navi-enter-to, .navi-leave {*/
    /*    opacity: 1;*/
    /*}*/
    /*.navi-enter-active, .navi-leave-active {*/
    /*    transition: .6s;*/
    /*}*/
</style>
