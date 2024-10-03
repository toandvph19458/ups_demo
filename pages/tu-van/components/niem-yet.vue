<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "thoai-von",
    components: {
    },

});
</script>
<!-- <template>
    <div class="animate-ups flex flex-col items-center w-full gap-5 2xl:gap-10">
        <div class="flex 3xl:w-[700px] flex-col 3xl:gap-3">
            <p
                class="animate-ups__item text-center font-BG text-[28px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] leading-normal font-semibold">
                Niêm yết và giao
                dịch
            </p>
            <p class="animate-ups__item text-center font-HG text-[16px] 2xl:text-[16px] leading-normal text-[rgba(83, 86, 98, 0.80)]">
                UPS sẽ
                giúp doanh nghiệp
                chuẩn bị các điều kiện nhằm đáp ứng yêu cầu niêm yết
                theo quy định của pháp luật
            </p>
        </div>

        <div class="flex flex-col justify-center items-start gap-3 lg:flex-row min-h-[280px] 2xl:gap-6 3xl:gap-10">
            <div
                class="animate-ups__item relative p-5 lg:p-8 2xl:p-10 border w-full flex flex-col justify-center items-center gap-6 rounded-[12px] group animate-ups__item h-full lg:h-[515px] flex-1 md:p-8 2xl:min-h-[545px] 3xl:p-[60px] 3xl:rounded-[32px] 3xl:h-[642px]">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-[12px] 3xl:rounded-[32px]">
                </div>
                <img src="/images/tuvan-1.jpg"
                    class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] 3xl:rounded-[32px]"
                    alt="Background Image" />

                <div
                    class="flex flex-col items-start lg:justify-between gap-4 lg:gap-5 2xl:gap-10 group-hover:text-white w-full h-full">
                    <div class="flex flex-col gap-5">
                        <div
                            class="relative w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px] flex-shrink-0 z-20">
                            <nuxt-img src="/logo/logo-row.svg" alt="" />
                        </div>
                        <p
                            class="text-black group-hover:text-white text-left text-[18px] lg:text-[18px] xl:text-[20px] 3xl:text-[28px] font-BG font-semibold leading-normal z-30 transition-colors duration-300">
                            Tư vấn trình tự, thủ tục các nghiệp vụ liên quan tới chứng khoán và thị trường chứng khoán
                        </p>
                    </div>

                    
                    <div class="flex flex-col items-start group">
                        <div class="flex items-start gap-3 ">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Tư vấn lưu ký chứng khoán: Chốt danh sách cổ đông để thực hiện quyền, Giải tỏa hạn chế
                                chuyển nhượng …
                            </p>
                        </div>
                        <div class="flex items-start gap-3 ">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Tư vấn quản lý và quan hệ cổ đông
                            </p>
                        </div>
                        <div class="flex items-start gap-3 ">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Tư vấn quản trị Doanh nghiệp
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                     
                        <div class="btn-wrapper flex gap-5 sm:gap-3 items-start animate-ups__item w-full  z-30">
                            <div class="inline-flex">
                                <nuxt-link to="/" class="btn active">
                                    <span class="text-[16px] xl:text-[16px]"> Liên hệ tư vấn </span>
                                    <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative z-30">
                                        <i class="w-full h-full group-hover:inline-flex hidden absolute">
                                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16"
                                                height="16" alt="UPS" />
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

            <div
                class="animate-ups__item relative p-5 lg:p-8 2xl:p-10 border w-full flex flex-col justify-center items-center gap-6 rounded-[12px] group animate-ups__item h-full lg:h-[515px] flex-1 md:p-8 2xl:min-h-[545px] 3xl:p-[60px] 3xl:rounded-[32px] 3xl:h-[642px]">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-[12px] 3xl:rounded-[32px]">
                </div>
                <img src="/images/tuvan-1.jpg"
                    class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] 3xl:rounded-[32px]"
                    alt="Background Image" />

                <div
                    class="flex flex-col items-start lg:justify-between gap-4 lg:gap-5 2xl:gap-10 group-hover:text-white w-full h-full">
                    <div class="flex flex-col gap-5">
                        <div
                            class="relative w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px] flex-shrink-0 z-20">
                            <nuxt-img src="/logo/logo-row.svg" alt="" />
                        </div>
                        <p
                            class="text-black group-hover:text-white text-left text-[18px] lg:text-[18px] xl:text-[20px] 3xl:text-[28px] font-BG font-semibold leading-normal z-30 transition-colors duration-300 lg:h-[88px] ">
                            Tư vấn mua bán, sáp nhập doanh nghiệp
                        </p>
                    </div>
                    <div class="flex flex-col items-start group">
                        <div class="flex items-start gap-3 ">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Xác định chiến lược, mục tiêu mua bán, sáp nhập, hợp tác đầu tư
                            </p>
                        </div>
                        <div class="flex items-start gap-3">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Khảo sát đánh giá doanh nghiệp, dự án
                            </p>
                        </div>
                        <div class="flex items-start gap-3">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Tìm kiếm, đánh giá các đối tác tiềm năng
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5">
                      
                        <div class="btn-wrapper flex gap-5 sm:gap-3 items-start animate-ups__item w-full  z-30">
                            <div class="inline-flex">
                                <nuxt-link to="/" class="btn active">
                                    <span class="text-[16px] xl:text-[16px]"> Liên hệ tư vấn </span>
                                    <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative z-30">
                                        <i class="w-full h-full group-hover:inline-flex hidden absolute">
                                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16"
                                                height="16" alt="UPS" />
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

            <div
                class="animate-ups__item relative p-5 lg:p-8 2xl:p-10 border w-full flex flex-col justify-center items-center gap-6 rounded-[12px] group animate-ups__item h-full lg:h-[515px] flex-1 md:p-8 2xl:min-h-[545px] 3xl:p-[60px] 3xl:rounded-[32px] 3xl:h-[642px]">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-[12px] 3xl:rounded-[32px]">
                </div>
                <img src="/images/tuvan-1.jpg"
                    class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px] 3xl:rounded-[32px]"
                    alt="Background Image" />

                <div
                    class="flex flex-col items-start lg:justify-between gap-4 lg:gap-5 2xl:gap-10 group-hover:text-white w-full h-full">
                    <div class="flex flex-col gap-5">
                        <div
                            class="relative w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px] flex-shrink-0 z-20">
                            <nuxt-img src="/logo/logo-row.svg" alt="" />
                        </div>
                        <p
                            class="text-black group-hover:text-white text-left text-[18px] lg:text-[18px] xl:text-[20px] 3xl:text-[28px] font-BG font-semibold leading-normal z-30 transition-colors duration-300 lg:h-[88px] ">
                            Tư vấn đăng ký niêm yết và đăng ký giao dịch
                        </p>
                    </div>
                    <div class="flex flex-col items-start group">
                        <div class="flex items-start gap-3 ">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Tư vấn lộ trình thích hợp để đăng ký giao dịch
                            </p>
                        </div>
                        <div class="flex items-start gap-3">
                            <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                    fill="none">
                                    <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z" fill="black"
                                        class="group-hover:fill-white" />
                                </svg>
                            </p>
                            <p
                                class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                Tư vấn chỉnh sửa điều lệ hoạt động của doanh nghiệp phù hợp với Điều lệ mẫu áp dụng cho
                                các công ty niêm yết trên Sở giao dịch chứng khoán tại Thông tư số 121/2012/TT-BTC và
                                các văn bản pháp lý liên quan
                            </p>
                        </div>

                    </div>
                    <div class="flex flex-col gap-5">
                      
                        <div class="btn-wrapper flex gap-5 sm:gap-3 items-start animate-ups__item w-full  z-30">
                            <div class="inline-flex">
                                <nuxt-link to="/" class="btn active">
                                    <span class="text-[16px] xl:text-[16px]"> Liên hệ tư vấn </span>
                                    <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative z-30">
                                        <i class="w-full h-full group-hover:inline-flex hidden absolute">
                                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16"
                                                height="16" alt="UPS" />
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
        </div>

    </div>
</template> -->


<template>
    <div class="animate-ups">
        <div class="3xl:w-[700px] mx-auto space-y-2 md:space-y-3">
            <p
                class="animate-ups__item text-center font-BG text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] leading-normal font-semibold">
                Niêm yết và giao
                dịch
            </p>
            <p
                class="animate-ups__item text-center font-HG text-[14px] 2xl:text-[16px] font-medium leading-normal text-[rgba(83, 86, 98, 0.80)]">
                UPS sẽ
                giúp doanh nghiệp
                chuẩn bị các điều kiện nhằm đáp ứng yêu cầu niêm yết
                theo quy định của pháp luật
            </p>
        </div>

        <div class="mt-5 md:mt-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 xl:gap-6 3xl:gap-10">
                <div
                    class="animate-ups__item relative border w-full rounded-[12px] overflow-hidden group 3xl:rounded-[32px]">

                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1] ">
                    </div>

                    <img src="/images/tuvan-1.jpg"
                        class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                        alt="Background Image" />

                    <div class="relative z-[2] p-[32px] 2xl:p-[40px] 3xl:p-[60px]">

                        <div class="flex flex-col gap-6 md:gap-8 xl:gap-10 w-full">
                            
                            <div
                                class="flex flex-col items-start gap-4 md:gap-5 xl:gap-6 2xl:gap-10 group-hover:text-white w-full h-full">

                                <div
                                    class="relative w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px] flex-shrink-0 z-20">
                                    <nuxt-img src="/logo/logo-row.svg" alt="" />
                                </div>

                                <div
                                    class="text-black group-hover:text-white text-left text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-BG font-semibold leading-[1.3] z-30 transition-colors duration-300">
                                    Tư vấn trình tự, thủ tục các nghiệp vụ liên quan tới chứng khoán và thị trường chứng
                                    khoán
                                </div>

                                <div class="flex flex-col items-start group">
                                    <div class="flex items-start gap-3 ">
                                        <p class="group-hover:text-white z-30  p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                                viewBox="0 0 8 9" fill="none">
                                                <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                                    fill="black" class="group-hover:fill-white" />
                                            </svg>
                                        </p>
                                        <p
                                            class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                            Tư vấn lưu ký chứng khoán: Chốt danh sách cổ đông để thực hiện quyền, Giải
                                            tỏa
                                            hạn
                                            chế
                                            chuyển nhượng …
                                        </p>
                                    </div>
                                    <div class="flex items-start gap-3 ">
                                        <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                                viewBox="0 0 8 9" fill="none">
                                                <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                                    fill="black" class="group-hover:fill-white" />
                                            </svg>
                                        </p>
                                        <p
                                            class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                            Tư vấn quản lý và quan hệ cổ đông
                                        </p>
                                    </div>
                                    <div class="flex items-start gap-3 ">
                                        <p class="group-hover:text-white z-30 p-1 mt-[2px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"
                                                viewBox="0 0 8 9" fill="none">
                                                <path d="M4 0.0742188L8 4.07422L4 8.07422L0 4.07422L4 0.0742188Z"
                                                    fill="black" class="group-hover:fill-white" />
                                            </svg>
                                        </p>
                                        <p
                                            class="font-HG text-[#3F424E] text-[16px] leading-normal group-hover:text-white transition-colors duration-300 z-30">
                                            Tư vấn quản trị Doanh nghiệp
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="btn-wrapper group/btn flex gap-5 sm:gap-3 items-start animate-ups__item w-full  z-30">
                                <div class="inline-flex">
                                    <nuxt-link to="/" class="btn active">
                                        <span class="text-[16px] xl:text-[16px]"> Liên hệ tư vấn </span>
                                        <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative z-30">
                                            <i class="w-full h-full group-hover/btn:inline-flex hidden absolute">
                                                <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16"
                                                    height="16" alt="UPS" />
                                            </i>
                                            <i class="w-full h-full group-hover/btn:hidden inline-flex absolute">
                                                <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16"
                                                    height="16" alt="UPS" />
                                            </i>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>


            </div>
        </div>

    </div>
</template>
<style scoped></style>