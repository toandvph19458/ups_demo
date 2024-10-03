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
			<div class="animate-ups__item inline-flex relative w-[300px] h-[200px] lg:w-[445px] lg:h-[208px] xl:w-[1600px] xl:h-[700px]">
				<nuxt-img loading="lazy" alt="UPS" :src="config.NUXT_APP_IMAGE_URL + data?.newDetail?.thumbnail?.id"
					class="link absolute w-full h-full object-cover rounded-2xl" />
			</div>
		</div>
		<div class="animate-ups xl:w-[1200px] w-full flex justify-center mx-auto">
			<div class="w-[327px] xl:w-[1200px] xl:flex lg:flex block justify-center gap-[28px]">
				<div class="animate-ups__item text-left xl:w-[70%] lg:w-[70%] w-full">
					<!-- <p class="text-[#696B75] text-[18px] font-normal leading-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div class="my-[20px] xl:w-full w-[327px]">
            <iframe
              class="xl:w-[800px] xl:h-[513px] w-[327px] h-auto"
              src="https://www.youtube.com/embed/QLzIlSj-UDo?si=ZwkUOgpPJJ6PHJRn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="">
            <h5
              class="text-[#15171E] text-[24px] font-semibold leading-[20px] mb-[10px]"
            >
              Lorem ipsum dolor sit amet
            </h5>
            <p class="text-[#696B75] text-[18px] font-normal leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div> -->
					<div class="content-wrapper" v-html="data?.newDetail.content"></div>
					<!-- Xem tài liệu -->
					<div class="container text-center mt-3 flex items-center justify-center gap-[12px] flex-col md:flex-row " v-for="doc in data?.newDetail.files">
						<nuxt-link :to="config.NUXT_APP_IMAGE_URL + doc.directus_files_id?.id"
							class="underline" target="_blank">Xem tài liệu  {{ doc.directus_files_id?.title }}</nuxt-link>
					</div>
					<div class="my-[30px]">
						<Comment />
					</div>
					<p
						class="text-center text-[#535662] font-hanken-grotesk text-[16px] font-medium leading-normal mb-[80px]">
						Cập nhật mới nhất: 20/08/2024
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
		<div class="animate-ups w-full xl:w-[1200px] mx-auto">
			<div class="animate-ups__item">
				<div class="flex justify-between">
					<div class="animate-about__item inline-flex relative w-[100px] h-[45px] xl:w-[132px] xl:h-[60px]">
						<nuxt-img format="webp" loading="lazy" height="78" alt="UPS" src="/logo/logo-cap-green.png"
							class="absolute w-full h-full object-contain" />
					</div>
				</div>

				<h2 class="animate-about__item text-[36px] xl:text-[60px] font-bold font-BG">
					Tin <span class="text-green-ups">liên quan</span>
				</h2>
			</div>

			<div class="animate-ups__item my-[40px] grid grid-cols-1 xl:grid-cols-3 gap-10">
				<div class="card relative" v-for="doc in data?.dataNews">
					<div class="flex justify-center text-center">
						<div class="inline-flex relative w-full h-[288px]">
							<nuxt-img loading="lazy" :alt="doc?.short_content?.title"
								:src="config.NUXT_APP_IMAGE_URL + doc?.short_content?.cover?.id" height="288"
								class="link absolute w-full h-full object-cover rounded-[14px]" />
						</div>
					</div>
					<div class="flex justify-between items-center my-[24px]">
						<!-- <template v-if="doc?.short_content?.tags.length > 0">
							<p
								v-for="(sub, k) in doc?.short_content?.tags"
								:key="k"
								class="text-sm md:text-base xl:text-lg text-[#F05] font-medium"
							>
								{{ `#${sub?.tag.slug}` }}
							</p>
						</template>
<div class="time text-[#9498A8] font-hanken-grotesk text-[18px] font-medium leading-normal">
	5 phút trước
</div> -->
					</div>
					<div class="">
						<h6
							class="text-[#15171E] font-hanken-grotesk text-[20px] font-semibold leading-normal line-clamp-1">
							{{ doc?.short_content?.title }}
						</h6>
						<p
							class="text-[#3C4052] font-hanken-grotesk text-[18px] font-medium leading-normal mt-[8px] line-clamp-3">
							{{ doc?.short_content?.blurb }}
						</p>
					</div>
					<nuxt-link :to="`/cong-bo-thong-tin/${doc?.short_content?.slug}`"
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Comment from "~/components/common/comment/index.vue";
import { useAnnounceStore } from "#imports";
import { config } from "~/lib/config";

export default defineComponent({
	name: "chi-tiet-cong-bo",
	components: {
		Comment,
	},
	setup(props, ctx) {
		const route = useRoute();
		const newStore = useAnnounceStore();

		const { data } = useAsyncData("announce-detail", async () => {
			const dataDetail: any = await newStore.fnGetAnnounceDetail(route.params?.slug as string);
			const dataNews: any = await newStore.fnGetListAnnounce(
				1,
				3,
				dataDetail?.data?.data?.posts_by_id?.raw_content?.categories[0].category?.slug
			);
			console.log(dataDetail?.data?.data?.announce_by_id?.raw_content);
			
			return {
				newDetail: dataDetail?.data?.data?.announce_by_id?.raw_content,
				dataNews: dataNews?.data?.data?.announce,
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
</style>
