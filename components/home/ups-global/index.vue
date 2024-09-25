<template>
	<section class="animate-ups">
		<div class="container">
			<div class="relative">
				<div
					class="px-0 xl:px-16 grid lg:grid-cols-2 grid-cols-1 items-end lg:gap-[22px] xl:gap-[32px] 2xl:gap-[50px] gap-5">
					<div class="item-end">
						<h3
							class="animate-ups__item text-[20px] md:text-[28px] lg:text-[32] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60] text-center lg:text-left font-semibold font-BG text-black leading-tight">
							<span> Bạn cần đầu tư, </span>
							<br />
							<span><span class="text-[#02E56A]">UPS</span> luôn bên Bạn!</span>
						</h3>

						<p
							class="animate-ups__item text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-center lg:text-left font-medium text-[#000]">
							Đội ngũ chuyên gia tư vấn <span
								class="text-[18px] md:text-[20px] xl:text-[24px] 2xl:text-[30px]  3xl:text-[40px] text-[#02E56A]">
								luôn sẵn sàng hỗ trợ </span>
						</p>
					</div>

					<div class="flex justify-center lg:justify-end gap-3 mt-5 xl:mt-12 mb-2">
						<nuxt-link to="/"
							class="animate-ups__item h-10 px-4 inline-flex gap-4 items-center rounded-[12px] bg-[#15171E]">
							<div class="inline-flex">
								<nuxt-img format="webp" loading="lazy" width="20" height="20" alt="UPS"
									src="/logo/logo-row.svg" />
							</div>

							<span class="hidden md:inline-block text-xs 2xl:text-base text-white font-bold">Cộng
								đồng</span>
						</nuxt-link>
						<nuxt-link to="https://www.facebook.com/ChungkhoanUp"
							class="animate-ups__item h-10 px-4 inline-flex gap-4 items-center rounded-[12px] bg-[#1877F2]">
							<div class="inline-flex w-5 h-5 relative">
								<nuxt-img format="webp" loading="lazy" width="20" height="40" alt="Facebook"
									src="/icons/facebook-icon.png" class="object-contain" />
							</div>

							<span
								class="hidden md:inline-block text-xs 2xl:text-base text-white font-bold">Facebook</span>
						</nuxt-link>
						<!-- <nuxt-link
							to="/"
							class="animate-ups__item h-10 px-4 inline-flex gap-4 items-center rounded-[12px] bg-[#29A8E9]"
						>
							<div class="inline-flex w-5 h-5 relative">
								<nuxt-img
									format="webp"
									loading="lazy"
									width="20"
									alt="Telegram"
									src="/icons/telegram-icon.png"
									class="object-contain"
								/>
							</div>

							<span class="hidden md:inline-block text-xs 2xl:text-base text-white font-bold">Telegram</span>
						</nuxt-link>

						<nuxt-link
							to="/"
							class="animate-ups__item h-10 px-4 inline-flex gap-4 items-center rounded-[12px] bg-[#005FE7]"
						>
							<div class="inline-flex w-5 h-5 relative">
								<nuxt-img
									format="webp"
									loading="lazy"
									width="24"
									alt="Telegram"
									src="/icons/zallo-icon.png"
									class="object-contain"
								/>
							</div>

							<span class="hidden md:inline-block text-xs 2xl:text-base text-white font-bold">Zalo</span>
						</nuxt-link> -->
					</div>
				</div>

				<div class="py-10 md:py-[60px] lg:py-[100px] xl:py-[150px]">
					<!-- FEEDBACK -->
					<feedback />
				</div>

				<!-- <div class="hidden xl:block absolute top-0 right-[-5%] z-[-1] w-[1100px] h-[1200px]">
					<nuxt-img
						format="webp"
						loading="lazy"
						width="1000"
						h="1200"
						alt="UPS"
						class="absolute scale-75 animate-ups__item"
						src="/background/bg-02.png"
					/>
				</div> -->
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";
import Feedback from "~/components/common/feedback/index.vue";

export default defineComponent({
	name: "ups-global",
	components: {
		Feedback,
	},
	setup(props, ctx) {
		return {
			cn,
		};
	},
});
</script>

<style scoped></style>
