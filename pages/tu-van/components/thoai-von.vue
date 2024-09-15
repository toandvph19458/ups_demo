<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "thoai-von",
    components: {
    },

});
</script>
<template>
    <div class="flex 3xl:items-center 3xl:gap-[40px] 2xl:gap-[30px] xl:gap-6 layout">
        <div
            class="relative flex-1 bg-[url('/background/Subtract.png')] bg-center bg-contain bg-no-repeat 3xl:h-[500px] 3xl:w-[780px]  2xl:w-[585px]">
            <div
                class="absolute top-0 right-0 2xl:right-[-15px] xl:right-[-10px] xl:top-10 2xl:top-0 p-2 3xl:w-[320px] 3xl:h-[100px] 2xl:w-[280px] 2xl:h-[150px] xl:w-[250px] xl:h-[150px] ">
                <p class="font-BG 3xl:text-[20px] 2xl:text-[24px] xl:text-[20px] font-semibold ">Tư vấn thoái phần vốn
                    Nhà nước
                    tại Công ty cổ phần, Công ty TNHH</p>
            </div>
        </div>

        <div class="flex flex-col justify-center 3xl:gap-6 xl:gap-[14px] 3xl:items-start flex-1 2xl:gap-4 ">
            <p class="text-[rgba(83, 86, 98, 0.80)] font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">UPS là đơn
                vị đã tạo
                được thương hiệu về việc thoái vốn tại các Tập đoàn, Tổng Công ty và đặc biệt là các Ủy ban dân
                tỉnh tại khu vực phía Bắc. UPS đã tư vấn thành công cho các Hợp đồng thoái vốn Nhà nước theo
                đúng định hướng của Nhà nước, chỉ đạo của Chủ sở hữu. Nội dung tư vấn thoái phần vốn Nhà nước
                tại doanh nghiệp gồm các bước:</p>
            <div
                class="flex flex-col 3xl:p-[60px] 2xl:p-6 2xl:gap-6 xl:p-5 items-start justify-center bg-gradient-to-r from-cyan-400 via-green-300 to-lime-300 xl:rounded-[40px]">
                <div class="flex flex-col item-center gap-3">
                    <p class="flex-1 font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Xây dựng lộ trình tổng thể
                        quá
                        trình về thoái vốn</p>
                    <p class="flex-1 font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Xây dựng phương án thoái
                        vốn trình
                        cơ quan có thẩm quyền phê duyệt</p>
                    <p class="flex-1 font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Hỗ trợ giải trình về phương
                        án
                        thoái vốn với cơ quan có thẩm quyền phê duyệt (nếu có)</p>
                    <p class="flex-1 font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Tư vấn xây dựng hồ sơ thoái
                        vốn
                        trình Ủy ban chứng khoán Nhà nước</p>
                    <p class="flex-1 font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Tư vấn thực hiện bán đấu
                        giá cổ
                        phần theo phương án đã được cơ quan có thẩm quyền phê duyệt</p>
                    <p class="flex-1 font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Thực hiện thủ tục và các
                        công việc
                        liên quan tới việc tổ chức bán đấu giá cổ phần</p>
                </div>
                <div class="btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item">
                    <div class="inline-flex">
                        <nuxt-link to="/" class="btn active group ">
                            <span class="text-[10px] sm:text-[12px] xl:text-[14px] "> Đăng kí ngay </span>
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