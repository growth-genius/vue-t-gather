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
                <form @submit.prevent="saveGroup(!v$.$invalid)">
                    <div class="grid formgrid p-fluid">
                        <div class="field field mb-4 col-12">
                            <div class="p-float-label w-full">
                                <input-text
                                    id="groupName"
                                    v-model="v$.groupName.$model"
                                    class="w-full"
                                    :class="{ 'p-invalid': v$.groupName.$invalid && submitted }"
                                    aria-describedby="email-error"
                                />
                                <label for="groupName" :class="{ 'p-error': v$.groupName.$invalid && submitted }">
                                    그룹명
                                </label>
                            </div>
                            <span v-if="v$.groupName.$error && submitted">
                                <span id="email-error" v-for="(error, index) of v$.groupName.$errors" :key="index">
                                    <small class="p-error">{{ error.$message }}</small>
                                </span>
                            </span>
                            <small
                                v-else-if="(v$.groupName.$invalid && submitted) || v$.groupName.$pending.$response"
                                class="p-error"
                                >그룹 명을 입력해 주세요</small
                            >
                        </div>
                        <div class="field field mb-4 col-12 flex">
                            <div class="flex align-items-center" v-for="(item, idx) in travelThemes" :key="idx">
                                <Checkbox
                                    v-model="travelGroup.travelThemes"
                                    :inputId="item.code"
                                    name="pizza"
                                    :value="item.code"
                                />
                                <label :for="item.code" class="mx-2"> {{ item.title }} </label>
                            </div>
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
                        <div class="field mb-4 col-12 flex align-items-center">
                            <label for="limitedParticipant" class="font-medium text-900 mr-5">
                                참가자 수 제한 여부
                            </label>
                            <InputSwitch v-model="v$.limitedParticipant.$model" input-id="limitedParticipant" />
                        </div>
                        <div class="field field mb-4 col-12" v-show="v$.limitedParticipant.$model">
                            <div class="w-full">
                                <label for="participantCount" class="font-medium text-900">참가자 제한 수</label>
                                <InputNumber
                                    v-model="v$.limitParticipantCount.$model"
                                    :class="{ 'p-invalid': v$.limitParticipantCount.$invalid && submitted }"
                                    input-id="participantCount"
                                />
                            </div>
                            <span v-if="v$.limitParticipantCount.$error && submitted">
                                <span
                                    id="email-error"
                                    v-for="(error, index) of v$.limitParticipantCount.$errors"
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
import { getTravelRegisterInit, saveTravelGroup } from '@/api/travel';
import { useVuelidate } from '@vuelidate/core';
import { helpers, maxValue, minValue, required } from '@vuelidate/validators';

onMounted(() => {
    getInit();
});
const getInit = async () => {
    const res = await getTravelRegisterInit();
    console.log(res);
    if (res.success) {
        travelThemes.value = res.response.travelThemes;
    }
};
const travelThemes = ref([]);

const isShowModal = ref(false);

const travelGroup = ref({
    groupName: '',
    travelThemes: [],
    startDate: new Date(),
    imageUrl: '',
    limitParticipantCount: 1,
    limitedParticipant: false,
    open: true,
});
const imageFile = ref(null);

const rules = {
    groupName: { required: helpers.withMessage('그룹 명을 입력해 주세요.', required) },
    limitParticipantCount: {
        required: helpers.withMessage('참가제한 인원을 입력해 주세요.', required),
        minValue: helpers.withMessage('참가제한 인원을 최소 1명 이상 입력해 주세요.', minValue(1)),
        maxValue: helpers.withMessage('참가인원은 최대 100명까지만 가능합니다.', maxValue(100)),
    },
    travelThemes: { required: helpers.withMessage('테마를 한개 이상 선택해 주세요.', required) },
    startDate: { required },
    limitedParticipant: {},
    open: { required },
};
const v$ = useVuelidate(rules, travelGroup);
const submitted = ref(false);

const updatePic = (dataUrl, blob) => {
    result.dataURL = dataUrl;
    result.blobURL = blob;
    isShowModal.value = false;
    travelGroup.value.imageUrl = dataUrl;
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

const saveGroup = async isValid => {
    submitted.value = true;
    if (!isValid) {
        return;
    }
    console.log(travelGroup.value);
    const res = await saveTravelGroup(travelGroup.value);
    console.log(res);
};
</script>

<style lang="scss" scoped></style>
