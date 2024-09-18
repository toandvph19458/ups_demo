<template>
	<!--@@@ Button Fixed  -->
	<div class="fixed bottom-4 right-4 z-50">
		<transition name="slide-up">
			<div
				v-show="isListVisible"
				class="mt-2 bg-black shadow-lg rounded-full p-2 space-y-2 transform transition duration-300 ease-out mb-2 flex flex-col gap-6 px-4 py-6"
			>
				<div class="flex items-center justify-center bg-black rounded-full cursor-pointer">
					<img
						src="/icons/mess.png"
						alt="Telegram"
						class="w-[40px] h-[40px] object-cover"
					/>
				</div>
				<div class="flex items-center justify-center bg-black rounded-full cursor-pointer">
					<img
						src="/icons/tele.png"
						alt="Zalo"
						class="w-[40px] h-[40px] object-cover"
					/>
				</div>
				<div class="flex items-center justify-center bg-black rounded-full cursor-pointer">
					<img
						src="/icons/zalo-btn.png"
						alt="Zalo"
						class="w-[40px] h-[40px] object-cover"
					/>
				</div>
			</div>
		</transition>
		<!-- Nút show lists  -->
		<i
			:class="{}"
			class="flex items-center justify-center p-[18px] text-white rounded-full cursor-pointer transition bg-black"
			@click="toggleList"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
			>
				<path
					d="M32.955 27.495C32.955 28.035 32.835 28.59 32.58 29.13C32.325 29.67 31.995 30.18 31.56 30.66C30.825 31.47 30.015 32.055 29.1 32.43C28.2 32.805 27.225 33 26.175 33C24.645 33 23.01 32.64 21.285 31.905C19.56 31.17 17.835 30.18 16.125 28.935C14.4 27.675 12.765 26.28 11.205 24.735C9.66 23.175 8.265 21.54 7.02 19.83C5.79 18.12 4.8 16.41 4.08 14.715C3.36 13.005 3 11.37 3 9.81C3 8.79 3.18 7.815 3.54 6.915C3.9 6 4.47 5.16 5.265 4.41C6.225 3.465 7.275 3 8.385 3C8.805 3 9.225 3.09 9.6 3.27C9.99 3.45 10.335 3.72 10.605 4.11L14.085 9.015C14.355 9.39 14.55 9.735 14.685 10.065C14.82 10.38 14.895 10.695 14.895 10.98C14.895 11.34 14.79 11.7 14.58 12.045C14.385 12.39 14.1 12.75 13.74 13.11L12.6 14.295C12.435 14.46 12.36 14.655 12.36 14.895C12.36 15.015 12.375 15.12 12.405 15.24C12.45 15.36 12.495 15.45 12.525 15.54C12.795 16.035 13.26 16.68 13.92 17.46C14.595 18.24 15.315 19.035 16.095 19.83C16.905 20.625 17.685 21.36 18.48 22.035C19.26 22.695 19.905 23.145 20.415 23.415C20.49 23.445 20.58 23.49 20.685 23.535C20.805 23.58 20.925 23.595 21.06 23.595C21.315 23.595 21.51 23.505 21.675 23.34L22.815 22.215C23.19 21.84 23.55 21.555 23.895 21.375C24.24 21.165 24.585 21.06 24.96 21.06C25.245 21.06 25.545 21.12 25.875 21.255C26.205 21.39 26.55 21.585 26.925 21.84L31.89 25.365C32.28 25.635 32.55 25.95 32.715 26.325C32.865 26.7 32.955 27.075 32.955 27.495Z"
					stroke="#02E56A"
					stroke-width="2.25"
					stroke-miterlimit="10"
				/>
			</svg>
		</i>

		<!-- Nút Back to Top -->
		<div class="group hidden md:block lg:block xl:block 2xl:block 3xl:block">
			<i
				v-show="showBackToTop"
				:class="{
					'bg-black': isHovered,
					'bg-[#02E56A]': !isHovered,
					'hover:bg-black': true,
				}"
				@mouseover="isHovered = true"
				@mouseleave="isHovered = false"
				class="flex items-center justify-center mt-4 p-4 bg-[#02E56A] text-white rounded-full cursor-pointer group-hover:bg-black transition"
				@click="scrollToTop"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
				>
					<path
						:stroke="isHovered ? '#02E56A' : '#000000'"
						d="M30.1168 15.9502L20.0001 5.8335L9.88342 15.9502"
						stroke-width="2.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						:stroke="isHovered ? '#02E56A' : '#000000'"
						d="M20 34.1667V6.1167"
						stroke-width="2.5"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</i>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
	name: "ButtonFixed",
	setup() {
		const isListVisible = ref(false);
		const isHovered = ref(false);
		const showBackToTop = ref(false);

		const toggleList = () => {
			isListVisible.value = !isListVisible.value;
		};

		const scrollToTop = () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		};

		const handleScroll = () => {
			showBackToTop.value = window.scrollY > 200;
		};

		onMounted(() => {
			window.addEventListener("scroll", handleScroll);
		});

		onBeforeUnmount(() => {
			window.removeEventListener("scroll", handleScroll);
		});

		return {
			isListVisible,
			isHovered,
			toggleList,
			scrollToTop,
			showBackToTop,
		};
	},
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
	transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.slide-up-enter-from {
	transform: translateY(20px);
	opacity: 0;
}

.slide-up-enter-to {
	transform: translateY(0);
	opacity: 1;
}

.slide-up-leave-from {
	transform: translateY(0);
	opacity: 1;
}

.slide-up-leave-to {
	transform: translateY(20px);
	opacity: 0;
}
</style>
