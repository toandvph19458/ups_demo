<template>
  <div class="hidden xl:block">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <nuxt-link
              to="/"
              class="text-base text-[#5E6673] font-bold hover:text-black"
            >
              Sản phẩm & Dịch vụ
            </nuxt-link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-[800px] px-6 py-5 grid gap-x-10 gap-y-5 grid-cols-2">
              <div class="w-full">
                <p class="text-left text-2xl text-[#014227] font-semibold">
                  Khách hàng cá nhân
                </p>

                <!-- <div class="mt-4 grid grid-cols-2 gap-4">
									<nuxt-link
										to="/san-pham"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Margin T+3</span>
									</nuxt-link>
									<nuxt-link
										to="/san-pham"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Zero-Fee</span>
									</nuxt-link>

									<nuxt-link
										to="/bieu-phi"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Vay ký quỹ</span>
									</nuxt-link>
									<nuxt-link
										to="/bieu-phi"
										class="inline-flex items-center px-5 h-[54px] min-w-full rounded-[12px] bg-[#1D1E20] hover:bg-[#00BF52]"
									>
										<span class="text-base font-bold text-white">Biểu phí giao dịch</span>
									</nuxt-link>
								</div> -->
                <div class="flex flex-col gap-5 py-5">
                  <nuxt-link to="/" class="flex items-center">
                    <i class="inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.5 10V15"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.5 10V15"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>

                    <nuxt-link to="/co-phieu" class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Cổ phiếu
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Đầu tư đơn giản và hiệu quả
                      </p>
                    </nuxt-link>
                  </nuxt-link>

                  <!-- <nuxt-link to="/coming-soon" class="flex items-center">
                    <i class="inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M20.5 11.8V7.54001C20.5 3.51001 19.56 2.5 15.78 2.5H8.22C4.44 2.5 3.5 3.51001 3.5 7.54001V18.8C3.5 21.46 4.96001 22.09 6.73001 20.19L6.73999 20.18C7.55999 19.31 8.80999 19.38 9.51999 20.33L10.53 21.68"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 7.5H16"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 11.5H15"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.21 15.2698L14.6701 18.8098C14.5301 18.9498 14.4 19.2098 14.37 19.3998L14.18 20.7498C14.11 21.2398 14.45 21.5798 14.94 21.5098L16.29 21.3198C16.48 21.2898 16.75 21.1598 16.88 21.0198L20.4201 17.4798C21.0301 16.8698 21.3201 16.1598 20.4201 15.2598C19.5301 14.3698 18.82 14.6598 18.21 15.2698Z"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.7002 15.7798C18.0002 16.8598 18.8402 17.6998 19.9202 17.9998"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>

                    <div class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Trái phiếu 
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Đón đầu mã trái phiếu hot nhất
                      </p>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/coming-soon" class="flex items-center">
                    <i class="inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M12 15C13.3807 15 14.5 13.8807 14.5 12.5C14.5 11.1193 13.3807 10 12 10C10.6193 10 9.5 11.1193 9.5 12.5C9.5 13.8807 10.6193 15 12 15Z"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.5 10V15"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 18.5C9 19.25 8.79001 19.96 8.42001 20.56C7.73001 21.72 6.46 22.5 5 22.5C3.54 22.5 2.26999 21.72 1.57999 20.56C1.20999 19.96 1 19.25 1 18.5C1 16.29 2.79 14.5 5 14.5C7.21 14.5 9 16.29 9 18.5Z"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.43994 18.5L4.42993 19.49L6.55994 17.52"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 15.8V9.5C2 6 4 4.5 7 4.5H17C20 4.5 22 6 22 9.5V15.5C22 19 20 20.5 17 20.5H8.5"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>

                    <div class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Phái sinh
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Giao dịch phái sinh siêu tốc độ
                      </p>
                    </div>
                  </nuxt-link> -->

                  <Accordion
                    type="single"
                    class="w-full py-0"
                    collapsible
                    :default-value="defaultValue"
                  >
                    <AccordionItem value="1">
                      <AccordionTrigger
                        class="flex items-center hover:no-underline"
                      >
                        <div class="flex">
                          <i class="inline-flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M3.98987 15.1599L2.46988 13.6399C1.84988 13.0199 1.84988 11.9999 2.46988 11.3799L3.98987 9.8599C4.24987 9.5999 4.45987 9.08989 4.45987 8.72989V6.57987C4.45987 5.69987 5.17988 4.97989 6.05988 4.97989H8.20987C8.56987 4.97989 9.07988 4.76992 9.33988 4.50992L10.8599 2.9899C11.4799 2.3699 12.4999 2.3699 13.1199 2.9899L14.6399 4.50992C14.8999 4.76992 15.4099 4.97989 15.7699 4.97989H17.9199C18.7999 4.97989 19.5199 5.69987 19.5199 6.57987V8.72989C19.5199 9.08989 19.7299 9.5999 19.9899 9.8599L21.5099 11.3799C22.1299 11.9999 22.1299 13.0199 21.5099 13.6399L19.9899 15.1599C19.7299 15.4199 19.5199 15.93 19.5199 16.29V18.4399C19.5199 19.3199 18.7999 20.04 17.9199 20.04H15.7699C15.4099 20.04 14.8999 20.2499 14.6399 20.5099L13.1199 22.0299C12.4999 22.6499 11.4799 22.6499 10.8599 22.0299L9.33988 20.5099C9.07988 20.2499 8.56987 20.04 8.20987 20.04H6.05988C5.17988 20.04 4.45987 19.3199 4.45987 18.4399V16.29C4.45987 15.92 4.24987 15.4099 3.98987 15.1599Z"
                                stroke="#111111"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9 15.5L15 9.5"
                                stroke="#00BF52"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.4945 15H14.5035"
                                stroke="#00BF52"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.49451 10H9.50349"
                                stroke="#00BF52"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </i>

                          <div class="ml-5">
                            <p
                              class="text-left text-base text-[#000] font-semibold"
                            >
                              Hot Deals 🔥
                            </p>
                            <p
                              class="text-left text-sm text-[rgba(0,0,0,0.68)] font-medium"
                            >
                             Khám phá ưu đãi mới nhất
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div class="flex gap-5 flex-col pt-4">
                          <nuxt-link to="/san-pham-3" class="flex items-center">
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
                                Zero Fee
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/san-pham" class="flex items-center">
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
                          </nuxt-link>
                          
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

                  <nuxt-link to="/bieu-phi" class="flex items-center">
                    <i class="inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M8 12.7002H15"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 16.7002H12.38"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 6.5H14C16 6.5 16 5.5 16 4.5C16 2.5 15 2.5 14 2.5H10C9 2.5 8 2.5 8 4.5C8 6.5 9 6.5 10 6.5Z"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 4.52002C19.33 4.70002 21 5.93002 21 10.5V16.5C21 20.5 20 22.5 15 22.5H9C4 22.5 3 20.5 3 16.5V10.5C3 5.94002 4.67 4.70002 8 4.52002"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>

                    <div class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Biểu phí giao dịch
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Cập nhật bảng giá 24/7
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <div class="w-full">
                <p class="text-left text-2xl text-[#014227] font-semibold">
                  Khách hàng doanh nghiệp
                </p>

                <div class="flex flex-col gap-5 py-5">
                  <nuxt-link to="/" class="flex items-center">
                    <i class="inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M8 11.9002C8 12.6702 8.6 13.3002 9.33 13.3002H10.83C11.47 13.3002 11.99 12.7502 11.99 12.0802C11.99 11.3502 11.67 11.0902 11.2 10.9202L8.8 10.0802C8.32 9.9102 8 9.6502 8 8.9202C8 8.2502 8.52 7.7002 9.16 7.7002H10.66C11.4 7.7102 12 8.3302 12 9.1002"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 13.3496V14.0896"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 6.91016V7.69016"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99 18.48C14.4028 18.48 17.98 14.9028 17.98 10.49C17.98 6.07724 14.4028 2.5 9.99 2.5C5.57724 2.5 2 6.07724 2 10.49C2 14.9028 5.57724 18.48 9.99 18.48Z"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.98 20.38C13.88 21.65 15.35 22.48 17.03 22.48C19.76 22.48 21.98 20.26 21.98 17.53C21.98 15.87 21.16 14.4 19.91 13.5"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>

                    <nuxt-link to="/tu-van" class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Tư vấn tài chính
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Cùng doanh nghiệp phát triển bền vững
                      </p>
                    </nuxt-link>
                  </nuxt-link>

                  <nuxt-link to="/coming-soon" class="flex items-center">
                    <i class="inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M6.87988 18.6501V16.5801"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12 18.6498V14.5098"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17.1201 18.6502V12.4302"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M17.1199 6.34961L16.6599 6.88961C14.1099 9.86961 10.6899 11.9796 6.87988 12.9296"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14.1904 6.34961H17.1204V9.26961"
                          stroke="#00BF52"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                          stroke="#111111"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>

                    <div class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Tin đấu giá
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Bản tin đấu giá tại UPS
                      </p>
                    </div>
                  </nuxt-link>
                </div>
                <div class="w-full">
                  <p class="text-left text-2xl text-[#014227] font-semibold">
                    Nền tảng
                  </p>

                  <div class="mt-4 flex gap-4 flex-col">
                    <nuxt-link
                      to="/coming-soon"
                      class="w-[80%] h-[38px] flex items-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
                    >
                      Web Trading
                    </nuxt-link>
                    <nuxt-link
                      to="/coming-soon"
                      class="w-[80%] h-[38px] flex items-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
                    >
                      App Trading
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- <div class="w-full">
								<p class="text-left text-2xl text-[#014227] font-semibold">Nền tảng</p>

								<div class="mt-4 grid gap-4 grid-cols-2">
									<nuxt-link
										to="/coming-soon"
										class="w-full h-[38px] flex items-center justify-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
									>
										Web Trading
									</nuxt-link>
									<nuxt-link
										to="/coming-soon"
										class="w-full h-[38px] flex items-center justify-center px-3 text-sm text-[rgba(0,0,0,0.79)] font-semibold bg-[rgba(0,0,0,0.11)] rounded-[10px]"
									>
										App Trading
									</nuxt-link>
								</div>
							</div> -->
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <nuxt-link
              to="/"
              class="text-base text-[#5E6673] font-bold hover:text-black"
            >
              Đầu tư cùng UPS
            </nuxt-link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-[400px] flex flex-col gap-5 px-6 py-5">
              <nuxt-link to="/coming-soon" class="flex items-center">
                <i class="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6.87988 18.6501V16.5801"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 18.6498V14.5098"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.1201 18.6502V12.4302"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.1199 6.34961L16.6599 6.88961C14.1099 9.86961 10.6899 11.9796 6.87988 12.9296"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.1904 6.34961H17.1204V9.26961"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                      stroke="#111111"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>

                <div class="ml-5">
                  <p class="text-base text-[#000] font-semibold">
                    Nhận định thị trường
                  </p>
                  <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                    Báo cáo phân tích nhanh nhất cùng UPS
                  </p>
                </div>
              </nuxt-link>

              <nuxt-link to="/coming-soon" class="flex items-center">
                <i class="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M9.16006 11.37C9.06006 11.36 8.94006 11.36 8.83006 11.37C6.45006 11.29 4.56006 9.34 4.56006 6.94C4.56006 4.49 6.54006 2.5 9.00006 2.5C11.4501 2.5 13.4401 4.49 13.4401 6.94C13.4301 9.34 11.5401 11.29 9.16006 11.37Z"
                      stroke="#111111"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.4098 4.5C18.3498 4.5 19.9098 6.07 19.9098 8C19.9098 9.89 18.4098 11.43 16.5398 11.5C16.4598 11.49 16.3698 11.49 16.2798 11.5"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.16021 15.06C1.74021 16.68 1.74021 19.32 4.16021 20.93C6.91021 22.77 11.4202 22.77 14.1702 20.93C16.5902 19.31 16.5902 16.67 14.1702 15.06C11.4302 13.23 6.92021 13.23 4.16021 15.06Z"
                      stroke="#111111"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3398 20.5C19.0598 20.35 19.7398 20.06 20.2998 19.63C21.8598 18.46 21.8598 16.53 20.2998 15.36C19.7498 14.94 19.0798 14.66 18.3698 14.5"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>

                <div class="ml-5">
                  <p class="text-base text-[#000] font-semibold">Cộng đồng</p>
                  <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                    Đầu tư thông minh cùng cộng đồng UPS
                  </p>
                </div>
              </nuxt-link>

              <nuxt-link to="/hdsd" class="flex items-center">
                <i class="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M3.5 18.5V7.5C3.5 3.5 4.5 2.5 8.5 2.5H15.5C19.5 2.5 20.5 3.5 20.5 7.5V17.5C20.5 17.64 20.5 17.78 20.49 17.92"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.35 15.5H20.5V19C20.5 20.93 18.93 22.5 17 22.5H7C5.07 22.5 3.5 20.93 3.5 19V18.35C3.5 16.78 4.78 15.5 6.35 15.5Z"
                      stroke="#111111"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 7.5H16"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 11H13"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>

                <div class="ml-5">
                  <p class="text-base text-[#000] font-semibold">
                    Hỗ trợ khách hàng
                  </p>
                  <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                    Khám phá kho tàng kiến thức đỉnh cấp cùng UPS
                  </p>
                </div>
              </nuxt-link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <nuxt-link
              to="/gioi-thieu"
              class="text-base text-[#5E6673] font-bold hover:text-black"
            >
              Về UPS
            </nuxt-link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-[400px] flex flex-col gap-5 px-6 py-5">
              <nuxt-link to="/gioi-thieu" class="flex items-center">
                <i class="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M17.9976 7.66C17.9376 7.65 17.8676 7.65 17.8076 7.66C16.4276 7.61 15.3276 6.48 15.3276 5.08C15.3276 3.65 16.4776 2.5 17.9076 2.5C19.3376 2.5 20.4876 3.66 20.4876 5.08C20.4776 6.48 19.3776 7.61 17.9976 7.66Z"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9675 14.9402C18.3375 15.1702 19.8475 14.9302 20.9075 14.2202C22.3175 13.2802 22.3175 11.7402 20.9075 10.8002C19.8375 10.0902 18.3075 9.85016 16.9375 10.0902"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.96754 7.66C6.02754 7.65 6.09754 7.65 6.15754 7.66C7.53754 7.61 8.63754 6.48 8.63754 5.08C8.63754 3.65 7.48754 2.5 6.05754 2.5C4.62754 2.5 3.47754 3.66 3.47754 5.08C3.48754 6.48 4.58754 7.61 5.96754 7.66Z"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.9975 14.9402C5.6275 15.1702 4.1175 14.9302 3.0575 14.2202C1.6475 13.2802 1.6475 11.7402 3.0575 10.8002C4.1275 10.0902 5.6575 9.85016 7.0275 10.0902"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0001 15.1302C11.9401 15.1202 11.8701 15.1202 11.8101 15.1302C10.4301 15.0802 9.33008 13.9502 9.33008 12.5502C9.33008 11.1202 10.4801 9.97021 11.9101 9.97021C13.3401 9.97021 14.4901 11.1302 14.4901 12.5502C14.4801 13.9502 13.3801 15.0902 12.0001 15.1302Z"
                      stroke="#111111"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.09021 18.2804C7.68021 19.2204 7.68021 20.7603 9.09021 21.7003C10.6902 22.7703 13.3102 22.7703 14.9102 21.7003C16.3202 20.7603 16.3202 19.2204 14.9102 18.2804C13.3202 17.2204 10.6902 17.2204 9.09021 18.2804Z"
                      stroke="#111111"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>

                <div class="ml-5">
                  <p class="text-base text-[#000] font-semibold">
                    Về chúng tôi
                  </p>
                  <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                    Giới thiệu về UPS
                  </p>
                </div>
              </nuxt-link>

              <Accordion
                type="single"
                class="w-full"
                collapsible
                :default-value="defaultValue"
              >
                <AccordionItem value="1">
                  <nuxt-link to="/tin-tuc"
                    class="flex items-center hover:no-underline"
                  >
                    <div class="flex">
                      <i class="inline-flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M22 17.2402V5.17019C22 3.97019 21.02 3.08019 19.83 3.18019H19.77C17.67 3.36019 14.48 4.43019 12.7 5.55019L12.53 5.66019C12.24 5.84019 11.76 5.84019 11.47 5.66019L11.22 5.51019C9.44 4.40019 6.26 3.34019 4.16 3.17019C2.97 3.07019 2 3.97019 2 5.16019V17.2402C2 18.2002 2.78 19.1002 3.74 19.2202L4.03 19.2602C6.2 19.5502 9.55 20.6502 11.47 21.7002L11.51 21.7202C11.78 21.8702 12.21 21.8702 12.47 21.7202C14.39 20.6602 17.75 19.5502 19.93 19.2602L20.26 19.2202C21.22 19.1002 22 18.2002 22 17.2402Z"
                            stroke="black"
                            stroke-opacity="0.79"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 5.99023V20.9902"
                            stroke="#00BF52"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.75 8.99023H5.5"
                            stroke="#00BF52"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 11.9902H5.5"
                            stroke="#00BF52"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </i>

                      <div class="ml-5">
                        <p
                          class="text-left text-base text-[#000] font-semibold"
                        >
                          Tin UPS
                        </p>
                        <p
                          class="text-left text-sm text-[rgba(0,0,0,0.68)] font-medium"
                        >
                          Các thông tin công bố từ UPS
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                  <!-- <AccordionContent>
                    <div class="flex gap-5 flex-col">
                      <nuxt-link to="/tin-tuc" class="flex items-center">
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
                            Tin hoạt động
                          </p>
                        </div>
                      </nuxt-link>
                      <nuxt-link
                        to="/cong-bo-thong-tin"
                        class="flex items-center"
                      >
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
                            Công bố thông tin
                          </p>
                        </div>
                      </nuxt-link>
                    </div>
                  </AccordionContent> -->
                </AccordionItem>
              </Accordion>

              <nuxt-link to="/coming-soon" class="flex items-center">
                <i class="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M15.39 5.71L16.7999 8.52999C16.9899 8.91999 17.4999 9.28999 17.9299 9.36999L20.48 9.78999C22.11 10.06 22.49 11.24 21.32 12.42L19.3299 14.41C18.9999 14.74 18.81 15.39 18.92 15.86L19.4899 18.32C19.9399 20.26 18.9 21.02 17.19 20L14.7999 18.58C14.3699 18.32 13.65 18.32 13.22 18.58L10.8299 20C9.11994 21.01 8.07995 20.26 8.52995 18.32L9.09996 15.86C9.20996 15.4 9.01995 14.75 8.68995 14.41L6.69996 12.42C5.52996 11.25 5.90996 10.07 7.53996 9.78999L10.0899 9.36999C10.5199 9.29999 11.03 8.91999 11.22 8.52999L12.63 5.71C13.38 4.18 14.62 4.18 15.39 5.71Z"
                      stroke="black"
                      stroke-opacity="0.79"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 5.5H2"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 19.5H2"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 12.5H2"
                      stroke="#00BF52"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>

                <div class="ml-5">
                  <p class="text-base text-[#000] font-semibold">
                    Gia nhập UPS
                  </p>
                  <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                    Phát triển sự nghiệp cùng UPS
                  </p>
                </div>
              </nuxt-link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <!-- <NavigationMenuItem>
					<NavigationMenuLink :class="navigationMenuTriggerStyle()">
						<nuxt-link
							to="/"
							class="text-base text-[#5E6673] font-bold hover:text-black"
						>
							Bảng giá
						</nuxt-link>
					</NavigationMenuLink>
				</NavigationMenuItem> -->
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount } from 'vue';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default defineComponent({
  name: 'navigation',
  components: {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  },
  setup(props, ctx) {
    const defaultValue = "item-1";

    const accordionItems = [
      {
        value: "item-1",
        title: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        value: "item-2",
        title: "Is it unstyled?",
        content:
          "Yes. It's unstyled by default, giving you freedom over the look and feel.",
      },
      {
        value: "item-3",
        title: "Can it be animated?",
        content:
          "Yes! You can use the transition prop to configure the animation.",
      },
    ];

    const injectStyles = () => {
      if (typeof window !== 'undefined') {
        const styleId = 'custom-nav-styles';
        let styleElement = document.getElementById(styleId);

        if (!styleElement) {
          styleElement = document.createElement('style');
          styleElement.id = styleId;
          document.head.appendChild(styleElement);
        }

        styleElement.textContent = `
          #radix-vue-accordion-trigger-6 {
            padding-bottom: 0 !important;
            padding-top: 0 !important;
            justify-content: start !important;
            gap:16px;
          }
        `;
      }
    };

    onBeforeMount(() => {
      injectStyles();
    });

    onMounted(() => {
      // Ensure styles are applied after component is mounted
      injectStyles();
    });

    return {
      defaultValue,
      accordionItems,
      navigationMenuTriggerStyle,
    };
  },
});
</script>
<style scoped>
#radix-vue-accordion-trigger-6{
  padding-top: 0;
  padding-bottom: 0;
  gap: 16px;
  justify-content: start;
}
</style>