<template>
    <div
        :style="{ backgroundImage: `url(${require('@/assets/signInBackground.jpeg')}` }"
        class="px-4 py-8 md:px-6 lg:px-8 background"
    >
        <div class="flex w-full h-full align-items-center justify-content-center">
            <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
                <div class="text-900 text-2xl font-medium mb-6 text-center">SignUp</div>
                <form @submit.prevent="signUpAccount(!v$.$invalid)">
                    <section v-if="state.profileImage" class="section q-mx-lg">
                        <Avatar :image="state.profileImage" class="mr-2" shape="circle" size="xlarge" />
                    </section>
                    <div class="flex justify-content-center text-center mb-3">
                        <Button @click="modalStore.toggleProfileImageModal()" label="프로필 추가"></Button>
                    </div>
                    <image-pre-view
                        :isShowModal="isShowModal"
                        @update:pic="updatePic"
                        class="buttonColorGreen"
                        :ratio="1"
                    />
                    <div>
                        <label
                            for="email"
                            class="block text-900 font-medium mt-3 mb-2"
                            :class="{ 'p-error': v$.email.$invalid && submitted }"
                            >이메일</label
                        >
                        <div class="flex align-items-center inline-block">
                            <InputText
                                id="email"
                                v-model="v$.email.$model"
                                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                                type="text"
                                placeholder="Email address"
                                class="w-7 mr-2"
                            />
                            <Button
                                label="확인"
                                @click="authEmail(v$.email.$model)"
                                style="background-color: #03d069"
                            />
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
                    <div>
                        <label for="nickname" class="block text-900 font-medium mt-3 mb-2">닉네임</label>
                        <div class="flex align-items-center text-center inline-block">
                            <InputText
                                id="nickname"
                                v-model="v$.nickname.$model"
                                :class="{ 'p-invalid': v$.nickname.$invalid && submitted }"
                                type="text"
                                placeholder="nickname"
                                class="w-7 mr-2"
                            />
                            <Button
                                label="확인"
                                @click="authNickname(v$.nickname.$model)"
                                style="background-color: #03d069"
                            />
                        </div>
                    </div>
                    <label for="travelThemes" class="block text-900 font-medium mt-3 mb-2">관심있는 테마</label>

                    <label for="password3" class="block text-900 font-medium mt-3 mb-2">비밀번호</label>
                    <InputText id="password3" type="password" placeholder="Password" class="w-full mb-4" />
                    <Button label="회원가입" icon="pi pi-user" class="w-full buttonColorGreen" />
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useVuelidate } from '@vuelidate/core';
import { email, helpers, required } from '@vuelidate/validators';
import { ref } from 'vue';
import { checkEmail, checkNickname, signUp } from '@/api/auth';
import router from '@/router';
import ImagePreView from '@/components/common/ImagePreView.vue';
import { useModalStore } from '@/store/modal';

const modalStore = useModalStore();

const isShowModal = ref(false);
const submitted = ref(false);

const rules = {
    email: {
        required: helpers.withMessage('이메일을 입력해 주세요.', required),
        email: helpers.withMessage('이메일 형식을 올바르게 입력해 주세요.', email),
    },
    nickname: { required: helpers.withMessage('닉네임을 입력해 주세요.', required) },
    password: { required: helpers.withMessage('비밀번호를 입력해 주세요.', required) },
};

const state = ref({
    email: '',
    password: '',
    nickname: '',
    profileImage: '',
    travelThemes: [],
    confirmPassword: '',
});

const updatePic = dataUrl => {
    state.value.profileImage = dataUrl;
};

const v$ = useVuelidate(rules, state);

const authNickname = async nickname => {
    const res = await checkNickname(nickname);
    if (res.success) {
        const validNickname = res.response;
        if (!validNickname) {
            alert('사용가능한 닉네임입니다.');
        } else {
            alert('사용할 수 없습니다. 다른 닉네임을 입력해주세요.');
            state.value.nickname = '';
        }
    } else {
        alert(res.response);
    }
};

const authEmail = async email => {
    const res = await checkEmail(email);
    if (res.success) {
        const validEmail = res.response;
        if (!validEmail) {
            alert('사용가능한 이메일입니다.');
        } else {
            alert('이미 가입한 이메일입니다. 다른 이메일을 입력해주세요.');
            state.value.email = '';
        }
    } else {
        alert(res.response);
    }
};

const signUpAccount = async isValid => {
    submitted.value = true;
    if (!isValid) {
        return;
    }
    const res = await signUp(state.value);
    if (res.success) {
        alert('회원가입이 성공적으로 완료되었습니다.');
        await router.push('/');
    }
};
</script>
<style>
.background {
    height: 100vh;
    background-size: cover;
}

.buttonColorGreen {
    background-color: #03d069;
}

.buttonColorGreen:hover {
    background-color: #03d069;
    transition: 0.7s;
}

.profile-button {
    padding: 6px 25px;
    background-color: #03d069;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}

label:hover {
    .profile-button {
        background-color: #03d069;
        transition: all 0.22s;
    }
}
</style>
