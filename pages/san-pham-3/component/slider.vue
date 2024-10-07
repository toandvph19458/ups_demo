<template>
    <section>
        <div class="container-product">
            <div
                class="py-6 md:py-10 xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] space-y-6 md:space-y-10 2xl:space-y-[60px]">


                <div class="animate-ups w-full mx-auto">
                    <p
                        class="animate-ups__item text-center font-BG text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-semibold leading-normal">
                        Chương trình
                        <span class="text-[#01C159]">ưu đãi</span>
                    </p>
                </div>

                <div
                    class="animate-ups w-full flex p-6 md:p-8 2xl:p-10 3xl:p-[40px_60px] flex-col gap-6 rounded-[20px] bg-gradient-to-tr from-[#00D7B0] to-[#7B57FF]">
                    <div class="animate-ups__item">
                        <p
                            class="font-HG text-[16px] md:text-[18px] xl:text-[20px] leading-normal font-semibold 3xl:text-[24px] text-[#15171E] opacity-60">
                            Dành Cho</p>
                        <p
                            class="font-BG text-[20px] md:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.25] font-semibold text-white">
                            Khách hàng thông thường trong nước</p>
                    </div>
                    <!-- chuong trinh uu dai -->
                    <!-- <div class="hidden xl:flex items-center gap-6">
                        <div
                            class="relative w-full flex xl:h-[210px] 2xl:h-[230px] flex-col justify-center items-center gap-4 flex-[1_0_0] group animate-ups__item 3xl:gap-5">

                            <img src="/images/bieuphi.jpg"
                                class="absolute inset-0 w-full h-full object-cover lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl"
                                alt="Background Image" />

                            <div
                                class="group-hover:translate-y-[90%] group-hover:rotate-[10deg] transition-all ease-linear duration-300 absolute top-0 left-0 flex flex-col items-start justify-between h-full bg-white px-2 py-4 md:py-6 2xl:px-[40px] 2xl:py-[24px] 3xl:px-[24px] 3xl:py-[40px] lg:p-[32px_8px] lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl">
                                <p
                                    class="text-black text-center text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] font-BG font-semibold leading-normal z-30 pb-2 border-b-[1px] border-[#01C159]">
                                    Miễn phí giao dịch
                                </p>
                                <p
                                    class="text-black/60 text-left text-[14px] font-BG font-medium 3xl:text-[16px] leading-normal z-30 transition-colors duration-300">
                                    Khách hàng giao dịch trên tiểu khoàn thường, không sử dụng sản phẩm vay, chỉ cần trả
                                    0.027% để thanh toán cho Sở Giao dịch Chứng khoán.
                                </p>
                            </div>

                        </div>

                        <div
                            class="relative w-full flex xl:h-[210px] 2xl:h-[230px] flex-col justify-center items-center gap-4 flex-[1_0_0] group animate-ups__item 3xl:gap-5">

                            <img src="/images/bieuphi.jpg"
                                class="absolute inset-0 w-full h-full object-cover lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl"
                                alt="Background Image" />

                            <div
                                class="group-hover:translate-y-[90%] group-hover:rotate-[10deg] transition-all ease-linear duration-300 absolute top-0 left-0 flex flex-col items-start justify-between h-full bg-white px-2 py-4 md:py-6 2xl:px-[40px] 2xl:py-[24px] 3xl:px-[24px] 3xl:py-[40px] lg:p-[32px_8px] lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl">
                                <p
                                    class="text-black text-center text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] font-BG font-semibold leading-normal z-30 pb-2 border-b-[1px] border-[#01C159]">
                                    Trải nghiệm dịch vụ cao cấp
                                </p>
                                <p
                                    class="text-black/60 text-left text-[14px] font-BG font-medium 3xl:text-[16px] leading-normal z-30 ">
                                    Tiếp cận trải nghiệm cá nhân hóa và các công cụ phân tích và dịch vụ hỗ trợ đầu tư
                                    chuyên nghiệp, hiện đại từ UPS.
                                </p>
                            </div>

                        </div>


                        <div
                            class="relative w-full flex xl:h-[210px] 2xl:h-[230px] flex-col justify-center items-center gap-4 flex-[1_0_0] group animate-ups__item 3xl:gap-5">

                            <img src="/images/bieuphi.jpg"
                                class="absolute inset-0 w-full h-full object-cover lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl"
                                alt="Background Image" />

                            <div
                                class="group-hover:translate-y-[90%] group-hover:rotate-[10deg] transition-all ease-linear duration-300 absolute top-0 left-0 flex flex-col items-start justify-between h-full bg-white px-2 py-4 md:py-6 2xl:px-[40px] 2xl:py-[24px] 3xl:px-[24px] 3xl:py-[40px] lg:p-[32px_8px] lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl">
                                <p
                                    class="text-black text-center text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] font-BG font-semibold leading-normal z-30 pb-2 border-b-[1px] border-[#01C159]">
                                    Hỗ trợ mở tài khoản nhanh chóng
                                </p>
                                <p
                                    class="text-black/60 text-left text-[14px] font-BG font-medium 3xl:text-[16px] leading-normal z-30 ">
                                    Quy trình đơn giản, hướng dẫn trực quan, chi tiết và được hỗ trợ tận tình bởi đội
                                    ngũ tư vấn viên UPS.
                                </p>
                            </div>
                        </div>


                    </div> -->

                    <!-- <div class="block xl:hidden">
                        <swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :speed="800"
                            :initial-slide="vSwiperIndex" @swiper="setVSwiperRef" @slide-change="updateVSwiperIndex"
                            :breakpoints="{
                                1023: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1200: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 10,
                                },
                                375: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                            }">
                            <swiper-slide>
                                <div class="relative h-[500px]">
                                    <div
                                        class="flex h-[210px] p-6 flex-col items-start rounded-[16px] gap-[100px] border relative bg-[url('/images/san-pham2.jpg')] bg-cover">
                                    </div>
                                    <div
                                        class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between rounded-[16px] bg-slate-50 h-[130px] md:h-[150px] w-full shadow-lg">
                                        <div>
                                            <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">
                                                Phí
                                                giao dịch
                                            </p>
                                            <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                                        </div>
                                        <p class="font-HG text-[12px] leading-normal">
                                            KH giao dịch trên tiểu khoản thường (không sử dụng sản phẩm vay) chỉ phải
                                            trả
                                            phí bằng phí trả
                                            Sở
                                        </p>
                                    </div>
                                </div>


                            </swiper-slide>
                            <swiper-slide>
                                <div class="relative h-[500px]">
                                    <div
                                        class="flex h-[210px] p-6 flex-col items-start rounded-[16px] gap-[100px] border relative bg-[url('/images/san-pham2.jpg')] bg-cover">
                                    </div>
                                    <div
                                        class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between rounded-[16px] bg-slate-50 h-[130px] md:h-[150px] w-full shadow-lg">
                                        <div>
                                            <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">
                                                Trải
                                                nghiệm dịch vụ
                                                cao cấp
                                            </p>
                                            <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                                        </div>
                                        <p class="font-HG text-[12px] leading-normal">
                                            Tiếp cận các công cụ và dịch vụ hỗ trợ đầu tư chuyên nghiệp từ UPS
                                        </p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="relative h-[500px]">
                                    <div
                                        class="flex h-[210px] p-6 flex-col items-start rounded-[16px] gap-[100px] border relative bg-[url('/images/san-pham2.jpg')] bg-cover">
                                    </div>
                                    <div
                                        class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between gap-4 rounded-[16px] bg-slate-50 h-[130px] md:h-[150px] w-full shadow-lg">
                                        <div>
                                            <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">
                                                Hỗ
                                                trợ mở tài khoản
                                                nhanh chóng
                                            </p>
                                            <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                                        </div>
                                        <p class="font-HG text-[12px] leading-normal">
                                            Thao tác mở tài khoản đơn giản, thuận tiện và được hỗ trợ tận tình từ đội
                                            ngũ
                                            UPS
                                        </p>
                                    </div>
                                </div>
                            </swiper-slide>


                        </swiper>
                    </div> -->

                    <div class="hidden xl:flex gap-6 justify-between items-stretch">
                        <div
                            class="relative overflow-hidden p-4 md:p-6 w-full flex justify-between 3xl:gap-[70px] 2xl:gap-10 md:gap-6 flex-col gap-4 lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl group animate-ups__item bg-white ">
                            <div
                                class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10">
                            </div>
                            <img src="/images/bieuphi.jpg"
                                class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                alt="Background Image" />

                            <div class="z-30">
                                <p
                                    class="text-black group-hover:text-white group:hover:text-white text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] line-clamp-2 font-BG font-semibold leading-normal z-30 pb-2">
                                    Miễn phí giao dịch
                                </p>
                                <div class="bg-[#01C159] h-[1px] w-[120px] group-hover:bg-white "></div>
                            </div>

                            <p
                                class="text-black/60 group-hover:text-white text-left text-[16px] font-BG font-medium 3xl:text-[18px] leading-normal z-30 transition-colors duration-300">
                                Khách hàng giao dịch trên tiểu khoàn thường, không sử dụng sản phẩm vay, chỉ cần trả
                                0.027% để thanh toán cho Sở Giao dịch Chứng khoán.
                            </p>
                        </div>

                        <div
                            class="relative overflow-hidden p-4 md:p-6 w-full flex justify-between 3xl:gap-[70px] 2xl:gap-10 md:gap-6 flex-col gap-4 lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl group animate-ups__item bg-white ">
                            <div
                                class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10">
                            </div>
                            <img src="/images/bieuphi.jpg"
                                class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                alt="Background Image" />

                            <div class="z-30">
                                <p
                                    class="text-black group-hover:text-white group:hover:text-white text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] line-clamp-2 font-BG font-semibold leading-normal z-30 pb-2">
                                    Trải nghiệm dịch vụ cao cấp
                                </p>
                                <div class="bg-[#01C159] h-[1px] w-[120px] group-hover:bg-white "></div>
                            </div>

                            <p
                                class="text-black/60 group-hover:text-white text-left text-[16px] font-BG font-medium 3xl:text-[18px] leading-normal z-30 transition-colors duration-300">
                                Tiếp cận trải nghiệm cá nhân hóa, các công cụ phân tích và dịch vụ hỗ trợ đầu tư chuyên nghiệp, hiện đại từ UPS.
                            </p>
                        </div>

                        <div
                            class="relative overflow-hidden p-4 md:p-6 w-full flex justify-between 3xl:gap-[70px] 2xl:gap-10 md:gap-6 flex-col gap-4 lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl group animate-ups__item bg-white ">
                            <div
                                class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10">
                            </div>
                            <img src="/images/bieuphi.jpg"
                                class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                alt="Background Image" />

                            <div class="z-30">
                                <p
                                    class="text-black group-hover:text-white group:hover:text-white text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] line-clamp-2 font-BG font-semibold leading-normal z-30 pb-2">
                                    Hỗ trợ mở tài khoản nhanh chóng
                                </p>
                                <div class="bg-[#01C159] h-[1px] w-[120px] group-hover:bg-white "></div>
                            </div>

                            <p
                                class="text-black/60 group-hover:text-white text-left text-[16px] font-BG font-medium 3xl:text-[18px] leading-normal z-30 transition-colors duration-300">
                                Quy trình đơn giản, hướng dẫn trực quan, chi tiết và đội ngũ tư vấn viên giàu kinh nghiệm và hỗ trợ nhiệt tình.
                            </p>
                        </div>


                    </div>

                    <div class="block xl:hidden">
                        <swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :speed="800"
                            :initial-slide="vSwiperIndex" @swiper="setVSwiperRef" @slide-change="updateVSwiperIndex" class="flex items-stretch"
                            :breakpoints="{
                                1080: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2.3,
                                    spaceBetween: 10,
                                },

                                375: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                            }">
                            <swiper-slide>
                                <div
                                    class="h-full relative overflow-hidden p-4 md:p-6 w-full flex items-stretch justify-between 3xl:gap-[70px] 2xl:gap-10 md:gap-6 flex-col gap-4 lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl group animate-ups__item bg-white ">
                                    <div
                                        class="absolute inset-0 bg-[#000000] opacity-60 transition-opacity duration-300 z-10">
                                    </div>
                                    <img src="/images/bieuphi.jpg"
                                        class="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
                                        alt="Background Image" />

                                    <div class="z-30">
                                        <p
                                            class="text-white group:hover:text-white text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] min-h-[56px] font-BG font-semibold leading-normal z-30 pb-2">
                                            Miễn phí giao dịch
                                        </p>
                                        <div class="bg-[#01C159] h-[1px] w-[120px] group-hover:bg-white "></div>
                                    </div>
                                    <p
                                        class="text-white text-left text-[16px] font-BG font-medium 3xl:text-[18px] min-h-[120px] leading-normal z-30 transition-colors duration-300">
                                        Khách hàng giao dịch trên tiểu khoàn thường, không sử dụng sản phẩm vay, chỉ cần
                                        trả
                                        0.027% để thanh toán cho Sở Giao dịch Chứng khoán.
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                
                                <div
                                    class="h-full relative overflow-hidden p-4 md:p-6 w-full flex items-stretch justify-between 3xl:gap-[70px] 2xl:gap-10 md:gap-6 flex-col gap-4 lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl group animate-ups__item bg-white ">
                                    <div
                                        class="absolute inset-0 bg-[#000000] opacity-60 transition-opacity duration-300 z-10">
                                    </div>
                                    <img src="/images/bieuphi.jpg"
                                        class="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
                                        alt="Background Image" />

                                    <div class="z-30">
                                        <p
                                            class="text-white group:hover:text-white text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] min-h-[56px] font-BG font-semibold leading-normal z-30 pb-2">
                                            Trải nghiệm dịch vụ cao cấp
                                        </p>
                                        <div class="bg-[#01C159] h-[1px] w-[120px] group-hover:bg-white "></div>
                                    </div>
                                    <p
                                        class="text-white text-left text-[16px] font-BG font-medium 3xl:text-[18px] min-h-[120px] leading-normal z-30 transition-colors duration-300">
                                        Tiếp cận trải nghiệm cá nhân hóa và các công cụ phân tích và dịch vụ hỗ trợ đầu tư chuyên nghiệp, hiện đại từ UPS.
                                    </p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div
                                    class="h-full relative overflow-hidden p-4 md:p-6 w-full flex items-stretch justify-between 3xl:gap-[70px] 2xl:gap-10 md:gap-6 flex-col gap-4 lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl group animate-ups__item bg-white ">
                                    <div
                                        class="absolute inset-0 bg-[#000000] opacity-60 transition-opacity duration-300 z-10">
                                    </div>
                                    <img src="/images/bieuphi.jpg"
                                        class="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
                                        alt="Background Image" />

                                    <div class="z-30">
                                        <p
                                            class="text-white group:hover:text-white text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] min-h-[56px] font-BG font-semibold leading-normal z-30 pb-2">
                                            Hỗ trợ mở tài khoản nhanh chóng
                                        </p>
                                        <div class="bg-[#01C159] h-[1px] w-[120px] group-hover:bg-white "></div>
                                    </div>

                                    <p
                                        class="text-white text-left text-[16px] font-BG font-medium 3xl:text-[18px] min-h-[120px] leading-normal z-30 transition-colors duration-300">
                                        Quy trình đơn giản, hướng dẫn trực quan, chi tiết và đội ngũ tư vấn viên giàu kinh nghiệm và hỗ trợ nhiệt tình.
                                    </p>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
    name: "silder-sanpham",
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
