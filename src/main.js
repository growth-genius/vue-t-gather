import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue3-cookies';
import PrimeVue from 'primevue/config';
import { setPrimeVue } from '@/plugins/primevue';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'material-icons/iconfont/material-icons.css';
import { createPinia } from 'pinia';

const app = createApp(App);
app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', dark: false });
app.use(PrimeVue, { ripple: true });
setPrimeVue(app);
app.use(router).use(VueCookies).use(createPinia()).mount('#app');
