<template>
    <div class="serviceManagement">
        <menubar
                class="text-right"
                @change="service_management_show"
        ></menubar>
        <div
                class="text-center"
                v-show="service_management"
        >
            <h4> A list of created services</h4>
            <div class="container">
                <div class="mb-2 col-md-8">
                    <b-form-input type="text" v-model="keyword" placeholder="search"></b-form-input>
                </div>
                <hr class="mt-3 w-100">
                <div
                        class="text-left mt-3 mr-3 col-md-5 service"
                        v-for="service in filteredServices" :key="service.id"
                >
                    <h5 class="mt-3 ml-2" v-text="service.name"></h5>
                    <h6 class="ml-2" v-text="service.content"></h6>
                    <div class="text-right img mb-3">
                        <router-link :to="service.path">
                            <img alt="information" src="../../assets/information.png"
                                 width="35px" height="35px">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import menubar from "../modules/menubar";
    export default {
        name: "ServiceManagement",
        components: {
            menubar
        },
        data: function(){
            return{
                service_management: true,
                keyword: '',
                services: [
                    {
                        id:1,
                        name: '光',
                        content: 'サービス内容',
                        path: '/ServiceSettings'
                    },
                    {
                        id:2,
                        name: '温度',
                        content: 'サービス内容',
                        path: '/ServiceSettings'
                    },
                    {
                        id:3,
                        name: 'サービス名',
                        content: 'サービス内容',
                        path: '/ServiceSettings'
                    },
                    {
                        id:4,
                        name: 'サービス名',
                        content: 'サービス内容',
                        path: '/ServiceSettings'
                    },
                    {
                        id:5,
                        name: 'サービス名',
                        content: 'サービス内容',
                        path: '/ServiceSettings'
                    },
                    {
                        id:6,
                        name: 'サービス名',
                        content: 'サービス内容',
                        path: '/ServiceSettings'
                    }
                ]
            }
        },
        methods: {
            service_management_show(){
                this.service_management = !this.service_management;
            },
        },
        computed: {
            filteredServices: function () {
                const services = [];
                for(const i in this.services){
                    const service = this.services[i];
                    if((service.name.indexOf(this.keyword) !== -1)
                        ||(service.content.indexOf(this.keyword) !== -1)){
                        services.push(service)
                    }
                }
                return services;
            }
        }
    }
</script>

<style scoped>
    .serviceManagement {
        font: normal normal normal 25px/38px Gujarati Sangam MN;
        margin: 45px 40px 20px 40px;
    }
    h4 {
        font-weight: bold;
    }
    h5,h6 {
        color: white;
    }
    .service {
        position: relative;
        background-color: gray;
        border-radius: 42px;
        height: 250px;
    }
    .img {
        position: absolute;
        bottom: 0;
        width: 90%;
    }
</style>
