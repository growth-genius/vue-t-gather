<template>
    <div class="w-full min-h-full overflow-hidden">
        <div class="p-5 flex flex-column flex-auto" style="min-height: 80%">
            <router-view />
        </div>
        <!-- footer -->
        <app-footer></app-footer>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import AppFooter from '@/layout/default/AppFooter.vue';

export default {
    components: {
        AppFooter,
    },
    setup() {
        const route = useRoute();
        const menuName = route.name;
        return {
            menuName,
        };
    },
};
</script>

<style></style>
