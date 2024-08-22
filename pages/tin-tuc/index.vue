<template>
	<div class="pt-16">
		<div class="container">
			<div class="flex gap-2 items-center justify-center">
				<h2 class="text-[80px] text-black font-bold font-BG leading-tight">Bản tin</h2>
				<nuxt-img
					format="webp"
					loading="lazy"
					width="170"
					height="85"
					alt="UPS"
					src="/logo/logo-cap-dark.png"
				/>
			</div>

			<div class="py-8 flex gap-10 items-center justify-center">
				<nuxt-link
					to="/"
					class="py-2 text-base text-black font-bold hover:underline"
				>
					Biến động thị trường
				</nuxt-link>
				<nuxt-link
					to="/"
					class="py-2 text-base text-black font-bold hover:underline"
				>
					Báo cáo ngày
				</nuxt-link>
				<nuxt-link
					to="/"
					class="py-2 text-base text-black font-bold hover:underline"
				>
					Phân tích từ UPS
				</nuxt-link>
				<nuxt-link
					to="/"
					class="py-2 text-base text-black font-bold hover:underline"
				>
					Về UPS
				</nuxt-link>
				<nuxt-link
					to="/"
					class="py-2 text-base text-black font-bold hover:underline"
				>
					Sự kiện doanh nghiệp
				</nuxt-link>
				<nuxt-link
					to="/"
					class="py-2 text-base text-black font-bold hover:underline"
				>
					Nội bộ UPS
				</nuxt-link>
			</div>

			<!-- TIN TỨC HOT -->
			<div class="py-10">
				<swiper
					:modules="[SwiperNavigation, SwiperAutoplay]"
					:pagination="true"
					:autoplay="{
						delay: 1000,
					}"
					:slides-per-view="1"
					:loop="false"
					:speed="1000"
					:space-between="16"
				>
					<swiper-slide
						v-for="i in 5"
						:key="i"
					>
						<div class="flex h-[570px] bg-[#15171E] rounded-[20px] overflow-hidden">
							<div class="flex-1 w-full h-full flex flex-col items-center justify-center">
								<div class="px-[60px]">
									<nuxt-img
										format="webp"
										loading="lazy"
										width="170"
										height="78"
										alt="UPS"
										src="/logo/logo-cap-light.png"
									/>

									<h3 class="mt-5 text-[32px] text-white font-medium font-BG">
										Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở
										Bắc Carolina
									</h3>

									<div class="w-[140px] h-[2px] bg-[#02E56A] my-[60px]"></div>

									<p class="text-xl text-[#8A8C95] font-medium">
										Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở
										Bắc Carolina
									</p>

									<nuxt-link
										to="/tin-tuc/slug"
										class="mt-8 inline-flex gap-3 items-center text-base font-semibold text-white hover:underline"
									>
										<span>Xem chi tiết</span>
										<i>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="13"
												viewBox="0 0 16 13"
												fill="none"
											>
												<path
													d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM15.6725 7.03033C15.9654 6.73744 15.9654 6.26256 15.6725 5.96967L10.8995 1.1967C10.6066 0.903806 10.1317 0.903806 9.83883 1.1967C9.54594 1.48959 9.54594 1.96447 9.83883 2.25736L14.0815 6.5L9.83883 10.7426C9.54594 11.0355 9.54594 11.5104 9.83883 11.8033C10.1317 12.0962 10.6066 12.0962 10.8995 11.8033L15.6725 7.03033ZM1 7.25H15.1421V5.75H1V7.25Z"
													fill="white"
												/>
											</svg>
										</i>
									</nuxt-link>
								</div>
							</div>

							<div class="w-[880px] h-full">
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="UPS"
									src="/images/tin-tuc-02.png"
									class="w-full h-full object-cover"
								/>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>

			<div class="flex gap-[90px] py-10">
				<div class="flex-1 w-full">
					<div class="flex justify-between">
						<h4 class="text-[40px] font-semibold font-BG">
							Biến động
							<span class="text-green-ups">thị trường</span>
						</h4>

						<div class="flex gap-5 items-center">
							<div class="flex items-center relative">
								<i
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
									>
										<path
											d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
											stroke="#A3A3A3"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M22 22.5L20 20.5"
											stroke="#A3A3A3"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</i>
								<nuxt-input
									class="w-[300px] h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base"
									placeholder="Tìm kiếm"
									name="fullname"
								/>
								<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
							</div>

							<div class="flex items-center relative">
								<i>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
									>
										<path
											d="M8 2.5V5.5"
											stroke="#A3A3A3"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M16 2.5V5.5"
											stroke="#A3A3A3"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M3.5 9.59009H20.5"
											stroke="#A3A3A3"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M21 9V17.5C21 20.5 19.5 22.5 16 22.5H8C4.5 22.5 3 20.5 3 17.5V9C3 6 4.5 4 8 4H16C19.5 4 21 6 21 9Z"
											stroke="#A3A3A3"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M15.6947 14.2H15.7037"
											stroke="#A3A3A3"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M15.6947 17.2H15.7037"
											stroke="#A3A3A3"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M11.9955 14.2H12.0045"
											stroke="#A3A3A3"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M11.9955 17.2H12.0045"
											stroke="#A3A3A3"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M8.29431 14.2H8.30329"
											stroke="#A3A3A3"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M8.29431 17.2H8.30329"
											stroke="#A3A3A3"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</i>
								<nuxt-input
									class="w-[170px] h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base"
									placeholder="Lọc theo ngày"
									name="date"
									type="date"
								/>
								<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
							</div>
						</div>
					</div>

					<div class="mt-10 flex gap-10 flex-col">
						<div
							v-for="i in 10"
							:key="i"
							class="flex gap-8 group"
						>
							<div class="w-[400px] max-h-min relative rounded-[14px] overflow-hidden">
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="UPS"
									src="/images/tin-tuc-01.png"
									class="absolute w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
								/>
							</div>

							<div class="flex-1 w-full">
								<p class="text-lg text-[#00C645] font-medium">#top.co.phieu</p>
								<h3 class="mt-5 text-2xl text-black font-semibold line-clamp-2">
									Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
									Carolina
								</h3>

								<div class="flex gap-2 items-center my-5">
									<i>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="19"
											viewBox="0 0 18 19"
											fill="none"
										>
											<path
												d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z"
												stroke="#696B75"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9 5V9.5L12 11"
												stroke="#696B75"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</i>

									<span class="text-base text-[#696B75] font-semibold"> 15/08/2024 - 22:20 </span>
								</div>

								<p class="text-xl text-black font-normal line-clamp-2">
									Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
									Carolina
								</p>

								<nuxt-link
									to="/tin-tuc/slug"
									class="mt-5 inline-flex gap-5 items-center text-base text-black font-bold"
								>
									<span> Xem chi tiết </span>

									<i>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="13"
											viewBox="0 0 16 13"
											fill="none"
										>
											<path
												d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM15.6725 7.03033C15.9654 6.73744 15.9654 6.26256 15.6725 5.96967L10.8995 1.1967C10.6066 0.903806 10.1317 0.903806 9.83883 1.1967C9.54594 1.48959 9.54594 1.96447 9.83883 2.25736L14.0815 6.5L9.83883 10.7426C9.54594 11.0355 9.54594 11.5104 9.83883 11.8033C10.1317 12.0962 10.6066 12.0962 10.8995 11.8033L15.6725 7.03033ZM1 7.25H15.1421V5.75H1V7.25Z"
												fill="#15171E"
											/>
										</svg>
									</i>
								</nuxt-link>
							</div>
						</div>
					</div>

					<!-- PHÂN TRANG  -->
					<div class="flex justify-center py-[60px]">
						<Pagination
							v-slot="{ page }"
							:total="100"
							:sibling-count="1"
							show-edges
							:default-page="2"
						>
							<PaginationList
								v-slot="{ items }"
								class="flex items-center gap-4"
							>
								<!-- <PaginationFirst /> -->
								<PaginationPrev class="rounded-full bg-transparent hover:bg-transparent" />

								<template v-for="(item, index) in items">
									<PaginationListItem
										v-if="item.type === 'page'"
										:key="index"
										:value="item.value"
										as-child
									>
										<Button
											:class="
												cn(
													'w-10 h-10 p-0 text-base font-semibold rounded-full bg-transparent text-black hover:bg-[#02E56A]',
													{
														'bg-[#02E56A]': item.value === page,
													}
												)
											"
										>
											{{ `${item.value}` }}
										</Button>
									</PaginationListItem>
									<PaginationEllipsis
										v-else
										:key="item.type"
										:index="index"
									/>
								</template>

								<PaginationNext class="rounded-full bg-transparent hover:bg-transparent" />
								<!-- <PaginationLast /> -->
							</PaginationList>
						</Pagination>
					</div>

					<!-- HASTAG -->

					<div class="flex gap-10 justify-center pt-[50px] pb-[100px]">
						<nuxt-link
							to="/"
							class="text-base text-black font-bold"
						>
							#tinthitruong
						</nuxt-link>
						<nuxt-link
							to="/"
							class="text-base text-black font-bold"
						>
							#tinxahoi
						</nuxt-link>
						<nuxt-link
							to="/"
							class="text-base text-black font-bold"
						>
							#congbomoi
						</nuxt-link>
						<nuxt-link
							to="/"
							class="text-base text-black font-bold"
						>
							#baocaomoingay
						</nuxt-link>
						<nuxt-link
							to="/"
							class="text-base text-black font-bold"
						>
							#thegioihanghoa
						</nuxt-link>
						<nuxt-link
							to="/"
							class="text-base text-black font-bold"
						>
							#phaisinh
						</nuxt-link>
					</div>
				</div>
				<div class="w-full max-w-[340px]">
					<div
						class="w-full pt-6 pb-12 pl-8 pr-10 rounded-[14px] bg-[linear-gradient(71deg,#15171E_28.57%,#125933_88.27%)]"
					>
						<nuxt-img
							format="webp"
							loading="lazy"
							width="136"
							height="62"
							alt="UPS"
							src="/logo/logo-cap-light.png"
						/>

						<h4
							class="mt-6 text-[50px] font-semibold leading-tight bg-[linear-gradient(100deg,rgba(255,255,255,0.9)_-0.85%,rgba(255,255,255,0.9)_49.77%,rgba(255,255,255,0)_101.25%)] bg-clip-text text-transparent"
						>
							Đầu tư ngay cùng với <span class="text-[#02E56A]">UPS!</span> ngay nào
						</h4>

						<div class="mt-10 inline-flex">
							<nuxt-link
								to="/"
								class="w-auto h-[50px] px-6 flex gap-2 items-center rounded-[40px] text-base font-bold text-green-ups !bg-[#242733] group"
							>
								<span> Mở tài khoản ngay </span>
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
						</div>
					</div>

					<!-- TIN TỨC LIÊN QUAN -->
					<div class="mt-[60px]">
						<div
							v-for="i in 3"
							:key="i"
							class="py-8 border-t border-[#ccc]"
						>
							<h4 class="text-[24px] text-black font-BG font-semibold line-clamp-3">
								Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina
							</h4>
							<p class="mt-4 text-[20px] text-[#696B75] line-clamp-3 font-medium">
								Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- LIÊN HỆ -->
			<div class="pt-[50px] pb-[100px]">
				<feedback />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";
import { SwiperNavigation, SwiperAutoplay } from "#imports";
import Feedback from "@/components/common/feedback/index.vue";
import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationEllipsis,
	PaginationFirst,
	PaginationLast,
	PaginationList,
	PaginationListItem,
	PaginationNext,
	PaginationPrev,
} from "@/components/ui/pagination";
import NuxtInput from "@/components/ui/input/index.vue";

export default defineComponent({
	name: "tin-tuc",
	components: {
		Feedback,
		NuxtInput,
		Pagination,
		PaginationEllipsis,
		PaginationFirst,
		PaginationLast,
		PaginationList,
		PaginationListItem,
		PaginationNext,
		PaginationPrev,
	},

	setup(props, ctx) {
		return {
			cn,
			SwiperNavigation,
			SwiperAutoplay,
		};
	},
});
</script>
