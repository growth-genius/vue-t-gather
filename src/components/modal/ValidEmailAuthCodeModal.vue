<template>
    <Dialog
        v-model:visible="modalStore.isShowEmailAuthCodeModal"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :closable="false"
    >
        <div class="justify-content-center text-center">
            <Card>
                <template #header>
                    <div class="flex justify-content-around">
                        <div />
                        <div>
                            <span class="bold text-2xl text-center">이메일 인증</span>
                        </div>
                        <div>
                            <Button
                                icon="pi pi-times"
                                class="mr-2 p-button-danger p-button-sm"
                                label="취소"
                                @click="cancelEmailAuthCode"
                            />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div>
                        <div class="mb-5">
                            <label for="email"> 이메일 : </label>
                            <input-text id="email" v-model="authCodeForm.email" />
                        </div>
                        <div>
                            <label for="authCode"> 인증코드 : </label>
                            <input-text id="authCode" v-model="authCodeForm.authCode" />
                        </div>
                    </div>
                </template>
                <template #footer>
                    <Button label="인증하기" @click="requestEmailAuthCode" style="background-color: #03d069"> </Button>
                </template>
            </Card>
        </div>
    </Dialog>
</template>
<script setup>
import { defineEmits, reactive, ref } from 'vue';
import { useModalStore } from '@/store/modal';
import { validAuthCode } from '@/api/auth';

const modalStore = useModalStore();
const submitted = ref(false);
const emits = defineEmits(['cancel:authCode']);
const authCodeForm = reactive({
    email: '',
    authCode: '',
});

const cancelEmailAuthCode = () => {
    emits('cancel:authCode');
    cancelAuthCodeForm();
};
const cancelAuthCodeForm = () => {
    authCodeForm.value.email = '';
    authCodeForm.value.authCode = '';
};

const requestEmailAuthCode = async () => {
    submitted.value = true;
    const res = await validAuthCode(authCodeForm);
    if (res.success) {
        alert('이메일 인증이 완료되었습니다.');
        cancelEmailAuthCode();
    } else {
        alert(res.message);
        cancelAuthCodeForm();
    }
};
</script>
<style>
.profile-button {
    padding: 6px 25px;
    background-color: #03d069;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}

.profile-button:hover {
    background-color: #03d069;
    transition: 0.7s;
}
</style>
