<template>
    <div
        :style="{ backgroundImage: `url(${require('@/assets/signInBackground.jpeg')}` }"
        class="px-4 py-8 md:px-6 lg:px-8 background"
    >
        <div class="flex w-full h-full align-items-center justify-content-center">
            <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
                <div class="text-900 text-2xl font-medium mb-6 text-center">SignUp</div>
                <label for="profileImage" class="block text-900 font-medium mb-2">프로필사진</label>
                <file-upload
                    mode="basic"
                    name="demo[]"
                    accept="image/*"
                    customUpload
                    @uploader="customBase64Uploader"
                    class="buttonColorGreen"
                ></file-upload>
                <label for="email3" class="block text-900 font-medium mb-2">e-mail</label>
                <InputText id="email3" type="text" placeholder="Email address" class="w-full mb-4" />
                <label for="password3" class="block text-900 font-medium mb-2">비밀번호</label>
                <InputText id="password3" type="password" placeholder="Password" class="w-full mb-4" />

                <Button label="SignUp" icon="pi pi-user" class="w-full buttonColorGreen"></Button>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style>
.background {
    height: 100vh;
    background-size: cover;
}

.buttonColorGreen {
    background-color: #03d069;
}

.buttonColorGreen:hover {
    background-color: #03d069;
    transition: 0.7s;
}
</style>
