<template>
    <section>
        <div class="flex p-6 flex-col items-start gap-6 bg-white 3xl:px-[225px] 3xl:py-[100px] 3xl:gap-[60px]">
            <div class="w-full mx-auto">
                <p class="text-center font-BG text-[20px] font-semibold leading-normal 3xl:text-[60px]">Chương trình
                    <span class="text-[#01C159]">ưu đãi</span>
                </p>
            </div>
            <div
                class="w-full flex p-6 flex-col gap-3 rounded-[20px] bg-gradient-to-tr from-[#00D7B0] to-[#7B57FF] h-[500px] 3xl:px-[60px] 3xl:py-[40px]">
                <p class="font-HG text-[14px] leading-normal font-semibold 3xl:text-[24px]">dành cho</p>
                <p class="font-BG text-[18px] leading-normal font-semibold 3xl:text-[40px] 3xl:text-white">Khách hàng
                    mới</p>
                <div class="2xl:flex items-center gap-6 hidden ">
                    <div
                        class="flex h-[210px] p-6 flex-col items-start rounded-[16px] border relative flex-1 bg-[url('/images/san-pham2.jpg')] bg-cover">
                        <div
                            class="flex p-4 flex-col items-start gap-4 rounded-[16px] bg-slate-50 absolute inset-0 transition-transform duration-300 hover:rotate-12 hover:translate-x-2 hover:translate-y-[180px] justify-between">
                            <div>
                                <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">Phí giao
                                    dịch</p>
                                <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                            </div>
                            <p class="font-HG text-[12px] 3xl:text-[16px] leading-normal">
                                KH giao dịch trên tiểu khoản thường (không sử dụng sp vay) chỉ phải trả phí bằng phí trả
                                Sở
                            </p>
                        </div>
                    </div>
                    <div
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
                                Tiếp cận các công cụ và dịch vụ hỗ trợ đầu tư chuyên nghiệp từ UPS
                            </p>
                        </div>
                    </div>
                    <div
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
                                Thao tác mở tài khoản đơn giản, thuận tiện và được hỗ trợ tận tình từ đội ngũ UPS
                            </p>
                        </div>
                    </div>
                </div>
                <div class="block 3xl:hidden">
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
                                    class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between gap-4 rounded-[16px] bg-slate-50 h-[210px] w-full shadow-lg">
                                    <div>
                                        <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">Phí
                                            giao dịch
                                        </p>
                                        <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                                    </div>
                                    <p class="font-HG text-[12px] leading-normal">
                                        Tất cả các giao dịch chứng khoán của bạn trên tiểu khoản 1 sẽ được miễn phí hoàn
                                        toàn trong suốt thời gian chương trình. Phí miễn không bao gồm các khoản phải
                                        thu theo quy định của Ủy Ban Chứng khoán và Pháp luật hiện hành.
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
                                    class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between gap-4 rounded-[16px] bg-slate-50 h-[210px] w-full shadow-lg">
                                    <div>
                                        <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">Trải
                                            nghiệm dịch vụ
                                            cao cấp
                                        </p>
                                        <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                                    </div>
                                    <p class="font-HG text-[12px] leading-normal">
                                        Tiếp cận các công cụ và dịch vụ hỗ trợ đầu tư chuyên nghiệp đa nền tảng từ UPS
                                        mà không tốn thêm chi phí.
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
                                    class="absolute left-0 top-[30%] flex p-4 flex-col items-start justify-between gap-4 rounded-[16px] bg-slate-50 h-[210px] w-full shadow-lg">
                                    <div>
                                        <p class="font-BG text-[14px] 3xl:text-[24px] font-semibold leading-normal">Hỗ
                                            trợ mở tài khoản
                                            nhanh chóng
                                        </p>
                                        <p class="w-[120px] h-[1px] bg-[#01C159]"></p>
                                    </div>
                                    <p class="font-HG text-[12px] leading-normal">
                                        Thao tác mở tài khoản đơn giản, thuận tiện và được hỗ trợ tận tình từ đội ngũ
                                        UPS.
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
