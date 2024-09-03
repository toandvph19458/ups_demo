<template>
    <div
        class="flex flex-col items-center w-full py-[100px] xl:py-[60px] lg:py-[40px] xxl:py-[80px] xxl:px-[120px] xl:px-[100px] lg:px-[60px] px-[225px] sm:p-6 xxl:gap-[160px] xl:gap-[100px] lg:gap-[60px] gap-[120px] bg-[linear-gradient(270deg,_#00D7B0_17.99%,_rgba(0,_148,_255,_0.50)_96.69%)] ">

        <div class="md:flex items-start xxl:gap-[40px] gap-[24px] self-stretch  hidden">
            <div class="flex flex-col items-start xxl:gap-[32px] gap-[24px] flex-1">
                <img src="/images/san-pham1.jpg" alt="" class="rounded-[24px]">
                <div>

                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[28px] xl:text-[20px] lg:text-[18px] text-[24px] font-semibold leading-none pb-2">
                        Lãi suất ưu đãi chỉ từ 6.8%
                    </p>
                    <p
                        class="text-black/60 font-hanken xxl:text-[16px] lg:text-[12px] text-[14px] font-medium leading-none">
                        Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-start xxl:gap-[32px] gap-[24px] flex-1">
                <div class="pb-[40px]">
                    <p
                        class="text-[#FFF] text-center font-bricolage xxl:text-[52px] xl:text-[40px] lg:text-[32px] text-[45px] font-semibold leading-none">
                        Tính năng nổi bật
                    </p>
                    <p class="text-white/80 text-center font-bricolage text-[32px] font-semibold leading-none">
                        Margin T+3
                    </p>

                </div>
                <img src="/images/san-pham2.jpg" alt="" class="rounded-[24px]">
                <div>

                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[28px] xl:text-[20px] lg:text-[18px] text-[24px] font-semibold leading-none pb-2">
                        Lãi suất ưu đãi chỉ từ 6.8%
                    </p>
                    <p
                        class="text-black/60 font-hanken xxl:text-[16px] lg:text-[12px] text-[14px] font-medium leading-none">
                        Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-start xxl:gap-[32px] gap-[24px] flex-1">
                <img src="/images/san-pham3.jpg" alt="" class="rounded-[24px]">
                <div>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[28px] xl:text-[20px] lg:text-[18px] text-[24px] font-semibold leading-none pb-2">
                        Lãi suất ưu đãi chỉ từ 6.8%
                    </p>
                    <p
                        class="text-black/60 font-hanken xxl:text-[16px] lg:text-[12px] text-[14px] font-medium leading-none">
                        Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                    </p>
                </div>
            </div>
        </div>

        <div class="md:hidden flex flex-col items-center">
            <div class="pb-[40px]">
                <p class="text-[#FFF] text-center font-bricolage  text-[20px] font-semibold leading-none">
                    Tính năng nổi bật
                </p>
                <p class="text-white/80 text-center font-bricolage text-[18px] font-semibold leading-none">
                    Margin T+3
                </p>

            </div>
            <div class="w-full min-h-min">
                <swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :initial-slide="vSwiperIndex"
                    :speed="800" @slide-change="updateVSwiperIndex" :slides-per-view="1">
                    <swiper-slide>
                        <div class="flex flex-col items-start p-2 w-full gap-5">
                            <div class="w-full ">
                                <img src="/images/san-pham1.jpg" alt="" class="rounded-[24px] w-full">
                            </div>
                            <div>
                                <p class="text-[#15171E] font-bricolage text-[14px] font-semibold leading-none pb-2">
                                    Lãi suất ưu đãi chỉ từ 6.8%
                                </p>
                                <p class="text-black/60 font-hanken text-[12px]  font-medium leading-none">
                                    Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="relative flex flex-col items-center  w-full">
            <p
                class="text-[#15171E] text-center font-bricolage xxl:text-[60px] xl:text-[40px] md:text-[32px] sm:text-[20px] text-[45px] font-semibold leading-none">
                Cách đăng ký
                <span
                    class="text-[#F51666] font-bricolage xxl:text-[60px] xl:text-[40px] md:text-[32px] text-[45px] sm:text-[20px] font-semibold leading-none">Margin
                    T+3</span>
            </p>
            <div
                class="w-full flex justify-center items-center px-[275px] lg:px-[158px] xxl:px-[255px] sm:p-7 lg:h-[630px]">
                <img src="/images/image@2x.png"
                    class="sm:w-[327px] sm:h-[245px] xxl:h-[515px] xxl:w-[687px] object-cover md:w-[589px] md:h-[442px] xl:w-[687px] xl:h-[515px]" />
            </div>
            <div class="h-[80px] sm:h-[300px] md:h-[120px]"></div>
            <div
                class="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 w-full xxl:p-[40px] xl:p-6 lg:p-6 p-10 sm:p-6 items-start xxl:gap-6 xl:gap-5 lg:gap-5 gap-6 sm:gap-4 rounded-[40px] border border-[#F51666] bg-white/60 backdrop-blur-[50px] absolute sm:top-1/3 lg:top-1/2 md:top-2/3">
                <div>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                        01.
                    </p>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                        Đăng nhập tài khoản
                    </p>
                    <p
                        class="text-[#00000099] font-hanken xxl:text-[14px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-medium leading-normal">
                        Tại UP Securities hoặc chọn mở tài khoản mới
                    </p>
                </div>
                <div>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                        02.
                    </p>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                        Truy cập vào mục
                        Giao dịch Margin
                    </p>
                    <p
                        class="text-[#00000099] font-hanken xxl:text-[14px] xl:text-[12px] lg:text-[12px] text-[16px] sm:text-[12px] font-medium leading-normal">
                        Và chọn sản phẩm Margin T+3.
                    </p>

                </div>
                <div>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                        03.
                    </p>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                        Điền thông tin cần thiết và xác nhận đăng ký
                    </p>
                    <p
                        class="text-[#00000099] font-hanken xxl:text-[14px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-medium leading-normal">
                        Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                    </p>

                </div>
                <div>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                        04.
                    </p>
                    <p
                        class="text-[#15171E] font-bricolage xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                        Chờ thông báo từ
                        hệ thống
                    </p>
                    <p
                        class="text-[#00000099] font-hanken xxl:text-[14px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-medium leading-normal">
                        Sau đó bạn có thể bắt đầu sử dụng sản phẩm Margin T+3 để thực hiện giao dịch
                    </p>

                </div>
            </div>


        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
    name: "feature",
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

<style></style>