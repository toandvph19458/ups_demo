<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "thoai-von",
    components: {
    },

});
</script>
<template>
    <div class="flex flex-col items-center 3xl:gap-10 w-full layout 2xl:gap-[30px] xl:gap-[26px]">

        <div class="flex 3xl:w-[700px] flex-col 3xl:gap-3">
            <p class="text-center font-BG 3xl:text-[40px] 2xl:text-[32px] xl:text-[28px] leading-normal font-semibold">
                Niêm yết và giao
                dịch
            </p>
            <p class="text-center font-HG 2xl:text-[16px] xl:text-[14px] leading-normal text-[rgba(83, 86, 98, 0.80)]">
                UPS sẽ
                giúp doanh nghiệp
                chuẩn bị các điều kiện nhằm đáp ứng yêu cầu niêm yết
                theo quy định của pháp luật
            </p>
        </div>

        <div class="flex space-x-4 xl:w-full 3xl:gap-10 ">
            <div class="flip-container flex-1 xl:min-h-[400px]">
                <div class="flipper w-full h-full">
                    <div
                        class="front flex flex-col items-start 3xl:gap-[80px] 2xl:gap-[60px] 3xl:px-[40px] xl:gap-[60px] 3xl:py-[80px] 2xl:px-[30px] 2xl:py-[60px] xl:px-[40px] xl:py-[60px] border bg-white bg-opacity-70 border-[#CAFF8D] rounded-[32px] h-full">

                        <img src="/logo/logo-row.png" alt=""
                            class="w-10 h-10 mb-4 2xl:w-6 2xl:h-6 xl:w-[21px] xl:h-[21px]">
                        <p class="font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[21px] leading-normal">
                            Tư vấn trình tự, thủ tục các nghiệp vụ liên quan tới chứng khoán và thị trường chứng
                            khoán
                        </p>
                    </div>
                    <div
                        class="back flex flex-col items-start 3xl:px-6 3xl:py-8 2xl:p-6 xl:p-5 bg-gradient-to-r from-cyan-400 to-green-300 rounded-[32px] h-full xl:gap-2">
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px]  leading-normal ">Tư vấn lộ trình thích hợp
                            để đăng ký
                            giao dịch</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Tư vấn chỉnh sửa điều lệ
                            hoạt động
                            của doanh nghiệp phù hợp với Điều lệ mẫu áp dụng cho các công ty niêm yết trên Sở
                            giao dịch chứng khoán tại Thông tư số 121/2012/TT-BTC và các văn bản pháp lý liên
                            quan</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Lập và nộp hồ sơ đăng ký
                            niêm yết,
                            theo dõi tiến trình, bổ sung, chỉnh sửa hồ sơ theo yêu cầu của Sở giao dịch chứng
                            khoán</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Lập và nộp hồ sơ lưu ký
                            tập trung cổ
                            phiếu của doanh nghiệp tại Trung tâm lưu ký</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Hỗ trợ doanh nghiệp sau
                            niêm yết về
                            các thủ tục</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Đại hội đồng cổ đông
                            thường niên và
                            bất thường</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Công bố thông tin định kỳ và
                            bất thường
                        </p>
                    </div>
                </div>
            </div>

            <!-- Thêm hai thẻ tương tự như trên -->
            <!-- Thẻ thứ hai -->
            <div class="flip-container flex-1 2xl:min-h-[400px]">
                <div class="flipper w-full h-full">
                    <div
                        class="front flex flex-col items-start 3xl:gap-[80px] 2xl:gap-[60px] 3xl:px-[40px] xl:gap-[60px] 3xl:py-[80px] 2xl:px-[30px] 2xl:py-[60px] xl:px-[40px] xl:py-[60px] border bg-white bg-opacity-70 border-[#CAFF8D] rounded-[32px] h-full">

                        <img src="/logo/logo-row.png" alt=""
                            class="w-10 h-10 mb-4 2xl:w-6 2xl:h-6 xl:w-[21px] xl:h-[21px]">
                        <p class="font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[21px] leading-normal">
                            Tư vấn trình tự, thủ tục các nghiệp vụ liên quan tới chứng khoán và thị trường chứng
                            khoán
                        </p>
                    </div>
                    <div
                        class="back flex flex-col items-start 3xl:px-6 3xl:py-8 2xl:p-6 xl:p-5 bg-gradient-to-r from-cyan-400 to-green-300 rounded-[32px] h-full xl:gap-2">
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px]  leading-normal ">Tư vấn lộ trình thích hợp
                            để đăng ký
                            giao dịch</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Tư vấn chỉnh sửa điều lệ
                            hoạt động
                            của doanh nghiệp phù hợp với Điều lệ mẫu áp dụng cho các công ty niêm yết trên Sở
                            giao dịch chứng khoán tại Thông tư số 121/2012/TT-BTC và các văn bản pháp lý liên
                            quan</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Lập và nộp hồ sơ đăng ký
                            niêm yết,
                            theo dõi tiến trình, bổ sung, chỉnh sửa hồ sơ theo yêu cầu của Sở giao dịch chứng
                            khoán</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Lập và nộp hồ sơ lưu ký
                            tập trung cổ
                            phiếu của doanh nghiệp tại Trung tâm lưu ký</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Hỗ trợ doanh nghiệp sau
                            niêm yết về
                            các thủ tục</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Đại hội đồng cổ đông
                            thường niên và
                            bất thường</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Công bố thông tin định kỳ và
                            bất thường
                        </p>
                    </div>
                </div>
            </div>

            <!-- Thẻ thứ ba -->
            <div class="flip-container flex-1 2xl:min-h-[400px]">
                <div class="flipper w-full h-full">
                    <div
                        class="front flex flex-col items-start 3xl:gap-[80px] 2xl:gap-[60px] 3xl:px-[40px] xl:gap-[60px] 3xl:py-[80px] 2xl:px-[30px] 2xl:py-[60px] xl:px-[40px] xl:py-[60px] border bg-white bg-opacity-70 border-[#CAFF8D] rounded-[32px] h-full">

                        <img src="/logo/logo-row.png" alt=""
                            class="w-10 h-10 mb-4 2xl:w-6 2xl:h-6 xl:w-[21px] xl:h-[21px]">
                        <p class="font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[21px] leading-normal">
                            Tư vấn trình tự, thủ tục các nghiệp vụ liên quan tới chứng khoán và thị trường chứng
                            khoán
                        </p>
                    </div>
                    <div
                        class="back flex flex-col items-start 3xl:px-6 3xl:py-8 2xl:p-6 xl:p-5 bg-gradient-to-r from-cyan-400 to-green-300 rounded-[32px] h-full xl:gap-2">
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px]  leading-normal ">Tư vấn lộ trình thích hợp
                            để đăng ký
                            giao dịch</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Tư vấn chỉnh sửa điều lệ
                            hoạt động
                            của doanh nghiệp phù hợp với Điều lệ mẫu áp dụng cho các công ty niêm yết trên Sở
                            giao dịch chứng khoán tại Thông tư số 121/2012/TT-BTC và các văn bản pháp lý liên
                            quan</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Lập và nộp hồ sơ đăng ký
                            niêm yết,
                            theo dõi tiến trình, bổ sung, chỉnh sửa hồ sơ theo yêu cầu của Sở giao dịch chứng
                            khoán</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Lập và nộp hồ sơ lưu ký
                            tập trung cổ
                            phiếu của doanh nghiệp tại Trung tâm lưu ký</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal ">Hỗ trợ doanh nghiệp sau
                            niêm yết về
                            các thủ tục</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Đại hội đồng cổ đông
                            thường niên và
                            bất thường</p>
                        <p class="font-HG 3xl:text-[16px] xl:text-[14px] leading-normal">Công bố thông tin định kỳ và
                            bất thường
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.flip-container {
    perspective: 1000px;
    /* Tạo chiều sâu cho hiệu ứng lật */
}

.flipper {
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 100%;
}

.flip-container:hover .flipper {
    transform: rotateY(180deg);
    /* Xoay 180 độ khi hover */
}

.front,
.back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    /* Ẩn mặt sau khi xoay */
}

.back {
    transform: rotateY(180deg);
    /* Xoay mặt sau 180 độ */
}

.custom-radial-gradient {
    background: radial-gradient(237.47% 127.27% at 97.01% 23.93%, #00E7FF 52.37%, #A4FB5A 100%);
}
</style>