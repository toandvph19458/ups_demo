<template>
	<section class="pb-[60px] lg:pb-[100px] xl:pb-[200px]">
		<client-only>
			<vue3-marquee
				:duration="30"
				:gradient="true"
				:gradient-color="[255, 255, 255]"
				gradient-length="20%"
			>
				<div
					v-for="doc in 8"
					:key="doc"
					class="ml-[100px] group"
				>
					<nuxt-img
						format="webp"
						loading="lazy"
						alt="UPS"
						height="60"
						:src="`/partner/partner-0${doc}.png`"
						class="cursor-pointer object-contain grayscale transition-all duration-200 group-hover:grayscale-0 group-hover:scale-110"
					/>
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
