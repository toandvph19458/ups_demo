<template>
  <section
    class="-mt-4 animate-ups"
    :style="{
      background:
        'radial-gradient(29.93% 48.26% at 50% 53.95%, #837848 0%, #000 100%)',
    }"
  >
    <div
      class="animate-ups__item container-nen-tang 3xl:!max-w-[calc(1440px+48px)] pb-7 md:pb-5 xxl:pb-9 4xl:pb-11 lg:pt-[70px] pt-[60px] xl:pt-20"
    >
      <div class="flex flex-col items-center justify-center">
        <div>
          <p
            class="text-[30px] lg:text-[40px] xl:text-[44px] text-center font-bold leading-normal tracking-[-0.88px] text-[#FFF]"
          >
            Nền tảng công nghệ
            <span
              class="text-transparent"
              :style="{
                background:
                  'radial-gradient(1952.95% 60.53% at 63.86% 39.47%, #FDF2CB 0%, #DABB6B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }"
            >
              <br class="md:hidden block" />
              vượt trội.
            </span>
          </p>
        </div>
        <div
          class="my-3 md:my-4 lg:my-5 h-[1px] w-[140px] md:w-[370px] bg-[#FDF2CB]"
        ></div>
        <p
          class="font-bold md:text-base text-sm tracking-[-0.35px] md:tracking-[-0.42px] text-[rgba(255,255,255,0.60)]"
        >
          Bền bỉ - nhanh chóng - thuận tiện - dễ dàng
        </p>
      </div>
      <div
        class="relative mx-auto mt-2 md:mt-5 lg:mt-[30px] xl:mt-11 xxl:mt-[54px] 4xl:mt-16 h-[200px] md:h-[300px] lg:h-[449px] xl:h-[540px] xxl:h-[628px] 4xl:h-[658px] w-full"
      >
        <nuxt-img
          src="/images/banner-nen-tang.png"
          loading="lazy"
          alt="UPS"
          class="object-contain absolute w-full h-full"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

export default defineComponent({
  name: "Banner",
  components: {},
  setup(props, ctx) {
    return {
      cn,
    };
  },
});
</script>

<style scoped></style>
