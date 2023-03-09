import { axiosGet } from '@/api';

const getTravelList = () => {
    return axiosGet('travel-group');
};

const getTravelRegisterInit = () => {
    return axiosGet('/travel-group/register/init');
};
export { getTravelList, getTravelRegisterInit };
