import { axiosGet, axiosPatch, axiosPost } from '@/api';

const getTravelList = (travelThemes = []) => {
    return axiosGet(`/travel-group/open/group?travelThemes=${travelThemes}`);
};

/**
 * 여행 그룹 전체 조회
 * @returns {*}
 */
const getTravelListAll = () => {
    return axiosGet('/travel-group/open/all');
};

const getTravelGroupById = travelGroupId => {
    return axiosGet(`/travel-group/${travelGroupId}`);
};

/**
 * 여행테마 전체 조회
 */
const getTravelRegisterInit = () => {
    return axiosGet('/travel-group/register/init');
};

/**
 * 여행테마 검색 전체 조회
 * @returns {*}
 */
const getTravelGroupInit = () => {
    return axiosGet('/travel-group/open/init');
};

const modifyTravelGroup = travelGroupId => {
    return axiosPatch(`/travel-group/${travelGroupId}`);
};

const joinTravelGroup = (travelGroupId, data) => {
    return axiosPost(`/travel-group/${travelGroupId}/member`, data);
};

/**
 * 여행 그룹 등록
 * @param data
 * @returns {*}
 */
const saveTravelGroup = data => {
    return axiosPost('/travel-group/group', data);
};

export {
    getTravelList,
    getTravelRegisterInit,
    saveTravelGroup,
    getTravelListAll,
    modifyTravelGroup,
    getTravelGroupById,
    joinTravelGroup,
    getTravelGroupInit,
};
