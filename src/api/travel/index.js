import { axiosGet, axiosPost } from '@/api';

const getTravelList = (travelThemes = '') => {
    return axiosGet(`/travel-group/group?travelThemes=${travelThemes}`);
};

const getTravelRegisterInit = () => {
    return axiosGet('/travel-group/register/init');
};

/**
 * 여행 그룹 등록
 * @param data
 * @returns {*}
 */
const saveTravelGroup = data => {
    return axiosPost('/travel-group/group', data);
};

const getTravelGroup = travelGroupId => {
    return axiosGet(`/travel-group/${travelGroupId}`);
};

export { getTravelList, getTravelRegisterInit, saveTravelGroup, getTravelGroup };
