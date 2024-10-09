<template>
	<section class="">
		<!-- <div
			class="flex flex-col items-center w-full 3xl:px-[225px] 3xl:py-[100px] 2xl:py-[80px] lg:py-[40px] md:py-[40px] xl:py-[60px] xl:px-[100px] lg:px-[60px] md:px-[60px] 2xl:px-[120px] sm:p-6 2xl:gap-[120px] xl:gap-[100px] lg:gap-[60px] gap-[120px] bg-[linear-gradient(0deg,_rgba(255,_243,_93,_0)_36.67%,_#F51666_105.87%)]">

			<div class="animate-ups md:flex items-start 2xl:gap-[40px] gap-[24px] self-stretch hidden">
				<div class="flex flex-col items-start 2xl:gap-[32px] gap-[24px] flex-1">
					<img src="/images/san-pham1.jpg" alt="" class="rounded-[12px] animate-ups__item" />
					<div>
						<p
							class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[24px] font-semibold leading-none pb-2 animate-ups__item">
							Gói vay đa dạng
						</p>
						<p
							class="text-black/60 font-HG 3xl:text-[16px] 2xl:text-[14px] lg:text-[12px] text-[14px] md:text-[12px] font-medium leading-none animate-ups__item">
							Đảm bảo chi phí vay thấp từ 0%, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
						</p>
					</div>
				</div>
				<div class="flex flex-col items-center 2xl:gap-[32px] gap-[24px] xl:gap-10 flex-1">
					<div class="">
						<p
							class="text-[#FFF] text-center font-BG 2xl:text-[45px] 3xl:text-[52px] xl:text-[40px] lg:text-[32px] md:text-[24px] text-[45px] font-semibold leading-normal animate-ups__item">
							Tính năng nổi bật
						</p>
						<p
							class="text-white/80 text-center font-BG text-[32px] md:text-[20px] 2xl:text-[32px] xl:text-[32px]  font-semibold leading-normal animate-ups__item">
							Margin T+
						</p>
					</div>
					<img src="/images/san-pham2.jpg" alt="" class="rounded-[12px] animate-ups__item" />
					<div>
						<p
							class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[24px] font-semibold leading-none pb-2 animate-ups__item">
							Thời gian nắm giữ T+
						</p>
						<p
							class="text-black/60 font-HG 3xl:text-[16px] 2xl:text-[14px] lg:text-[12px] md:text-[12px] text-[14px] font-medium leading-none animate-ups__item">
							Giúp bạn tận dụng tối đa các cơ hội đầu tư ngắn hạn mà vẫn quản lý tốt đầu tư
						</p>
					</div>
				</div>
				<div class="flex flex-col items-start 2xl:gap-[32px] gap-[24px] flex-1">
					<img src="/images/san-pham3.jpg" alt="" class="rounded-[12px] animate-ups__item" />
					<div>
						<p
							class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[24px] font-semibold leading-none pb-2 animate-ups__item">
							Hỗ trợ chuyên nghiệp
						</p>
						<p
							class="text-black/60 font-HG 3xl:text-[16px] 2xl:text-[14px] lg:text-[12px] md:text-[12px] text-[14px] font-medium leading-none animate-ups__item">
							Đội ngũ tư vấn đầu tư giàu kinh nghiệm của UP Securities luôn sẵn sàng hỗ trợ bạn
						</p>
					</div>
				</div>
			</div>

			<div class="animate-ups md:hidden flex flex-col items-center w-full">
				<div class="pb-[40px]">
					<p class="text-[#FFF] text-center font-BG text-[20px] font-semibold leading-none animate-ups__item">
						Tính năng nổi bật
					</p>
					<p
						class="text-white/80 text-center font-BG text-[18px] font-semibold leading-none animate-ups__item">
						Margin T+
					</p>
				</div>
				<div class="w-full min-h-min">
					<swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false" :initial-slide="vSwiperIndex"
						:speed="800" @slide-change="updateVSwiperIndex" :slides-per-view="1">
						<swiper-slide>
							<div class="flex flex-col items-start p-2 w-full gap-5 animate-ups__item">
								<div class="w-full">
									<img src="/images/san-pham1.jpg" alt="" class="rounded-[24px] w-full" />
								</div>
								<div>
									<p class="text-[#15171E] font-BG text-[14px] font-semibold leading-none pb-2">
										Gói vay đa dạng
									</p>
									<p class="text-black/60 font-HG text-[12px] font-medium leading-none">
										Đảm bảo chi phí vay thấp từ 0%, giúp bạn tự tin hơn khi thực hiện các giao dịch
										ngắn hạn
									</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="flex flex-col items-start p-2 w-full gap-5 animate-ups__item">
								<div class="w-full">
									<img src="/images/san-pham2.jpg" alt="" class="rounded-[24px] w-full" />
								</div>
								<div>
									<p class="text-[#15171E] font-BG text-[14px] font-semibold leading-none pb-2">
										Thời gian nắm giữ T+
									</p>
									<p class="text-black/60 font-HG text-[12px] font-medium leading-none">
										Giúp bạn tận dụng tối đa các cơ hội đầu tư ngắn hạn mà vẫn quản lý tốt đầu tư
									</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="flex flex-col items-start p-2 w-full gap-5 animate-ups__item">
								<div class="w-full">
									<img src="/images/san-pham3.jpg" alt="" class="rounded-[24px] w-full" />
								</div>
								<div>
									<p class="text-[#15171E] font-BG text-[14px] font-semibold leading-none pb-2">
										Hỗ trợ chuyên nghiệp
									</p>
									<p class="text-black/60 font-HG text-[12px] font-medium leading-none">
										Đội ngũ tư vấn đầu tư giàu kinh nghiệm của UP Securities luôn sẵn sàng hỗ trợ
										bạn
									</p>
								</div>
							</div>
						</swiper-slide>
					</swiper>
				</div>
			</div>

			<div class="animate-ups relative flex flex-col items-center w-full">
				<p
					class="text-[#15171E] text-center font-BG 3xl:text-[60px] 2xl:text-[45px] xl:text-[40px] lg:text-[32px] md:text-[32px] sm:text-[20px] text-[45px] font-semibold leading-none 2xl:my-6 animate-ups__item">
					Cách đăng ký
					<span
						class="text-[#F51666] font-BG 3xl:text-[60px] 2xl:text-[45px] xl:text-[40px] lg:text-[32px] md:text-[32px] text-[45px] sm:text-[20px] font-semibold leading-none">Margin
						T+</span>
				</p>
				<div
					class="w-full flex justify-center items-center px-[275px] lg:px-[158px] 2xl:px-[255px] sm:p-7 lg:h-[630px]">
					<img src="/images/image@2x.png"
						class="sm:w-[327px] sm:h-[245px] 3xl:translate-y-[11%] 3xl:h-[540px] 3xl:w-[840px] 2xl:w-[687px] 2xl:h-[515px] object-cover md:w-[589px] md:h-[442px] xl:w-[687px] xl:h-[515px] animate-ups__item" />
				</div>
				<div class="h-[80px] sm:h-[300px] md:h-[120px] "></div>

				<div
					class="animate-ups grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 w-full xl:p-[24px] lg:p-6 md:p-6 2xl:p-[40px] 3xl:p-[60px] sm:p-6 items-start xl:gap-5 lg:gap-4 md:gap-5 3xl:gap-[60px] 2xl:gap-[24px] sm:gap-4 rounded-[40px] border border-[#F51666] bg-white/60 backdrop-blur-[50px] absolute sm:top-1/3 lg:top-[60%] md:top-2/3 2xl:top-[73%] xl:top-[60%]">
					<div class="animate-ups__item">
						<p
							class="text-[#15171E] font-BG 2xl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
							Cách 1
						</p>
						<p class="bg-[#F19F00] w-[131px] h-[1px] my-2">
						</p>
						<p
							class="text-[#15171E] font-BG 2xl:text-[24px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-semibold leading-[34px]">
							Đăng ký tại quầy/gọi điện
							lên tổng đài
						</p>
					</div>
					<div class="animate-ups__item">
						<p
							class="text-[#15171E] font-BG 2xl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
							Cách 2
						</p>
						<p class="bg-[#F19F00] w-[131px] h-[1px] my-2">
						</p>
						<p
							class="text-[#15171E] font-BG 2xl:text-[24px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-semibold leading-[34px]">
							Đăng ký thông qua nhân viên
							chăm sóc
						</p>
					</div>
					<div class="animate-ups__item">
						<p
							class="text-[#15171E] font-BG 2xl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
							Cách 3
						</p>
						<p class="bg-[#F19F00] w-[131px] h-[1px] my-2">
						</p>
						<p
							class="text-[#15171E] font-BG 2xl:text-[24px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-semibold leading-[34px]">
							Đăng ký trên các ứng dụng phần mềm giao dịch trực tuyến của  UPS
						</p>
					</div>

				</div>
			</div>
		</div> -->



		<div
			class="py-6 md:py-10 xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] bg-[linear-gradient(0deg,_rgba(255,_243,_93,_0)_36.67%,_#F51666_105.87%)]">
			<div
				class="container-product flex flex-col gap-10 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[120px] 3xl:gap-[160px]">

				<div class="hidden md:grid grid-cols-3 gap-6 3xl:gap-10">

					<div class="flex flex-col w-full gap-5 md:gap-3 lg:gap-5 xl:gap-6 3xl:gap-8">
						<div
							class="relative w-full h-[160px] md:h-[148px] lg:h-[210px] xl:h-[240px] 2xl:h-[280px] 3xl:h-[300px]">
							<nuxt-img src="/images/san-pham1.jpg"
								class="w-full h-full rounded-[12px] xl:rounded-[20px] 3xl:rounded-[24px]" />
						</div>
						<div class="space-y-2">
							<p
								class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] text-[18px] font-semibold animate-ups__item">
								Gói vay đa dạng
							</p>
							<p class="text-black/60 font-HG 3xl:text-[18px] text-[16px] font-medium animate-ups__item">
								Đảm bảo chi phí vay thấp từ 0%, giúp bạn tự tin hơn khi thực hiện các giao dịch ngắn hạn
							</p>
						</div>
					</div>

					<div class="flex flex-col gap-6 xl:gap-10">
						<div class="">
							<p
								class="text-[#FFF] text-center font-BG 2xl:text-[45px] 3xl:text-[52px] xl:text-[40px] lg:text-[32px] md:text-[24px] text-[20px] font-semibold leading-normal animate-ups__item">
								Tính năng nổi bật
							</p>
							<p
								class="text-white/80 text-center font-BG text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] font-semibold leading-normal animate-ups__item">
								Margin T+
							</p>
						</div>

						<div class="flex flex-col w-full gap-5 md:gap-3 lg:gap-5 xl:gap-6 3xl:gap-8">
							<div
								class="relative w-full h-[160px] md:h-[148px] lg:h-[210px] xl:h-[240px] 2xl:h-[280px] 3xl:h-[300px]">
								<nuxt-img src="/images/san-pham2.jpg"
									class="w-full h-full rounded-[12px] xl:rounded-[20px] 3xl:rounded-[24px]" />
							</div>
							<div class="space-y-2">
								<p
									class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] text-[18px] font-semibold animate-ups__item">
									Thời gian nắm giữ T+
								</p>
								<p
									class="text-black/60 font-HG 3xl:text-[18px] text-[16px] font-medium animate-ups__item">
									Giúp bạn tận dụng tối đa các cơ hội đầu tư ngắn hạn mà vẫn quản lý tốt đầu tư
								</p>
							</div>
						</div>
					</div>

					<div class="flex flex-col w-full gap-5 md:gap-3 lg:gap-5 xl:gap-6 3xl:gap-8">
						<div
							class="relative w-full h-[160px] md:h-[148px] lg:h-[210px] xl:h-[240px] 2xl:h-[280px] 3xl:h-[300px]">
							<nuxt-img src="/images/san-pham3.jpg"
								class="w-full h-full rounded-[12px] xl:rounded-[20px] 3xl:rounded-[24px]" />
						</div>
						<div class="space-y-2">
							<p
								class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] text-[18px] font-semibold animate-ups__item">
								Hỗ trợ chuyên nghiệp
							</p>
							<p class="text-black/60 font-HG 3xl:text-[18px] text-[16px] font-medium animate-ups__item">
								Đội ngũ tư vấn đầu tư giàu kinh nghiệm của UP Securities luôn sẵn sàng hỗ trợ bạn
							</p>
						</div>
					</div>
				</div>

				<div class="md:hidden space-y-6">
					<div class="">
						<p
							class="text-[#FFF] text-center font-BG 2xl:text-[45px] 3xl:text-[52px] xl:text-[40px] md:text-[32px] text-[28px] font-semibold leading-normal animate-ups__item">
							Tính năng nổi bật
						</p>
						<p
							class="text-white/80 text-center font-BG text-[26px] lg:text-[26px] xl:text-[32px] font-semibold leading-normal animate-ups__item">
							Margin T+
						</p>
					</div>

					<div class="w-full min-h-min">
						<swiper :modules="[SwiperNavigation]" :pagination="true" :loop="false"
							:initial-slide="vSwiperIndex" :speed="800" @slide-change="updateVSwiperIndex"
							:slides-per-view="1.2" space-between="24">
							<swiper-slide>
								<div class="flex flex-col w-full gap-5 md:gap-3 lg:gap-5 xl:gap-6 3xl:gap-8">
									<div
										class="relative w-full h-[160px] md:h-[148px] lg:h-[210px] xl:h-[240px] 2xl:h-[280px] 3xl:h-[300px]">
										<nuxt-img src="/images/san-pham1.jpg"
											class="w-full h-full rounded-[12px] xl:rounded-[20px] 3xl:rounded-[24px]" />
									</div>
									<div class="space-y-2">
										<p
											class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] text-[18px] font-semibold animate-ups__item">
											Gói vay đa dạng
										</p>
										<p
											class="text-black/60 font-HG 3xl:text-[18px] text-[16px] font-medium animate-ups__item">
											Đảm bảo chi phí vay thấp từ 0%, giúp bạn tự tin hơn khi thực hiện các giao
											dịch
											ngắn hạn
										</p>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="flex flex-col w-full gap-5 md:gap-3 lg:gap-5 xl:gap-6 3xl:gap-8">
									<div
										class="relative w-full h-[160px] md:h-[148px] lg:h-[210px] xl:h-[240px] 2xl:h-[280px] 3xl:h-[300px]">
										<nuxt-img src="/images/san-pham2.jpg"
											class="w-full h-full rounded-[12px] xl:rounded-[20px] 3xl:rounded-[24px]" />
									</div>
									<div class="space-y-2">
										<p
											class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] text-[18px] font-semibold animate-ups__item">
											Thời gian nắm giữ T+
										</p>
										<p
											class="text-black/60 font-HG 3xl:text-[18px] text-[16px] font-medium animate-ups__item">
											Giúp bạn tận dụng tối đa các cơ hội đầu tư ngắn hạn mà vẫn quản lý tốt đầu
											tư
										</p>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="flex flex-col w-full gap-5 md:gap-3 lg:gap-5 xl:gap-6 3xl:gap-8">
									<div
										class="relative w-full h-[160px] md:h-[148px] lg:h-[210px] xl:h-[240px] 2xl:h-[280px] 3xl:h-[300px]">
										<nuxt-img src="/images/san-pham3.jpg"
											class="w-full h-full rounded-[12px] xl:rounded-[20px] 3xl:rounded-[24px]" />
									</div>
									<div class="space-y-2">
										<p
											class="text-[#15171E] font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] text-[18px] font-semibold animate-ups__item">
											Hỗ trợ chuyên nghiệp
										</p>
										<p
											class="text-black/60 font-HG 3xl:text-[18px] text-[16px] font-medium animate-ups__item">
											Đội ngũ tư vấn đầu tư giàu kinh nghiệm của UP Securities luôn sẵn sàng hỗ
											trợ
											bạn
										</p>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>

				<!-- <div
					class="flex justify-center items-center size-[765px] rounded-full clip-half border-[1px] border-[#F51666]/20">
					<div
						class="flex justify-center items-center size-[629px] rounded-full clip-half border-[1px] border-[#F51666]/50">
						<div
							class="flex justify-center items-center size-[495px] rounded-full clip-half border-[1px] border-[#F51666]">

						</div>
					</div>
				</div> -->

				<div class="animate-ups relative flex flex-col items-center w-full">
					<p
						class="text-[#15171E] text-center font-BG 3xl:text-[60px] 2xl:text-[45px] xl:text-[40px] lg:text-[32px] md:text-[32px] sm:text-[20px] text-[45px] font-semibold leading-none 2xl:my-6 animate-ups__item">
						Cách đăng ký
						<span
							class="text-[#F51666] font-BG 3xl:text-[60px] 2xl:text-[45px] xl:text-[40px] lg:text-[32px] md:text-[32px] text-[45px] sm:text-[20px] font-semibold leading-none">Margin
							T+</span>
					</p>
					<div
						class="animate-ups__item w-full flex justify-center items-center px-[275px] lg:px-[158px] 2xl:px-[255px] sm:p-7 lg:h-[630px]">
						<img src="/images/image@2x.png"
							class="sm:w-[327px] sm:h-[245px] 3xl:translate-y-[11%] 3xl:h-[540px] 3xl:w-[840px] 2xl:w-[687px] 2xl:h-[515px] object-cover md:w-[589px] md:h-[442px] xl:w-[687px] xl:h-[515px] " />
					</div>
					<div class="h-[80px] sm:h-[300px] md:h-[120px] "></div>

					<div
						class="animate-ups grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 w-full xl:p-[24px] lg:p-6 md:p-6 2xl:p-[40px] 3xl:p-[60px] sm:p-6 items-start xl:gap-5 lg:gap-4 md:gap-5 3xl:gap-[60px] 2xl:gap-[24px] sm:gap-4 rounded-[40px] border border-[#F51666] bg-white/60 backdrop-blur-[50px] absolute sm:top-1/3 lg:top-[60%] md:top-2/3 2xl:top-[73%] xl:top-[60%]">
						<div class="animate-ups__item">
							<p
								class="text-[#15171E] font-BG 2xl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
								Cách 1
							</p>
							<p class="bg-[#F19F00] w-[131px] h-[1px] my-2">
							</p>
							<p
								class="text-[#15171E] font-BG 2xl:text-[24px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-semibold leading-[34px]">
								Đăng ký tại quầy/gọi điện
								lên tổng đài
							</p>
						</div>
						<div class="animate-ups__item">
							<p
								class="text-[#15171E] font-BG 2xl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
								Cách 2
							</p>
							<p class="bg-[#F19F00] w-[131px] h-[1px] my-2">
							</p>
							<p
								class="text-[#15171E] font-BG 2xl:text-[24px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-semibold leading-[34px]">
								Đăng ký thông qua nhân viên
								chăm sóc
							</p>
						</div>
						<div class="animate-ups__item">
							<p
								class="text-[#15171E] font-BG 2xl:text-[36px] xl:text-[32px] lg:text-[28px] sm:text-[20px] text-[40px] font-semibold leading-normal">
								Cách 3
							</p>
							<p class="bg-[#F19F00] w-[131px] h-[1px] my-2">
							</p>
							<p
								class="text-[#15171E] font-BG 2xl:text-[24px] xl:text-[12px] lg:text-[12px] sm:text-[12px] text-[16px] font-semibold leading-[34px]">
								Đăng ký trên các ứng dụng phần mềm giao dịch trực tuyến của UPS
							</p>
						</div>

					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
	name: "feature",
	components: {},
	setup(props, ctx) {
		let vSwiperRef: any = null;
		const vSwiperIndex = ref<number>(0);

		const setVSwiperRef = (swiper: any) => {
			vSwiperRef = swiper;
		};

		const updateVSwiperIndex = () => {
			console.log(vSwiperRef?.activeIndex);

			vSwiperIndex.value = vSwiperRef?.activeIndex || 0;
		};

		const prevVSwiperSlide = () => vSwiperRef?.slidePrev();
		const nextVSwiperSlide = () => vSwiperRef?.slideNext();

		return {
			cn,
			vSwiperRef,
			vSwiperIndex,
			SwiperAutoplay,
			SwiperNavigation,
			setVSwiperRef,
			prevVSwiperSlide,
			nextVSwiperSlide,
			updateVSwiperIndex,
		};
	},
});
</script>

<style scoped></style>
