<template>
	<div class="hidden xl:block">
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<nuxt-link
							to="/"
							class="text-base text-[#5E6673] font-bold hover:text-black"
						>
							Sản phẩm
						</nuxt-link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div class="w-[800px] px-6 py-5 grid gap-x-10 gap-y-5 grid-cols-2">
							<div class="w-full">
								<p class="text-left text-2xl text-[#014227] font-semibold">Khách hàng cá nhân</p>

								<div class="mt-4 grid grid-cols-2 gap-4">
									<nuxt-link
										to="/san-pham"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Margin T+3</span>
									</nuxt-link>
									<nuxt-link
										to="/san-pham"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Zero-Fee</span>
									</nuxt-link>

									<nuxt-link
										to="/bieu-phi"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Vay ký quỹ</span>
									</nuxt-link>
									<nuxt-link
										to="/bieu-phi"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Biểu phí giao dịch</span>
									</nuxt-link>
								</div>
							</div>
							<div class="w-full">
								<p class="text-left text-2xl text-[#014227] font-semibold">Khách hàng doanh nghiệp</p>

								<div class="flex flex-col gap-5 py-5">
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
											<p class="text-base text-[#000] font-semibold">Tư vấn tài chính</p>
											<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
												Nhận ngay sự hỗ trợ từ UPS
											</p>
										</div>
									</nuxt-link>

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
											<p class="text-base text-[#000] font-semibold">Tin đấu giá</p>
											<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
												Cập nhật các sản phẩm HOT
											</p>
										</div>
									</nuxt-link>
								</div>
							</div>
							<div class="w-full">
								<p class="text-left text-2xl text-[#014227] font-semibold">Nền tảng</p>

								<div class="mt-4 grid gap-4 grid-cols-2">
									<nuxt-link
										to="/"
										class="w-full h-[38px] flex items-center justify-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
									>
										Web Trading
									</nuxt-link>
									<nuxt-link
										to="/"
										class="w-full h-[38px] flex items-center justify-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
									>
										App Trading
									</nuxt-link>
								</div>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<nuxt-link
							to="/"
							class="text-base text-[#5E6673] font-bold hover:text-black"
						>
							Đầu tư cùng UPS
						</nuxt-link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div class="w-[400px] flex flex-col gap-5 px-6 py-5">
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
										src="/icons/nhan-dinh-thi-truong.svg"
									/>
								</i>

								<div class="ml-5">
									<p class="text-base text-[#000] font-semibold">Nhận định thị trường</p>
									<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
										Báo cáo phân tích nhanh nhất cùng UPS
									</p>
								</div>
							</nuxt-link>

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
										src="/icons/cong-dong.svg"
									/>
								</i>

								<div class="ml-5">
									<p class="text-base text-[#000] font-semibold">Cộng đồng</p>
									<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
										Đầu tư thông minh cùng cộng đồng UPS
									</p>
								</div>
							</nuxt-link>

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
										src="/icons/cam-nang-dau-tu.svg"
									/>
								</i>

								<div class="ml-5">
									<p class="text-base text-[#000] font-semibold">Hướng dẫn sử dụng</p>
									<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
										Khám phá kho tàng kiến thức đỉnh cấp cùng UPS
									</p>
								</div>
							</nuxt-link>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<nuxt-link
							to="/gioi-thieu"
							class="text-base text-[#5E6673] font-bold hover:text-black"
						>
							Về UPS
						</nuxt-link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div class="w-[400px] flex flex-col gap-5 px-6 py-5">
							<nuxt-link
								to="/gioi-thieu"
								class="flex items-center"
							>
								<i class="inline-flex items-center justify-center">
									<nuxt-img
										format="webp"
										loading="lazy"
										alt="UPS"
										height="24"
										src="/icons/ve-chung-toi.svg"
									/>
								</i>

								<div class="ml-5">
									<p class="text-base text-[#000] font-semibold">Về chúng tôi</p>
									<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">Giới thiệu về UPS</p>
								</div>
							</nuxt-link>

							<Accordion
								type="single"
								class="w-full"
								collapsible
								:default-value="defaultValue"
							>
								<AccordionItem value="1">
									<AccordionTrigger class="flex items-center hover:no-underline">
										<div class="flex">
											<i class="inline-flex items-center justify-center">
												<nuxt-img
													format="webp"
													loading="lazy"
													alt="UPS"
													height="24"
													src="/icons/tin-ups.svg"
												/>
											</i>

											<div class="ml-5">
												<p class="text-left text-base text-[#000] font-semibold">Tin UPS</p>
												<p class="text-left text-sm text-[rgba(0,0,0,0.68)] font-medium">
													Các thông tin công bố từ UPS
												</p>
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent>
										<div class="flex gap-5 flex-col">
											<nuxt-link
												to="/tin-tuc"
												class="flex items-center"
											>
												<i class="inline-flex items-center justify-center">
													<nuxt-img
														format="webp"
														loading="lazy"
														alt="UPS"
														height="24"
														src="/icons/dots-icon.svg"
													/>
												</i>

												<div class="ml-5">
													<p class="text-base text-[#000] font-semibold">Tin hoạt động</p>
												</div>
											</nuxt-link>
											<nuxt-link
												to="/cong-bo-thong-tin"
												class="flex items-center"
											>
												<i class="inline-flex items-center justify-center">
													<nuxt-img
														format="webp"
														loading="lazy"
														alt="UPS"
														height="24"
														src="/icons/dots-icon.svg"
													/>
												</i>

												<div class="ml-5">
													<p class="text-base text-[#000] font-semibold">Công bố thông tin</p>
												</div>
											</nuxt-link>
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>

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
										src="/icons/gia-nhap-ups.svg"
									/>
								</i>

								<div class="ml-5">
									<p class="text-base text-[#000] font-semibold">Gia nhập UPS</p>
									<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
										Phát triển sự nghiệp cùng UPS
									</p>
								</div>
							</nuxt-link>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<!-- <NavigationMenuItem>
					<NavigationMenuLink :class="navigationMenuTriggerStyle()">
						<nuxt-link
							to="/"
							class="text-base text-[#5E6673] font-bold hover:text-black"
						>
							Bảng giá
						</nuxt-link>
					</NavigationMenuLink>
				</NavigationMenuItem> -->
			</NavigationMenuList>
		</NavigationMenu>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default defineComponent({
	name: "navigation",
	components: {
		NavigationMenu,
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuTrigger,
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	},
	setup(props, ctx) {
		const defaultValue = "item-1";

		const accordionItems = [
			{ value: "item-1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
			{
				value: "item-2",
				title: "Is it unstyled?",
				content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
			},
			{
				value: "item-3",
				title: "Can it be animated?",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
		];

		return {
			defaultValue,
			accordionItems,
			navigationMenuTriggerStyle,
		};
	},
});
</script>
