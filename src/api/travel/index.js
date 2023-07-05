import { axiosGet, axiosPatch, axiosPost } from '@/api';

const getTravelList = (travelThemes = '') => {
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

const getTravelRegisterInit = () => {
    return axiosGet('/travel-group/group/register/init');
};

const modifyTravelGroup = travelGroupId => {
    return axiosPatch(`/travel-group/${travelGroupId}`);
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
};
