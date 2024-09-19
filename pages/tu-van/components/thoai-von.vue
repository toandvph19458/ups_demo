<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "thoai-von",
    components: {
    },

});
</script>
<template>
    <div class="grid items-center 3xl:gap-[40px] 2xl:gap-[30px] md:grid-cols-2 gap-3 md:gap-4 xl:gap-5">
        <div class="relative  w-full h-full xl:h-[400px]">
            <nuxt-img src="/images/Frame 1597881199.png"
                class="w-full h-full object-cover overflow-hidden rounded-2xl" />
        </div>
        <div class="flex 3xl:flex-col 3xl:gap-10  h-full">
            <div
                class="flex flex-col items-start justify-center bg-[#15171E] gap-4 rounded-[16px] p-4 md:p-6 lg:p-8 h-full xl:p-10 xl:gap-4 ">
                <div>
                    <img src="/logo/logo-row.png" alt="" class="w-5 h-5  2xl:w-6 2xl:h-6 xl:w-8 xl:h-8 lg:w-6 lg:h-6 ">
                </div>
                <div>
                    <p
                        class="font-BG text-[#02E56A] text-[16px] xl:text-[24px] font-semibold leading-normal lg:text-[20px]">
                        Tư vấn
                        thoái phần vốn Nhà
                        nước tại Công ty cổ phần, Công ty TNHH</p>
                </div>
                <p class=" font-HG 3xl:text-[16px] text-[14px] leading-normal text-[#FFFFFF] ">
                    UPS là đơn vị đã tạo được thương hiệu về việc thoái vốn tại các Tập đoàn, Tổng Công ty và đặc
                    biệt là các Ủy ban dân tỉnh tại khu vực phía Bắc. UPS đã tư vấn thành công cho các Hợp đồng
                    thoái vốn Nhà nước theo đúng định hướng của Nhà nước, chỉ đạo của Chủ sở hữu. Nội dung tư vấn
                    thoái phần vốn Nhà nước tại doanh nghiệp gồm các bước:</p>
                <p class="font-HG text-[14px] text-[#FFF] leading-normal font-bold underline">Xem thêm</p>
            </div>
            <div
                class="3xl:px-[40px] 3xl:py-[60px] flex flex-col items-start justify-center bg-[linear-gradient(94deg,rgba(237,237,244,0.9)_-10.9%,rgba(237,237,244,0)_95.88%)] rounded-[40px] 3xl:gap-[40px] hidden">
                <div class="flex flex-col gap-[6px]">
                    <div class="flex items-center gap-2">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                                <path d="M4 0.5L8 4.5L4 8.5L0 4.5L4 0.5Z" fill="#02E56A" />
                            </svg></p>
                        <p class="font-HG 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#3F424E] text-left">
                            Xây dựng lộ trình tổng thể quá trình về thoái vốn</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                                <path d="M4 0.5L8 4.5L4 8.5L0 4.5L4 0.5Z" fill="#02E56A" />
                            </svg></p>
                        <p class="font-HG 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#3F424E] text-left">
                            Xây dựng phương án thoái vốn trình cơ quan có thẩm quyền phê duyệt</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                                <path d="M4 0.5L8 4.5L4 8.5L0 4.5L4 0.5Z" fill="#02E56A" />
                            </svg></p>
                        <p class="font-HG 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#3F424E] text-left">
                            Hỗ trợ giải trình về phương án thoái vốn với cơ quan có thẩm quyền phê duyệt (nếu có)</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                                <path d="M4 0.5L8 4.5L4 8.5L0 4.5L4 0.5Z" fill="#02E56A" />
                            </svg></p>
                        <p class="font-HG 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#3F424E] text-left">
                            Hỗ trợ giải trình về phương án thoái vốn với cơ quan có thẩm quyền phê duyệt (nếu có)</p>
                    </div>
                </div>

                <div class="btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item ">
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