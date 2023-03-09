import router from '@/router';
import { deleteCookie, getCookie, saveCookie } from '@/utils/cookies';

let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = accessToken => {
    refreshSubscribers.map(callback => callback(accessToken));
    refreshSubscribers = [];
};
const addRefreshSubscriber = callback => {
    refreshSubscribers.push(callback);
};

function setInterceptors(instance) {
    // Add a request interceptor
    instance.interceptors.request.use(
        function (config) {
            config.headers[process.env.VUE_APP_AUTHRIZATION] = `Bearer ${getCookie(process.env.VUE_APP_AUTH_TOKEN)}`;
            return config;
        },
        function (error) {
            // Do something with request error
            console.log('API 호출 전 에러');
            return Promise.reject(error);
        },
    );
    // Add a response interceptor
    instance.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response.data;
        },
        async function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            if (error.response) {
                const {
                    config,
                    response: { status, data },
                } = error;
                if (status === 401) {
                    const originalRequest = config;

                    if (data && data.status === -401) {
                        deleteLoginCookie();
                        await router.push('/auth/sign-in');
                        return Promise.reject(error);
                    }
                    // token 이 재발급 되는 동안의 요청은 refreshSubscribers 에 저장
                    const retryOriginalRequest = new Promise(resolve => {
                        addRefreshSubscriber(accessToken => {
                            originalRequest.headers[process.env.VUE_APP_AUTHRIZATION] = `Bearer ${accessToken}`;
                            resolve(instance(originalRequest));
                        });
                    });

                    if (!isTokenRefreshing) {
                        isTokenRefreshing = true;
                        const refreshToken = getCookie(process.env.VUE_APP_AUTH_REFRESH_TOKEN);

                        await instance
                            .get(`${process.env.VUE_APP_API_URL}/api/sign/refresh-token/${refreshToken}`)
                            .then(({ data }) => {
                                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;
                                saveCookie(process.env.VUE_APP_AUTH_TOKEN, newAccessToken);
                                saveCookie(process.env.VUE_APP_AUTH_REFRESH_TOKEN, newRefreshToken);
                                isTokenRefreshing = false;
                                instance.defaults.headers[
                                    process.env.VUE_APP_AUTHRIZATION
                                ] = `Bearer ${newAccessToken}`;
                                onTokenRefreshed(newAccessToken);
                            })
                            .catch(() => {
                                isTokenRefreshing = false;
                            });
                    }
                    return retryOriginalRequest;
                }
            }
            return Promise.reject(error);
        },
    );
    return instance;
}

const deleteLoginCookie = () => {
    deleteCookie(process.env.VUE_APP_AUTH_TOKEN);
    deleteCookie(process.env.VUE_APP_USER_ID);
    deleteCookie(process.env.VUE_APP_AUTH_REFRESH_TOKEN);
};

export { setInterceptors };
