<template>
    <div class="3xl:py-[100px] 2xl:py-[80px] 3xl:flex 3xl:flex-col 3xl:items-center 3xl:gap-[100px] 2xl:gap-[80px]">
        <!-- Banner-2 -->
        <banner />
        <!-- co-phan-hoa -->
        <coPhanHoa />
        <!-- thoai-von -->
        <div class="2xl:my-[80px] xl:my-[60px]">
            <thoaiVon />
        </div>
        <!-- niem-yet -->
        <niemYet />
    </div>
    <!-- ho-tro-doanh-nghiep -->
    <div
        class="3xl:px-[160px] 2xl:px-[120px] xl:px-[100px] 3xl:py-[60px] xl:py-[40px] 3xl:gap-[120px] xl:gap-5 flex items-end border bg-gradient-to-r from-cyan-400 to-green-300 my-[60px]">
        <div class="flex 3xl:w-[580px] flex-col items-start 3xl:gap-10 xl:gap-[28px] xl:w-1/3">
            <p class="font-BG 2xl:text-[32px] xl:text-[28px] leading-normal">Hỗ trợ doanh nghiệp các vấn đề thường niên
            </p>
            <div class="btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item">
                <div class="inline-flex">
                    <nuxt-link to="/" class="btn active group ">
                        <span class="text-[10px] sm:text-[12px] xl:text-[14px] "> Liên hệ tư vấn </span>
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
            </div>
        </div>
        <div class="flex items-start 3xl:gap-6  xl:w-2/3 xl:gap-3">
            <ul class="flex-1 flex flex-col gap-4 ">
                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Tư vấn thường niên về lĩnh vực chứng
                    khoán
                </li>
                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Hỗ trợ về công bố thông tin phù hợp
                    với pháp
                    luật
                </li>
                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Hỗ trợ tổ chức đại hội đồng thường
                    niên và
                    bất thường
                </li>

                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Hỗ trợ soạn thảo tài liệu họp ĐHCĐ
                </li>

            </ul>
            <ul class="flex-1 flex flex-col gap-4 ">
                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Tư vấn bầu lại Hội đồng quản trị, ban
                    kiểm
                    soát
                </li>
                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Trả cổ tức bằng tiền mặt hoặc cổ
                    phiếu
                </li>
                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Phát hành cổ phiếu thưởng cho cổ đông
                    hiện
                    hữu
                </li>

                <li class="font-HG 3xl:text-[16px] 2xl:text-[14px] leading-normal">Mua/ bán cổ phiếu quỹ
                </li>

            </ul>
        </div>
    </div>
    <!-- doi tac -->
    <div class="3xl:py-[100px] layout">
        <div class="flex justify-center items-center gap-4 pb-[50px]">
            <h3
                class="animate-ups__item text-[#01C159] font-BG text-[20px] md:text-[32px] xl:text-[60px] text-center lg:text-left font-semibold leading-[1 text-[52px] font-semibold">
                Đối tác của
            </h3>
            <div class="inline-flex relative w-[80px] h-[40px] md:w-[145px] md:h-[66px] xl:w-[132px] xl:h-[60px] mt-2">
                <nuxt-img format="webp" loading="lazy" alt="UPS" width="132" height="60" src="/logo/logo-cap-dark.png"
                    class="animate-ups__item absolute w-full h-full object-cover" />
            </div>
        </div>
        <client-only>
            <vue3-marquee :duration="50" :gradient="true" :gradient-color="[255, 255, 255]" gradient-length="20%">
                <div v-for="doc in 8" :key="doc" class="mx-[80px] group py-2">
                    <nuxt-img format="webp" loading="lazy" alt="UPS" height="60" :src="`/partner/partner-0${doc}.png`"
                        class="cursor-pointer object-contain transition-all duration-200 grayscale group-hover:grayscale-0 group-hover:scale-110" />
                </div>
            </vue3-marquee>
        </client-only>
    </div>
    <!-- end -->
    <div
        class=" 3xl:py-[100px] 3xl:px-[400px]  flex items-center justify-center xl:w-full xl:my-[60px] 2xl:px-[300px] 2xl:py-[75px] xl:px-[260px] xl:py-[60px]">
        <div
            class="flex 3xl:h-[320px] 2xl:h-[240px] xl:h-[220px] 3xl:p-[32px] 2xl:p-6 flex-col items-start xl:rounded-[24px] justify-between bg-gradient-to-r from-gray-200 via-gray-200 to-transparent border xl:flex-1 xl:p-5">
            <img src="/logo/logo-row.png" alt="abc" class="w-4 h-4">
            <div class="flex flex-col gap-4 items-start">
                <p class="font-BG 3xl:text-[24px] 2xl:text-[18px] xl:text-[16px] font-semibold leading-normal">Bộ phận
                    ngân hàng đầu tư
                </p>
                <div class="flex items-center gap-3">
                    <img src="/icons/sms-tracking.svg" alt="" class="2xl:w-[18px] 2xl:h-[18px] xl:w-[16px] xl:h-[16px]">
                    <p class="font-BG 3xl:text-[18px] 2xl:text-[14px] leading-normal">investmentbanking@upse.com.vn</p>
                </div>
                <div class="flex items-center gap-3">
                    <img src="/icons/call.svg" alt="" class="2xl:w-[18px] 2xl:h-[18px] xl:w-[16px] xl:h-[16px]">
                    <p class="font-BG 3xl:text-[18px] xl:text-[14px] leading-normal">(024) 3944 6666</p>
                </div>
                <div class="flex items-center gap-3">
                    <img src="/icons/location.svg" alt="" class="2xl:w-[18px] 2xl:h-[18px] xl:w-[16px] xl:h-[16px]">
                    <p class="font-BG 3xl:text-[18px] xl:text-[14px] leading-normal">Tầng 8, Toà nhà 11B Cát Linh, Đống
                        Đa, Hà
                        Nội</p>
                </div>
            </div>
        </div>
        <div class="relative xl:w-1/2 top-0 3xl:right-[100px] 2xl:right-[50px] xl:right-[40px]">
            <div
                class="flex 3xl:p-[32px] 2xl:p-6 xl:p-5 items-end flex-col justify-between rounded-[24px] bg-gradient-to-r from-cyan-400 to-green-300 border xl:h-[220px] 3xl:h-[320px] 2xl:h-[240px] ">
                <div class="xl:w-full ">
                    <p
                        class="font-BG 3xl:text-[40px] 2xl:text-[32px] xl:text-[28px] font-semibold leading-normal text-white">
                        Tư vấn
                        <br /> tài
                        chính
                        doanh
                        nghiệp
                    </p>
                    <p class="font-BG 3xl:text-[40px] 2xl:text-[32px] xl:text-[28px] font-semibold leading-normal">ngay
                        hôm nay</p>
                </div>
                <div class="btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item">
                    <div class="inline-flex">
                        <nuxt-link to="/" class="btn active group ">
                            <span class="text-[10px] sm:text-[12px] xl:text-[14px] "> Liên hệ tư vấn </span>
                            <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import banner from "./components/banner.vue";
import coPhanHoa from "./components/co-phan-hoa.vue";
import thoaiVon from "./components/thoai-von.vue";
import niemYet from "./components/niem-yet.vue";

export default defineComponent({
    name: "tu-van",
    components: {
        banner,
        coPhanHoa,
        thoaiVon,
        niemYet
    },
    setup(props, ctx) {
        onMounted(() => {
            const animateUpsEl = document.querySelectorAll(".animate-ups");

            animateUpsEl.forEach((el) => {
                const upsEl = el.querySelectorAll(".animate-ups__item");
                useGsap.fromTo(
                    upsEl,
                    {
                        y: 100,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power1.out",
                        stagger: {
                            from: 0,
                            axis: "x",
                            amount: 0.5,
                        },
                        scrollTrigger: {
                            trigger: el,
                            start: "top center",
                            end: "bottom center",
                            scrub: false,
                        },
                    }
                );
            });

            const btnWrapper = document.querySelectorAll(".link");
            btnWrapper.forEach((el) => {
                useGsap.fromTo(
                    el,
                    {
                        y: 100,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power1.out",
                        stagger: {
                            from: 0,
                            axis: "x",
                            amount: 0.5,
                        },
                    }
                );
            });

            useGsap.fromTo(
                ".policy_collection-item",
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power1.out",
                    stagger: {
                        from: 0,
                        axis: "x",
                        amount: 0.5,
                    },
                    scrollTrigger: {
                        trigger: ".section_policy",
                        start: "top center", // When the top of .section hits the center of viewport
                        end: "bottom center", // When the bottom of .section hits the center of viewport
                        scrub: false,
                    },
                }
            );

            useGsap.fromTo(
                ".news_layout_item",
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "sine.out",
                    stagger: {
                        from: 0,
                        axis: "x",
                        amount: 0.5,
                    },
                    scrollTrigger: {
                        trigger: ".section_news",
                        start: "top center", // When the top of .section hits the center of viewport
                        end: "bottom center", // When the bottom of .section hits the center of viewport
                        scrub: false,
                    },
                }
            );
        });
    },
});
</script>
<style scoped></style>
