<template>
    <div class="h-screen flex justify-content-center align-items-center" style="background: #f0f0f2">
        <div class="flex">
            <div class="surface-section w-full md:w-6 p-6 md:p-8">
                <div class="mb-5">
                    <Image
                        :src="require('@/assets/logo.png')"
                        alt="Image Text"
                        imageStyle="width:200px; height:200px;margin-bottom: 15px; margin-left:95px"
                    ></Image>
                    <div class="text-900 text-3xl font-medium mb-3">ToGather ! TripGather</div>
                    <span class="text-600 font-medium mr-2">계정이 없으신가요?</span>
                    <a class="font-medium no-underline text-blue-500 cursor-pointer">계정 만들기</a>
                </div>
                <div class="flex justify-content-center">
                    <div class="card" style="width: 100%">
                        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
                            <div class="field">
                                <div class="p-float-label p-input-icon-right">
                                    <i class="pi pi-envelope" />
                                    <input-text
                                        id="email"
                                        v-model="v$.email.$model"
                                        :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                                        aria-describedby="email-error"
                                    />
                                    <label for="email" :class="{ 'p-error': v$.email.$invalid && submitted }"
                                        >이메일</label
                                    >
                                </div>
                                <span v-if="v$.email.$error && submitted">
                                    <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                                        <small class="p-error">{{ error.$message }}</small>
                                    </span>
                                </span>
                                <small
                                    v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response"
                                    class="p-error"
                                    >{{ v$.email.required.$message.replace('Value', 'Email') }}</small
                                >
                            </div>
                            <div class="field">
                                <div class="p-float-label">
                                    <password
                                        id="password"
                                        v-model="v$.password.$model"
                                        :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                                        toggleMask
                                        :feedback="false"
                                    >
                                    </password>
                                    <label for="password" :class="{ 'p-error': v$.password.$invalid && submitted }">
                                        비밀번호
                                    </label>
                                </div>
                                <small
                                    v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response"
                                    class="p-error"
                                    >{{ v$.password.required.$message.replace('Value', 'password') }}</small
                                >
                            </div>
                            <Button type="submit" label="로그인" class="mt-2" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="hidden md:block w-6 bg-no-repeat bg-cover">
                <Image :src="require('@/assets/signin.jpg')" alt="signIn"></Image>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { authStore } from '@/store/auth';
import { useCookies } from 'vue3-cookies';
import { useRouter } from 'vue-router';

// const progress = progressStore();
const state = reactive({
    name: '',
    email: '',
    password: '',
    accept: null,
});
const submitted = ref(false);

const rules = {
    email: { required, email },
    password: { required },
};

const v$ = useVuelidate(rules, state);

const auth = authStore();
const router = useRouter();
const { cookies } = useCookies();
const handleSubmit = async isFormValid => {
    submitted.value = true;
    if (!isFormValid) {
        return;
    }
    console.log('뭐가 문제야 헤이 썸띵');
    let res = await auth.LOGIN(state);
    if (res.success) {
        await router.push('/');
        cookies.set(process.env.VUE_APP_AUTH_REFRESH_TOKEN, res.refreshToken);
        cookies.set(process.env.VUE_APP_AUTH_TOKEN, res.accessToken);
    }
};
</script>

<style lang="scss" scoped>
.form-demo {
    .card {
        min-width: 450px;

        form {
            margin-top: 2rem;
        }

        .p-field {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}
</style>
