<template>
	<footer id="footer">
		<div class="bg-[#0AB157]">
			<div class="container">
				<div
					class="flex gap-10 xl:gap-0 flex-col xl:flex-row justify-between py-10 lg:pt-12 xl:pt-20 lg:pb-20 xl:pb-[100px]"
				>
					<div class="">
						<div
							class="inline-flex w-[256px] h-[64px] lg:w-[300px] lg:h-[74px] xl:w-[409px] xl:h-[94px] relative"
						>
							<nuxt-img
								format="webp"
								loading="lazy"
								quality="80"
								src="/logo/logo-full-light.png"
								width="409"
								height="94"
								alt="UPS"
								class="absolute w-full h-full object-contain"
							/>
						</div>

						<div class="flex justify-between">
							<div class="flex flex-col">
								<div class="w-full max-w-[405px] flex flex-col gap-4 mt-6 xl:mt-10">
									<nuxt-link
										href="/"
										class="flex flex-col gap-4"
									>
										<nuxt-img
											format="webp"
											src="/logo/logo-row-light.png"
											alt="UPS"
											width="20"
											height="20"
										/>
										<span class="text-base xl:text-lg text-[#15171E] font-bold">
											Tầng 8 - Tòa nhà Hapro, Số 11B Cát Linh, Phường Quốc Tử Giám, Quận Đống Đa,
											Hà Nội
										</span>
									</nuxt-link>
									<nuxt-link
										href="tel:1800.0967"
										class="flex gap-4"
									>
										<!-- <div class="w-5 h-5"></div> -->
										<span class="text-base xl:text-lg text-[#15171E] font-bold"> 1800.0967 </span>
									</nuxt-link>
									<nuxt-link
										href="mailto:support@upsecurities.vn"
										class="flex gap-4"
									>
										<!-- <div class="w-5 h-5"></div> -->
										<span class="text-base xl:text-lg text-[#15171E] font-bold">
											support@upsecurities.vn
										</span>
									</nuxt-link>
								</div>
							</div>
						</div>

						<!-- SOSIAL -->
						<div class="mt-4 flex gap-2">
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-6 h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Facebook"
									height="24"
									src="/social/facebook.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-6 h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="instagram"
									height="24"
									src="/social/instagram.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-6 h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Twitter"
									height="24"
									src="/social/twitter.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-6 h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Tiktok"
									height="24"
									src="/social/tiktok.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-6 h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Telegram"
									height="24"
									src="/social/telegram.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-6 h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="In"
									height="24"
									src="/social/in.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
						</div>
					</div>

					<div class="w-full xl:w-[800px] max-w-full">
						<div class="flex flex-col lg:flex-row gap-10">
							<div class="w-max">
								<h4 class="text-base xl:text-lg text-[#000] font-bold">Khách hàng cá nhân</h4>

								<div class="mt-4 xl:mt-6 flex gap-3 flex-col">
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Cổ phiếu
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Trái phiếu
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Phái sinh
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Biểu phí giao dịch
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Sản phẩm tài chính
									</nuxt-link>
								</div>
							</div>
							<div class="w-max">
								<h4 class="text-base lg:text-lg text-[#000] font-bold">Khách hàng doanh nghiệp</h4>

								<div class="mt-4 xl:mt-6 flex gap-3 flex-col">
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Tư vấn tài chính
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Tin đấu giá
									</nuxt-link>
								</div>
							</div>
							<div class="w-max">
								<h4 class="text-base xl:text-lg text-[#000] font-bold">Đầu tư cùng UPS</h4>

								<div class="mt-4 xl:mt-6 flex gap-3 flex-col">
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Nhận định thị trường
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Cộng đồng
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Cẩm nang đầu tư
									</nuxt-link>
								</div>
							</div>
							<div class="w-max">
								<h4 class="text-base xl:text-lg text-[#000] font-bold">Về UPS</h4>

								<div class="mt-4 xl:mt-6 flex gap-3 flex-col">
									<nuxt-link
										to="/"
										class="text-sm lg:text-base text-[#000] font-medium"
									>
										Về chúng tôi
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm lg:text-base text-[#000] font-medium"
									>
										Tin UPS
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm lg:text-base text-[#000] font-medium"
									>
										Gia nhập UPS
									</nuxt-link>
								</div>
							</div>
						</div>

						<div class="mt-10 lg:mt-[75px]">
							<div class="flex gap-4 items-center">
								<p class="text-base lg:text-xl text-[#EEEEEE] font-normal">Tải ứng dụng</p>
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
									class="animate-ups__item h-[54px] lg:h-[68px] px-3 inline-flex gap-2 items-center rounded-[12px] bg-[#111111]"
								>
									<div class="inline-flex relative w-6 lg:w-8 h-6 lg:h-8">
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Google Play"
											width="32"
											height="32"
											src="/icons/chplay-icon.svg"
											class="absolute w-full h-full object-contain"
										/>
									</div>

									<div class="pr-0 lg:pr-5">
										<p class="text-[10px] lg:text-xs uppercase font-normal text-white opacity-55">
											Get it on
										</p>
										<p class="text-base lg:text-lg font-semibold text-white">Google Play</p>
									</div>
								</nuxt-link>

								<nuxt-link
									to="/"
									target="_blank"
									class="animate-ups__item h-[54px] lg:h-[68px] px-3 inline-flex gap-2 items-center rounded-[12px] bg-[#111111]"
								>
									<div class="inline-flex relative w-6 lg:w-8 h-6 lg:h-8">
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Google Play"
											width="32"
											height="32"
											src="/icons/app-store-icon.svg"
											class="absolute w-full h-full object-contain"
										/>
									</div>

									<div class="pr-0 lg:pr-5">
										<p class="text-[10px] lg:text-xs uppercase font-normal text-white opacity-55">
											Download on the
										</p>
										<p class="text-base lg:text-lg font-semibold text-white">App Store</p>
									</div>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- COPY RIGHT -->
		<div class="bg-[#15171E]">
			<div class="container">
				<div
					class="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between py-[30px]"
				>
					<p class="text-sm text-white opacity-75">
						© 2024 <span class="text-green-ups">UP Securities</span>. All right reserved
					</p>

					<div class="flex flex-col lg:flex-row items-center mt-[10px] lg:mt-0 gap-[10px] lg:gap-6">
						<nuxt-link
							href="/"
							class="text-sm text-white opacity-75 font-medium"
						>
							Điều khoản & Quyền hạn
						</nuxt-link>
						<nuxt-link
							href="/"
							class="text-sm text-white opacity-75 font-medium"
						>
							Trung tâm hỗ trợ khách hàng
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "the-footer",
	components: {},
	setup(props, ctx) {},
});
</script>

<style></style>
