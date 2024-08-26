<template>
	<div
		id="smooth-wrapper"
		class="w-full h-full"
	>
			<!-- HOVER CHUỘT -->
			<cursor-dot />

		<!--@@@ THE HEADER -->
		<the-header />
		<!--@@@ MAIN -->
		<div
			id="smooth-content"
			class="mt-[90px]"
		>
			<slot />
		</div>
		<!--@@@ THE FOOTER  -->
		<the-footer />

	
	</div>

	
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/common/the-header/index.vue";
import TheFooter from "@/components/common/the-footer/index.vue";
import CursorDot from '@/components/common/cursor-dot/index.vue'

export default defineComponent({
	name: "layout-default",
	components: {
		TheHeader,
		TheFooter,
		CursorDot,
	},
	setup(props, ctx) {},
});
</script>

<style></style>
