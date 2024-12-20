<template>
  <section
    class="container-nen-tang xxl:mt-[100px] mt-6 md:mt-10 xl:mt-20 4xl:mt-[120px]"
  >
    <h1
      class="text-center text-[20px] lg:text-[30px] xl:text-[40px] xxl:text-[48px] font-bold text-[#141414]"
    >
      Nền tảng đầu tư <br />
      xây dựng theo
      <span class="text-[#D1AB47]">tiêu chuẩn toàn cầu</span>
    </h1>
    <div
      class="mt-6 xl:mt-[50px] xxl:mt-[60px] flex flex-col md:grid md:grid-cols-[auto,236px] lg:grid-cols-[auto,310px] xl:grid-cols-[auto,380px] gap-3 lg:gap-4 xl:gap-6"
    >
      <!-- First Card -->
      <div
        class="rounded-[24px] bg-[#FBF5E5] px-4 py-9 md:p-9 lg:py-[42px] lg:px-[55px] xxl:px-[88px] xl:px-[77px] xl:py-[50px] 4xl:px-20 4xl:py-[60px]"
      >
        <h4
          class="lg:text-[24px] text-[20px] xl:text-[32px] font-bold text-[#141414]"
        >
          Giao dịch trực tuyến
          <span class="text-[#D1AB47]">nhanh chóng</span>
        </h4>
        <div
          class="relative mt-3 lg:mt-4 xl:mt-5 xxl:mt-6 4xl:mt-7 pt-[3%] md:pt-0 md:h-[296px] lg:h-[376px] xl:h-[416px] xxl:h-[516px] 4xl:h-[548px] w-full"
        >
          <nuxt-img
            src="/images/ntcn1.png"
            loading="lazy"
            alt="UPS"
            class="object-cover"
          />
        </div>
      </div>

      <div class="flex flex-col gap-3 lg:gap-4 xl:gap-6">
        <!-- Second Card 1 -->
        <div
          class="rounded-[24px] bg-[#1D1D1F] flex flex-col justify-center items-center text-center py-[50px] lg:py-20 xl:py-[87px] xxl:py-[100px]"
        >
          <span class="text-sm font-medium text-[rgba(255,255,255,0.50)]">
            #baomatcao
          </span>
          <p
            class="xl:mt-2 text-[24px] xl:text-[32px] xxl:text-[40px] font-bold xl:leading-[48px] text-transparent"
            :style="{
              background:
                'radial-gradient(264.71% 50% at 50% 50%, #DABB6B 0%, #FDF2CB 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }"
          >
            Bảo vệ thông tin <br />
            khách hàng
          </p>
        </div>

        <!-- Second Card 2 -->
        <div
          class="rounded-[24px] px-[89px] md:px-9 pt-6 xl:px-[42px] xl:pt-7 text-center h-[194px] md:h-[205px] lg:h-[246px] xl:h-[278px] 2xl:h-[285px] xxl:h-[348px] 4xl:h-[395px] overflow-hidden"
          :style="{
            background:
              'linear-gradient(180deg, rgba(230, 206, 141, 0.00) 0%, rgba(230, 206, 141, 0.30) 100%), #F7F7F7',
          }"
        >
          <span class="text-[14px] font-medium text-[rgba(0,0,0,0.50)]">
            App Trading
          </span>
          <h4
            class="2xl:mt-2 mt-1 text-base lg:text-[18px] xl:text-[20px] xxl:text-[24px] font-bold xxl:leading-[32px] text-[#000]"
          >
            Ứng dụng tuyệt vời <br />
            cho người mới
          </h4>
          <div
            class="relative mx-auto xl:mt-5 xxl:mt-6 4xl:mt-7 lg:mt-6 mt-[10px] h-[276px] lg:h-[408px] xl:h-[480px] xxl:h-[500px] w-full"
          >
            <nuxt-img
              src="/images/ntcn2.png"
              loading="lazy"
              alt="UPS"
              class="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

export default defineComponent({
  name: "DauTu",
  components: {},
  setup(props, ctx) {
    return {
      cn,
    };
  },
});
</script>

<style scoped></style>
