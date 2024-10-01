<template>
	<div>
		<nuxt-layout>
			<nuxt-page />
		</nuxt-layout>
	</div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

</script>
