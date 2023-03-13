<template>
    <div
        :style="{ backgroundImage: `url(${require('@/assets/signInBackground.jpeg')}` }"
        class="px-4 py-8 md:px-6 lg:px-8 background"
    >
        <div class="flex w-full h-full align-items-center">
            <div class="flex flex-wrap w-full">
                <div
                    class="flex w-full lg:w-6 p-4 lg:p-7 justify-content-center align-items-center"
                    style="background-color: rgba(255, 255, 255, 0.7)"
                >
                    <img :src="require('@/assets/tgather_signin_logo.png')" alt="signIn" class="logo_image" />
                </div>
                <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
                    <div class="text-900 text-2xl font-medium mb-6">Login</div>
                    <label for="email3" class="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email3" type="text" placeholder="Email address" class="w-full mb-4" />

                    <label for="password3" class="block text-900 font-medium mb-2">Password</label>
                    <InputText id="password3" type="password" placeholder="Password" class="w-full mb-4" />

                    <div class="flex align-items-center justify-content-between mb-6">
                        <div class="flex align-items-center">
                            <Checkbox id="rememberme3" :binary="true" v-model="checked3" class="mr-2"></Checkbox>
                            <label for="rememberme3">Remember me</label>
                        </div>
                        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                            >Forgot password?</a
                        >
                    </div>
                    <Button label="Login" icon="pi pi-user" class="w-full bg-green-500"></Button>
                    <Divider align="center" class="my-6">
                        <span class="text-600 font-normal text-sm">OR</span>
                    </Divider>
                    <Button
                        label="Sign In with GitHub"
                        icon="pi pi-github"
                        class="w-full p-button-secondary bg-black-alpha-90 mb-2"
                    ></Button>
                    <Button
                        label="Sign In with Google"
                        icon="pi pi-google"
                        class="w-full p-button-secondary mb-2 bg-blue-500"
                    ></Button>
                    <div class="mt-6 text-center text-600">
                        Don't have an account?
                        <a tabindex="0" class="font-medium text-blue-500 cursor-pointer" @click="goSignUpPage"
                            >Sign up</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';

const goSignUpPage = () => {
    router.push('/auth/sign-up');
};
</script>
<style scoped>
.background {
    height: 100vh;
    background-size: cover;
}

.logo_image {
    height: 50%;
}
</style>
