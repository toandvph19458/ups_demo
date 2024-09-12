<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./components/banner.vue";
import Slider from "./components/slider.vue";
import feature from "./components/feature.vue";
import question from "./components/question.vue";

export default defineComponent({
	name: "san-pham",
	components: {
		Banner,
		Slider,
		feature,
		question,
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
		<!-- banner -->
		<banner />
		<!-- slider -->
		<slider />
		<!-- tinh-nang -->
		<feature />
		<!-- thong tin lien he -->
		<div
			class="flex flex-col md:flex-row md:px-[60px] md:py-6 p-6 gap-3 xl:p-[24px_100px] lg:p-[24px_60px] lg:gap-10 3xl:p-[40px_160px] 2xl:p-[24px_120px] justify-between items-center bg-[linear-gradient(269deg,_#FF76E1_3.83%,_rgba(255,_85,_17,_0.80)_98.43%)] animate-ups w-full">
			<p
				class=" text-[#faf7f7] font-BG text-[14px] xl:text-[24px] md:text-[14px] 2xl:text-[28px] 3xl:text-[32px] lg:text-[20px] font-semibold leading-normal animate-ups__item">
				Để biết thêm chi tiết về sản phẩm Margin T+3 hoặc cần hỗ trợ đăng ký, hãy liên hệ với chúng tôi:
			</p>

			<div class="flex flex-col justify-center items-center gap-2 lg:w-2/3">
				<div class="flex items-center gap-[12px] self-stretch">
					<div class="2xl:w-6 2xl:h-6 relative h-4 w-4 xl:h-5 xl:w-5">
						<nuxt-img src="/icons/call-white.svg" class="absolute w-full h-full animate-ups__item" />
					</div>
					<p
						class="2xl:text-[18px] xl:text-[14px] md:text-[12px] lg:text-[14px] text-[16px] text-white font-normal animate-ups__item font-BG">
						(+84.24) 3 944 6666
					</p>
				</div>
				<div class="flex items-center gap-[12px] self-stretch">
					<div class="2xl:w-6 2xl:h-6 relative h-4 w-4 xl:h-5 xl:w-5">
						<nuxt-img src="/icons/sms-tracking-white.svg"
							class="absolute w-full h-full animate-ups__item" />
					</div>
					<p
						class="2xl:text-[18px] xl:text-[14px] md:text-[12px] lg:text-[14px] text-[16px] text-white font-normal animate-ups__item font-BG">
						investmentbanking@upse.com.vn
					</p>
				</div>
				<div class="flex items-center gap-[12px] self-stretch">
					<div class="2xl:w-6 2xl:h-6 relative h-4 w-4 xl:h-5 xl:w-5">
						<nuxt-img src="/icons/global-white.svg" class="absolute w-full h-full animate-ups__item" />
					</div>
					<p
						class="2xl:text-[18px] xl:text-[14px] md:text-[12px] lg:text-[14px] text-[16px] text-white font-normal animate-ups__item font-BG">
						Tầng 8 - Tòa nhà Harpo - Số 11B Cát Linh - Phường Quốc Tử Giám - Quận Đống Đa - Hà Nội
					</p>
				</div>
			</div>
		</div>
		<!-- cau hoi thuong gap -->
		<question />
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
