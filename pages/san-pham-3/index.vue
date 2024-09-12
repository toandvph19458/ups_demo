<template>
	<section>
		<!-- banner -->
		<banner />
		<!-- slider -->
		<slider />
		<!-- ách thức tham gia -->
		<tham-gia />
		<!-- tham gia ngay -->
		<div class="flex p-6 flex-col justify-end items-start 3xl:px-[225px] 3xl:pt-[200px] 3xl:pb-[100px]">
			<div
				class="flex w-full flex-col 3xl:flex-row-reverse items-center 3xl:items-end gap-6 bg-gradient-to-l from-[#00D7B0] via-[#00D7B0] to-[#7B57FF] rounded-[20px] p-6 h-[343px] 3xl:h-[449px] relative mx-auto 3xl:p-12">
				<div class="flex flex-col justify-center gap-3 w-[266px] 3xl:w-full  3xl:justify-end">
					<p
						class=" text-white text-center 3xl:text-right font-BG text-[22px] leading-normal capitalize 3xl:text-[60px]">
						Tham gia ngay
						hôm
						nay
					</p>
					<p
						class="text-black text-center 3xl:text-right font-BG text-[14px] font-semibold leading-[24px] 3xl:leading-[60px] 3xl:text-[40px]">
						Để trải
						nghiệm
						giao
						dịch chứng khoán <br />
						với <span class="text-[#FFF35D] font-HG text-[18px] 3xl:text-[50px] 3xl:leading-[60px]">phí 0
							đồng</span> cùng UPS
					</p>
					<div class="inline-flex mx-auto 3xl:w-full 3xl:justify-end 3xl:mt-[40px]">
						<nuxt-link to="/" class="btn active group ">
							<span class="text-[10px] sm:text-[12px] xl:text-[14px] "> Mở tài khoản ngay </span>
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
				</div>
				<div class="3xl:w-[90%]">
					<p class="text-white text-center font-BG text-[14px] leading-normal px-10 3xl:text-[24px]">Thời gian
						diễn ra từ
						01/09/2024 đến
						hết 31/12/2024</p>
				</div>
				<img src="/images/san-pham-3-tham-gia.png" alt=""
					class="absolute bottom-[-100px] w-[240px] h-[240px] 3xl:w-[500px] 3xl:h-[500px] 3xl:left-0 3xl:top-[-100px]">
			</div>
		</div>
		<!-- câu hỏi thường gặp -->
		<question />

		<!-- điều kiện điều khoản -->
		<div class="flex p-6 flex-col justify-end items-start gap-3 3xl:px-[225px] 3xl:py-[100px]">
			<div
				class="flex p-6 flex-col justify-center items-center rounded-[24px] bg-gradient-to-tr from-[rgba(237,237,244,0.16)] via-[rgba(237,237,244,0.79)] to-[rgba(237,237,244,0.15)] mx-auto w-full">
				<div class="w-[279px] 3xl:w-full flex flex-col items-start gap-6 3xl:items-end">
					<div class="w-full">
						<p class="text-black font-BG text-[20px] leading-normal font-semibold 3xl:text-[60px]">Điều kiện
							&
							điều khoản
						</p>
					</div>

					<div
						class="h-[380px] flex md:hidden flex-col 3xl:flex-row justify-center items-start gap-3  3xl:items-center">
						<div
							class="h-[120px] flex flex-col justify-center items-start gap-3 p-4 rounded-md border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1">
							<p class="font-BG text-[14px] font-semibold leading-normal text-left">Đối tượng áp dụng
							</p>
							<p class="font-HG text-[12px] leading-normal">Tất cả khách hàng mới và hiện tại của UPS
								trong thời gian diễn ra chương trình</p>
						</div>
						<div
							class="h-[120px] flex flex-col justify-center items-start gap-3 p-4 rounded-md border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1">
							<p class="font-BG text-[14px] font-semibold leading-normal text-left">Phạm vi áp dụng
							</p>
							<p class="font-HG text-[12px] leading-normal">Áp dụng cho các giao dịch chứng khoán cơ
								sở
								được thực hiện qua nền tảng giao dịch của UPS. Không áp dụng cho giao dịch margin và
								các
								sản phẩm tài chính khác</p>
						</div>
						<div
							class="h-[120px] w-full flex flex-col justify-center items-start gap-3 p-4 rounded-md border border-[#7B57FF] backdrop-blur-lg 3xl:flex-1">
							<p class="font-BG text-[14px] font-semibold leading-normal text-left">Thời gian áp dụng
							</p>
							<p class="font-HG text-[12px] leading-normal">Từ 01/09/2024 đến hết 31/12/2024</p>
						</div>

					</div>
					<!-- slider -->
					<div class="3xl:block hidden h-[380px] w-full">
						<swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :speed="800"
							:initial-slide="vSwiperIndex" @swiper="setVSwiperRef" @slide-change="updateVSwiperIndex"
							:breakpoints="{
								1200: {
									slidesPerView: 2.5,
									spaceBetween: 10,
								},
							}">
							<swiper-slide>
								<div class=" w-full">
									<div
										class="h-[213px] flex flex-col justify-between items-start gap-3 p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300 ">
										<p class="font-BG text-[24px] font-semibold leading-normal text-left">Đối tượng
											áp dụng</p>
										<p class="font-HG text-[18px] leading-normal">Tất cả khách hàng mới và hiện tại
											của UPS trong thời gian diễn ra chương trình</p>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class=" w-full">
									<div
										class="h-[213px] flex flex-col justify-between items-start gap-3 p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300 ">
										<p class="font-BG text-[24px] font-semibold leading-normal text-left">Đối tượng
											áp dụng</p>
										<p class="font-HG text-[18px] leading-normal">Tất cả khách hàng mới và hiện tại
											của UPS trong thời gian diễn ra chương trình</p>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class=" w-full">
									<div
										class="h-[213px] flex flex-col justify-between items-start gap-3 p-10 rounded-[24px] border border-[#7B57FF] backdrop-blur-lg bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300 ">
										<p class="font-BG text-[24px] font-semibold leading-normal text-left">Đối tượng
											áp dụng</p>
										<p class="font-HG text-[18px] leading-normal">Tất cả khách hàng mới và hiện tại
											của UPS trong thời gian diễn ra chương trình</p>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>

					<div class="flex flex-col 3xl:flex-row items-start gap-3 3xl:w-[1042px] 3xl:gap-[60px] ">
						<p class="font-BG text-[14px] font-semibold leading-normal 3xl:text-[24px]">Quy định khác</p>
						<div>

							<p class="font-HG text-[12px] leading-normal 3xl:text-[18px]">
								UPS có quyền từ chối hoặc hủy bỏ ưu đãi nếu phát hiện khách hàng có hành vi gian lận
								hoặc vi
								phạm quy định.
							</p>
							<p class="font-HG text-[12px] leading-normal 3xl:text-[18px]">
								UPS có quyền thay đổi, điều chỉnh hoặc kết thúc chương trình trước thời hạn và sẽ thông
								báo
								trước đến khách hàng thông qua các kênh thông tin chính thức.
							</p>
							<p class="font-HG text-[12px] leading-normal 3xl:text-[18px]">
								Các điều khoản và điều kiện khác tuân theo quy định hiện hành của UPS và pháp luật Việt
								Nam.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "./component/banner.vue";
import Slider from "./component/slider.vue";
import ThamGia from "./component/tham-gia.vue";
import Question from "./component/question.vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
	name: "san-pham-3",
	components: {
		Banner,
		Slider,
		ThamGia,
		Question
	},
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
