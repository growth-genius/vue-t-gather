<template>
    <Dialog
        header="Header"
        v-model:visible="isShowModal"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :closable="false"
    >
        <Card>
            <template #header>여행그룹 참가 확인</template>
            <template #content></template>
            <template #footer>
                <Button label="참가하기" icon="pi pi-check" />
            </template>
        </Card>
    </Dialog>
</template>
<script setup>
import { defineProps, ref } from 'vue';

const prop = defineProps({
    pic: {
        default: '',
        type: String,
    },
    isShowModal: {
        default: false,
        type: Boolean,
    },
});
const isShowModal = ref(prop.isShowModal);
</script>
