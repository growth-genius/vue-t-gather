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
                    <div class="text-900 text-2xl font-medium mb-6">로그인</div>
                    <form @submit.prevent="login(!v$.$invalid)">
                        <div class="field">
                            <div class="p-float-label p-input-icon-right w-full">
                                <i class="pi pi-envelope" />
                                <input-text
                                    id="email"
                                    v-model="v$.email.$model"
                                    class="w-full"
                                    :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                                    aria-describedby="email-error"
                                />
                                <label for="email" :class="{ 'p-error': v$.email.$invalid && submitted }">이메일</label>
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

                        <div class="field pt-3">
                            <div class="p-float-label p-input-icon-right w-full pass-div">
                                <password
                                    id="password"
                                    v-model="v$.password.$model"
                                    :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                                    inputClass="w-full"
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
                        <Button label="Login" icon="pi pi-user" class="w-full bg-green-500" type="submit"></Button>
                    </form>
                    <div class="mt-6 text-center text-600">
                        계정이 없으신가요?
                        <a tabindex="0" class="font-medium text-blue-500 cursor-pointer" @click="goSignUpPage"
                            >회원가입</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
    <valid-email-auth-code-modal
        @cancel:auth-code="cancelEmailAuthCode"
        :isShowEmailAuthCodeModal="isShowEmailAuthCodeModal"
    />
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { email, helpers, required } from '@vuelidate/validators';
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { useModalStore } from '@/store/modal';
import ValidEmailAuthCodeModal from '@/components/modal/ValidEmailAuthCodeModal.vue';

const modalStore = useModalStore();
const submitted = ref(false);
const isShowEmailAuthCodeModal = ref(false);
const rules = {
    email: {
        required: helpers.withMessage('이메일을 입력해 주세요.', required),
        email: helpers.withMessage('이메일 형식을 올바르게 입력해 주세요.', email),
    },
    password: { required: helpers.withMessage('비밀번호를 입력해 주세요.', required) },
};
const state = ref({
    email: '',
    password: '',
    confirmPassword: '',
});
const v$ = useVuelidate(rules, state);
const goSignUpPage = () => {
    router.push('/auth/sign-up');
};

const authStore = useAuthStore();

const router = useRouter();
const toast = useToast();

const login = async isValid => {
    submitted.value = true;
    if (!isValid) {
        return;
    }
    const res = await authStore.LOGIN(state.value);

    if (res.success) {
        await router.push('/');
    } else {
        if (res.status === 400) {
            console.log('test');
            modalStore.toggleEmailAuthCodeModal();
        }
        await toast.add({
            group: 'block',
            summary: '로그인 실패',
            detail: res.message,
            closable: true,
            life: 3000,
        });
    }
};

const cancelEmailAuthCode = () => {
    modalStore.toggleEmailAuthCodeModal();
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

.pass-div .p-password {
    width: 100%;
}
</style>
