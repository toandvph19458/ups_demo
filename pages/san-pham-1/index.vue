<template>
  <div>
    <!-- banner -->
    <div
      class="relative bg-[url('/images/bg-san-pham-1.png')] w-full h-[450px] md:h-[414px] xl:h-[517px] 2xl:h-[582px] 3xl:h-[700px] md:rounded-b-[32px] xl:rounded-b-[40px] 2xl:rounded-b-[45px] 3xl:rounded-b-[60px] mb-[150px] md:mb-[174px] xl:mb-[220px] 2xl:mb-[244px] 3xl:mb-[350px] bg-cover bg-center bg-no-repeat">
      <div class="container-product pt-[36px] md:pt-10 lg:pt-[50px] xl:pt-[60px] 2xl:pt-[75px] 3xl:pt-[84px]">
        <div class="flex flex-col gap-[30px] md:gap-5 xl:gap-7 2xl:gap-[30px] 3xl:gap-10">

          <div class="space-y-3 xl:space-y-4 2xl:space-y-[18px] 3xl:space-y-6">
            <h4 class="text-center text-[16px] 3xl:text-[18px] text-black font-semibold uppercase">
              Khách hàng cá nhân
            </h4>

            <h3
              class="text-center text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] text-black font-bold font-BG">
              Mở tài khoản mới - Nhận 1 triệu đồng
            </h3>

            <p class="text-center text-[16px] 3xl:text-[18px] text-[rgba(21,23,30,0.80)] font-bold">
              Mở tài Khoản mới - Nhận ngay 1 triệu đồng từ UPS!<br />
              Ưu đãi đặc biệt đồng hành cùng sinh viên - Gen Z tại UPS
            </p>
          </div>

          <div class="flex 3xl:gap-5 sm:gap-2 items-center justify-center">
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
      </div>


      <div
        class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-full h-[196px] md:w-[648px] md:h-[276px] lg:w-[650px] lg:h-[278px] xl:w-[814px] xl:h-[346px] 2xl:w-[915px] 2xl:h-[390px] 3xl:w-[1220px] 3xl:h-[520px] ">
        <nuxt-img loading="lazy" format="webp" src="/images/san-pham-1.png" alt="UPS"
          class="w-full h-full object-contain" />
      </div>
    </div>



    <!-- uu dai soc -->
    <div class="container-product">
      <div class="py-10 lg:py-[50px] 3xl:py-[100px]">
        <div class="relative w-full">
          <div class="flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-[60px]">

            <div class="xl:pt-[50px] 3xl:pt-[90px] w-full md:w-1/2">
              <h3
                class="text-[18px] md:text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] text-black font-BG font-semibold">
                <span
                  class="text-[#E66D14] text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px]">Ưu
                  đãi shock</span>
                dành cho các bạn sinh viên - Chứng sĩ Gen Z
              </h3>
            </div>

            <div class="block md:hidden md:w-[300px] w-full h-[304px]">
              <nuxt-img format="webp" loading="lazy" src="/images/3731747fa4b1ec9324541a74f6667ad9.jpg" alt="UPS"
                class="w-full h-full object-cover rounded-[10px]" />
            </div>

            <div
              class="w-full lg:w-[80%] p-5 md:p-8 xl:p-[40px] 2xl:p-[45px] 3xl:p-[80px_60px] bg-[#F8F8FF] rounded-[10px] md:rounded-[16px] lg:rounded-[20px] 3xl:rounded-[30px]">
              <div class="flex flex-col w-full md:w-[45%] lg:w-[65%] h-full gap-5 xl:gap-6 2xl:gap-[30px] 3xl:gap-10">

                <div
                  class="size-[38px] xl:size-[44px] 2xl:size-[56px] 3xl:size-[72px] inline-flex bg-[#E66D14] items-center justify-center rounded-[20px] md:rounded-[10px] sm:rounded-sm">

                  <i class="inline-flex size-[18px] xl:size-[20px] 2xl:size-[24px] 3xl:size-[32px]">
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

                <div class="">
                  <p
                    class="3xl:text-[24px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] font-normal mt-2 text-[16px]">
                    Chương trình ưu đãi đặc biệt từ UPS! Từ ngày 15/09/2024 đến ngày
                    31/12/2024, khi bạn mở mới tài khoản giao dịch tại UPS, bạn sẽ
                    nhận ngay 1 triệu đồng vào tài khoản để giao dịch.
                  </p>
                </div>
              </div>



            </div>
          </div>


          <div
            class="hidden md:block absolute top-0 right-0 md:w-[300px] md:h-[280px] xl:w-[420px] xl:h-[394px] 2xl:w-[474px] 2xl:h-[442px] 3xl:w-[632px] 3xl:h-[590px]">
            <nuxt-img format="webp" loading="lazy" src="/images/3731747fa4b1ec9324541a74f6667ad9.jpg" alt="UPS"
              class="w-full h-full object-cover md:rounded-[16px] xl:rounded-[20px] 3xl:rounded-[30px]" />
          </div>
        </div>
      </div>
    </div>



    <!-- chi tiet chuong trinh -->
    <div class="bg-[url('/images/bg-chi-tiet.png')] bg-cover bg-no-repeat bg-center">
      <div class="container-product py-[56px] md:py-10 lg:py-[56px] xl:py-[70px] 2xl:py-[75px] 3xl:py-[80px]">
        <div
          class="flex flex-wrap md:flex-nowrap items-stretch h-full w-full gap-8 md:gap-6 lg:gap-[60px] xl:gap-[70px] 2xl:gap-[80px] 3xl:gap-[150px]">

          <div
            class="flex flex-col gap-2 md:gap-3 lg:gap-0 lg:justify-between w-full md:w-[200px] lg:w-[250px] xl:w-[310px] 2xl:w-[350px] 3xl:w-[490px]">
            <div class="">
              <span
                class="text-[20px] md:text-[24px] lg:text-[30px] xl:text-[38px] 2xl:text-[40px] 3xl:text-[50px] font-BG font-semibold leading-[1.3]">
                Chi tiết
              </span>
              <h3
                class="text-[28px] md:text-[32px] lg:text-[40px] xl:text-[50px] 2xl:text-[58px] 3xl:text-[76px] font-BG font-semibold leading-[1.3]">
                Chương trình
              </h3>
            </div>

            <p class="font-HG font-medium mt-3 3xl:text-[18px] text-[16px]">
              UPS không chỉ cung cấp dịch vụ đầu tư minh bạch, đáng tin cậy, đem
              lại nguồn lợi nhuận đa dạng
            </p>
          </div>

          <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-[22px] 3xl:gap-5">
            <div
              class="p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300">
              <h5 class="3xl:text-[20px] font-medium text-[rgba(255,255,255,0.80)] text-[16px]">
                Nhận ngay cho tài khoản mở mới
              </h5>
              <p class="3xl:text-[32px] text-[18px] text-white font-semibold font-BG leading-[1.3]">
                1 triệu đồng
              </p>
            </div>

            <div
              class="p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300">
              <h5 class="3xl:text-[20px] font-medium text-[rgba(255,255,255,0.80)] text-[16px]">
                Thời gian áp dụng
              </h5>
              <p class="3xl:text-[32px] text-white font-semibold font-BG text-[18px] leading-[1.3]">
                15/09/2024 - 31/12/2024
              </p>
            </div>

            <div
              class="col-span-full p-5 rounded-[12px] border border-[rgba(236,230,255,0.5)] bg-[rgba(255,255,255,0.1)] shadow-[4px_4px_20px_rgba(191,150,224,0.16)] hover:shadow-custom transition-shadow duration-300">
              <h5 class="3xl:text-[20px] font-medium text-[rgba(255,255,255,0.80)] text-[16px]">
                Đối tượng áp dụng
              </h5>
              <p class="3xl:text-[32px] text-white font-semibold font-BG text-[18px] leading-[1.3]">
                Sinh viên mở mới tài khoản từ ngày 15/09/2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- huong dan -->
    <!-- <div class="3xl:py-[120px] sm:py-0">
      <div
        class="md:pt-10 md:pb-20 md:px-[60px] sm:px-[24px] sm:py-[48px] 3xl:px-[225px] 3xl:pt-[120px] 3xl:pb-[150px] ">
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
    </div> -->


    <div class="container-product">
      <div
        class="py-[48px] md:p-[40px_0_80px] lg:p-[64px_0_80px] xl:p-[80px_0_100px] 2xl:p-[90px_0_110px] 3xl:p-[120px_0_150px]">
        <div
          class="flex flex-col md:flex-row justify-center items-center w-full gap-[50px] md:gap-10 lg:gap-[104px] xl:gap-[130px] 2xl:gap-[150px] 3xl:gap-[240px]">

          <div class="flex-1">
            <div class="flex flex-col lg:w-[80%] gap-8 xl:gap-10">
              <div>
                <h3
                  class="font-semibold font-BG text-[20px] md:text-[28px] lg:text-[32px] 2xl:text-[38px] 3xl:text-[50px]">
                  Nhận ngay <span
                    class="text-[#E66D14] text-[28px] md:text-[32px] lg:text-[40px] 2xl:text-[45px] 3xl:text-[60px]">1
                    triệu đồng</span><br /> vào tài khoản chỉ với 2 bước
                </h3>
              </div>

              <div class="flex items-stretch gap-[10px] xl:gap-3 2xl:gap-4 3xl:gap-5">
                <div class="relative flex flex-col justify-between w-fit">
                  <div
                    class="flex justify-center items-center bg-white size-[28px] 3xl:size-[38px] text-[16px] 3xl:text-[18px] text-[#15171E] font-semibold rounded-full border-[1px] border-[#15171E]">
                    1
                  </div>

                  <div
                    class="-translate-y-full md:-translate-y-1/2 flex justify-center items-center bg-white size-[28px] 3xl:size-[38px] text-[16px] 3xl:text-[18px] text-[#15171E] font-semibold rounded-full border-[1px] border-[#15171E]">
                    2
                  </div>

                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] md:-translate-y-1/2 w-[1px] h-[80%] md:h-[90%] bg-[#15171E] z-[-1]">
                  </div>
                </div>

                <div class="space-y-5 xl:space-y-6 2xl:space-y-[30px] 3xl:space-y-10">
                  <div>
                    <h4 class="3xl:text-[22px] font-BG font-semibold sm:text-[16px]">
                      Đăng ký mở tài khoản mới tại UPS
                    </h4>
                    <p class="3xl:text-[18px] font-normal mt-1 text-[16px]">
                      Tìm tên ứng dụng trên Appstore hoặc CH Play, tải và đăng ký
                      mở tài khoản
                    </p>

                    <div>
                      <p class="3xl:text-[20px] font-bold my-2 sm:text-[16px]">Quét để tải App</p>
                      <nuxt-img loading="lazy" format="webp" src="/images/image 6307.png" alt="UPS"
                        class="size-[86px] xl:size-[108px] 2xl:size-[122px] 3xl:size-[162px]" />
                    </div>
                  </div>

                  <div>
                    <h4 class="3xl:text-[22px] font-BG font-semibold sm:text-[16px]">
                      Sau khi tài khoản được kích hoạt,
                      bạn sẽ nhận ngay 1 triệu đồng vào tài khoản giao dịch.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="relative w-[210px] h-[424px] xl:w-[262px] xl:h-[530px] 2xl:w-[295px] 2xl:h-[596px] 3xl:w-[393px] 3xl:h-[795px]">
            <nuxt-img format="webp" loading="lazy" alt="UPS" height="800" src="/images/iphone-12-promax.png"
              class="w-full h-full object-contain" />
          </div>

        </div>
      </div>
    </div>

    <div class="py-10 lg:py-[30px] xl:py-[50px]">
      <div class="container-product">
        <div class="relative w-full pt-[40%] md:pt-[30%] ">
          <nuxt-img src="/images/bg.png" class="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
    </div>

    <!-- cau hoi -->
    <div
      class="py-10 lg:py-[70px] xl:py-[90px] 2xl:py-[100px] flex flex-col items-center gap-8 md:gap-10 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[70px] 3xl:gap-[80px] bg-[url('./images/Grid.png')] bg-cover bg-center bg-no-repeat">
      <div class="container-product">
        <p
          class="text-[#15171E] text-center font-bold text-[60px] xl:text-[40px] lg:text-[32px] md:text-[32px] 2xl:text-[45px] sm:text-[28px] leading-[1.3] font-BG">
          Câu hỏi thường gặp
          <span
            class="text-[#E66D14] font-bold text-[60px] xl:text-[40px] lg:text-[32px] 2xl:text-[45px] md:text-[32px] sm:text-[28px]">
            Margin 4U
          </span>
        </p>
        <p
          class="mt-[10px] md:mt-[6px] xl:mt-2 2xl:mt-[10px] 3xl:mt-3 text-black text-center font-medium text-[16px] 2xl:text-[18px] leading-normal">
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
                    class="pr-4 text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] sm:text-[18px] 2xl:text-[24px] leading-normal">
                    Tôi có thể rút 1 triệu đồng không? 
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p class="text-[#838383] font-medium 3xl:text-[20px] text-[16px] leading-normal">
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
                  class="inline-flex items-center justify-center border rounded-[10px] 3xl:w-[50px] 3xl:h-[50px] 2xl:w-[38px] 2xl:h-[38px] sm:w-7 sm:h-7">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover" />
                </i>
                <div class="ml-5">
                  <p
                    class="pr-4 text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] sm:text-[18px] 2xl:text-[24px] leading-normal">
                    Chương trình áp dụng cho những ai?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p class="text-[#838383] font-medium 3xl:text-[20px] text-[16px] leading-normal">
                  Chỉ áp dụng cho sinh viên mở tài khoản mới từ 15/09/2024 đến 31/12/2024.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] 3xl:w-[50px] 3xl:h-[50px] 2xl:w-[38px] 2xl:h-[38px] sm:w-7 sm:h-7">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover" />
                </i>
                <div class="ml-5">
                  <p
                    class="pr-4 text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] sm:text-[18px] 2xl:text-[24px] leading-normal">
                    Tôi có thể nhận các ưu đãi khác chứ?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p class="text-[#838383] font-medium leading-normal 3xl:text-[20px] text-[16px]">
                  Không giới hạn các ưu đãi khác: Bạn có thể nhận thêm các ưu đãi khác từ UPS.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger class="flex items-center hover:no-underline">
              <div class="flex items-center">
                <i
                  class="inline-flex items-center justify-center border rounded-[10px] 3xl:w-[50px] 3xl:h-[50px] 2xl:w-[38px] 2xl:h-[38px] sm:w-7 sm:h-7">
                  <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                    class="w-1/2 h-1/2 object-cover" />
                </i>
                <div class="ml-5">
                  <p
                    class="pr-4 text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] sm:text-[18px] 2xl:text-[24px] leading-normal">
                    Tôi có thể rút tiền như thế nào?
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div class="3xl:pl-[70px] sm:pl-12">
                <p class="text-[#838383] font-medium leading-normal 3xl:text-[20px] text-[16px]">
                  Công thức tính tiền rút: Tiền rút = max ( tiền nạp ; tiền nạp + max ( Lãi lỗ giao dịch - phí thuế - 1
                  triệu ))Ví dụ: Nếu bạn nạp thêm tiền vào tài khoản và giao dịch thành công, bạn có thể rút số tiền
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
