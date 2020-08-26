<template>
    <div class="login">
        <div class="mt-2">
            <b-form-input
                    v-model="email"
                    type="text"
                    placeholder="Email"/>
        </div>
        <div class="mt-3">
            <b-form-input
                    v-model="password"
                    type="text"
                    placeholder="Password"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginIn"
    }
</script>

<style scoped>

</style>
