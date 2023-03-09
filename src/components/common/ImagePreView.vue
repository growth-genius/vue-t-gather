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
            <template #header>
                <Button
                    icon="pi pi-times"
                    class="mr-2 p-button-danger p-button-sm"
                    label="취소"
                    @click="cancelThumbnail"
                />
                <!--                    <q-btn
            icon="visibility"
            label="초기화"
            push
            @click="clear"
        />-->
                <Button icon="pi pi-refresh" class="mr-2 p-button-help p-button-sm" label="리셋" @click="reset" />
                <Button icon="pi pi-check" class="mr-2 p-button-info p-button-sm" label="확인" @click="getResult" />
            </template>
            <template #content>
                <section>
                    <VuePictureCropper
                        :boxStyle="{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#f8f8f8',
                            margin: 'auto',
                        }"
                        :img="prop.pic"
                        :options="{
                            viewMode: 1,
                            dragMode: 'crop',
                            aspectRatio: 16 / 9,
                        }"
                        @ready="ready"
                    />
                </section>
            </template>
        </Card>
    </Dialog>
</template>

<script setup>
import VuePictureCropper, { cropper } from 'vue-picture-cropper';
import { defineEmits, defineProps, ref, watch } from 'vue';

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
watch(
    () => prop.isShowModal,
    value => {
        isShowModal.value = value;
    },
);
const isShowModal = ref(prop.isShowModal);
const cancelThumbnail = () => {
    emits('cancel:pic');
};
const emits = defineEmits(['update:pic', 'cancel:pic']);

/**
 * Get cropping results
 */
async function getResult() {
    if (!cropper) return;
    const dataUrl = cropper.getDataURL();
    const blob = await cropper.getBlob();
    if (!blob) return;
    emits('update:pic', dataUrl, URL.createObjectURL(blob));
}
/**
 * Reset the default cropping area
 */
const reset = () => {
    if (!cropper) return;
    cropper.reset();
};
/**
 * The ready event passed to Cropper.js
 */
const ready = () => {
    console.log('Cropper is ready.');
};
</script>

<style lang="scss" scoped></style>
