<template>
    <section class="animate-ups">
        <div
            class="flex flex-col items-center w-full xxl:py-[100px] lg:py-[60px] md:py-[40px] xl:py-[80px] xl:px-[120px] lg:px-[100px] md:px-[60px] xxl:px-[225px] sm:p-6 xxl:gap-[160px] xl:gap-[100px] lg:gap-[60px] gap-[120px] bg-[linear-gradient(0deg,_rgba(255,_243,_93,_0)_36.67%,_#F51666_105.87%)] ">

            <div class="md:flex items-start xxl:gap-[40px] gap-[24px] self-stretch  hidden">
                <div class="flex flex-col items-start xxl:gap-[32px] gap-[24px] flex-1">
                    <img src="/images/san-pham1.jpg" alt="" class="rounded-[24px] animate-ups__item">
                    <div>

                        <p
                            class="text-[#15171E] font-BG xxl:text-[28px] xl:text-[20px] lg:text-[18px] text-[24px] font-semibold leading-none pb-2 animate-ups__item">
                            Lãi suất ưu đãi chỉ từ 6.8%
                        </p>
                        <p
                            class="text-black/60 font-HG xxl:text-[16px] lg:text-[12px] text-[14px] font-medium leading-none animate-ups__item">
                            Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start xxl:gap-[32px] gap-[24px] flex-1 ">
                    <div class="pb-[40px]">
                        <p
                            class="text-[#FFF] text-center font-BG xxl:text-[52px] xl:text-[40px] lg:text-[32px] text-[45px] font-semibold leading-none animate-ups__item">
                            Tính năng nổi bật
                        </p>
                        <p
                            class="text-white/80 text-center font-BG text-[32px] font-semibold leading-none animate-ups__item">
                            Margin T+3
                        </p>

                    </div>
                    <img src="/images/san-pham2.jpg" alt="" class="rounded-[24px] animate-ups__item">
                    <div>

                        <p
                            class="text-[#15171E] font-BG xxl:text-[28px] xl:text-[20px] lg:text-[18px] text-[24px] font-semibold leading-none pb-2 animate-ups__item">
                            Lãi suất ưu đãi chỉ từ 6.8%
                        </p>
                        <p
                            class="text-black/60 font-HG xxl:text-[16px] lg:text-[12px] text-[14px] font-medium leading-none animate-ups__item">
                            Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start xxl:gap-[32px] gap-[24px] flex-1 ">
                    <img src="/images/san-pham3.jpg" alt="" class="rounded-[24px] animate-ups__item">
                    <div>
                        <p
                            class="text-[#15171E] font-BG xxl:text-[28px] xl:text-[20px] lg:text-[18px] text-[24px] font-semibold leading-none pb-2 animate-ups__item">
                            Lãi suất ưu đãi chỉ từ 6.8%
                        </p>
                        <p
                            class="text-black/60 font-HG xxl:text-[16px] lg:text-[12px] text-[14px] font-medium leading-none animate-ups__item">
                            Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                        </p>
                    </div>
                </div>
            </div>

            <div class="md:hidden flex flex-col items-center ">
                <div class="pb-[40px] ">
                    <p
                        class="text-[#FFF] text-center font-BG  text-[20px] font-semibold leading-none animate-ups__item">
                        Tính năng nổi bật
                    </p>
                    <p
                        class="text-white/80 text-center font-BG text-[18px] font-semibold leading-none animate-ups__item">
                        Margin T+3
                    </p>

                </div>
                <div class="w-full min-h-min ">
                    <swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :initial-slide="vSwiperIndex"
                        :speed="800" @slide-change="updateVSwiperIndex" :slides-per-view="1">
                        <swiper-slide>
                            <div class="flex flex-col items-start p-2 w-full gap-5 animate-ups__item">
                                <div class="w-full ">
                                    <img src="/images/san-pham1.jpg" alt="" class="rounded-[24px] w-full">
                                </div>
                                <div>
                                    <p class="text-[#15171E] font-BG text-[14px] font-semibold leading-none pb-2">
                                        Lãi suất ưu đãi chỉ từ 6.8%
                                    </p>
                                    <p class="text-black/60 font-HG text-[12px]  font-medium leading-none">
                                        Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn
                                        hạn
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>

            <div class="relative flex flex-col items-center  w-full">
                <p
                    class="text-[#15171E] text-center font-BG xxl:text-[60px] xl:text-[40px] md:text-[32px] sm:text-[20px] text-[45px] font-semibold leading-none xxl:my-6 animate-ups__item">
                    Cách đăng ký
                    <span
                        class="text-[#F51666] font-BG xxl:text-[60px] xl:text-[40px] md:text-[32px] text-[45px] sm:text-[20px] font-semibold leading-none">Margin
                        T+3</span>
                </p>
                <div
                    class="w-full flex justify-center items-center px-[275px] lg:px-[158px] xxl:px-[255px] sm:p-7 lg:h-[630px] ">
                    <img src="/images/image@2x.png"
                        class="sm:w-[327px] sm:h-[245px] xxl:h-[630px] xxl:w-[840px] object-cover md:w-[589px] md:h-[442px] xl:w-[687px] xl:h-[515px] animate-ups__item" />
                </div>
                <div class="h-[80px] sm:h-[300px] md:h-[120px]"></div>
                <div
                    class="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 w-full xl:p-[40px] lg:p-6 md:p-6 xxl:p-[60px] sm:p-6 items-start xl:gap-6 lg:gap-5 md:gap-5 xxl:gap-[60px] sm:gap-4 rounded-[40px] border border-[#F51666] bg-white/60 backdrop-blur-[50px] absolute sm:top-1/3 lg:top-1/2 md:top-2/3 xxl:top-[73%] ">
                    <div class="animate-ups__item">
                        <p
                            class="text-[#15171E] font-BG xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                            01.
                        </p>
                        <p
                            class="text-[#15171E] font-BG xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                            Đăng nhập tài khoản
                        </p>
                        <p
                            class="text-[#00000099] font-HG xxl:text-[14px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-medium leading-normal">
                            Tại UP Securities hoặc chọn mở tài khoản mới
                        </p>
                    </div>
                    <div class="animate-ups__item">
                        <p
                            class="text-[#15171E] font-BG xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                            02.
                        </p>
                        <p
                            class="text-[#15171E] font-BG xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                            Truy cập vào mục
                            Giao dịch Margin
                        </p>
                        <p
                            class="text-[#00000099] font-HG xxl:text-[14px] xl:text-[12px] lg:text-[12px] text-[16px] sm:text-[12px] font-medium leading-normal">
                            Và chọn sản phẩm Margin T+3.
                        </p>

                    </div>
                    <div class="animate-ups__item">
                        <p
                            class="text-[#15171E] font-BG xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                            03.
                        </p>
                        <p
                            class="text-[#15171E] font-BG xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                            Điền thông tin cần thiết và xác nhận đăng ký
                        </p>
                        <p
                            class="text-[#00000099] font-HG xxl:text-[14px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-medium leading-normal">
                            Đảm bảo chi phí vay thấp, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
                        </p>

                    </div>
                    <div class="animate-ups__item">
                        <p
                            class="text-[#15171E] font-BG xxl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
                            04.
                        </p>
                        <p
                            class="text-[#15171E] font-BG xxl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[24px] font-semibold leading-normal">
                            Chờ thông báo từ
                            hệ thống
                        </p>
                        <p
                            class="text-[#00000099] font-HG xxl:text-[14px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-medium leading-normal">
                            Sau đó bạn có thể bắt đầu sử dụng sản phẩm Margin T+3 để thực hiện giao dịch
                        </p>

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

<style scoped></style>