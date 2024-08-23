<template>
	<header
		id="header"
		class="fixed flex items-center w-full h-[64px] md:h-[84px] xl:h-[90px] max-w-full px-6 md:px-6 lg:px-10 xl:px-auto z-[100] inset-0 bg-white rounded-es-[20px] rounded-ee-[20px]"
	>
		<div class="w-full max-w-[1730px] mx-auto">
			<div class="w-full h-full my-auto lg:py-5 flex justify-between items-center">
				<!--@@@ LOGO -->
				<nuxt-link
					to="/"
					class="inline-flex relative w-[181px] h-[41px] md:w-[167px] md:h-[37px] xl:w-[207px] xl:h-[47px]"
				>
					<nuxt-img
						src="/logo/logo-full-v2.png"
						alt="UPS"
						width="207"
						height="47"
						loading="lazy"
						class="absolute w-full h-full object-contain"
					/>
				</nuxt-link>

				<div class="flex gap-10 items-center">
					<!--@@@ SEARCH  -->
					<div class="hidden xl:inline-flex w-6 h-6 relative cursor-pointer">
						<nuxt-img
							src="/icons/search-normal.svg"
							alt="UPS"
							loading="lazy"
							height="24"
							class="absolute w-full h-full object-contain"
						/>
					</div>

					<!-- NAV -->
					<navigation />

					<div class="flex">
						

						<div class="hidden xl:inline-flex">
							<nuxt-link
								to="/"
								class="btn active group"
							>
								<span> Mở tài khoản ngay </span>
								<div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
									<i class="w-full h-full group-hover:inline-flex hidden absolute">
										<nuxt-img
											src="/icons/arrow-dark-icon.svg"
											loading="lazy"
											width="16"
											height="16"
											alt="UPS"
										/>
									</i>

									<i class="w-full h-full group-hover:hidden inline-flex absolute">
										<nuxt-img
											src="/icons/arrow-icon.svg"
											loading="lazy"
											width="16"
											height="16"
											alt="UPS"
										/>
									</i>
								</div>
							</nuxt-link>
						</div>

						<!-- MENU MOBILE -->
						<div class="flex xl:hidden">
							<div class="w-6 h-6 relative inline-flex items-center justify-center cursor-pointer">
								<nuxt-img
									format="webp"
									loading="lazy"
									height="24"
									alt="UPS"
									src="/icons/menu-icon.svg"
									class="absolute w-full h-full object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NuxtButton from "~/components/ui/button/Button.vue";
import Navigation from "./nav/index.vue";

export default defineComponent({
	name: "the-header",
	components: {
		NuxtButton,
		Navigation,
	},
	setup(props, ctx) {
		return {};
	},
});
</script>

<style></style>
