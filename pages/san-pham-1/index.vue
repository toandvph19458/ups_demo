<template>
  <div>
    <div
      class="pt-[100px] mb-[300px] h-[800px] rounded-b-[60px] bg-[url('/images/bg-san-pham-1.png')] bg-cover bg-center relative"
    >
      <div class="container">
        <div class="w-[1150px] max-w-full mx-auto">
          <h4
            class="text-center text-base text-black tracking-[3.2px] font-semibold uppercase"
          >
            Khách hàng cá nhân
          </h4>

          <h3 class="text-center text-[60px] text-black font-bold font-BG my-6">
            Mở tài khoản mới - Nhận 1 triệu đồng
          </h3>
          <p class="text-center text-lg text-[rgba(21,23,30,0.80)] font-bold">
            Mở tài Khoản mới - Nhận ngay 1 triệu đồng từ UPS!<br />
            Ưu đãi đặc biệt đồng hành cùng sinh viên - Gen Z tại UPS
          </p>

          <div class="flex gap-5 sm:gap-2 items-center justify-center my-10">
            <div class="inline-flex animate-ups__item">
              <nuxt-link to="/" class="btn active group">
                <span> Đăng kí ngay </span>
                <div
                  class="inline-flex 2xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative"
                >
                  <i
                    class="w-full h-full group-hover:inline-flex hidden absolute"
                  >
                    <nuxt-img
                      src="/icons/arrow-dark-icon.svg"
                      loading="lazy"
                      width="16"
                      height="16"
                      alt="UPS"
                    />
                  </i>

                  <i
                    class="w-full h-full group-hover:hidden inline-flex absolute"
                  >
                    <nuxt-img
                      src="/icons/arrow-icon.svg"
                      loading="lazy"
                      width="16"
                      height="16"
                      alt="UPS"
                    />
                  </i>
                </div>
              </nuxt-link>
            </div>
            <div class="inline-flex animate-ups__item">
              <nuxt-link to="/" class="btn group">
                <span> Xem hướng dẫn </span>
                <div
                  class="inline-flex 2xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative"
                >
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

        <div
          class="flex items-center justify-center absolute w-full bottom-[-200px] left-1/2 -translate-x-1/2"
        >
          <nuxt-img
            loading="lazy"
            format="webp"
            height="520"
            src="/images/san-pham-1.png"
            alt="UPS"
          />
        </div>
      </div>
    </div>

    <div class="pb-[100px]">
      <div class="container">
        <div class="max-w-[620px]">
          <h3 class="text-[60px] text-black font-BG font-semibold">
            <span class="text-[#E66D14] block"
              >Ưu đãi shock
              <span class="text-black"
                >dành cho các bạn sinh viên - Chứng sĩ Gen Z </span
              ></span
            >
          </h3>
          <!-- <p class="text-lg text-[#3C4052] mt-2 font-medium">
						UPS không chỉ cung cấp dịch vụ đầu tư minh bạch, đáng tin cậy, đem lại nguồn lợi nhuận đa dạng
					</p> -->
        </div>

        <div class="mt-20">
          <div class="p-[60px] bg-[#F8F8FF] rounded-[30px] relative">
            <div
              class="w-[72px] h-[72px] inline-flex bg-[#E66D14] items-center justify-center rounded-[20px]"
            >
              <i class="inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M9.17334 24.1995V21.4395"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 24.1997V18.6797"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M22.8267 24.1996V15.9062"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M22.8267 7.79883L22.2133 8.51883C18.8133 12.4922 14.2533 15.3055 9.17334 16.5722"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18.9199 7.79883H22.8266V11.6922"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9998 29.3327H19.9998C26.6665 29.3327 29.3332 26.666 29.3332 19.9993V11.9993C29.3332 5.33268 26.6665 2.66602 19.9998 2.66602H11.9998C5.33317 2.66602 2.6665 5.33268 2.6665 11.9993V19.9993C2.6665 26.666 5.33317 29.3327 11.9998 29.3327Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </div>

            <div class="mt-10 max-w-[650px]">
              <!-- <h5 class="text-[40px] text-black font-semibold">Khái niệm</h5> -->
              <p class="text-[24px] font-normal mt-2">
                Chương trình ưu đãi đặc biệt từ UPS! Từ ngày 15/09/2024 đến ngày
                31/12/2024, khi bạn mở mới tài khoản giao dịch tại UPS, bạn sẽ
                nhận ngay 1 triệu đồng vào tài khoản để giao dịch.
              </p>
            </div>

            <div
              class="absolute w-[632px] h-[590px] top-0 right-0 rounded-[30px] overflow-hidden translate-y-[-30%]"
            >
              <nuxt-img
                format="webp"
                loading="lazy"
                src="/images/3731747fa4b1ec9324541a74f6667ad9.png"
                alt="UPS"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-20 bg-gradient-to-r from-[#FFF35D] via-[#F4B93D] to-[#E66D14]"
    >
      <div class="container">
        <div class="flex justify-between">
          <div class="max-w-[420px]">
            <h4
              class="text-black text-[50px] font-BG font-semibold leading-[50px]"
            >
			Chi tiết
              <p
                class="text-black text-[76px] font-BG font-semibold leading-[90px]"
              >
			  Chương trình 
              </p>
            </h4>
            <p class="text-black font-lg font-medium mt-3">
              UPS không chỉ cung cấp dịch vụ đầu tư minh bạch, đáng tin cậy, đem
              lại nguồn lợi nhuận đa dạng
            </p>
          </div>

          <div class="w-max">
            <div class="grid gap-5 grid-cols-2">
              <div
                class="min-w-[250px] p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300"
              >
                <h5
                  class="text-[20px] font-medium text-[rgba(255,255,255,0.80)]"
                >
				Nhận ngay cho tài khoản mở mới
                </h5>
                <p class="text-[32px] text-white font-semibold font-BG">
					1 triệu đồng
                </p>
              </div>
              <!-- <div
                class="min-w-[250px] p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300"
              >
                <h5
                  class="text-[20px] font-medium text-[rgba(255,255,255,0.80)]"
                >
                  Tỷ lệ vay
                </h5>
                <p class="text-[32px] text-white font-semibold font-BG">
                  30% - 50%
                </p>
              </div> -->
              <div
                class="min-w-[250px] p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300"
              >
                <h5
                  class="text-[20px] font-medium text-[rgba(255,255,255,0.80)]"
                >
				Thời gian áp dụng
                </h5>
                <p class="text-[32px] text-white font-semibold font-BG">
					15/09/2024 - 31/12/2024
                </p>
              </div>
            </div>

            <div class="mt-5 grid gap-5 grid-cols-1">
              <div
                class="min-w-[250px] p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300"
              >
                <h5
                  class="text-[20px] font-medium text-[rgba(255,255,255,0.80)]"
                >
				Đối tượng áp dụng
                </h5>
                <p class="text-[32px] text-white font-semibold font-BG">
					Sinh viên mở mới tài khoản từ ngày 15/09/2024
                </p>
              </div>
              <!-- <div
                class="min-w-[250px] p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300"
              >
                <h5
                  class="text-[20px] font-medium text-[rgba(255,255,255,0.80)]"
                >
                  Danh mục cho vay
                </h5>
                <p class="text-[32px] text-white font-semibold font-BG">
                  Chứng khoán ký quỹ của UPS
                </p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-[120px]">
      <div class="container">
        <div class="flex gap-[200px] max-w-[1200px] mx-auto">
          <div class="">
            <h3 class="text-[60px] font-semibold font-BG">
              <span class="block">Các bước</span>
              <span class="text-[#E66D14] block">giao dịch ký quỹ</span>
            </h3>

            <div
              class="mt-[60px] flex flex-col gap-10 relative after:content-[''] after:absolute after:z-[-1] after:w-[2px] after:h-full after:bg-[#E66D14] after:bottom-0 after:left-[19px]"
            >
              <div class="flex gap-5">
                <div
                  :class="
                    cn(
                      'inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg',
                      {
                        'text-white bg-[#E66D14] border-[#E66D14]': true,
                      }
                    )
                  "
                >
                  1
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Tải ứng dụng UPS trên Appstore hoặc CH play
                  </h4>
                  <p class="text-base font-normal mt-1">
                    Tìm tên ứng dụng trên Appstore hoặc CH Play, tải và đăng ký
                    mở tài khoản
                  </p>

                  <div>
                    <p class="text-lg font-bold my-2">Quét để tải App</p>
                    <nuxt-img
                      loading="lazy"
                      format="webp"
                      src="/images/image 6307.png"
                      alt="UPS"
                    />
                  </div>
                </div>
              </div>
              <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg text-black bg-white"
                >
                  2
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Hoàn thiện thông tin đăng ký theo các bước
                  </h4>
                  <!-- <div>
										<p class="text-base font-normal mt-1">
											Tìm tên ứng dụng trên Appstore hoặc CH Play, tải và đăng ký mở tài khoản
										</p>

										<div>
											<p class="text-lg font-bold my-2">Quét để tải App</p>
											<nuxt-img
												loading="lazy"
												format="webp"
												src="/images/image 6307.png"
												alt="UPS"
											/>
										</div>
									</div> -->
                </div>
              </div>
              <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg text-black bg-white"
                >
                  3
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Nạp tiền vào tài khoản
                  </h4>
                  <!-- <div>
										<p class="text-base font-normal mt-1">
											Tìm tên ứng dụng trên Appstore hoặc CH Play, tải và đăng ký mở tài khoản
										</p>

										<div>
											<p class="text-lg font-bold my-2">Quét để tải App</p>
											<nuxt-img
												loading="lazy"
												format="webp"
												src="/images/image 6307.png"
												alt="UPS"
											/>
										</div>
									</div> -->
                </div>
              </div>
              <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg text-black bg-white"
                >
                  4
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Tìm mã phái sinh VNF30
                  </h4>
                  <!-- <div>
										<p class="text-base font-normal mt-1">
											Tìm tên ứng dụng trên Appstore hoặc CH Play, tải và đăng ký mở tài khoản
										</p>

										<div>
											<p class="text-lg font-bold my-2">Quét để tải App</p>
											<nuxt-img
												loading="lazy"
												format="webp"
												src="/images/image 6307.png"
												alt="UPS"
											/>
										</div>
									</div> -->
                </div>
              </div>
              <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg text-black bg-white"
                >
                  5
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Chọn chiều Mua/Bán và đặt lệnh
                  </h4>
                  <!-- <div>
										<p class="text-base font-normal mt-1">
											Tìm tên ứng dụng trên Appstore hoặc CH Play, tải và đăng ký mở tài khoản
										</p>

										<div>
											<p class="text-lg font-bold my-2">Quét để tải App</p>
											<nuxt-img
												loading="lazy"
												format="webp"
												src="/images/image 6307.png"
												alt="UPS"
											/>
										</div>
									</div> -->
                </div>
              </div>
            </div>
          </div>

          <div>
            <nuxt-img
              format="webp"
              loading="lazy"
              alt="UPS"
              height="800"
              src="/images/iphone-12-promax.png"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="py-[100px]">
      <div class="container">
        <div
          class="w-full h-[460px] rounded-[40px] relative bg-gradient-to-b from-[#FFF35D] to-[#F19F00] p-6 flex items-end justify-between"
        >
          <div class="">
            <p class="text-black text-[24px] leading-normal font-BG">Chỉ</p>
            <p class="text-black text-[40px] leading-normal font-BG">
              6.2%/năm
            </p>
            <p class="text-black text-[24px] leading-normal font-BG">
              dành cho khách hàng của UPS
            </p>
          </div>
          <div class="absolute top-0 w-[777px] h-[592px] right-1/4">
            <nuxt-img
              format="webp"
              loading="lazy"
              src="/images/Group 427318928.png"
              alt="UPS"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="btn-wrapper">
            <div class="inline-flex">
              <nuxt-link to="/" class="btn active group">
                <span class="text-[10px] sm:text-[12px] xl:text-[14px]">
                  Đăng kí ngay
                </span>
                <div
                  class="inline-flex 3xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative"
                >
                  <i
                    class="w-full h-full group-hover:inline-flex hidden absolute"
                  >
                    <nuxt-img
                      src="/icons/arrow-dark-icon.svg"
                      loading="lazy"
                      width="16"
                      height="16"
                      alt="UPS"
                    />
                  </i>
                  <i
                    class="w-full h-full group-hover:hidden inline-flex absolute"
                  >
                    <nuxt-img
                      src="/icons/arrow-icon.svg"
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

    <div class="py-[100px]">
      <div class="container">
        <p
          class="text-[#15171E] text-center font-bold text-[60px] xl:text-[40px] lg:text-[32px] sm:text-[20px] 2xl:text-[45px] leading-none font-BG"
        >
          Câu hỏi thường gặp về
          <span
            class="text-[#E66D14] font-bold text-[60px] xl:text-[40px] lg:text-[32px] 2xl:text-[45px] sm:text-[20px] leading-none"
          >
            UPS Margin
          </span>
        </p>
        <p
          class="mt-2 text-black text-center font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal"
        >
          Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự
          kiện của UPS
        </p>
      </div>
      <div
        class="w-[1000px] max-w-full mx-auto mt-20 flex items-center flex-col"
      >
        <Accordion
          type="single"
          class="w-2/3 2xl:w-3/4 sm:w-full lg:w-2/3"
          collapsible
        >
          <AccordionItem value="1">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7"
                >
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover"
                  />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal"
                  >
                    Khách hàng muốn giao dịch ký quỹ thì cần làm thủ tục gì?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal"
                >
                  Khách hàng mở tài khoản giao dịch tại UPS, và đáp ứng đủ điều
                  kiện về giao dịch ký quỹ chứng khoán theo quy định của Pháp
                  luật.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7"
                >
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover"
                  />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal"
                  >
                    Khách hàng muốn trả khoản vay ký quỹ trước hạn có được không
                    và thủ tục thế nào?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal"
                >
                  Không, lãi suất của Margin T+3 là cố định 6.8% trong suốt thời
                  gian nắm giữ cổ phiếu.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7"
                >
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover"
                  />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal"
                  >
                    Khách hàng có được phép gia hạn món vay của mình không?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px]"
                >
                  Không, lãi suất của Margin T+3 là cố định 6.8% trong suốt thời
                  gian nắm giữ cổ phiếu.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7"
                >
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover"
                  />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal"
                  >
                    Các mốc quan trọng của tài khoản khi thực hiện vay ký quỹ
                    tại UPS là gì?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px]"
                >
                  Các mốc quan trọng của tài khoản khi thực hiện vay ký quỹ tại
                  UPS là gì?
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="5">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7"
                >
                  <nuxt-img
                    format="webp"
                    loading="lazy"
                    alt="UPS"
                    src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover"
                  />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal"
                  >
                    Call Margin là gì?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px]"
                >
                  Call Margin là gì?
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default defineComponent({
  name: "san-pham-1",
  components: {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  },
  setup(props, ctx) {
    useHead({
      title: "UPS - Sản Phẩm 1",
      titleTemplate: "UPS - Sản Phẩm 1",
      // meta: [
      // 	{
      // 		name: "description",
      // 		content:
      // 			"Hướng dẫn chi tiết về cách sử dụng hệ thống UPS. Tìm hiểu cách cài đặt, bảo trì và sử dụng UPS để bảo vệ thiết bị điện của bạn khỏi mất điện.",
      // 	},
      // 	{
      // 		property: "og:title",
      // 		content: "Hướng Dẫn Sử Dụng UPS - Tất Cả Những Gì Bạn Cần Biết",
      // 	},
      // 	{
      // 		property: "og:description",
      // 		content:
      // 			"Hướng dẫn từng bước cách sử dụng hệ thống UPS. Đảm bảo thiết bị của bạn luôn hoạt động an toàn và hiệu quả với các mẹo và lời khuyên từ chuyên gia.",
      // 	},
      // 	{
      // 		property: "og:image",
      // 		content: "URL_to_your_image",
      // 	},
      // 	{
      // 		property: "og:type",
      // 		content: "article",
      // 	},
      // 	{
      // 		name: "twitter:card",
      // 		content: "summary_large_image",
      // 	},
      // 	{
      // 		name: "twitter:title",
      // 		content: "Hướng Dẫn Sử Dụng UPS - Tất Cả Những Gì Bạn Cần Biết",
      // 	},
      // 	{
      // 		name: "twitter:description",
      // 		content:
      // 			"Khám phá hướng dẫn chi tiết về cách cài đặt và sử dụng hệ thống UPS để bảo vệ thiết bị của bạn.",
      // 	},
      // 	{
      // 		name: "twitter:image",
      // 		content: "URL_to_your_image", // Replace with the actual URL of the image you want to use
      // 	},
      // 	{
      // 		name: "keywords",
      // 		content:
      // 			"Hướng dẫn sử dụng UPS, cài đặt UPS, bảo trì UPS, cách dùng UPS, bảo vệ thiết bị điện, UPS",
      // 	},
      // 	{
      // 		name: "author",
      // 		content: "Tên tác giả hoặc tên công ty", // Replace with the author's name or company name
      // 	},
      // ],
    });

    return {
      cn,
    };
  },
});
</script>

<style scoped>
.card {
  --start: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  border-radius: 30px;
  transition: border-color 0.3s ease-in-out;
}

.card::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  border: 4px solid transparent;
  background: conic-gradient(from 90deg at 50% 50%, #02e56a, #ffffff);
  background-attachment: fixed;
  mask: linear-gradient(#0000, #0000),
    conic-gradient(
      from calc((var(--start) - (20 * 1.1)) * 1deg),
      #ffffff1f 0deg,
      white,
      #ffffff00 100deg
    );
  mask-composite: intersect;
  mask-clip: padding-box, border-box;
  opacity: 0;
  transition: 0.5s ease;
}

.glow {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: blur(14px);
}

.glow::before {
  position: absolute;
  content: "";
  width: 98%;
  height: 98%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  border: 2px solid transparent;
  background: conic-gradient(from 90deg at 50% 50%, #02e56a, #ffffff);
  background-attachment: fixed;
  mask: linear-gradient(#0000, #0000),
    conic-gradient(
      from calc((var(--start) - (20 * 1.1)) * 1deg),
      #ffffff1f 0deg,
      white,
      #ffffff00 100deg
    );
  mask-composite: intersect;
  mask-clip: padding-box, border-box;
  opacity: 0;
  transition: 1s ease;
}

.card:hover > .glow::before {
  opacity: 1;
}

.card:hover::before {
  opacity: 0.6;
}
</style>
