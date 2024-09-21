<template>
  <div>
    <!-- banner -->
    <div
      class="3xl:pt-[100px] lg:pt-12 md:pt-10 sm:pt-5 md:mb-[300px] lg:mb-[100px] sm:mb-[100px] 3xl:h-[800px] md:h-[414px] sm:h-[364px] lg:h-[488px]  md:rounded-b-[60px] sm:rounded-b-[11px] bg-[url('/images/bg-san-pham-1.png')] bg-cover bg-center relative ">
      <div class="layout">
        <div class="w-[1150px] max-w-full mx-auto">
          <h4 class="text-center 3xl:text-base text-black tracking-[3.2px] font-semibold uppercase sm:text-[12px]">
            Khách hàng cá nhân
          </h4>

          <h3
            class="text-center 3xl:text-[60px] text-black font-bold font-BG my-6 md:text-[32px] sm:text-[20px] xl:text-[40px]">
            Mở tài khoản mới - Nhận 1 triệu đồng
          </h3>
          <p class="text-center 3xl:text-lg text-[rgba(21,23,30,0.80)] font-bold  sm:text-[12px]">
            Mở tài Khoản mới - Nhận ngay 1 triệu đồng từ UPS!<br />
            Ưu đãi đặc biệt đồng hành cùng sinh viên - Gen Z tại UPS
          </p>

          <div class="flex 3xl:gap-5 sm:gap-2 items-center justify-center my-10">
            <div class="inline-flex animate-ups__item">
              <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info" class="btn active group">
                <span> Đăng kí ngay </span>
                <div class="inline-flex 2xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                  <i class="w-full h-full group-hover:inline-flex hidden absolute">
                    <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                  </i>

                  <i class="w-full h-full group-hover:hidden inline-flex absolute">
                    <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                  </i>
                </div>
              </nuxt-link>
            </div>
            <div class="inline-flex animate-ups__item">
              <nuxt-link to="/" class="btn group">
                <span> Xem hướng dẫn </span>
                <div class="inline-flex 2xl:gap-1 gap-2 w-4 h-4 overflow-hidden relative">
                  <i class="w-full h-full inline-flex absolute">
                    <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                  </i>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center absolute w-full 3xl:h-[520px] md:h-[276px] md:bottom-[-200px] sm:bottom-[-100px] lg:bottom-[-100px] left-1/2 -translate-x-1/2 ">
          <nuxt-img loading="lazy" format="webp" src="/images/san-pham-1.png" alt="UPS"
            class="3xl:w-[1220px] h-full object-cover 3xl:object-contain " />
        </div>
      </div>
    </div>
    <!-- uu dai soc -->
    <div class="md:py-[100px] sm:p-10 ">
      <div class="layout w-full ">
        <div class=" 3xl:max-w-[850px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
          <h3
            class="3xl:text-[60px] xl:text-[50px] lg:text-[40px] md:text-[32px] sm:text-[20px] text-black font-BG font-semibold">
            <span class="text-[#E66D14] block sm:text-center md:text-left">Ưu đãi shock
              <span class="text-black">dành cho các bạn sinh viên - Chứng sĩ Gen Z </span></span>
          </h3>
          <!-- <p class="text-lg text-[#3C4052] mt-2 font-medium">
						UPS không chỉ cung cấp dịch vụ đầu tư minh bạch, đáng tin cậy, đem lại nguồn lợi nhuận đa dạng
					</p> -->
          <div
            class="md:hidden block sm:h-[304px] sm:w-full  rounded-[30px] md:rounded-[16px] sm:rounded-sm overflow-hidden mt-10">
            <nuxt-img format="webp" loading="lazy" src="/images/3731747fa4b1ec9324541a74f6667ad9.jpg" alt="UPS"
              class="w-full h-full object-cover rounded-[10px]" />
          </div>
        </div>

        <div class="3xl:mt-20 md:mt-5">
          <div
            class="3xl:px-[60px] 3xl:py-[80px] md:p-[32px] sm:p-5 bg-[#F8F8FF] 3xl:rounded-[30px] sm:rounded-[10px] relative">
            <div
              class="3xl:w-[72px] 3xl:h-[72px] md:w-[32px] md:h-[32px] sm:h-[24px] sm:w-[24px] inline-flex bg-[#E66D14] items-center justify-center rounded-[20px] md:rounded-[10px] sm:rounded-sm">
              <i class="inline-flex 3xl:w-[32px] 3xl:h-[32px] md:w-[18px] md:h-[18px] sm:w-[10px] sm:h-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                  <path d="M9.17334 24.1995V21.4395" stroke="white" stroke-width="2" stroke-linecap="round" />
                  <path d="M16 24.1997V18.6797" stroke="white" stroke-width="2" stroke-linecap="round" />
                  <path d="M22.8267 24.1996V15.9062" stroke="white" stroke-width="2" stroke-linecap="round" />
                  <path d="M22.8267 7.79883L22.2133 8.51883C18.8133 12.4922 14.2533 15.3055 9.17334 16.5722"
                    stroke="white" stroke-width="2" stroke-linecap="round" />
                  <path d="M18.9199 7.79883H22.8266V11.6922" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M11.9998 29.3327H19.9998C26.6665 29.3327 29.3332 26.666 29.3332 19.9993V11.9993C29.3332 5.33268 26.6665 2.66602 19.9998 2.66602H11.9998C5.33317 2.66602 2.6665 5.33268 2.6665 11.9993V19.9993C2.6665 26.666 5.33317 29.3327 11.9998 29.3327Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </i>
            </div>

            <div class="mt-10 3xl:max-w-[660px] md:max-w-[250px] lg:max-w-[350px] sm:w-full ">
              <!-- <h5 class="text-[40px] text-black font-semibold">Khái niệm</h5> -->
              <p class="3xl:text-[24px] lg:text-[14px] md:text-[12px]  font-normal mt-2 sm:text-[12px]">
                Chương trình ưu đãi đặc biệt từ UPS! Từ ngày 15/09/2024 đến ngày
                31/12/2024, khi bạn mở mới tài khoản giao dịch tại UPS, bạn sẽ
                nhận ngay 1 triệu đồng vào tài khoản để giao dịch.
              </p>
            </div>

            <div
              class="md:block hidden absolute 3xl:w-[632px] 3xl:h-[590px] md:w-[338px] md:h-[315px] sm:h-[304px] sm:w-full xl:w-[420px] xl:h-[394px] top-0 right-0 3xl:rounded-[30px] md:rounded-[16px] sm:rounded-sm overflow-hidden 3xl:translate-y-[-40%] md:translate-y-[-20%] xl:translate-y-[-30%]">
              <nuxt-img format="webp" loading="lazy" src="/images/3731747fa4b1ec9324541a74f6667ad9.jpg" alt="UPS"
                class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- chi tiet chuong trinh -->
    <div
      class="3xl:py-20 bg-[url('/images/bg-chi-tiet.png')] bg-cover bg-no-repeat overflow-hidden md:px-[60px] md:py-[40px] sm:px-[48px] sm:py-[56px] lg:py-[56px] xl:px-[100px] xl:py-[70px]">
      <div class="layout">
        <div
          class="flex 3xl:justify-between md:gap-6 sm:flex-col md:flex-row sm:gap-[32px] sm:items-start sm:justify-center">
          <div class="max-w-[520px]">
            <h4
              class="text-black 3xl:text-[50px] md:text-[24px] sm:text-[20px] lg:text-[40px] xl:text-[50px] font-BG font-semibold 3xl:leading-[50px] sm:leading-[40px]">
              Chi tiết
              <p
                class="text-black 3xl:text-[76px] md:text-[32px] sm:text-[20px] lg:text-[40px] xl:text-[50px] font-BG font-semibold 3xl:leading-[90px] sm:leading-[40px]">
                Chương trình
              </p>
            </h4>
            <p class="text-black font-HG font-medium mt-3 3xl:text-[18px] md:text-[14px] sm:text-[12px]">
              UPS không chỉ cung cấp dịch vụ đầu tư minh bạch, đáng tin cậy, đem
              lại nguồn lợi nhuận đa dạng
            </p>
          </div>

          <div class="3xl:w-max sm:w-full">
            <div class="grid gap-5 md:grid-cols-2 sm:grid-cols-1">
              <div
                class="3xl:min-w-[250px] md:min-w-full sm:w-full p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300">
                <h5 class="3xl:text-[20px] font-medium text-[rgba(255,255,255,0.80)] sm:text-[12px]">
                  Nhận ngay cho tài khoản mở mới
                </h5>
                <p class="3xl:text-[32px] sm:text-[18px] text-white font-semibold font-BG">
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
                class="3xl:min-w-[250px] md:min-w-full sm:w-full p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300">
                <h5 class="3xl:text-[20px] font-medium text-[rgba(255,255,255,0.80)] sm:text-[12px]">
                  Thời gian áp dụng
                </h5>
                <p class="3xl:text-[32px] text-white font-semibold font-BG sm:text-[18px]">
                  15/09/2024 - 31/12/2024
                </p>
              </div>
            </div>

            <div class="mt-5 grid gap-5 grid-cols-1">
              <div
                class="min-w-[250px] md:min-w-full p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300">
                <h5 class="3xl:text-[20px] font-medium text-[rgba(255,255,255,0.80)] sm:text-[12px]">
                  Đối tượng áp dụng
                </h5>
                <p class="3xl:text-[32px] text-white font-semibold font-BG sm:text-[18px]">
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
    <!-- huong dan -->
    <div class="3xl:py-[120px] sm:py-0">
      <div
        class="layout md:pt-10 md:pb-20 md:px-[60px] sm:px-[24px] sm:py-[48px] 3xl:px-[225px] 3xl:pt-[120px] 3xl:pb-[150px] ">
        <div class="flex 3xl:gap-[200px] sm:gap-[50px] max-w-[1200px] mx-auto md:gap-10 sm:flex-col md:flex-row">
          <div class="md:w-2/3 sm:w-full">
            <h3 class="3xl:text-[60px] font-semibold font-BG md:text-[32px] sm:text-[20px] xl:text-[40px]">
              <span class="block">Nhận ngay 1 triệu đồng</span>
              <span class="text-[#E66D14] block">chỉ với 2 bước</span>
            </h3>

            <div
              class="mt-[60px] flex flex-col gap-10 relative after:content-[''] after:absolute after:z-[-1] after:w-[2px] after:h-full after:bg-[#E66D14] after:bottom-0 3xl:after:left-[19px] sm:after:left-[10px]">
              <div class="flex gap-5">
                <div :class="cn(
                  'inline-flex items-center justify-center 3xl:w-[38px] 3xl:h-[38px] sm:w-[22px] sm:h-[22px] sm:text-[12px] border border-black rounded-full 3xl:text-lg',
                  {
                    'text-white bg-[#E66D14] border-[#E66D14]': true,
                  }
                )
                  ">
                  1
                </div>
                <div class="flex-1 w-full">
                  <h4 class="3xl:text-xl font-BG font-semibold sm:text-[14px]">
                    Đăng ký mở tài khoản mới tại UPS
                  </h4>
                  <p class="3xl:text-base font-normal mt-1 sm:text-[12px]">
                    Tìm tên ứng dụng trên Appstore hoặc CH Play, tải và đăng ký
                    mở tài khoản
                  </p>

                  <div>
                    <p class="3xl:text-lg font-bold my-2 sm:text-[12px]">Quét để tải App</p>
                    <nuxt-img loading="lazy" format="webp" src="/images/image 6307.png" alt="UPS" />
                  </div>
                </div>
              </div>
              <!-- <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg text-black bg-white"
                >
                  2
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Sau khi tài khoản được kích hoạt, bạn sẽ nhận ngay 1 triệu
                    đồng vào tài khoản giao dịch.
                  </h4>
                
                </div>
              </div> -->
              <!-- <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg text-black bg-white"
                >
                  3
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Nạp tiền vào tài khoản
                  </h4>
                  
                </div>
              </div> -->
              <!-- <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center w-[38px] h-[38px] border border-black rounded-full text-lg text-black bg-white"
                >
                  4
                </div>
                <div class="flex-1 w-full">
                  <h4 class="text-xl font-BG font-semibold">
                    Tìm mã phái sinh VNF30
                  </h4>
                  
                </div>
              </div> -->
              <div class="flex gap-5">
                <div
                  class="inline-flex items-center justify-center 3xl:w-[38px] 3xl:h-[38px] sm:w-[22px] sm:h-[22px] sm:text-[12px] border border-black rounded-full 3xl:text-lg text-black bg-white">
                  2
                </div>
                <div class="flex-1 w-full">
                  <h4 class="3xl:text-xl font-BG font-semibold sm:text-[14px]">
                    Sau khi tài khoản được kích hoạt, bạn sẽ nhận ngay 1 triệu
                    đồng vào tài khoản giao dịch.
                  </h4>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-[18px] mt-[40px]">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path
                    d="M18.9998 3.16602C10.2757 3.16602 3.1665 10.2752 3.1665 18.9993C3.1665 27.7235 10.2757 34.8327 18.9998 34.8327C27.724 34.8327 34.8332 27.7235 34.8332 18.9993C34.8332 10.2752 27.724 3.16602 18.9998 3.16602ZM17.8123 12.666C17.8123 12.0168 18.3507 11.4785 18.9998 11.4785C19.649 11.4785 20.1873 12.0168 20.1873 12.666V20.5827C20.1873 21.2318 19.649 21.7702 18.9998 21.7702C18.3507 21.7702 17.8123 21.2318 17.8123 20.5827V12.666ZM20.4565 25.9343C20.3773 26.1402 20.2665 26.2985 20.124 26.4568C19.9657 26.5993 19.7915 26.7102 19.6015 26.7893C19.4115 26.8685 19.2057 26.916 18.9998 26.916C18.794 26.916 18.5882 26.8685 18.3982 26.7893C18.2082 26.7102 18.034 26.5993 17.8757 26.4568C17.7332 26.2985 17.6223 26.1402 17.5432 25.9343C17.464 25.7443 17.4165 25.5385 17.4165 25.3327C17.4165 25.1268 17.464 24.921 17.5432 24.731C17.6223 24.541 17.7332 24.3668 17.8757 24.2085C18.034 24.066 18.2082 23.9552 18.3982 23.876C18.7782 23.7177 19.2215 23.7177 19.6015 23.876C19.7915 23.9552 19.9657 24.066 20.124 24.2085C20.2665 24.3668 20.3773 24.541 20.4565 24.731C20.5357 24.921 20.5832 25.1268 20.5832 25.3327C20.5832 25.5385 20.5357 25.7443 20.4565 25.9343Z"
                    fill="#E66D14" />
                </svg>
              </i>
              <p class="sm:text-[14px] 3xl:text-lg">
                Số tiền 1 triệu đồng chỉ được dùng để giao dịch, thanh toán phí
                và lãi, không thể rút ra. Tuy nhiên, bạn có thể rút các khoản
                lãi hoặc thặng dư từ số tiền giao dịch.
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center 3xl:h-[795px] 3xl:w-[395px] xl:w-[262px]">
            <nuxt-img format="webp" loading="lazy" alt="UPS" height="800" src="/images/iphone-12-promax.png"
              class="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>

    <div class="py-[100px] md:py-0 hidden md:block">
      <div class="layout">
        <!-- <div
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
          
        </div> -->
        <div class="w-full h-[460px]  relative  p-6 flex items-end justify-between ">
          <nuxt-img src="/images/bg.png" class=" w-full h-full object-contain " />
        </div>
      </div>
    </div>
    <div class="layout block 2xl:hidden">
      <feedback />
    </div>
    <div
      class="py-[100px] flex flex-col items-center md:gap-10 bg-[url('./images/Grid.png')] bg-cover bg-center bg-no-repeat">
      <div class="layout ">
        <p
          class="text-[#15171E] text-center font-bold text-[60px] xl:text-[40px] lg:text-[32px] md:text-[32px] 2xl:text-[45px] sm:text-[20px] leading-none font-BG">
          Câu hỏi thường gặp
          <span
            class="text-[#E66D14] font-bold text-[60px] xl:text-[40px] lg:text-[32px] 2xl:text-[45px] md:text-[32px] sm:text-[20px] leading-none">
            Margin 4U
          </span>
        </p>
        <p
          class="mt-2 text-black text-center font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal">
          Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự
          kiện của UPS
        </p>
      </div>
      <div
        class="w-[1000px] 3xl:w-full max-w-full mx-auto flex items-center flex-col container sm:px-6 md:px-10 3xl:px-[225px]  ">
        <Accordion type="single"
          class="w-2/3 2xl:w-3/4 sm:w-full lg:w-2/3 flex flex-col 2xl:gap-[50px] xl:gap-[20px] gap-2" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger class="flex items-center hover:no-underline ">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] 3xl:w-[50px] 3xl:h-[50px] 2xl:w-[38px] 2xl:h-[38px] sm:w-7 sm:h-7">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover" />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal">
                    Tôi có thể rút 1 triệu đồng không? 
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium 3xl:text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal">
                  Không, số tiền 1 triệu đồng chỉ được dùng để giao dịch và
                  thanh toán phí. Tuy nhiên, bạn có thể rút các khoản lợi nhuận
                  thặng dư từ giao dịch.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] 3xl:w-[50px] 3xl:h-[50px] sm:w-7 sm:h-7">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover" />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal">
                    Chương trình áp dụng cho những ai?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium 3xl:text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal">
                  Chỉ áp dụng cho sinh viên mở tài khoản mới từ 15/09/2024 đến 31/12/2024.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] 3xl:w-[50px] 3xl:h-[50px] sm:w-7 sm:h-7">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover" />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal">
                    Tôi có thể nhận các ưu đãi khác chứ?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px]">
                  Không giới hạn các ưu đãi khác: Bạn có thể nhận thêm các ưu đãi khác từ UPS.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] 3xl:w-[50px] 3xl:h-[50px] sm:w-7 sm:h-7">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover" />
                </i>
                <div class="ml-5">
                  <p
                    class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[14px] 2xl:text-[24px] leading-normal">
                    Tôi có thể rút tiền như thế nào?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p
                  class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px]">
                  Công thức tính tiền rút: Tiền rút = max ( tiền nạp ; tiền nạp + max ( Lãi lỗ giao dịch - phí thuế - 1
                  triệu ) Ví dụ: Nếu bạn nạp thêm tiền vào tài khoản và giao dịch thành công, bạn có thể rút số tiền
                  thặng dư dựa trên công thức trên.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <!-- <AccordionItem value="5">
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
          </AccordionItem> -->
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
import Feedback from "~/components/common/feedback/index.vue";

export default defineComponent({
  name: "san-pham-1",
  components: {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Feedback
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
    conic-gradient(from calc((var(--start) - (20 * 1.1)) * 1deg),
      #ffffff1f 0deg,
      white,
      #ffffff00 100deg);
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
    conic-gradient(from calc((var(--start) - (20 * 1.1)) * 1deg),
      #ffffff1f 0deg,
      white,
      #ffffff00 100deg);
  mask-composite: intersect;
  mask-clip: padding-box, border-box;
  opacity: 0;
  transition: 1s ease;
}

.card:hover>.glow::before {
  opacity: 1;
}

.card:hover::before {
  opacity: 0.6;
}
</style>
