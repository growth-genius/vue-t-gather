<template>
    <Dialog
        v-model:visible="modalStore.isShowJoinGroupModal"
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
                            <span class="bold text-2xl text-center">여행그룹 참가 확인</span>
                        </div>
                        <div>
                            <Button
                                icon="pi pi-times"
                                class="mr-2 p-button-danger p-button-sm"
                                label="취소"
                                @click="cancelJoinTravelGroup"
                            />
                        </div>
                    </div>
                </template>
                <template #content>
                    <section v-if="travelGroup.profileImage" class="section q-mx-lg">
                        <div class="preview">
                            <img :src="travelGroup.profileImage" alt="" style="min-width: 100%" />
                        </div>
                    </section>
                    <div class="flex justify-content-center text-center mb-3">
                        <Button @click="modalStore.toggleProfileImageModal()" label="프로필 추가"></Button>
                    </div>
                    <image-pre-view @update:pic="updatePic" class="buttonColorGreen" />
                    <label for="nickname"> 닉네임 : </label>
                    <input-text
                        id="nickname"
                        v-model="v$.nickname.$model"
                        :class="{ 'p-invalid': v$.nickname.$invalid && submitted }"
                    />
                </template>
                <template #footer>
                    <Button
                        label="참여하기"
                        icon="pi pi-check"
                        @click="requestJoinTravelGroup(!v$.$invalid)"
                        style="background-color: #03d069"
                    />
                </template>
            </Card>
        </div>
    </Dialog>
</template>
<script setup>
import { defineEmits, reactive, ref } from 'vue';
import { helpers, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useModalStore } from '@/store/modal';
import ImagePreView from '@/components/common/ImagePreView.vue';
import { joinTravelGroup } from '@/api/travel';

const modalStore = useModalStore();
const submitted = ref(false);

const travelGroup = reactive({ profileImage: '', nickname: '' });

const updatePic = dataUrl => {
    travelGroup.profileImage = dataUrl;
};
const cancelJoinTravelGroup = () => {
    emits('cancel:travelGroup');
    cancelTravelGroup();
};

const cancelTravelGroup = () => {
    travelGroup.profileImage = '';
    travelGroup.nickname = '';
};

const requestJoinTravelGroup = async isValid => {
    submitted.value = true;
    const travelGroupId = modalStore.getTravelGroupId;
    if (!isValid) {
        return;
    }
    const res = await joinTravelGroup(travelGroupId, travelGroup);
    if (res.success) {
        alert('여행그룹에 성공적으로 가입했습니다.');
        cancelJoinTravelGroup();
    } else {
        alert(res.message);
        cancelTravelGroup();
    }
};

const emits = defineEmits(['update:travelGroup', 'cancel:travelGroup']);
const rules = {
    nickname: {
        required: helpers.withMessage('닉네임을 입력해 주세요.', required),
    },
};
const v$ = useVuelidate(rules, travelGroup);
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
