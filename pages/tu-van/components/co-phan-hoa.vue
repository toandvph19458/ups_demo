<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
    name: "co-phan-hoa",
    components: {
    },
    setup(props, ctx) {
        let vSwiperRef: any = null;
        const vSwiperIndex = ref<number>(0);

        const setVSwiperRef = (swiper: any) => {
            vSwiperRef = swiper;
        };

        const updateVSwiperIndex = () => {
            console.log(vSwiperRef?.activeIndex);

            vSwiperIndex.value = vSwiperRef?.activeIndex || 0;
        };

        const prevVSwiperSlide = () => vSwiperRef?.slidePrev();
        const nextVSwiperSlide = () => vSwiperRef?.slideNext();

        return {
            cn,
            vSwiperRef,
            vSwiperIndex,
            SwiperAutoplay,
            SwiperNavigation,
            setVSwiperRef,
            prevVSwiperSlide,
            nextVSwiperSlide,
            updateVSwiperIndex,
        };
    },
});
</script>
<template>
    <div class="animate-ups flex flex-col items-center 2xl:gap-10 xl:gap-[26px]  gap-5 w-full h-full">
        <div class="flex flex-col 3xl:gap-3 items-center xl:w-2/3 ">
            <p
                class="animate-ups__item text-[#1D1E22] text-center font-BG 3xl:text-[40px] 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[16px] leading-normal font-semibold">
                Cổ phần
                hóa và phát hành chứng khoán</p>
            <p class="animate-ups__item text-[rgba(83,86,98,0.80)] text-center font-HG 2xl:text-[16px] text-[14px] leading-normal">
                Với mạng
                lưới quan hệ rộng lớn, UPS có khả năng tìm kiếm nhà đầu tư tiềm năng cho doanh nghiệp, giúp tổ
                chức bán cổ phần ra bên ngoài qua phương thức đấu giá. Đây là yếu tố rất quan trọng giúp cho quá
                trình cổ phần hoá doanh nghiệp thành công và là lợi thế cạnh tranh của UPS</p>
        </div>
        <div class="flex items-center 3xl:gap-6 3xl:h-[470px] h-full ">
            <div class="flex 3xl:gap-6 items-center lg:h-full lg:flex-row-reverse gap-5 flex-col 3xl:h-full h-full">
                <div class="w-full min-h-min md:hidden">
                    <swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :speed="800">
                        <swiper-slide>
                            <div
                                class="flex p-5 flex-col justify-center items-start gap-2 w-full hover:bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a] bg-[#EDEDF4] rounded-[16px]">

                                <nuxt-img src="/icons/wallet-money.svg" class="w-[24px] h-[24px]" />

                                <p class="font-BG text-[14px] font-semibold leading-normal">Tư vấn cổ phần hoá và tư vấn
                                    chuyển đổi loại hình doanh nghiệp1</p>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div
                    class="md:grid md:grid-cols-2 gap-3 hidden lg:grid-cols-2 lg:min-h-[400px] xl:min-h-[420px] w-full ">
                    <div
                        class="animate-ups__item flex p-4 xl:gap-[14px] xl:p-8 3xl:p-10 flex-col justify-center items-start gap-2 hover:bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a] bg-[#EDEDF4] rounded-[16px] min-h-[120px] 2xl:min-h-[230px]">

                        <nuxt-img src="/icons/wallet-money.svg"
                            class="w-[24px] h-[24px] xl:w-8 xl:h-8 3xl:w-10 3xl:h-10" />

                        <p
                            class="font-BG text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-semibold leading-normal">
                            Tư
                            vấn cổ phần hoá và
                            tư vấn
                            chuyển đổi loại hình doanh nghiệp</p>
                    </div>
                    <div
                        class="animate-ups__item flex p-4 xl:gap-[14px] xl:p-8 3xl:p-10 flex-col justify-center items-start gap-2 hover:bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a] bg-[#EDEDF4] rounded-[16px] flex-grow flex-shrink-0 basis-0 min-h-[120px] 2xl:min-h-[230px]">

                        <nuxt-img src="/icons/wallet-money.svg"
                            class="w-[24px] h-[24px] xl:w-8 xl:h-8 3xl:w-10 3xl:h-10" />

                        <p
                            class="font-BG text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-semibold leading-normal">
                            Tư
                            vấn tổ chức bán
                            đấu giá cổ phần
                        </p>
                    </div>
                    <div
                        class="animate-ups__item flex p-4 xl:gap-[14px] xl:p-8 3xl:p-10 flex-col justify-center items-start gap-2 hover:bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a] bg-[#EDEDF4] rounded-[16px] flex-grow flex-shrink-0 basis-0 min-h-[120px] 2xl:min-h-[230px]">

                        <nuxt-img src="/icons/wallet-money.svg"
                            class="w-[24px] h-[24px] xl:w-8 xl:h-8 3xl:w-10 3xl:h-10" />

                        <p
                            class="font-BG text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-semibold leading-normal">
                            Tư
                            vấn phát hành
                            chứng khoán ra công
                            chúng</p>
                    </div>
                    <div
                        class="animate-ups__item flex p-4 xl:gap-[14px] xl:p-8 3xl:p-10 flex-col justify-center items-start gap-2 hover:bg-gradient-to-r from-[#00e7ff] to-[#a4fb5a] bg-[#EDEDF4] rounded-[16px] flex-grow flex-shrink-0 basis-0 min-h-[120px] 2xl:min-h-[230px]">

                        <nuxt-img src="/icons/wallet-money.svg"
                            class="w-[24px] h-[24px] xl:w-8 xl:h-8 3xl:w-10 3xl:h-10" />

                        <p
                            class="font-BG text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-semibold leading-normal">
                            Tư
                            vấn phát hành
                            chứng khoán riêng
                            lẻ</p>
                    </div>
                </div>
                <div
                    class="animate-ups__item flex 3xl:px-[60px] 2xl:p-10 3xl:py-[40px] flex-col xl:rounded-[40px]  bg-[linear-gradient(94deg,rgba(237,237,244,0.9)_-10.9%,rgba(237,237,244,0)_95.88%)] w-full p-5 rounded-[12px] gap-10 md:p-6 xl:p-10 xl:gap-10 2xl:gap-10 h-full ">

                    <div class="flex flex-col gap-3 item-start self-stretch  w-full 2xl:gap-6">
                        <p class="font-BG text-[16px] 2xl:text-[28px] 3xl:text-[32px] leading-normal font-semibold">Tư
                            vấn cổ phần hoá
                            và tư vấn chuyển
                            đổi loại hình
                            doanh nghiệp</p>
                        <div class="flex flex-col items-start w-full">
                            <div class="flex items-center gap-2">
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.5L8 4.5L4 8.5L0 4.5L4 0.5Z" fill="#02E56A" />
                                    </svg></p>
                                <p class="font-HG 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#3F424E] text-left">
                                    Xây
                                    dựng
                                    lộ trình tổng
                                    thể quá
                                    trình cổ
                                    phần hóa</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.5L8 4.5L4 8.5L0 4.5L4 0.5Z" fill="#02E56A" />
                                    </svg></p>
                                <p class="font-HG 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#3F424E] text-left">
                                    Phối
                                    hợp
                                    cùng Doanh
                                    nghiệp lập
                                    phương án
                                    sắp xếp lao động khi cổ phần hóa</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9"
                                        fill="none">
                                        <path d="M4 0.5L8 4.5L4 8.5L0 4.5L4 0.5Z" fill="#02E56A" />
                                    </svg></p>
                                <p class="font-HG 2xl:text-[16px] xl:text-[14px] text-[14px] text-[#3F424E] text-left">
                                    Phối
                                    hợp
                                    với Doanh
                                    nghiệp xây dựng
                                    phương
                                    án cổ phần hóa, Tư vấn hình thức cổ phần hóa, Phương án vốn điều lệ và cơ cấu vốn
                                    điều lệ theo yêu cầu hoạt động sản xuất kinh doanh của Công ty cổ phần và quy định
                                    của Pháp luật</p>

                            </div>


                        </div>

                        <!-- <p class="font-BG text-[14px] font-semibold underline">Xem thêm</p> -->
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
    </div>
</template>