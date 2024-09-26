<template>
	<div class="pt-0 md:pt-10 xl:pt-16">
		<div class="container">
			<div class="flex items-center justify-center gap-2 md:gap-4">
				<h2
					class="text-[32px] md:text-[54px] 2xl:text-[60px] 3xl:text-[80px] text-black font-bold font-BG leading-tight"
				>
					Tin tức
				</h2>
				<div
					class="animate-about__item inline-flex items-center relative pt-[10%] xl:pt-[5%] w-[70px] md:w-[120px] 2xl:w-[150px] 3xl:w-[170px] 3xl:mt-2"
				>
					<nuxt-img
						format="webp"
						loading="lazy"
						height="78"
						alt="UPS"
						src="/logo/logo-cap-green.png"
						class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full object-contain"
					/>
				</div>
			</div>

			<div
				class="py-5 xl:py-8 flex flex-wrap gap-3 md:gap-10 xl:gap-10 items-start xl:items-center justify-center"
			>
				<nuxt-link
					:to="`/tin-tuc`"
					class="py-1 md:py-2 text-base text-black font-bold hover:underline"
				>
					Tin hoạt động
				</nuxt-link>
				<nuxt-link
					:to="`/cong-bo-thong-tin`"
					class="py-1 md:py-2 text-base text-black font-bold hover:underline"
				>
					Công bố thông tin
				</nuxt-link>
			</div>
		</div>

		<div class="container">
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

							<p class="ml-3 text-lg text-black underline font-bold font-BG">Bộ lọc</p>
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

									<p class="ml-3 text-lg text-black font-bold font-BG">Bộ lọc</p>
								</div>
							</DrawerClose>

							<div class="my-5">
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
										class="w-[300px] h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#15171E] placeholder:text-base"
										placeholder="Nội dung tin tức"
										name="search"
										v-model="keyword"
									/>
									<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
								</div>

								<div class="flex gap-4 mt-5">
									<Popover>
										<PopoverTrigger as-child>
											<div
												class="w-full flex items-center relative h-[50px] pr-6 text-black border-none border-b border-[1px] border-[#ccc]"
											>
												<i class="mr-3">
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

												<span class="text-[#ADB2C0] xl:text-sm 3xl:text-lg">
													{{
														date
															? moment(date.toDate(getLocalTimeZone())).format(
																	"YYYY-MM-DD"
															  )
															: "Lọc theo ngày"
													}}
												</span>

												<div
													class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"
												></div>
											</div>
										</PopoverTrigger>
										<PopoverContent class="w-auto p-0">
											<Calendar
												v-model="date"
												initial-focus
											/>
										</PopoverContent>
									</Popover>
								</div>
							</div>

							<!-- DANH MỤC -->
							<div
								v-if="data?.dataCateAndTags?.a_categories?.length > 0"
								class="flex gap-3 flex-col"
							>
								<DrawerClose
									v-for="(doc, i) in data?.dataCateAndTags?.a_categories"
									:key="i"
									as-child
								>
									<div
										@click="slugCate = doc?.slug"
										:class="
											cn('flex items-center cursor-pointer group hover:bg-[#F3F5FB]', {
												'bg-[#F3F5FB]': slugCate == doc?.slug,
											})
										"
									>
										<div
											:class="
												cn(
													'w-11 h-11 inline-flex items-center justify-center xl:text-sm 3xl:text-lg font-medium text-[#7B7E89] bg-[#E7E9EF] group-hover:bg-[#34C759] group-hover:text-white',
													{
														'bg-[#34C759] text-white': slugCate == doc?.slug,
													}
												)
											"
										>
											{{ i + 1 }}
										</div>
										<div
											:class="
												cn(
													'flex-1 w-full px-5 xl:text-sm 3xl:text-lg text-[#7B7E89] group-hover:text-black font-medium',
													{
														'text-black': slugCate == doc?.slug,
													}
												)
											"
										>
											{{ doc?.title }}
										</div>
									</div>
								</DrawerClose>
							</div>

							<div
								v-if="data?.dataCateAndTags?.a_tags?.length > 0"
								class="mt-5 lg:mt-10 flex gap-4 flex-wrap"
							>
								<DrawerClose
									v-for="(doc, i) in data?.dataCateAndTags?.a_tags"
									:key="i"
								>
									<p
										@click="slugTag = doc?.slug"
										class="xl:text-sm 3xl:text-lg text-[#7F8494] font-normal cursor-pointer"
									>
										{{ `#${doc?.raw}` }}
									</p>
								</DrawerClose>
							</div>
						</div>
					</DrawerContent>
				</Drawer>
			</div>

			<div class="pb-16 grid grid-cols-12 xl:gap-6 2xl:gap-8 3xl:gap-10">
				<div class="col-span-3 hidden xl:flex flex-col xl:gap-8 3xl:gap-10">
					<div>
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
								class="xl:text-sm 3xl:text-lg w-full md:w-[300px] h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:xl:text-sm placeholder:3xl:text-lg"
								placeholder="Tìm kiếm"
								name="search"
								v-model="keyword"
							/>
							<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
						</div>

						<div class="flex gap-4 mt-5">
							<Popover>
								<PopoverTrigger as-child>
									<div
										class="w-full flex items-center relative h-[50px] pr-6 text-black border-none border-b border-[1px] border-[#ccc]"
									>
										<i class="mr-3">
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

										<span class="text-[#ADB2C0] xl:text-sm 3xl:text-lg">
											{{
												date
													? moment(date.toDate(getLocalTimeZone())).format("YYYY-MM-DD")
													: "Lọc theo ngày"
											}}
										</span>

										<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
									</div>
								</PopoverTrigger>
								<PopoverContent class="w-auto p-0">
									<Calendar
										v-model="date"
										initial-focus
									/>
								</PopoverContent>
							</Popover>
						</div>
					</div>

					<!-- DANH MỤC -->
					<div
						v-if="data?.dataCateAndTags?.a_categories?.length > 0"
						class="flex xl:gap-2 3xl:gap-3 flex-col"
					>
						<div
							v-for="(doc, i) in data?.dataCateAndTags?.a_categories"
							:key="i"
							@click="slugCate = doc?.slug"
							:class="
								cn('flex items-center cursor-pointer group hover:bg-[#F3F5FB]', {
									'bg-[#F3F5FB]': slugCate == doc?.slug,
								})
							"
						>
							<div
								:class="
									cn(
										'w-11 h-11 inline-flex items-center justify-center xl:text-sm 3xl:text-lg font-medium text-[#7B7E89] bg-[#E7E9EF] group-hover:bg-[#34C759] group-hover:text-white',
										{
											'bg-[#34C759] text-white': slugCate == doc?.slug,
										}
									)
								"
							>
								{{ i + 1 }}
							</div>
							<div
								:class="
									cn(
										'flex-1 w-full px-5 xl:text-sm 3xl:text-lg text-[#7B7E89] group-hover:text-black font-medium',
										{
											'text-black': slugCate == doc?.slug,
										}
									)
								"
							>
								{{ doc?.title }}
							</div>
						</div>
					</div>

					<div
						v-if="data?.dataCateAndTags?.a_tags?.length > 0"
						class="flex gap-4 flex-wrap"
					>
						<p
							v-for="(doc, i) in data?.dataCateAndTags?.a_tags"
							:key="i"
							class="xl:text-sm 3xl:text-lg text-[#7F8494] font-normal cursor-pointer"
							@click="slugTag = doc?.slug"
						>
							{{ `#${doc?.raw}` }}
						</p>
					</div>

					<div
						class="btn active inline-flex items-center justify-center cursor-pointer max-w-max"
						@click="handleReset"
					>
						Xóa bộ lọc
					</div>
				</div>

				<div class="col-span-full xl:col-span-9">
					<div class="flex items-center px-0 py-4 xl:p-3 2xl:p-4 3xl:p-5">
						<h4 class="text-[20px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[40px] font-semibold font-BG">
							Công bố
							<span class="text-green-ups">thông tin</span>
						</h4>
					</div>

					<div
						v-if="data?.dataAnnouce?.announce.length > 0"
						class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-5 md:gap-y-6 lg:gap-x-4 xl:gap-x-[6px] lg:gap-y-[32px] 2xl:gap-x-[8px] 2xl:gap-y-[38px] 3xl:gap-x-[10px] 3xl:gap-y-[50px]"
					>
						<div
							v-for="(doc, i) in data?.dataAnnouce?.announce"
							:key="i"
							class="p-0 xl:p-3 2xl:p-4 3xl:p-5"
						>
							<nuxt-link
								:to="`/cong-bo-thong-tin/${doc?.short_content?.slug}`"
								class="w-full h-full"
							>
								<div class="flex flex-col gap-4 md:gap-3 lg:gap-4 2xl:gap-[18px] 3xl:gap-6 group">
									<div class="relative w-full pt-[65%] rounded-[14px] overflow-hidden">
										<nuxt-img
											format="webp"
											loading="lazy"
											width="350"
											height="290"
											:alt="doc?.short_content?.title"
											:src="config.NUXT_APP_IMAGE_URL + doc?.short_content?.cover?.id"
											class="w-full h-full absolute top-0 left-0 object-cover transition-all duration-300 group-hover:scale-110"
										/>
									</div>

									<div class="flex justify-between">
										<div class="flex gap-1">
											<template v-if="doc?.short_content?.tags?.length > 0">
												<p
													v-for="(sub, k) in doc?.short_content?.tags"
													:key="k"
													class="text-xs 3xl:text-sm text-[#F05] font-medium"
												>
													{{ `#${sub?.tag?.title}` }}
												</p>
											</template>
										</div>

										<div
											class="inline-flex gap-2 items-center text-xs 3xl:text-sm text-black font-semibold"
										>
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

									<div class="space-y-[6px] md:space-y-[8px] lg:space-y-[6px] xl:space-y-[8px]">
										<h4 class="text-sm 2xl:text-base 3xl:text-xl text-black font-bold line-clamp-2">
											{{ doc?.short_content?.title }}
										</h4>
										<p class="text-sm 3xl:text-lg text-[#3C4052] font-medium line-clamp-3">
											{{ doc?.short_content?.blurb }}
										</p>
									</div>
								</div>
							</nuxt-link>
						</div>
					</div>

					<!-- PHÂN TRANG  -->
					<div
						v-if="data?.dataAnnouce?.announce_aggregated[0]?.count?.slug"
						class="flex justify-center mt-12"
					>
						<Pagination
							v-slot="{ page }"
							:total="data?.dataAnnouce?.announce_aggregated[0]?.count?.slug"
							:sibling-count="10"
							show-edges
							:default-page="1"
							@update:page="handlePageUpdate"
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
import { config } from "@/lib/config";
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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDate, DateFormatter, getLocalTimeZone } from "@internationalized/date";
import moment from "moment";

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
		Drawer,
		DrawerClose,
		DrawerContent,
		DrawerDescription,
		DrawerFooter,
		DrawerHeader,
		DrawerTitle,
		DrawerTrigger,
		Popover,
		PopoverContent,
		PopoverTrigger,
		Calendar,
	},
	setup(props, ctx) {
		const curPage = ref<number>(1);
		const announceStore = useAnnounceStore();
		const slugCate = ref<any>("");
		const date = ref<any>();
		const slugTag = ref<any>("");
		const keyword = ref<any>("");

		const df = new DateFormatter("en-US", {
			dateStyle: "long",
			timeZone: "Asia/Ho_Chi_Minh",
		});

		const { data } = useAsyncData(
			"announce",
			async () => {
				const dataCateAndTags = await announceStore.fnGetCateAndTags();
				const dataAnnouce = await announceStore.fnGetListAnnounce(
					Number(curPage.value),
					12,
					slugCate.value,
					slugTag.value,
					date.value,
					keyword.value
				);

				return {
					dataCateAndTags: dataCateAndTags.data?.data,
					dataAnnouce: dataAnnouce.data?.data,
				};
			},
			{
				watch: [curPage, slugCate, slugTag, date, keyword],
			}
		);

		const handlePageUpdate = (_val: number) => {
			curPage.value = _val;
			window.scrollTo(0, 0); // Scroll to top
		};

		const handleReset = () => {
			date.value = undefined;
			slugTag.value = "";
			slugCate.value = "";
			keyword.value = "";
		};

		useHead({
			title: "UPS - Công bố tin tức",
			titleTemplate: "UPS - Công bố tin tức",
			meta: [
				{
					name: "description",
					content:
						"Cập nhật những tin tức mới nhất về hệ thống UPS - Giải pháp cung cấp nguồn điện liên tục và bảo vệ thiết bị điện.",
				},
				{
					property: "og:title",
					content: "UPS - Công bố tin tức",
				},
				{
					property: "og:description",
					content:
						"Tìm hiểu những thông tin quan trọng về hệ thống UPS, cách bảo vệ thiết bị của bạn khỏi mất điện và đảm bảo hoạt động liên tục.",
				},
				{
					property: "og:image",
					content: "URL_to_your_image",
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: "UPS - Công bố tin tức",
				},
				{
					name: "twitter:description",
					content: "Khám phá các giải pháp UPS mới nhất để đảm bảo nguồn điện liên tục cho hệ thống của bạn.",
				},
				{
					name: "twitter:image",
					content: "URL_to_your_image",
				},
			],
		});

		return {
			config,
			data,
			curPage,
			slugCate,
			slugTag,
			keyword,
			cn,
			date,
			df,
			moment,
			getLocalTimeZone,
			handlePageUpdate,
			handleReset,
		};
	},
});
</script>

<style></style>
