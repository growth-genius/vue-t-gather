<template>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="grid">
            <div class="col-12 lg:col-2">
                <div class="text-900 font-medium text-xl mb-3">여행 그룹 등록</div>
                <p class="m-0 p-0 text-600 line-height-3 mr-3">
                    같이 즐기실 여행을 등록하고 회원분들을 모집해 보세요 !
                </p>
            </div>
            <div class="col-12 lg:col-10">
                <form @submit.prevent="handleSubmit(!v$.$invalid)">
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-12 ml-2">
                            <label
                                for="travelGroupName"
                                class="font-medium text-900"
                                :class="{ 'p-error': v$.travelGroupName.$invalid && submitted }"
                                >그룹 명</label
                            >
                            <label
                                for="travelGroupName"
                                class="font-medium text-900"
                                :class="{ 'p-error': v$.travelGroupName.$invalid && submitted }"
                                >이메일</label
                            >
                            <InputText
                                id="nickname"
                                type="text"
                                v-model="v$.travelGroupName.$model"
                                input-id="travelGroupName"
                            />
                        </div>
                        <section v-if="result.dataURL && result.blobURL" class="section q-mx-lg">
                            <div class="preview">
                                <img :src="result.dataURL" alt="" style="min-width: 100%" />
                            </div>
                        </section>
                        <div class="field mb-4 col-12" style="width: 50%">
                            <label for="avatar" class="font-medium text-900">배너</label>

                            <div class="flex align-items-center">
                                <input type="file" @change="selectFile($event)" />
                            </div>
                        </div>
                        <image-pre-view
                            :pic="pic"
                            :isShowModal="isShowModal"
                            @cancel:pic="cancelThumbnail"
                            @update:pic="updatePic"
                        />
                        <div class="field mb-4 col-12">
                            <label for="startDate" class="font-medium text-900">시작일자</label>
                            <Calendar v-model="travelGroup.startDate" dateFormat="yy-mm-dd" input-id="startDate" />
                        </div>
                        <div class="field mb-4 col-12">
                            <label for="participantCount" class="font-medium text-900">참가자 제한 수</label>
                            <InputNumber v-model="travelGroup.participantCount" input-id="participantCount" />
                        </div>

                        <div class="field mb-4 col-12">
                            <label for="open" class="font-medium text-900">공개 여부</label>
                            <InputSwitch v-model="travelGroup.open" input-id="open" />
                        </div>

                        <div class="col-12 flex justify-content-center mt-5">
                            <Button label="등록" type="submit" class="w-auto mt-3"></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import ImagePreView from '@/components/common/ImagePreView.vue';
import { getTravelRegisterInit } from '@/api/travel';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

onMounted(() => {
    getInit();
});
const getInit = async () => {
    const res = await getTravelRegisterInit();
    if (res.success) {
        travelThemes.value = res.response.travelThemes;
    }
};
const travelThemes = ref([]);

const isShowModal = ref(false);

const travelGroup = ref({
    travelGroupName: '',
    participantCount: 0,
    travelThemes: [],
    startDate: new Date(),
});
const imageFile = ref(null);

const rules = {
    travelGroupName: { required },
    participantCount: { required },
    travelThemes: { required },
    startDate: { required },
};
const v$ = useVuelidate(rules, travelGroup);
const submitted = ref(false);

const updatePic = (dataUrl, blob) => {
    result.dataURL = dataUrl;
    result.blobURL = blob;
    isShowModal.value = false;
};

const handleSubmit = async isFormValid => {
    submitted.value = true;
    if (!isFormValid) {
        return;
    }
    alert('?');
};

const uploadInput = ref(null);
const pic = ref('');

const result = reactive({
    dataURL: '',
    blobURL: '',
});
/**
 * Select the picture to be cropped
 */

const selectFile = event => {
    const file = event.target.files[0];
    // Reset last selection and results
    pic.value = '';
    result.dataURL = '';
    result.blobURL = '';
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        // Update the picture source of the `img` prop
        pic.value = String(reader.result);
        console.log(pic.value);
        // Show the modal
        isShowModal.value = true;
        // Clear selected files of input element
        if (!uploadInput.value) return;
        uploadInput.value.value = '';
    };
};

const cancelThumbnail = () => {
    result.dataURL = '';
    result.blobURL = '';
    imageFile.value = null;
    isShowModal.value = false;
};
</script>

<style lang="scss" scoped></style>
