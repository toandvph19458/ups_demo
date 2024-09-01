<template>
	<section class="animate-ups mb-[100px] md:mb-[180px] xl:mb-[230px]">
		<div class="bg-[linear-gradient(73deg,#15171E_29.09%,#125933_88.69%)]">
			<div class="container">
				<div
					class="w-full h-full flex gap-6 md:gap-0 flex-col-reverse md:flex-row items-center justify-between pt-8 md:pt-16"
				>
					<div
						class="w-full max-w-full md:max-w-[446px] xl:max-w-[745px] h-full flex flex-col justify-between flex-shrink-0"
					>
						<h3
							class="animate-ups__item bg-[linear-gradient(100deg,rgba(255,255,255,0.47)_-0.85%,rgba(255,255,255,0.79)_49.77%,rgba(255,255,255,0)_101.25%)] bg-clip-text text-transparent font-BG text-[24px] md:text-[30px] xl:text-[40px] font-semibold leading-normal max-w-[580px]"
						>
							<span class="text-[#02E56A]">UPS</span>
							cung cấp cho bạn các dịch vụ và đội ngũ tốt nhất, hiện đại nhất thị trường
						</h3>

						<div class="flex justify-center relative mt-[-15%]">
							<div
								class="w-[400px] h-[180px] lg:w-[500px] lg:h-[225px] xl:w-full xl:h-[335px] absolute left-1/2 right-0 bottom-0 -translate-x-1/2"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="UPS"
									width="745"
									height="335"
									src="/background/bg-01.png"
									class="w-full h-full object-contain animate-ups__item"
								/>
							</div>

							<div
								class="w-[190px] h-[390px] md:w-[240px] md:h-[485px] xl:w-[360px] xl:h-[730px] translate-y-[30%]"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="UPS"
									width="360"
									height="730"
									src="/images/iphone-12-promax.png"
									class="w-full h-full object-contain animate-ups__item"
								/>
							</div>
						</div>
					</div>

					<div class="w-full max-w-full md:max-w-[500px] xl:max-w-[760px] h-full">
						<p class="animate-ups__item text-xs lg:text-base xl:text-xl text-[#EEEEEE] font-normal">
							Với phương châm gần gũi và thân thuộc với khách hàng. UPS tự tin trở thành người bạn, người
							trợ thủ đáng tin cậy, luôn sẵn lòng hỗ trợ và đồng hành cùng nhà đầu tư trong mọi bước đi.
						</p>

						<div class="grid grid-cols-2 mt-6 md:mt-[68px]">
							<div class="animate-ups__item pr-5 md:pr-[40px] xl:pr-[60px]">
								<h4
									class="text-[30px] md:text-[52px] xl:text-[80px] font-bold leading-normal text-[#02E56A]"
								>
									60%
								</h4>
								<p class="text-xs lg:text-base xl:text-xl text-[#EEEEEE] font-normal">
									Nhà đầu tư trẻ bước đầu loay hoay trong việc lựa chọn sàn giao dịch đầu tư
								</p>
							</div>
							<div
								class="animate-ups__item pl-5 md:pl-[40px] xl:pl-[60px] border-l-[2px] border-[#02E56A1a]"
							>
								<h4
									class="text-[30px] md:text-[52px] xl:text-[80px] font-bold leading-normal text-[#02E56A]"
								>
									70%
								</h4>
								<p class="text-xs lg:text-base xl:text-xl text-[#EEEEEE] font-normal">
									Nhà đầu tư trẻ cần trau dồi thêm kiến thức, kỹ năng về chứng khoán để tránh rủi ro
									thất bại
								</p>
							</div>
						</div>

						<div class="mt-6 md:mt-20 xl:mt-32">
							<div class="animate-ups__item flex gap-4 items-center">
								<p class="text-sm lg:text-base xl:text-xl text-[#EEEEEE] font-normal">Tải ứng dụng</p>
								<i>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
									>
										<path
											d="M1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM11 11.75C11.4142 11.75 11.75 11.4142 11.75 11L11.75 4.25C11.75 3.83579 11.4142 3.5 11 3.5C10.5858 3.5 10.25 3.83579 10.25 4.25V10.25H4.25C3.83579 10.25 3.5 10.5858 3.5 11C3.5 11.4142 3.83579 11.75 4.25 11.75L11 11.75ZM0.46967 1.53033L10.4697 11.5303L11.5303 10.4697L1.53033 0.46967L0.46967 1.53033Z"
											fill="#02E56A"
										/>
									</svg>
								</i>
							</div>

							<div class="mt-5 flex gap-4">
								<nuxt-link
									to="/"
									target="_blank"
									class="animate-ups__item flex-1 md:flex-none h-14 md:h-[68px] px-3 inline-flex gap-2 items-center rounded-[12px] bg-[#111111]"
								>
									<div class="relative w-8 h-8">
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Google Play"
											width="32"
											height="32"
											src="/icons/chplay-icon.svg"
											class="w-full h-full"
										/>
									</div>

									<div class="pr-0 xl:pr-5">
										<p class="text-[10px] md:text-xs uppercase font-normal text-white opacity-55">
											Get it on
										</p>
										<p class="text-sm xl:text-lg font-semibold text-white">Google Play</p>
									</div>
								</nuxt-link>

								<nuxt-link
									to="/"
									target="_blank"
									class="animate-ups__item flex-1 md:flex-none h-14 md:h-[68px] px-3 inline-flex gap-2 items-center rounded-[12px] bg-[#111111]"
								>
									<div class="relative w-8 h-8">
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Google Play"
											width="32"
											height="32"
											src="/icons/app-store-icon.svg"
											class="w-full h-full"
										/>
									</div>

									<div class="pr-0 xl:pr-5">
										<p class="text-[10px] md:text-xs uppercase font-normal text-white opacity-55">
											Download on the
										</p>
										<p class="text-sm xl:text-lg font-semibold text-white">App Store</p>
									</div>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ups-service",
	components: {},
	setup(props, ctx) {},
});
</script>

<style></style>
