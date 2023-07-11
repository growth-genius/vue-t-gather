<template>
    <div class="justify-content-center text-center">
        <Card>
            <template #title> </template>
            <template #content>
                <img
                    :src="`${
                        detailTravelGroup.imageUrl ? detailTravelGroup.imageUrl : require('@/assets/tgather.png')
                    }`"
                    :alt="detailTravelGroup.groupName"
                    class="w-5 h-5 mb-3"
                />
                <div class="font-bold text-2xl">
                    {{ detailTravelGroup.groupName }}
                </div>
                <div class="flex">
                    <div class="col-3" />
                    <div class="col-7 py-3 justify-content-start text-left">
                        <div class="flex py-3 align-items-center border-bottom-1 surface-border">
                            <Avatar
                                v-show="detailTravelGroup.travelGroupMemberDtoList"
                                :image="`${
                                    detailTravelGroup.travelGroupMemberDtoList[0].profileImage
                                        ? detailTravelGroup.travelGroupMemberDtoList[0].profileImage
                                        : require('@/assets/images/avatar/user.png')
                                }`"
                            />
                            <div
                                class="left-50 m-1 text-black font-bold border-round inline-flex py-1 px-2 text-base mr-2"
                            >
                                {{ detailTravelGroup.travelGroupMemberDtoList[0].nickname }}
                            </div>
                        </div>

                        <div class="mt-3">
                            <span class="font-bold text-lg">여행테마 </span>
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
                            >
                                {{ theme }}
                            </span>
                        </div>
                        <div class="mt-3">
                            <span class="font-bold text-lg">나이제한 </span>
                            <span>
                                {{
                                    detailTravelGroup.limitAgeRangeStart == 0
                                        ? '나이제한 없음'
                                        : detailTravelGroup.limitAgeRangeStart
                                }}
                            </span>
                        </div>
                        <div class="mt-8">
                            <span class="text-2xl font-bold"> 여행모임 소개 </span>
                        </div>
                        <div class="mt-3 mb-8 border-top-1 surface-border">
                            <p class="m-2">
                                {{ detailTravelGroup.description }}
                            </p>
                        </div>
                    </div>
                </div>
                <Button
                    label="참여"
                    icon="pi pi-user-plus"
                    @click="participateInTravelGroup(detailTravelGroup.travelGroupId)"
                    class="p-button-outlined p-button-secondary w-3 ml-2 p-button-sm"
                ></Button>
            </template>
        </Card>
    </div>
</template>
<script setup>
import { getTravelGroupById, joinTravelGroup } from '@/api/travel';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import router from '@/router';

const route = useRoute();
const travelGroupId = route.query.travelGroupId;
const detailTravelGroup = ref({ travelThemes: [], travelGroupMemberDtoList: [{ profileImage: '' }] });

const getTravelGroup = async travelGroupId => {
    const res = await getTravelGroupById(travelGroupId);
    if (res.success) {
        detailTravelGroup.value = res.response;
    }
};

/**
 * 여행그룹 참여하기
 * @param travelGroupId 여행그룹 고유아이디
 */
const participateInTravelGroup = async travelGroupId => {
    const res = await joinTravelGroup(travelGroupId);
    if (res.success) {
        alert('여행그룹에 성공적으로 참여하였습니다.');
        router.push(`/travel/single-group?travelGroupId=${travelGroupId}`);
    }
};

getTravelGroup(travelGroupId);
</script>
