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
              Sản phẩm
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

                    <nuxt-link to="/coming-soon" class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Cổ phiếu
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Tìm hiểu cơ bản để bắt đầu đầu tư
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
                        Hướng dẫn đầu tư cho người mới bắt đầu
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
                        Kiến thức cơ sở để xây dựng chiến lược đầu tư
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
                              Ưu đãi
                            </p>
                            <p
                              class="text-left text-sm text-[rgba(0,0,0,0.68)] font-medium"
                            >
                              Cập nhật các sản phẩm HOT
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div class="flex gap-5 flex-col">
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
                                Margin T+3
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/san-pham-1" class="flex items-center">
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
                                Margin 4U
                              </p>
                            </div>
                          </nuxt-link>
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
                        Áp dụng kiến thức đầu tư vào thực tế
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
                      <nuxt-img
                        format="webp"
                        loading="lazy"
                        alt="UPS"
                        height="24"
                        src="/icons/tu-van-tai-chinh.svg"
                      />
                    </i>

                    <nuxt-link to="/coming-soon" class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Tư vấn tài chính
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Nhận ngay sự hỗ trợ từ UPS
                      </p>
                    </nuxt-link>
                  </nuxt-link>

                  <nuxt-link to="/coming-soon" class="flex items-center">
                    <i class="inline-flex items-center justify-center">
                      <nuxt-img
                        format="webp"
                        loading="lazy"
                        alt="UPS"
                        height="24"
                        src="/icons/tin-dau-gia.svg"
                      />
                    </i>

                    <div class="ml-5">
                      <p class="text-base text-[#000] font-semibold">
                        Tin đấu giá
                      </p>
                      <p class="text-sm text-[rgba(0,0,0,0.68)] font-medium">
                        Cập nhật các sản phẩm HOT
                      </p>
                    </div>
                  </nuxt-link>
                </div>
                <div class="w-full">
                  <p class="text-left text-2xl text-[#014227] font-semibold">
                    Nền tảng
                  </p>

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
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    height="24"
                    src="/icons/nhan-dinh-thi-truong.svg"
                  />
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
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    height="24"
                    src="/icons/cong-dong.svg"
                  />
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
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    height="24"
                    src="/icons/cam-nang-dau-tu.svg"
                  />
                </i>

                <div class="ml-5">
                  <p class="text-base text-[#000] font-semibold">
                    Hướng dẫn sử dụng
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
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    height="24"
                    src="/icons/ve-chung-toi.svg"
                  />
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
                  <AccordionTrigger
                    class="flex items-center hover:no-underline"
                  >
                    <div class="flex">
                      <i class="inline-flex items-center justify-center">
                        <nuxt-img
                          format="webp"
                          loading="lazy"
                          alt="UPS"
                          height="24"
                          src="/icons/tin-ups.svg"
                        />
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
                  </AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <nuxt-link to="/coming-soon" class="flex items-center">
                <i class="inline-flex items-center justify-center">
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    height="24"
                    src="/icons/gia-nhap-ups.svg"
                  />
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
import { defineComponent } from "vue";
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
  name: "navigation",
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

    return {
      defaultValue,
      accordionItems,
      navigationMenuTriggerStyle,
    };
  },
});
</script>
