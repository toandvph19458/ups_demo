<template>
  <section>
    <!-- banner -->
    <banner />
    <!-- slider -->
    <slider />
    <!-- ách thức tham gia -->
    <tham-gia />
    <!-- tham gia ngay -->
    <div
      class="flex p-6 flex-col justify-end items-start 3xl:px-[225px] 3xl:pt-[200px] 3xl:pb-[100px]"
    >
      <div
        class="flex w-full flex-col 3xl:flex-row-reverse items-center 3xl:items-end gap-6 bg-gradient-to-l from-[#00D7B0] via-[#00D7B0] to-[#7B57FF] rounded-[20px] p-6 h-[343px] 3xl:h-[449px] relative mx-auto 3xl:p-12"
      >
        <div
          class="flex flex-col justify-center gap-3 w-[266px] 3xl:w-full 3xl:justify-end"
        >
          <p
            class="text-white text-center 3xl:text-right font-BG text-[22px] leading-normal capitalize 3xl:text-[60px] font-bold"
          >
            Tham gia ngay hôm nay
          </p>
          <p
            class="text-black text-center 3xl:text-right font-BG text-[14px] font-semibold leading-[24px] 3xl:leading-[60px] 3xl:text-[40px]"
          >
            Để trải nghiệm giao dịch chứng khoán <br />
            với
            <span
              class="text-[#FFF35D] font-HG text-[18px] 3xl:text-[50px] 3xl:leading-[60px]"
              >phí 0 đồng</span
            >
            cùng UPS
          </p>
          <div
            class="inline-flex mx-auto 3xl:w-full 3xl:justify-end 3xl:mt-[40px]"
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
        <div class="3xl:w-[90%]">
          <p
            class="text-white text-center font-BG text-[14px] leading-normal 3xl:text-[24px]"
          >
            Thời gian diễn ra từ 15/09/2024 đến hết 31/12/2024
          </p>
        </div>
        <img
          src="/images/san-pham-3-tham-gia.png"
          alt=""
          class="absolute bottom-[-100px] w-[240px] h-[240px] 3xl:w-[500px] 3xl:h-[500px] 3xl:left-0 3xl:top-[-100px]"
        />
      </div>
    </div>
    <!-- câu hỏi thường gặp -->
    <question />
    <div class="layout">
      <feedback />
    </div>

    <!-- điều kiện điều khoản -->
    <div
      class="flex p-6 flex-col justify-end items-start gap-3 3xl:px-[225px] 3xl:py-[100px] "
    >
      <div
        style="background-position: left bottom;"
	  class="flex p-6 flex-col justify-center items-center rounded-[24px] bg-[linear-gradient(104deg,rgba(237,237,244,0.16)_2.13%,rgba(237,237,244,0.79)_37.26%,rgba(237,237,244,0.15)_68.42%),url('/images/logo-bg-dkdk.png')] bg-no-repeat mx-auto w-full"
      >
        <div
          class="w-[279px] 3xl:w-full flex flex-col items-start gap-6 3xl:items-end pl-[80px] pt-[80px]"
        >
          <div class="w-full">
            <p
              class="text-black font-BG text-[20px] leading-normal font-semibold 3xl:text-[60px]"
            >
              Điều kiện & điều khoản
            </p>
          </div>

          <div
            class="h-[380px] flex md:hidden flex-col 3xl:flex-row justify-center items-start gap-3 3xl:items-center"
          >
            <div
              class="h-[120px] w-full flex flex-col justify-center items-start gap-3 p-4 rounded-md border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1"
            >
              <div class="flex items-center gap-[12px]">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M12.2134 15.3189C12.0801 15.3055 11.9201 15.3055 11.7734 15.3189C8.60008 15.2122 6.08008 12.6122 6.08008 9.41219C6.08008 6.14552 8.72008 3.49219 12.0001 3.49219C15.2667 3.49219 17.9201 6.14552 17.9201 9.41219C17.9067 12.6122 15.3867 15.2122 12.2134 15.3189Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.8799 6.15625C24.4665 6.15625 26.5465 8.24958 26.5465 10.8229C26.5465 13.3429 24.5465 15.3963 22.0532 15.4896C21.9465 15.4763 21.8265 15.4763 21.7065 15.4896"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.54695 20.2363C2.32029 22.3963 2.32029 25.9162 5.54695 28.0629C9.21362 30.5163 15.227 30.5163 18.8936 28.0629C22.1203 25.9029 22.1203 22.3829 18.8936 20.2363C15.2403 17.7963 9.22695 17.7963 5.54695 20.2363Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.4531 27.4922C25.4131 27.2922 26.3198 26.9055 27.0665 26.3322C29.1465 24.7722 29.1465 22.1989 27.0665 20.6389C26.3331 20.0789 25.4398 19.7055 24.4931 19.4922"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
                <p
                  class="font-BG text-[14px] font-semibold leading-normal text-left"
                >
                  Đối tượng áp dụng
                </p>
              </div>
              <p class="font-HG text-[12px] leading-normal">
                Khách hàng mở mới từ ngày 15/09/2024
              </p>
            </div>
            <div
              class="h-[120px] flex flex-col justify-center items-start gap-3 p-4 rounded-md border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1"
            >
              <p
                class="font-BG text-[14px] font-semibold leading-normal text-left"
              >
                Phạm vi áp dụng
              </p>
              <p class="font-HG text-[12px] leading-normal">
                Áp dụng cho các giao dịch chứng khoán cơ sở được thực hiện qua
                nền tảng giao dịch của UPS. Không áp dụng cho giao dịch margin
                và các sản phẩm tài chính khác
              </p>
            </div>
            <div
              class="h-[120px] w-full flex flex-col justify-center items-start gap-3 p-4 rounded-md border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1"
            >
              <p
                class="font-BG text-[14px] font-semibold leading-normal text-left"
              >
                Thời gian áp dụng
              </p>
              <p class="font-HG text-[12px] leading-normal">Từ 15/09/2024</p>
            </div>
          </div>
          <!-- slider -->
          <div class="3xl:block hidden h-[380px] w-full">
            <swiper
              :modules="[SwiperNavigation]"
              :pagination="true"
              :loop="false"
              :speed="800"
              :initial-slide="vSwiperIndex"
              @swiper="setVSwiperRef"
              @slide-change="updateVSwiperIndex"
              :breakpoints="{
                1200: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
              }"
            >
              <swiper-slide>
                <div class="w-full group">
                  <div
                    class="h-[213px] flex flex-col justify-between items-start gap-3 p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-[linear-gradient(101deg,rgba(123,87,255,0.80)_10.03%,rgba(178,87,255,0.80)_101.84%)] hover:text-white transition-colors duration-300"
                  >
                    <div class="flex items-center gap-[12px]">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          class="text-black transition-colors duration-300 group-hover:text-white"
                        >
                          <!-- Chỉnh màu stroke khi hover -->
                          <path
                            d="M12.2134 15.3189C12.0801 15.3055 11.9201 15.3055 11.7734 15.3189C8.60008 15.2122 6.08008 12.6122 6.08008 9.41219C6.08008 6.14552 8.72008 3.49219 12.0001 3.49219C15.2667 3.49219 17.9201 6.14552 17.9201 9.41219C17.9067 12.6122 15.3867 15.2122 12.2134 15.3189Z"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.8799 6.15625C24.4665 6.15625 26.5465 8.24958 26.5465 10.8229C26.5465 13.3429 24.5465 15.3963 22.0532 15.4896C21.9465 15.4763 21.8265 15.4763 21.7065 15.4896"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.54695 20.2363C2.32029 22.3963 2.32029 25.9162 5.54695 28.0629C9.21362 30.5163 15.227 30.5163 18.8936 28.0629C22.1203 25.9029 22.1203 22.3829 18.8936 20.2363C15.2403 17.7963 9.22695 17.7963 5.54695 20.2363Z"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M24.4531 27.4922C25.4131 27.2922 26.3198 26.9055 27.0665 26.3322C29.1465 24.7722 29.1465 22.1989 27.0665 20.6389C26.3331 20.0789 25.4398 19.7055 24.4931 19.4922"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </i>
                      <p
                        class="font-BG text-[24px] font-semibold leading-normal text-left"
                      >
                        Đối tượng áp dụng
                      </p>
                    </div>
                    <p class="font-HG text-[18px] leading-normal">
                      Khách hàng mở mới từ ngày 15/09/2024
                    </p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-full group">
                  <div
                    class="h-[213px] flex flex-col justify-between items-start gap-3 p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-[linear-gradient(101deg,rgba(123,87,255,0.80)_10.03%,rgba(178,87,255,0.80)_101.84%)] hover:text-white transition-colors duration-300"
                  >
                    <div class="flex items-center gap-[12px]">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          class="transition-colors duration-300 group-hover:stroke-white"
                        >
                          <path
                            d="M16 26.8242C21.5228 26.8242 26 22.3471 26 16.8242C26 11.3014 21.5228 6.82422 16 6.82422C10.4772 6.82422 6 11.3014 6 16.8242C6 22.3471 10.4772 26.8242 16 26.8242Z"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 20.8242C18.2091 20.8242 20 19.0334 20 16.8242C20 14.6151 18.2091 12.8242 16 12.8242C13.7909 12.8242 12 14.6151 12 16.8242C12 19.0334 13.7909 20.8242 16 20.8242Z"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 6.15885V3.49219"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.33317 16.8242H2.6665"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 27.4922V30.1589"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26.6665 16.8242H29.3332"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </i>
                      <p
                        class="font-BG text-[24px] font-semibold leading-normal text-left"
                      >
                        Phạm vi áp dụng
                      </p>
                    </div>
                    <p class="font-HG text-[18px] leading-normal">
                      Áp dụng cho các giao dịch chứng khoán cơ sở được thực hiện
                      qua nền tảng giao dịch của UPS. Không áp dụng cho giao
                      dịch margin và các sản phẩm tài chính khác
                    </p>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="w-full group">
                  <div
                    class="h-[213px] flex flex-col justify-between items-start gap-3 p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-[linear-gradient(101deg,rgba(123,87,255,0.80)_10.03%,rgba(178,87,255,0.80)_101.84%)] hover:text-white transition-colors duration-300"
                  >
                    <div class="flex items-center gap-[12px]">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          class="transition-colors duration-300 group-hover:stroke-white"
                        >
                          <path
                            d="M10.6665 3.49219V7.49219"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.3335 3.49219V7.49219"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.6665 12.9453H27.3332"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28 12.1589V23.4922C28 27.4922 26 30.1589 21.3333 30.1589H10.6667C6 30.1589 4 27.4922 4 23.4922V12.1589C4 8.15885 6 5.49219 10.6667 5.49219H21.3333C26 5.49219 28 8.15885 28 12.1589Z"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.9938 19.0885H16.0058"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.0592 19.0885H11.0712"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.0592 23.0885H11.0712"
                            class="transition-colors duration-300 group-hover:stroke-white"
                            stroke="#111111"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </i>
                      <p
                        class="font-BG text-[24px] font-semibold leading-normal text-left"
                      >
                        Thời gian áp dụng
                      </p>
                    </div>
                    <p class="font-HG text-[18px] leading-normal">
                      Từ 15/09/2024
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <div
            class="flex flex-col 3xl:flex-row items-start gap-3 3xl:w-[1042px] 3xl:gap-[60px]"
          >
            <p
              class="font-BG text-[14px] font-semibold leading-normal 3xl:text-[24px]"
            >
              Quy định khác
            </p>
            <div class="flex flex-col gap-6">
              <p class="font-HG text-[12px] leading-normal 3xl:text-[18px]">
                UPS có quyền từ chối hoặc hủy bỏ ưu đãi nếu phát hiện khách hàng
                có hành vi gian lận hoặc vi phạm quy định.
              </p>
              <p class="font-HG text-[12px] leading-normal 3xl:text-[18px]">
                UPS có quyền thay đổi, điều chỉnh hoặc kết thúc chương trình
                trước thời hạn và sẽ thông báo trước đến khách hàng thông qua
                các kênh thông tin chính thức.
              </p>
              <p class="font-HG text-[12px] leading-normal 3xl:text-[18px]">
                Các điều khoản và điều kiện khác tuân theo quy định hiện hành
                của UPS và pháp luật Việt Nam.
              </p>
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
