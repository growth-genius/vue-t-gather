<template>
    <div class="surface-ground">
        <div class="grid">
            <div class="col-12 md:col-6 lg:col-4 xl:col-3 p-3" v-for="(item, idx) in data" :key="idx">
                <div class="surface-card shadow-2 border-round p-4">
                    <div class="relative border-bottom-1 surface-border pb-4">
                        <img
                            :src="require(`@/assets/images/thumbnail/${item.image}`)"
                            :alt="item.title"
                            class="w-full h-full md:h-13rem"
                        />
                        <p
                            class="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                            style="
                                background-color: rgba(255, 255, 255, 0.3);
                                backdrop-filter: blur(10px);
                                top: 3%;
                                left: 3%;
                            "
                        >
                            {{ item.title }}
                        </p>
                    </div>
                    <div class="flex border-bottom-1 surface-border py-3">
                        <Avatar
                            :image="require(`@/assets/images/avatar/${item.avatar}`)"
                            :alt="item.accountId"
                            size="large"
                            shape="circle"
                            class="mr-3"
                        />
                        <div class="flex flex-column align-items-start">
                            <span class="text-xl text-900 font-medium mb-1">{{ item.accountId }}</span>
                            <span class="text-600 font-medium mb-2 my-3">{{ item.description }}</span>
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
                                    v-for="(theme, idx) in item.themes"
                                    :key="idx"
                                    >{{ theme }}</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-content-between pt-4">
                        <Button
                            label="View"
                            icon="pi pi-search"
                            class="p-button-outlined p-button-secondary w-6 mr-2 p-button-sm"
                            v-tooltip.top="'상세 보기'"
                        ></Button>
                        <Button
                            label="Follow"
                            icon="pi pi-user-plus"
                            class="p-button-outlined p-button-secondary w-6 ml-2 p-button-sm"
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        accountId: 'love4950',
        image: 'thumb1.jpg',
        title: '완도 여행',
        description: '완도의 명물! 다시마를 먹고 왔어요',
        age: 20,
        themes: ['힐링', '먹방'],
        avatar: 'yeji.jpg',
    },
    {
        accountId: 'eunwoo',
        image: 'thumb2.jpg',
        title: '제주도 여행',
        description: '야자수를 보고 한라산도 가고 먹방을 찍었죠.',
        age: 20,
        themes: ['힐링', '먹방', '기타'],
        avatar: 'chaeunwoo.jpeg',
    },
    {
        accountId: 'love4950',
        image: 'thumb3.jpg',
        title: '강릉 여행',
        description: '강릉에는 뭐가 있나 모르겠네',
        age: 20,
        themes: ['액티비티', '먹방'],
        avatar: 'yeji.jpg',
    },
    {
        accountId: 'leesg6107',
        image: 'thumb4.jpg',
        title: '강남 일주',
        description: '강남 가면 장인 닭갈비지 !',
        age: 30,
        themes: ['먹방', '액티비티'],
        avatar: 'seunggu.jpg',
    },
    {
        accountId: 'eunwoo',
        image: 'thumb5.jpg',
        title: '하와이',
        description: '하와이는 신혼여행지로 좋아요',
        age: 40,
        themes: ['힐링', '먹방'],
        avatar: 'chaeunwoo.jpeg',
    },
    {
        accountId: 'youbujang',
        image: 'thumb6.jpg',
        title: '런던',
        description: '런던에 가서 바다 보고 오실 분',
        age: 40,
        themes: ['힐링', '액티비티'],
        avatar: 'youjaesuk.jpeg',
    },
    {
        accountId: 'beauty366',
        image: 'thumb7.jpg',
        title: '해외 여행',
        description: '해외 여행을 어디로 갈지 같이 정하실 분',
        age: 40,
        themes: ['액티비티', '먹방', '기타'],
        avatar: 'pretty.jpeg',
    },
    {
        accountId: 'leenow',
        image: 'thumb8.jpg',
        title: '영국 여행',
        description: '런던 다리를 한번 봐야 되는데',
        themes: ['힐링', '먹방'],
        age: 20,
        avatar: 'iu.jpeg',
    },
    {
        accountId: 'youbujang',
        image: 'thumb9.jpg',
        title: '러시아 가실분 2분 모집',
        description: '러시아에서 불곰도 보고 같이 놉시다',
        age: 20,
        themes: ['액티비티', '기타', '먹방'],
        avatar: 'youjaesuk.jpeg',
    },
    {
        accountId: 'leenow',
        image: 'thumb10.jpg',
        title: '여행 스케쥴러 같이 짜요',
        description: '어디를 가야 할지 아직 미정입니다.',
        age: 0,
        themes: ['힐링', '먹방'],
        avatar: 'iu.jpeg',
    },
    {
        accountId: 'eunwoo',
        image: 'thumb11.jpg',
        title: '강릉 여행',
        description: '강릉에는 뭐가 있나 모르겠네',
        age: 0,
        themes: ['힐링', '먹방'],
        avatar: 'chaeunwoo.jpeg',
    },
    {
        accountId: 'beauty366',
        image: 'thumb12.jpg',
        title: '미쿡 여행',
        description: '미쿡가서 자유의 여신상도 보고 LA도 가서 LA 갈비도 먹고 타임스퀘어도 가고 할게 태산이구만',
        age: 50,
        themes: ['힐링', '먹방'],
        avatar: 'pretty.jpeg',
    },
];
</script>

<style scoped></style>
