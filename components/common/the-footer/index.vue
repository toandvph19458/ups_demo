<template>
	<footer id="footer">
		<div class="bg-[#04C85E]">
			<div class="layout">
				<div
					class="h-max flex gap-10 xl:gap-0 flex-col md:flex-row justify-between py-10 lg:pt-12 xl:pt-20 lg:pb-20 xl:pb-[100px]"
				>
					<div class="w-full sm:w-1/2 md:max-w-max">
						<div
							class="inline-flex w-full sm:w-[218px] md:w-[272px] lg:w-[272px] xl:w-[309px] 2xl:w-[409px] h-[54px] sm:h-[50px] md:h-[62px] lg:h-[62px] xl:h-[70px] 2xl:h-[94px] relative"
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
								<div
									class="w-full max-w-full md:max-w-[272px] lg:max-w-[272px] xl:max-w-[309px] 2xl:max-w-[409px] flex flex-col gap-4 mt-6 xl:mt-10"
								>
									<nuxt-link
										href="/"
										class="flex items-center gap-2"
									>
										<nuxt-img
											format="webp"
											width="24"
											alt="UPS"
											src="/icons/address-icon.svg"
											class="w-[18px] h-[18px] 2xl:w-6 2xl:h-6"
										/>
										<span class="text-[12px] lg:text-[13.5px] 2xl:text-lg text-[#15171E] font-bold">
											Tầng 8 - Tòa nhà Hapro, Số 11B Cát Linh, Phường Quốc Tử Giám, Quận Đống Đa,
											Hà Nội
										</span>
									</nuxt-link>
									<nuxt-link
										href="tel:0243.944.6666"
										class="flex gap-2"
									>
										<nuxt-img
											format="webp"
											width="24"
											alt="UPS"
											src="/icons/phone-icon.svg"
											class="w-[18px] h-[18px] 2xl:w-6 2xl:h-6"
										/>
										<span class="text-[12px] lg:text-[13.5px] 2xl:text-lg text-[#15171E] font-bold">
											0243.944.6666
										</span>
									</nuxt-link>
									<nuxt-link
										href="mailto:dvkh@upse.vn"
										class="flex gap-2"
									>
										<nuxt-img
											format="webp"
											width="24"
											alt="UPS"
											src="/icons/mail-icon.svg"
											class="w-[18px] h-[18px] 2xl:w-6 2xl:h-6"
										/>
										<span class="text-[12px] lg:text-[13.5px] 2xl:text-lg text-[#15171E] font-bold">
											dvkh@upse.vn
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
								class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Facebook"
									width="24"
									src="/social/facebook.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="instagram"
									width="24"
									src="/social/instagram.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Twitter"
									width="24"
									src="/social/twitter.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Tiktok"
									width="24"
									src="/social/tiktok.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Telegram"
									width="24"
									src="/social/telegram.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
							<nuxt-link
								href="/"
								target="_blank"
								class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
							>
								<nuxt-img
									format="webp"
									loading="lazy"
									alt="Lulu"
									width="24"
									src="/social/lulu.svg"
									class="absolute w-full h-full object-contain"
								/>
							</nuxt-link>
						</div>
					</div>

					<div class="flex flex-col justify-between w-full sm:w-1/2 md:max-w-max min-h-full">
						<div class="flex flex-col sm:flex-row flex-wrap gap-y-7 gap-x-0 md:gap-x-4 md:gap-7 2xl:gap-10">
							<div class="w-full md:w-[calc(50%-8px)] lg:w-max">
								<h4 class="text-xs xl:text-[13.5px] 2xl:text-lg text-[#000] font-bold">
									Khách hàng cá nhân
								</h4>

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

								<div class="flex gap-3 flex-col">
									<nuxt-link
										to="/coming-soon"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Ưu đãi
									</nuxt-link>
									<nuxt-link
										to="/bieu-phi"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Biểu phí giao dịch
									</nuxt-link>
								</div>
							</div>
							<div class="w-full md:w-[calc(50%-8px)] lg:w-max">
								<h4 class="text-xs xl:text-[13.5px] 2xl:text-lg text-[#000] font-bold">
									Khách hàng doanh nghiệp
								</h4>

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

								<div class="flex gap-3 flex-col">
									<nuxt-link
										to="/coming-soon"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Tư vấn tài chính
									</nuxt-link>
									<nuxt-link
										to="/tin-tuc"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Tin đấu giá
									</nuxt-link>
								</div>
							</div>
							<div class="w-full md:w-[calc(50%-8px)] lg:w-max">
								<h4 class="text-xs xl:text-[13.5px] 2xl:text-lg text-[#000] font-bold">
									Đầu tư cùng UPS
								</h4>

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

								<div class="flex gap-3 flex-col">
									<nuxt-link
										to="/coming-soon"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Nhận định thị trường
									</nuxt-link>
									<nuxt-link
										to="/hdsd"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Hướng dẫn sử dụng
									</nuxt-link>
								</div>
							</div>
							<div class="w-full md:w-[calc(50%-8px)] lg:w-max">
								<h4 class="text-xs xl:text-[13.5px] 2xl:text-lg text-[#000] font-bold">Về UPS</h4>

								<div class="my-3 xl:my-3 w-[10px] h-[1px] bg-[#3A6A50]"></div>

								<div class="flex gap-3 flex-col">
									<nuxt-link
										to="/cong-bo-thong-tin"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Công bố thông tin
									</nuxt-link>

									<nuxt-link
										to="/gioi-thieu"
										class="text-[10.5px] xl:text-xs 2xl:text-base text-[#000] font-medium"
									>
										Gia nhập UPS
									</nuxt-link>
								</div>
							</div>
						</div>

						<div class="mt-8 md:mt-0 flex gap-4 flex-wrap">
							<nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info" class="btn active group">
                        <span> Mở tài khoản ngay </span>
                        <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                          <i class="w-full h-full group-hover:inline-flex hidden absolute">
                            <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16"
                              alt="UPS" />
                          </i>

                          <i class="w-full h-full group-hover:hidden inline-flex absolute">
                            <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                          </i>
                        </div>
                      </nuxt-link>
							<nuxt-link
								to="https://webtrading.upse.vn/"
								class="h-8 2xl:h-12 px-4 2xl:px-5 inline-flex gap-3 items-center rounded-full border border-transparent hover:border-[#222]"
							>
								<span class="text-xs xl:text-[13.5px] 2xl:text-lg font-bold"> Đăng nhập/Giao dịch ngay </span>
								<div class="inline-flex gap-1 w-3 2xl:w-4 h-3 2xl:h-4 overflow-hidden relative">
									<i class="w-full h-full inline-flex absolute">
										<nuxt-img
											src="/icons/arrow-dark-icon.svg"
											loading="lazy"
											width="16"
											height="16"
											alt="UPS"
										/>
									</i>
								</div>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- COPY RIGHT -->
		<div class="bg-[#15171E]">
			<div class="layout">
				<div
					class="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between py-5 2xl:py-[30px]"
				>
					<p class="text-[10.5px] 2xl:text-sm text-white opacity-75">
						© 2024 <span class="text-green-ups">UP Securities</span>. All right reserved
					</p>

					<div class="flex flex-col lg:flex-row items-center mt-[10px] lg:mt-0 gap-[10px] lg:gap-6">
						<nuxt-link
							href="/"
							class="text-[10.5px] 2xl:text-sm text-white opacity-75 font-medium"
						>
							Điều khoản & Quyền hạn
						</nuxt-link>
						<nuxt-link
							href="/"
							class="text-[10.5px] 2xl:text-sm text-white opacity-75 font-medium"
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
