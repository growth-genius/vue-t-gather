<template>
    <Carousel
        :value="products"
        :numVisible="1"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :showNavigators="false"
    >
        <template #item="slotProps">
            <div class="border-1 surface-border border-round text-center" style="width: 100%">
                <div class="mb-3">
                    <img
                        :src="require(`@/assets/images/banner/${slotProps.data.imgUrl}`)"
                        :alt="slotProps.data.name"
                        class="w-12 shadow-2 h-20rem"
                    />
                </div>
            </div>
        </template>
    </Carousel>

    <div class="flex justify-content-center">
        <div class="col-3"></div>
        <div class="col-8">
            <div class="grid">
                <div class="col-12 md:col-6 lg:col-4 xl:col-3 p-3" v-for="(item, idx) in travelGroupList" :key="idx">
                    <div class="surface-card shadow-2 border-round-3xl p-4">
                        <div class="relative border-bottom-1 surface-border pb-4">
                            <img
                                :src="`${
                                    item.imageUrl
                                        ? 'data:image/jpeg;base64,' + item.imageUrl
                                        : require('@/assets/tgather.png')
                                }`"
                                :alt="item.groupName"
                                class="w-full h-full md:h-13rem"
                            />
                            <p
                                class="absolute px-2 py-1 border-round-lg text-sm text-center text-black mt-0 mb-0 font-bold"
                                style="background-color: rgba(255, 255, 255, 0.3); left: 13%; right: 10%"
                            >
                                {{ item.groupName }}
                            </p>
                        </div>
                        <div class="flex border-bottom-1 surface-border py-3">
                            <Avatar
                                v-show="item.travelGroupMemberDtoList[0]"
                                :key="idx"
                                :image="`${
                                    item.travelGroupMemberDtoList[0].profileImage
                                        ? 'data:image/jpeg;base64,' + item.travelGroupMemberDtoList[0].profileImage
                                        : require('@/assets/images/avatar/user.png')
                                }`"
                                :alt="item.travelGroupMemberDtoList[0].nickname"
                                size="large"
                                shape="circle"
                                class="mr-3"
                            />
                            <div class="flex flex-column align-items-start">
                                <div
                                    class="bg-green-500 text-white font-bold border-round inline-flex py-1 px-2 text-base mr-2"
                                >
                                    {{ item.travelGroupMemberDtoList[0].nickname }}
                                </div>
                                <span class="text-600 font-medium mb-2 my-3 travel-description">{{
                                    item.description
                                }}</span>
                                <div>
                                    <span
                                        class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm mr-2"
                                        :class="
                                            idx % 3 === 0
                                                ? 'bg-blue-50 text-blue-400'
                                                : idx % 2 === 0
                                                ? 'bg-red-50 text-red-400'
                                                : 'bg-orange-50 text-orange-400'
                                        "
                                        v-for="(theme, idx) in item.travelThemes"
                                        :key="idx"
                                        >{{ theme }}</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-content-between pt-4">
                            <Button
                                label="자세히"
                                icon="pi pi-search"
                                class="p-button-outlined p-button-secondary w-6 mr-2 p-button-sm"
                                v-tooltip.top="'상세 보기'"
                                @click="goSingleTravelGroup(item)"
                            ></Button>
                            <Button
                                label="참여"
                                icon="pi pi-user-plus"
                                @click="joinTravelGroup(item.travelGroupId)"
                                class="p-button-outlined p-button-secondary w-6 ml-2 p-button-sm"
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
    <join-travel-group-modal
        :travel-group="travelGroup"
        @cancel:travel-group="cancelJoinTravelGroup"
        :isShowJoinGroupModal="isShowJoinGroupModal"
    />
</template>

<script setup>
import { ref } from 'vue';
import { getTravelListAll } from '@/api/travel';

import JoinTravelGroupModal from '@/components/modal/JoinTravelGroupModal.vue';
import { useRouter } from 'vue-router';
import { useModalStore } from '@/store/modal';

const modalStore = useModalStore();

const router = useRouter();
const travelGroupList = ref([]);
const isShowJoinGroupModal = ref(false);
const travelGroup = ref('');
const findTravelList = async () => {
    const res = await getTravelListAll();
    if (res.success) {
        travelGroupList.value = res.response.travelGroupDtoList;
    }
};

const goSingleTravelGroup = item => {
    router.push(`/travel/single-group?travelGroupId=${item.travelGroupId}`);
};

const joinTravelGroup = travelGroupId => {
    modalStore.toggleJoinGroupModal();
    modalStore.setTravelGroupId(travelGroupId);
};

const cancelJoinTravelGroup = () => {
    modalStore.toggleJoinGroupModal();
};

findTravelList();

const products = ref([
    { imgUrl: 'jeju.jpg', name: '이름' },
    { imgUrl: 'tgather.jpg', name: '이름' },
    { imgUrl: 'shallwetravel.jpg', name: '비지니스' },
    { imgUrl: 'board-travel.jpg', name: '비지니스' },
]);

const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3,
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2,
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
    },
]);
</script>

<style>
.travel-description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    width: 100px;
    height: 20px;
}
</style>
