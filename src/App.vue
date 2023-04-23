<template>
    <router-view />
    <Toast group="block" class="bg-green-800" position="top-center">
        <template #message="{ message }">
            <div class="flex flex-column w-full">
                <div class="p-3">
                    <div class="flex align-items-center">
                        <span
                            class="flex align-items-center justify-content-center bg-white text-blue-900 mr-3 border-circle"
                            style="width: 32px; height: 32px"
                        >
                            <i class="pi pi-info text-lg"></i>
                        </span>
                        <span class="font-medium text-2xl text-white">{{ message.summary }}</span>
                    </div>
                    <p class="my-3 line-height-3 text-gray-300">{{ message.detail }}</p>
                </div>
                <div style="height: 6px" class="bg-gray-700">
                    <div class="h-full bg-white animate-width animation-duration-3000"></div>
                </div>
            </div>
        </template>
    </Toast>
</template>
<style lang="scss">
@import './assets/styles/app/layout.scss';
</style>
