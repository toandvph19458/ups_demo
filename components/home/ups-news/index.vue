<template>
	<section
		class="section_news animate-ups px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[120px] pb-12 md:py-16 lg:py-20 xl:py-[80px] 2xl:py-[96px]"
	>
		<div class="flex flex-col md:flex-row gap-6 md:gap-[24px] 2xl:gap-[30px] 3xl:gap-10 items-center">
			<div
				class="w-full xl:w-[340px] md:w-[225px] 2xl:w-[250px] 3xl:w-[340px] flex flex-col gap-5 xl:gap-10 2xl:gap-[30px]"
			>
				<!-- <div class="animate-ups__item inline-flex relative w-[90px] h-[40px] sm:w-[100px] sm:h-[45px] md:w-[120px] md:h-[50px] lg:w-[130px] lg:h-[55px] xl:w-[140px] xl:h-[60px] 2xl:w-[140px] 2xl:h-[60px]">
					<nuxt-img format="webp" loading="lazy" width="140" height="60" alt="UPS"
						src="/logo/logo-cap-dark.png" class="absolute w-full h-full object-contain" />
				</div> -->

				<div>
					<h3
						class="hidden md:block animate-ups__item bg-gradient-to-r from-[#00C058] to-[#1FAB5F] bg-clip-text text-transparent font-BG text-2xl md:text-[32px] lg:text-[54px] 2xl:text-[60px] 3xl:text-[80px] font-bold lg:leading-[1.75]"
					>
						<span class="text-[#15171E]">Tin</span><br />
						nổi bật
					</h3>

					<h3
						class="block md:hidden animate-ups__item bg-gradient-to-r from-[#00C058] to-[#1FAB5F] bg-clip-text text-transparent font-BG text-xl font-bold leading-normal"
					>
						<span class="text-[#15171E]">Tin</span>
						nổi bật
					</h3>
					<p
						class="animate-ups__item text-sm lg:text-lg xl:text-base 2xl:text-lg text-[#000] font-normal mt-1 md:mt-2"
					>
						Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự kiện của UPS
					</p>
				</div>
				<div class="hidden md:flex gap-3">
					<div class="inline-flex animate-ups__item">
						<button
							:class="
								cn(
									`h-10 px-6 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
									{
										'cursor-auto': !vSwiperIndex,
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
									:class="cn('transition-all duration-300 group-hover:fill-[#15171E]', {})"
								/>
							</svg>
						</button>
					</div>
					<div class="inline-flex animate-ups__item">
						<button
							:class="
								cn(
									`h-10 px-6 bg-[#15171E] rounded-full group relative after:content-[''] after:z-[-1] after:absolute after:w-full after:h-full after:rounded-full after:left-0 after:bottom-[0] after:translate-x-0 after:translate-y-0 after:bg-[#393b41] hover:after:translate-x-[-3px] hover:bg-[#02E56A] hover:text-black hover:after:translate-y-[3px] after:transition-all duration-200`,
									{
										'cursor-auto': vSwiperIndex === 2,
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
				</div>
			</div>
			<div
				class="w-full md:w-[calc(100%-225px-24px)] 2xl:w-[calc(100%-250px-30px)] 3xl:w-[calc(100%-340px-40px)]"
			>
				<swiper
					:modules="[SwiperNavigation]"
					:pagination="true"
					:slides-per-view="1"
					:loop="false"
					:speed="800"
					:space-between="12"
					:initial-slide="vSwiperIndex"
					@swiper="setVSwiperRef"
					@slide-change="updateVSwiperIndex"
					:breakpoints="{
						375: {
							slidesPerView: 1.2,
							spaceBetween: 16,
						},
						768: {
							slidesPerView: 1.7,
							spaceBetween: 8,
						},
						1024: {
							slidesPerView: 2.5,
							spaceBetween: 8,
						},
						1280: {
							slidesPerView: 3.5,
							spaceBetween: 8,
						},
						1440: {
							slidesPerView: 3.5,
							spaceBetween: 8,
						},
						1920: {
							slidesPerView: 3.5,
							spaceBetween: 10,
						},
					}"
				>
					<swiper-slide
						v-for="(doc, i) in data?.dataNews?.posts"
						:key="i"
					>
						<div
							class="card card-dot flex flex-col relative group gap-y-3 sm:gap-y-4 md:gap-y-5 p-0 xl:p-3 md:p-3 2xl:p-4 3xl:p-5 rounded-[20px] sm:rounded-[30px] 2xl:rounded-[22px] overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[450px] xl:h-[400px] 2xl:h-[450px] w-full"
						>
							<div class="glow"></div>
							<div
								class="relative w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[230px] xl:h-[220px] 2xl:h-[260px] rounded-[14px] overflow-hidden"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									:alt="doc?.short_content?.title"
									:src="config.NUXT_APP_IMAGE_URL + doc?.short_content?.cover?.id"
									class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
								/>
							</div>
							<div
								class="h-[calc(100%-200px)] sm:h-[calc(100%-220px)] md:h-[calc(100%-250px)] lg:h-[calc(100%-230px)] xl:h-[calc(100%-220px)] 2xl:h-[calc(100%-260px)]"
							>
								<h4
									class="text-sm 2xl:text-base 3xl:text-xl text-black font-semibold line-clamp-2 mt-2 sm:mt-3 md:mt-4"
								>
									{{ doc?.short_content?.title }}
								</h4>
								<p
									class="text-xs sm:text-sm md:text-sm xl:text-sm 2xl:text-lg text-[#3C4052] font-medium line-clamp-2 mt-2 sm:mt-3"
								>
									{{ doc?.short_content?.blurb }}
								</p>
							</div>
							<nuxt-link
								:to="`/tin-tuc/${doc?.short_content?.slug}`"
								class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
							/>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { onMounted, defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";
import { config } from "~/lib/config";

export default defineComponent({
	name: "ups-news",
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

		// Function to handle mouse movement
		function handleMouseMove(e: any, card: any) {
			const rect = card.getBoundingClientRect();
			const mouseX = e.clientX - rect.left - rect.width / 2;
			const mouseY = e.clientY - rect.top - rect.height / 2;
			let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
			angle = (angle + 360) % 360;
			card.style.setProperty("--start", angle + 60);
		}

		onMounted(() => {
			const cardsEl = document.querySelectorAll(".card");
			cardsEl.forEach((card: any) => {
				card.addEventListener("mousemove", (e: any) => handleMouseMove(e, card));
			});
		});

		const newStore = useNewsStore();

		const { data } = useAsyncData("news", async () => {
			const dataNews = await newStore.fnGetListNews();

			return {
				dataNews: dataNews.data?.data,
			};
		});

		return {
			cn,
			config,
			data,
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

<style scoped>
.card {
	--start: 0;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 30px;
	transition: border-color 0.3s ease-in-out;
}

.card::before {
	position: absolute;
	content: "";
	width: 100%;
	height: 100%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 30px;
	border: 2px solid transparent;
	background: conic-gradient(from 90deg at 50% 50%, #02e56a, #ffffff);
	background-attachment: fixed;
	mask: linear-gradient(#0000, #0000),
		conic-gradient(from calc((var(--start) - (20 * 1.1)) * 1deg), #ffffff1f 0deg, white, #ffffff00 100deg);
	mask-composite: intersect;
	mask-clip: padding-box, border-box;
	opacity: 0;
	transition: 0.5s ease;
}

.glow {
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	filter: blur(14px);
}

.glow::before {
	position: absolute;
	content: "";
	width: 98%;
	height: 98%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 30px;
	border: 2px solid transparent;
	background: conic-gradient(from 90deg at 50% 50%, #02e56a, #ffffff);
	background-attachment: fixed;
	mask: linear-gradient(#0000, #0000),
		conic-gradient(from calc((var(--start) - (20 * 1.1)) * 1deg), #ffffff1f 0deg, white, #ffffff00 100deg);
	mask-composite: intersect;
	mask-clip: padding-box, border-box;
	opacity: 0;
	transition: 1s ease;
}

.card:hover > .glow::before {
	opacity: 1;
}

.card:hover::before {
	opacity: 0.6;
}
</style>
