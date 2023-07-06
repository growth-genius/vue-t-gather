import { defineStore } from 'pinia';
import getters from './getters';
import state from './state';
// import actions from './actions';

export const useModalStore = defineStore('modalStore', {
    state,
    getters,
    actions: {
        toggleJoinGroupModal() {
            this.showJoinGroupModal = !this.showJoinGroupModal;
        },
    },
});
