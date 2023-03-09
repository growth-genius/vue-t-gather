<template>
    <div
        id="app-sidebar"
        class="surface-section h-full absolute mt-7 lg:mt-2 lg:relative flex-shrink-0 left-0 z-1 border-right-1 surface-border select-none app-side-bar"
        style="top: -8px; max-width: 280px; min-width: 280px"
    >
        <div class="mt-6 px-3" style="position: fixed; width: 280px">
            <panel-menu :model="items" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const visible = ref(false);
        const items = ref([
            {
                key: '0',
                label: 'File',
                icon: 'pi pi-fw pi-file',
                class: 'shadow-none',
                items: [
                    {
                        key: '0_0',
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                key: '0_0_0',
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark',
                                to: '/auth/sign-in',
                            },
                        ],
                    },
                    {
                        key: '0_2',
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link',
                    },
                ],
            },
            {
                key: '1',
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                class: 'shadow-none',
                items: [
                    {
                        key: '1_0',
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left',
                    },
                    {
                        key: '1_1',
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right',
                    },
                    {
                        key: '1_2',
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center',
                    },
                    {
                        key: '1_3',
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify',
                    },
                ],
            },
            {
                key: '2',
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                class: 'shadow-none',
                items: [
                    {
                        key: '2_0',
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',
                    },
                    {
                        key: '2_1',
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',
                    },
                    {
                        key: '2_2',
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                key: '2_2_0',
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        key: '2_2_0_0',
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print',
                                    },
                                ],
                            },
                            {
                                key: '2_2_1',
                                icon: 'pi pi-fw pi-bars',
                                label: 'List',
                            },
                        ],
                    },
                ],
            },
            {
                key: '3',
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                class: 'shadow-none',
                items: [
                    {
                        key: '3_0',
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                key: '3_0_0',
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus',
                            },
                            {
                                key: '3_0_0',
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus',
                            },
                        ],
                    },
                    {
                        key: '3_1',
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                key: '3_1_0',
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus',
                            },
                        ],
                    },
                ],
            },
        ]);

        return { visible, items };
    },
};
</script>

<style>
.p-toggleable-content {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
}
.p-menuitem {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
}
</style>
