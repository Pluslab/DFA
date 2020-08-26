<template>
    <div class="top" >
        <div class="top_top" >
            <div class="sign_in" v-show="top_signin">
                <router-link :to="{name :'SignIn'}">
                    <b-button pill class="button_sign_in">
                        Sign in
                    </b-button>
                </router-link>
            </div>
            <menubar v-show="top_menubar" @change="top_show"></menubar>
        </div>
        <div class="image" v-show="top">
            <img alt="dfa" src="../../assets/DATA.png" >
            <br>
            <br>
            <img alt="dfa" src="../../assets/FLOW.png" >
            <br>
            <br>
            <img alt="dfa" src="../../assets/APPLICATION.png" >
        </div>
    </div>
</template>

<script>
    import menubar from "../modules/menubar";
    export default {
        name: "Top",
        components: {
            menubar
        },
        data: function () {
            return{
                top_signin: !this.$route.query.id,
                top_menubar: this.$route.query.id,
                top: true
            };
        },
        methods: {
            top_show(){
                this.top = !this.top;
            }

        }
    }
</script>

<style scoped>
.top {
    font: normal normal normal 25px/38px Gujarati Sangam MN;
    margin: 45px 40px 20px 40px;
}
.image{
    width: 100%;
    margin-top: 200px;
    text-align: left;
}
.top_top {
    text-align: right;
}
.sign_in {
    text-align: right;
}
.button_sign_in {
    width: 20%;
    background: #EC723B 0% 0% no-repeat padding-box;
    border-color: #EC723B;
    font-size: 25px;
    opacity: 1;
    color: white;
}
</style>
