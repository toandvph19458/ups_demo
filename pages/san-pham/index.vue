<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./components/banner.vue";
import Slider from "./components/slider.vue";
import feature from "./components/feature.vue";
import question from "./components/question.vue";

export default defineComponent({
    name: "san-pham",
    components: {
        Banner,
        Slider,
        feature,
        question,
    },
});

</script>

<template>
    <section>
        <!-- banner -->
        <banner />
        <!-- slider -->
        <slider />
        <!-- tinh-nang -->
        <feature />
        <!-- thong tin lien he -->
        <div
            class="flex sm:flex-col md:flex-row p-[40px_160px] sm:p-6 xl:p-[24px_100px] lg:p-[24px_60px] lg:gap-10 xxl:p-[24px_120px] justify-between items-center bg-gradient-to-r from-pink-400 via-orange-400 to-red-400">
            <p
                class="text-[#faf7f7] text-[36px] xl:text-[24px] md:text-[20px] sm:text-[14px] xxl:text-[28px] font-semibold leading-normal sm:w-full">
                Để biết thêm chi tiết về sản phẩm Margin T+3 hoặc cần hỗ trợ đăng ký, hãy liên hệ với
                chúng tôi:</p>

            <div class="flex flex-col justify-center items-center gap-2 sm:w-full md:pl-10">
                <div class="flex items-center gap-[12px] self-stretch">
                    <div class="xxl:w-6 xxl:h-6 relative h-4 w-4 xl:h-5 xl:w-5">
                        <nuxt-img src="/icons/call.svg" class="absolute w-full h-full" />
                    </div>
                    <p class="xxl:text-[18px] xl:text-[14px] md:text-[14px] text-[16px] text-white font-normal">
                        (+84.24) 3 944 6666
                    </p>
                </div>
                <div class="flex items-center gap-[12px] self-stretch">
                    <div class="xxl:w-6 xxl:h-6 relative h-4 w-4 xl:h-5 xl:w-5">
                        <nuxt-img src="/icons/sms-tracking.svg" class="absolute w-full h-full" />
                    </div>
                    <p class="xxl:text-[18px] xl:text-[14px] md:text-[14px] text-[16px] text-white font-normal">
                        investmentbanking@upse.com.vn
                    </p>
                </div>
                <div class="flex items-center gap-[12px] self-stretch">
                    <div class="xxl:w-6 xxl:h-6 relative h-4 w-4 xl:h-5 xl:w-5">
                        <nuxt-img src="/icons/global.svg" class="absolute w-full h-full" />
                    </div>
                    <p class="xxl:text-[18px] xl:text-[14px] md:text-[14px] text-[16px] text-white font-normal">
                        www.upse.com.vn
                    </p>
                </div>
            </div>
        </div>
        <!-- cau hoi thuong gap -->
        <question />

    </section>
</template>

<style scoped>
@keyframes scroll {
    0% {
        opacity: 0;
        transform: translateY(0) scale(0.5);
    }

    10% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: translateY(12px) scale(0.5);
    }
}

.animate-scroll {
    animation: scroll 1.5s cubic-bezier(0.65, -0.55, 0.25, 1.5) infinite;
}
</style>