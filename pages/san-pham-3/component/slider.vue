<template>
    <section>
        <div class="flex p-6 flex-col items-start gap-6 bg-white 3xl:px-[225px] 3xl:py-[100px] 3xl:gap-[60px]">
            <div class="animate-ups w-full mx-auto">
                <p class="animate-ups__item text-center font-BG text-[20px] font-semibold leading-normal 3xl:text-[60px]">Chương trình
                    <span class="text-[#01C159]">ưu đãi</span>
                </p>
            </div>
            <div
                class="animate-ups w-full flex p-6 flex-col gap-6 rounded-[20px] bg-gradient-to-tr from-[#00D7B0] to-[#7B57FF] h-[390px] md:h-[450px] lg:h-[430px] xl:h-[655px] 3xl:px-[60px] 3xl:py-[40px]">
                <div class="animate-ups__item">
                    <p
                        class="font-HG text-sm md:text-[18px] xl:text-[20px] leading-normal font-semibold 3xl:text-[24px]">
                        Dành Cho</p>
                    <p
                        class="font-BG text-[18px] md:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.25] font-semibold text-black 3xl:text-white">
                        Khách hàng
                        mới</p>
                </div>
                <!-- chuong trinh uu dai -->
                <div class="hidden xl:flex items-center gap-6">
                    <div
                        class="relative w-full flex xl:h-[210px] 3xl:h-[230px] flex-col justify-center items-center gap-3 flex-[1_0_0] group animate-ups__item 3xl:gap-5">

                        <!-- Background Image -->
                        <img src="/images/bieuphi.jpg"
                            class="absolute inset-0 w-full h-full object-cover lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl"
                            alt="Background Image" />

                        <!-- Text -->
                        <div
                            class="group-hover:translate-y-[90%] group-hover:rotate-[10deg] transition-all ease-linear duration-300 absolute top-0 left-0 flex flex-col items-start justify-between h-full bg-white px-2 py-4 md:py-6 2xl:px-[40px] 2xl:py-[24px] 3xl:px-[24px] 3xl:py-[40px] lg:p-[32px_8px] lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl">
                            <p
                                class="text-black text-center text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] font-BG font-semibold leading-normal z-30 pb-2 border-b-[1px] border-[#01C159]">
                                Phí giao
                                dịch
                            </p>
                            <p
                                class="text-black/60 text-left text-[14px] font-BG font-medium 3xl:text-[16px] leading-normal z-30 ">
                                Phí giao dịch: chỉ 0.027% (là mức phí UPS thu để thanh toán cho Sở Giao dịch Chứng
                                khoán)
                            </p>
                        </div>

                    </div>

                    <div
                        class="relative w-full flex xl:h-[210px] 3xl:h-[230px] flex-col justify-center items-center gap-3 flex-[1_0_0] group animate-ups__item 3xl:gap-5">

                        <!-- Background Image -->
                        <img src="/images/bieuphi.jpg"
                            class="absolute inset-0 w-full h-full object-cover lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl"
                            alt="Background Image" />

                        <!-- Text -->
                        <div
                            class="group-hover:translate-y-[90%] group-hover:rotate-[10deg] transition-all ease-linear duration-300 absolute top-0 left-0 flex flex-col items-start justify-between h-full bg-white px-2 py-4 md:py-6 2xl:px-[40px] 2xl:py-[24px] 3xl:px-[24px] 3xl:py-[40px] lg:p-[32px_8px] lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl">
                            <p
                                class="text-black text-center text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] font-BG font-semibold leading-normal z-30 pb-2 border-b-[1px] border-[#01C159]">
                                Trải nghiệm dịch vụ cao cấp
                            </p>
                            <p
                                class="text-black/60 text-left text-[14px] font-BG font-medium 3xl:text-[16px] leading-normal z-30 ">
                                Tiếp cận các công cụ và dịch vụ hỗ trợ đầu tư chuyên nghiệp đa nền tảng từ UPS mà không
                                tốn thêm chi phí.
                            </p>
                        </div>

                    </div>


                    <div
                        class="relative w-full flex xl:h-[210px] 3xl:h-[230px] flex-col justify-center items-center gap-3 flex-[1_0_0] group animate-ups__item 3xl:gap-5">

                        <!-- Background Image -->
                        <img src="/images/bieuphi.jpg"
                            class="absolute inset-0 w-full h-full object-cover lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl"
                            alt="Background Image" />

                        <!-- Text -->
                        <div
                            class="group-hover:translate-y-[90%] group-hover:rotate-[10deg] transition-all ease-linear duration-300 absolute top-0 left-0 flex flex-col items-start justify-between h-full bg-white px-2 py-4 md:py-6 2xl:px-[40px] 2xl:py-[24px] 3xl:px-[24px] 3xl:py-[40px] lg:p-[32px_8px] lg:rounded-[24px] rounded-[12px] 2xl:rounded-xl">
                            <p
                                class="text-black text-center text-base lg:text-[18px] 3xl:text-[24px] 2xl:text-[20px] font-BG font-semibold leading-normal z-30 pb-2 border-b-[1px] border-[#01C159]">
                                Hỗ trợ mở tài khoản nhanh chóng
                            </p>
                            <p
                                class="text-black/60 text-left text-[14px] font-BG font-medium 3xl:text-[16px] leading-normal z-30 ">
                                Thao tác mở tài khoản đơn giản, thuận tiện và được hỗ trợ tận tình từ đội ngũ UPS.
                            </p>
                        </div>

                    </div>



                    <!-- <div
                        class="flex h-[210px] p-6 flex-col items-start rounded-[16px] border relative flex-1 bg-[url('/images/san-pham2.jpg')] bg-cover">
                        <div
                            class="flex p-4 flex-col items-start gap-4 rounded-[16px] bg-slate-50 absolute inset-0 transition-transform duration-300 hover:rotate-12 hover:translate-x-2 hover:translate-y-[180px] justify-between">
                            <div>
                                <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">Phí giao
                                    dịch</p>
                                <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                            </div>
                            <p class="font-HG text-[12px] 3xl:text-[16px] leading-normal">
                                Phí giao dịch: chỉ 0.027% (là mức phí UPS thu để thanh toán cho Sở Giao dịch Chứng khoán)
                            </p>
                        </div>
                    </div> -->
                    <!-- <div
                        class="flex h-[210px] p-6 flex-col items-start rounded-[16px] border relative flex-1 bg-[url('/images/san-pham2.jpg')] bg-cover">
                        <div
                            class="flex p-4 flex-col items-start gap-4 rounded-[16px] bg-slate-50 absolute inset-0 transition-transform duration-300 hover:rotate-12 hover:translate-x-2 hover:translate-y-[180px] justify-between">
                            <div>
                                <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">Trải nghiệm
                                    dịch vụ cao cấp
                                </p>
                                <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                            </div>
                            <p class="font-HG text-[12px] 3xl:text-[16px] leading-normal">
                                Tiếp cận các công cụ và dịch vụ hỗ trợ đầu tư chuyên nghiệp từ UPS.
                            </p>
                        </div>
                    </div> -->
                    <!-- <div
                        class="flex h-[210px] p-6 flex-col items-start rounded-[16px] border relative flex-1 bg-[url('/images/san-pham2.jpg')] bg-cover">
                        <div
                            class="flex p-4 flex-col items-start gap-4 rounded-[16px] bg-slate-50 absolute inset-0 transition-transform duration-300 hover:rotate-12 hover:translate-x-2 hover:translate-y-[180px] justify-between">
                            <div>
                                <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">Hỗ trợ mở
                                    tài khoản nhanh
                                    chóng</p>
                                <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                            </div>
                            <p class="font-HG text-[12px] 3xl:text-[16px] leading-normal">
                                Thao tác mở tài khoản đơn giản, thuận tiện và được hỗ trợ tận tình từ đội ngũ UPS.
                            </p>
                        </div>
                    </div> -->
                </div>

                <div class="block xl:hidden">
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
                                    class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between gap-4 rounded-[16px] bg-slate-50 h-[130px] md:h-[150px] w-full shadow-lg">
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
                                    class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between gap-4 rounded-[16px] bg-slate-50 h-[130px] md:h-[150px] w-full shadow-lg">
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
