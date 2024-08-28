<template>
	<div class="w-full h-full">
		<!-- UPS SLIDER -->
		<ups-slider />


		<!-- UPS POLICY -->
		<ups-policy />

		<!-- UPS SERVICE -->
		<ups-service />

		<!-- UPS QUESTION -->
		<ups-question />

		<!-- UPS NEWS -->
		<ups-news />

		<!-- UPS GLOBAL -->
		<ups-global />

		<!-- UPS PARTNER -->
		<ups-partner />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpsSlider from "~/components/home/ups-slider/index.vue";
import UpsPolicy from "~/components/home/ups-policy/index.vue";
import UpsService from "~/components/home/ups-service/index.vue";
import UpsNews from "~/components/home/ups-news/index.vue";
import UpsGlobal from "~/components/home/ups-global/index.vue";
import UpsQuestion from "~/components/home/ups-question/index.vue";
import UpsPartner from "~/components/home/ups-partner/index.vue";

export default defineComponent({
	name: "home-page",
	components: {
		UpsSlider,
		UpsPolicy,
		UpsService,
		UpsNews,
		UpsGlobal,
		UpsQuestion,
		UpsPartner,
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
