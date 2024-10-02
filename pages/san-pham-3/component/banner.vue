<template>
    <div
        class="animate-ups flex p-6 flex-col items-start gap-6 bg-gradient-to-b from-teal-400 to-transparent 3xl:px-[225px] 3xl:py-[80px] 3xl:gap-[80px]">
        <div class="w-full animate-ups__item">
            <img src="/images/san-pham3.png" alt="" class="w-full object-cover h-full 3xl:rounded-[40px] rounded-2xl">
        </div>

        <div class="animate-ups__item flex flex-col 3xl:gap-[40px] gap-[32px]">
            <div class="flex items-start gap-3 flex-col 3xl:w-2/3">
                <div>

                    <p
                        class="text-black text-sm 3xl:text-[16px] leading-normal font-HG uppercase font-semibold 3xl:tracking-[3px]">
                        Khách
                        hàng cá nhân
                    </p>
                    <p class="text-black text-[20px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-BG font-bold">Zero Fee <br /> Đầu
                        tư
                        "Free" - Giao dịch 0 phí</p>
                </div>

                <p class="text-black text-[14px] 3xl:text-[18px] 3xl:leading-[30px] leading-normal font-HG 3xl:w-[80%]">
                    Zero-Fee là
                    chương trình ưu đãi đặc
                    biệt từ
                    UPS, mang đến cho bạn cơ hội giao dịch chứng khoán hoàn
                    toàn miễn phí. Từ nay đến hết 15/09, mọi giao dịch của bạn sẽ được miễn phí 100%, giúp bạn tối
                    ưu hóa
                    lợi nhuận và trải nghiệm đầu tư tốt nhất. Hãy cùng UPS bước vào hành trình đầu tư hiệu quả mà không
                    còn lo lắng về chi phí giao dịch!</p>
            </div>

            <div class="animate-ups__item btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item">
                <div class="inline-flex">
                    <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info" class="btn active group ">
                        <span class="text-xs lg:text-[14px] 3xl:text-[16px]"> Đăng kí ngay </span>
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
                    <span class="text-xs lg:text-[14px] 3xl:text-[16px]"> Xem hướng dẫn </span>
                    <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                        <i class="w-full h-full inline-flex absolute">
                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                                alt="UPS" />
                        </i>
                    </div>
                </nuxt-link>
            </div>
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
