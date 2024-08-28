<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationNext, type PaginationNextProps } from "radix-vue";
import { ChevronRight } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const props = withDefaults(defineProps<PaginationNextProps & { class?: HTMLAttributes["class"] }>(), {
	asChild: true,
});

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>

<template>
	<PaginationNext v-bind="delegatedProps">
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
						d="M29.0303 7.03033C29.3232 6.73744 29.3232 6.26256 29.0303 5.96967L24.2574 1.1967C23.9645 0.903806 23.4896 0.903806 23.1967 1.1967C22.9038 1.48959 22.9038 1.96447 23.1967 2.25736L27.4393 6.5L23.1967 10.7426C22.9038 11.0355 22.9038 11.5104 23.1967 11.8033C23.4896 12.0962 23.9645 12.0962 24.2574 11.8033L29.0303 7.03033ZM0.5 7.25H28.5V5.75H0.5V7.25Z"
						fill="black"
					/>
				</svg>
			</slot>
		</Button>
	</PaginationNext>
</template>
