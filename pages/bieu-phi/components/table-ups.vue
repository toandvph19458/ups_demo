<template>
    <section class="w-full">
        <div
            class="flex w-full p-6 flex-col items-start flex-nowrap bg-white rounded-3xl relative mt-[-100px] md:px-[100px] md:py-10 2xl:px-[220px] 2xl:py-[40px] 3xl:px-[420px] 3xl:py-[40px]">
            <div class="flex flex-col gap-6 items-start flex-shrink-0 flex-nowrap relative mx-auto">
                <p
                    class=" w-full font-BG flex-shrink-0 font-semibold 2xl:text-[40px] xl:text-[32px] lg:text-[28px] md:text-[20px] text-[18px] leading-normal text-black relative text-center z-[1] animate-ups__item">
                    Biểu phí giao dịch chứng khoán cơ sở
                </p>

                <div class="flex flex-col gap-6 w-full flex-shrink-0 flex-nowrap relative z-[2]">
                    <div class="flex flex-col items-start w-full flex-shrink-0 flex-nowrap relative z-[3]">
                        <div
                            class="flex py-[12px] h-[24px] md:gap-[40px] sm:gap-3 items-center w-full flex-nowrap animate-ups__item">
                            <span
                                class="flex-[0.1] font-[600] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[14px] leading-[24px] text-black">STT</span>
                            <span
                                class="flex-[2.5] font-[600] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[14px] leading-[24px] text-black font-hanken">Loại
                                dịch vụ</span>

                            <span
                                class="flex-[1.4] font-[600] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[14px] leading-[24px] text-black font-hanken text-left">Mức
                                phí</span>
                        </div>
                    </div>

                    <button
                        class="flex p-[12px] justify-center items-center w-full flex-shrink-0 flex-nowrap bg-gradient-to-r from-[#7b57ff] to-[rgba(87,105,255,0.77)] rounded-[12px] border-none relative z-[9] cursor-pointer">
                        <span
                            class="flex w-[287px] h-[24px] justify-center items-center flex-shrink-0 font-[600] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[24px] text-white relative text-center z-[10] font-hanken animate-ups__item">Giao
                            dịch chứng khoán qua sàn</span>
                    </button>
                    <div
                        class="flex py-[12px] md:gap-[40px] sm:gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11] h-[19px] animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black relative text-center font-hanken">1</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[24px] text-black text-left font-hanken">Giao
                            dịch cổ phiếu và chứng chỉ quỹ</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black text-left font-hanken">0,15%
                            - 0.50%</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>

                    <div
                        class="flex md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11]  animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black relative text-center font-hanken">2</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[24px] 2xl:leading-normal sm:leading-[14px] text-black text-left font-hanken">Giao
                            dịch cổ phiếu, chứng chỉ quỹ đăng ký giao dịch (Upcom) trong trường hợp bán (thoái)
                            phần vốn của nhà nước và vốn của doanh nghiệp nhà nước qua hệ thống giao dịch của
                            SGDCK</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black text-left font-hanken">0,05%</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>

                    <div
                        class="flex  md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11] animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black relative text-center font-hanken">3</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[24px] 2xl:leading-normal sm:leading-[14px] text-black text-left font-hanken">Giao
                            dịch cổ phiếu, chứng chỉ quỹ niêm yết tại các Sở trong trường hợp bán (thoái) phần vốn
                            của nhà nước và vốn của doanh nghiệp nhà nước qua hệ thống giao dịch của SGDCK</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black text-left font-hanken">0,06%</span>
                    </div>
                    <button
                        class="flex p-[12px] justify-center items-center w-full flex-shrink-0 flex-nowrap bg-gradient-to-r from-[#7b57ff] to-[rgba(87,105,255,0.77)] rounded-[12px] border-none relative z-[25] cursor-pointer">
                        <span
                            class="flex w-[287px] h-[24px] justify-center items-center flex-shrink-0 font-[600] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[24px] text-white relative text-center z-[26] font-hanken animate-ups__item">Các
                            dịch vụ khác</span>
                    </button>
                    <div
                        class="flex py-[12px] md:gap-[40px] sm:gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11] h-[19px] animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black relative text-center font-hanken">1</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[24px] text-black text-left font-hanken">Mở
                            tài khoản</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black text-left font-hanken">Miễn
                            phí</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>
                    <!--  -->
                    <div
                        class="flex py-[12px] md:gap-[40px] sm:gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11] h-[19px] animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black relative text-center font-hanken">2</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[24px] text-black text-left font-hanken">Lưu
                            ký Cổ phiếu, chứng chỉ quỹ</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] leading-[19px] text-black text-left font-hanken">0,2
                            đồng/trái phiếu/tháng</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>

                    <div
                        class="flex  md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11]  animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black relative text-center font-hanken">3</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[24px] text-black text-left font-hanken">Phí
                            chuyển khoản chứng khoán <br />
                            (Khi đóng tài khoản hoặc theo yêu cầu khách hàng)</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black text-left font-hanken">0,5
                            đồng/1 chứng khoán/1 lần chuyển khoản/1 mã chứng khoán <br />
                            Tối thiểu 100.000 VNĐ/ bộ hồ sơ</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>
                    <div
                        class="flex  md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11]  animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black relative text-center font-hanken">4</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[24px] text-black text-left font-hanken">Phí
                            rút chứng khoán</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black text-left font-hanken">100.000
                            VNĐ/ bộ hồ sơ</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>
                    <div
                        class="flex  md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11]  animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black relative text-center font-hanken">5</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[24px] text-black text-left font-hanken">Phí
                            chuyển quyền sở hữu chứng khoán</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black text-left font-hanken">Bên
                            chuyển/Bên nhận : 0.2% giá trị giao dịch. Tối thiểu 100.000 VNĐ/ bộ hồ sơ</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>
                    <div
                        class="flex  md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11]  animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black relative text-center font-hanken">6</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[24px] text-black text-left font-hanken">Phí
                            chuyển nhượng quyền mua chứng khoán</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black text-left font-hanken">100.000
                            VNĐ/ bộ hồ sơ</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>
                    <div
                        class="flex  md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11]  animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black relative text-center font-hanken">7</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[24px] text-black text-left font-hanken">Biếu,
                            Tăng, Cho, Thừa kế chứng khoán</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black text-left font-hanken">Bên
                            chuyển/Bên nhận : 0.2% giá trị giao dịch. Tối thiểu 100.000 VNĐ/ bộ hồ sơ</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>
                    <div
                        class="flex  md:gap-[40px] gap-3 items-center w-full flex-shrink-0 flex-nowrap relative z-[11]  animate-ups__item">
                        <span
                            class="flex-[0.1] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black relative text-center font-hanken">8</span>

                        <span
                            class="flex-[2.5] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[24px] text-black text-left font-hanken">Phí
                            xác nhận thông tin tài khoản</span>
                        <span
                            class="flex-[1.4] font-[500] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[14px] text-[12px] leading-[19px] text-black text-left font-hanken">100.000
                            VNĐ/ bộ hồ sơ</span>
                    </div>

                    <div class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[15] border">
                    </div>
                    <div
                        class="flex  md:gap-[40px] gap-10 items-center w-full flex-shrink-0 flex-nowrap relative z-[32] justify-between">
                        <div class="flex flex-col">
                            <p
                                class="text-[#01C159] font-hanken-grotesk 2xl:text-[40px] xl:text-[28px] lg:text-[28px] text-[18px] font-bold leading-normal animate-ups__item">
                                0,3%/năm
                            </p>
                            <p
                                class="text-[#15171E] font-hanken-grotesk 2xl:text-[28px] xl:text-[20px] lg:text-[20px] text-[14px] font-semibold leading-normal animate-ups__item">
                                mức lãi suất
                            </p>
                        </div>
                        <span
                            class="md:w-[400px] w-full  font-[500] 2xl:text-[16px] xl:text-[14px] md:text-[14px] text-[12px] md:leading-[19px] sm:leading-normal text-black relative text-left z-[35] font-hanken animate-ups__item">Áp
                            dụng trên tài khoản tiền gửi của Nhà đầu tư từ ngày 15/02/2019</span>
                    </div>
                    <!-- <div
                        class="h-[1px] w-full flex-shrink-0 bg-center bg-no-repeat bg-cover relative z-[36] bg-[#02E56A]">
                    </div>
                    <div class="flex items-center md:gap-[40px] gap-3 self-stretch">
                        <div
                            class="flex flex-col justify-end items-center p-[24px] xl:p-3 sm:p-3 gap-[12px] flex-[1_0_0] hover:bg-[#EDEDF4] rounded-xl">
                            <div class="inline-flex w-[24px] h-[24px] relative">
                                <nuxt-img format="webp" loading="lazy" src="/icons/icon-bieuphi.svg" alt="UPS"
                                    class="absolute w-full h-full object-contain animate-ups__item" />
                            </div>
                            <p
                                class="text-[#15171E]/90 text-center font-BG text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] sm:text-[12px] font-semibold leading-normal animate-ups__item">
                                Biểu phí giao dịch chứng khoán phái sinh
                            </p>
                        </div>
                        <div class="w-1 h-[132px] bg-[#E7E9EF]"></div>
                        <div
                            class="flex flex-col justify-end items-center p-[24px] xl:p-3 sm:p-3 gap-[12px] flex-[1_0_0] hover:bg-[#EDEDF4] rounded-xl">
                            <div class="inline-flex w-[24px] h-[24px] relative">
                                <nuxt-img format="webp" loading="lazy" src="/icons/icon-bieuphi.svg" alt="UPS"
                                    class="absolute w-full h-full object-contain animate-ups__item" />
                            </div>
                            <p
                                class="text-[#15171E]/90 text-center font-BG text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] sm:text-[12px] font-semibold leading-normal max-w-[128px] animate-ups__item">
                                Biểu phí dịch vụ tài chính
                            </p>
                        </div>
                        <div class="w-1 h-[132px] bg-[#E7E9EF]"></div>
                        <div
                            class="flex flex-col justify-end items-center p-[24px] xl:p-3 sm:p-3 gap-[12px] flex-[1_0_0] hover:bg-[#EDEDF4] rounded-xl">
                            <div class="inline-flex w-[24px] h-[24px] relative">
                                <nuxt-img format="webp" loading="lazy" src="/icons/icon-bieuphi.svg" alt="UPS"
                                    class="absolute w-full h-full object-contain animate-ups__item" />
                            </div>
                            <p
                                class="text-[#15171E]/90 text-center font-BG text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] sm:text-[12px] font-semibold leading-normal max-w-[128px] animate-ups__item">
                                Biểu phí chuyển tiền
                            </p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

export default defineComponent({
    name: "table-ups",
    components: {},
    setup(props, ctx) {
        return {
            cn,
        };
    },
});
</script>

<style scoped></style>
