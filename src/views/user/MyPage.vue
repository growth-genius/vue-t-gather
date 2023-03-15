<template>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="p-fluid flex flex-column lg:flex-row">
            <ul
                class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0"
            >
                <li>
                    <a
                        v-ripple
                        class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple"
                        @click="changeLocation('profile')"
                    >
                        <i class="pi pi-user md:mr-2"></i>
                        <span class="font-medium hidden md:block">내 정보</span>
                    </a>
                </li>
                <li>
                    <a
                        v-ripple
                        class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple"
                        @click="changeLocation('account')"
                    >
                        <i class="pi pi-cog md:mr-2"></i>
                        <span class="font-medium hidden md:block">계정</span>
                    </a>
                </li>
                <li>
                    <a
                        v-ripple
                        class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple"
                        @click="changeLocation('group')"
                    >
                        <i class="pi pi-users md:mr-2"></i>
                        <span class="font-medium hidden md:block">동호회 관리하기</span>
                    </a>
                </li>
            </ul>
            <div class="surface-card p-5 shadow-2 border-round flex-auto">
                <div v-show="location === 'profile'">
                    <MyProfile />
                </div>
                <div v-show="location === 'account'">
                    <MyAccount />
                </div>
                <div v-show="location === 'group'">
                    <MyGroup />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MyProfile from '@/views/user/MyProfile.vue';
import MyAccount from '@/views/user/MyAccount.vue';
import MyGroup from '@/views/user/MyGroup.vue';

const location = ref('profile');
const changeLocation = val => {
    location.value = val;
};
</script>

<style lang="scss" scoped></style>
