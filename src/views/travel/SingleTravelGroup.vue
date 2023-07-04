<template>
    <div class="justify-content-center text-center">
        <Card>
            <template #title>
                {{ detailTravelGroup.groupName }}
            </template>
            <template #content>
                <img
                    :src="`${
                        detailTravelGroup.imageUrl
                            ? 'data:image/jpeg;base64,' + detailTravelGroup.imageUrl
                            : require('@/assets/tgather.png')
                    }`"
                    :alt="detailTravelGroup.groupName"
                    class="w-5 h-5"
                />
                <div class="flex py-3 text-center justify-content-center">
                    <Avatar
                        v-show="detailTravelGroup.travelGroupMemberDtoList"
                        :image="`${
                            detailTravelGroup.travelGroupMemberDtoList[0].profileImage
                                ? 'data:image/jpeg;base64,' + detailTravelGroup.travelGroupMemberDtoList[0].profileImage
                                : require('@/assets/images/avatar/user.png')
                        }`"
                    />
                    <div class="left-50 m-1 text-black font-bold border-round inline-flex py-1 px-2 text-base mr-2">
                        {{ detailTravelGroup.travelGroupMemberDtoList[0].nickname }}
                    </div>
                </div>
                <div class="border-bottom-1 surface-border m-1 top-100">
                    <span
                        class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm mr-2"
                        :class="
                            idx % 3 === 0
                                ? 'bg-blue-50 text-blue-400'
                                : idx % 2 === 0
                                ? 'bg-red-50 text-red-400'
                                : 'bg-orange-50 text-orange-400'
                        "
                        v-for="(theme, idx) in detailTravelGroup.travelThemes"
                        :key="idx"
                        >{{ theme }}</span
                    >
                </div>
                <p class="m-5">
                    {{ detailTravelGroup.description }}
                </p>
                <Button
                    label="참여"
                    icon="pi pi-user-plus"
                    class="p-button-outlined p-button-secondary w-3 ml-2 p-button-sm"
                ></Button>
            </template>
        </Card>
    </div>
</template>
<script setup>
import { getTravelGroupById } from '@/api/travel';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const travelGroupId = route.query.travelGroupId;
const detailTravelGroup = ref({ travelThemes: [], travelGroupMemberDtoList: [{ profileImage: '' }] });

const getTravelGroup = async travelGroupId => {
    const res = await getTravelGroupById(travelGroupId);
    if (res.success) {
        detailTravelGroup.value = res.response;
    }
};

getTravelGroup(travelGroupId);
</script>
