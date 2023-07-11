import { axiosGet, axiosPatch, axiosPost } from '@/api';

// 로그인
function signIn(data) {
    return axiosPost('/account/auth/sign-in', data);
}

// 토큰 값 인증
function checkEmailToken(token, email) {
    return axiosGet(`/account/auth/check-email-token/${token}/${email}`);
}

function getInit() {
    return axiosGet('/account/login-form');
}

function getLoginUser() {
    return axiosGet('/account/me');
}

function modifyUser(accountId, data) {
    return axiosPatch(`/account/${accountId}`, data);
}

export { signIn, checkEmailToken, getInit, getLoginUser, modifyUser };
