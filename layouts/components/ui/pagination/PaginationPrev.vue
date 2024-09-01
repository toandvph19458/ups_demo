<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationPrev, type PaginationPrevProps } from "radix-vue";
import { ChevronLeft } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes["class"] }>(), {
	asChild: true,
});

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>

<template>
	<PaginationPrev v-bind="delegatedProps">
		<Button :class="cn('w-10 h-10 p-0', props.class)">
			<slot>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="13"
					viewBox="0 0 30 13"
					fill="none"
				>
					<path
						d="M0.969669 5.96967C0.676775 6.26256 0.676775 6.73743 0.969669 7.03033L5.74264 11.8033C6.03553 12.0962 6.51041 12.0962 6.8033 11.8033C7.09619 11.5104 7.09619 11.0355 6.8033 10.7426L2.56066 6.5L6.8033 2.25736C7.09619 1.96446 7.09619 1.48959 6.8033 1.1967C6.51041 0.903804 6.03553 0.903804 5.74264 1.1967L0.969669 5.96967ZM29.5 5.75L1.5 5.75L1.5 7.25L29.5 7.25L29.5 5.75Z"
						fill="black"
					/>
				</svg>
			</slot>
		</Button>
	</PaginationPrev>
</template>
