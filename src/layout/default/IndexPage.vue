<template>
    <div class="grid flex mr-0 min-h-screen flex lg:static surface-ground" style="background: #f0f0f2">
        <!-- header -->
        <app-header></app-header>
        <div class="flex flex-auto app-contents">
            <!-- sidebar -->
            <!--            <app-side-bar></app-side-bar>-->
            <!-- content -->
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/layout/default/AppHeader.vue';
import AppMain from '@/layout/default/AppMain.vue';

export default {
    components: {
        AppHeader,
        AppMain,
    },
};
</script>

<style scoped>
.app-contents {
    margin-top: 60px;
}
</style>
