<template>
	<section class="animate-ups">
		<div
			class="flex flex-col items-center 3xl:gap-[80px] 2xl:gap-[60px] xl:gap-[60px] sm:gap-[40px] gap-[24px] 3xl:py-[80px] 3xl:px-[225px] 2xl:px-[120px] 2xl:py-[80px] xl:py-[60px] sm:py-[24px] py-[24px]  xl:px-[100px] px-[24px] self-stretch w-full md:px-[60px] md:py-[40px] md:gap-10 lg:px-[60px] lg:py-[40px] lg:gap-10">
			<div class="flex flex-col items-center 3xl:gap-[40px] 2xl:gap-[24px] gap-3 ">
				<p
					class="text-[#173025] text-center font-HG 3xl:text-[16px] lg:text-[12px] sm:text-[12px] md:text-[12px] text-[14px] 2xl:text-[14px] xl:text-[12px] font-semibold leading-none tracking-[3.2px] uppercase animate-ups__item">
					Khách hàng cá nhân
				</p>
				<div>

					<p
						class="text-[#F51666] text-center font-BG 3xl:text-[60px] xl:text-[40px] lg:text-[32px] text-[45px] 2xl:text-[45px] sm:text-[32px] md:text-[32px] font-bold leading-none animate-ups__item">
						Margin T+
					</p>
					<p
						class="text-black text-center font-HG 3xl:text-[60px] xl:text-[40px] lg:text-[32px] text-[45px] 2xl:text-[45px] sm:text-[32px] md:text-[32px] font-bold leading-normal animate-ups__item">
						Giải pháp đầu tư ngắn hạn hiệu quả từ UPS
					</p>
					<p
						class="text-black text-center font-BG 3xl:text-[24px] xl:text-[20px] lg:text-[18px] text-[12px] 2xl:text-[20px]  md:text-[16px] font-bold leading-[30px] animate-ups__item">
						Tối ưu hóa lợi nhuận với Margin T+ (Áp dụng từ ngày 07/10/2024)</p>
				</div>
				<p
					class="text-black/60 text-center font-HG 3xl:text-[18px] text-[14px] xl:text-[12px] md:text-[12px] sm:text-[12px] font-medium self-stretch w-full animate-ups__item leading-normal 2xl:px-[150px]">
					Margin T+ từ UPS là sản phẩm được thiết kế dành riêng cho những nhà đầu tư muốn tận dụng tối đa cơ
					hội ngắn hạn trên thị trường chứng khoán.
					Với lãi suất ưu đãi từ 0%, bạn có thể gia tăng lợi nhuận từ các giao dịch nhanh chóng và hiệu quả.
				</p>
				<div class="btn-wrapper flex gap-5 sm:gap-3 items-center animate-ups__item">
					<div class="inline-flex">
						<nuxt-link to="/" class="btn active group ">
							<span class="text-[10px] sm:text-[12px] xl:text-[14px] "> Đăng kí ngay </span>
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
						<span class="text-[10px] sm:text-[12px] xl:text-[14px]"> Liên hệ tư vấn </span>
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
				<nuxt-img src="/images/Frame 1171276226.png" class="w-full h-full 3xl:rounded-[40px] rounded-2xl" />
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
