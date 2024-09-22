<template>
	<div class="pt-0 md:pt-10 xl:pt-16">
		<div class="container">
			<div class="flex items-center justify-center gap-2 md:gap-4">
				<h2
					class="text-[32px] md:text-[54px] 2xl:text-[60px] 3xl:text-[80px] text-black font-bold font-BG leading-tight">
					Tin tức</h2>
				<div
					class="animate-about__item inline-flex items-center relative  pt-[10%] xl:pt-[5%] w-[70px] md:w-[120px] 2xl:w-[150px] 3xl:w-[170px] 3xl:mt-2">
					<nuxt-img format="webp" loading="lazy" height="78" alt="UPS" src="/logo/logo-cap-green.png"
						class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full object-contain" />
				</div>
			</div>

			<div
				class="py-5 xl:py-8 flex flex-wrap gap-3 md:gap-10 xl:gap-10 items-start xl:items-center justify-center">
				<nuxt-link :to="`/tin-tuc`" class="py-1 md:py-2 text-base text-black font-bold hover:underline">
					Tin hoạt động
				</nuxt-link>
				<nuxt-link :to="`/cong-bo-thong-tin`"
					class="py-1 md:py-2 text-base text-black font-bold hover:underline">
					Công bố thông tin
				</nuxt-link>
			</div>

			<!-- TIN TỨC HOT -->
			<div class="py-5 xl:py-10">
				<div
					class="grid grid-rows-2 md:grid-rows-none md:grid-cols-12  bg-[#15171E] rounded-[20px] overflow-hidden">

					<nuxt-link :to="`/tin-tuc/${data?.dataNews?.posts[0]?.short_content?.slug}`" class="md:col-span-6 lg:col-span-5 w-full h-full flex flex-col items-start justify-center">
						<div class="p-5 md:py-4 md:px-8 lg:p-8 xl:p-10 2xl:p-[45px] 3xl:px-[60px] 3xl:py-[40px]">

							<div
								class="animate-about__item relative w-[50px] md:w-[80px] 2xl:w-[150px] 3xl:w-[200px] pt-[14%]">
								<nuxt-img format="webp" loading="lazy" height="78" alt="UPS"
									src="/logo/logo-cap-light.png"
									class="absolute top-0 left-0 w-full h-full object-contain" />
							</div>

							<h3
								class="md:mt-2 text-base xl:text-xl 2xl:text-[24px] 3xl:text-[32px] text-white font-medium font-BG 3xl:leading-[2.5rem]">
								{{ data?.dataNews?.posts[0]?.short_content?.title }}
							</h3>

							<div
								class="w-[140px] h-[1px] bg-[#02E56A] my-3 md:my-5 lg:my-[28px] xl:my-[34px] 2xl:my-[40px] 3xl:my-[60px]">
							</div>

							<p class="text-sm xl:text-sm 2xl:text-base 3xl:text-xl text-[#8A8C95] font-medium">
								{{ data?.dataNews?.posts[0]?.short_content?.blurb }}
							</p>

							<nuxt-link :to="`/tin-tuc/${data?.dataNews?.posts[0]?.short_content?.slug}`"
								class="mt-4 3xl:mt-8 inline-flex gap-3 items-center text-sm xl:text-base font-semibold text-white hover:underline">
								<span>Xem chi tiết</span>
								<i>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"
										fill="none">
										<path
											d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM15.6725 7.03033C15.9654 6.73744 15.9654 6.26256 15.6725 5.96967L10.8995 1.1967C10.6066 0.903806 10.1317 0.903806 9.83883 1.1967C9.54594 1.48959 9.54594 1.96447 9.83883 2.25736L14.0815 6.5L9.83883 10.7426C9.54594 11.0355 9.54594 11.5104 9.83883 11.8033C10.1317 12.0962 10.6066 12.0962 10.8995 11.8033L15.6725 7.03033ZM1 7.25H15.1421V5.75H1V7.25Z"
											fill="white" />
									</svg>
								</i>
							</nuxt-link>
						</div>
					</nuxt-link>

					<div class=" md:col-span-6 lg:col-span-7 h-full">
						<div class="relative w-full h-full">

							<!-- <nuxt-img format="webp" loading="lazy" height="78"
								:alt="data?.dataNews?.posts[0]?.short_content?.title"
								src="http://api.upse.vn/assets/835bb569-dfe3-4223-9944-f8de3c316acc"
								class="absolute top-0 left-0 w-full h-full object-cover" /> -->

							<nuxt-img format="webp" loading="lazy" width="173" height="78" alt="UPS"
								src="/background/bg-gioi-thieu.png"
								class="absolute top-0 left-0 w-full h-full object-cover" />
						</div>

					</div>
				</div>
			</div>

			<div class="grid grid-cols-12 gap-0 md:gap-8 lg:gap-10 xl:gap-[60px] 2xl:gap-[68px] 3xl:gap-[90px] py-10">
				<div class="col-span-full md:col-span-8 lg:col-span-9">
					<!-- HASTAG -->
					<div class="hidden md:flex flex-wrap gap-6 pb-10">
						<p v-for="(doc, i) in data?.dataCateAndTags?.p_categories" :key="i" :class="cn('text-base text-black font-bold cursor-pointer pb-2', {
							'border-b border-[#222]': slugCate == doc.slug,
						})
							" @click="slugCate = doc.slug">
							{{ `${doc?.title}` }}
						</p>
					</div>

					<div class="flex flex-col md:flex-row justify-between gap-3 md:gap-0">
						<div class="flex items-center">
							<h4
								class="text-[20px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[40px] font-semibold font-BG">
								Tin
								<span class="text-green-ups">hàng ngày</span>
							</h4>
						</div>

						<div
							class="flex flex-wrap md:flex-nowrap gap-3 md:gap-[10px] xl:gap-3 2xl:gap-4 3xl:gap-5 items-center w-full md:w-[60%] xl:w-1/2">
							<div class="basis-full md:basis-6/12 xl:basis-7/12 flex items-center relative">
								<i>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
										fill="none" class="w-[20px] h-[20px] 3xl:w-[24px] 3xl:h-[24px]">
										<path
											d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
											stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path d="M22 22.5L20 20.5" stroke="#A3A3A3" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</i>
								<nuxt-input
									class="w-full h-[36px] 3xl:h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-sm 2xl:placeholder:text-base"
									placeholder="Tìm kiếm" name="fullname" v-model="keyword" />
								<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
							</div>

							<div class="basis-full md:basis-6/12 xl:basis-5/12 flex items-center relative">
								<Popover>
									<PopoverTrigger as-child>
										<div
											class="w-full flex items-center relative h-[36px] 3xl:h-[50px] text-black border-none border-b border-[1px] border-[#ccc]">
											<i class="mr-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
													viewBox="0 0 24 25" fill="none"
													class="w-[20px] h-[20px] 3xl:w-[24px] 3xl:h-[24px]">
													<path d="M8 2.5V5.5" stroke="#A3A3A3" stroke-width="1.5"
														stroke-miterlimit="10" stroke-linecap="round"
														stroke-linejoin="round" />
													<path d="M16 2.5V5.5" stroke="#A3A3A3" stroke-width="1.5"
														stroke-miterlimit="10" stroke-linecap="round"
														stroke-linejoin="round" />
													<path d="M3.5 9.59009H20.5" stroke="#A3A3A3" stroke-width="1.5"
														stroke-miterlimit="10" stroke-linecap="round"
														stroke-linejoin="round" />
													<path
														d="M21 9V17.5C21 20.5 19.5 22.5 16 22.5H8C4.5 22.5 3 20.5 3 17.5V9C3 6 4.5 4 8 4H16C19.5 4 21 6 21 9Z"
														stroke="#A3A3A3" stroke-width="1.5" stroke-miterlimit="10"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M15.6947 14.2H15.7037" stroke="#A3A3A3" stroke-width="2"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M15.6947 17.2H15.7037" stroke="#A3A3A3" stroke-width="2"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M11.9955 14.2H12.0045" stroke="#A3A3A3" stroke-width="2"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M11.9955 17.2H12.0045" stroke="#A3A3A3" stroke-width="2"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M8.29431 14.2H8.30329" stroke="#A3A3A3" stroke-width="2"
														stroke-linecap="round" stroke-linejoin="round" />
													<path d="M8.29431 17.2H8.30329" stroke="#A3A3A3" stroke-width="2"
														stroke-linecap="round" stroke-linejoin="round" />
												</svg>
											</i>

											<span class="text-[#ADB2C0] text-sm 2xl:text-base">
												{{
													date
														? moment(date.toDate(getLocalTimeZone())).format("YYYY-MM-DD")
														: "Lọc theo ngày"
												}}
											</span>

											<div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]">
											</div>
										</div>
									</PopoverTrigger>
									<PopoverContent class="w-auto p-0">
										<Calendar v-model="date" initial-focus />
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</div>

					<div class="mt-10 flex gap-8 md:gap-5 xl:gap-6 2xl:gap-[20px] 3xl:gap-[30px] flex-col">
						<nuxt-link :to="`/tin-tuc/${doc?.short_content?.slug}`" v-for="(doc, i) in data?.dataNews?.posts" :key="i"
							class="grid grid-cols-12 gap-3 md:gap-4 xl:gap-[18px] 2xl:gap-5 3xl:gap-[30px] group">
							<div
								class="col-span-full md:col-span-6 lg:col-span-4 h-[220px] md:h-auto md:max-h-min relative rounded-[14px] overflow-hidden">
								<nuxt-img :alt="doc?.short_content?.title"
									:src="config.NUXT_APP_IMAGE_URL + doc?.short_content?.cover?.id"
									class="absolute w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
							</div>

							<div
								class="col-span-full md:col-span-6 lg:col-span-8 w-full flex flex-col gap-[8px] md:gap-[10px] xl:gap-[14px] 2xl:gap-4 3xl:gap-5">
								<div class="flex items-center gap-3">
									<template v-if="doc?.short_content?.tags.length > 0">
										<p v-for="(sub, k) in doc?.short_content?.tags" :key="k"
											class="text-sm 2xl:text-base 3xl:text-lg text-[#00C645] font-medium">
											{{ `#${sub?.tag.title}` }}
										</p>
									</template>
								</div>

								<h3
									class="text-sm xl:text-base 2xl:text-lg 3xl:text-2xl text-black font-semibold line-clamp-2">
									{{ doc?.short_content?.title }}
								</h3>

								<div class="flex gap-2 items-center">
									<i>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"
											viewBox="0 0 18 19" fill="none">
											<path
												d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z"
												stroke="#696B75" stroke-width="2" stroke-linecap="round"
												stroke-linejoin="round" />
											<path d="M9 5V9.5L12 11" stroke="#696B75" stroke-width="2"
												stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</i>

									<span class="text-sm 2xl:text-sm 3xl:text-lg text-[#696B75] font-semibold">
										{{ doc?.short_content?.date_published }}
									</span>
								</div>

								<p class="text-sm 2xl:text-sm 3xl:text-[20px] text-black font-normal line-clamp-2">
									{{ doc?.short_content?.blurb }}
								</p>

								<nuxt-link :to="`/tin-tuc/${doc?.short_content?.slug}`"
									class="inline-flex gap-5 items-center text-sm md:text-base text-black font-bold">
									<span> Xem chi tiết </span>

									<i>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13"
											viewBox="0 0 16 13" fill="none">
											<path
												d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM15.6725 7.03033C15.9654 6.73744 15.9654 6.26256 15.6725 5.96967L10.8995 1.1967C10.6066 0.903806 10.1317 0.903806 9.83883 1.1967C9.54594 1.48959 9.54594 1.96447 9.83883 2.25736L14.0815 6.5L9.83883 10.7426C9.54594 11.0355 9.54594 11.5104 9.83883 11.8033C10.1317 12.0962 10.6066 12.0962 10.8995 11.8033L15.6725 7.03033ZM1 7.25H15.1421V5.75H1V7.25Z"
												fill="#15171E" />
										</svg>
									</i>
								</nuxt-link>
							</div>
						</nuxt-link>
					</div>

					<!-- PHÂN TRANG  -->
					<div v-if="data?.dataNews?.posts_aggregated[0]?.count?.slug > 0"
						class="flex justify-center py-10 md:py-[60px]">
						<Pagination v-slot="{ page }" :total="data?.dataNews?.posts_aggregated[0]?.count?.slug"
							:sibling-count="10" show-edges :default-page="curPage" @update:page="handlePageUpdate">
							<PaginationList v-slot="{ items }" class="flex items-center gap-4">
								<!-- <PaginationFirst /> -->
								<PaginationPrev class="rounded-full bg-transparent hover:bg-transparent" />

								<template v-for="(item, index) in items">
									<PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value"
										as-child>
										<Button :class="cn(
											'w-10 h-10 p-0 text-base font-semibold rounded-full bg-transparent text-black hover:bg-[#02E56A]',
											{
												'bg-[#02E56A]': item.value === page,
											}
										)
											">
											{{ `${item.value}` }}
										</Button>
									</PaginationListItem>
									<PaginationEllipsis v-else :key="item.type" :index="index" />
								</template>

								<PaginationNext class="rounded-full bg-transparent hover:bg-transparent" />
								<!-- <PaginationLast /> -->
							</PaginationList>
						</Pagination>
					</div>
				</div>

				<div class="col-span-full md:col-span-4 lg:col-span-3 flex flex-col gap-[60px]">
					<div
						class="w-full px-6 py-10 rounded-[14px] bg-[linear-gradient(71deg,#15171E_28.57%,#125933_88.27%)]">
						<nuxt-img format="webp" loading="lazy" width="136" height="62" alt="UPS"
							src="/logo/logo-cap-light.png" />

						<h4
							class="mt-6 text-[50px] md:text-[24px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[50px] font-semibold leading-tight bg-[linear-gradient(100deg,rgba(255,255,255,0.9)_-0.85%,rgba(255,255,255,0.9)_49.77%,rgba(255,255,255,0)_101.25%)] bg-clip-text text-transparent">
							Khám phá nền tảng giao dịch cùng <span class="text-[#02E56A]">UPS!</span>
						</h4>

						<div class="mt-10 inline-flex">
							<nuxt-link to="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info"
							target="_blank"
								class="w-auto h-[50px] px-6 flex gap-2 items-center rounded-[40px] text-base font-bold text-green-ups !bg-[#242733] group">
								<span> Mở tài khoản ngay </span>
								<div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
									<i
										class="w-full h-full inline-flex absolute transition-all duration-300 translate-x-[-120%] group-hover:translate-x-0">
										<nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16"
											alt="UPS" />
									</i>

									<i
										class="w-full h-full inline-flex absolute transition-all duration-300 translate-x-0 group-hover:translate-x-[120%]">
										<nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16"
											alt="UPS" />
									</i>
								</div>
							</nuxt-link>
						</div>
					</div>

					<!-- TIN TỨC LIÊN QUAN -->
					<!-- <div class="mt-[60px]">
						<div
							v-for="i in 3"
							:key="i"
							class="py-8 border-t border-[#ccc]"
						>
							<h4 class="text-base md:text-[24px] text-black font-BG font-semibold line-clamp-3">
								Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina
							</h4>
							<p class="mt-4 text-sm md:text-[20px] text-[#696B75] line-clamp-3 font-medium">
								Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina
							</p>
						</div>
					</div> -->



					<!-- <div class="flex flex-col gap-4 2xl:gap-5 3xl:gap-[30px]">
						<div
							class="pb-4 2xl:pb-5 3xl:pb-[30px] border-b-[1px] border-[#DFDFDF] flex flex-col gap-[10px] xl:gap-3 2xl:gap-4 3xl:gap-5">
							<div class="font-semibold text-sm xl:text-base 2xl:text-lg 3xl:text-2xl">Ông Trump nói về
								lạm phát, chỉ
								trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina</div>
							<div class="font-medium text-[#696B75] text-sm md:text-sm 2xl:text-base 3xl:text-xl">Ông
								Trump nói về lạm
								phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina</div>
						</div>

						<div
							class="pb-4 2xl:pb-5 3xl:pb-[30px] border-b-[1px] border-[#DFDFDF] flex flex-col gap-[10px] xl:gap-3 2xl:gap-4 3xl:gap-5">
							<div class="font-semibold text-sm xl:text-base 2xl:text-lg 3xl:text-2xl">Ông Trump nói về
								lạm phát, chỉ
								trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina</div>
							<div class="font-medium text-[#696B75] text-sm md:text-sm 2xl:text-base 3xl:text-xl">Ông
								Trump nói về lạm
								phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina</div>
						</div>

						<div
							class="pb-4 2xl:pb-5 3xl:pb-[30px] border-b-[1px] border-[#DFDFDF] flex flex-col gap-[10px] xl:gap-3 2xl:gap-4 3xl:gap-5">
							<div class="font-semibold text-sm xl:text-base 2xl:text-lg 3xl:text-2xl">Ông Trump nói về
								lạm phát, chỉ
								trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina</div>
							<div class="font-medium text-[#696B75] text-sm md:text-sm 2xl:text-base 3xl:text-xl">Ông
								Trump nói về lạm
								phát, chỉ trích bà Harris trong cuộc vận động tranh cử ở Bắc
								Carolina</div>
						</div>
					</div> -->

					<!-- HASTAG -->
					<div class="flex flex-wrap gap-6">
						<p v-for="(doc, i) in data?.dataCateAndTags?.p_tags" :key="i"
							class="text-base text-black font-bold cursor-pointer" @click="slugTag = doc.slug">
							{{ `#${doc?.raw}` }}
						</p>
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
import { type Ref, ref, defineComponent } from "vue";
import { cn } from "~/lib/utils";
import { config } from "~/lib/config";
import { SwiperNavigation, SwiperAutoplay } from "#imports";
import { CalendarDate, DateFormatter, getLocalTimeZone } from "@internationalized/date";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "radix-vue";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
import DatePickerRanger from "@/components/common/date-picker-ranger/index.vue";
import moment from "moment";

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
		DatePickerRanger,
		Popover,
		PopoverContent,
		PopoverTrigger,
		Calendar,
	},

	setup(props, ctx) {
		const curPage = ref<number>(1);
		const slugCate = ref<any>("");
		const slugTag = ref<any>("");
		const date = ref<any>();
		const keyword = ref<any>("");
		const newStore = useNewsStore();

		const df = new DateFormatter("en-US", {
			dateStyle: "long",
			timeZone: "Asia/Ho_Chi_Minh",
		});

		const { data } = useAsyncData(
			"news",
			async () => {
				const dataCateAndTags = await newStore.fnGetCateAndTags();
				const dataNews = await newStore.fnGetListNews(
					Number(curPage.value),
					10,
					slugCate.value,
					slugTag.value,
					date.value,
					keyword.value
				);
				
				return {
					dataCateAndTags: dataCateAndTags.data?.data,
					dataNews: dataNews.data?.data,
				};
			},
			{
				watch: [slugCate, slugTag, date, keyword],
			}
		);

		const handlePageUpdate = (_val: number) => {
			curPage.value = _val;
			window.scrollTo(0, 0); // Scroll to top
		};

		useHead({
			title: "UPS - Tin Tức",
			titleTemplate: "UPS - Tin Tức",
			meta: [
				{
					name: "description",
					content:
						"Cập nhật những tin tức mới nhất về hệ thống UPS - Giải pháp cung cấp nguồn điện liên tục và bảo vệ thiết bị điện.",
				},
				{
					property: "og:title",
					content: "UPS - Tin Tức",
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
					content: "UPS - Tin Tức",
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
			SwiperNavigation,
			SwiperAutoplay,
			config,
			data,
			curPage,
			slugCate,
			slugTag,
			date,
			keyword,
			df,
			moment,
			cn,
			handlePageUpdate,
			getLocalTimeZone,
		};
	},
});
</script>
