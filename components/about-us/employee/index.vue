<template>
  <section class="pt-10 pb-[70px] md:py-10 xl:pt-[120px] xl:pb-[60px] bg-[#EDEDF4]">
    <div class="container">
      <div class="grid grid-cols-5 gap-4 flex-col md:flex-row">
        <div class="animate-about__item col-span-5 xl:col-span-2">
          <div class="flex items-end">
            <h2
              class="animate-ups__item hidden xl:block text-[28px] lg:text-[40px] xl:text-[50px] 2xl:text-[56px] 3xl:text-[76px] font-bold font-BG text-black leading-[1.3]">
              <span>Ban</span>
              <br />
              <span class="text-[#01C159]">điều hành</span>
            </h2>

            <h2
              class="animate-ups__item block xl:hidden text-[28px] lg:text-[40px] xl:text-[50px] 2xl:text-[56px] 3xl:text-[76px] font-bold font-BG text-black leading-[1.3]">
              Ban <span class="text-[#01C159]">điều hành</span>
            </h2>

            <!-- <div
              class="animate-ups__item pl-4 pb-0 md:pb-5 xl:pb-6 inline-flex items-center justify-center relative w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]"
            >
              <nuxt-img
                format="webp"
                loading="lazy"
                width="173"
                height="78"
                alt="UPS"
                src="/logo/logo-cap-dark.png"
                class="absolute w-full h-full object-contain"
              />
            </div> -->
          </div>

          <p
            class="animate-ups__item max-w-full md:max-w-[380px] xl:max-w-[380px] text-base 3xl:text-lg text-black font-medium mt-3 md:mt-4 xl:mt-5">
            Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu đầy
            tham vọng và tạo ra những giá trị lâu dài
          </p>
        </div>

        <div class="animate-about__item col-span-5 xl:col-span-3 justify-center hidden md:flex gap-16">
          <div
            class="col-span-1 w-[300px] h-[290px] lg:h-[350px] xl:h-[300px] 2xl:h-[340px] 3xl:h-[450px] relative group overflow-hidden">
            <div class="absolute w-full h-full">
              <nuxt-img format="webp" loading="lazy" height="420" alt="UPS" src="/images/sepdat.png"
                class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 object-top" />
            </div>

            <div class="absolute bottom-0 left-0 right-0 p-[16px_12px] md:p-[20px] 3xl:px-[30px] 3xl:py-[30px]">
              <div class="">
                <nuxt-img format="webp" loading="lazy" height="24" alt="UPS" src="/logo/logo-row.svg" class="w-4 h-4 md:w-6 md:h-6" />
              </div>

              <p class="mt-2 text-base text-white font-medium">
                Tổng giám đốc
              </p>
              <h4 class="mt-1 text-[18px] md:text-[14px] xl:text-[16px] 3xl:text-xl text-white font-semibold font-BG">
                Ông Nguyễn Quang Đạt
              </h4>
            </div>
          </div>

          <!-- <div
            class="col-span-1 h-[290px] lg:h-[350px] xl:h-[300px] 2xl:h-[340px] 3xl:h-[450px] relative group overflow-hidden ">
            <div class="absolute w-full h-full ">
              <nuxt-img format="webp" loading="lazy" height="420" alt="UPS" src="/images/sepnam.png"
                class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
            </div>

            <div class="absolute bottom-0 left-0 right-0 p-[16px_12px] md:p-[20px] 3xl:px-[30px] 3xl:py-[30px]">
              <div class="">
                <nuxt-img format="webp" loading="lazy" height="24" alt="UPS" src="/logo/logo-row.svg" class="w-4 h-4 md:w-6 md:h-6" />
              </div>

              <p class="mt-2 text-base text-white font-medium">
                Phó Tổng giám đốc
              </p>
              <h4 class="mt-1 text-[18px] md:text-[14px] xl:text-[16px] 3xl:text-xl text-white font-semibold font-BG">
                Ông Trần Đức Nam
              </h4>
            </div>
          </div> -->

          <div
            class="w-[300px] col-span-1 h-[290px] lg:h-[350px] xl:h-[300px] 2xl:h-[340px] 3xl:h-[450px] relative group overflow-hidden">
            <div class="absolute w-full h-full">
              <nuxt-img format="webp" loading="lazy" height="420" alt="UPS" src="/images/sepchien.png"
                class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 object-top" />
            </div>

            <div class="absolute bottom-0 left-0 right-0 p-[16px_12px] md:p-[20px] 3xl:px-[30px] 3xl:py-[30px]">
              <div class="">
                <nuxt-img format="webp" loading="lazy" height="24" alt="UPS" src="/logo/logo-row.svg" class="w-4 h-4 md:w-6 md:h-6" />
              </div>

              <p class="mt-2 text-base text-white font-medium">
                Giám đốc tài chính
              </p>
              <h4 class="mt-1 text-[18px] md:text-[14px] xl:text-[16px] 3xl:text-xl text-white font-semibold font-BG">
                Ông Trần Văn Chiến
              </h4>
            </div>
          </div>
        </div>

        <div class="animate-about__item col-span-5 block md:hidden xl:hidden mt-[30px] md:mt-10 w-full h-[350px] flex-none">
          <swiper :modules="[SwiperNavigation]" :pagination="true" :slides-per-view="1.4" :loop="false" :speed="800"
            :space-between="12" :breakpoints="{
              480: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              992: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }">
            <swiper-slide>
              <div class="animate-ups__item w-full h-[371px] relative group overflow-hidden">
                <div class="absolute w-full h-full">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/images/sepdat.png"
                    class="w-full object-cover transition-all duration-300 object-center " />
                </div>
                <div
                  class="absolute h-[110px] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_8.9%,#000_100%)] bottom-0">

                </div>
                <div class="absolute bottom-0 left-0 right-0 p-[16px_12px] md:p-[20px] 3xl:px-[30px] 3xl:py-[30px]">
                  <div class="">
                    <nuxt-img format="webp" loading="lazy" height="24" alt="UPS" src="/logo/logo-row.svg" class="w-4 h-4 md:w-6 md:h-6" />
                  </div>

                  <p class="mt-2 text-base text-white font-medium">
                    Tổng giám đốc
                  </p>
                  <h4 class="mt-1 text-lg xl:text-xl text-white font-bold font-BG">
                    Ông Nguyễn Quang Đạt
                  </h4>
                </div>
              </div>
            </swiper-slide>

            <!-- <swiper-slide>
              <div class="animate-ups__item w-full h-[371px] relative group overflow-hidden">
                <div class="absolute w-full h-full">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/images/sepnam.png"
                    class="w-full  object-cover transition-all duration-300 object-center" />
                </div>
                <div
                  class="absolute h-[110px] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_8.9%,#000_100%)] bottom-0">

                </div>
                <div class="absolute bottom-0 left-0 right-0 p-[16px_12px] md:p-[20px] 3xl:px-[30px] 3xl:py-[30px]">
                  <div class="">
                    <nuxt-img format="webp" loading="lazy" height="24" alt="UPS" src="/logo/logo-row.svg" class="w-4 h-4 md:w-6 md:h-6" />
                  </div>

                  <p class="mt-2 text-base text-white font-medium">
                    Phó Tổng giám đốc
                  </p>
                  <h4 class="mt-1 text-lg xl:text-xl text-white font-bold font-BG">
                    Ông Trần Đức Nam
                  </h4>
                </div>
              </div>
            </swiper-slide> -->
            <swiper-slide>
              <div class="animate-ups__item w-full h-[371px] relative group overflow-hidden">
                <div class="absolute w-full h-full">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/images/sepchien.png"
                    class="w-full  object-cover transition-all duration-300 object-center" />
                </div>
                <div
                  class="absolute h-[110px] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_8.9%,#000_100%)] bottom-0">

                </div>
                <div class="absolute bottom-0 left-0 right-0 p-[16px_12px] md:p-[20px] 3xl:px-[30px] 3xl:py-[30px]">
                  <div class="">
                    <nuxt-img format="webp" loading="lazy" height="24" alt="UPS" src="/logo/logo-row.svg" class="w-4 h-4 md:w-6 md:h-6" />
                  </div>

                  <p class="mt-2 text-base text-white font-medium">
                    Giám đốc tài chính
                  </p>
                  <h4 class="mt-1 text-lg xl:text-xl text-white font-bold font-BG">
                    Ông Trần Văn Chiến
                  </h4>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <!-- /// -->
      <!-- <div class="mt-20 hidden md:grid xl:grid gap-4 grid-cols-5">
				<div
					v-for="i in 5"
					:key="i"
					class="flex flex-col group"
				>
					<div class="aspect-square overflow-hidden">
						<nuxt-img
							format="webp"
							loading="lazy"
							width="310"
							alt="UPS"
							src="/images/employee-02.png"
							class="aspect-square object-cover transition-all duration-300 group-hover:scale-110"
						/>
					</div>

					<div
						class="relative w-[calc(100%-30px)] h-auto ml-[30px] px-8 py-4 bg-white cursor-pointer transition-all duration-300 group-hover:bg-[#0AB157]"
					>
						<div
							class="absolute left-[-30px] top-0 w-[50px] h-[50px] inline-flex items-center justify-center bg-[#15171E]"
						>
							<nuxt-img
								format="webp"
								loading="lazy"
								height="24"
								alt="UPS"
								src="/logo/logo-row.svg"
							/>
						</div>

						<p class="text-sm text-[#696B75] text-right group-hover:text-white">#Ban điều hành UPS</p>
						<h4 class="mt-6 text-lg text-black font-semibold">Trịnh Trần Tuấn Anh</h4>
						<p class="text-sm text-[#696B75] font-medium group-hover:text-white">Ban quản trị</p>

						<div class="flex justify-end">
							<nuxt-img
								format="webp"
								loading="lazy"
								height="40"
								alt="UPS"
								src="/icons/arrow-icon.svg"
							/>
						</div>
					</div>
				</div>
			</div> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";

export default defineComponent({
  name: "employee",
  components: {},
  setup(props, ctx) {
    return {
      SwiperNavigation,
    };
  },
});
</script>
