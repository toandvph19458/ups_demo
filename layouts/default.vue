<template>
	<div id="smooth-wrapper" class="w-full h-full">
		<!-- HOVER CHUỘT -->
		<!-- <cursor-dot /> -->
		<button-fixed />
		<!--@@@ THE HEADER -->
		<the-header />
		<!--@@@ MAIN -->
		<div id="smooth-content" class="mt-[64px] md:mt-[84px] xl:mt-[90px]">
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
import CursorDot from "@/components/common/cursor-dot/index.vue";
import ButtonFixed from "@/components/common/button-fixed/index.vue";
export default defineComponent({
	name: "layout-default",
	components: {
		TheHeader,
		TheFooter,
		CursorDot,
		ButtonFixed,
	},
	setup(props, ctx) {
		useHead({
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    }
  ],
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=AW-16725917125",
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16725917125');
      `,
      type: 'text/javascript'
    }
  ],
})
	},
});
</script>

<style></style>
