<template>
	<header
		id="header"
		class="fixed bg-white flex items-center w-full h-[64px] md:h-[84px] xl:h-[90px] max-w-full z-[100] inset-0 rounded-b-[20px]"
	>
		<div class="container">
			<div class="w-full h-full my-auto lg:py-5 flex justify-between items-center">
				<!--@@@ LOGO -->
				<nuxt-link
					to="/"
					class="inline-flex relative w-[181px] h-[41px] md:w-[167px] md:h-[37px] xl:w-[207px] xl:h-[47px]"
				>
					<nuxt-img
						src="/logo/UPS_LogoTenDayDu+KhauHieu 1.png"
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

					<div class="flex gap-5">
						<!-- <div class="hidden xl:inline-flex">
							<nuxt-link
								to="/giao-dich-ngay"
								class="w-auto h-[50px] px-7 gap-2 inline-flex items-center rounded-[40px] text-base font-bold bg-[rgba(0,0,0,0.06)] duration-300"
							>
								<span> Giao dịch ngay </span>
								<div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
								<i
									class="w-full h-full inline-flex absolute transition-all duration-300 translate-x-[-120%] group-hover:translate-x-0"
								>
									<nuxt-img
										src="/icons/arrow-icon.svg"
										loading="lazy"
										width="16"
										height="16"
										alt="UPS"
									/>
								</i>

								<i
									class="w-full h-full inline-flex absolute transition-all duration-300 translate-x-0 group-hover:translate-x-[120%]"
								>
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
						</div> -->

						<div class="hidden xl:inline-flex">
							<nuxt-link
								to="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info"
								target="_blank"
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
						<nav-mobile />
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
import NavMobile from "./nav-mobile/index.vue";

export default defineComponent({
	name: "the-header",
	components: {
		NuxtButton,
		Navigation,
		NavMobile,
	},
	setup(props, ctx) {
		return {};
	},
});
</script>

<style></style>
