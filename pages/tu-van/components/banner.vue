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
        class="w-full 3xl:min-h-[747px]  grid lg:grid-cols-2  items-center justify-center layout xl:py-[60px] lg:py-[40px] ">
        <div
            class="flex 3xl:w-full 3xl:h-[747px] 2xl:h-[560px] xl:h-[500px] flex-col 3xl:gap-[100px] 2xl:gap-[80px] lg:gap-[32px] lg:py-[60px] lg:px-[32px]  items-start relative z-5  3xl:py-[120px] 3xl:px-[80px] 2xl:py-[100px] 2xl:px-[60px] rounded-[40px] z-4 bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a] xl:py-[80px] xl:px-[40px] xl:gap-10 ">

            <div class="flex flex-col xl:gap-6 lg:gap-3  items-start  relative z-6">
                <span
                    class="font-HG 3xl:text-[16px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] font-semibold leading-[20.848px] text-[#15171e] tracking-[3.2px] relative text-left uppercase whitespace-nowrap z-7">
                    Khách hàng doanh nghiệp
                </span>
                <div class="">
                    <span
                        class="font-BG 3xl:text-[50px] 2xl:text-[40px] xl:text-[36px] lg:text-[32px] font-bold leading-[60px] text-white relative text-left">
                        Tư vấn<br />
                    </span>
                    <span
                        class="font-BG 3xl:text-[50px] 2xl:text-[40px] xl:text-[36px] lg:text-[32px] font-bold leading-[60px] text-[#15171e] relative text-left">
                        tài chính doanh nghiệp
                    </span>
                </div>
            </div>
            <span
                class="font-HG 2xl:text-[16px] lg:text-[14px] font-medium leading-[20.848px] text-[rgba(0,0,0,0.6)] text-left ">
                UPS là đơn vị đã tạo được thương hiệu về việc thoái vốn tại các Tập đoàn, Tổng Công ty và đặc
                biệt là các Ủy ban dân tỉnh tại khu vực phía Bắc. UPS đã tư vấn thành công cho các Hợp đồng
                thoái vốn Nhà nước theo đúng định hướng của Nhà nước, chỉ đạo của Chủ sở hữu.
            </span>
        </div>

        <div class="w-full relative h-full col-span-1 ">
            <div class="3xl:w-[653px] 3xl:h-[425px] 2xl:w-[490px] 2xl:h-[318px] xl:w-[441px] xl:h-[286px] lg:w-[370px] lg:h-[239px] bg-center bg-cover bg-no-repeat absolute top-0 left-5 z-13"
                style="background-image:url(/images/426d593f-8f9b-436a-950c-cb7849f484bc.png); "></div>
            <div class="3xl:w-[303px] 3xl:h-[444px] 2xl:w-[227px] 2xl:h-[310px] xl:w-[204px] xl:h-[300px] lg:w-[170px] lg:h-[241px] bg-center bg-cover bg-no-repeat rounded-[40px] absolute 3xl:top-[303px] 3xl:right-32 2xl:bottom-0 2xl:right-[90px] z-12 xl:right-20 lg:bottom-0 lg:right-16"
                style="background-image:url(/images/fb033543675203376e50a2bdad1d55d47b7d0bb3.png);"></div>
            <button
                class="3xl:w-[326px] 3xl:h-[298px] 2xl:w-[245px] 2xl:h-[200px] xl:w-[220px] xl:h-[200px] lg:w-[184px] lg:h-[160px] bg-gradient-to-r from-[#00e7ff] to-[#4293f7] rounded-[40px] border-none absolute bottom-0 left-5 overflow-hidden cursor-pointer">
                <div class="flex w-full flex-col gap-6 lg:gap-2 items-center relative z-1 justify-center ">
                    <span
                        class=" font-BG 3xl:text-[100px] 2xl:text-[80px] xl:text-[60px] lg:text-[50px] font-semibold leading-[66px] text-white relative text-center whitespace-nowrap z-2">
                        09
                    </span>
                    <span
                        class="font-BG 3xl:text-[32px] 2xl:text-[24px] xl:text-[20px] lg:text-[16px] font-semibold leading-[38.4px] text-white relative text-center z-3 w-2/3">
                        Dịch vụ tư vấn & hỗ trợ
                    </span>
                </div>
            </button>
        </div>

    </div>
</template>