<template>
    <div class="flex flex-column h-full">
        <div class="surface-section px-4 py-4 lg:py-5 lg:px-6 h-full border-round-top-3xl">
            <div class="flex flex-column md:flex-row w-full justify-content-between md:align-items-center">
                <div>
                    <h2 class="mt-0 mb-2 text-900 font-medium text-2xl">환경설정</h2>
                </div>
            </div>
            <Divider styleClass="my-5"></Divider>

            <div class="p-fluid flex flex-column lg:flex-row">
                <ul
                    class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-between lg:justify-content-start mb-5 lg:mb-0"
                >
                    <li>
                        <a
                            v-ripple
                            class="p-ripple lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors surface-200"
                        >
                            <i class="pi pi-user md:mr-2 text-700"></i>
                            <span class="font-medium hidden md:block text-800">프로필</span>
                        </a>
                    </li>
                </ul>
                <div class="surface-card p-5 shadow-2 border-round flex-auto xl:ml-5">
                    <div class="text-900 font-semibold text-lg mt-3">프로필</div>
                    <Divider></Divider>
                    <form @submit.prevent="updateProfile(!$v.$invalid)">
                        <div class="flex gap-5 flex-column-reverse md:flex-row">
                            <div class="flex-auto p-fluid">
                                <div class="mb-4">
                                    <label for="nickname" class="block font-normal text-900 mb-2">닉네임</label>
                                    <InputText id="nickname" v-model="$v.nickname.$model" type="text" />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block font-normal text-900 mb-2">이메일</label>
                                    <InputText id="email" v-model="user.email" type="text" disabled />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block font-normal text-900 mb-2">생년월일</label>
                                    <InputMask id="email" v-model="user.birth" mask="9999-99-99" disabled />
                                </div>
                                <div class="mb-4">
                                    <label for="website" class="block font-normal text-900 mb-2"
                                        >관심있는 여행테마</label
                                    >
                                    <div class="card flex flex-wrap justify-content-start gap-3">
                                        <div
                                            class="flex align-items-center"
                                            v-for="(item, idx) in travelThemes"
                                            :key="idx"
                                        >
                                            <Checkbox
                                                v-model="user.travelThemes"
                                                :inputId="`ingredient${idx}`"
                                                name="pizza"
                                                :value="item.code"
                                            />
                                            <label :for="`ingredient${idx}`" class="ml-2"> {{ item.title }} </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Button label="프로필 수정하기" class="w-auto mt-3" type="submit"></Button>
                                </div>
                            </div>
                            <div class="flex flex-column align-items-center flex-or">
                                <span class="font-normal text-900 mb-2">프로필 사진</span>
                                <img
                                    :src="
                                        user.profileImage
                                            ? user.profileImage
                                            : require('@/assets/images/avatar/user.png')
                                    "
                                    class="h-10rem w-10rem"
                                />
                                <Button
                                    type="button"
                                    icon="pi pi-pencil"
                                    class="p-button-rounded -mt-4"
                                    @click="useModal.toggleProfileImageModal()"
                                ></Button>
                            </div>
                            <image-pre-view @update:pic="updatePic" ratio="1" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getLoginUser, modifyUser } from '@/api/auth';
import { onMounted, ref } from 'vue';
import { helpers, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import ImagePreView from '@/components/common/ImagePreView.vue';
import { useModalStore } from '@/store/modal';
import { useAuthStore } from '@/store/auth';

const useModal = useModalStore();
const authStore = useAuthStore();
const user = ref({
    accessToken: '',
    accountId: '',
    age: 0,
    birth: 0,
    email: '',
    fcmToken: '',
    id: 0,
    joinedAt: '',
    lastLoginAt: '',
    loginCount: 0,
    loginType: '',
    nickname: '',
    profileImage: '',
    roles: ['USER'],
    travelThemes: [],
    userName: '',
});

const travelThemes = ref('');
const rules = {
    nickname: { required: helpers.withMessage('닉네임을 입력해 주세요', required) },
};

const $v = useVuelidate(rules, user);
const getLoggedInUser = async () => {
    const res = await getLoginUser();
    console.log(res);
    if (res.success) {
        user.value = res.response.accountDto;
        travelThemes.value = res.response.travelThemes;
    }
};
const submitted = ref(false);
const updateProfile = async isValid => {
    submitted.value = true;
    if (!isValid) return;
    const res = await modifyUser(user.value.accountId, user.value);
    alert(res.message);
};
onMounted(() => {
    getLoggedInUser();
});

const updatePic = (dataUrl, blob) => {
    console.log(dataUrl, blob);
    user.value.profileImage = dataUrl;
};
</script>
<style scoped></style>
