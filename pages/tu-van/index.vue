<template>
    <div
        class="container 3xl:py-[100px] xl:py-[60px] 2xl:py-[80px] flex flex-col items-center gap-10 lg:gap-[60px] xl:gap-[80px] 2xl:gap-[100px] 3xl:gap-[140px] py-10 lg:py-10 ">
        <!-- Banner-2 -->
        <banner />
        <!-- co-phan-hoa -->
        <coPhanHoa />
        <!-- thoai-von -->

        <thoaiVon />
        <!-- ho-tro-doanh-nghiep -->
        <div
            class="animate-ups border bg-gradient-to-r from-cyan-400 to-green-300 rounded-[16px] md:rounded-[20px] xl:rounded-[24px] 2xl:rounded-[32px] 3xl:rounded-[40px] w-full p-5 md:p-8 xl:p-10 3xl:p-[60px]">
            <div class="flex flex-col-reverse md:flex-row w-full h-full gap-4 md:gap-5 lg:gap-6 xl:gap-[30px]">
                <div class="basis-5/12 lg:basis-4/12 3xl:basis-5/12 flex flex-col gap-10">
                    <div
                        class="hidden md:block animate-ups__item w-[90%] font-BG text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] text-[#15171E] leading-[1.3] font-semibold">
                        Hỗ trợ doanh nghiệp các vấn đề thường niên
                    </div>

                    <div class="animate-ups__item btn-wrapper flex gap-5 sm:gap-3 items-center">
                        <div class="inline-flex">
                            <nuxt-link to="/" class="btn active group ">
                                <span class="text-[16px] xl:text-[16px] font-bold"> Liên hệ tư vấn </span>
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

                <div class="flex-1 flex flex-col lg:flex-row gap-2 md:gap-3 xl:gap-4">
                    <div
                        class="md:hidden mb-2 animate-ups__item w-[90%] font-BG text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] text-[#15171E] leading-[1.3] font-semibold">
                        Hỗ trợ doanh nghiệp các vấn đề thường niên
                    </div>

                    <div class="basis-full lg:basis-1/2 flex flex-col gap-2 xl:gap-4">
                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Tư vấn thường niên về lĩnh vực chứng khoán
                            </p>
                        </div>

                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Hỗ trợ về công bố thông tin phù hợp với pháp luật
                            </p>
                        </div>

                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Hỗ trợ tổ chức đại hội đồng thường niên và bất thường
                            </p>
                        </div>
                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Hỗ trợ soạn thảo tài liệu họp ĐHCĐ
                            </p>
                        </div>
                    </div>

                    <div class="basis-full lg:basis-1/2 flex flex-col gap-2 xl:gap-4">
                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Tư vấn bầu lại Hội đồng quản trị, ban kiểm soát
                            </p>
                        </div>
                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Trả cổ tức bằng tiền mặt hoặc cổ phiếu
                            </p>
                        </div>
                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Phát hành cổ phiếu thưởng cho cổ đông hiện hữu
                            </p>
                        </div>
                        <div class="animate-ups__item flex items-start gap-[10px]">
                            <span class="mt-[7px]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                    viewBox="0 0 8 9" fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="#3F424E" />
                                </svg></span>
                            <p class="font-HG text-[16px] 2xl:text-[16px] leading-normal text-[#3F424E] font-medium">
                                Mua/ bán cổ phiếu quỹ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="animate-ups relative w-full min-h-[437px] md:min-h-[260px] lg:min-h-[350px] xl:min-h-[440px] 2xl:min-h-[480px] 3xl:min-h-[600px]">
            <nuxt-img src="/images/tuvan-1.jpg"
                class="animate-ups__item absolute w-full h-full object-cover rounded-[16px] 3xl:rounded-[40px]" />
        </div>


        <!-- niem-yet -->
        <niemYet />
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
