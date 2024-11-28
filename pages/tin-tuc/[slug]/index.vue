<template>
	<div class="container">
		<div class="flex justify-center text-center mt-[100px]">
			<!-- <div class="inline-flex relative w-[125px] h-[56px] xl:w-[220px] xl:h-[70px]">
				<nuxt-img loading="lazy" alt="UPS" src="/logo/logo-cap-dark.png" width="220" height="100"
					class="link absolute w-full h-full object-contain" />
			</div> -->
		</div>
		<div class="animate-ups text-center mt-[30px] mb-[20px]">
			<h3
				class="animate-ups__item text-[#15171E] font-bricolage-grotesque xl:text-[50px] font-semibold leading-normal text-[24px] xl:w-[968px] w-full mx-auto">
				{{ data && data.newDetail.title }}
			</h3>
		</div>
		<!-- <div class="flex gap-2 text-center justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-[16px] h-[16px] xl:w-[24px] xl:h-[24px]"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
          stroke="#7F8494"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 6.5V12.5L16 14.5"
          stroke="#7F8494"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p
        class="text-[#7F8494] font-hanken-grotesk xl:text-[24px] font-semibold leading-normals text-[14px]"
      >
        15/08/2024 - 22:20
      </p>
    </div> -->
		<div class="animate-ups flex justify-center text-center xl:my-[80px] my-[30px]">
			<div class="animate-ups__item inline-flex relative w-full pt-[60%] md:pt-[50%] xl:pt-[40%] 3xl:pt-[36%] rounded-[20px]">
				<nuxt-img loading="lazy" alt="UPS" width="" height="" :src="config.NUXT_APP_IMAGE_URL + data?.newDetail.thumbnail?.id"
					class="absolute top-0 left-0 right-0 w-full h-auto object-fill xl:object-cover rounded-[20px]" />
			</div>
		</div>

		<div
			class="animate-ups w-full md:w-[668px] lg:w-[720px] xl:w-[800px] 2xl:w-[900px] 3xl:w-[1200px] flex justify-center mx-auto">
			<div class="w-full lg:w-[1200px] xl:flex lg:flex block justify-center gap-[28px]">
				<div class="animate-ups__item text-left xl:w-[70%] lg:w-[70%] w-full">
					
					<div class="content-wrapper" v-html="data?.newDetail.content"></div>
					<div class="my-[30px] animate-ups">
						<div class="animate-ups__item">
							<Comment />
						</div>
					</div>
					<p
						class="text-center text-[#535662] font-hanken-grotesk text-[16px] font-medium leading-normal mb-[80px]">
						<!-- Cập nhật mới nhất: 20/08/2024 -->
					</p>
				</div>
				<div class="animate-ups__item xl:w-[30%] lg:w-[30%] w-full">
					<h4 class="text-[#15171E] font-bricolage-grotesque text-[16px] font-semibold leading-[20px]">
						Thẻ bài viết
					</h4>
					<ul class="my-[24px]">
						<li class="border-b py-[8px]">
							<a href=""
								class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal">Biến
								động thị trường</a>
						</li>
						<li class="border-b py-[8px]">
							<a class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
								href="">Báo cáo ngày</a>
						</li>
						<li class="border-b py-[8px]">
							<a class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
								href="">Phân tích từ UPS</a>
						</li>
						<li class="border-b py-[8px]">
							<a class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
								href="">Sản phẩm đầu tư mới</a>
						</li>
						<li class="border-b py-[8px]">
							<a class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
								href="">Về UPS</a>
						</li>
						<li class="border-b py-[8px]">
							<a class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
								href="">Sự kiện doanh nghiệp</a>
						</li>
						<li class="border-b py-[8px]">
							<a class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
								href="">Nội bộ UPS</a>
						</li>
					</ul>
					<div class="my-[40px] rounded-[10px] border border-[#C1C7DD] bg-[#F3F5FB] p-[16px]">
						<h5 class="text-[#15171E] font-hanken-grotesk text-[16px] font-bold leading-normal mb-[8px]">
							Tôi muốn đọc<br />
							nhiều hơn
						</h5>
						<p class="text-[#535662] font-hanken-grotesk text-[14px] font-medium leading-normal">
							Đăng ký nhận thêm các hưỡng dẫn giao dịch tuyệt vời từ UPS qua email của bạn
						</p>
						<form action="">
							<input type="text"
								class="rounded-[8px] bg-[#ECEEF4] backdrop-blur-[20px] py-[8px] px-[10px] my-[16px] w-full"
								placeholder="abc@email.com" required />
							<div class="hidden xl:inline-flex">
								<nuxt-link to="/" class="btn active group">
									<span> Đăng ký </span>
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
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- tin liên quan -->
		<div class="animate-ups w-full md:w-[668px] lg:w-[720px] xl:w-[800px] 2xl:w-[900px] 3xl:w-[1200px] mx-auto">
			<div class="animate-ups__item">
				<div class="flex justify-between">
					<div
						class="animate-about__item inline-flex relative pt-[6%] w-[54px] md:w-[70px] lg:w-[86px] 2xl:w-[100px] 3xl:w-[130px]">
						<nuxt-img format="webp" loading="lazy" height="78" alt="UPS" src="/logo/logo-cap-green.png"
							class="absolute top-0 left-0 w-full h-full object-contain" />
					</div>
				</div>

				<h2
					class="animate-about__item text-[24px] md:text-[32px] lg:text-[40px] 2xl:text-[45px] 3xl:text-[60px] font-bold font-BG">
					Tin <span class="text-green-ups">liên quan</span>
				</h2>
			</div>
			<div class="animate-ups__item my-[40px] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 3xl:gap-10">
				<div class="card relative" v-for="doc in data?.dataNews">
					<div class="flex justify-center text-center">
						<div class="inline-flex relative w-full pt-[70%]">
							<nuxt-img loading="lazy" :alt="doc?.short_content?.title"
								:src="config.NUXT_APP_IMAGE_URL + doc?.short_content?.cover?.id" height="288"
								class="link absolute top-0 left-0 w-full h-full object-cover rounded-[14px]" />
						</div>
					</div>
					<div class="flex justify-between items-center my-[24px]">
					
					</div>
					<div class="">
						<h6
							class="text-[#15171E] font-hanken-grotesk text-sm 2xl:text-base 3xl:text-xl font-semibold leading-normal line-clamp-1">
							{{ doc?.short_content?.title }}
						</h6>
						<p
							class="text-[#3C4052] font-hanken-grotesk text-xs sm:text-sm md:text-sm xl:text-sm 2xl:text-lg font-medium leading-normal mt-[8px] line-clamp-3">
							{{ doc?.short_content?.blurb }}
						</p>
					</div>
					<nuxt-link :to="`/tin-tuc/${doc?.short_content?.slug}`"
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Comment from "~/components/common/comment/index.vue";
import { config } from "~/lib/config";

export default defineComponent({
	name: "chi-tiet",
	components: {
		Comment,
	},
	setup(props, ctx) {
		const route = useRoute();
		const newStore = useNewsStore();

		const { data } = useAsyncData("news-detail", async () => {
			const dataDetail: any = await newStore.fnGetNewDetail(route.params?.slug as string);
			const dataNews: any = await newStore.fnGetListNews(
				1,
				3,
				dataDetail?.data?.data?.posts_by_id?.raw_content?.categories[0].category?.slug
			);

			return {
				newDetail: dataDetail?.data?.data?.posts_by_id?.raw_content,
				dataNews: dataNews?.data?.data?.posts,
			};
		});

		const metaTag = computed(() => {
			return {
				title: data.value?.newDetail?.title,
				titleTemplate: data.value?.newDetail?.title,
				meta: [
					{
						name: "description",
						content: data.value?.newDetail?.blurb,
					},
					{
						property: "og:title",
						content: data.value?.newDetail?.title,
					},
					{
						property: "og:description",
						content: data.value?.newDetail?.blurb,
					},
					{
						property: "og:image",
						content: config.NUXT_APP_IMAGE_URL + data.value?.newDetail.cover?.id,
					},
					{
						property: "og:type",
						content: config.NUXT_APP_IMAGE_URL + data.value?.newDetail.cover?.id,
					},
					{
						name: "twitter:card",
						content: config.NUXT_APP_IMAGE_URL + data.value?.newDetail.cover?.id,
					},
					{
						name: "twitter:title",
						content: data.value?.newDetail?.title,
					},
					{
						name: "twitter:description",
						content: data.value?.newDetail?.blurb,
					},
					{
						name: "twitter:image",
						content: config.NUXT_APP_IMAGE_URL + data.value?.newDetail.cover?.id,
					},
					{
						name: "keywords",
						content: data.value?.newDetail?.blurb,
					},
				],
			};
		});

		useHead(metaTag);

		onMounted(() => {
			const animateUpsEl = document.querySelectorAll(".animate-ups");

			animateUpsEl.forEach((el) => {
				const upsEl = el.querySelectorAll(".animate-ups__item");
				useGsap.fromTo(
					upsEl,
					{
						y: 100,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						ease: "power1.out",
						stagger: {
							from: 0,
							axis: "x",
							amount: 0.5,
						},
						scrollTrigger: {
							trigger: el,
							start: "top center",
							end: "bottom center",
							scrub: false,
						},
					}
				);
			});

			const btnWrapper = document.querySelectorAll(".link");
			btnWrapper.forEach((el) => {
				useGsap.fromTo(
					el,
					{
						y: 100,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						ease: "power1.out",
						stagger: {
							from: 0,
							axis: "x",
							amount: 0.5,
						},
					}
				);
			});

			useGsap.fromTo(
				".policy_collection-item",
				{
					y: 100,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power1.out",
					stagger: {
						from: 0,
						axis: "x",
						amount: 0.5,
					},
					scrollTrigger: {
						trigger: ".section_policy",
						start: "top center", // When the top of .section hits the center of viewport
						end: "bottom center", // When the bottom of .section hits the center of viewport
						scrub: false,
					},
				}
			);

			useGsap.fromTo(
				".news_layout_item",
				{
					y: 100,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "sine.out",
					stagger: {
						from: 0,
						axis: "x",
						amount: 0.5,
					},
					scrollTrigger: {
						trigger: ".section_news",
						start: "top center", // When the top of .section hits the center of viewport
						end: "bottom center", // When the bottom of .section hits the center of viewport
						scrub: false,
					},
				}
			);
		});

		return {
			data,
			config,
		};
	},
});
</script>
<style scoped>
/* Custom style cho vùng content */
.content-wrapper:deep(table) {
	border-collapse: collapse;
	width: 100%;
}

.content-wrapper :deep(table),
.content-wrapper :deep(th),
.content-wrapper :deep(td) {
	width: 100%;
	border: 1px solid black;
}

.content-wrapper :deep(th),
.content-wrapper :deep(td) {
	padding: 8px;
	text-align: left;
}

.content-wrapper :deep(*) {
	/* all: revert; */
}

.content-wrapper :deep(h1) {
	font-size: 2em;
	font-weight: bold;
	margin-top: 0.67em;
	margin-bottom: 0.67em;
	line-height: 1.2;
	/* Adjust line height for h1 */
}

.content-wrapper :deep(h2) {
	font-size: 1.5em;
	font-weight: bold;
	margin-top: 0.83em;
	margin-bottom: 0.83em;
	line-height: 1.3;
	/* Adjust line height for h2 */
}

.content-wrapper :deep(p) {
	margin-top: 1em;
	margin-bottom: 1em;
}

.content-wrapper :deep(a) {
	color: blue;
	text-decoration: underline;
}

.content-wrapper :deep(iframe) {
	width: 100% !important;
	height: 400px !important;
	/* Adjust the height as needed */
	border: none;
	max-width: 97%;
}

/* Add more specific styles as needed */
</style>
