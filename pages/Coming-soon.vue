<template>
    <section class="w-full h-full px-[446px] pt-[150px] pb-[309px] relative flex items-center flex-col">
        <img src="/images/coming-soon-logo2.png" alt="" class="absolute top-0">
        <img src="/images/coming-soon-logo.png" alt="" class="absolute bottom-0">
        <div class="flex items-center gap-[60px] flex-col relative z-50">
            <div>
                <p class="text-[#15171E] text-center font-BG text-[100px] font-bold leading-normal tracking-[4px]">
                    Đang cập nhật
                </p>
                <p class="text-[#535662] text-center font-HG text-[18px] font-medium leading-normal">
                    Nhận thông báo ngay về tính năng này khi được ra mắt
                </p>
            </div>
            <div
                class="flex w-[950px] p-[12px] items-center gap-[12px] rounded-[52px] border border-[#02E56A] bg-white/60 backdrop-blur-[20px]">
                <div class="">
                    <input type="text" placeholder="Tên của bạn"
                        class="flex w-[280px] px-[24px] py-[12px] items-center flex-shrink-0 self-stretch rounded-[40px] bg-gray-100 backdrop-blur-[20px] outline-none">
                </div>
                <div
                    class="flex px-[24px] py-[12px] items-center flex-[1_0_0] self-stretch rounded-[40px] bg-gray-100 backdrop-blur-[20px] ">
                    <input type="text" placeholder="Email" class="w-full h-full bg-transparent outline-none">
                </div>
                <div class="flex px-[30px] py-[15px] items-center gap-[12px] self-stretch rounded-[40px] bg-[#02E56A]">
                    <button class="text-[#15171E] font-HG text-[16px] font-bold leading-normal" @click="submit">
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: "coming-soon",
    components: {

    },
});
</script>

<style></style>
