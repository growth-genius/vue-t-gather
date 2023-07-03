<template>
    <div></div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getTravelGroup } from '@/api/travel';

const route = useRoute();
const groupId = route.query.groupId;
const searchTravelGroup = async groupId => {
    const res = await getTravelGroup(groupId);
    console.log(res);
};

searchTravelGroup(groupId);
console.log(route.query);
</script>

<style scoped></style>
