import { defineStore } from 'pinia';
import getters from './getters';
import state from './state';
import actions from '@/store/common/actions';

export const useCommonStore = defineStore('commonStore', {
    state,
    getters,
    actions,
});
