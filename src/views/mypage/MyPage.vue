<template>
    <div class="flex flex-column flex-auto bg-black-alpha-90">
        <div class="surface-section px-4 py-4 lg:py-5 lg:px-6 h-full border-round-top-3xl">
            <div class="flex flex-column md:flex-row w-full justify-content-between md:align-items-center">
                <div>
                    <h2 class="mt-0 mb-2 text-900 font-medium text-2xl">Settings</h2>
                    <p class="mt-0 mb-0 text-500">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</p>
                </div>
                <span class="p-input-icon-right w-full mt-2 md:mt-0 md:w-15rem">
                    <i class="pi pi-search"></i>
                    <InputText type="text" pInputText placeholder="Search" class="w-full md:w-15rem border-round" />
                </span>
            </div>
            <Divider styleClass="my-5"></Divider>

            <div class="p-fluid flex flex-column lg:flex-row">
                <ul
                    class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-between lg:justify-content-start mb-5 lg:mb-0"
                >
                    <li>
                        <a
                            v-ripple
                            class="p-ripple lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors surface-200"
                        >
                            <i class="pi pi-user md:mr-2 text-700"></i>
                            <span class="font-medium hidden md:block text-800">Profile</span>
                        </a>
                    </li>
                </ul>
                <div class="surface-card p-5 shadow-2 border-round flex-auto xl:ml-5">
                    <div class="text-900 font-semibold text-lg mt-3">Profile</div>
                    <Divider></Divider>
                    <div class="flex gap-5 flex-column-reverse md:flex-row">
                        <div class="flex-auto p-fluid">
                            <div class="mb-4">
                                <label for="email" class="block font-normal text-900 mb-2">Name</label>
                                <InputText id="email" type="text" />
                            </div>
                            <div class="mb-4">
                                <label for="bio" class="block font-normal text-900 mb-2">Bio</label>
                                <Textarea id="bio" type="text" rows="5" autoResize></Textarea>
                                <p class="mt-2 mb-0 font-medium text-base text-600">
                                    You can <span class="font-medium text-900">@mention</span> other users and
                                    organizations to link to them.
                                </p>
                            </div>
                            <div class="mb-4">
                                <label for="website" class="block font-normal text-900 mb-2">URL</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon">https://</span>
                                    <InputText id="website" type="text" />
                                </div>
                            </div>
                            <div class="mb-4">
                                <label for="company" class="block font-normal text-900 mb-2">Company</label>
                                <InputText id="company" type="text" />
                            </div>
                            <div class="mb-4">
                                <label for="visibility" class="block font-normal text-900 mb-2"
                                    >Profile Visibility</label
                                >
                                <div class="flex align-items-center">
                                    <Checkbox v-model="value1" binary inputId="visibility"></Checkbox>
                                    <span class="ml-2 font-normal text-base text-color-primary"
                                        >Make profile private and hide all activity</span
                                    >
                                </div>
                            </div>
                            <div>
                                <Button label="Update Profile" class="w-auto mt-3"></Button>
                            </div>
                        </div>
                        <div class="flex flex-column align-items-center flex-or">
                            <span class="font-normal text-900 mb-2">Profile Picture</span>
                            <img src="images/blocks/avatars/circle-big/avatar-f-2.png" class="h-10rem w-10rem" />
                            <Button type="button" icon="pi pi-pencil" class="p-button-rounded -mt-4"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getLoginUser } from '@/api/auth';
import { onMounted, ref } from 'vue';

const user = ref({});
const getLoggedInUser = async () => {
    const res = await getLoginUser();
    console.log(res);
    if (res.success) {
        user.value = res.response;
    }
};
onMounted(() => {
    getLoggedInUser();
});
</script>
<style scoped></style>
