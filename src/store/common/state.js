import { useCookies } from 'vue3-cookies';

const cookie = useCookies();
export default () => ({
    accessToken: cookie.cookies.get(process.env.VUE_APP_AUTH_TOKEN) || '',
    refreshToken: cookie.cookies.get(process.env.VUE_APP_AUTH_REFRESH_TOKEN) || '',
});
