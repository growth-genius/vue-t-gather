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
            <div>
                <ul class="surface-card p-0 m-0 list-none flex overflow-x-auto select-none">
                    <li v-for="tab in travelThemes" :key="tab.title" :header="tab.title">
                        <a
                            v-ripple
                            class="cursor-pointer px-4 py-3 flex align-items-center border-bottom-2 hover:border-500 transition-colors transition-duration-150 p-ripple"
                            :class="{
                                'border-green-500 text-green-500 hover:border-green-500': tab.default,
                                'text-700 border-transparent': !tab.default,
                            }"
                            :id="`${tab.title}`"
                            @click="searchTravelGroup(tab)"
                        >
                            <span class="font-medium">{{ tab.title }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="grid">
                <div class="col-12 md:col-6 lg:col-4 xl:col-3 p-3" v-for="(item, idx) in travelGroupList" :key="idx">
                    <div class="surface-card shadow-2 border-round-3xl p-4">
                        <div class="relative pb-4">
                            <img
                                :src="`${item.imageUrl ? item.imageUrl : require('@/assets/tgather.png')}`"
                                :alt="item.groupName"
                                class="w-full h-full md:h-13rem"
                            />
                            <p
                                class="px-2 py-1 border-round-lg text-sm text-center text-black mt-0 mb-0 font-bold text-base"
                                style="background-color: rgba(255, 255, 255, 0.3); left: 13%; right: 10%"
                            >
                                {{ item.groupName }}
                            </p>
                        </div>
                        <div class="flex border-bottom-1 surface-border py-3">
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
                                >{{ theme.title }}</span
                            >
                        </div>
                        <div class="flex py-3 align-items-center">
                            <Avatar
                                v-show="item.travelGroupMemberDtoList[0]"
                                :key="idx"
                                :image="`${
                                    item.travelGroupMemberDtoList[0].profileImage
                                        ? item.travelGroupMemberDtoList[0].profileImage
                                        : require('@/assets/images/avatar/user.png')
                                }`"
                                :alt="item.travelGroupMemberDtoList[0].nickname"
                                size="large"
                                shape="circle"
                                class="mr-3"
                            />
                            <div class="flex flex-column align-items-start">
                                <div class="text-black font-bold border-round inline-flex py-1 px-2 text-base mr-2">
                                    {{ item.travelGroupMemberDtoList[0].nickname }}
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-content-between">
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
import { onMounted, ref } from 'vue';
import { getTravelGroupInit, getTravelList, getTravelListAll } from '@/api/travel';
import JoinTravelGroupModal from '@/components/modal/JoinTravelGroupModal.vue';
import { useRouter } from 'vue-router';
import { useModalStore } from '@/store/modal';
import { useAuthStore } from '@/store/auth';

const modalStore = useModalStore();

const router = useRouter();
const travelThemes = ref([]);
const travelGroupList = ref([]);
const isShowJoinGroupModal = ref(false);
const travelGroup = ref('');
const findTravelList = async () => {
    const res = await getTravelListAll();
    if (res.success) {
        travelGroupList.value = res.response.travelGroupDtoList;
    }
};
onMounted(() => {
    findTravelThemes();
});
const findTravelThemes = async () => {
    const res = await getTravelGroupInit();
    if (res.success) {
        travelThemes.value = res.response.travelThemes;
    }
};

const goSingleTravelGroup = item => {
    router.push(`/travel/single-group?travelGroupId=${item.travelGroupId}`);
};

const joinTravelGroup = travelGroupId => {
    const store = useAuthStore();
    if (!store.isLogin) {
        alert('로그인 후 이용가능합니다.');
        return;
    }
    modalStore.toggleJoinGroupModal();
    modalStore.setTravelGroupId(travelGroupId);
};

const cancelJoinTravelGroup = () => {
    modalStore.toggleJoinGroupModal();
};

const searchTravelGroup = async theme => {
    const searchTravelThemes = travelThemes.value;
    for (const tab of searchTravelThemes) {
        tab.default = theme.title === tab.title;
    }

    const data = [];
    if (theme.code !== 'ALL') {
        data.push(theme.code);
    }
    const res = await getTravelList(data);
    if (res.success) {
        travelGroupList.value = res.response;
    }
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
