<template>
	<section class="animate-ups pt-20 pb-10">
		<div class="container">
			<div class="w-full">
				<div class="flex justify-center">
					<div
						class="inline-flex relative w-[80px] h-[40px] md:w-[145px] md:h-[66px] xl:w-[220px] xl:h-[100px]"
					>
						<nuxt-img
							format="webp"
							loading="lazy"
							alt="UPS"
							width="220"
							height="100"
							src="/logo/logo-cap-dark.png"
							class="animate-ups__item absolute w-full h-full object-contain"
						/>
					</div>
				</div>

				<div class="mt-3 md:mt-5 xl:mt-10">
					<h3
						class="animate-ups__item text-[20px] md:text-[40px] xl:text-[60px] text-center font-semibold font-BG text-black"
					>
						Bạn muốn tìm hiểu về
						<span class="text-green-ups"> UPS </span>
					</h3>

					<p class="animate-ups__item text-sm md:text-base xl:text-xl text-center text-[#000] font-medium">
						Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự kiện của UPS
					</p>
				</div>

				<div class="my-6 xl:py-10 mx-auto">
					<swiper
						:modules="[SwiperNavigation, SwiperPagination, SwiperEffectCards, SwiperEffectCoverflow]"
						:slidesPerView="'auto'"
						:centeredSlides="true"
						:loop="false"
						:grab-cursor="true"
						effect="coverflow"
						:speed="1000"
						:space-between="0"
						:coverflow-effect="{
							rotate: 0,
							stretch: 700,
							depth: 250,
							modifier: 1,
							slideShadows: false,
						}"
						:initial-slide="vSwiperIndex"
						@swiper="setVSwiperRef"
						@slide-change="updateVSwiperIndex"
						class="swiper-question"
					>
						<swiper-slide
							v-for="(doc, i) in 5"
							:key="i"
						>
							<div
								class="animate-ups__item flex flex-col md:flex-row xl:flex-row w-full max-w-[920px] h-max md:h-[480px] border-none md:border-[2px] border-white rounded-[24px] overflow-hidden"
							>
								<div class="w-full max-w-full md:max-w-[360px] flex flex-col bg-[#0A2E20]">
									<div
										class="relative overflow-hidden w-full h-[200px] md:h-[450px] rounded-[24px] md:rounded-none"
									>
										<nuxt-img
											format="webp"
											loading="lazy"
											src="/images/image-question.png"
											class="absolute w-full h-full object-cover object-center"
										/>
									</div>

									<div class="flex-1 hidden md:flex xl:flex justify-center pb-4">
										<nuxt-img
											format="webp"
											loading="lazy"
											height="46"
											src="/logo/logo-cap-light.png"
											class="object-contain"
										/>
									</div>
								</div>

								<div class="p-5 md:p-10 flex flex-col justify-between bg-[#0D8357]">
									<div class="flex gap-5 items-center">
										<h4 class="text-base md:text-[28px] text-white font-bold">
											Công ty cổ phần chứng khoán UP Securities là?
										</h4>
										<p class="text-xl md:text-[40px] text-white font-semibold">
											{{ `0${i + 1}` }}
										</p>
									</div>

									<div class="mt-2 md:mt-0 text-sm text-[rgba(255,255,255,0.90)]">
										<p>
											UPS là công ty đầu tư chứng khoán đột phá dành cho thế hệ nhà đầu tư mới,
											nơi công nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải nghiệm
											đầu tư thông minh, dễ dàng, và thú vị.
										</p>
										<p>Hành trình đầu tư của bạn bắt đầu.</p>
									</div>
								</div>
							</div>
						</swiper-slide>
					</swiper>
				</div>

				<div class="flex gap-6 flex-col md items-center justify-center">
					<div class="inline-flex gap-3">
						<button
							:class="
								cn(
									'animate-ups__item h-10 px-6 bg-[#15171E] hover:bg-[#02E56A] rounded-full group transition-all duration-300',
									{
										hidden: vSwiperIndex === 0,
									}
								)
							"
							@click="prevVSwiperSlide"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="12"
								viewBox="0 0 16 12"
								fill="none"
							>
								<path
									d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM15.1421 6.75C15.5563 6.75 15.8921 6.41421 15.8921 6C15.8921 5.58579 15.5563 5.25 15.1421 5.25V6.75ZM1 6.75H15.1421V5.25H1V6.75Z"
									fill="#02E56A"
									:class="
										cn('transition-all duration-300 group-hover:fill-[#15171E]', {
											'group-hover:fill-[#02E56A]': !vSwiperIndex,
										})
									"
								/>
							</svg>
						</button>

						<button
							:class="
								cn(
									'animate-ups__item h-10 px-6 bg-[#15171E] hover:bg-[#02E56A] rounded-full group transition-all duration-300',
									{
										hidden: vSwiperIndex === 4,
									}
								)
							"
							@click="nextVSwiperSlide"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="17"
								height="12"
								viewBox="0 0 17 12"
								fill="none"
							>
								<path
									d="M1.14215 5.25C0.727937 5.25 0.392151 5.58579 0.392151 6C0.392151 6.41421 0.727937 6.75 1.14215 6.75V5.25ZM15.8146 6.53033C16.1075 6.23744 16.1075 5.76256 15.8146 5.46967L11.0416 0.696699C10.7488 0.403806 10.2739 0.403806 9.98099 0.696699C9.68809 0.989593 9.68809 1.46447 9.98099 1.75736L14.2236 6L9.98099 10.2426C9.68809 10.5355 9.68809 11.0104 9.98099 11.3033C10.2739 11.5962 10.7488 11.5962 11.0416 11.3033L15.8146 6.53033ZM1.14215 6.75H15.2843V5.25H1.14215V6.75Z"
									fill="#02E56A"
									:class="
										cn('transition-all duration-300 group-hover:fill-[#15171E]', {
											'group-hover:fill-[#02E56A]': vSwiperIndex === 2,
										})
									"
								/>
							</svg>
						</button>
					</div>

					<div class="animate-ups__item inline-flex relative">
						<nuxt-link
							to="/"
							class="btn active group"
						>
							<span> Câu hỏi thường gặp</span>
							<div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
								<i class="w-full h-full group-hover:inline-flex hidden absolute">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
									>
										<path
											d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM11.75 1C11.75 0.585787 11.4142 0.25 11 0.25L4.25 0.25C3.83579 0.25 3.5 0.585786 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM1.53033 11.5303L11.5303 1.53033L10.4697 0.46967L0.46967 10.4697L1.53033 11.5303Z"
											fill="#15171E"
										/>
									</svg>
								</i>

								<i class="w-full h-full group-hover:hidden inline-flex absolute">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
									>
										<path
											d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM11.75 1C11.75 0.585787 11.4142 0.25 11 0.25L4.25 0.25C3.83579 0.25 3.5 0.585786 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM1.53033 11.5303L11.5303 1.53033L10.4697 0.46967L0.46967 10.4697L1.53033 11.5303Z"
											fill="#02E56A"
										/>
									</svg>
								</i>
							</div>

							<span class="absolute -top-1 -left-3 w-[10px] h-[10px] rounded-full bg-[#02E56A]"></span>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperPagination, SwiperNavigation, SwiperEffectCards, SwiperEffectCoverflow } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
	name: "ups-question",
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
			SwiperEffectCards,
			SwiperEffectCoverflow,
			SwiperPagination,
			setVSwiperRef,
			prevVSwiperSlide,
			nextVSwiperSlide,
			updateVSwiperIndex,
		};
	},
});
</script>

<style>
.swiper-question {
	.swiper-slide {
		background-position: center;
		background-size: cover;
		max-width: 920px;
		height: auto;
		align-items: flex-start;
		align-self: flex-start;
	}
}
/* 
@media (min-width: 768px) {
	.swiper-question {
		.swiper-slide {
			background-position: center;
			background-size: cover;
			max-width: 920px;
			height: auto;
			align-items: flex-start;
			align-self: flex-start;
		}
	}
}

@media (min-width: 1200px) {
	.swiper-question {
		.swiper-slide {
			background-position: center;
			background-size: cover;
			max-width: 920px;
			height: auto;
			align-items: flex-start;
			align-self: flex-start;
		}
	}
} */
</style>
