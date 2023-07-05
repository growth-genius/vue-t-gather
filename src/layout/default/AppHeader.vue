<template>
    <div
        class="flex top-0 justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static layout-topbar"
        style="height: 60px; width: 100%"
    >
        <div class="align-items-center lg:mr-auto mt-1 flex-shrink-0">
            <img
                :src="require('@/assets/header.png')"
                alt="Image Text"
                style="height: 65px; cursor: pointer"
                @click="goDashBoard"
                v-tooltip.top="'메인화면으로 돌아가기'"
            />
        </div>

        <ul
            class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
        >
            <li v-show="isLogin">
                <a
                    v-ripple
                    class="flex lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                    @click="goCreateGroupPage"
                    v-tooltip.top="'여행 그룹 만들기'"
                >
                    <i class="pi pi-plus-circle text-base lg:text-2xl mr-2 lg:mr-0" />
                </a>
            </li>
            <li v-show="isLogin">
                <a
                    v-ripple
                    class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                >
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li
                v-show="isLogin"
                class="border-top-1 surface-border lg:border-top-none"
                aria-haspopup="true"
                aria-controls="profile"
                style="display: inline-flex"
                @click="toggle"
            >
                <div class="card flex justify-content-center">
                    <a
                        v-ripple
                        class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                    >
                        <img
                            src="images/blocks/avatars/circle/avatar-f-1.png"
                            class="mr-3 lg:mr-0"
                            style="width: 32px; height: 32px"
                            alt=""
                        />
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                    <Toast />
                </div>
            </li>
            <li v-show="!isLogin">
                <Button label="로그인" icon="pi pi-users" outlined @click="goSignIn"></Button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';

const { isLogin } = storeToRefs(useAuthStore());

const { LOGOUT } = useAuthStore();

const goCreateGroupPage = () => {
    router.push('/travel/register-group');
};
const menu = ref();
const goDashBoard = () => {
    router.push('/');
};
const items = ref([
    {
        icon: 'pi pi-info',
        command: async () => {
            router.push('/my-page');
        },
        label: '내 프로필',
    },
    {
        label: '로그아웃',
        icon: 'pi pi-sign-out',
        command: async () => {
            await LOGOUT();
        },
    },
]);

const toggle = event => {
    menu.value.toggle(event);
};
const goSignIn = () => {
    router.push('/auth/sign-in');
};
</script>

<style>
.p-submenu-header {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
}

.p-menuitem-link {
    padding: 0.5rem !important;
}

.p-menu-list {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
}

.p-overlaypanel {
    --overlayArrowLeft: unset !important;
    top: 45px !important;
}

.layout-topbar {
    width: 100%;
    height: 70px;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 99;
    padding: 0 28px;
    background: var(--surface-card);
    box-shadow: rgb(0 0 0 / 3%) 0px 4px 10px, rgb(0 0 0 / 6%) 0px 0px 2px, rgb(0 0 0 / 12%) 0px 2px 6px;
}
</style>
