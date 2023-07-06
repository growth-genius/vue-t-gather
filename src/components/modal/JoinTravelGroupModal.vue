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
                    <label for="nickname"> 닉네임 : </label>
                    <input-text id="nickname" v-model="v$.nickname.$model" class="w-7" />
                </template>
                <template #footer>
                    <Button label="참여하기" icon="pi pi-check" />
                </template>
            </Card>
        </div>
    </Dialog>
</template>
<script setup>
import { defineEmits, ref } from 'vue';
import { helpers, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useModalStore } from '@/store/modal';

const modalStore = useModalStore();

const joinTravelGroup = ref({
    nickname: '',
});

const cancelJoinTravelGroup = () => {
    emits('cancel:travelGroup');
};

const emits = defineEmits(['update:travelGroup', 'cancel:travelGroup']);
const rules = {
    nickname: { required: helpers.withMessage('닉네임을 입력해 주세요.', required) },
};
const v$ = useVuelidate(rules, joinTravelGroup);
</script>
