<template>
	<div class="">
		<div class="bg-[url('/background/bg-05.png')] bg-no-repeat pt-24 pb-[250px] w-full">
			<div class="container">
				<div class="flex items-center justify-between">
					<div class="">
						<h2 class="text-[50px] text-white font-bold font-BG">
							Công bố
							<span class="text-[#143628]">thông tin</span>
						</h2>

						<div class="flex gap-3 items-center">
							<nuxt-link
								to="/"
								class="text-lg text-white font-semibold"
							>
								Trang chủ
							</nuxt-link>

							<i class="">
								<ChevronRight
									:size="20"
									color="#fff"
								/>
							</i>

							<nuxt-link
								to="/"
								class="text-lg text-white font-semibold"
							>
								Công bố thông tin
							</nuxt-link>
						</div>
					</div>

					<div class="inline-flex relative w-[320px] h-[160px]">
						<nuxt-img
							format="webp"
							loading="lazy"
							alt="UPS"
							src="/logo/logo-cms.png"
							class="absolute w-full h-full object-contain"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="pb-16 flex gap-10">
				<div class="w-[350px]">
					<div class="mb-10">
						<div class="flex items-center relative">
							<nuxt-input
								class="w-[300px] h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#15171E] placeholder:text-base"
								placeholder="Nội dung tin tức"
								name="content"
							/>
							<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
						</div>

						<div class="flex gap-4 mt-5">
							<div class="flex-1">
								<div class="flex items-center relative">
									<nuxt-input
										class="w-[170px] h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#15171E] placeholder:text-base"
										placeholder="Lọc theo ngày"
										name="date"
										type="date"
									/>
									<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
								</div>
							</div>
							<div class="flex-1">
								<div class="flex items-center relative">
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
					</div>

					<!-- DANH MỤC -->
					<div class="flex gap-3 flex-col">
						<div class="flex items-center cursor-pointer group hover:bg-[#F3F5FB]">
							<div
								class="w-11 h-11 inline-flex items-center justify-center text-lg font-medium text-[#7B7E89] bg-[#E7E9EF] group-hover:bg-[#34C759] group-hover:text-white"
							>
								1
							</div>
							<div
								class="flex-1 w-full h-full px-5 text-lg text-[#7B7E89] group-hover:text-black font-medium"
							>
								Tin cổ đông
							</div>
						</div>
						<div class="flex items-center cursor-pointer group hover:bg-[#F3F5FB]">
							<div
								class="w-11 h-11 inline-flex items-center justify-center text-lg font-medium text-[#7B7E89] bg-[#E7E9EF] group-hover:bg-[#34C759] group-hover:text-white"
							>
								2
							</div>
							<div
								class="flex-1 w-full h-full px-5 text-lg text-[#7B7E89] group-hover:text-black font-medium"
							>
								Báo cáo tài chính
							</div>
						</div>
						<div class="flex items-center cursor-pointer group hover:bg-[#F3F5FB]">
							<div
								class="w-11 h-11 inline-flex items-center justify-center text-lg font-medium text-[#7B7E89] bg-[#E7E9EF] group-hover:bg-[#34C759] group-hover:text-white"
							>
								3
							</div>
							<div
								class="flex-1 w-full h-full px-5 text-lg text-[#7B7E89] group-hover:text-black font-medium"
							>
								Quan hệ cổ đông
							</div>
						</div>

						<div class="flex items-center cursor-pointer group hover:bg-[#F3F5FB]">
							<div
								class="w-11 h-11 inline-flex items-center justify-center text-lg font-medium text-[#7B7E89] bg-[#E7E9EF] group-hover:bg-[#34C759] group-hover:text-white"
							>
								4
							</div>
							<div
								class="flex-1 w-full h-full px-5 text-lg text-[#7B7E89] group-hover:text-black font-medium"
							>
								Thông tin Quản trị
							</div>
						</div>
						<div class="flex items-center cursor-pointer group hover:bg-[#F3F5FB]">
							<div
								class="w-11 h-11 inline-flex items-center justify-center text-lg font-medium text-[#7B7E89] bg-[#E7E9EF] group-hover:bg-[#34C759] group-hover:text-white"
							>
								5
							</div>
							<div
								class="flex-1 w-full h-full px-5 text-lg text-[#7B7E89] group-hover:text-black font-medium"
							>
								Báo cáo thường niên
							</div>
						</div>
					</div>

					<div class="mt-5 flex gap-4 flex-wrap">
						<div
							class="inline-flex items-center justify-center h-11 px-6 rounded-[10px] cursor-pointer text-lg font-medium text-black hover:bg-[#F3F5FB]"
						>
							2024
						</div>
						<div
							class="inline-flex items-center justify-center h-11 px-6 rounded-[10px] cursor-pointer text-lg font-medium text-black hover:bg-[#F3F5FB]"
						>
							2023
						</div>
						<div
							class="inline-flex items-center justify-center h-11 px-6 rounded-[10px] cursor-pointer text-lg font-medium text-black hover:bg-[#F3F5FB]"
						>
							2022
						</div>
						<div
							class="inline-flex items-center justify-center h-11 px-6 rounded-[10px] cursor-pointer text-lg font-medium text-black hover:bg-[#F3F5FB]"
						>
							2021
						</div>
					</div>
				</div>
				<div class="flex-1 w-full">
					<div class="grid grid-cols-3">
						<div
							v-for="doc in 9"
							:key="doc"
							class="p-5"
						>
							<div class="flex flex-col relative group">
								<div class="relative w-full h-[200px] rounded-[14px] overflow-hidden">
									<nuxt-img
										format="webp"
										loading="lazy"
										alt="UPS"
										width="350"
										height="290"
										src="/images/tin-tuc-01.png"
										class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
									/>
								</div>

								<div class="mt-3 md:mt-5">
									<div class="flex justify-between">
										<p class="text-sm md:text-base xl:text-lg text-[#F05] font-medium">#hotnew</p>
										<div class="inline-flex gap-2 items-center text-xs text-black font-semibold">
											<i>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="15"
													height="14"
													viewBox="0 0 15 14"
													fill="none"
												>
													<g clip-path="url(#clip0_982_978)">
														<mask
															id="mask0_982_978"
															style="mask-type: luminance"
															maskUnits="userSpaceOnUse"
															x="0"
															y="0"
															width="15"
															height="14"
														>
															<path
																d="M0.335938 9.53674e-07H14.3359V14H0.335938V9.53674e-07Z"
																fill="white"
															/>
														</mask>
														<g mask="url(#mask0_982_978)">
															<path
																d="M13.202 5.81365L7.07396 11.9417C5.62638 13.3892 3.27938 13.3892 1.83178 11.9417C0.384199 10.4941 0.384199 8.14706 1.83178 6.69948L7.55936 0.971894"
																stroke="black"
																stroke-width="0.9375"
																stroke-miterlimit="10"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
															<path
																d="M5.61719 6.4082L9.70655 2.31884"
																stroke="black"
																stroke-width="0.9375"
																stroke-miterlimit="10"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
															<path
																d="M11.0537 4.46715L5.3261 10.1947C4.84357 10.6773 4.06121 10.6773 3.5787 10.1947C3.09616 9.7122 3.09616 8.92987 3.5787 8.44734L5.61731 6.4087"
																stroke="black"
																stroke-width="0.9375"
																stroke-miterlimit="10"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
															<path
																d="M9.70703 2.31867C10.6721 1.35363 12.2368 1.35363 13.2018 2.31867C14.1669 3.28372 14.1669 4.84841 13.2018 5.81348"
																stroke="black"
																stroke-width="0.9375"
																stroke-miterlimit="10"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</g>
													</g>
													<defs>
														<clipPath id="clip0_982_978">
															<rect
																width="14"
																height="14"
																fill="white"
																transform="translate(0.333984)"
															/>
														</clipPath>
													</defs>
												</svg>
											</i>
											Tệp đính kèm
										</div>
									</div>

									<h4
										class="text-sm md:text-base xl:text-xl text-black font-bold line-clamp-1 mt-3 md:mt-6"
									>
										Nội dung tin tức
									</h4>
									<p
										class="text-sm md:text-base xl:text-lg text-[#3C4052] font-medium line-clamp-3 mt-2"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt...
									</p>
								</div>

								<nuxt-link
									to="/"
									class="absolute w-full h-full"
								/>
							</div>
						</div>
					</div>

					<!-- PHÂN TRANG  -->
					<div class="flex justify-center mt-12">
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
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChevronRight } from "lucide-vue-next";
import NuxtInput from "@/components/ui/input/index.vue";
import { cn } from "~/lib/utils";
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

export default defineComponent({
	name: "cong-bo-thong-tin",
	components: {
		ChevronRight,
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
		};
	},
});
</script>

<style></style>
