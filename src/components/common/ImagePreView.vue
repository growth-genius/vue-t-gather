<template>
    <Dialog
        header="Header"
        v-model:visible="useModal.isShowProfileImageModal"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :closable="false"
    >
        <Card>
            <template #header>
                <div class="flex justify-content-center text-center mb-3">
                    <label for="profileImage" class="profile-button font-bold text-900 text-white"> 프로필 추가 </label>
                    <div class="align-items-center">
                        <input type="file" id="profileImage" style="display: none" @change="selectFile($event)" />
                    </div>
                </div>
                <Button
                    icon="pi pi-times"
                    class="mr-2 p-button-danger p-button-sm"
                    label="취소"
                    @click="cancelThumbnail"
                />
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
                        :img="pic"
                        :options="{
                            viewMode: 1,
                            dragMode: 'crop',
                            aspectRatio: ratio,
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
import { defineEmits, defineProps, onMounted, ref } from 'vue';
import { useModalStore } from '@/store/modal';

const useModal = useModalStore();
const uploadInput = ref(null);

const prop = defineProps({
    ratio: {
        default: 16 / 9,
        type: Number,
    },
});

onMounted(() => {
    console.log(prop.ratio);
});
const pic = ref('');

const selectFile = event => {
    const file = event.target.files[0];
    // Reset last selection and results
    pic.value = '';
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        // Update the picture source of the `img` prop
        pic.value = String(reader.result);
        // Clear selected files of input element
        if (!uploadInput.value) return;
        uploadInput.value.value = '';
    };
};

const cancelThumbnail = () => {
    useModal.toggleProfileImageModal();
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
    useModal.toggleProfileImageModal();
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

<style scoped>
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
