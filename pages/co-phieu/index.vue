<template>
    <!-- banner cổ phiếu -->
    <div class="container py-[160px] px-[100px]">
        <div class="flex gap-[40px]">
            <!-- cột trái của banner -->
            <div class="flex flex-col w-[40%]">
                <div class="">
                    <h1 class="text-[#15171E] font-BG text-[60px] font-bold leading-normal">Cổ phiếu</h1>
                    <p class="text-[#838383] font-HG text-[18px] font-medium leading-[28px] my-[24px]">Tham gia giao
                        dịch Cổ phiếu là giải pháp đơn giản và dễ dàng giúp bạn hiện thực hóa ước mơ tăng trưởng tài
                        chính và chinh phục những đỉnh cao cuộc sống. Với sự cải tiến vượt trội của kênh đầu tư và đặc
                        quyền đầu tư tại UPS chính là động lực thúc đẩy, giúp hành trình đầu tư trở nên đầy hứng khởi:
                        đơn giản và hiệu quả. </p>
                    <div class="flex gap-4 flex-wrap">
                        <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info"
                            class="btn active group">
                            <span class="text-sm 3xl:text-lg"> Mở tài khoản ngay </span>
                            <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
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

                        <nuxt-link to="https://webtrading.upse.vn/"
                            class="btn h-8 2xl:h-12 px-4 2xl:px-5 inline-flex gap-3 items-center rounded-full border lg:border-transparent border-[#222] hover:border-[#222] ">
                            <span class="text-sm 3xl:text-lg font-bold"> Hướng dẫn giao dịch
                            </span>
                            <div class="inline-flex gap-1 w-3 2xl:w-4 h-3 2xl:h-4 overflow-hidden relative">
                                <i class="w-full h-full inline-flex absolute">
                                    <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                                        alt="UPS" />
                                </i>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="">
                    
                </div>
            </div>
            <!-- cột phải của banner -->
            <div class="w-[60%]">
                <div class="flex justify-end">
                    <div class="relative w-[664px] h-[336px]">
                        <nuxt-img loading="lazy" alt="UPS" src="/images/banner-co-phieu.png"
                            class="absolute w-full h-full object-cover rounded-[40px]" />
                    </div>

                </div>
                <div class="flex mt-[24px] gap-[24px] justify-end">
                    <div class="flex flex-col justify-end gap-[24px] items-end">
                        <div class="p-[60px] rounded-[40px] bg-[linear-gradient(315deg,#14FFD4_3.8%,#755CF6_85.1%)]">
                            <p class="text-white font-BG text-[32px] font-bold leading-normal">Mở tài khoản eKYC</p>
                            <div class="flex gap-[12px] items-baseline mt-[24px]">
                                <p class="text-white font-BG text-[24px] font-bold leading-none">chỉ với</p>
                                <p class="text-white font-BG text-[60px] font-bold leading-none">30 giây</p>
                            </div>
                        </div>
                        <div
                            class="hidden w-[48px] h-[48px] xl:w-[90px] xl:h-[90px] md:inline-flex items-center justify-center bg-[#15171E] rounded-[40px] animate-about__item">
                            <div class="w-5 h-5 xl:w-10 xl:h-10 relative inline-flex">
                                <nuxt-img format="webp" loading="lazy" height="40" alt="UPS" src="/logo/logo-row.png"
                                    class="animate-about__item absolute w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                    <div class="relative w-[443px] h-[407px]">
                        <nuxt-img loading="lazy" alt="UPS" src="/images/images-2-co-phieu.png"
                            class="absolute w-full h-full object-cover rounded-[40px]" />
                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "co-phieu"
})
</script>