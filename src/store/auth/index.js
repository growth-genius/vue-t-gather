import { defineStore } from 'pinia';
import getters from './getters';
import { signIn } from '@/api/auth';
import { useCookies } from 'vue3-cookies';
import router from '@/router';

const cookie = useCookies();
export const useAuthStore = defineStore('authStore', {
    state: () => ({
        email: cookie.cookies.get(process.env.VUE_APP_EMAIL) || '',
        accessToken: cookie.cookies.get(process.env.VUE_APP_AUTH_TOKEN) || '',
        refreshToken: cookie.cookies.get(process.env.VUE_APP_AUTH_REFRESH_TOKEN) || '',
        account: {
            accountId: 0,
        },
        superAdmin: false,
    }),
    getters,
    actions: {
        async LOGIN(params) {
            const res = await signIn(params);
            console.log(res);
            if (res.success) {
                this.accessToken = res.response.accessToken;
                cookie.cookies.set(process.env.VUE_APP_AUTH_TOKEN, res.response.accessToken);
                cookie.cookies.set(process.env.VUE_APP_EMAIL, res.response.email);
                cookie.cookies.set(process.env.VUE_APP_AUTH_REFRESH_TOKEN, res.response.refreshToken);
            }
            return res;
        },
        async LOGOUT() {
            this.accessToken = '';
            cookie.cookies.remove(process.env.VUE_APP_AUTH_TOKEN);
            cookie.cookies.remove(process.env.VUE_APP_EMAIL);
            cookie.cookies.remove(process.env.VUE_APP_AUTH_REFRESH_TOKEN);
            await router.push('/');
        },
        async clearInfo() {
            this.email = '';
            this.accessToken = '';
            this.refreshToken = '';
            this.account = {
                accountId: 0,
            };
        },
    },
});
