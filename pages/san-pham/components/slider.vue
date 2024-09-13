<template>
	<section class="animate-ups">
		<div
			class="flex w-full flex-col items-center 3xl:px-[225px] 3xl:py-[40px] 2xl:gap-[60px] xl:gap-[40px] lg:px-[60px] lg:py-0 lg:gap-6 gap-20 sm:gap-6 px-[225px] 2xl:px-[120px] xl:px-[120px] pt-[40px] 2xl:pb-[80px] pb-[80px] xl:pb-[60px] sm:p-6">
			<div class="flex flex-col items-center gap-6 self-stretch">
				<div
					class="animate-ups__item inline-flex relative 3xl:w-[221px] 3xl:h-[100px] 2xl:w-[177px] w-[176px] xl:w-[132px] lg:w-[88px] sm:w-[70px] 2xl:h-[80px] h-[80px] xl:h-[60px] lg:h-[40px] sm:h-[32px]">
					<nuxt-img format="webp" loading="lazy" alt="UPS" src="/logo/logo-cap-dark.png"
						class="absolute w-full h-full object-cover" />
				</div>

				<div class="2xl:flex 2xl:flex-col 2xl:gap-3">
					<h3
						class="text-[#15171E] text-center font-BG 3xl:text-[60px] 2xl:text-[45px] text-[45px] xl:text-[40px] lg:text-[32px] sm:text-[20px] font-semibold leading-none animate-ups__item">
						Vì sao nên đăng ký
						<span
							class="text-[#F51666] font-BG 3xl:text-[60px] 2xl:text-[45px] text-[45px] xl:text-[40px] lg:text-[32px] sm:text-[20px] font-semibold leading-none animate-ups__item">Margin
							T+</span>
					</h3>
					<p
						class="text-black/60 text-center font-HG 3xl:text-[18px] text-[14px] xl:text-[12px] md:text-[12px] sm:text-[12px] font-medium self-stretch w-full animate-ups__item leading-normal 2xl:px-[150px]">
						Với margin T+, nhà đầu tư có thể thực hiện giao dịch mua bán chứng khoán một cách linh hoạt và
						nhanh chóng. Bạn không còn bị giới hạn bởi thời gian chờ đợi thanh toán, giúp bạn nắm bắt kịp
						thời những biến động của thị trường và tối đa hóa lợi nhuận.
					</p>
				</div>
			</div>

			<div class="w-full min-h-min py-6 lg:h-[300px]">
				<swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :speed="800"
					:initial-slide="vSwiperIndex" @swiper="setVSwiperRef" @slide-change="updateVSwiperIndex"
					:breakpoints="{
						1023: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						480: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						1200: {
							slidesPerView: 2.5,
							spaceBetween: 10,
						},
						375: {
							slidesPerView: 1.5,
							spaceBetween: 10,
						},
					}">
					<swiper-slide>
						<div class="relative hidden lg:block lg:min-h-[300px] group">
							<div class="w-full flex items-center justify-center">
								<div
									class="2xl:w-[351px] 2xl:h-[363px] xl:w-[281px] xl:h-[290px] lg:w-[182px] lg:h-[189px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Group.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>

							<div
								class="flex 2xl:p-6 xl:p-3 lg:p-3 flex-col items-start 2xl:gap-3 xl:gap-1 lg:gap-1 rounded-xl 2xl:w-[325px] xl:w-[250px] lg:w-[221px] 2xl:h-[136px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute 2xl:bottom-0 xl:bottom-0 2xl:right-0 xl:right-0 lg:bottom-10 lg:right-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p
									class="text-[#15171E] font-BG 3xl:text-[24px] 2xl:text-[28px] xl:text-[20px] lg:text-[16px] font-semibold leading-none">
									Lãi suất hấp dẫn
								</p>
								<p
									class="text-black/80 font-HG 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-medium leading-none">
									Chỉ từ 0%, giúp giảm thiểu chi phí vay và tăng tối đa lợi nhuận
								</p>
							</div>
						</div>

						<div class="relative lg:hidden md:block sm:hidden min-h-[260px]">
							<div class="w-full flex justify-center">
								<div class="w-[182px] h-[189px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Group.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>
							<div
								class="flex p-3 flex-col items-start gap-1 rounded-xl w-[241px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute bottom-0 right-0">
								<p
									class="text-[#15171E] font-BG 2xl:text-[28px] xl:text-[20px] lg:text-[20px] font-semibold leading-none">
									Lãi suất hấp dẫn
								</p>
								<p
									class="text-black/80 font-HG 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-medium leading-none">
									Chỉ từ 0%, giúp giảm thiểu chi phí vay và tăng tối đa lợi nhuận
								</p>
							</div>
						</div>

						<div class="relative md:hidden sm:block min-h-[200px]">
							<div class="w-full flex justify-center">
								<div class="w-[140px] h-[145px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Group.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>
							<div
								class="flex p-3 flex-col items-start gap-1 rounded-xl w-[200px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute bottom-0 right-2">
								<p class="text-[#15171E] font-BG text-[12px] font-semibold leading-none">
									Lãi suất hấp dẫn
								</p>
								<p class="text-black/80 font-HG text-[10px] font-medium leading-none">
									Chỉ từ 0%, giúp giảm thiểu chi phí vay và tăng tối đa lợi nhuận
								</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="relative hidden lg:block lg:min-h-[300px] group">
							<div class="w-full flex items-center justify-center">
								<div
									class="2xl:w-[351px] 2xl:h-[363px] xl:w-[281px] xl:h-[290px] lg:w-[182px] lg:h-[189px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Frame 46.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>

							<div
								class="flex 2xl:p-6 xl:p-3 lg:p-3 flex-col items-start 2xl:gap-3 xl:gap-1 lg:gap-1 rounded-xl 2xl:w-[325px] xl:w-[250px] lg:w-[221px] 2xl:min-h-[136px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute 2xl:bottom-0 xl:bottom-0 2xl:right-0 xl:right-0 lg:bottom-10 lg:right-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p
									class="text-[#15171E] font-BG 3xl:text-[24px] 2xl:text-[28px] xl:text-[20px] lg:text-[16px] font-semibold leading-none">
									Thanh toán dư nợ vay
									đơn giản
								</p>
								<p
									class="text-black/80 font-HG 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-medium leading-none">
									Mọi khoản tiền có trên Tài khoản giao dịch của Khách hàng sẽ được ưu tiên trả khoản
									vay và khoản lãi vay có ngày đến hạn gần nhất
								</p>
							</div>
						</div>

						<div class="relative lg:hidden md:block sm:hidden min-h-[260px]">
							<div class="w-full flex justify-center">
								<div class="w-[182px] h-[189px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Frame 46.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>
							<div
								class="flex p-3 flex-col items-start gap-1 rounded-xl w-[241px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute bottom-0 right-0">
								<p
									class="text-[#15171E] font-BG 2xl:text-[28px] xl:text-[20px] lg:text-[20px] font-semibold leading-none">
									Thanh toán dư nợ vay
									đơn giản
								</p>
								<p
									class="text-black/80 font-HG 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-medium leading-none">
									Mọi khoản tiền có trên Tài khoản giao dịch của Khách hàng sẽ được ưu tiên trả khoản
									vay và khoản lãi vay có ngày đến hạn gần nhất
								</p>
							</div>
						</div>

						<div class="relative md:hidden sm:block min-h-[200px]">
							<div class="w-full flex justify-center">
								<div class="w-[140px] h-[145px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Frame 46.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>
							<div
								class="flex p-3 flex-col items-start gap-1 rounded-xl w-[200px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute bottom-0 right-2">
								<p class="text-[#15171E] font-BG text-[12px] font-semibold leading-none">
									Thanh toán dư nợ vay
									đơn giản
								</p>
								<p class="text-black/80 font-HG text-[10px] font-medium leading-none">
									Mọi khoản tiền có trên Tài khoản giao dịch của Khách hàng sẽ được ưu tiên trả khoản
									vay và khoản lãi vay có ngày đến hạn gần nhất
								</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="relative hidden lg:block lg:min-h-[300px] group">
							<div class="w-full flex items-center justify-center">
								<div
									class="2xl:w-[351px] 2xl:h-[363px] xl:w-[281px] xl:h-[290px] lg:w-[182px] lg:h-[189px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Group1.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>

							<div
								class="flex 2xl:p-6 xl:p-3 lg:p-3 flex-col items-start 2xl:gap-3 xl:gap-1 lg:gap-1 rounded-xl 2xl:w-[325px] xl:w-[250px] lg:w-[221px] 2xl:h-[136px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute 2xl:bottom-0 xl:bottom-0 2xl:right-0 xl:right-0 lg:bottom-10 lg:right-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<p
									class="text-[#15171E] font-BG 3xl:text-[24px] 2xl:text-[28px] xl:text-[20px] lg:text-[16px] font-semibold leading-none">
									Quản lý rủi ro hiệu quả
								</p>
								<p
									class="text-black/80 font-HG 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-medium leading-none">
									Sản phẩm phù hợp cho các nhà đầu tư ưa thích giao dịch nhanh, giảm thiểu rủi ro từ
									những biến động dài hạn
								</p>
							</div>
						</div>

						<div class="relative lg:hidden md:block sm:hidden min-h-[260px]">
							<div class="w-full flex justify-center">
								<div class="w-[182px] h-[189px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Group1.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>
							<div
								class="flex p-3 flex-col items-start gap-1 rounded-xl w-[241px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute bottom-0 right-0">
								<p
									class="text-[#15171E] font-BG 2xl:text-[28px] xl:text-[20px] lg:text-[20px] font-semibold leading-none">
									Quản lý rủi ro hiệu quả
								</p>
								<p
									class="text-black/80 font-HG 2xl:text-[16px] xl:text-[14px] lg:text-[12px] font-medium leading-none">
									Sản phẩm phù hợp cho các nhà đầu tư ưa thích giao dịch nhanh, giảm thiểu rủi ro từ
									những biến động dài hạn
								</p>
							</div>
						</div>

						<div class="relative md:hidden sm:block min-h-[200px]">
							<div class="w-full flex justify-center">
								<div class="w-[140px] h-[145px]">
									<nuxt-img loading="lazy" alt="UPS" :src="`/images/Group1.png`"
										class="w-full h-full animate-ups__item" />
								</div>
							</div>
							<div
								class="flex p-3 flex-col items-start gap-1 rounded-xl w-[200px] bg-[linear-gradient(101deg,_#FFF35D_6.7%,_#F19F00_109.21%)] absolute bottom-0 right-2">
								<p class="text-[#15171E] font-BG text-[12px] font-semibold leading-none">
									Quản lý rủi ro hiệu quả
								</p>
								<p class="text-black/80 font-HG text-[10px] font-medium leading-none">
									Sản phẩm phù hợp cho các nhà đầu tư ưa thích giao dịch nhanh, giảm thiểu rủi ro từ
									những biến động dài hạn
								</p>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>

			<div class="xl:flex flex-col gap-6 items-center w-full hidden 2xl:mt-24">
				<div class="w-full xl:w-[340px] flex flex-col gap-5 xl:gap-10">
					<div class="flex gap-3 justify-center">
						<div class="inline-flex animate-ups__item">
							<button :class="cn(
								`h-10 px-6 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
								{
									'cursor-auto': !vSwiperIndex,
								}
							)
								" @click="prevVSwiperSlide">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12"
									fill="none">
									<path
										d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM15.1421 6.75C15.5563 6.75 15.8921 6.41421 15.8921 6C15.8921 5.58579 15.5563 5.25 15.1421 5.25V6.75ZM1 6.75H15.1421V5.25H1V6.75Z"
										fill="#02E56A"
										:class="cn('transition-all duration-300 group-hover:fill-[#15171E]', {})" />
								</svg>
							</button>
						</div>
						<div class="inline-flex animate-ups__item">
							<button :class="cn(
								`h-10 px-6 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
								{
									'cursor-auto': vSwiperIndex === 2,
								}
							)
								" @click="nextVSwiperSlide">
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12"
									fill="none">
									<path
										d="M1.14215 5.25C0.727937 5.25 0.392151 5.58579 0.392151 6C0.392151 6.41421 0.727937 6.75 1.14215 6.75V5.25ZM15.8146 6.53033C16.1075 6.23744 16.1075 5.76256 15.8146 5.46967L11.0416 0.696699C10.7488 0.403806 10.2739 0.403806 9.98099 0.696699C9.68809 0.989593 9.68809 1.46447 9.98099 1.75736L14.2236 6L9.98099 10.2426C9.68809 10.5355 9.68809 11.0104 9.98099 11.3033C10.2739 11.5962 10.7488 11.5962 11.0416 11.3033L15.8146 6.53033ZM1.14215 6.75H15.2843V5.25H1.14215V6.75Z"
										fill="#02E56A" :class="cn('transition-all duration-300 group-hover:fill-[#15171E]', {
											'group-hover:fill-[#02E56A]': vSwiperIndex === 2,
										})
											" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
	name: "slider",
	components: {},
	setup(props, ctx) {
		let vSwiperRef: any = null;
		const vSwiperIndex = ref<number>(0);

		const setVSwiperRef = (swiper: any) => {
			vSwiperRef = swiper;
		};

		const updateVSwiperIndex = () => {
			console.log(vSwiperRef?.activeIndex);

			vSwiperIndex.value = vSwiperRef?.activeIndex || 0;
		};

		const prevVSwiperSlide = () => vSwiperRef?.slidePrev();
		const nextVSwiperSlide = () => vSwiperRef?.slideNext();

		return {
			cn,
			vSwiperRef,
			vSwiperIndex,
			SwiperAutoplay,
			SwiperNavigation,
			setVSwiperRef,
			prevVSwiperSlide,
			nextVSwiperSlide,
			updateVSwiperIndex,
		};
	},
});
</script>

<style></style>
