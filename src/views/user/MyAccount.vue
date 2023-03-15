<template>
    <div class="text-900 font-semibold text-lg mt-3">계정</div>
    <Divider></Divider>
    <div class="flex gap-5 flex-column-reverse md:flex-row">
        <div class="flex-auto p-fluid">
            <div class="mb-4">
                <label for="email" class="block font-medium text-900 mb-2">이메일</label>
                <InputText id="email" type="text" disabled />
            </div>
            <div class="mb-4">
                <label for="password" class="block font-medium text-900 mb-2">비밀번호</label>
                <div class="flex">
                    <InputText id="state" type="text" disabled class="w-8" />
                    <Button label="비밀번호 변경" class="w-auto ml-1"></Button>
                </div>
            </div>
            <div>
                <Button label="Update Account" class="w-auto"></Button>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
