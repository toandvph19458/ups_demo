<template>
  <section class="animate-ups container-nen-tang">
    <div
      class="bg-[#1D1D1F] rounded-[16px] lg:rounded-[24px] xl:rounded-[32px] xxl:rounded-[40px] w-full h-[640px] md:h-[360px] lg:h-[460px] xl:h-[520px] 2xl:h-[550px] xxl:h-[580px] 4xl:h-[600px] p-[20px_20px_0] md:p-[30px_40px_0_24px] lg:p-[39px_52px_0_30px] xl:p-[48px_60px_0_40px] 2xl:p-[63px_70px_0_50px] xxl:p-[80px_60px_0] 4xl:p-[60px_90px_0_70px] overflow-hidden"
    >
      <div
        class="flex flex-col md:flex-row items-end gap-[57px] md:gap-[44px] lg:gap-[69px] xl:gap-[63px] 2xl:gap-[43px] xxl:gap-[130px] 4xl:gap-[103px] h-full"
      >
        <div class="flex-1 md:pb-[60px] flex flex-col gap-6 lg:gap-[36px]">
          <div class="space-y-3 xl:space-y-4">
            <div
              class="text-white text-xl lg:text-[30px] xl:text-[40px] font-bold lg:leading-[1.3] 4xl:leading-[1.4]"
            >
              Hơn cả một <br />
              trải nghiệm đầu tư
            </div>
            <div class="text-[#B3B3B3] text-sm xl:text-lg font-medium">
              Tăng tốc giao dịch nhanh chóng với ứng dụng di động cá nhân hoá
              riêng cho bạn.
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <button
              class="w-[180px] bg-[#111] rounded-[9px] flex gap-[9px] p-[6px_10px] items-center"
            >
              <div class="relative size-6">
                <nuxt-img
                  src="icons/google-play-1.svg"
                  loading="lazy"
                  alt="UPS"
                  class="object-cover size-full"
                />
              </div>
              <div>
                <div
                  class="uppercase text-xs font-medium text-[rgba(255,255,255,0.57)] text-start"
                >
                  get it on
                </div>
                <div class="text-white font-base font-semibold text-start">
                  Google Play
                </div>
              </div>
            </button>

            <button
              class="w-[180px] bg-[#111] rounded-[9px] flex gap-[9px] p-[6px_10px] items-center"
            >
              <div class="relative size-6">
                <nuxt-img
                  src="icons/apple-logo-1.svg"
                  loading="lazy"
                  alt="UPS"
                  class="object-cover size-full"
                />
              </div>
              <div>
                <div
                  class="uppercase text-xs font-medium text-[rgba(255,255,255,0.57)] text-start"
                >
                  Download on the
                </div>
                <div class="text-white font-base font-semibold text-start">
                  App Store
                </div>
              </div>
            </button>
          </div>
        </div>

        <div
          class="relative w-full md:w-[320px] lg:w-[460px] xl:w-[516px] xxl:w-[570px] 4xl:w-[578px] h-full"
        >
          <nuxt-img
            src="images/nen-tang-4.png"
            loading="lazy"
            alt="UPS"
            class="object-contain absolute top-0 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 w-[296px] md:w-full h-[384px] md:h-[506px] lg:h-[660px] xl:h-[713px] 2xl:h-[698px] xxl:h-[755px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

export default defineComponent({
  name: "MobileApp",
  components: {},
  setup(props, ctx) {
    return {
      cn,
    };
  },
});
</script>

<style scoped></style>
