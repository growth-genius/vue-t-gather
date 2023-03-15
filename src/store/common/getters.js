export default {
    isLogin: state => state.accessToken !== '',
    getAccessToken: state => state.accessToken,
    getRefreshToken: state => state.refreshToken,
    getEmail: state => state.email,
    getUserName: state => state.username,
    isSuperAdmin: state => state.superAdmin,
};
