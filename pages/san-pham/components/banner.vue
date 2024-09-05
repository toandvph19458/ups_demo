<template>
    <section class="animate-ups">

        <div
            class="flex flex-col items-center xxl:gap-[80px] xl:gap-[60px] lg:gap-[40px] sm:gap-[24px] py-[80px] xl:py-[60px] lg:py-[40px] sm:py-[24px] xxl:px-[120px] px-[225px] xl:px-[100px] lg:px-[60px] sm:px-[24px] self-stretch w-full ">
            <div class="flex flex-col items-center gap-[40px] sm:gap-[24px]">
                <p
                    class="text-[#173025] text-center font-HG xxl:text-[16px] lg:text-[12px] sm:text-[12px] text-[14px] xl:text-[12px] font-semibold leading-none tracking-[3.2px] uppercase animate-ups__item">
                    Khách hàng cá nhân
                </p>
                <p
                    class="text-[var(--Black-Alpha---color-black-alpha-900,#000)]  text-center font-BG xxl:text-[60px] lg:text-[32px] text-[45px] xl:text-[40px] sm:text-[20px] font-bold leading-none animate-ups__item">
                    Margin T+3
                </p>
                <p
                    class="text-black/60 text-center font-HG xxl:text-[18px] text-[14px] xl:text-[12px] lg:text-[12px] sm:text-[12px] font-medium leading-[30px] self-stretch w-full animate-ups__item">
                    Margin T+3 từ UP Securities là sản phẩm được thiết kế dành riêng cho những nhà đầu tư muốn tận dụng
                    tối đa cơ hội ngắn hạn trên thị trường chứng khoán. Với lãi suất ưu đãi chỉ từ 6.8% và thời gian nắm
                    giữ cổ phiếu lên đến 3 ngày (T+3), bạn có thể gia tăng lợi nhuận từ các giao dịch nhanh chóng và
                    hiệu quả.
                </p>
                <div class="btn-wrapper flex gap-5 sm:gap-2 items-center">
                    <div class="inline-flex animate-ups__item">
                        <nuxt-link to="/" class="btn active group animate-ups__item">
                            <span> Đăng kí ngay </span>
                            <div class="inline-flex xxl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                                <i class="w-full h-full group-hover:inline-flex hidden absolute">
                                    <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                                        alt="UPS" />
                                </i>

                                <i class="w-full h-full group-hover:hidden inline-flex absolute">
                                    <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16"
                                        alt="UPS" />
                                </i>
                            </div>
                        </nuxt-link>
                    </div>
                    <nuxt-link to="/" class="btn group animate-ups__item animate-ups__item">
                        <span> Xem hướng dẫn </span>
                        <div class="inline-flex xxl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                            <i class="w-full h-full inline-flex absolute">
                                <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                                    alt="UPS" />
                            </i>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="w-full xxl:h-[450px] h-[380px] md:h-[260px] xl:h-[350px] sm:h-[120px] animate-ups__item">
                <nuxt-img src="/images/Frame 1171276226.png" class="w-full h-full" />
            </div>
        </div>
    </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

export default defineComponent({
    name: "banner",
    components: {

    },
    setup(props, ctx) {
        return {
            cn,
        };
    },
});
</script>

<style scoped></style>