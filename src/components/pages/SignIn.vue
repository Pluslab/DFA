<template>
    <div class="SignIn">
            <div class="text-center container">
                    <div class="col-md-12">
                        <div class="sign_up">
                            <router-link :to="{name :'SignUp'}">
                                <b-button pill class="button_sign_up">
                                    Sign up
                                </b-button>
                            </router-link>
                        </div>
                        <h4 class="mt-4">Sign in</h4>
                        <div class="mt-2">
                            <b-alert v-model="showError" dismissible variant="danger">{{
                                errorMessage
                                }}</b-alert>
                        </div>
                        <div class=" mt-2">
                                <b-button pill class="button_sign_in_sso" @click="googleLogin">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <img alt="google"
                                                 src="https://img.icons8.com/color/48/000000/google-logo.png"
                                                 width="30px" height="30px">
                                        </div>
                                        <div class="col-md-11">
                                            with Google
                                        </div>
                                    </div>
                                </b-button>
                        </div>
                        <div class="mt-3">
                            <b-button pill class="button_sign_in_sso" @click="facebookLogin">
                                <div class="row">
                                    <div class="col-md-1">
                                        <img alt="FB"
                                             src="../../assets/FB.png"
                                             width="30px" height="30px">
                                    </div>
                                    <div class="col-md-11">
                                        with Facebook
                                    </div>
                                </div>
                            </b-button>
                        </div>
                        <div class="row">
                            <div class="col-sm-5">
                                <hr>
                            </div>
                            <div class="col-sm-2">
                                <h5 class=" mt-3">or</h5>
                            </div>
                            <div class="col-sm-5">
                                <hr>
                            </div>
                        </div>
                        <LoginIn></LoginIn>
                        <div class="mt-5">
                            <router-link  :to="{ name: 'Top', query : { id: show }}" @click="emailLogin">
                                <b-button pill class="button_sign_in" >Sign in</b-button>
                            </router-link>
                        </div>
                    </div>
            </div>
        </div>
</template>

<script>
    import firebase from "firebase/app";
    import router from "../../router/index.js";
    import Cookies from 'js-cookie';
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
            emailLogin() {
                this.show = !this.show;
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(result => {
                        console.log(result);
                        router.push("/");
                        this.show = !this.show;
                    })
                    .catch(error => {
                        console.log(error);
                        this.errorMessage = error.message;
                        this.showError = true;
                    });
            },
            googleLogin() {
                const provider = new firebase.auth.GoogleAuthProvider();

                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => {
                        Cookies.set('token', result.user.xa);
                        console.log(result.user.xa);
                        router.push("/");
                    })
                    .catch(error => {
                        console.log(error);
                        this.errorMessage = error.message;
                        this.showError = true;
                    });
            },
        }
    };
</script>

<style scoped>
    .mt-2 {
        margin-top: 2px;
    }
    .SignIn{
        width: 100%;
        margin: 45px 40px 20px 40px;
        font: normal normal normal 25px/38px Gujarati Sangam MN;
        text-align: center;
    }
    .sign_up {
        text-align: right;
    }
    .button_sign_up {
        width: 20%;
        border-color: #EC723B;
    }
    h4 {
        font-weight: bold;
    }
    hr {
        border-width: 1px 0px 0px 0px;
        border-style: solid;
        border-color: black;

    }
   img {
        text-align: left;
    }
   button {
       background: #EC723B 0% 0% no-repeat padding-box;
   }
   .button_sign_in_sso,.button_sign_in {
       width: 100%;
       background-color: white;
       color: black;
    }
    .button_sign_in {
        width: 100%;
        background: #EC723B 0% 0% no-repeat padding-box;
        border-color: #EC723B;
        font-size: 25px;
        opacity: 1;
        color: white;
    }
</style>
