<template>
    <div
        class="container 3xl:py-[100px] xl:py-[60px] 2xl:py-[80px] 2xl:gap-[100px] flex flex-col items-center 3xl:gap-[140px] xl:gap-[80px] gap-10 py-10 lg:py-10">
        <!-- Banner-2 -->
        <banner />

        
        <!-- co-phan-hoa -->
        <coPhanHoa />
        <!-- thoai-von -->

        <thoaiVon />
        <!-- ho-tro-doanh-nghiep -->
        <div
            class=" flex items-end border bg-gradient-to-r from-cyan-400 to-green-300 p-5 rounded-[16px] w-full md:p-8 xl:p-10 3xl:p-[60px] 3xl:rounded-[40px]">
            <div
                class="flex flex-col items-start lg:justify-between  gap-4 md:flex-row-reverse xl:gap-6 2xl:gap-[60px] 3xl:gap-[30px] w-full ">
                <p class="font-BG text-[16px] text-[#15171E] leading-normal block md:hidden ">Hỗ trợ doanh
                    nghiệp các vấn đề thường
                    niên
                </p>

                <div class="flex items-start flex-col lg:flex-row 2xl:gap-6 2xl:min-w-[700px] 3xl:w-2/3">
                    <div class="w-full flex 2xl:flex-row flex-col">
                        <div class="flex items-start justify-center flex-col gap-2 2xl:w-1/2">
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Tư vấn thường niên về lĩnh vực chứng khoán
                                </p>
                            </div>
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Hỗ trợ về công bố thông tin phù hợp với pháp luật
                                </p>
                            </div>
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Hỗ trợ tổ chức đại hội đồng thường niên và bất thường
                                </p>
                            </div>
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Hỗ trợ soạn thảo tài liệu họp ĐHCĐ
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start flex-col gap-2 2xl:w-1/2 ">
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Tư vấn bầu lại Hội đồng quản trị, ban kiểm soát
                                </p>
                            </div>
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Trả cổ tức bằng tiền mặt hoặc cổ phiếu
                                </p>
                            </div>
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Phát hành cổ phiếu thưởng cho cổ đông hiện hữu
                                </p>
                            </div>
                            <div class="flex items-center gap-[10px]">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                            fill="#3F424E" />
                                    </svg></span>
                                <p class="font-HG text-[14px] 3xl:text-[16px] leading-normal text-[#3F424E]">
                                    Mua/ bán cổ phiếu quỹ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:flex md:flex-col md:gap-4 md:items-start 3xl:w-1/3">
                    <p
                        class="font-BG text-[16px] xl:text-[24px] 3xl:text-[32px] text-[#15171E] leading-normal hidden md:block font-semibold xl:w-2/3">
                        Hỗ trợ
                        doanh
                        nghiệp các vấn đề thường
                        niên
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
        <div class="relative w-full h-[260px] xl:min-h-[440px] 2xl:min-h-[480px] ">
            <nuxt-img src="/images/tuvan-1.jpg"
                class="absolute w-full h-full object-cover rounded-[16px] 3xl:rounded-[40px]" />
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
