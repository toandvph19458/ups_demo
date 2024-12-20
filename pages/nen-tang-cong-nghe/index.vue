<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./components/banner.vue";
import DauTu from "./components/dau-tu.vue";
import HieuNang from "./components/hieu-nang.vue";
import ChuyenKhoan from "./components/chuyen-khoan.vue";
import GiaTri from "./components/gia-tri.vue";
import MobileApp from "./components/mobile-app.vue";
import ReviewTech from "./components/review-tech.vue";

export default defineComponent({
  name: "nen-tang-cong-nghe",
  components: {
    Banner,
    DauTu,
    HieuNang,
    ChuyenKhoan,
    GiaTri,
    MobileApp,
    ReviewTech,
  },
  setup(props, ctx) {
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
  },
});
</script>

<template>
  <section>
    <div>
      <Banner />
    </div>
    <div>
      <DauTu />
    </div>
    <div>
      <HieuNang />
    </div>

    <div
      class="py-6 md:py-10 xl:py-[60px] 2xl:py-[80px] xxl:py-[100px] 4xl:py-[104px]"
    >
      <ChuyenKhoan />
    </div>

    <div class="py-6 md:py-10 xxl:py-[60px] 4xl:py-[80px]">
      <GiaTri />
    </div>

    <div class="py-6 md:py-10 xxl:py-[60px] 4xl:py-[80px]">
      <MobileApp />
    </div>
    <div class="p-[40px_0_40px] xxl:p-[60px_0_140px] 4xl:p-[80px_0_160px]">
      <ReviewTech />
    </div>
  </section>
</template>

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
