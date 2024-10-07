<template>
  <section>
    <!-- banner -->
    <banner />

    <!-- slider -->
    <slider />

    <!-- cách thức tham gia -->
    <tham-gia />

    <!-- tham gia ngay -->
    <!-- <div class="container-product">
      <div class="animate-ups 3xl:pt-[200px] 3xl:pb-[100px]">
        <div
          class="flex w-full flex-col 3xl:flex-row-reverse items-center 3xl:items-end gap-6 bg-gradient-to-l from-[#00D7B0] via-[#00D7B0] to-[#7B57FF] rounded-[20px] p-6 h-[343px] 3xl:h-[449px] relative mx-auto 3xl:p-12"
        >
          <div
            class="flex flex-col justify-center gap-3 w-[266px] 3xl:w-full 3xl:justify-end"
          >
            <p
              class="animate-ups__item text-white text-center 3xl:text-right font-BG text-[22px] leading-normal capitalize 3xl:text-[60px] font-bold"
            >
              Tham gia ngay hôm nay
            </p>
            <p
              class="animate-ups__item text-black text-center 3xl:text-right font-BG text-[14px] font-semibold leading-[24px] 3xl:leading-[60px] 3xl:text-[40px]"
            >
              Để trải nghiệm giao dịch chứng khoán
              <br />
              <span
                class="text-[#FFF35D] font-HG text-[18px] 3xl:text-[50px] 3xl:leading-[60px]"
                >"Zero Phí"</span
              >
              cùng UPS
            </p>
            <div
              class="animate-ups__item inline-flex mx-auto 3xl:w-full 3xl:justify-end 3xl:mt-[40px]"
            >
              <nuxt-link
                to="https://onboarding.upse.vn/index.html#/./open-account/check-info"
                class="btn active group"
              >
                <span class="text-[10px] sm:text-[12px] xl:text-[14px]">
                  Mở tài khoản ngay
                </span>
                <div
                  class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative"
                >
                  <i
                    class="w-full h-full group-hover:inline-flex hidden absolute"
                  >
                    <nuxt-img
                      src="/icons/arrow-dark-icon.svg"
                      loading="lazy"
                      width="16"
                      height="16"
                      alt="UPS"
                    />
                  </i>
                  <i
                    class="w-full h-full group-hover:hidden inline-flex absolute"
                  >
                    <nuxt-img
                      src="/icons/arrow-icon.svg"
                      loading="lazy"
                      width="16"
                      height="16"
                      alt="UPS"
                    />
                  </i>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="3xl:w-[90%] animate-ups__item">
            <p
              class="text-white text-center font-BG text-[14px] leading-normal 3xl:text-[24px]"
            >
              Thời gian áp dụng: Bắt đầu từ 08/10/2024 đến hết 31/12/2024
            </p>
          </div>

          <img
            src="/images/san-pham-3-tham-gia.png"
            alt=""
            class="animate-ups__item absolute bottom-[-100px] w-[240px] h-[240px] 3xl:w-[500px] 3xl:h-[500px] 3xl:left-0 3xl:top-[-100px]"
          />
        </div>
      </div>
    </div> -->

    <div class="container-product">
      <div class="animate-ups py-6 md:py-[60px_0_40px] xl:p-[80px_0_60px] 2xl:p-[100px_0_80px] 3xl:p-[200px_0_100px]">
        <div
          class="w-full bg-gradient-to-l from-[#00D7B0] via-[#00D7B0] to-[#7B57FF] rounded-[20px] h-[400px] md:h-[210px] lg:h-[240px] xl:h-[300px] 2xl:h-[330px] 3xl:h-[449px] p-[24px_30px] md:p-[28px_24px] lg:p-[40px_70px] xl:p-[44px_60px] 2xl:p-[44px_80px] 3xl:p-[50px_80px]">
          <div class="relative w-full h-full">
            <div class="flex flex-col h-full md:justify-between gap-3 3xl:w-full">
              <div>
                <p
                  class="animate-ups__item text-white text-center md:text-right font-BG text-[24px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] leading-[1.3] md:leading-normal capitalize font-bold">
                  Tham gia ngay hôm nay
                </p>

                <p
                  class="hidden md:block animate-ups__item text-black text-center md:text-right font-BG text-[18px] lg:text-[18px] xL:text-[24px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.3] font-semibold">
                  Để trải nghiệm giao dịch chứng khoán
                  <br />
                  <span
                    class="text-[#FFF35D] font-HG text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[40px]">"Zero
                    Phí"</span>
                  cùng UPS
                </p>

                <p
                  class="md:hidden animate-ups__item text-black text-center md:text-right font-BG text-[16px] lg:text-[18px] xL:text-[24px] 2xl:text-[32px] 3xl:text-[40px] xl:leading-[1.3] font-semibold">
                  Để trải nghiệm giao dịch chứng khoán
                  <span
                    class="text-[#FFF35D] font-HG text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[40px]">"Zero
                    Phí"</span>
                  cùng UPS
                </p>
              </div>

              <div class="flex flex-col-reverse md:flex-row gap-6 md:gap-0 items-center justify-between">
                <div class="animate-ups__item">
                  <p class="text-white text-center md:text-left font-BG text-[16px] leading-normal 3xl:text-[24px]">
                    Thời gian áp dụng: Bắt đầu từ 08/10/2024 đến hết 31/12/2024
                  </p>
                </div>

                <div class="animate-ups__item inline-flex md:justify-end">
                  <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info"
                    class="btn active group">
                    <span class="text-[14px] xl:text-[16px] text-nowrap">
                      Mở tài khoản ngay
                    </span>
                    <div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                      <i class="w-full h-full group-hover:inline-flex hidden absolute">
                        <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                      </i>
                      <i class="w-full h-full group-hover:hidden inline-flex absolute">
                        <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                      </i>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <img src="" alt="" class="" />

            <nuxt-img src="/images/san-pham-3-tham-gia.png" loading="lazy" alt="UPS"
              class="animate-ups__item absolute top-full md:top-0 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-[9%] -translate-y-1/2 size-[240px] md:size-[220px] lg:size-[288px] xl:size-[360px] 2xl:size-[400px] 3xl:size-[600px]" />
          </div>
        </div>
      </div>
    </div>

    <!-- câu hỏi thường gặp -->
    <question />

    <div class="container-product layout animate-ups">
      <div class="animate-ups__item">
        <feedback />
      </div>
    </div>

    <!-- điều kiện điều khoản -->
    <div class="container-product py-6 md:py-[60px] xl:py-[80px] 3xl:py-[100px]">
      <div style="background-position: left bottom"
        class="rounded-[24px] bg-[linear-gradient(104deg,rgba(237,237,244,0.16)_2.13%,rgba(237,237,244,0.79)_37.26%,rgba(237,237,244,0.15)_68.42%),url('/images/logo-bg-dkdk.png')] bg-no-repeat mx-auto w-full">
        <div
          class="w-full flex flex-col gap-6 md:gap-8 2xl:gap-10 3xl:gap-[60px] p-6 md:p-10 xl:p-[60px] 2xl:p-[60px_80px] 3xl:p-[80px]">
          <div class="animate-ups w-full">
            <p
              class="animate-ups__item text-black font-BG text-[24px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] leading-normal font-semibold">
              Điều kiện & Điều khoản
            </p>
          </div>

          <div
            class="animate-ups flex md:hidden flex-col 3xl:flex-row justify-center items-start gap-3 3xl:items-center">
            <div
              class="animate-ups__item w-full flex flex-col gap-3 items-start p-4 rounded-[12px] border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1">
              <p class="font-BG text-[18px] font-semibold leading-normal text-left">
                Đối tượng áp dụng
              </p>
              <p class="font-HG text-[16px] leading-normal">
                Toàn bộ khách hàng mở mới từ 08/10/2024 và Khách hàng Inactive
                (không phát sinh giao dịch từ 01/04/2024 đến 30/9/2024). Không
                áp dụng cho khách hàng có chính sách riêng.
              </p>
            </div>

            <div
              class="animate-ups__item w-full flex flex-col gap-3 items-start p-4 rounded-[12px] border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1">
              <p class="font-BG text-[18px] font-semibold leading-normal text-left">
                Phạm vi áp dụng
              </p>
              <p class="font-HG text-[16px] leading-normal">
                Áp dụng cho các giao dịch chứng khoán cơ sở được thực hiện qua
                nền tảng giao dịch của UPS. Không áp dụng cho các giao dịch
                Margin và các Sản phẩm tài chính khác.
              </p>
            </div>

            <div
              class="animate-ups__item w-full flex flex-col gap-3 items-start p-4 rounded-[12px] border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1">
              <p class="font-BG text-[18px] font-semibold leading-normal text-left">
                Thời gian áp dụng
              </p>
              <p class="font-HG text-[16px] leading-normal">
                Từ 08/10/2024 đến 31/12/2024.
              </p>
            </div>
          </div>

          <!-- slider -->
          <div class="animate-ups md:block hidden w-full">
            <swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :speed="800"
              :initial-slide="vSwiperIndex" @swiper="setVSwiperRef" @slide-change="updateVSwiperIndex" :breakpoints="{
                375: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2.1,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 12,
                },
                1280: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
                1440: {
                  slidesPerView: 2.5,
                  spaceBetween: 32,
                },
                1920: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
              }" class="animate-ups__item">
              <swiper-slide>
                <div class="w-full group">
                  <div
                    class="md:h-[260px] h-[213px] flex flex-col justify-between items-start gap-3 md:p-6 2xl:p-8 3xl:p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-[linear-gradient(101deg,rgba(123,87,255,0.80)_10.03%,rgba(178,87,255,0.80)_101.84%)] hover:text-white transition-colors duration-300">
                    <div class="flex items-center gap-[12px]">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"
                          class="text-black transition-colors duration-300 group-hover:text-white">
                          <!-- Chỉnh màu stroke khi hover -->
                          <path
                            d="M12.2134 15.3189C12.0801 15.3055 11.9201 15.3055 11.7734 15.3189C8.60008 15.2122 6.08008 12.6122 6.08008 9.41219C6.08008 6.14552 8.72008 3.49219 12.0001 3.49219C15.2667 3.49219 17.9201 6.14552 17.9201 9.41219C17.9067 12.6122 15.3867 15.2122 12.2134 15.3189Z"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="black"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M21.8799 6.15625C24.4665 6.15625 26.5465 8.24958 26.5465 10.8229C26.5465 13.3429 24.5465 15.3963 22.0532 15.4896C21.9465 15.4763 21.8265 15.4763 21.7065 15.4896"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="black"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M5.54695 20.2363C2.32029 22.3963 2.32029 25.9162 5.54695 28.0629C9.21362 30.5163 15.227 30.5163 18.8936 28.0629C22.1203 25.9029 22.1203 22.3829 18.8936 20.2363C15.2403 17.7963 9.22695 17.7963 5.54695 20.2363Z"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="black"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M24.4531 27.4922C25.4131 27.2922 26.3198 26.9055 27.0665 26.3322C29.1465 24.7722 29.1465 22.1989 27.0665 20.6389C26.3331 20.0789 25.4398 19.7055 24.4931 19.4922"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="black"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </i>
                      <p
                        class="font-BG text-[18px] xl:text-[20px] 3xl:text-[24px] font-semibold leading-normal text-left">
                        Đối tượng áp dụng
                      </p>
                    </div>
                    <p class="font-HG text-[16px] 3xl:text-[18] leading-normal">
                      Toàn bộ khách hàng mở mới từ 08/10/2024 và Khách hàng
                      Inactive (không phát sinh giao dịch từ 01/04/2024 đến
                      30/9/2024). Không áp dụng cho khách hàng có chính sách
                      riêng.
                    </p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-full group">
                  <div
                    class="md:h-[260px] h-[213px] flex flex-col justify-between items-start gap-3 md:p-6 2xl:p-8 3xl:p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-[linear-gradient(101deg,rgba(123,87,255,0.80)_10.03%,rgba(178,87,255,0.80)_101.84%)] hover:text-white transition-colors duration-300">
                    <div class="flex items-center gap-[12px]">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"
                          class="transition-colors duration-300 group-hover:stroke-white">
                          <path
                            d="M16 26.8242C21.5228 26.8242 26 22.3471 26 16.8242C26 11.3014 21.5228 6.82422 16 6.82422C10.4772 6.82422 6 11.3014 6 16.8242C6 22.3471 10.4772 26.8242 16 26.8242Z"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M16 20.8242C18.2091 20.8242 20 19.0334 20 16.8242C20 14.6151 18.2091 12.8242 16 12.8242C13.7909 12.8242 12 14.6151 12 16.8242C12 19.0334 13.7909 20.8242 16 20.8242Z"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16 6.15885V3.49219" class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M5.33317 16.8242H2.6665"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16 27.4922V30.1589" class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M26.6665 16.8242H29.3332"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </i>
                      <p
                        class="font-BG text-[18px] xl:text-[20px] 3xl:text-[24px] font-semibold leading-normal text-left">
                        Phạm vi áp dụng
                      </p>
                    </div>
                    <p class="font-HG text-[16px] 3xl:text-[18] leading-normal">
                      Áp dụng cho các giao dịch chứng khoán cơ sở được thực hiện
                      qua nền tảng giao dịch của UPS. Không áp dụng cho các giao
                      dịch Margin và các Sản phẩm tài chính khác.
                    </p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-full group">
                  <div
                    class="md:h-[260px] h-[213px] flex flex-col justify-between items-start gap-3 md:p-6 2xl:p-8 3xl:p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-[linear-gradient(101deg,rgba(123,87,255,0.80)_10.03%,rgba(178,87,255,0.80)_101.84%)] hover:text-white transition-colors duration-300">
                    <div class="flex items-center gap-[12px]">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"
                          class="transition-colors duration-300 group-hover:stroke-white">
                          <path d="M10.6665 3.49219V7.49219"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M21.3335 3.49219V7.49219"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4.6665 12.9453H27.3332"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M28 12.1589V23.4922C28 27.4922 26 30.1589 21.3333 30.1589H10.6667C6 30.1589 4 27.4922 4 23.4922V12.1589C4 8.15885 6 5.49219 10.6667 5.49219H21.3333C26 5.49219 28 8.15885 28 12.1589Z"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M15.9938 19.0885H16.0058"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.0592 19.0885H11.0712"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.0592 23.0885H11.0712"
                            class="transition-colors duration-300 group-hover:stroke-white" stroke="#111111"
                            stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </i>
                      <p
                        class="font-BG text-[18px] xl:text-[20px] 3xl:text-[24px] font-semibold leading-normal text-left">
                        Thời gian áp dụng
                      </p>
                    </div>
                    <p class="font-HG text-[16px] 3xl:text-[18] leading-normal">
                      Từ 08/10/2024 đến 31/12/2024.
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Quy định khác -->
          <div class="flex justify-end">
            <div class="w-full xl:w-[80%] animate-ups flex flex-col md:flex-row items-start gap-3 md:gap-[60px]">
              <p
                class="animate-ups__item font-BG text-[18px] xl:text-[20px] 3xl:text-[24px] font-semibold leading-normal text-nowrap">
                Quy định khác
              </p>

              <div class="animate-ups__item flex flex-col gap-3 md:gap-6 text-[16px] leading-normal 3xl:text-[18px]">
                <p class="font-HG">
                  UPS có quyền từ chối hoặc hủy bỏ ưu đãi trong trường hợp
                  phát hiện khách hàng có dấu hiệu gian lận hoặc vi phạm quy
                  định của chương trình.
                </p>

                <p class="font-HG">
                  UPS có quyền điều chỉnh, thay đổi, hoặc kết thúc chương
                  trình trước thời hạn. Mọi thay đổi sẽ được thông báo trước tới
                  quý khách hàng thông qua các kênh thông tin chính thức của
                  UPS.
                </p>

                <p class="font-HG">
                  Các điều khoản và điều kiện khác của chương trình sẽ tuân
                  thủ theo quy định hiện hành của UPS và pháp luật Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./component/banner.vue";
import Slider from "./component/slider.vue";
import ThamGia from "./component/tham-gia.vue";
import Question from "./component/question.vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";
import Feedback from "~/components/common/feedback/index.vue";

export default defineComponent({
  name: "san-pham-3",
  components: {
    Banner,
    Slider,
    ThamGia,
    Question,
    Feedback,
  },
  setup(props, ctx) {

    useHead({
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
      script: [
        {
          children: `
              gtag('event', 'conversion', {
                    'send_to': 'AW-16725917125/-zDVCNTK2NkZEMX7xKc-',
                    'value': 1.0,
                    'currency': 'VND'
              });
					`
        }]
    });

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

    onMounted(() => {
      const animateUpsEl = document.querySelectorAll(".animate-ups");

      animateUpsEl.forEach((el) => {
        const upsEl = el.querySelectorAll(".animate-ups__item");
        useGsap.fromTo(
          upsEl,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power1.out",
            stagger: {
              from: 0,
              axis: "x",
              amount: 0.5,
            },
            scrollTrigger: {
              trigger: el,
              start: "top center",
              end: "bottom center",
              scrub: false,
            },
          }
        );
      });

      const btnWrapper = document.querySelectorAll(".link");
      btnWrapper.forEach((el) => {
        useGsap.fromTo(
          el,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power1.out",
            stagger: {
              from: 0,
              axis: "x",
              amount: 0.5,
            },
          }
        );
      });

      useGsap.fromTo(
        ".policy_collection-item",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.out",
          stagger: {
            from: 0,
            axis: "x",
            amount: 0.5,
          },
          scrollTrigger: {
            trigger: ".section_policy",
            start: "top center", // When the top of .section hits the center of viewport
            end: "bottom center", // When the bottom of .section hits the center of viewport
            scrub: false,
          },
        }
      );

      useGsap.fromTo(
        ".news_layout_item",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "sine.out",
          stagger: {
            from: 0,
            axis: "x",
            amount: 0.5,
          },
          scrollTrigger: {
            trigger: ".section_news",
            start: "top center", // When the top of .section hits the center of viewport
            end: "bottom center", // When the bottom of .section hits the center of viewport
            scrub: false,
          },
        }
      );
    });

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
