import axios from 'axios';
import { setInterceptors } from '@/api/common';

function createInstance() {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_API_URL}/api`,
    });
    return setInterceptors(instance);
}

const instance = createInstance();

// eslint-disable-next-line
function axiosPost(url, param) {
    return instance.post(url, param).catch(errFunction);
}

// eslint-disable-next-line
function axiosPut(url, param)  {
    return instance.put(url, param).catch(errFunction);
}

// eslint-disable-next-line
function axiosPatch(url, param) {
    return instance.patch(url, param).catch(errFunction);
}

// eslint-disable-next-line
function axiosGet(url, param) {
    return instance.get(url, { params: param });
}

// eslint-disable-next-line
function axiosDelete(url, param) {
    return instance.delete(url, { params: param }).catch(errFunction);
}

function errFunction(error) {
    let res = {
        success: false,
        message: '',
        status: 0,
    };
    if (error.response) {
        const {
            response: { data },
        } = error;
        res = data;
    } else if (!error.status) {
        res.success = false;
        res.message = '네트워크 연결을 확인해 주세요.';
    }
    return res;
}

export { createInstance, axiosDelete, axiosGet, axiosPost, axiosPut, axiosPatch };
