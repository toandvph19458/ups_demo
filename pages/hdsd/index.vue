<template>
	<div>
		<div
			class="py-5 md:py-10 xl:py-[50px] 2xl:py-[60px] 3xl:py-20 rounded-b-[20px] bg-gradient-to-l from-[#125933] to-[#15171E] via-[#125933] [background-position:65%_center]"
		>
			<div class="container">
				<div>
					<h3
						class="text-[24px] md:text-[36px] xl:text-[52px] 2xl:text-[56px] 3xl:text-[60px] text-white font-bold font-BG"
					>
						Hướng dẫn sử dụng
					</h3>
					<div
						class="text-[14px] md:text-[26px] xl:text-[42px] 2xl:text-[46px] 3xl:text-[50px] font-bold font-BG bg-gradient-to-r from-[#00C058] to-[#1FAB5F] [background-position:41.75%] bg-clip-text text-transparent"
					>
						Cùng bạn đồng hành, dẫn lối đầu tư
					</div>
				</div>
			</div>
		</div>

		<!-- CHI TIẾT -->
		<div class="container">
			<div class="py-16 flex flex-col xl:flex-row gap-10 xl:gap-10 justify-between">
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
									<ScrollArea class="w-full h-[calc(100vh-200px)]">
										<Accordion
											type="single"
											class="w-full"
											collapsible
											:default-value="defaultValue"
										>
											<AccordionItem
												v-for="(item, index) in data?.dataDocument?.instruction_structure"
												:key="item.slug"
												:value="item.slug"
											>
												<AccordionTrigger>
													<div
														v-if="item?.documents && item?.documents.length > 0"
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
													</div>

													<nuxt-link
														v-else
														:to="`/hdsd#${item?.slug}`"
														class="my-3 pr-3 py-0 group hover:no-underline hover:bg-[#F3F5FB]"
													>
														<DrawerClose as-child>
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
														</DrawerClose>
													</nuxt-link>

													<template #icon> <div></div></template>
												</AccordionTrigger>
												<AccordionContent v-if="item.documents && item.documents.length > 0">
													<DrawerClose
														v-for="(sub, k) in item.documents"
														:key="k"
														as-child
													>
														<nuxt-link
															:to="`/hdsd#${sub?.document?.slug}`"
															class="ml-11 flex flex-col gap-3"
														>
															<div
																class="flex items-center cursor-pointer opacity-60 hover:opacity-100 hover:bg-[#F3F5FB]"
															>
																<div
																	class="w-11 h-11 inline-flex items-center justify-center"
																>
																	<div
																		class="w-2 h-2 inline-flex bg-[#15171E] rounded-full"
																	></div>
																</div>

																<p class="text-lg text-black font-bold">
																	{{ sub?.document?.title }}
																</p>
															</div>
														</nuxt-link>
													</DrawerClose>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</ScrollArea>
								</div>
							</div>
						</DrawerContent>
					</Drawer>
				</div>
				<div class="hidden xl:block w-[350px]">
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
							:default-value="'2'"
						>
							<AccordionItem
								v-for="(item, index) in data?.dataDocument?.instruction_structure"
								:key="item.slug"
								:value="item.slug"
							>
								<AccordionTrigger class="my-3 pr-3 py-0 group hover:no-underline hover:bg-[#F3F5FB]">
									<div class="flex items-center text-left">
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
								<AccordionContent v-if="item.documents && item.documents.length > 0">
									<div class="ml-11 flex flex-col gap-3">
										<nuxt-link
											v-for="(sub, k) in item.documents"
											:key="k"
											:to="`/hdsd#${sub?.document?.slug}`"
											:class="
												cn(
													'flex gap-2 items-center cursor-pointer opacity-60 hover:opacity-100 hover:bg-[#F3F5FB]',
													{
														'bg-[#F3F5FB] opacity-100': sub?.document?.slug == slug,
													}
												)
											"
										>
											<div class="w-11 h-11 inline-flex items-center justify-center">
												<div class="w-2 h-2 inline-flex bg-[#15171E] rounded-full"></div>
											</div>

											<p class="w-full flex-1 text-lg text-black font-bold capitalize">
												{{ sub?.document?.title }}
											</p>
										</nuxt-link>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				<div class="flex-1 xl:flex-none w-full xl:w-[900px]">
					<!-- <div
						v-for="(item, index) in data?.dataDocument?.instruction_structure"
						:id="item?.slug"
						:key="item.slug"
						class="mt-4 md:mt-6"
					>
						<h5 class="text-[24px] text-black font-semibold font-BG">{{ item.title }}</h5>
						<p class="mt-2 text-base text-[#535662] font-medium">{{ item.blurb }}</p>

						<div
							v-for="(sub, k) in item.documents"
							:key="sub.document.slug"
							class="mt-2"
						>
							<h5 class="text-[24px] text-black font-semibold font-BG">{{ sub?.document?.title }}</h5>
							<div
								class="mt-2 text-base text-[#535662] font-medium"
								v-html="sub?.document?.content"
							></div>
						</div>
					</div> -->

					<div
						v-if="dataDetail?.documentDetail"
						class="mt-4 md:mt-6"
					>
						<h5 class="text-[24px] text-black font-semibold font-BG">
							{{ dataDetail?.documentDetail?.documents_by_id?.title }}
						</h5>
						<p class="mt-2 text-base text-[#535662] font-medium">
							{{ dataDetail?.documentDetail?.documents_by_id?.blurb }}
						</p>
						<div
							class="mt-2 text-base text-[#535662] font-medium"
							v-html="dataDetail?.documentDetail?.documents_by_id?.content"
						></div>
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
				<div class="hidden 3xl:flex gap-6 flex-col w-[200px]">
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
import { ref, computed, defineComponent } from "vue";
import { cn } from "~/lib/utils";
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
import { ScrollArea } from "@/components/ui/scroll-area";

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
		ScrollArea,
	},
	setup(props, ctx) {
		const defaultValue = ref<string>("1");
		const route = useRoute();

		const instructionStructureStore = useInstructionStructureStore();

		const { data } = useAsyncData("document", async () => {
			const dataDocument = await instructionStructureStore.fnGetListInstructionStructure();
			return {
				dataDocument: dataDocument.data?.data,
			};
		});

		// Tạo computed để tính toán slug từ route hoặc từ data API
		const slug = computed(() => {
			window.scrollTo(0, 0); // Scroll to top
			return (
				route.fullPath?.split("#")[1] ||
				data.value?.dataDocument?.instruction_structure?.[0]?.documents?.[0]?.document?.slug
			);
		});

		const { data: dataDetail, refresh } = useAsyncData(
			"detail-document",
			async (ctx) => {
				const documentDetail = await instructionStructureStore.fnGetDetailInstructionStructure(slug.value);

				return {
					documentDetail: documentDetail.data?.data,
				};
			},
			{
				watch: [slug],
			}
		);

		// Watch dữ liệu từ API lần đầu để tự động refresh khi có data
		watch(
			() => data.value,
			(newData) => {
				if (newData && slug.value) {
					refresh(); // Gọi lại API chi tiết khi dữ liệu lần đầu đã có
				}
			}
		);

		useHead({
			title: "UPS - Hướng Dẫn Sử Dụng",
			titleTemplate: "UPS - Hướng Dẫn Sử Dụng",
			meta: [
				{
					name: "description",
					content:
						"Hướng dẫn chi tiết về cách sử dụng hệ thống UPS. Tìm hiểu cách cài đặt, bảo trì và sử dụng UPS để bảo vệ thiết bị điện của bạn khỏi mất điện.",
				},
				{
					property: "og:title",
					content: "Hướng Dẫn Sử Dụng UPS - Tất Cả Những Gì Bạn Cần Biết",
				},
				{
					property: "og:description",
					content:
						"Hướng dẫn từng bước cách sử dụng hệ thống UPS. Đảm bảo thiết bị của bạn luôn hoạt động an toàn và hiệu quả với các mẹo và lời khuyên từ chuyên gia.",
				},
				{
					property: "og:image",
					content: "URL_to_your_image", // Replace with the actual URL of the image you want to use
				},
				{
					property: "og:type",
					content: "article",
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: "Hướng Dẫn Sử Dụng UPS - Tất Cả Những Gì Bạn Cần Biết",
				},
				{
					name: "twitter:description",
					content:
						"Khám phá hướng dẫn chi tiết về cách cài đặt và sử dụng hệ thống UPS để bảo vệ thiết bị của bạn.",
				},
				{
					name: "twitter:image",
					content: "URL_to_your_image", // Replace with the actual URL of the image you want to use
				},
				{
					name: "keywords",
					content:
						"Hướng dẫn sử dụng UPS, cài đặt UPS, bảo trì UPS, cách dùng UPS, bảo vệ thiết bị điện, UPS",
				},
				{
					name: "author",
					content: "Tên tác giả hoặc tên công ty", // Replace with the author's name or company name
				},
			],
		});

		return {
			defaultValue,
			cn,
			data,
			slug,
			dataDetail,
		};
	},
});
</script>

<style>
</style>
