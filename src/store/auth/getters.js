export default {
    isLogin: state => state.accessToken !== '',
    getAccessToken: state => state.accessToken,
    getRefreshToken: state => state.refreshToken,
    getEmail: state => state.email,
    getUserName: state => state.userName,
    isSuperAdmin: state => state.superAdmin,
    getProfileImage: state => state.account.profileImage,
};
