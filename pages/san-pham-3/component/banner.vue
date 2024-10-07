<template>
    <div
        class="animate-ups bg-gradient-to-b from-[#00D7B0] to-transparent py-6 md:py-10 xl:py-[60px] 2xl:py-[80px] 3xl:py-[80px]">

        <div class="container-product space-y-6 md:space-y-10 xl:space-y-[60px] 3xl:space-y-[80px]">
            <div class="w-full animate-ups__item">
                <img src="/images/sanpham3.png" alt=""
                    class="w-full object-cover h-full 3xl:rounded-[40px] rounded-2xl">
            </div>

            <div class="animate-ups__item flex flex-col gap-8 3xl:gap-10">

                <div class="flex flex-col items-start gap-3 xl:gap-5 2xl:gap-6 w-full lg:w-10/12 3xl:w-7/12">
                    <div>
                        <p
                            class="hidden 3xl:block text-black text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-BG font-bold">
                            Zero Fee - Giao dịch "Free"
                        </p>
                        <p
                            class="3xl:hidden text-black text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-BG font-bold">
                            Chương trình Zero Fee
                        </p>
                    </div>


                    <div>
                        <p
                            class="text-black text-[18px] 3xl:text-[20px] 3xl:leading-[30px] font-bold leading-normal font-HG lg:w-[90%]">
                            Bạn đã sẵn sàng đón nhận ưu đãi hấp dẫn nhất từ UPS chưa?</p>
                        <p
                            class="text-black text-[16px] 3xl:text-[18px] 3xl:leading-[30px] leading-normal font-HG lg:w-[90%]">
                            Từ ngày 08/10/2024 - 31/12/2024, UPS miễn 100% phí giao dịch, mang đến cơ hội tối đa hóa lợi
                            nhuận dành cho khách hàng. Chúng tôi cam kết mang lại trải nghiệm cá nhân hóa vượt trội,
                            giúp bạn bước vào hành trình đầu tư thông minh và hiệu quả hơn bao giờ hết.</p>
                    </div>
                </div>

                <div class="animate-ups__item btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item">
                    <div class="inline-flex">
                        <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info"
                            class="btn active group ">
                            <span class="text-[16px]"> Đăng kí ngay </span>
                            <div class="hidden md:inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
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

                    <nuxt-link to="/" class="btn group  border border-transparent hover:border-[#222]">
                        <span class="text-[16px]"> Xem chi tiết</span>
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
