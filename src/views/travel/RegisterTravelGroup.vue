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
                        <div class="field field mb-4 col-12">
                            <div class="p-float-label w-full">
                                <input-text
                                    id="travelGroupName"
                                    v-model="v$.travelGroupName.$model"
                                    class="w-full"
                                    :class="{ 'p-invalid': v$.travelGroupName.$invalid && submitted }"
                                    aria-describedby="email-error"
                                />
                                <label
                                    for="travelGroupName"
                                    :class="{ 'p-error': v$.travelGroupName.$invalid && submitted }"
                                >
                                    그룹명
                                </label>
                            </div>
                            <span v-if="v$.travelGroupName.$error && submitted">
                                <span
                                    id="email-error"
                                    v-for="(error, index) of v$.travelGroupName.$errors"
                                    :key="index"
                                >
                                    <small class="p-error">{{ error.$message }}</small>
                                </span>
                            </span>
                            <small
                                v-else-if="
                                    (v$.travelGroupName.$invalid && submitted) || v$.travelGroupName.$pending.$response
                                "
                                class="p-error"
                                >그룹 명을 입력해 주세요</small
                            >
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
                        <div class="field field mb-4 col-12">
                            <div class="w-full">
                                <label for="participantCount" class="font-medium text-900">참가자 제한 수</label>
                                <InputNumber
                                    v-model="v$.participantCount.$model"
                                    :class="{ 'p-invalid': v$.participantCount.$invalid && submitted }"
                                    input-id="participantCount"
                                />
                            </div>
                            <span v-if="v$.participantCount.$error && submitted">
                                <span
                                    id="email-error"
                                    v-for="(error, index) of v$.participantCount.$errors"
                                    :key="index"
                                >
                                    <small class="p-error">{{ error.$message }}</small>
                                </span>
                            </span>
                        </div>

                        <div class="field mb-4 col-12 flex align-items-center">
                            <label for="open" class="font-medium text-900 mr-5">공개 여부</label>
                            <InputSwitch v-model="v$.open.$model" input-id="open" />
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
import { helpers, maxValue, minValue, required } from '@vuelidate/validators';

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
    open: true,
});
const imageFile = ref(null);

const rules = {
    travelGroupName: { required: helpers.withMessage('그룹 명을 입력해 주세요.', required) },
    participantCount: {
        required: helpers.withMessage('참가제한 인원을 입력해 주세요.', required),
        minValue: helpers.withMessage('참가제한 인원을 최소 1명 이상 입력해 주세요.', minValue(1)),
        maxValue: helpers.withMessage('참가인원은 최대 100명까지만 가능합니다.', maxValue(100)),
    },
    travelThemes: { required: helpers.withMessage('테마를 한개 이상 선택해 주세요.', required) },
    startDate: { required },
    open: { required },
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
