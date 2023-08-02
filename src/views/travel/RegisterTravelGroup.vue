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
                        <div class="field mb-4 col-12">
                            <div class="p-float-label w-full">
                                <input-text
                                    id="groupName"
                                    v-model="v$.groupName.$model"
                                    class="w-full"
                                    :class="{ 'p-invalid': v$.groupName.$invalid && submitted }"
                                />
                                <label for="groupName"> 그룹명 </label>
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
                        <section class="section q-mx-lg">
                            <div class="preview">
                                <img
                                    :src="travelGroup.imageUrl ? travelGroup.imageUrl : require('@/assets/tgather.png')"
                                    class="w-16rem w-4rem"
                                />
                                <Button
                                    type="button"
                                    class="justify-content-center text-center"
                                    @click="modalStore.toggleProfileImageModal()"
                                    >업로드</Button
                                >
                            </div>
                        </section>
                        <image-pre-view @update:pic="updatePic" class="buttonColorGreen" :ratio="16 / 9" />

                        <div class="field mb-4 col-12">
                            <label for="description" class="font-medium text-90 mt-3">그룹 소개</label>
                            <textarea id="description" v-model="travelGroup.description" class="w-full"> </textarea>
                        </div>
                        <div class="field mb-4 col-12">
                            <label for="startDate" class="font-medium text-900">시작일자</label>
                            <Calendar v-model="travelGroup.startDate" dateFormat="yy-mm-dd" input-id="startDate" />
                        </div>
                        <div class="mb-5">
                            <label for="travelThemes" class="block text-900 font-medium mt-3 mb-2">여행 테마</label>
                            <SelectButton
                                v-model="v$.travelThemes.$model"
                                :options="travelThemes"
                                optionLabel="title"
                                multiple
                                aria-labelledby="multiple"
                            />
                        </div>
                        <span v-if="v$.travelThemes.$error && submitted">
                            <span id="email-error" v-for="(error, index) of v$.travelThemes.$errors" :key="index">
                                <small class="p-error">{{ error.$message }}</small>
                            </span>
                        </span>
                        <small
                            v-else-if="(v$.travelThemes.$invalid && submitted) || v$.travelThemes.$pending.$response"
                            class="p-error"
                            >여행 테마를 하나 이상 선택해 주세요.</small
                        >
                        <div class="field mb-4 col-12 flex align-items-center">
                            <label for="limitedAge" class="font-medium w-2 text-900 mr-5">
                                참가자 나이 제한 여부
                            </label>
                            <InputSwitch v-model="travelGroup.limitedAge" input-id="limitedAge" />
                        </div>
                        <div class="field mb-4 col-12" v-show="travelGroup.limitedAge">
                            <div class="w-full">
                                <label for="limitAgeRangeStart" class="font-medium w-2 text-900">나이 제한 범위</label>
                                <div class="card flex justify-content-center justify-content-center">
                                    <div class="w-14rem">
                                        <InputText v-model.number="limitAgeRange" />
                                        <Slider v-model="limitAgeRange" range />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field mb-4 col-12 flex align-items-center">
                            <label for="limitedParticipant" class="font-medium w-2 text-900 mr-5">
                                참가자 수 제한 여부
                            </label>
                            <InputSwitch v-model="travelGroup.limitedParticipant" input-id="limitedParticipant" />
                        </div>
                        <div class="field mb-4 col-12" v-show="travelGroup.limitedParticipant">
                            <div class="w-full">
                                <label for="participantCount" class="font-medium w-2 text-900">참가자 제한 수</label>
                                <InputNumber v-model="travelGroup.limitParticipantCount" input-id="participantCount" />
                            </div>
                        </div>

                        <div class="field mb-4 col-12 flex align-items-center">
                            <label for="open" class="font-medium w-2 text-900 mr-5">공개 여부</label>
                            <InputSwitch v-model="v$.open.$model" input-id="open" />
                        </div>
                        <div class="col-12 flex justify-content-center mt-5">
                            <Button label="등록" type="submit" class="w-5 mt-3"></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ImagePreView from '@/components/common/ImagePreView.vue';
import { getTravelRegisterInit, saveTravelGroup } from '@/api/travel';
import { useVuelidate } from '@vuelidate/core';
import { helpers, maxValue, minValue, required } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
import { useModalStore } from '@/store/modal';

const router = useRouter();
const modalStore = useModalStore();
onMounted(() => {
    getInit();
});
const travelThemes = ref([]);
const limitAgeRange = ref([20, 30]);

const getInit = async () => {
    const res = await getTravelRegisterInit();
    if (res.success) {
        travelThemes.value = res.response.travelThemes;
    }
};

const travelGroup = ref({
    groupName: '',
    travelThemes: [],
    description: '',
    imageUrl: '',
    startDate: new Date(),
    limitedParticipant: false,
    limitParticipantCount: 1,
    limitedAge: false,
    limitAgeRangeStart: 0,
    limitAgeRangeEnd: 0,
    open: true,
});

const rules = {
    groupName: { required: helpers.withMessage('그룹 명을 입력해 주세요.', required) },
    description: { required: helpers.withMessage('내용을 입력 입력해 주세요.', required) },
    limitParticipantCount: {
        required: helpers.withMessage('참가제한 인원을 입력해 주세요.', required),
        minValue: helpers.withMessage('참가제한 인원을 최소 1명 이상 입력해 주세요.', minValue(1)),
        maxValue: helpers.withMessage('참가인원은 최대 100명까지만 가능합니다.', maxValue(100)),
    },
    travelThemes: { required: helpers.withMessage('테마를 한개 이상 선택해 주세요.', required) },
    open: { required },
};
const v$ = useVuelidate(rules, travelGroup);
const submitted = ref(false);

const updatePic = dataUrl => {
    travelGroup.value.imageUrl = dataUrl;
};

/**
 * Select the picture to be cropped
 */

const saveGroup = async isValid => {
    submitted.value = true;
    if (!isValid) {
        return;
    }

    if (travelGroup.value.limitedAge) {
        travelGroup.value.limitAgeRangeStart = limitAgeRange.value[0];
        travelGroup.value.limitAgeRangeEnd = limitAgeRange.value[1];
    }

    const themeList = [];
    for (const theme of travelGroup.value.travelThemes) {
        themeList.push(theme.code);
    }
    travelGroup.value.travelThemes = themeList;
    const res = await saveTravelGroup(travelGroup.value);
    if (res.success) {
        alert('여행그룹이 성공적으로 생성되었습니다.');
        await router.push('/');
    }
};
</script>

<style lang="scss" scoped>
.buttonColorGreen {
    background-color: #03d069;
}

.buttonColorGreen:hover {
    background-color: #03d069;
    transition: 0.7s;
}
</style>
