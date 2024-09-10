<template>
	<Drawer direction="left">
		<DrawerTrigger as-child>
			<div class="flex xl:hidden">
				<div class="w-6 h-6 relative inline-flex items-center justify-center cursor-pointer">
					<nuxt-img
						format="webp"
						loading="lazy"
						height="24"
						alt="UPS"
						src="/icons/menu-icon.svg"
						class="absolute w-full h-full object-contain"
					/>
				</div>
			</div>
		</DrawerTrigger>
		<DrawerContent class="z-[101] mt-[64px] md:mt-[84px] xl:mt-[90px] rounded-none border-none">
			<div
				class="w-full h-[calc(100vh-64px)] md:h-[calc(100vh-84px)] xl:h-[calc(100vh-90px)] px-6 pb-10 relative"
			>
				<div class="absolute left-0 top-0 w-8 h-8 bg-white -translate-y-1/2"></div>
				<div class="absolute right-0 top-0 w-8 h-8 bg-white -translate-y-1/2"></div>
				<!-- <DrawerClose as-child>
					<div class="flex items-center">
						<div class="inline-flex w-6 h-6 relative">
							<nuxt-img
								format="webp"
								loading="lazy"
								src="/icons/close-icon.svg"
								alt="UPS"
								class="absolute w-full h-full object-contain"
							/>
						</div>

						<p class="ml-4 text-lg text-black font-bold font-BG">Hướng dẫn giao dịch</p>
					</div>
				</DrawerClose> -->

				<div class="mt-4">
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
							class="w-full h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base"
							placeholder="Tìm kiếm"
							name="fullname"
						/>
						<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
					</div>
				</div>

				<div class="mt-10">
					<ScrollArea class="w-full h-[calc(100vh-200px)]">
						<Accordion
							type="single"
							class="w-full"
							collapsible
						>
							<AccordionItem value="1">
								<AccordionTrigger>
									<DrawerClose as-child>
										<div
											class="pr-3 py-0 text-black text-lg font-semibold no-underline hover:no-underline"
										>
											Sản phẩm
										</div>
									</DrawerClose>
								</AccordionTrigger>
								<AccordionContent>
									<div class="w-full px-5 grid gap-x-10 gap-y-5 grid-cols-1">
										<div class="w-full">
											<p class="text-left text-sm text-[#014227] font-semibold">
												Khách hàng cá nhân
											</p>

											<div class="mt-4 grid grid-cols-2 gap-4">
												<DrawerClose as-child>
													<nuxt-link
														to="/san-pham"
														class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													>
														<span class="text-sm font-bold text-white">Margin T+3</span>
													</nuxt-link>
												</DrawerClose>

												<DrawerClose as-child>
													<nuxt-link
														to="/san-pham"
														class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													>
														<span class="text-sm font-bold text-white">Zero-Fee</span>
													</nuxt-link>
												</DrawerClose>

												<DrawerClose as-child>
													<nuxt-link
														to="/bieu-phi"
														class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													>
														<span class="text-sm font-bold text-white">Vay ký quỹ</span>
													</nuxt-link>
												</DrawerClose>

												<DrawerClose as-child>
													<nuxt-link
														to="/bieu-phi"
														class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													>
														<span class="text-sm font-bold text-white"
															>Biểu phí giao dịch</span
														>
													</nuxt-link>
												</DrawerClose>
											</div>
										</div>
										<div class="w-full">
											<p class="text-left text-sm text-[#014227] font-semibold">
												Khách hàng doanh nghiệp
											</p>

											<div class="flex flex-col gap-5 py-5">
												<DrawerClose as-child>
													<nuxt-link
														to="/"
														class="flex items-center"
													>
														<i class="inline-flex items-center justify-center">
															<nuxt-img
																format="webp"
																loading="lazy"
																alt="UPS"
																height="24"
																src="/icons/tu-van-tai-chinh.svg"
															/>
														</i>

														<div class="ml-5">
															<p class="text-sm text-[#000] font-semibold">
																Tư vấn tài chính
															</p>
															<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
																Nhận ngay sự hỗ trợ từ UPS
															</p>
														</div>
													</nuxt-link>
												</DrawerClose>

												<DrawerClose as-child>
													<nuxt-link
														to="/"
														class="flex items-center"
													>
														<i class="inline-flex items-center justify-center">
															<nuxt-img
																format="webp"
																loading="lazy"
																alt="UPS"
																height="24"
																src="/icons/tin-dau-gia.svg"
															/>
														</i>

														<div class="ml-5">
															<p class="text-base text-[#000] font-semibold">
																Tin đấu giá
															</p>
															<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
																Cập nhật các sản phẩm HOT
															</p>
														</div>
													</nuxt-link>
												</DrawerClose>
											</div>
										</div>
										<div class="w-full">
											<p class="text-left text-sm text-[#014227] font-semibold">Nền tảng</p>

											<div class="mt-4 grid gap-4 grid-cols-2">
												<DrawerClose as-child>
													<nuxt-link
														to="/"
														class="w-full h-[38px] flex items-center justify-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
													>
														Web Trading
													</nuxt-link>
												</DrawerClose>
												<DrawerClose as-child>
													<nuxt-link
														to="/"
														class="w-full h-[38px] flex items-center justify-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
													>
														App Trading
													</nuxt-link>
												</DrawerClose>
											</div>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="2">
								<AccordionTrigger>
									<DrawerClose as-child>
										<div
											class="pr-3 py-0 text-black text-lg font-semibold no-underline hover:no-underline"
										>
											Đầu tư cùng UPS
										</div>
									</DrawerClose>
								</AccordionTrigger>
								<AccordionContent>
									<div class="w-full flex flex-col gap-4 px-5">
										<DrawerClose as-child>
											<nuxt-link
												to="/"
												class="flex items-center"
											>
												<i class="w-5 h-5 inline-flex items-center justify-center">
													<nuxt-img
														format="webp"
														loading="lazy"
														alt="UPS"
														width="20"
														height="20"
														src="/icons/nhan-dinh-thi-truong.svg"
													/>
												</i>

												<div class="ml-4">
													<p class="text-sm text-[#000] font-semibold">
														Nhận định thị trường
													</p>
													<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
													Báo cáo phân tích nhanh nhất cùng UPS
												</p> -->
												</div>
											</nuxt-link>
										</DrawerClose>
										<DrawerClose as-child>
											<nuxt-link
												to="/"
												class="flex items-center"
											>
												<i class="w-5 h-5 inline-flex items-center justify-center">
													<nuxt-img
														format="webp"
														loading="lazy"
														alt="UPS"
														width="20"
														height="20"
														src="/icons/cong-dong.svg"
													/>
												</i>

												<div class="ml-4">
													<p class="text-sm text-[#000] font-semibold">Cộng đồng</p>
													<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
													Đầu tư thông minh cùng cộng đồng UPS
												</p> -->
												</div>
											</nuxt-link>
										</DrawerClose>
										<DrawerClose as-child>
											<nuxt-link
												to="/"
												class="flex items-center"
											>
												<i class="w-5 h-5 inline-flex items-center justify-center">
													<nuxt-img
														format="webp"
														loading="lazy"
														alt="UPS"
														width="20"
														height="20"
														src="/icons/cam-nang-dau-tu.svg"
													/>
												</i>

												<div class="ml-4">
													<p class="text-sm text-[#000] font-semibold">Cẩm nang đầu tư</p>
													<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
													Khám phá kho tàng kiến thức đỉnh cấp cùng UPS
												</p> -->
												</div>
											</nuxt-link>
										</DrawerClose>
									</div>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="3">
								<AccordionTrigger>
									<DrawerClose as-child>
										<div
											class="pr-3 py-0 text-black text-lg font-semibold no-underline hover:no-underline"
										>
											Về UPS
										</div>
									</DrawerClose>
								</AccordionTrigger>
								<AccordionContent>
									<div class="w-full flex flex-col gap-4 px-5">
										<DrawerClose as-child>
											<nuxt-link
												to="/gioi-thieu"
												class="flex items-center"
											>
												<i class="w-5 h-5 inline-flex items-center justify-center">
													<nuxt-img
														format="webp"
														loading="lazy"
														alt="UPS"
														width="20"
														height="20"
														src="/icons/ve-chung-toi.svg"
													/>
												</i>

												<div class="ml-4">
													<p class="text-sm text-[#000] font-semibold">Về chúng tôi</p>
													<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
													Báo cáo phân tích nhanh nhất cùng UPS
												</p> -->
												</div>
											</nuxt-link>
										</DrawerClose>
										<Accordion
											type="single"
											class="w-full"
											collapsible
										>
											<AccordionItem value="1">
												<AccordionTrigger class="p-0 flex items-center hover:no-underline">
													<div class="flex">
														<i class="w-5 h-5 inline-flex items-center justify-center">
															<nuxt-img
																format="webp"
																loading="lazy"
																alt="UPS"
																width="20"
																height="20"
																src="/icons/tin-ups.svg"
															/>
														</i>

														<div class="ml-4">
															<p class="text-left text-sm text-[#000] font-semibold">
																Tin UPS
															</p>
															<!-- <p
																class="text-left text-sm text-[rgba(0,0,0,0.68)] font-medium"
															>
																Các thông tin công bố từ UPS
															</p> -->
														</div>
													</div>
												</AccordionTrigger>
												<AccordionContent class="pb-0">
													<div class="mt-4 flex gap-4 flex-col">
														<DrawerClose as-child>
															<nuxt-link
																to="/tin-tuc"
																class="flex items-center"
															>
																<i
																	class="w-5 h-5 inline-flex items-center justify-center"
																>
																	<nuxt-img
																		format="webp"
																		loading="lazy"
																		alt="UPS"
																		width="12"
																		height="12"
																		src="/icons/dots-icon.svg"
																	/>
																</i>

																<div class="ml-4">
																	<p class="text-sm text-[#000] font-semibold">
																		Tin hoạt động
																	</p>
																</div>
															</nuxt-link>
														</DrawerClose>

														<DrawerClose as-child>
															<nuxt-link
																to="/cong-bo-thong-tin"
																class="flex items-center"
															>
																<i
																	class="w-5 h-5 inline-flex items-center justify-center"
																>
																	<nuxt-img
																		format="webp"
																		loading="lazy"
																		alt="UPS"
																		width="12"
																		height="12"
																		src="/icons/dots-icon.svg"
																	/>
																</i>

																<div class="ml-4">
																	<p class="text-sm text-[#000] font-semibold">
																		Công bố tin
																	</p>
																</div>
															</nuxt-link>
														</DrawerClose>
													</div>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
										<DrawerClose as-child>
											<nuxt-link
												to="/"
												class="flex items-center"
											>
												<i class="w-5 h-5 inline-flex items-center justify-center">
													<nuxt-img
														format="webp"
														loading="lazy"
														alt="UPS"
														width="20"
														height="20"
														src="/icons/gia-nhap-ups.svg"
													/>
												</i>

												<div class="ml-4">
													<p class="text-sm text-[#000] font-semibold">Gia nhập UPS</p>
													<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
													Khám phá kho tàng kiến thức đỉnh cấp cùng UPS
												</p> -->
												</div>
											</nuxt-link>
										</DrawerClose>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</ScrollArea>
				</div>
			</div>
		</DrawerContent>
	</Drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import NuxtInput from "@/components/ui/input/index.vue";

export default defineComponent({
	name: "nav-mobile",
	components: {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
		Drawer,
		DrawerClose,
		DrawerContent,
		DrawerDescription,
		DrawerFooter,
		DrawerHeader,
		DrawerTitle,
		DrawerTrigger,
		ScrollArea,
		NuxtInput,
	},
	setup(props, ctx) {},
});
</script>
