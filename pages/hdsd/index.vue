<template>
	<div>
		<div
			class="pt-10 md:pt-12 xl:pt-[100px] pb-10 md:pb-12 xl:pb-20 rounded-b-[20px] bg-gradient-to-l from-[#125933] to-[#15171E] via-[#125933] [background-position:65%_center]"
		>
			<div class="container">
				<div>
					<h3 class="text-[24px] md:text-[32px] xl:text-[60px] text-white font-bold font-BG">
						Hướng dẫn giao dịch
					</h3>
					<div
						class="text-[16px] md:text-[24px] xl:text-[50px] font-bold font-BG bg-gradient-to-r from-[#00C058] to-[#1FAB5F] [background-position:41.75%] bg-clip-text text-transparent"
					>
						Cùng bạn đồng hành, dẫn lối đầu tư
					</div>
				</div>
			</div>
		</div>

		<!-- CHI TIẾT -->
		<div class="container">
			<div class="py-16 flex flex-col md:flex-row xl:flex-row gap-10 xl:gap-0 justify-between">
				<!-- TOGGLE -->
				<div class="flex items-center xl:hidden">
					<Drawer direction="left">
						<DrawerTrigger as-child>
							<div class="flex items-center">
								<div class="inline-flex w-6 h-6 relative">
									<nuxt-img
										format="webp"
										loading="lazy"
										src="/icons/filter-icon.svg"
										alt="UPS"
										class="absolute w-full h-full object-contain"
									/>
								</div>

								<p class="ml-3 text-lg text-black underline font-bold font-BG">Hướng dẫn giao dịch</p>
							</div>
						</DrawerTrigger>
						<DrawerContent class="z-[101]">
							<div class="w-full h-screen px-6 py-5">
								<DrawerClose as-child>
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

										<p class="ml-3 text-lg text-black font-bold font-BG">Hướng dẫn giao dịch</p>
									</div>
								</DrawerClose>

								<div class="">
									<div class="mt-5 flex items-center relative">
										<nuxt-input
											class="w-full h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base"
											placeholder="Tìm kiếm"
											name="fullname"
										/>
										<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
									</div>
								</div>

								<div class="mt-10">
									<Accordion
										type="single"
										class="w-full"
										collapsible
										:default-value="defaultValue"
									>
										<AccordionItem
											v-for="(item, index) in dataFake"
											:key="item.value"
											:value="item.value"
										>
											<AccordionTrigger
												class="my-3 pr-3 py-0 group hover:no-underline hover:bg-[#F3F5FB]"
											>
												<div class="flex items-center">
													<div
														class="w-11 h-11 bg-[#34C759] inline-flex items-center justify-center text-lg text-white font-bold"
													>
														{{ `${index + 1}` }}
													</div>
													<p
														class="flex-1 w-full h-full px-5 text-lg text-black font-bold line-clamp-1"
													>
														{{ item.title }}
													</p>
												</div>
												<template #icon> <div></div></template>
											</AccordionTrigger>
											<AccordionContent v-if="item.sub && item.sub.length > 0">
												<div class="ml-11 flex flex-col gap-3">
													<div
														v-for="(sub, k) in item.sub"
														:key="k"
														class="flex items-center cursor-pointer opacity-60 hover:opacity-100 hover:bg-[#F3F5FB]"
													>
														<div class="w-11 h-11 inline-flex items-center justify-center">
															<div
																class="w-2 h-2 inline-flex bg-[#15171E] rounded-full"
															></div>
														</div>

														<p class="text-lg text-black font-bold">{{ sub.title }}</p>
													</div>
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</div>
							</div>
						</DrawerContent>
					</Drawer>
				</div>
				<div class="hidden md:block xl:block w-[350px]">
					<div class="">
						<h4 class="text-xl text-black font-bold">Hướng dẫn sử dụng</h4>
						<div class="mt-5 flex items-center relative">
							<!-- <i>
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
							</i> -->
							<nuxt-input
								class="w-full h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base"
								placeholder="Tìm kiếm"
								name="fullname"
							/>
							<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
						</div>
					</div>

					<div class="mt-10">
						<Accordion
							type="single"
							class="w-full"
							collapsible
							:default-value="defaultValue"
						>
							<AccordionItem
								v-for="(item, index) in dataFake"
								:key="item.value"
								:value="item.value"
							>
								<AccordionTrigger class="my-3 pr-3 py-0 group hover:no-underline hover:bg-[#F3F5FB]">
									<div class="flex items-center">
										<div
											class="w-11 h-11 bg-[#34C759] inline-flex items-center justify-center text-lg text-white font-bold"
										>
											{{ `${index + 1}` }}
										</div>
										<p class="flex-1 w-full h-full px-5 text-lg text-black font-bold line-clamp-1">
											{{ item.title }}
										</p>
									</div>
									<template #icon> <div></div></template>
								</AccordionTrigger>
								<AccordionContent v-if="item.sub && item.sub.length > 0">
									<div class="ml-11 flex flex-col gap-3">
										<div
											v-for="(sub, k) in item.sub"
											:key="k"
											class="flex items-center cursor-pointer opacity-60 hover:opacity-100 hover:bg-[#F3F5FB]"
										>
											<div class="w-11 h-11 inline-flex items-center justify-center">
												<div class="w-2 h-2 inline-flex bg-[#15171E] rounded-full"></div>
											</div>

											<p class="text-lg text-black font-bold">{{ sub.title }}</p>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				<div class="flex-1 xl:flex-none w-full xl:w-[900px]">
					<div class="">
						<div
							class="animate-about__item inline-flex items-center justify-center relative w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]"
						>
							<nuxt-img
								format="webp"
								loading="lazy"
								width="173"
								height="78"
								alt="UPS"
								src="/logo/logo-cap-dark.png"
								class="absolute w-full h-full object-contain"
							/>
						</div>

						<div class="mt-6">
							<h5 class="text-[40px] text-black font-semibold font-BG">Mở tài khoản chứng khoán</h5>
							<p class="text-base text-[#535662] font-medium">
								Giới thiệu tóm tắt về chức năng bao gồm nội dung và hình ảnh đại diện
							</p>

							<div class="py-10">
								<div
									class="animate-about__item w-full h-[200px] md:h-[400px] xl:h-[500px] relative rounded-[18px] lg:rounded-[20px] overflow-hidden"
								>
									<iframe
										width="100%"
										height="100%"
										src="https://www.youtube.com/embed/wwOWbN09Kkc?si=jQVujZYq4CnmT01-"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerpolicy="strict-origin-when-cross-origin"
										allowfullscreen
										class="absolute w-full h-full"
									></iframe>
								</div>
								<p class="mt-3 text-base text-[#535662] font-medium">
									Người dùng truy cập Hiệu suất đầu tư bằng cách click chọn Hiệu suất đầu tư. Tại đây
									hiển thị thông tin biểu đồ hiệu suất đầu tư, lợi nhuận theo tháng, biểu đồ giá trị
									chứng khoán/tài sản ròng/nợ, thông tin lãi/ lỗ đã thực hiện, lợi nhuận mã chứng
									khoán theo từng
									<nuxt-link
										to="/"
										class="text-[#6382FF] underline"
									>
										tiểu khoản đã chọn tương ứng.
									</nuxt-link>
								</p>
							</div>
						</div>
					</div>

					<div class="mt-4 md:mt-6">
						<h5 class="text-[24px] text-black font-semibold font-BG">Tài khoản</h5>
						<p class="text-base text-[#535662] font-medium">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>

						<div class="py-10">
							<div
								class="animate-about__item w-full h-[200px] md:h-[400px] xl:h-[500px] relative rounded-[18px] lg:rounded-[20px] overflow-hidden"
							>
								<nuxt-img
									loading="lazy"
									format="webp"
									alt="UPS"
									height="500"
									src="/images/woman-hand-holding-credit-card-using-portable-tablet-online-banking-businesswoman-shopping-purchasing-online-paying-by-credit-card 1.png"
									class="absolute w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>

					<div class="mt-4 md:mt-6">
						<h5 class="text-[24px] text-black font-semibold font-BG">Hiệu suất đầu tư</h5>
						<p class="text-base text-[#535662] font-medium">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
					</div>

					<div class="mt-4 md:mt-6">
						<h5 class="text-[24px] text-black font-semibold font-BG">Lãi lỗ đã thực hiện</h5>
						<p class="text-base text-[#535662] font-medium">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>

						<div class="py-4 md:py-10">
							<div
								class="animate-about__item w-full h-[200px] md:h-[400px] xl:h-[500px] relative rounded-[18px] lg:rounded-[20px] overflow-hidden"
							>
								<nuxt-img
									loading="lazy"
									format="webp"
									alt="UPS"
									height="500"
									src="/images/woman-hand-holding-credit-card-using-portable-tablet-online-banking-businesswoman-shopping-purchasing-online-paying-by-credit-card 1.png"
									class="absolute w-full h-full object-cover"
								/>
							</div>
						</div>

						<div class="mt-6">
							<h5 class="text-[24px] text-black font-semibold font-BG">Lợi nhuận mã chứng khoán</h5>
							<p class="text-base text-[#535662] font-medium">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>
					</div>

					<!-- COMMENT -->
					<div class="py-4 md:py-10">
						<comment />
						<p class="text-center text-[#535662] font-medium mt-6">Cập nhật mới nhất: 20/08/2024</p>
					</div>

					<!-- NEXT PAGE -->
					<div class="grid gap-5 grid-cols-1 md:grid-cols-2">
						<div class="p-5 border border-[#ECECEC] rounded-[10px] relative">
							<p class="text-base text-[#535662] font-medium">Bài viết trước</p>
							<p class="text-xl text-black font-semibold font-BG">Quản lý tài khoản</p>
							<nuxt-link
								to="/"
								class="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0"
							></nuxt-link>
						</div>
						<div class="p-5 border border-[#ECECEC] rounded-[10px] relative">
							<p class="text-right text-base text-[#535662] font-medium">Bài viết tiếp theo</p>
							<p class="text-right text-xl text-black font-semibold font-BG">Tổng quan tài khoản</p>
							<nuxt-link
								to="/"
								class="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0"
							></nuxt-link>
						</div>
					</div>
				</div>
				<div class="hidden xl:flex gap-6 flex-col w-[200px]">
					<div class="">
						<h6 class="text-base text-black font-bold">Nội dung chính</h6>

						<div class="flex gap-2 flex-col mt-4">
							<div
								class="px-3 py-2 rounded-[10px] bg-[#F3F5FB] cursor-pointer text-base text-[#757B90] font-semibold hover:text-black hover:bg-[#02E56A]"
							>
								Tài khoản
							</div>
							<div
								class="px-3 py-2 rounded-[10px] bg-[#F3F5FB] cursor-pointer text-base text-[#757B90] font-semibold hover:text-black hover:bg-[#02E56A]"
							>
								Hiệu suất đầu tư
							</div>
							<div
								class="px-3 py-2 rounded-[10px] bg-[#F3F5FB] cursor-pointer text-base text-[#757B90] font-semibold hover:text-black hover:bg-[#02E56A]"
							>
								Lãi lỗ đã thực hiện
							</div>

							<div
								class="px-3 py-2 rounded-[10px] bg-[#F3F5FB] cursor-pointer text-base text-[#757B90] font-semibold hover:text-black hover:bg-[#02E56A]"
							>
								Lợi nhuận mã chứng khoán
							</div>
						</div>
					</div>

					<div class="p-4 rounded-[10px] round-[#C1C7DD] bg-[#F3F5FB]">
						<h5 class="text-base text-black font-bold">Tôi muốn đọc nhiều hơn</h5>
						<p class="text-sm text-[#535662] font-medium">
							Đăng ký nhận thêm các hưỡng dẫn giao dịch tuyệt vời từ UPS qua email của bạn
						</p>

						<div class="my-4">
							<nuxt-input
								class="w-full h-[40px] px-6 text-[#535662] bg-[#ECEEF4] backdrop-blur-[20px] rounded-[40px] border-none focus:ring-0 placeholder:text-[#ADB2C0]"
								placeholder="abc@gmail.com"
								name="email"
							/>
						</div>

						<button
							class="flex items-center justify-between w-full h-10 px-6 rounded-full bg-black text-green-ups group"
						>
							<span class="text-base font-semibold">Đăng ký</span>

							<i class="w-4 h-4 inline-flex items-center justify-center">
								<nuxt-img
									src="/icons/arrow-icon.svg"
									loading="lazy"
									width="16"
									height="16"
									alt="UPS"
								/>
							</i>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- FEEDBACK -->
		<div class="container">
			<div class="pt-0 pb-20 md:py-[100px]">
				<feedback />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Comment from "@/components/common/comment/index.vue";
import NuxtInput from "@/components/ui/input/index.vue";
import Feedback from "@/components/common/feedback/index.vue";
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

export default defineComponent({
	name: "hdsd",
	components: {
		NuxtInput,
		Comment,
		Feedback,
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
	},
	setup(props, ctx) {
		const defaultValue = "1";

		const dataFake = [
			{
				value: "1",
				title: "Sẵn sàng gia nhập UPS",
				content: "Yes. It adheres to the WAI-ARIA design pattern.",
				sub: [
					{
						value: "1-1",
						title: "Mở tài khoản chứng khoán",
					},
					{
						value: "1-2",
						title: "Biểu mẫu chứng từ",
					},
					{
						value: "1-3",
						title: "Cập nhật thông tin",
					},
					{
						value: "1-4",
						title: "Bản công bố rủi ro",
					},
				],
			},
			{
				value: "2",
				title: "Đầu tư",
				content: "Yes. It's unstyled by default, giving you freedom over the look and feel.",
			},
			{
				value: "3",
				title: "Giao dịch tiền",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
			{
				value: "4",
				title: "Hướng dẫn sử dụng",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
			{
				value: "5",
				title: "Lưu ký chứng khoán",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
			{
				value: "6",
				title: "Hướng dẫn công bố thông tin",
				content: "Yes! You can use the transition prop to configure the animation.",
			},

			{
				value: "7",
				title: "Hướng dẫn giao dịch & Trái phiếu doanh nghiệp riêng lẻ",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
			{
				value: "8",
				title: "FAQ",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
			{
				value: "9",
				title: "Giao dịch tiền",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
			{
				value: "10",
				title: "Chính sách xử lý cá nhân",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
			{
				value: "11",
				title: "Chương trình khách hàng phát triển",
				content: "Yes! You can use the transition prop to configure the animation.",
			},
		];
		return {
			defaultValue,
			dataFake,
		};
	},
});
</script>

<style></style>
