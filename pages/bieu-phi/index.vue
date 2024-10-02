<template>
	<section class="animate-ups">
		<!-- banner -->
		<banner />
		<!-- bảng -->
		<table-ups />


		<!-- bên dưới bảng -->
		<!-- <div class="bg-[linear-gradient(270deg,_#00D7B0_17.99%,_rgba(0,_148,_255,_0.50)_96.69%)]">
			<div
				class="layout flex md:flex-row sm:flex-col 3xl:p-[40px_160px] 2xl:p-[24px_120px] xl:p-[24px-100px] lg:p-[24px_100px] md:p-[24px-60px] lg:gap-[60px] p-6 justify-between items-center self-stretch gap-3">
				<div class="md:w-2/3 sm:w-full">
					<p
						class="text-[#15171E] text-[36px] font-BG xxl:text-[28px] xl:text-[24px] lg:text-[24px] sm:text-[16px] font-semibold leading-normal animate-ups__item">
						Để biết thêm thông tin chi tiết,<br />
						Quý Khách vui lòng liên hệ
					</p>
				</div>
				<div class="flex md:w-1/3 flex-col justify-between items-start sm:w-full animate-ups__item">
					<div class="flex items-center gap-[12px] self-stretch md:gap-2 lg:gap-3">
						<div class="">
							<nuxt-img src="/icons/call.svg" />
						</div>
						<p class="text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px]">(+84.24) 3 944 6666</p>
					</div>
					<div class="flex items-center gap-[12px] self-stretch md:gap-2 lg:gap-3">
						<div class="">
							<nuxt-img src="/icons/sms-tracking.svg" />
						</div>
						<p class="text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px]">
							investmentbanking@upse.com.vn</p>
					</div>
					<div class="flex items-center gap-[12px] self-stretch md:gap-2 lg:gap-3">
						<div class="">
							<nuxt-img src="/icons/global.svg" />
						</div>
						<p class="text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px]">www.upse.com.vn</p>
					</div>
				</div>
			</div>
		</div> -->

		<div class="2xl:p-[100px_160px] xl:p-[90px_120px] lg:p-[80px_100px] md:p-[60px_60px]  p-6">
			<!-- UPS GLOBAL -->

		</div>
		<div class="container animate-ups">
			<div class="animate-ups__item">
				<feedback />
			</div>

		</div>

		<!-- UPS PARTNER -->
		<partner-ups />


	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UpsGlobal from "~/components/home/ups-global/index.vue";
import Feedback from "~/components/common/feedback/index.vue";
import banner from "./components/banner.vue";
import tableUps from "./components/table-ups.vue";
import partnerUps from "./components/partner-ups.vue";
export default defineComponent({
	name: "bieu-phi",
	components: {
		UpsGlobal,
		banner,
		tableUps,
		partnerUps,
		Feedback,
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
<style></style>
