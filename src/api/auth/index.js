import { axiosGet, axiosPost } from '@/api';

// 로그인
function signIn(data) {
    return axiosPost('/account/auth/sign-in', data);
}

// 회원가입
function signUp(data) {
    return axiosPost('/account/auth/sign-up', data);
}

// 토큰 값 인증
function checkEmailToken(token, email) {
    return axiosGet(`/account/auth/check-email-token/${token}/${email}`);
}

// 닉네임 유효 값 인증
function checkNickname(nickname) {
    return axiosGet(`/account/auth/check-nickname/${nickname}`);
}

// 이메일 유효 값 인증
function checkEmail(email) {
    return axiosGet(`/account/auth/check-email/${email}`);
}

function getInit() {
    return axiosGet('/account/login-form');
}

export { signIn, checkEmailToken, getInit, checkNickname, signUp, checkEmail };
