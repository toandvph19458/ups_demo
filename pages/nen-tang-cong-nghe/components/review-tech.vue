<template>
  <section class="animate-ups container-nen-tang">
    <div class="flex items-center justify-between w-full lg:h-[48px]">
      <div
        class="text-[#111013] text-xl lg:text-2xl xl:text-[30px] font-bold mb-6 md:mb-0"
      >
        Đánh giá từ khách hàng
      </div>
      <div class="hidden md:flex items-center gap-2">
        <button
          :class="
            cn(
              `h-8 xxl:h-10 px-4 xxl:px-6 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
              {
                'cursor-auto': !vSwiperIndex,
              }
            )
          "
          @click="prevVSwiperSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
          >
            <path
              d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM15.1421 6.75C15.5563 6.75 15.8921 6.41421 15.8921 6C15.8921 5.58579 15.5563 5.25 15.1421 5.25V6.75ZM1 6.75H15.1421V5.25H1V6.75Z"
              fill="#02E56A"
              :class="
                cn('transition-all duration-300 group-hover:fill-[#15171E]', {})
              "
            />
          </svg>
        </button>

        <button
          :class="
            cn(
              `h-8 xxl:h-10 px-4 xxl:px-6 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
              {
                'cursor-auto': vSwiperIndex === 2,
              }
            )
          "
          @click="nextVSwiperSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M1.14215 5.25C0.727937 5.25 0.392151 5.58579 0.392151 6C0.392151 6.41421 0.727937 6.75 1.14215 6.75V5.25ZM15.8146 6.53033C16.1075 6.23744 16.1075 5.76256 15.8146 5.46967L11.0416 0.696699C10.7488 0.403806 10.2739 0.403806 9.98099 0.696699C9.68809 0.989593 9.68809 1.46447 9.98099 1.75736L14.2236 6L9.98099 10.2426C9.68809 10.5355 9.68809 11.0104 9.98099 11.3033C10.2739 11.5962 10.7488 11.5962 11.0416 11.3033L15.8146 6.53033ZM1.14215 6.75H15.2843V5.25H1.14215V6.75Z"
              fill="#02E56A"
              :class="
                cn('transition-all duration-300 group-hover:fill-[#15171E]', {
                  'group-hover:fill-[#15171E]': vSwiperIndex === 2,
                })
              "
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="hidden md:block md:m-[20px_0_24px] lg:m-[12px_0_32px] xl:m-[20px_0_40px] w-full h-[1px] bg-[#60606B]"
    ></div>

    <div class="w-full min-h-[327px] 4xl:h-[460px]">
      <swiper
        :modules="[SwiperNavigation]"
        :pagination="true"
        :slides-per-view="1"
        :loop="false"
        :speed="800"
        :space-between="12"
        :initial-slide="vSwiperIndex"
        @swiper="setVSwiperRef"
        @slide-change="updateVSwiperIndex"
        class="h-full"
        :breakpoints="{
          375: {
            slidesPerView: 1.3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }"
      >
        <swiper-slide :key="1" class="h-full">
          <div
            class="p-5 lg:p-6 xl:p-[30px] xxl:p-10 bg-[#fbf5e5]/70 rounded-[16px] flex flex-col gap-[60px] xl:gap-[80px] 4xl:gap-0 justify-between h-full"
          >
            <div class="flex items-center gap-[15px]">
              <div class="relative size-[56px] overflow-hidden rounded-full">
                <nuxt-img
                  src="/images/Avatar.png"
                  loading="lazy"
                  alt="UPS"
                  class="object-cover size-full"
                />
              </div>
              <div>
                <div class="text-[#111013] text-lg font-medium">Viết bởi</div>
                <div
                  class="text-[#111013] text-sm lg:text-[22px] font-semibold"
                >
                  Mạc Nhật Huy
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 xl:gap-3 xxl:gap-4">
              <div class="text-[#161519] text-sm font-medium">
                12 Tháng 12, 2024 · 9 phút trước
              </div>
              <div
                class="text-black text-xl lg:text-2xl xl:text-[30px] xxl:text-[32px] font-bold xl:leading-[1.3] xxl:leading-[40px] line-clamp-2"
              >
                Ứng dụng tuyệt vời cho người mới
              </div>
              <div
                class="text-[#111013] text-sm lg:text-base xl:text-lg font-medium line-clamp-2"
              >
                Chỉ mất 5 phút tải nhưng tôi thực sự ấn tượng về trải nghiệm sử
                dụng này
              </div>

              <div class="flex items-center gap-2">
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  App Mobile
                </div>
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  Trải nghiệm
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide :key="2" class="h-full">
          <div
            class="p-5 lg:p-6 xl:p-[30px] xxl:p-10 bg-[#fbf5e5]/70 rounded-[16px] flex flex-col gap-[60px] xl:gap-[80px] 4xl:gap-0 justify-between h-full"
          >
            <div class="flex items-center gap-[15px]">
              <div class="relative size-[56px] overflow-hidden rounded-full">
                <nuxt-img
                  src="/images/Avatar-2.png"
                  loading="lazy"
                  alt="UPS"
                  class="object-cover size-full"
                />
              </div>
              <div>
                <div class="text-[#111013] text-lg font-medium">Viết bởi</div>
                <div
                  class="text-[#111013] text-sm lg:text-[22px] font-semibold"
                >
                  Cao Tùng Lâm
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 xl:gap-3 xxl:gap-4">
              <div class="text-[#161519] text-sm font-medium">
                14 Tháng 12, 2024 · 9 phút trước
              </div>
              <div
                class="text-black text-xl lg:text-2xl xl:text-[30px] xxl:text-[32px] font-bold xl:leading-[1.3] xxl:leading-[40px] line-clamp-2"
              >
                Giao diện trực quan, tính năng hữu ích.
              </div>
              <div
                class="text-[#111013] text-sm lg:text-base xl:text-lg font-medium line-clamp-2"
              >
                Tôi không ngờ một ứng dụng đơn giản như vậy lại mang lại nhiều
                giá trị đến thế.
              </div>

              <div class="flex items-center gap-2">
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  App Mobile
                </div>
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  Trải nghiệm
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide :key="3" class="h-full">
          <div
            class="p-5 lg:p-6 xl:p-[30px] xxl:p-10 bg-[#fbf5e5]/70 rounded-[16px] flex flex-col gap-[60px] xl:gap-[80px] 4xl:gap-0 justify-between h-full"
          >
            <div class="flex items-center gap-[15px]">
              <div class="relative size-[56px] overflow-hidden rounded-full">
                <nuxt-img
                  src="/images/Avatar-3.png"
                  loading="lazy"
                  alt="UPS"
                  class="object-cover size-full"
                />
              </div>
              <div>
                <div class="text-[#111013] text-lg font-medium">Viết bởi</div>
                <div
                  class="text-[#111013] text-sm lg:text-[22px] font-semibold"
                >
                  Bùi Hồng Sơn
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 xl:gap-3 xxl:gap-4">
              <div class="text-[#161519] text-sm font-medium">
                26 Tháng 11, 2024 · 9 phút trước
              </div>
              <div
                class="text-black text-xl lg:text-2xl xl:text-[30px] xxl:text-[32px] font-bold xl:leading-[1.3] xxl:leading-[40px] line-clamp-2"
              >
                Trải nghiệm tốt, đáng để thử cho người mới.
              </div>
              <div
                class="text-[#111013] text-sm lg:text-base xl:text-lg font-medium line-clamp-2"
              >
                Tôi đã tải nhiều ứng dụng khác nhưng đây là ứng dụng gây ấn
                tượng nhất.
              </div>

              <div class="flex items-center gap-2">
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  App Mobile
                </div>
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  Trải nghiệm
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide :key="4" class="h-full">
          <div
            class="p-5 lg:p-6 xl:p-[30px] xxl:p-10 bg-[#fbf5e5]/70 rounded-[16px] flex flex-col gap-[60px] xl:gap-[80px] 4xl:gap-0 justify-between h-full"
          >
            <div class="flex items-center gap-[15px]">
              <div class="relative size-[56px] overflow-hidden rounded-full">
                <nuxt-img
                  src="/images/Avatar-4.png"
                  loading="lazy"
                  alt="UPS"
                  class="object-cover size-full"
                />
              </div>
              <div>
                <div class="text-[#111013] text-lg font-medium">Viết bởi</div>
                <div
                  class="text-[#111013] text-sm lg:text-[22px] font-semibold"
                >
                  Tôn Hữu Tài
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 xl:gap-3 xxl:gap-4">
              <div class="text-[#161519] text-sm font-medium">
                26 Tháng 10, 2024 · 9 phút trước
              </div>
              <div
                class="text-black text-xl lg:text-2xl xl:text-[30px] xxl:text-[32px] font-bold xl:leading-[1.3] xxl:leading-[40px] line-clamp-2"
              >
                Thân thiện với người dùng, hỗ trợ hiệu quả.
              </div>
              <div
                class="text-[#111013] text-sm lg:text-base xl:text-lg font-medium line-clamp-2"
              >
                Một trải nghiệm tuyệt vời ngay từ lần sử dụng đầu tiên.
              </div>

              <div class="flex items-center gap-2">
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  App Mobile
                </div>
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  Trải nghiệm
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide :key="5" class="h-full">
          <div
            class="p-5 lg:p-6 xl:p-[30px] xxl:p-10 bg-[#fbf5e5]/70 rounded-[16px] flex flex-col gap-[60px] xl:gap-[80px] 4xl:gap-0 justify-between h-full"
          >
            <div class="flex items-center gap-[15px]">
              <div class="relative size-[56px] overflow-hidden rounded-full">
                <nuxt-img
                  src="/images/Avatar-5.png"
                  loading="lazy"
                  alt="UPS"
                  class="object-cover size-full"
                />
              </div>
              <div>
                <div class="text-[#111013] text-lg font-medium">Viết bởi</div>
                <div
                  class="text-[#111013] text-sm lg:text-[22px] font-semibold"
                >
                  Nông Xuân Thịnh
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 xl:gap-3 xxl:gap-4">
              <div class="text-[#161519] text-sm font-medium">
                2 Tháng 12, 2024 · 9 phút trước
              </div>
              <div
                class="text-black text-xl lg:text-2xl xl:text-[30px] xxl:text-[32px] font-bold xl:leading-[1.3] xxl:leading-[40px] line-clamp-2"
              >
                Cung cấp đầy đủ tính năng cần thiết
              </div>
              <div
                class="text-[#111013] text-sm lg:text-base xl:text-lg font-medium line-clamp-2"
              >
                Tính năng vừa đủ và được thiết kế rất thông minh cho người mới
                bắt đầu.
              </div>

              <div class="flex items-center gap-2">
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  App Mobile
                </div>
                <div
                  class="bg-[#90919c]/20 p-[5px_8px] rounded-[8px] text-[#111013] text-sm font-medium"
                >
                  Trải nghiệm
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex md:hidden items-center gap-2 mt-6">
      <button
        :class="
          cn(
            `h-8 px-4 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
            {
              'cursor-auto': !vSwiperIndex,
            }
          )
        "
        @click="prevVSwiperSlide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
        >
          <path
            d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM15.1421 6.75C15.5563 6.75 15.8921 6.41421 15.8921 6C15.8921 5.58579 15.5563 5.25 15.1421 5.25V6.75ZM1 6.75H15.1421V5.25H1V6.75Z"
            fill="#02E56A"
            :class="
              cn('transition-all duration-300 group-hover:fill-[#15171E]', {})
            "
          />
        </svg>
      </button>

      <button
        :class="
          cn(
            `h-8 px-4 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
            {
              'cursor-auto': vSwiperIndex === 2,
            }
          )
        "
        @click="nextVSwiperSlide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
        >
          <path
            d="M1.14215 5.25C0.727937 5.25 0.392151 5.58579 0.392151 6C0.392151 6.41421 0.727937 6.75 1.14215 6.75V5.25ZM15.8146 6.53033C16.1075 6.23744 16.1075 5.76256 15.8146 5.46967L11.0416 0.696699C10.7488 0.403806 10.2739 0.403806 9.98099 0.696699C9.68809 0.989593 9.68809 1.46447 9.98099 1.75736L14.2236 6L9.98099 10.2426C9.68809 10.5355 9.68809 11.0104 9.98099 11.3033C10.2739 11.5962 10.7488 11.5962 11.0416 11.3033L15.8146 6.53033ZM1.14215 6.75H15.2843V5.25H1.14215V6.75Z"
            fill="#02E56A"
            :class="
              cn('transition-all duration-300 group-hover:fill-[#15171E]', {
                'group-hover:fill-[#15171E]': vSwiperIndex === 2,
              })
            "
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { onMounted, defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";
import { config } from "~/lib/config";

export default defineComponent({
  name: "ReviewTech",
  components: {},
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

    // Function to handle mouse movement
    function handleMouseMove(e: any, card: any) {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      card.style.setProperty("--start", angle + 60);
    }

    onMounted(() => {
      const cardsEl = document.querySelectorAll(".card");
      cardsEl.forEach((card: any) => {
        card.addEventListener("mousemove", (e: any) =>
          handleMouseMove(e, card)
        );
      });
    });

    const newStore = useNewsStore();

    const { data } = useAsyncData("news", async () => {
      const dataNews = await newStore.fnGetListNews();

      return {
        dataNews: dataNews.data?.data,
      };
    });
    return {
      cn,
      config,
      data,
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
