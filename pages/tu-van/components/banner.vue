<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "banner",
    components: {
    },

});
</script>

<!-- không nên sửa component này, sửa là lỗi -->
<template>
    <div class="flex flex-wrap md:flex-nowrap gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 w-full items-stretch">
        <div
            class="basis-full md:basis-1/2 lg:basis-[52.3%] 2xl:basis-[53.54%] 3xl:basis-7/12 h-full relative z-5 bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a] rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] 2xl:rounded-[32px] 3xl:rounded-[40px] p-[32px_24px] md:p-[40px_24px] lg:p-[80px_32px] xl:p-[80px_40px] 2xl:p-[100px_40px] 3xl:p-[120px_60px]">

            <div class="relative pt-[110%] md:pt-[83%] lg:pt-[62%] xl:pt-[68%] 2xl:pt-[58%] 3xl:pt-[49%]">
                <div class="absolute inset-0 flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-[80px]">
                    <div class="flex flex-col items-start gap-2 lg:gap-3 xl:gap-6">
                        <span
                            class="font-HG text-[14px] xl:text-[16px] lg:text-[14px] font-semibold leading-[20.848px] text-[#15171e] tracking-[3.2px] relative text-left uppercase whitespace-nowrap z-7">
                            Khách hàng doanh nghiệp
                        </span>

                        <div
                            class="font-BG text-[24px] md:text-[24px] lg:text-[32px] xl:text-[40px] 3xl:text-[60px] font-bold leading-[1.2]">
                            <span class="text-white">
                                Tư vấn<br />
                            </span>
                            <span class="text-[#15171e]">
                                tài chính doanh nghiệp
                            </span>
                        </div>
                        <div class="w-1/2 h-[1px] bg-white">
                        </div>
                    </div>

                    <div
                        class="3xl:w-[80%] font-HG text-[16px] md:text-[14px] lg:text-[16px] font-medium text-[#15171E] text-left md:leading-[1.3] lg:leading-normal md:tracking-tight 3xl:pb-6">
                        UPS là đơn vị đã tạo được thương hiệu về việc thoái vốn tại các Tập đoàn, Tổng Công ty và đặc
                        biệt là các Ủy ban dân tỉnh tại khu vực phía Bắc. UPS đã tư vấn thành công cho các Hợp đồng
                        thoái vốn Nhà nước theo đúng định hướng của Nhà nước, chỉ đạo của Chủ sở hữu.
                    </div>
                </div>
            </div>

        </div>

        <div class="flex-1 w-fit h-fit">
            <div class="relative w-full pt-[98.9%]">
                <div class="absolute top-0 left-0 w-full h-full grid grid-rows-12 grid-flow-col">
                    <div class="row-start-1 row-span-7">
                        <div
                            class="relative w-full h-full bg-[url('/background/bg_tu_van.png')] bg-cover bg-center z-[1]">
                        </div>
                    </div>
                </div>

                <div class="absolute inset-0 z-[1]">
                    <div class="grid grid-rows-12 grid-flow-col gap-x-0 h-full">
                        <div class="row-start-8 row-span-5 col-span-1 rounded-[40px]">
                            <button
                                class="relative h-full w-full bg-gradient-to-r from-[#00e7ff] to-[#4293f7] border-none cursor-pointer">

                                <!-- <div
                                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full flex-col gap-3 items-center lg:gap-1 justify-center h-full">
                                    


                                    <span
                                        class=" font-BG text-[40px] lg:text-[50px] xl:text-[70px] 3xl:text-[100px] font-semibold text-white">
                                        09
                                    </span>
                                    <span
                                        class="font-BG text-[14px] lg:text-[20px] xl:text-[24px]  font-semibold text-white">
                                        Dịch vụ tư vấn & hỗ trợ
                                    </span>
                                </div> -->

                                <div class="absolute inset-0">
                                    <div class="flex flex-col w-full h-full items-center justify-between p-[24px_32px] md:p-[26px] lg:p-[34px] xl:p-[43px_28px] 2xl:p-[50px_8px] 3xl:p-[50px_43px]">
                                        <span
                                            class=" font-BG text-[40px] lg:text-[50px] xl:text-[70px] 3xl:text-[100px] leading-[1] font-semibold text-white">
                                            09
                                        </span>
                                        <span
                                            class="font-BG text-[14px] lg:text-[20px] xl:text-[24px] 3xl:text-[32px] font-semibold text-white">
                                            Dịch vụ tư vấn & hỗ trợ
                                        </span>
                                    </div>
                                </div>

                            </button>
                        </div>

                        <div class="row-start-6 row-span-7 col-span-1">
                            <div class="relative w-full h-full">
                                <nuxt-img src="/images/fb033543675203376e50a2bdad1d55d47b7d0bb3.png" alt=""
                                    class="absolute bottom-0 left-0 right-0 w-full h-[95%] z-[1] rounded-tl-[60px]" />
                            </div>
                        </div>
                    </div>
                </div>

                <nuxt-img src="/background/Subtract.svg" alt=""
                    class="animate-ups__item absolute w-full h-full inset-0 z-[12]" />
            </div>
        </div>
    </div>
</template>
