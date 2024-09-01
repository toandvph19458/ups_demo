<template>
	<footer id="footer">
		<div class="bg-[#04C85E]">
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
								src="/logo/logo-footer.png"
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
										<!-- <nuxt-img
											format="webp"
											src="/logo/logo-row-light.png"
											alt="UPS"
											width="20"
											height="20"
										/> -->
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
						<div class="mt-4 flex gap-4">
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
									alt="Lulu"
									height="24"
									src="/social/lulu.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
						</div>
					</div>

					<div class="w-full xl:w-[800px] max-w-full">
						<div class="flex flex-col lg:flex-row gap-10">
							<div class="w-max">
								<h4 class="text-base xl:text-lg text-[#000] font-bold">Khách hàng cá nhân</h4>

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

								<div class="flex gap-3 flex-col">
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Margin T+3
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Vay ký quỹ
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Zero - Fee
									</nuxt-link>
									<nuxt-link
										to="/"
										class="text-sm xl:text-base text-[#000] font-medium"
									>
										Biểu phí giao dịch
									</nuxt-link>
								</div>
							</div>
							<div class="w-max">
								<h4 class="text-base lg:text-lg text-[#000] font-bold">Khách hàng doanh nghiệp</h4>

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

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

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

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

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

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
								<p class="text-base lg:text-base text-black font-bold">Đầu tư ngay</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
								>
									<path
										d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM11 12C11.5523 12 12 11.5523 12 11L12 2C12 1.44772 11.5523 1 11 1C10.4477 1 10 1.44772 10 2L10 10L2 10C1.44772 10 1 10.4477 1 11C1 11.5523 1.44772 12 2 12L11 12ZM0.292893 1.70711L10.2929 11.7071L11.7071 10.2929L1.70711 0.292893L0.292893 1.70711Z"
										fill="#15171E"
									/>
								</svg>
							</div>

							<div class="mt-5 flex gap-4">
								<nuxt-link
									to="/"
									target="_blank"
									class="animate-ups__item h-12 lg:h-12 px-3 inline-flex gap-3 items-center rounded-[12px] bg-[#111111]"
								>
									<div class="inline-flex relative w-4 lg:w-4 h-4 lg:h-4">
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="UPS"
											width="16"
											height="16"
											src="/logo/logo-row.png"
											class="absolute w-full h-full object-contain"
										/>
									</div>

									<p class="text-lg text-white font-semibold">
										Truy cập <span class="text-green-ups">Bảng giá</span> ngay
									</p>
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
