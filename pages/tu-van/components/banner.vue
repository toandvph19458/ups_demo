<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "banner",
    components: {
    },

});
</script>
<template>
    <div
        class="animate-ups w-full grid md:grid-cols-2 grid-cols-1 2xl:flex  items-center justify-center  gap-3 lg:min-h-[410px] 3xl:gap-6 3xl:h-[646px] 2xl:h-[529px]">
        <div
            class="animate-ups__item flex flex-col items-start relative z-5 bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a]  p-6 rounded-[12px] gap-6 md:px-6 md:py-10 xl:px-[40px] xl:py-[80px] xl:gap-20 md:gap-10 2xl:px-10 2xl:py-[100px] 2xl:gap-20 h-full 3xl:py-[120px] 3xl:px-[60px] 3xl:gap-[80px]">

            <div class="flex flex-col gap-2 items-start relative z-6 2xl:gap-6">
                <span
                    class="font-HG text-[12px] xl:text-[16px] lg:text-[14px] font-semibold leading-[20.848px] text-[#15171e] tracking-[3.2px] relative text-left uppercase whitespace-nowrap z-7">
                    Khách hàng doanh nghiệp
                </span>
                <div class="">
                    <span
                        class="font-BG text-[20px] 3xl:text-[60px] xl:text-[40px] lg:text-[32px] md:text-[24px] font-bold 3xl:leading-[60px] text-white relative text-left">
                        Tư vấn<br />
                    </span>
                    <span
                        class="font-BG text-[20px] 3xl:text-[60px] xl:text-[40px] lg:text-[32px] md:text-[24px] font-bold 3xl:leading-[60px] text-[#15171e] relative text-left">
                        tài chính doanh nghiệp
                    </span>
                </div>
            </div>
            <span
                class="font-HG text-[14px] xl:text-[16px] lg:text-[14px] font-normal 2xl:leading-[20.848px] text-[#15171E] text-left leading-[20px]">
                UPS là đơn vị đã tạo được thương hiệu về việc thoái vốn tại các Tập đoàn, Tổng Công ty và đặc
                biệt là các Ủy ban dân tỉnh tại khu vực phía Bắc. UPS đã tư vấn thành công cho các Hợp đồng
                thoái vốn Nhà nước theo đúng định hướng của Nhà nước, chỉ đạo của Chủ sở hữu.
            </span>
        </div>

        <div class="w-full h-full relative">
            <div class="w-full relative 2xl:h-full h-[320px] md:h-[340px] lg:h-full 2xl:w-[531px] 3xl:w-[653px]">
                <nuxt-img src="/images/tesst.png" alt=""
                    class="animate-ups__item absolute z-12  object-cover rounded-[12px] w-full top-0 shrink-0 h-[187px] md:h-[184px] lg:min-h-[230px] xl:min-h-[267px] 2xl:h-[289px] 3xl:w-[653px] 3xl:h-[357px]" />

                <nuxt-img src="/images/fb033543675203376e50a2bdad1d55d47b7d0bb3.png" alt=""
                    class="animate-ups__item absolute z-12 w-[175px] h-[180px] md:h-[200px] md:w-[165px] lg:w-[205px] lg:h-[239px] xl:w-[240px] xl:h-[282px] 2xl:w-[240px] 2xl:h-[301px] 3xl:h-[370px] 3xl:w-[303px] rounded-[20px] bottom-0 right-0  " />
                <button
                    class="animate-ups__item w-[185px] h-[120px] md:w-[175px] md:h-[140px] lg:w-1/2 lg:h-[160px] xl:h-[200px] 2xl:h-[210px] 3xl:h-[245px] bg-gradient-to-r from-[#00e7ff] to-[#4293f7] 2xl:rounded-[16px] border-none absolute bottom-0 left-0  cursor-pointer px-6  rounded-2xl  p-[35px] 3xl:w-[326px]">

                    <div class="flex w-full flex-col gap-3 items-center lg:gap-1 justify-center h-full">
                        <span class=" font-BG text-[40px] lg:text-[50px] xl:text-[70px] font-semibold  text-white">
                            09
                        </span>
                        <span class="font-BG text-[14px] lg:text-[20px] xl:text-[24px]  font-semibold text-white  ">
                            Dịch vụ tư vấn & hỗ trợ
                        </span>
                    </div>
                </button>
            </div>
        </div>

    </div>
</template>


<!-- 
<template>
    <div
        class="grid grid-cols-12 gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 w-full lg:min-h-[410px] 2xl:h-[529px] 3xl:h-[646px] ">
        <div
            class="col-span-7 flex flex-col items-start relative z-5 bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a]  p-6 rounded-[12px] gap-6 md:px-6 md:py-10 xl:px-[40px] xl:py-[80px] xl:gap-20 md:gap-10 2xl:px-10 2xl:py-[100px] 2xl:gap-20 h-full 3xl:py-[120px] 3xl:px-[60px] 3xl:gap-[80px]">

            <div class="flex flex-col gap-2 items-start relative z-6 2xl:gap-6">
                <span
                    class="font-HG text-[12px] xl:text-[16px] lg:text-[14px] font-semibold leading-[20.848px] text-[#15171e] tracking-[3.2px] relative text-left uppercase whitespace-nowrap z-7">
                    Khách hàng doanh nghiệp
                </span>
                <div class="">
                    <span
                        class="font-BG text-[20px] 3xl:text-[60px] xl:text-[40px] lg:text-[32px] md:text-[24px] font-bold 3xl:leading-[60px] text-white relative text-left">
                        Tư vấn<br />
                    </span>
                    <span
                        class="font-BG text-[20px] 3xl:text-[60px] xl:text-[40px] lg:text-[32px] md:text-[24px] font-bold 3xl:leading-[60px] text-[#15171e] relative text-left">
                        tài chính doanh nghiệp
                    </span>
                </div>
            </div>
            <span
                class="font-HG text-[14px] xl:text-[16px] lg:text-[14px] font-normal 2xl:leading-[20.848px] text-[#15171E] text-left leading-[20px]">
                UPS là đơn vị đã tạo được thương hiệu về việc thoái vốn tại các Tập đoàn, Tổng Công ty và đặc
                biệt là các Ủy ban dân tỉnh tại khu vực phía Bắc. UPS đã tư vấn thành công cho các Hợp đồng
                thoái vốn Nhà nước theo đúng định hướng của Nhà nước, chỉ đạo của Chủ sở hữu.
            </span>
        </div> -->

        <!-- <div
            class="col-span-5 flex flex-col gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 w-full md:w-[316px] lg:w-[424px] xl:w-[456px] 2xl:w-[531px] 3xl:w-[653px] h-[320px] md:h-[340px] lg:h-full">
            <div
                class="relative w-full md:w-[316px] lg:w-[424px] xl:w-[456px] 2xl:w-[531px] 3xl:w-[653px] h-[320px] md:h-[340px] rounded-[40px] bg-[url('/images/card-1-bieu-phi.png')] bg-cover bg-center z-[1]">
                <div class="absolute bottom-0 right-0 w-[calc(50%+6px)] lg:w-[calc(50%+12px)] h-[33%] bg-white rounded-tl-[24px] lg:rounded-tl-[64px]">
                    <div class="relative w-full h-full">
                        <div
                            class="absolute bottom-0 left-0 size-6 lg:size-12 -translate-x-full rounded-br-[40px] shadow-[4px_4px_0_4px_#ffffff] lg:shadow-[8px_8px_0_8px_#ffffff] z-[-1]">
                        </div>

                        <div
                            class="absolute top-0 right-0 size-6 lg:size-12 -translate-y-full rounded-br-[40px] shadow-[8px_8px_0_8px_#ffffff] z-[-1]">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 flex gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                <button
                    class="basis-1/2 bg-gradient-to-r from-[#00e7ff] to-[#4293f7] 2xl:rounded-[40px] border-none cursor-pointer px-6 rounded-2xl  p-[35px]">

                    <div class="flex w-full flex-col gap-3 items-center lg:gap-1 justify-center h-full">
                        <span class=" font-BG text-[40px] lg:text-[50px] xl:text-[70px] font-semibold  text-white">
                            09
                        </span>
                        <span class="font-BG text-[14px] lg:text-[20px] xl:text-[24px]  font-semibold text-white">
                            Dịch vụ tư vấn & hỗ trợ
                        </span>
                    </div>
                </button>

                <div class=" basis-1/2">
                    <div class="relative w-full h-full">
                        <nuxt-img src="/images/fb033543675203376e50a2bdad1d55d47b7d0bb3.png" alt=""
                            class="absolute bottom-0 left-0 w-full lg:h-[153%] xl:h-[145%] 2xl:h-[145%] 3xl:h-[140%] rounded-[40px] z-[1]" />
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div class="col-span-5">
            <div class="relative w-full h-full">
                <div class="grid grid-rows-12 grid-flow-col gap-6 h-full">
                    <div class="row-start-1 row-span-7">
                        <div
                            class="relative w-full h-full bg-[url('/images/card-1-bieu-phi.png')] bg-cover bg-center z-[1] rounded-[40px]">
                            <div
                                class="absolute bottom-0 right-0 w-1/2 h-[calc(23.57%+24px)] bg-white rounded-tl-[64px]">
                                <div class="relative w-full h-full">
                                    <div
                                        class="absolute bottom-0 left-0 size-12 -translate-x-full rounded-br-[40px] shadow-[8px_8px_0_8px_#ffffff] z-[-1]">
                                    </div>

                                    <div
                                        class="absolute top-0 right-0 size-12 -translate-y-full rounded-br-[40px] shadow-[8px_8px_0_8px_#ffffff] z-[-1]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute inset-0 z-[1]">
                    <div class="grid grid-rows-12 grid-flow-col gap-6 h-full">
                        <div class="row-start-8 row-span-5 col-span-1 rounded-[40px]">
                            <button
                                class="relative h-full w-full bg-gradient-to-r from-[#00e7ff] to-[#4293f7] 2xl:rounded-[40px] border-none cursor-pointer px-6 rounded-2xl p-[35px]">

                                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full flex-col gap-3 items-center lg:gap-1 justify-center h-full">
                                    <span
                                        class=" font-BG text-[40px] lg:text-[50px] xl:text-[70px] font-semibold text-white">
                                        09
                                    </span>
                                    <span
                                        class="font-BG text-[14px] lg:text-[20px] xl:text-[24px]  font-semibold text-white">
                                        Dịch vụ tư vấn & hỗ trợ
                                    </span>
                                </div>
                                
                            </button>
                        </div>
                        
                        <div class="row-start-6 row-span-7 col-span-1 rounded-[40px] bg-yellow-500">
                            <div class="relative w-full h-full">
                                <nuxt-img src="/images/fb033543675203376e50a2bdad1d55d47b7d0bb3.png" alt=""
                                    class="absolute inset-0 w-full h-full rounded-[40px] z-[1]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- </div>
</template> -->