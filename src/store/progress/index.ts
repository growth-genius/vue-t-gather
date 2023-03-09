import { defineStore } from 'pinia';

interface State {
    message: string;
    process: boolean;
}

export const progressStore = defineStore('progressStore', {
    state: () => ({
        process: false,
        message: '',
    }),
    getters: {
        getProcess(state: State) {
            return state.process;
        },
        getMessage(state: State) {
            return state.message;
        },
    },
    actions: {
        setMessage(message: string) {
            this.message = message;
        },
        startProgress() {
            this.process = true;
        },
        stopProgress() {
            this.process = false;
        },
    },
});
