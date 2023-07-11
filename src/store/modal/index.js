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
        toggleProfileImageModal() {
            this.showProfileImageModal = !this.showProfileImageModal;
        },
        setTravelGroupId(travelGroupId) {
            this.travelGroupId = travelGroupId;
        },
        setImageRatio(ratio) {
            this.imageRatio = ratio;
        },
    },
});
