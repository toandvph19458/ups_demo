<template>
	<section class="animate-ups container-product">
		<div
			class="flex flex-col gap-6 md:gap-10 xl:gap-[60px] 3xl:gap-[80px] py-6 md:py-10 xl:py-[60px] 2xl:py-[80px]">
			<div class="space-y-3 xl:space-y-6 2xl:space-y-[30px] 3xl:space-y-[40px]">
				<div class="flex flex-col justify-center items-center gap-2 md:gap-3 xl:gap-6">
					<div
						class="text-[#173025] text-center font-HG text-[16px] font-semibold tracking-[3.2px] uppercase animate-ups__item">
						Khách hàng cá nhân
					</div>

					<div>

						<p
							class="text-[#F51666] text-center font-BG 3xl:text-[60px] xl:text-[40px] 2xl:text-[45px] text-[28px] md:text-[32px] font-bold leading-[1.3] animate-ups__item">
							Margin T+
						</p>
						<p
							class="text-black text-center font-HG 3xl:text-[60px] xl:text-[40px] 2xl:text-[45px] text-[28px] md:text-[32px] font-bold leading-[1.3] animate-ups__item">
							Giải pháp đầu tư ngắn hạn hiệu quả từ UPS
						</p>
						<p
							class="mt-3 text-black text-center font-BG 3xl:text-[24px] xl:text-[20px] lg:text-[18px] text-[16px] font-bold animate-ups__item">
							Tối ưu hóa lợi nhuận với Margin T+ (Áp dụng từ ngày 07/10/2024)</p>
					</div>

					<div
						class="w-full lg:w-[80%] lg:mx-auto text-black/60 text-center font-HG 3xl:text-[18px] text-[16px] font-medium self-stretch animate-ups__item leading-normal">
						Margin T+ từ UPS là sản phẩm được thiết kế dành riêng cho những nhà đầu tư muốn tận dụng tối đa
						cơ
						hội ngắn hạn trên thị trường chứng khoán.
						Với lãi suất ưu đãi từ 0%, bạn có thể gia tăng lợi nhuận từ các giao dịch nhanh chóng và hiệu
						quả.
					</div>
				</div>

				<div class="btn-wrapper flex gap-5 sm:gap-3 items-center justify-center animate-ups__item">
					<div class="inline-flex">
						<nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info"
							class="btn active group ">
							<span class="text-[16px]"> Đăng kí ngay </span>
							<div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
								<i class="w-full h-full group-hover:inline-flex hidden absolute">
									<nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
										alt="UPS" />
								</i>
								<i class="w-full h-full group-hover:hidden inline-flex absolute">
									<nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16"
										alt="UPS" />
								</i>
							</div>
						</nuxt-link>
					</div>

					<nuxt-link to="/" class="btn group  border border-transparent hover:border-[#222]">
						<span class="text-[16px]"> Liên hệ tư vấn </span>
						<div class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
							<i class="w-full h-full inline-flex absolute">
								<nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
									alt="UPS" />
							</i>
						</div>
					</nuxt-link>
				</div>

			</div>

			<div
				class="w-full h-[100px] 3xl:h-[450px] 2xl:h-[380px] xl:h-[350px] md:h-[186px] lg:h-[260px] sm:h-[100px] animate-ups__item">
				<nuxt-img src="/images/Frame 1171276226.png"
					class="w-full h-full rounded-[12px] md:rounded-[20px] lg:rounded-[24px] xl:rounded-[40px] 3xl:rounded-[40px]" />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

export default defineComponent({
	name: "banner",
	components: {},
	setup(props, ctx) {
		return {
			cn,
		};
	},
});
</script>

<style scoped></style>
