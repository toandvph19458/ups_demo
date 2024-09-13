<template>
    <div class="flex p-6 flex-col items-start gap-3 bg-white 3xl:px-[225px] 3xl:py-[80px] 3xl:gap-[40px]">
        <p class="text-black font-BG text-[20px] leading-normal font-semibold 3xl:text-[60px]">Cách thức <span
                class="text-[#01C159]">tham gia</span></p>
        <div class="flex flex-col items-start gap-3 3xl:flex-row 3xl:gap-[60px] ">
            <div class="relative flex-1">
                <div class="relative z-50">
                    <p class="text-[14px] font-BG font-semibold leading-normal 3xl:text-[28px]">Đăng ký mở tài khoản</p>
                    <p class="text-[12px] font-HG leading-normal 3xl:text-[16px]">Tại UPS thông qua website chính thức
                    </p>
                </div>
                <img src="/images/01.png" alt=""
                    class="absolute top-0 right-1/2 3xl:top-[-20px] 3xl:right-20 3xl:w-[80px] 3xl:h-[74px] object-contain w-[80px] h-[37px]">
            </div>
            <div class="relative flex-1">
                <p class="text-[14px] font-BG font-semibold leading-normal 3xl:text-[28px]">Hoàn tất thủ tục
                </p>
                <p class="text-[12px] font-HG leading-normal 3xl:text-[16px]">Xác minh thông tin cá nhân theo hướng dẫn
                </p>
                <img src="/images/02.png" alt=""
                    class="absolute top-0 right-0 3xl:top-[-20px] 3xl:right-20 3xl:w-[80px] 3xl:h-[74px] object-contain h-[37px] w-[80px]">
            </div>
            <div class="relative flex-1">
                <p class="text-[14px] font-BG font-semibold leading-normal 3xl:text-[28px]">Bắt đầu giao dịch</p>
                <p class="text-[12px] font-HG leading-normal 3xl:text-[16px]">Sau khi tài khoản được kích hoạt, bạn có
                    thể bắt
                    đầu
                    giao dịch với phí 0 đồng ngay lập tức</p>
                <img src="/images/03.png" alt=""
                    class="absolute top-0 right-1/2 3xl:top-[-20px] 3xl:right-20 3xl:w-[80px] 3xl:h-[74px] object-contain h-[37px] w-[80px]">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";



export default defineComponent({
    name: "tham-gia",
    components: {
    },

});
</script>
