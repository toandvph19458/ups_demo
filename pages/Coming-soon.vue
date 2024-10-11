<template>
	<section class="animate-ups w-full h-full px-4 md:px-[446px] pt-[150px] pb-[309px] relative flex items-center flex-col">
	  <img src="/images/coming-soon-logo2.png" alt="" class="absolute top-0">
	  <img src="/images/coming-soon-logo.png" alt="" class="absolute bottom-0">
	  <div class="flex items-center gap-4 md:gap-[60px] flex-col relative z-50">
		<div class="animate-ups__item">
		  <p class="text-[#15171E] text-center font-BG text-[40px] md:text-[100px] font-bold leading-normal tracking-[2px] md:tracking-[4px]">
			Đang cập nhật
		  </p>
		  <p class="text-[#535662] text-center font-HG text-[14px] md:text-[18px] font-medium leading-normal">
			Nhận thông báo ngay về tính năng này khi được ra mắt
		  </p>
		</div>
		<div
		  class="animate-ups__item flex w-full md:w-[950px] p-2 md:p-[12px] items-center gap-2 md:gap-[12px] rounded-[52px] border border-[#02E56A] bg-white/60 backdrop-blur-[20px]">
		  <div class="w-full md:w-auto">
			<input type="text" placeholder="Tên của bạn"
			  class="flex w-full md:w-[280px] px-4 md:px-[24px] py-2 md:py-[12px] items-center flex-shrink-0 self-stretch rounded-[40px] bg-gray-100 backdrop-blur-[20px] outline-none">
		  </div>
		  <div
			class="flex px-4 md:px-[24px] py-2 md:py-[12px] items-center flex-[1_0_0] self-stretch rounded-[40px] bg-gray-100 backdrop-blur-[20px] ">
			<input type="text" placeholder="Email" class="w-full h-full bg-transparent outline-none">
		  </div>
		  <div class="flex px-4 md:px-[30px] py-2 md:py-[15px] items-center gap-2 md:gap-[12px] self-stretch rounded-[40px] bg-[#02E56A]">
			<button class="text-[#15171E] font-HG text-[14px] md:text-[16px] font-bold leading-normal" @click="submit">
			  Đăng ký
			</button>
		  </div>
		</div>
	  </div>
	</section>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  export default defineComponent({
	name: "coming-soon",
	components: {},
	setup(props: any, ctx: any) {
	  onMounted(() => {
		const animateUpsEl = document.querySelectorAll(".animate-ups");
  
		animateUpsEl.forEach((el) => {
		  const upsEl = el.querySelectorAll(".animate-ups__item");
		  gsap.fromTo(
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
		  gsap.fromTo(
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
  
		gsap.fromTo(
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
			  start: "top center",
			  end: "bottom center",
			  scrub: false,
			},
		  }
		);
  
		gsap.fromTo(
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
			  start: "top center",
			  end: "bottom center",
			  scrub: false,
			},
		  }
		);
	  });
	},
  });
  </script>
  
  <style></style>