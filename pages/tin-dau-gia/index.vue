<template>
    <section class="">
        <!-- banner -->
        <div class=" w-full relative bg-[url('/background/bg-05.png')] bg-no-repeat md:bg-none">
            <img src="/background/bg-05.png" class="w-full h-full absolute top-0 hidden md:block" />
            <div
                class="w-full flex items-start justify-between flex-col sm:p-6 md:flex-row-reverse md:px-[60px] lg:px-[120px] xl:px-[150px] 2xl:px-[170px] z-50 relative">
                <div class=" relative  sm:w-[110px] sm:h-[64px] md:w-[154px] md:h-[90px] xl:w-[248px] xl:h-[156px]">
                    <nuxt-img format="webp" loading="lazy" alt="UPS" src="/logo/logo-cms.png"
                        class="absolute w-full h-full object-contain" />
                </div>
                <div class="container w-full flex flex-col items-start gap-3">
                    <p
                        class="font-HG text-md text-white uppercase text-[12px] md:text-[12px] 2xl:text-[14px] leading-normal">
                        Khách hàng
                        doanh
                        nghiệp</p>
                    <h2 class="md:text-[32px] xl:text-[50px] text-[#02E56A] font-bold sm:text-[24px] font-BG">
                        Tin
                        <span class="text-white">đấu giá</span>
                    </h2>

                    <div class="flex items-center">
                        <nuxt-link to="/"
                            class="text-[12px] 2xl:text-[14px] text-white font-semibold font-HG leading-normal">
                            Trang chủ
                        </nuxt-link>

                        <i class="">
                            <ChevronRight :size="16" color="#fff" />
                        </i>

                        <nuxt-link to="/"
                            class="text-[12px] 2xl:text-[14px] text-white font-semibold font-HG leading-normal">
                            Khách hàng doanh nghiệp
                        </nuxt-link>
                        <i class="">
                            <ChevronRight :size="16" color="#fff" />
                        </i>

                        <nuxt-link to="/"
                            class="text-[12px] 2xl:text-[14px] text-white font-semibold font-HG leading-normal">
                            Tin đấu giá
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- grid card -->
        <div class="container">
            <div
                class="p-6 flex flex-col gap-6 md:px-[60px] md:py-[46px] lg:px-[120px] lg:py-[46px] xl:px-[100px]  2xl:px-[120px] 2xl:py-[50px] 3xl:px-[225px] 3xl:py-[70px]">
                <!-- TOGGLE -->
                <div class="flex items-center xl:hidden md:hidden">
                    <Drawer direction="left">
                        <DrawerTrigger as-child>
                            <div class="flex items-center gap-3">
                                <div class="inline-flex w-5 h-5 relative">
                                    <nuxt-img format="webp" loading="lazy" src="/icons/filter-icon.svg" alt="UPS"
                                        class="absolute w-full h-full object-contain" />
                                </div>

                                <p class=" text-[14px] text-black underline font-bold font-HG leading-normal">Bộ lọc</p>
                            </div>
                        </DrawerTrigger>
                        <DrawerContent class="z-[101]">
                            <div class="w-full h-screen px-6 py-5">
                                <DrawerClose as-child>
                                    <div class="flex items-center">
                                        <div class="inline-flex w-6 h-6 relative">
                                            <nuxt-img format="webp" loading="lazy" src="/icons/close-icon.svg" alt="UPS"
                                                class="absolute w-full h-full object-contain" />
                                        </div>

                                        <p class="ml-3 text-lg text-black font-bold font-BG">Bộ lọc</p>
                                    </div>
                                </DrawerClose>

                                <div class="my-5">
                                    <div class="flex items-center relative">
                                        <nuxt-input
                                            class="w-[300px] h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#15171E] placeholder:text-base"
                                            placeholder="Tìm kiếm" name="content" />
                                        <div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
                                    </div>

                                    <div class="flex gap-4 mt-5">
                                        <div class="flex-1">
                                            <div class="flex items-center relative">
                                                <nuxt-input
                                                    class="w-full h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#15171E] placeholder:text-base"
                                                    placeholder="Lọc theo ngày" name="date" type="date" />
                                                <div
                                                    class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex items-center relative">
                                                <nuxt-input
                                                    class="w-full h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base"
                                                    placeholder="Lọc theo ngày" name="date" type="date" />
                                                <div
                                                    class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>



                <div class="flex flex-col w-full md:flex-row-reverse md:gap-6 xl:gap-10 3xl:gap-[60px]">
                    <!-- card -->
                    <div
                        class="grid grid-cols-1 gap-6  md:grid-cols-2 md:gap-x-[12px] md:gap-y-[24px] lg:grid-cols-3 lg:gap-y-[16px] xl:gap-y-[32px] xl:gap-x-[8px] 2xl:gap-y-[40px] 2xl:gap-x-0 3xl:gap-y-[50px]">
                        <!-- card -->
                        <div class="w-full xl:p-3 2xl:p-[15px] 3xl:p-5">
                            <div class="flex flex-col relative gap-4 2xl:gap-[18px] 3xl:gap-[24px]">
                                <div
                                    class="relative w-full h-[186px] md:h-[158px] 3xl:h-[238px] rounded-[14px] overflow-hidden ">
                                    <nuxt-img format="webp" loading="lazy" width="350" height="290" :alt="`anh-test`"
                                        :src="`/images/tin-tuc-03.png`"
                                        class="w-full h-full object-cover transition-all duration-300" />
                                </div>
                                <h4
                                    class="text-sm text-black font-bold md:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal">
                                    Thông báo chào bán cạnh tranh cổ phẩn của công ty cổ phần kinh tế - kỹ thuật
                                </h4>
                                <div
                                    class="flex w-[50px] h-[50px] flex-col justify-center items-center rounded-md bg-black/20 backdrop-blur-[1.33px] absolute left-2 top-2">
                                    <p class="font-HG text-white text-[16px] leading-normal">08</p>
                                    <p class="font-HG text-white text-[12px] leading-normal">07.2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full xl:p-3 2xl:p-[15px] 3xl:p-5">
                            <div class="flex flex-col relative gap-4 2xl:gap-[18px] 3xl:gap-[24px]">
                                <div
                                    class="relative w-full h-[186px] md:h-[158px] 3xl:h-[238px] rounded-[14px] overflow-hidden ">
                                    <nuxt-img format="webp" loading="lazy" width="350" height="290" :alt="`anh-test`"
                                        :src="`/images/tin-tuc-03.png`"
                                        class="w-full h-full object-cover transition-all duration-300" />
                                </div>
                                <h4
                                    class="text-sm text-black font-bold md:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal">
                                    Thông báo chào bán cạnh tranh cổ phẩn của công ty cổ phần kinh tế - kỹ thuật
                                </h4>
                                <div
                                    class="flex w-[50px] h-[50px] flex-col justify-center items-center rounded-md bg-black/20 backdrop-blur-[1.33px] absolute left-2 top-2">
                                    <p class="font-HG text-white text-[16px] leading-normal">08</p>
                                    <p class="font-HG text-white text-[12px] leading-normal">07.2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full xl:p-3 2xl:p-[15px] 3xl:p-5">
                            <div class="flex flex-col relative gap-4 2xl:gap-[18px] 3xl:gap-[24px]">
                                <div
                                    class="relative w-full h-[186px] md:h-[158px] 3xl:h-[238px] rounded-[14px] overflow-hidden ">
                                    <nuxt-img format="webp" loading="lazy" width="350" height="290" :alt="`anh-test`"
                                        :src="`/images/tin-tuc-03.png`"
                                        class="w-full h-full object-cover transition-all duration-300" />
                                </div>
                                <h4
                                    class="text-sm text-black font-bold md:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal">
                                    Thông báo chào bán cạnh tranh cổ phẩn của công ty cổ phần kinh tế - kỹ thuật
                                </h4>
                                <div
                                    class="flex w-[50px] h-[50px] flex-col justify-center items-center rounded-md bg-black/20 backdrop-blur-[1.33px] absolute left-2 top-2">
                                    <p class="font-HG text-white text-[16px] leading-normal">08</p>
                                    <p class="font-HG text-white text-[12px] leading-normal">07.2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full xl:p-3 2xl:p-[15px] 3xl:p-5">
                            <div class="flex flex-col relative gap-4 2xl:gap-[18px] 3xl:gap-[24px]">
                                <div
                                    class="relative w-full h-[186px] md:h-[158px] 3xl:h-[238px] rounded-[14px] overflow-hidden ">
                                    <nuxt-img format="webp" loading="lazy" width="350" height="290" :alt="`anh-test`"
                                        :src="`/images/tin-tuc-03.png`"
                                        class="w-full h-full object-cover transition-all duration-300" />
                                </div>
                                <h4
                                    class="text-sm text-black font-bold md:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal">
                                    Thông báo chào bán cạnh tranh cổ phẩn của công ty cổ phần kinh tế - kỹ thuật
                                </h4>
                                <div
                                    class="flex w-[50px] h-[50px] flex-col justify-center items-center rounded-md bg-black/20 backdrop-blur-[1.33px] absolute left-2 top-2">
                                    <p class="font-HG text-white text-[16px] leading-normal">08</p>
                                    <p class="font-HG text-white text-[12px] leading-normal">07.2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full xl:p-3 2xl:p-[15px] 3xl:p-5">
                            <div class="flex flex-col relative gap-4 2xl:gap-[18px] 3xl:gap-[24px]">
                                <div
                                    class="relative w-full h-[186px] md:h-[158px] 3xl:h-[238px] rounded-[14px] overflow-hidden ">
                                    <nuxt-img format="webp" loading="lazy" width="350" height="290" :alt="`anh-test`"
                                        :src="`/images/tin-tuc-03.png`"
                                        class="w-full h-full object-cover transition-all duration-300" />
                                </div>
                                <h4
                                    class="text-sm text-black font-bold md:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal">
                                    Thông báo chào bán cạnh tranh cổ phẩn của công ty cổ phần kinh tế - kỹ thuật
                                </h4>
                                <div
                                    class="flex w-[50px] h-[50px] flex-col justify-center items-center rounded-md bg-black/20 backdrop-blur-[1.33px] absolute left-2 top-2">
                                    <p class="font-HG text-white text-[16px] leading-normal">08</p>
                                    <p class="font-HG text-white text-[12px] leading-normal">07.2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full xl:p-3 2xl:p-[15px] 3xl:p-5">
                            <div class="flex flex-col relative gap-4 2xl:gap-[18px] 3xl:gap-[24px]">
                                <div
                                    class="relative w-full h-[186px] md:h-[158px] 3xl:h-[238px] rounded-[14px] overflow-hidden ">
                                    <nuxt-img format="webp" loading="lazy" width="350" height="290" :alt="`anh-test`"
                                        :src="`/images/tin-tuc-03.png`"
                                        class="w-full h-full object-cover transition-all duration-300" />
                                </div>
                                <h4
                                    class="text-sm text-black font-bold md:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal">
                                    Thông báo chào bán cạnh tranh cổ phẩn của công ty cổ phần kinh tế - kỹ thuật
                                </h4>
                                <div
                                    class="flex w-[50px] h-[50px] flex-col justify-center items-center rounded-md bg-black/20 backdrop-blur-[1.33px] absolute left-2 top-2">
                                    <p class="font-HG text-white text-[16px] leading-normal">08</p>
                                    <p class="font-HG text-white text-[12px] leading-normal">07.2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full xl:p-3 2xl:p-[15px] 3xl:p-5">
                            <div class="flex flex-col relative gap-4 2xl:gap-[18px] 3xl:gap-[24px]">
                                <div
                                    class="relative w-full h-[186px] md:h-[158px] 3xl:h-[238px] rounded-[14px] overflow-hidden ">
                                    <nuxt-img format="webp" loading="lazy" width="350" height="290" :alt="`anh-test`"
                                        :src="`/images/tin-tuc-03.png`"
                                        class="w-full h-full object-cover transition-all duration-300" />
                                </div>
                                <h4
                                    class="text-sm text-black font-bold md:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal">
                                    Thông báo chào bán cạnh tranh cổ phẩn của công ty cổ phần kinh tế - kỹ thuật
                                </h4>
                                <div
                                    class="flex w-[50px] h-[50px] flex-col justify-center items-center rounded-md bg-black/20 backdrop-blur-[1.33px] absolute left-2 top-2">
                                    <p class="font-HG text-white text-[16px] leading-normal">08</p>
                                    <p class="font-HG text-white text-[12px] leading-normal">07.2024</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <!-- nav -->
                    <div
                        class="flex px-5 flex-col gap-[30px] items-start p-6 md:p-0 md:gap-5 md:min-w-[200px] lg:min-w-[236px] 2xl:min-w-[280px] 2xl:gap-[30px] 3xl:min-w-[350px] 3xl:gap-[40px]">
                        <div class="hidden md:flex w-full md:gap-[9px] flex-col">
                            <div class="flex items-center relative">

                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 25"
                                        fill="none">
                                        <path
                                            d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                                            stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M22 22.5L20 20.5" stroke="#A3A3A3" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </i>
                                <nuxt-input
                                    class="w-full md:w-[200px]  pr-6 text-black  focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base md:placeholder:text-[12px] border-none placeholder:font-HG 3xl:placeholder:text-[16px]"
                                    placeholder="Tìm kiếm" name="search" />
                                <div
                                    class="absolute left-0 right-0 bottom-0 w-full h-[2px] bg-[#E7E9EF] backdrop-blur-lg">
                                </div>
                            </div>
                            <div class="flex gap-2 flex-col lg:flex-row">
                                <div class="">
                                    <div class="flex items-center relative">
                                        <nuxt-input
                                            class="w-full md:w-[200px] lg:w-full text-black focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-black placeholder:text-base md:placeholder:text-[12px] 3xl:placeholder:text-[16px] border-none placeholder:font-bold placeholder:font-HG"
                                            placeholder="Tất cả chuyên mục" name="date" type="year" />
                                        <div
                                            class="absolute left-0 right-0 bottom-0 w-full h-[2px] bg-[#E7E9EF] backdrop-blur-lg">
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="flex items-center relative">
                                        <nuxt-input
                                            class="w-full md:w-[200px] lg:w-full text-black focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base md:placeholder:text-[12px] 3xl:placeholder:text-[16px] border-none placeholder:font-HG"
                                            placeholder="Lọc thời gian" name="date" type="year" />
                                        <div
                                            class="absolute left-0 right-0 bottom-0 w-full h-[2px] bg-[#E7E9EF] backdrop-blur-lg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="p-[11px] xl:p-[12px] 3xl:p-[16px] md:p-2 gap-4 md:gap-[10px] 3xl:gap-[16px] xl:gap-4 flex flex-col items-start bg-[#e8ecf7]  border-[#C1C7DD] rounded-lg w-full md:w-[140px] xl:w-[180px] border 2xl:w-[175px] 3xl:w-[220px]">

                            <div class="w-full">
                                <p class="text-black font-HG text-[14px] 3xl:text-[16px] font-bold leading-normal">Tôi
                                    muốn
                                    đọc nhiều
                                    hơn
                                </p>
                                <p
                                    class="text-[#535662] font-HG text-[12px] 3xl:text-[14px] font-medium leading-normal">
                                    Đăng ký nhận
                                    thêm
                                    các hưỡng dẫn giao dịch tuyệt vời từ UPS qua email của bạn</p>
                            </div>
                            <div
                                class="flex p-[8px] md:p-[6px] item-center rounded-md bg-[#d8def1] backdrop-blur-[10.67px] w-full md:rounded-sm">
                                <input type="text" placeholder="abc@gmail.com"
                                    class="w-full outline-none bg-transparent md:text-[8px] xl:text-[14px]">
                            </div>
                            <div class="w-full">
                                <nuxt-link to="/"
                                    class="w-full flex items-center justify-between rounded-[40px] bg-[#15171E] px-4 py-3 md:py-[6px] md:px-[16px] xl:py-[12px] xl:px-[18px]">
                                    <span
                                        class="text-[#02E56A] font-HG text-[12px] md:text-[8px] font-bold leading-normal xl:hidden block">
                                        Đăng kí
                                    </span>
                                    <span
                                        class="text-[#02E56A] font-HG text-[12px] md:text-[8px] xl:text-[12px] font-bold leading-normal hidden xl:block">
                                        Mở tài khoản ngay
                                    </span>
                                    <div
                                        class="inline-flex gap-1 w-4 h-4 md:w-2 md:h-2 xl:w-3 xl:h-3 overflow-hidden relative">
                                        <i class="w-full h-full  inline-flex absolute">
                                            <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16"
                                                alt="UPS" />
                                        </i>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>

                        <div class="flex flex-col items-start gap-4 md:gap-3 3xl:gap-4 w-full">
                            <p class="text-black text-[14px] 3xl:text-[16px] font-HG font-bold leading-normal">Chủ đề
                                liên quan</p>
                            <div class="flex flex-col gap-[9px] items-start p-1 w-full">
                                <div class="flex items-center gap-[9px] w-full">
                                    <i class="">
                                        <nuxt-img src="/icons/Vector 292.svg" loading="lazy" width="14" height="14"
                                            alt="UPS" />
                                    </i>
                                    <p
                                        class="text-black font-HG text-[14px] 3xl:text-[16px] font-semibold leading-normal">
                                        Tư vấn tài
                                        chính Doanh nghiệp</p>
                                </div>
                                <div class="flex items-center gap-[9px]">
                                    <i class="">
                                        <nuxt-img src="/icons/Vector 292.svg" loading="lazy" width="14" height="14"
                                            alt="UPS" />
                                    </i>
                                    <p
                                        class="text-black font-HG text-[14px] 3xl:text-[16px] font-semibold leading-normal">
                                        Tin đấu giá
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChevronRight } from "lucide-vue-next";
import NuxtInput from "@/components/ui/input/index.vue";
import { cn } from "~/lib/utils";
import { config } from "@/lib/config";
import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
} from "@/components/ui/pagination";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

export default defineComponent({
    name: "tin-dau-gia",
    components: {
        ChevronRight,
        NuxtInput,
        Pagination,
        PaginationEllipsis,
        PaginationFirst,
        PaginationLast,
        PaginationList,
        PaginationListItem,
        PaginationNext,
        PaginationPrev,
        Drawer,
        DrawerClose,
        DrawerContent,
        DrawerDescription,
        DrawerFooter,
        DrawerHeader,
        DrawerTitle,
        DrawerTrigger,
    },

});
</script>

<style></style>
