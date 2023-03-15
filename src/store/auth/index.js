import { defineStore } from 'pinia';
import { getCookie } from '@/utils/cookies';
import getters from './getters';
import { signIn } from '@/api/auth';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        email: getCookie(process.env.VUE_APP_EMAIL) || '',
        accessToken: getCookie(process.env.VUE_APP_AUTH_TOKEN) || '',
        refreshToken: getCookie(process.env.VUE_APP_AUTH_REFRESH_TOKEN) || '',
        account: {
            accountId: 0,
        },
        superAdmin: false,
    }),
    getters,
    actions: {
        async LOGIN(params) {
            const res = await signIn(params);
            if (res.success) {
                this.accessToken = res.response.accessToken;
            }
            return res;
        },
    },
});
