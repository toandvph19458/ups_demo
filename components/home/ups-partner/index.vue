<template>
	<section class="pb-[60px] lg:pb-[100px] xl:pb-[150px]">
		<div class="flex justify-center items-center gap-2 md:gap-4 pb-[20px] md:pb-[50px]">
			<h3
				class="animate-ups__item text-[#15171E] font-BG text-[28px] lg:text-[32] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60] text-center lg:text-left font-bold">
				Đối tác của <span class="text-[#02E56A] font-bold">UPS</span></h3>
			<!-- <div class="inline-flex relative w-[80px] h-[40px] md:w-[145px] md:h-[66px] xl:w-[132px] xl:h-[60px] mt-2">
				<nuxt-img format="webp" loading="lazy" alt="UPS" width="132" height="60" src="/logo/logo-cap-dark.png"
					class="animate-ups__item absolute w-full h-full object-cover" />
			</div> -->
			
		</div>
		<client-only>
			<vue3-marquee :duration="50" :gradient="true" :gradient-color="[255, 255, 255]" gradient-length="20%">
				<div v-for="doc in 8" :key="doc" class="mx-[32px] lg:mx-[48px] xl:mx-[80px] group py-2">
					<nuxt-img format="webp" loading="lazy" alt="UPS" height="60" :src="`/partner/partner-0${doc}.png`"
						class="cursor-pointer object-contain transition-all duration-200 grayscale group-hover:grayscale-0 group-hover:scale-110" />
				</div>
			</vue3-marquee>
		</client-only>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ups-partner",
	components: {},
	setup(props, ctx) {
		const colorMode = useColorMode();
		return {
			colorMode,
		};
	},
});
</script>
