import { axiosGet, axiosPost } from '@/api';

// 로그인
function signIn(data) {
    return axiosPost('/account-service/account/login', data);
}

// 토큰 값 인증
function checkEmailToken(token, email) {
    return axiosGet(`/account/check-email-token/${token}/${email}`);
}

function getInit() {
    return axiosGet('/account/login-form');
}

export { signIn, checkEmailToken, getInit };
