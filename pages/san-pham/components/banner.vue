<template>
	<section class="animate-ups">
		<div
			class="flex flex-col items-center 3xl:gap-[80px] 2xl:gap-[60px] xl:gap-[60px] sm:gap-[40px] gap-[24px] 3xl:py-[80px] 3xl:px-[225px] 2xl:px-[120px] 2xl:py-[80px] xl:py-[60px] sm:py-[24px] py-[24px]  xl:px-[100px] px-[24px] self-stretch w-full md:px-[60px] md:py-[40px] md:gap-10 lg:px-[60px] lg:py-[40px] lg:gap-10">
			<div class="flex flex-col items-center 3xl:gap-[40px] 2xl:gap-[24px] gap-3 ">
				<p
					class="text-[#173025] text-center font-HG 3xl:text-[16px] lg:text-[12px] sm:text-[12px] md:text-[12px] text-[14px] 2xl:text-[14px] xl:text-[12px] font-semibold leading-none tracking-[3.2px] uppercase animate-ups__item">
					Khách hàng cá nhân
				</p>
				<p
					class="text-black text-center font-BG 3xl:text-[60px] xl:text-[40px] lg:text-[32px] text-[45px] 2xl:text-[45px] sm:text-[32px] md:text-[32px] font-bold leading-none animate-ups__item">
					Margin T+3
				</p>
				<p
					class="text-black/60 text-center font-HG 3xl:text-[18px] text-[14px] xl:text-[12px] md:text-[12px] sm:text-[12px] font-medium self-stretch w-full animate-ups__item leading-normal">
					Margin T+3 từ UP Securities là sản phẩm được thiết kế dành riêng cho những nhà đầu tư muốn tận dụng
					tối đa cơ hội ngắn hạn trên thị trường chứng khoán. Với lãi suất ưu đãi chỉ từ 6.8% và thời gian nắm
					giữ cổ phiếu lên đến 3 ngày (T+3), bạn có thể gia tăng lợi nhuận từ các giao dịch nhanh chóng và
					hiệu quả.
				</p>
				<div class="btn-wrapper flex gap-5 sm:gap-3 items-center">
					<div class="inline-flex animate-ups__item">
						<nuxt-link to="/" class="btn active group animate-ups__item">
							<span class="text-[10px] sm:text-[12px] xl:text-[14px]"> Đăng kí ngay </span>
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
					<nuxt-link to="/" class="btn group animate-ups__item animate-ups__item">
						<span class="text-[10px] sm:text-[12px] xl:text-[14px]"> Xem hướng dẫn </span>
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
				<nuxt-img src="/images/Frame 1171276226.png" class="w-full h-full" />
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
