<template>
    <div
        class="flex p-6 flex-col items-start gap-6 bg-gradient-to-b from-teal-400 to-transparent 3xl:px-[225px] 3xl:py-[80px] 3xl:gap-[80px]">
        <div class="w-full">
            <img src="/images/san-pham3.png" alt="" class="w-full object-cover">
        </div>
        <div class="flex items-start gap-3 flex-col 3xl:w-2/3">
            <div>

                <p
                    class="text-black text-[12px] leading-normal font-HG uppercase font-semibold 3xl:text-[16px] 3xl:tracking-[3px]">
                    Khách
                    hàng cá nhân
                </p>
                <p class="text-black text-[20px] 3xl:text-[60px] leading-normal font-BG font-bold">Chương trình Zero -
                    Fee</p>
            </div>
            <p class="text-black text-[12px] 3xl:text-[18px] 3xl:leading-[30px] leading-normal font-HG">Zero-Fee là
                chương trình ưu đãi đặc
                biệt từ
                UPS, mang đến cho bạn cơ hội giao dịch chứng khoán hoàn
                toàn miễn phí. Từ nay đến hết năm, mọi giao dịch của bạn sẽ được miễn phí 100%, giúp bạn tối ưu hóa
                lợi nhuận và trải nghiệm đầu tư tốt nhất. Hãy cùng UPS bước vào hành trình đầu tư hiệu quả mà không
                còn lo lắng về chi phí giao dịch!</p>
        </div>
        <div class="btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item">
            <div class="inline-flex">
                <nuxt-link to="/" class="btn active group ">
                    <span class="text-[10px] sm:text-[12px] xl:text-[14px] "> Đăng kí ngay </span>
                    <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                        <i class="w-full h-full group-hover:inline-flex hidden absolute">
                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                                alt="UPS" />
                        </i>
                        <i class="w-full h-full group-hover:hidden inline-flex absolute">
                            <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                        </i>
                    </div>
                </nuxt-link>
            </div>

            <nuxt-link to="/" class="btn group  border border-transparent hover:border-[#222]">
                <span class="text-[10px] sm:text-[12px] xl:text-[14px]"> Xem hướng dẫn </span>
                <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                    <i class="w-full h-full inline-flex absolute">
                        <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                    </i>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "banner",
    components: {
    },
},
);
</script>
