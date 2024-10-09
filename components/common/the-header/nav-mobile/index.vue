<template>
	<div class="flex xl:hidden">
		<div class="w-6 h-6 relative inline-flex items-center justify-center cursor-pointer" @click="toggle">
			<nuxt-img format="webp" loading="lazy" height="24" alt="UPS"
				:src="isActive ? '/icons/close-icon.svg' : '/icons/menu-icon.svg'"
				class="absolute w-full h-full object-contain" />
		</div>
	</div>
	<div :class="cn(
		'fixed top-0 left-0 w-full h-[calc(100vh-64px)] md:h-[calc(100vh-84px)] xl:h-[calc(100vh-90px)] z-[101] mt-[64px] md:mt-[84px] xl:mt-[90px] block xl:hidden bg-white -translate-x-full duration-500',
		{
			'translate-x-0': isActive,
		}
	)
		">
		<div class="w-full h-full px-6 pb-10 relative">
			<!-- <DrawerClose as-child>
			<div class="w-full flex justify-end  py-2">
			  <div class="inline-flex w-6 h-6 relative border rounded-md">
				<nuxt-img format="webp" loading="lazy" src="/icons/close-icon.svg" alt="UPS"
				  class="absolute w-full h-full object-contain" />
			  </div>
			</div>
		  </DrawerClose>
   -->
			<!-- <div class="mt-4">
			<div class="flex items-center relative">
			  <i>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
				  <path
					d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
					stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				  <path d="M22 22.5L20 20.5" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round"
					stroke-linejoin="round" />
				</svg>
			  </i>
			  <nuxt-input
				class="w-full h-[50px] pl-3 pr-6 text-black border-none border-b border-[1px] border-[#ccc] focus:ring-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#ADB2C0] placeholder:text-base"
				placeholder="Tìm kiếm" name="fullname" />
			  <div class="absolute left-0 right-0 bottom-0 w-full h-[1px] bg-[#ADB2C0]"></div>
			</div>
		  </div> -->

			<div class="flex flex-col">
				<div class="">
					<div class="flex items-center justify-between py-3 text-black text-lg font-semibold no-underline hover:no-underline font-HG"
						@click="() => toggleSubmenu(1)">
						<p>Sản phẩm</p>
						<ChevronDown size="16" :class="cn('ml-3 transition-all duration-300', {
							'rotate-[180deg]': subMenu == 1,
						})
							" />
					</div>

					<div :class="cn(
						'w-full max-h-0 transition-all duration-500 px-3 grid gap-x-6 gap-y-6 grid-cols-1 overflow-scroll overflow-x-hidden',
						{
							'max-h-[450px]': subMenu == 1,
						}
					)
						">
						<div class="w-full">
							<p class="text-left text-lg text-[#014227] font-semibold font-HG">Khách hàng cá nhân</p>

							<!-- <div class="mt-4 grid grid-cols-2 gap-4">
												  <DrawerClose as-child>
													  <nuxt-link
														  to="/san-pham"
														  class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													  >
														  <span class="text-sm font-bold text-white">Margin T+3</span>
													  </nuxt-link>
												  </DrawerClose>
  
												  <DrawerClose as-child>
													  <nuxt-link
														  to="/san-pham"
														  class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													  >
														  <span class="text-sm font-bold text-white">Zero-Fee</span>
													  </nuxt-link>
												  </DrawerClose>
  
												  <DrawerClose as-child>
													  <nuxt-link
														  to="/bieu-phi"
														  class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													  >
														  <span class="text-sm font-bold text-white">Vay ký quỹ</span>
													  </nuxt-link>
												  </DrawerClose>
  
												  <DrawerClose as-child>
													  <nuxt-link
														  to="/bieu-phi"
														  class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
													  >
														  <span class="text-sm font-bold text-white"
															  >Biểu phí giao dịch</span
														  >
													  </nuxt-link>
												  </DrawerClose>
											  </div> -->
							<div class="flex flex-col gap-[16px] py-5">
								<nuxt-link to="/" class="flex items-center gap-[12px]" @click="toggle">
									<i class="inline-flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
											viewBox="0 0 24 25" fill="none">
											<path
												d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
												stroke="#111111" stroke-width="1.5" stroke-miterlimit="10"
												stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
												stroke="#111111" stroke-width="1.5" stroke-miterlimit="10"
												stroke-linecap="round" stroke-linejoin="round" />
											<path d="M5.5 10V15" stroke="#00BF52" stroke-width="1.5"
												stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M18.5 10V15" stroke="#00BF52" stroke-width="1.5"
												stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</i>

									<nuxt-link to="/co-phieu" class="">
										<p class="text-base text-[#5E6673] font-[700] font-HG">Cổ phiếu</p>

										<!-- <p
																class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG"
															>
																Đầu tư đơn giản và hiệu quả
															</p> -->
									</nuxt-link>
								</nuxt-link>

								<!-- <nuxt-link to="/coming-soon" class="flex items-center">
							<i class="inline-flex items-center justify-center">
							  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
								fill="none">
								<path
								  d="M20.5 11.8V7.54001C20.5 3.51001 19.56 2.5 15.78 2.5H8.22C4.44 2.5 3.5 3.51001 3.5 7.54001V18.8C3.5 21.46 4.96001 22.09 6.73001 20.19L6.73999 20.18C7.55999 19.31 8.80999 19.38 9.51999 20.33L10.53 21.68"
								  stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M8 7.5H16" stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
								  stroke-linejoin="round" />
								<path d="M9 11.5H15" stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
								  stroke-linejoin="round" />
								<path
								  d="M18.21 15.2698L14.6701 18.8098C14.5301 18.9498 14.4 19.2098 14.37 19.3998L14.18 20.7498C14.11 21.2398 14.45 21.5798 14.94 21.5098L16.29 21.3198C16.48 21.2898 16.75 21.1598 16.88 21.0198L20.4201 17.4798C21.0301 16.8698 21.3201 16.1598 20.4201 15.2598C19.5301 14.3698 18.82 14.6598 18.21 15.2698Z"
								  stroke="#111111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
								  stroke-linejoin="round" />
								<path d="M17.7002 15.7798C18.0002 16.8598 18.8402 17.6998 19.9202 17.9998"
								  stroke="#111111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
								  stroke-linejoin="round" />
							  </svg>
							</i>
  
							<div class="ml-5">
							  <p class="text-base text-[#5E6673] font-semibold font-HG">
								Trái phiếu
							  </p>
							  <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
								Đón đầu mã trái phiếu hot nhất
							  </p>
							</div>
						  </nuxt-link>
						  <nuxt-link to="/coming-soon" class="flex items-center">
							<i class="inline-flex items-center justify-center">
							  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
								fill="none">
								<path
								  d="M12 15C13.3807 15 14.5 13.8807 14.5 12.5C14.5 11.1193 13.3807 10 12 10C10.6193 10 9.5 11.1193 9.5 12.5C9.5 13.8807 10.6193 15 12 15Z"
								  stroke="#00BF52" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
								  stroke-linejoin="round" />
								<path d="M18.5 10V15" stroke="#00BF52" stroke-width="1.5" stroke-miterlimit="10"
								  stroke-linecap="round" stroke-linejoin="round" />
								<path
								  d="M9 18.5C9 19.25 8.79001 19.96 8.42001 20.56C7.73001 21.72 6.46 22.5 5 22.5C3.54 22.5 2.26999 21.72 1.57999 20.56C1.20999 19.96 1 19.25 1 18.5C1 16.29 2.79 14.5 5 14.5C7.21 14.5 9 16.29 9 18.5Z"
								  stroke="#111111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
								  stroke-linejoin="round" />
								<path d="M3.43994 18.5L4.42993 19.49L6.55994 17.52" stroke="#111111" stroke-width="1.5"
								  stroke-linecap="round" stroke-linejoin="round" />
								<path d="M2 15.8V9.5C2 6 4 4.5 7 4.5H17C20 4.5 22 6 22 9.5V15.5C22 19 20 20.5 17 20.5H8.5"
								  stroke="#111111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
								  stroke-linejoin="round" />
							  </svg>
							</i>
  
							<div class="ml-5">
							  <p class="text-base text-[#5E6673] font-semibold font-HG">
								Phái sinh
							  </p>
							  <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
								Giao dịch phái sinh siêu tốc độ
							  </p>
							</div>
						  </nuxt-link> -->

								<Accordion type="single" class="w-full py-0" collapsible :default-value="defaultValue">
									<AccordionItem value="1">
										<AccordionTrigger class="flex items-center hover:no-underline">
											<nuxt-link to="coming-soon" class="flex items-center gap-[12px]">
												<i class="inline-flex items-center justify-center">
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
														viewBox="0 0 24 25" fill="none">
														<path
															d="M3.98987 15.1599L2.46988 13.6399C1.84988 13.0199 1.84988 11.9999 2.46988 11.3799L3.98987 9.8599C4.24987 9.5999 4.45987 9.08989 4.45987 8.72989V6.57987C4.45987 5.69987 5.17988 4.97989 6.05988 4.97989H8.20987C8.56987 4.97989 9.07988 4.76992 9.33988 4.50992L10.8599 2.9899C11.4799 2.3699 12.4999 2.3699 13.1199 2.9899L14.6399 4.50992C14.8999 4.76992 15.4099 4.97989 15.7699 4.97989H17.9199C18.7999 4.97989 19.5199 5.69987 19.5199 6.57987V8.72989C19.5199 9.08989 19.7299 9.5999 19.9899 9.8599L21.5099 11.3799C22.1299 11.9999 22.1299 13.0199 21.5099 13.6399L19.9899 15.1599C19.7299 15.4199 19.5199 15.93 19.5199 16.29V18.4399C19.5199 19.3199 18.7999 20.04 17.9199 20.04H15.7699C15.4099 20.04 14.8999 20.2499 14.6399 20.5099L13.1199 22.0299C12.4999 22.6499 11.4799 22.6499 10.8599 22.0299L9.33988 20.5099C9.07988 20.2499 8.56987 20.04 8.20987 20.04H6.05988C5.17988 20.04 4.45987 19.3199 4.45987 18.4399V16.29C4.45987 15.92 4.24987 15.4099 3.98987 15.1599Z"
															stroke="#111111" stroke-width="1.5" stroke-linecap="round"
															stroke-linejoin="round" />
														<path d="M9 15.5L15 9.5" stroke="#00BF52" stroke-width="1.5"
															stroke-linecap="round" stroke-linejoin="round" />
														<path d="M14.4945 15H14.5035" stroke="#00BF52" stroke-width="2"
															stroke-linecap="round" stroke-linejoin="round" />
														<path d="M9.49451 10H9.50349" stroke="#00BF52" stroke-width="2"
															stroke-linecap="round" stroke-linejoin="round" />
													</svg>
												</i>

												<div class="">
													<p class="text-base text-[#5E6673] font-[700] font-HG">
														Hot Deals 🔥
													</p>

												</div>
											</nuxt-link>
										</AccordionTrigger>
										<AccordionContent>
											<div class="flex gap-5 flex-col pt-4">
												<nuxt-link to="/san-pham-3" class="flex items-center" @click="toggle">
													<i class="inline-flex items-center justify-center">
														<nuxt-img format="webp" loading="lazy" alt="UPS" height="24"
															src="/icons/dots-icon.svg" />
													</i>

													<div class="ml-5">
														<p class="text-base text-[#000] font-semibold">
															Zero Fee
														</p>
													</div>
												</nuxt-link>
												<!-- <nuxt-link to="/san-pham" class="flex items-center">
                            <i class="inline-flex items-center justify-center">
                              <nuxt-img
                                format="webp"
                                loading="lazy"
                                alt="UPS"
                                height="24"
                                src="/icons/dots-icon.svg"
                              />
                            </i>

                            <div class="ml-5">
                              <p class="text-base text-[#000] font-semibold">
                                Margin T+
                              </p>
                            </div>
                          </nuxt-link> -->

												<!-- <nuxt-link to="/san-pham-1" class="flex items-center">
                            <i class="inline-flex items-center justify-center">
                              <nuxt-img
                                format="webp"
                                loading="lazy"
                                alt="UPS"
                                height="24"
                                src="/icons/dots-icon.svg"
                              />
                            </i>

                            <div class="ml-5">
                              <p class="text-base text-[#000] font-semibold">
                                Mở tài khoản mới + 1 triệu đồng
                              </p>
                            </div>
                          </nuxt-link> -->
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>

								<nuxt-link to="/bieu-phi" class="flex items-center gap-[12px]" @click="toggle">
									<i class="inline-flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
											viewBox="0 0 24 25" fill="none">
											<path d="M8 12.7002H15" stroke="#00BF52" stroke-width="1.5"
												stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M8 16.7002H12.38" stroke="#00BF52" stroke-width="1.5"
												stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M10 6.5H14C16 6.5 16 5.5 16 4.5C16 2.5 15 2.5 14 2.5H10C9 2.5 8 2.5 8 4.5C8 6.5 9 6.5 10 6.5Z"
												stroke="#111111" stroke-width="1.5" stroke-miterlimit="10"
												stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M16 4.52002C19.33 4.70002 21 5.93002 21 10.5V16.5C21 20.5 20 22.5 15 22.5H9C4 22.5 3 20.5 3 16.5V10.5C3 5.94002 4.67 4.70002 8 4.52002"
												stroke="#111111" stroke-width="1.5" stroke-miterlimit="10"
												stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</i>

									<div class="">
										<p class="text-base text-[#5E6673] font-semibold font-HG">Biểu phí giao dịch</p>
										<!-- <p
																class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG"
															>
																Cập nhật bảng giá 24/7
															</p> -->
									</div>
								</nuxt-link>
							</div>
						</div>
						<div class="w-full">
							<p class="text-left text-lg text-[#014227] font-semibold font-HG">
								Khách hàng doanh nghiệp
							</p>

							<div class="flex flex-col gap-[16px] py-5">
								<nuxt-link to="/tu-van" class="flex items-center gap-[12px]" @click="toggle">
									<i class="inline-flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
											viewBox="0 0 24 25" fill="none">
											<path
												d="M8 11.9002C8 12.6702 8.6 13.3002 9.33 13.3002H10.83C11.47 13.3002 11.99 12.7502 11.99 12.0802C11.99 11.3502 11.67 11.0902 11.2 10.9202L8.8 10.0802C8.32 9.9102 8 9.6502 8 8.9202C8 8.2502 8.52 7.7002 9.16 7.7002H10.66C11.4 7.7102 12 8.3302 12 9.1002"
												stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
												stroke-linejoin="round" />
											<path d="M10 13.3496V14.0896" stroke="#00BF52" stroke-width="1.5"
												stroke-linecap="round" stroke-linejoin="round" />
											<path d="M10 6.91016V7.69016" stroke="#00BF52" stroke-width="1.5"
												stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M9.99 18.48C14.4028 18.48 17.98 14.9028 17.98 10.49C17.98 6.07724 14.4028 2.5 9.99 2.5C5.57724 2.5 2 6.07724 2 10.49C2 14.9028 5.57724 18.48 9.99 18.48Z"
												stroke="#111111" stroke-width="1.5" stroke-linecap="round"
												stroke-linejoin="round" />
											<path
												d="M12.98 20.38C13.88 21.65 15.35 22.48 17.03 22.48C19.76 22.48 21.98 20.26 21.98 17.53C21.98 15.87 21.16 14.4 19.91 13.5"
												stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>
									</i>

									<div class="" @click="toggle">
										<p class="text-base text-[#5E6673] font-semibold font-HG">Tư vấn tài chính</p>
										<!-- <p
																class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG"
															>
																Cùng doanh nghiệp phát triển bền vững
															</p> -->
									</div>
								</nuxt-link>

								<nuxt-link to="/tin-dau-gia" class="flex items-center gap-[12px]" @click="toggle">
									<i class="inline-flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
											viewBox="0 0 24 25" fill="none">
											<path d="M6.87988 18.6501V16.5801" stroke="#00BF52" stroke-width="1.5"
												stroke-linecap="round" />
											<path d="M12 18.6498V14.5098" stroke="#00BF52" stroke-width="1.5"
												stroke-linecap="round" />
											<path d="M17.1201 18.6502V12.4302" stroke="#00BF52" stroke-width="1.5"
												stroke-linecap="round" />
											<path
												d="M17.1199 6.34961L16.6599 6.88961C14.1099 9.86961 10.6899 11.9796 6.87988 12.9296"
												stroke="#00BF52" stroke-width="1.5" stroke-linecap="round" />
											<path d="M14.1904 6.34961H17.1204V9.26961" stroke="#00BF52"
												stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
											<path
												d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
												stroke="#111111" stroke-width="1.5" stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>
									</i>

									<div class="" @click="toggle">
										<p class="text-base text-[#5E6673] font-semibold font-HG">Tin đấu giá</p>
										<!-- <p
																class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG"
															>
																Cùng doanh nghiệp phát triển bền vững
															</p> -->
									</div>
								</nuxt-link>
							</div>
						</div>
						<div class="w-full overscroll-y-auto">
							<p class="text-left text-lg text-[#014227] font-semibold font-HG">Nền tảng</p>

							<div class="mt-4 grid gap-4 grid-cols-2">
								<nuxt-link to="https://trade.upstock.com.vn/#/price/bang-gia/vn30" target="_blank"
									class="w-full h-[38px] flex items-center justify-center p-3 text-base text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px] font-HG"
									@click="toggle">
									Web Trading
								</nuxt-link>
								<nuxt-link to="/"
									class="w-full h-[38px] flex items-center justify-center p-3 text-base text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px] font-HG"
									@click="toggle">
									App Trading
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>

				<div class="">
					<div class="flex items-center justify-between py-3 text-black text-lg font-semibold no-underline hover:no-underline font-HG"
						@click="() => toggleSubmenu(2)">
						<p>Đầu tư cùng UPS</p>
						<ChevronDown size="16" :class="cn('ml-3 transition-all duration-300', {
							'rotate-[180deg]': subMenu == 2,
						})
							" />
					</div>

					<div :class="cn(
						'w-full max-h-0 overflow-hidden transition-all duration-500 ease-out px-3 grid gap-x-6 gap-y-6 grid-cols-1',
						{
							'max-h-[450px]': subMenu == 2,
						}
					)
						">
						<div class="w-full flex flex-col gap-4 pt-[4px]">
							<nuxt-link to="/" class="flex items-center gap-[12px]" @click="toggle">
								<i class="w-5 h-5 inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
										fill="none">
										<path d="M5.7334 15.1254V13.4004" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" />
										<path d="M10 15.1248V11.6748" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" />
										<path d="M14.2666 15.1247V9.94141" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" />
										<path
											d="M14.2667 4.875L13.8834 5.325C11.7584 7.80834 8.9084 9.56667 5.7334 10.3583"
											stroke="#00BF52" stroke-width="1.5" stroke-linecap="round" />
										<path d="M11.8252 4.875H14.2669V7.30834" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path
											d="M7.50033 18.3337H12.5003C16.667 18.3337 18.3337 16.667 18.3337 12.5003V7.50033C18.3337 3.33366 16.667 1.66699 12.5003 1.66699H7.50033C3.33366 1.66699 1.66699 3.33366 1.66699 7.50033V12.5003C1.66699 16.667 3.33366 18.3337 7.50033 18.3337Z"
											stroke="#111111" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</i>

								<div class="">
									<p class="text-base text-[#5E6673] font-semibold font-HG">Nhận định thị trường</p>
									<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
														Báo cáo phân tích nhanh nhất cùng UPS
													</p> -->
								</div>
							</nuxt-link>
							<!-- <nuxt-link to="/" class="flex items-center">
						  <i class="w-5 h-5 inline-flex items-center justify-center">
							<nuxt-img format="webp" loading="lazy" alt="UPS" width="20" height="20"
							  src="/icons/cong-dong.svg" />
						  </i>
  
						  <div class="ml-4">
							<p class="text-sm text-[#5E6673] font-semibold font-HG">
							  Cộng đồng
							</p>
							<p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
							  Đầu tư thông minh cùng cộng đồng UPS
							</p>
						  </div>
						</nuxt-link> -->
							<nuxt-link to="/hdsd" class="flex items-center gap-[12px]" @click="toggle">
								<i class="w-5 h-5 inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
										fill="none">
										<path
											d="M2.91699 15.0003V5.83366C2.91699 2.50033 3.75033 1.66699 7.08366 1.66699H12.917C16.2503 1.66699 17.0837 2.50033 17.0837 5.83366V14.167C17.0837 14.2837 17.0837 14.4003 17.0753 14.517"
											stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M5.29199 12.5H17.0837V15.4167C17.0837 17.025 15.7753 18.3333 14.167 18.3333H5.83366C4.22533 18.3333 2.91699 17.025 2.91699 15.4167V14.875C2.91699 13.5667 3.98366 12.5 5.29199 12.5Z"
											stroke="#111111" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path d="M6.66699 5.83301H13.3337" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M6.66699 8.75H10.8337" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</i>

								<div class="">
									<p class="text-base text-[#5E6673] font-semibold font-HG">Hỗ trợ khách hàng</p>
									<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
														Khám phá kho tàng kiến thức đỉnh cấp cùng UPS
													</p> -->
								</div>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="">
					<div class="flex items-center justify-between py-3 text-black text-lg font-semibold no-underline hover:no-underline font-HG"
						@click="() => toggleSubmenu(3)">
						<p>Về UPS</p>
						<ChevronDown size="16" :class="cn('ml-3 transition-all duration-300', {
							'rotate-[180deg]': subMenu == 3,
						})
							" />
					</div>

					<div :class="cn(
						'w-full max-h-0 overflow-hidden transition-all duration-500 ease-out px-3 grid gap-x-6 gap-y-6 grid-cols-1',
						{
							'max-h-[450px]': subMenu == 3,
						}
					)
						">
						<div class="w-full flex flex-col gap-4 pt-[4px]">
							<nuxt-link to="/gioi-thieu" class="flex items-center gap-[12px]" @click="toggle">
								<i class="w-5 h-5 inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
										fill="none">
										<path
											d="M14.9984 5.96798C14.9484 5.95964 14.8901 5.95964 14.8401 5.96798C13.6901 5.92631 12.7734 4.98464 12.7734 3.81797C12.7734 2.6263 13.7318 1.66797 14.9234 1.66797C16.1151 1.66797 17.0734 2.63464 17.0734 3.81797C17.0651 4.98464 16.1484 5.92631 14.9984 5.96798Z"
											stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M14.1393 12.0348C15.2809 12.2264 16.5393 12.0264 17.4226 11.4348C18.5976 10.6514 18.5976 9.36811 17.4226 8.58477C16.5309 7.9931 15.2559 7.7931 14.1143 7.9931"
											stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M4.97246 5.96798C5.02246 5.95964 5.08079 5.95964 5.13079 5.96798C6.28079 5.92631 7.19746 4.98464 7.19746 3.81797C7.19746 2.6263 6.23913 1.66797 5.04746 1.66797C3.8558 1.66797 2.89746 2.63464 2.89746 3.81797C2.90579 4.98464 3.82246 5.92631 4.97246 5.96798Z"
											stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M5.83157 12.0348C4.68991 12.2264 3.43158 12.0264 2.54824 11.4348C1.37324 10.6514 1.37324 9.36811 2.54824 8.58477C3.43991 7.9931 4.71491 7.7931 5.85657 7.9931"
											stroke="#00BF52" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M9.99941 12.1926C9.94941 12.1843 9.89108 12.1843 9.84108 12.1926C8.69108 12.1509 7.77441 11.2093 7.77441 10.0426C7.77441 8.85091 8.73275 7.89258 9.92441 7.89258C11.1161 7.89258 12.0744 8.85925 12.0744 10.0426C12.0661 11.2093 11.1494 12.1593 9.99941 12.1926Z"
											stroke="#111111" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M7.57461 14.8178C6.39961 15.6011 6.39961 16.8844 7.57461 17.6678C8.90794 18.5594 11.0913 18.5594 12.4246 17.6678C13.5996 16.8844 13.5996 15.6011 12.4246 14.8178C11.0996 13.9344 8.90794 13.9344 7.57461 14.8178Z"
											stroke="#111111" stroke-width="1.5" stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</i>

								<div class="">
									<p class="text-base text-[#5E6673] font-semibold font-HG">Về chúng tôi</p>
									<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
														Giới thiệu về UPS
													</p> -->
								</div>
							</nuxt-link>
							<nuxt-link to="/tin-tuc" class="flex items-center gap-[12px]" @click="toggle">
								<i class="w-5 h-5 inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
										fill="none">
										<path
											d="M18.3337 13.9511V3.89272C18.3337 2.89272 17.517 2.15105 16.5253 2.23439H16.4753C14.7253 2.38439 12.067 3.27605 10.5837 4.20939L10.442 4.30105C10.2003 4.45105 9.80033 4.45105 9.55866 4.30105L9.35033 4.17605C7.86699 3.25105 5.21699 2.36772 3.46699 2.22605C2.47533 2.14272 1.66699 2.89272 1.66699 3.88439V13.9511C1.66699 14.7511 2.31699 15.5011 3.11699 15.6011L3.35866 15.6344C5.16699 15.8761 7.95866 16.7927 9.55866 17.6677L9.59199 17.6844C9.81699 17.8094 10.1753 17.8094 10.392 17.6844C11.992 16.8011 14.792 15.8761 16.6087 15.6344L16.8837 15.6011C17.6837 15.5011 18.3337 14.7511 18.3337 13.9511Z"
											stroke="black" stroke-opacity="0.79" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M10 4.57617V17.0762" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M6.45801 7.07617H4.58301" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M7.08301 9.57617H4.58301" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</i>

								<div class="">
									<p class="text-base text-[#5E6673] font-semibold font-HG">Tin UPS</p>
									<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
														Các thông tin công bố từ UPS
													</p> -->
								</div>
							</nuxt-link>
							<!-- <Accordion type="single" class="w-full" collapsible>
						<AccordionItem value="1">
						  <AccordionTrigger class="p-0 flex items-center hover:no-underline">
							<div class="flex items-center">
							  <i class="w-5 h-5 inline-flex items-center justify-center">
								<nuxt-img format="webp" loading="lazy" alt="UPS" width="20" height="20"
								  src="/icons/tin-ups.svg" />
							  </i>
  
							  <div class="ml-4">
								<p class="text-left text-sm text-[#5E6673] font-semibold">
								  Tin UPS
								</p>
								<p class="text-left text-sm text-[rgba(0,0,0,0.68)] font-medium">
								  Các thông tin công bố từ UPS
								</p>
							  </div>
							</div>
						  </AccordionTrigger>
						  <AccordionContent class="pb-0">
							<div class="mt-4 flex gap-4 flex-col">
							  <DrawerClose as-child>
								<nuxt-link to="/tin-tuc" class="flex items-center">
								  <i class="w-5 h-5 inline-flex items-center justify-center">
									<nuxt-img format="webp" loading="lazy" alt="UPS" width="12" height="12"
									  src="/icons/dots-icon.svg" />
								  </i>
  
								  <div class="ml-4">
									<p class="text-sm text-[#5E6673] font-semibold">
									  Tin hoạt động
									</p>
								  </div>
								</nuxt-link>
							  </DrawerClose>
  
							  <DrawerClose as-child>
								<nuxt-link to="/cong-bo-thong-tin" class="flex items-center">
								  <i class="w-5 h-5 inline-flex items-center justify-center">
									<nuxt-img format="webp" loading="lazy" alt="UPS" width="12" height="12"
									  src="/icons/dots-icon.svg" />
								  </i>
  
								  <div class="ml-4">
									<p class="text-sm text-[#5E6673] font-semibold">
									  Công bố tin
									</p>
								  </div>
								</nuxt-link>
							  </DrawerClose>
							</div>
						  </AccordionContent>
						</AccordionItem>
					  </Accordion> -->
							<nuxt-link to="/" class="flex items-center gap-[12px]" @click="toggle">
								<i class="w-5 h-5 inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
										fill="none">
										<path
											d="M12.8255 4.34297L14.0004 6.69297C14.1588 7.01797 14.5838 7.3263 14.9421 7.39296L17.0671 7.74296C18.4255 7.96796 18.7421 8.9513 17.7671 9.93464L16.1088 11.593C15.8338 11.868 15.6755 12.4096 15.7671 12.8013L16.2421 14.8513C16.6171 16.468 15.7504 17.1013 14.3254 16.2513L12.3338 15.068C11.9754 14.8513 11.3754 14.8513 11.0171 15.068L9.02544 16.2513C7.60044 17.093 6.73378 16.468 7.10878 14.8513L7.58379 12.8013C7.67545 12.418 7.51712 11.8763 7.24212 11.593L5.58379 9.93464C4.60879 8.95963 4.92545 7.9763 6.28379 7.74296L8.40878 7.39296C8.76711 7.33463 9.19211 7.01797 9.35045 6.69297L10.5255 4.34297C11.1505 3.06797 12.1838 3.06797 12.8255 4.34297Z"
											stroke="black" stroke-opacity="0.79" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M6.66699 4.16797H1.66699" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M4.16699 15.834H1.66699" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
										<path d="M2.50033 10.001H1.66699" stroke="#00BF52" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</i>

								<div class="">
									<p class="text-base text-[#5E6673] font-semibold font-HG">Gia nhập UPS</p>
									<!-- <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium font-HG">
														Phát triển sự nghiệp cũng UPS
													</p> -->
								</div>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import NuxtInput from "@/components/ui/input/index.vue";
import { ChevronDown } from "lucide-vue-next";

import { cn } from "@/lib/utils";

export default defineComponent({
	name: "nav-1-mobile",
	components: {
		NuxtInput,
		ChevronDown,
	},
	setup(props, ctx) {
		const isActive = ref(false);
		const subMenu = ref(null);

		const toggle = () => {
			isActive.value = !isActive.value;
			subMenu.value = null;
		};

		const toggleSubmenu = (id) => {
			subMenu.value = subMenu.value === id ? null : id;
		};

		return {
			subMenu,
			isActive,
			cn,
			toggle,
			toggleSubmenu,
		};
	},
});
</script>
<style scoped>
div[data-radix-scroll-area-viewport] {
	border: none !important;
}
</style>
