<template>
	<div
		id="smooth-wrapper"
		class="w-full h-full"
	>
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

export default defineComponent({
	name: "layout-default",
	components: {
		TheHeader,
		TheFooter,
	},
	setup(props, ctx) {},
});
</script>

<style></style>
