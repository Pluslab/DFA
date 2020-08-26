<template>
<div>
    <div class="SignIn">
        <div class="sign_up">
            <router-link to="/SignUp" tag="button" >sign up</router-link>
            <router-view/>
        </div>
        <div class="sign_in">
            <p class="sign_in_p">Sign in</p>
            <div class="sign_in_sso">
                <img alt="FB" class="FB" src="../../assets/FB.png" >
                Facebook
            </div>
            <div class="sign_in_sso">
                <img alt="google" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                google
            </div>
            <p>or</p>
            <p>
                <input v-model="message" class="sign_in_sso" placeholder="Email">
            </p>
            <p>
                <input v-model="message" class="sign_in_sso" placeholder="Password">
            </p>
            <router-link to="/" tag="button">Sign in</router-link>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "SignOut"
    }
</script>

<style scoped>

</style>
