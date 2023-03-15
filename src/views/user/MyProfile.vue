<template>
    <div class="text-900 font-semibold text-lg mt-3">내 정보</div>
    <Divider></Divider>
    <div class="flex gap-5 flex-column-reverse md:flex-row">
        <div class="flex-auto p-fluid">
            <div class="mb-4">
                <label for="nickname" class="block font-medium text-900 mb-2">닉네임</label>
                <InputText id="nickname" type="text" />
            </div>
            <div class="mb-4">
                <label for="theme" class="block font-medium text-900 mb-2">여행테마</label>
                <InputText id="theme" type="text" />
            </div>
            <div class="mb-4">
                <label for="age" class="block font-medium text-900 mb-2">나이</label>
                <InputText id="age" type="text" disabled />
            </div>
            <div>
                <Button label="Update Profile" class="w-auto"></Button>
            </div>
        </div>
        <div class="flex flex-column align-items-center flex-or">
            <span class="font-medium text-900 mb-2">Profile Picture</span>
            <section v-if="result.dataURL && result.blobURL" class="section q-mx-lg">
                <div class="preview">
                    <img :src="result.dataURL" size="large" shape="circle" class="h-10rem w-10rem" />
                </div>
            </section>
            <FileUpload mode="basic" accept="image/*" :custom-upload="true" :auto="true" @uploader="selectFile">
            </FileUpload>

            <image-pre-view
                :pic="pic"
                :isShowModal="isShowModal"
                @cancel:pic="cancelThumbnail"
                @update:pic="updatePic"
            />
        </div>
    </div>
</template>

<script setup>
import ImagePreView from '@/components/common/ImagePreView.vue';
import { reactive, ref } from 'vue';

const uploadInput = ref(null);
const pic = ref('');
const isShowModal = ref(false);
const imageFile = ref(null);

const result = reactive({
    dataURL: '',
    blobURL: '',
});

const cancelThumbnail = () => {
    result.dataURL = '';
    result.blobURL = '';
    imageFile.value = null;
    isShowModal.value = false;
};

const updatePic = (dataUrl, blob) => {
    result.dataURL = dataUrl;
    result.blobURL = blob;
    isShowModal.value = false;
};

const selectFile = event => {
    const file = event.files[0];
    // Reset last selection and results
    pic.value = '';
    result.dataURL = '';
    result.blobURL = '';
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        // Update the picture source of the `img` prop
        pic.value = String(reader.result);
        // Show the modal
        isShowModal.value = true;
        // Clear selected files of input element
        if (!uploadInput.value) return;
        uploadInput.value.value = '';
    };
};
</script>

<style lang="scss" scoped></style>
