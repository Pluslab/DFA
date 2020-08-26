<template>
    <div class="SignUp">
        <div class="text-center container">
            <div class="col-md-12">
                <h4 class="mt-4">Sign up</h4>
                <div class="mt-2">
                    <b-alert v-model="showError" dismissible variant="danger">{{
                        errorMessage
                        }}</b-alert>
                </div>
                <LoginIn></LoginIn>
                <div class="mt-5">
                    <router-link  :to="{ name: 'SignIn' }" @click="emailSignUp">
                        <b-button pill class="button_sign_up" >Sign up</b-button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginIn from "../modules/LoginIn";

    export default {
        name: "SignIn",
        components: {
            LoginIn
        },
        data() {
            return {
                email: "",
                password: "",
                errorMessage: "",
                showError: false,
                show: true
            };
        },
        methods: {
            emailSignUp() {

            },
        }
    };
</script>

<style scoped>
    .mt-2 {
        margin-top: 2px;
    }
    .SignUp{
        width: 100%;
        margin: 45px 40px 20px 40px;
        font: normal normal normal 25px/38px Gujarati Sangam MN;
        text-align: center;
    }
    h4 {
        font-weight: bold;
    }
    button {
        background: #EC723B 0% 0% no-repeat padding-box;
    }
    .button_sign_up {
        width: 100%;
        background: #EC723B 0% 0% no-repeat padding-box;
        border-color: #EC723B;
        font-size: 25px;
        opacity: 1;
        color: white;
    }
</style>
