<template>
  <section class="animate-ups mt-11 relative">
    <div class="hidden xl:block 3xl:px-4 3xl:py-6 px-2 py-4 bg-[#15171E] absolute left-0 bottom-0">
      <nuxt-img loading="lazy" src="/logo/logo-row.png" width="38" height="38" alt="UPS" />
    </div>

    <div class="w-[calc(100%-24px)] md:w-full lg:ml-auto xl:ml-auto mr-0">
      <div class="pt-0 xl:pt-[80px] 3xl:pt-[100px]">
        <swiper :modules="[SwiperNavigation]" :slides-per-view="1" :loop="false" :speed="800" :space-between="32"
          :initial-slide="vSwiperIndex" @swiper="setVSwiperRef" @slide-change="updateVSwiperIndex">
          <!-- <swiper-slide>
            <div
              class="relative w-full 3xl:h-[856px] flex flex-row-reverse md:flex-row flex-wrap xl:flex-nowrap pl-6 lg:pl-10 xl:pl-0 gap-10 md:gap-12 xl:gap-10 3xl:gap-[56px] items-center">
              <div>
                <div class="xl:basis-1/2 basis-full">
                  <div class="3xl:ml-[92px] xl:ml-[24px] ml-0">
                    <div
                      class="inline-flex relative w-[79px] h-[36px] lg:w-[145px] lg:h-[66px] xl:w-[220px] xl:h-[100px] ">
                      <img alt="UPS" src="/logo/logo-cap-dark.png" width="230" height="100"
                        class=" w-full h-full object-cover" />
                    </div>

                    <div class="my-3 lg:my-8">
                      <h2
                        class="animate-ups__item text-lg md:text-[32px] 2xl:text-[36px] 3xl:text-[48px] font-bold font-BG">
                        Chính thức ra mắt
                      </h2>
                      <h2
                        class="animate-ups__item text-2xl md:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-bold font-BG bg-gradient-to-l from-[#02E56A] via-[#01A34B] to-[#01A34B] bg-clip-text text-transparent capitalize leading-loose">
                        Dẫn lối hành trình đầu tư
                      </h2>

                      <p
                        class="animate-ups__item mr-0 md:mr-20 xl:mr-32 text-[12px] md:text-[14px] 2xl:text-sm 3xl:text-lg text-[#3C4052] font-medium">
                        UPS là công ty đầu tư chứng khoán đột phá dành cho thế hệ
                        nhà đầu tư mới, nơi công nghệ và tư duy đổi mới, sáng tạo
                        hợp nhất để đem lại trải nghiệm đầu tư thông minh, dễ dàng,
                        và thú vị.
                      </p>
                    </div>

                    <div class="btn-wrapper flex gap-5 items-center mt-6 md:mt-10 pl-1 pb-2">
                      <div class="inline-flex animate-ups__item">
                        <nuxt-link to="/" class="btn active group">
                          <span> Mở tài khoản ngay </span>
                          <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                            <i class="w-full h-full group-hover:inline-flex hidden absolute">
                              <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                                alt="UPS" />
                            </i>

                            <i class="w-full h-full group-hover:hidden inline-flex absolute">
                              <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                            </i>
                          </div>
                        </nuxt-link>
                      </div>

                      <nuxt-link to="/" class="btn group animate-ups__item border border-[#fff] hover:border-[#222]">
                        <span class="hidden md:inline-block"> Đăng nhập/Giao dịch ngay </span>
                        <span class="inline-block md:hidden"> Giao dịch ngay </span>
                        <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                          <i class="w-full h-full inline-flex absolute">
                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                              alt="UPS" />
                          </i>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="absolute top-0 left-0 right-0 w-full">
                <div
                  class="w-full relative h-[240px] xl:h-[473px] md:h-[676px] 2xl:h-[492px] 3xl:h-[856px] rounded-[16px] md:rounded-e-[0] md:rounded-s-[40px]">
                  <nuxt-img fit="cover" loading="lazy" src="/images/image-5.png" height="656" alt="UPS"
                    class="absolute top-0 left-0 right-0 w-full h-full object-cover md:object-cover animate-ups__item" />
                </div>
              </div>
            </div>
          </swiper-slide> -->
          <swiper-slide>
            <div
              class="flex flex-row-reverse md:flex-row flex-wrap xl:flex-nowrap pl-6 lg:pl-10 xl:pl-0 gap-10 md:gap-12 xl:gap-10 3xl:gap-[56px] items-center">
              <div class="xl:basis-1/2 basis-full">
                <div class="3xl:ml-[92px] xl:ml-[24px] ml-0">
                  <div
                    class="inline-flex relative w-[79px] h-[36px] lg:w-[145px] lg:h-[66px] xl:w-[220px] xl:h-[100px] ">
                    <img alt="UPS" src="/logo/logo-cap-dark.png" width="230" height="100"
                      class=" w-full h-full object-cover" />
                  </div>

                  <div class="my-3 lg:my-8">
                    <h2
                      class="animate-ups__item text-lg md:text-[32px] 2xl:text-[36px] 3xl:text-[48px] font-bold font-BG">
                      Chính thức ra mắt
                    </h2>
                    <h2
                      class="animate-ups__item text-2xl md:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-bold font-BG bg-gradient-to-l from-[#02E56A] via-[#01A34B] to-[#01A34B] bg-clip-text text-transparent capitalize leading-loose">
                      Dẫn lối hành trình đầu tư
                    </h2>

                    <p
                      class="animate-ups__item mr-0 md:mr-20 xl:mr-32 text-[12px] md:text-[14px] 2xl:text-sm 3xl:text-lg text-[#3C4052] font-medium">
                      UPS là công ty đầu tư chứng khoán đột phá dành cho thế hệ
                      nhà đầu tư mới, nơi công nghệ và tư duy đổi mới, sáng tạo
                      hợp nhất để đem lại trải nghiệm đầu tư thông minh, dễ dàng,
                      và thú vị.
                    </p>
                  </div>

                  <div class="btn-wrapper flex gap-5 items-center mt-6 md:mt-10 pl-1 pb-2">
                    <div class="inline-flex animate-ups__item">
                      <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info" class="btn active group">
                        <span> Mở tài khoản ngay </span>
                        <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                          <i class="w-full h-full group-hover:inline-flex hidden absolute">
                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                              alt="UPS" />
                          </i>

                          <i class="w-full h-full group-hover:hidden inline-flex absolute">
                            <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                          </i>
                        </div>
                      </nuxt-link>
                    </div>

                    <nuxt-link to="https://webtrading.upse.vn/" class="btn group animate-ups__item border border-[#fff] hover:border-[#222]">
                      <span class="hidden md:inline-block"> Đăng nhập/Giao dịch ngay </span>
                      <span class="inline-block md:hidden"> Giao dịch ngay </span>
                      <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                        <i class="w-full h-full inline-flex absolute">
                          <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                        </i>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="xl:basis-1/2 basis-full">
                <div
                  class="w-full relative h-[240px] xl:h-[473px] md:h-[676px] 2xl:h-[492px] 3xl:h-[656px] rounded-[16px] md:rounded-e-[0] md:rounded-s-[40px] overflow-hidden">
                  <nuxt-img fit="cover" loading="lazy" src="/images/image-1.png" height="656" alt="UPS"
                    class="absolute w-full h-full object-cover md:object-contain animate-ups__item" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="flex flex-wrap xl:flex-nowrap pl-6 lg:pl-10 xl:pl-0 gap-10 md:gap-12 xl:gap-10 3xl:gap-[56px] items-center">
              <div class="xl:basis-1/2 basis-full">
                <div class="3xl:ml-[92px] xl:ml-[24px] ml-0">
                  <div
                    class="inline-flex relative w-[79px] h-[36px] lg:w-[145px] lg:h-[66px] xl:w-[220px] xl:h-[100px] ">
                    <img alt="UPS" src="/logo/logo-cap-dark.png" width="230" height="100"
                      class=" w-full h-full object-cover" />
                  </div>
                  <div class="my-3 lg:my-8">
                    <h2
                      class="animate-ups__item text-lg md:text-[32px] 2xl:text-[36px] 3xl:text-[48px] font-bold font-BG">
                      Đầu tư không khó
                    </h2>
                    <h2
                      class="animate-ups__item flex items-center text-2xl md:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-bold font-BG bg-gradient-to-l from-[#02E56A] via-[#01A34B] to-[#01A34B] bg-clip-text text-transparent capitalize leading-loose">
                      Đã có UPS lo
                    </h2>

                    <p
                      class="animate-ups__item mr-0 md:mr-20 xl:mr-32 text-[12px] md:text-[14px] 2xl:text-sm 3xl:text-lg text-[#3C4052] font-medium">
                      UPS là công ty đầu tư chứng khoán đột phá dành cho thế hệ
                      nhà đầu tư mới, nơi công nghệ và tư duy đổi mới, sáng tạo
                      hợp nhất để đem lại trải nghiệm đầu tư thông minh, dễ dàng,
                      và thú vị.
                    </p>
                  </div>

                  <div class="btn-wrapper flex gap-5 items-center mt-6 md:mt-10 pl-1 pb-2">
                    <div class="inline-flex animate-ups__item">
                      <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info" class="btn active group">
                        <span> Mở tài khoản ngay </span>
                        <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                          <i class="w-full h-full group-hover:inline-flex hidden absolute">
                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                              alt="UPS" />
                          </i>

                          <i class="w-full h-full group-hover:hidden inline-flex absolute">
                            <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                          </i>
                        </div>
                      </nuxt-link>
                    </div>

                    <nuxt-link to="https://webtrading.upse.vn/" class="btn group animate-ups__item border border-[#fff] hover:border-[#222]">
                      <span class="hidden md:inline-block"> Đăng nhập/Giao dịch ngay </span>
                      <span class="inline-block md:hidden"> Giao dịch ngay </span>
                      <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                        <i class="w-full h-full inline-flex absolute">
                          <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                        </i>
                      </div>
                    </nuxt-link>
                  </div>
                </div>

              </div>

              <div class="xl:basis-1/2 basis-full">
                <div
                  class="w-full relative h-[240px] xl:h-[473px] md:h-[676px] 2xl:h-[492px] 3xl:h-[656px] rounded-[16px] md:rounded-e-[0] md:rounded-s-[40px] overflow-hidden">
                  <nuxt-img fit="cover" loading="lazy" src="/images/image-3.png" height="656" alt="UPS"
                    class="absolute w-full h-full object-cover md:object-contain animate-ups__item" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="flex flex-wrap xl:flex-nowrap pl-6 lg:pl-10 xl:pl-0 gap-10 md:gap-12 xl:gap-10 3xl:gap-[56px] items-center">
              <div class="xl:basis-1/2 basis-full">
                <div class="3xl:ml-[92px] xl:ml-[24px] ml-0">
                  <div class="my-3 lg:my-8">
                    <h2
                      class="animate-ups__item flex items-center text-lg md:text-[32px] 2xl:text-[36px] 3xl:text-[48px] font-bold font-BG">
                      Cùng
                      <div
                        class="inline-flex relative mx-3 w-[76px] h-[36px] lg:w-[145px] lg:h-[66px] xl:w-[130px] xl:h-[58px]">
                        <nuxt-img loading="lazy" alt="UPS" src="/logo/logo-cap-dark.png" width="130px" height="58"
                          class="link absolute w-full h-full object-contain" />
                      </div>
                    </h2>
                    <h2
                      class="animate-ups__item text-2xl md:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-bold font-BG bg-gradient-to-l from-[#02E56A] via-[#01A34B] to-[#01A34B] bg-clip-text text-transparent leading-[1.3] capitalize">
                      Kiến tạo trải nghiệm đầu tư đầy hứng khởi
                    </h2>

                    <h2
                      class="animate-ups__item text-2xl md:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-bold font-BG leading-[1.5]">
                      ngay hôm nay
                    </h2>

                    <p
                      class="animate-ups__item mr-0 md:mr-20 xl:mr-32 text-[12px] md:text-[14px] 2xl:text-sm 3xl:text-lg text-[#3C4052] font-medium">
                      UPS là công ty đầu tư chứng khoán đột phá dành cho thế hệ
                      nhà đầu tư mới, nơi công nghệ và tư duy đổi mới, sáng tạo
                      hợp nhất để đem lại trải nghiệm đầu tư thông minh, dễ dàng,
                      và thú vị.
                    </p>
                  </div>

                  <div class="btn-wrapper flex gap-5 items-center mt-6 md:mt-10 pl-1 pb-2">
                    <div class="inline-flex animate-ups__item">
                      <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info" class="btn active group">
                        <span> Mở tài khoản ngay </span>
                        <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                          <i class="w-full h-full group-hover:inline-flex hidden absolute">
                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                              alt="UPS" />
                          </i>

                          <i class="w-full h-full group-hover:hidden inline-flex absolute">
                            <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                          </i>
                        </div>
                      </nuxt-link>
                    </div>

                    <nuxt-link to="https://webtrading.upse.vn/" class="btn group animate-ups__item border border-[#fff] hover:border-[#222]">
                      <span class="hidden md:inline-block"> Đăng nhập/Giao dịch ngay </span>
                      <span class="inline-block md:hidden"> Giao dịch ngay </span>
                      <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                        <i class="w-full h-full inline-flex absolute">
                          <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                        </i>
                      </div>
                    </nuxt-link>
                  </div>
                </div>

              </div>

              <div class="xl:basis-1/2 basis-full">
                <div
                  class="w-full relative h-[240px] xl:h-[473px] md:h-[676px] 2xl:h-[492px] 3xl:h-[656px] rounded-[16px] md:rounded-e-[0] md:rounded-s-[40px] overflow-hidden">
                  <nuxt-img fit="cover" loading="lazy" src="/images/image-4.png" height="656" alt="UPS"
                    class="absolute w-full h-full object-cover md:object-contain animate-ups__item" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </div>
    <div class="w-full container h-20 md:h-[60px] lg:h-[100px] max-h-full flex items-start md:items-center relative">
      <div class="hidden 3xl:flex gap-3 items-center">
        <div
          class="icon-scroll relative w-5 h-7 border-[2px] border-[#9EA1AE] rounded-[25px] cursor-pointer flex items-start justify-center">
          <div class="w-[3px] h-[6px] bg-[#9EA1AE] rounded-full absolute top-0 -translate-y-full"></div>
          <div class="w-[3px] h-[3px] bg-[#9EA1AE] rounded-full absolute top-2 animate-scroll"></div>
        </div>

        <p class="text-sm font-bold bg-gradient-to-r from-[#9EA1AE] to-[#414248] bg-clip-text text-transparent">
          Cuộn xuống
        </p>
      </div>

      <div
        class="flex gap-2 absolute top-[30%] md:top-1/2 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 -translate-y-1/2">
        <template v-for="(doc, i) in 3" :key="i">
          <div :class="[
            'w-5 h-[2px] rounded-full cursor-pointer',
            vSwiperIndex == i ? 'bg-[#15171E]' : 'bg-[#C6CAD7]',
          ]" @click="() => handleChangeSlide(i)"></div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";

export default defineComponent({
  name: "ups-slider",
  components: {},
  setup(props, ctx) {
    let vSwiperRef: any = null;
    const vSwiperIndex = ref<number>(0);
    const text = ref();

    const setVSwiperRef = (swiper: any) => {
      vSwiperRef = swiper;
    };

    const handleChangeSlide = (index: number) => {
      vSwiperRef?.slideTo(index);
    };

    const updateVSwiperIndex = () => {
      vSwiperIndex.value = vSwiperRef?.activeIndex || 0;
    };

    return {
      text,
      vSwiperRef,
      vSwiperIndex,
      setVSwiperRef,
      updateVSwiperIndex,
      handleChangeSlide,
      SwiperAutoplay,
      SwiperNavigation,
    };
  },
});
</script>

<style scoped>
@keyframes scroll {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }

  10% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: translateY(12px) scale(0.5);
  }
}

.animate-scroll {
  animation: scroll 1.5s cubic-bezier(0.65, -0.55, 0.25, 1.5) infinite;
}
</style>
