<template>
  <!-- banner cổ phiếu -->
  <div
    class=" 3xl:py-[160px] 3xl:px-[100px]  2xl:px-[120px] 2xl:py-[80px] w-full xl:px-[100px] xl:py-[60px] lg:px-[60px] lg:py-[40px] md:px-[60px] md:py-[40px] sm:px-6 sm:py-8">
    <div class="flex 2xl:gap-[40px] w-full sm:gap-6 sm:flex-col-reverse lg:flex-row">
      <!-- cột trái của banner -->
      <div class="flex flex-col 3xl:w-[40%] 2xl:w-[45%] lg:w-1/2 justify-between lg:pt-6 ">
        <div
          class="border-b 3xl:pb-[164px] xl:pb-[40px] md:pb-[32px] sm:pb-[24px] flex flex-col items-start 2xl:gap-6 md:gap-5 sm:gap-3">
          <h1
            class="text-[#15171E] font-BG 3xl:text-[60px] xl:text-[45px] md:text-[32px] sm:text-[24px] font-bold leading-normal">
            Cổ phiếu
          </h1>
          <p
            class="text-[#838383] font-HG 3xl:text-[18px] sm:text-[14px] font-medium 3xl:leading-[28px] lg:leading-[20px]">
            Tham gia giao dịch Cổ phiếu là giải pháp đơn giản và dễ dàng giúp
            bạn hiện thực hóa ước mơ tăng trưởng tài chính và chinh phục những
            đỉnh cao cuộc sống. Với sự cải tiến vượt trội của kênh đầu tư và đặc
            quyền đầu tư tại UPS chính là động lực thúc đẩy, giúp hành trình đầu
            tư trở nên đầy hứng khởi: đơn giản và hiệu quả. 
          </p>
          <div class="flex gap-4 flex-wrap">
            <nuxt-link to="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info" class="btn active group">
              <span class="text-sm 3xl:text-lg"> Mở tài khoản ngay </span>
              <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                <i class="w-full h-full group-hover:inline-flex hidden absolute">
                  <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                </i>

                <i class="w-full h-full group-hover:hidden inline-flex absolute">
                  <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                </i>
              </div>
            </nuxt-link>

            <nuxt-link to="/hdsd#co-phieu-HY"
              class="btn h-8 2xl:h-12 px-4 2xl:px-5 inline-flex gap-3 items-center rounded-full border lg:border-transparent border-[#222] hover:border-[#222]">
              <span class="text-sm 3xl:text-lg font-bold">
                Hướng dẫn giao dịch
              </span>
              <div class="inline-flex gap-1 w-3 2xl:w-4 h-3 2xl:h-4 overflow-hidden relative">
                <i class="w-full h-full inline-flex absolute">
                  <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                </i>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="flex items-center xl:my-[40px] md:mt-[32px] sm:mt-[24px] ">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path
                d="M36.833 5.26367H15.1663C8.66634 5.26367 4.33301 9.59701 4.33301 16.097V29.097C4.33301 35.597 8.66634 39.9303 15.1663 39.9303V44.5453C15.1663 46.2787 17.0947 47.3187 18.5247 46.3437L28.1663 39.9303H36.833C43.333 39.9303 47.6663 35.597 47.6663 29.097V16.097C47.6663 9.59701 43.333 5.26367 36.833 5.26367ZM25.9997 31.632C25.0897 31.632 24.3747 30.8953 24.3747 30.007C24.3747 29.1187 25.0897 28.382 25.9997 28.382C26.9097 28.382 27.6247 29.1187 27.6247 30.007C27.6247 30.8953 26.9097 31.632 25.9997 31.632ZM28.7297 22.6403C27.8847 23.2037 27.6247 23.572 27.6247 24.1787V24.6337C27.6247 25.522 26.888 26.2587 25.9997 26.2587C25.1113 26.2587 24.3747 25.522 24.3747 24.6337V24.1787C24.3747 21.6653 26.2163 20.4303 26.9097 19.9537C27.7113 19.412 27.9713 19.0437 27.9713 18.4803C27.9713 17.397 27.083 16.5087 25.9997 16.5087C24.9163 16.5087 24.028 17.397 24.028 18.4803C24.028 19.3687 23.2913 20.1053 22.403 20.1053C21.5147 20.1053 20.778 19.3687 20.778 18.4803C20.778 15.5987 23.118 13.2587 25.9997 13.2587C28.8813 13.2587 31.2213 15.5987 31.2213 18.4803C31.2213 20.9503 29.4013 22.1853 28.7297 22.6403Z"
                fill="#755CF6" />
            </svg>
          </i>
          <div class="border-l pl-[32px] ml-[32px]">
            <p
              class="text-[#838383] font-HG 3xl:text-[18px] sm:text-[14px] font-medium 3xl:leading-[28px] 2xl:leading-[20px]">
              Cổ phiếu là chứng chỉ do công ty cổ phần phát hành, bút toán ghi
              sổ hoặc dữ liệu điện tử xác nhận quyền sở hữu một hoặc một số cổ
              phần của công ty đó. Người mua cổ phiếu sẽ trở thành cổ đông của
              công ty phát hành. 
            </p>
          </div>
        </div>
      </div>
      <!-- cột phải của banner -->
      <div class="2xl:w-[55%] lg:w-1/2 w-full">
        <div class="flex justify-end w-full">
          <div
            class="relative 3xl:w-[664px] 3xl:h-[336px] 2xl:w-[450px] 2xl:h-[225px] xl:w-[375px] xl:h-[200px] lg:w-[320px] lg:h-[171px] md:w-[440px] md:h-[230px] sm:w-[222px] sm:h-[116px] ">
            <nuxt-img loading="lazy" alt="UPS" src="/images/banner-co-phieu.png"
              class="absolute w-full h-full object-cover 3xl:rounded-[40px] md:rounded-[20px] sm:rounded-[12px]" />
          </div>
        </div>
        <div class="flex mt-[24px] gap-[24px] justify-end w-full xl:mt-3">
          <div
            class="flex flex-col justify-end 3xl:gap-[24px] 2xl:gap-4 items-end xl:w-1/2 lg:gap-3 md:justify-between sm:gap-[10px]">
            <div
              class="3xl:p-[60px] 2xl:p-10 lg:p-8  2xl:rounded-[40px] bg-[linear-gradient(315deg,#14FFD4_3.8%,#755CF6_85.1%)] flex items-center justify-center flex-col md:rounded-[20px] md:p-10 sm:p-4 sm:rounded-[12px]">
              <p
                class="text-white font-BG 3xl:text-[32px] 2xl:text-[20px] xl:text-[18px] md:text-[22px] sm:text-[12px] font-bold leading-normal">
                Mở tài khoản eKYC
              </p>
              <div class="flex gap-[12px] items-baseline 3xl:mt-[24px]">
                <p
                  class="text-white font-BG 3xl:text-[24px] 2xl:text-[16px] xl:text-[14px] md:text-[16px] sm:text-[10px] font-bold leading-none">
                  chỉ với
                </p>
                <p
                  class="text-white font-BG 3xl:text-[60px] 2xl:text-[40px] xl:text-[32px] md:text-[38px] sm:text-[20px] font-bold leading-none">
                  30 giây
                </p>
              </div>
            </div>
            <div
              class="w-[48px] h-[48px] xl:w-[80px] xl:h-[80px] 2xl:w-[96px] 2xl:h-[96px] md:w-[93px] md:h-[93px] inline-flex items-center justify-center bg-[#15171E] 2xl:rounded-[32px] 3xl:rounded-[40px] md:rounded-[20px] lg:rounded-lg animate-about__item sm:rounded-md">
              <div class="w-5 h-5 xl:w-[48px] xl:h-[48px] relative inline-flex">
                <nuxt-img format="webp" loading="lazy" height="48" alt="UPS" src="/logo/logo-row.png"
                  class="animate-about__item absolute w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <div class="flex justify-end sm:w-1/2">
            <div
              class="relative w-full 3xl:h-[407px] 3xl:w-[443px] 2xl:h-[258px] xl:w-[260px] xl:h-[211px] lg:w-[223px] lg:h-[185px] md:w-[353px] md:h-[256px] sm:h-[117px]">
              <nuxt-img loading="lazy" alt="UPS" src="/images/images-2-co-phieu.png"
                class="absolute w-full h-full object-cover 2xl:rounded-[40px] md:rounded-[20px] sm:rounded-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- lợi ích cổ phiếu -->
  <div
    class="rounded-tl-[200px] xl:rounded-tl-[160px] lg:rounded-tl-[120px] md:rounded-tl-[100px] sm:rounded-tl-[60px] bg-[linear-gradient(333deg,#14FFD4_5.41%,#755CF6_87.8%)]  3xl:px-[160px] 3xl:py-[120px] 2xl:px-[120px] 2xl:py-[80px] lg:p-[60px] flex items-center flex-col 2xl:gap-[60px] mx-auto xl:px-[100px] xl:py-[60px] lg:gap-10 md:px-[60px] md:py-10 md:gap-[28px] sm:px-6 sm:py-8 sm:gap-6">
    <div class="text-center flex items-center justify-center 2xl:gap-6 xl:gap-5 flex-col md:gap-4">
      <div
        class="animate-about__item inline-flex items-center justify-center relative w-[100px] h-[45px] xl:w-[120px] xl:h-[52px] 2xl:w-[138px] 2xl:h-[60px]">
        <nuxt-img format="webp" loading="lazy" width="173" height="78" alt="UPS" src="/logo/logo-cap-light.png"
          class="absolute w-full h-full object-contain" />
      </div>
      <div
        class="flex flex-col items-center justify-center 2xl:gap-3 3xl:max-w-[900px] 2xl:max-w-[700px] lg:max-w-[600px] xl:gap-3">
        <h1
          class="text-[#fff] font-BG 3xl:text-[60px] 2xl:text-[45px] font-bold leading-normal xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[20px]">
          Lợi ích khi giao dịch cổ phiếu
        </h1>
        <p
          class="text-white/80 text-center font-HG 3xl:text-[20px] 2xl:text-[16px] sm:text-[14px] font-medium leading-normal  ">
          Thị trường chứng khoán luôn biến động, tạo ra nhiều cơ hội giao dịch
          linh hoạt, giúp nhà đầu tư chủ động điều chỉnh danh mục đầu tư. Bạn có
          thể dễ dàng mua bán cổ phiếu bất kỳ lúc nào, phù hợp với nhiều mục
          tiêu tài chính khác nhau
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-3 2xl:gap-[40px] lg:gap-[24px] md:gap-4 sm:grid-cols-1 sm:gap-3">
      <div
        class="bg-[url('/images/card-1-bieu-phi.png')] 3xl:h-[380px] lg:h-[250px] md:h-[220px] sm:h-[206px] bg-cover bg-center xl:rounded-[24px] sm:rounded-[16px]">
        <div class="flex flex-col justify-between xl:p-[40px] h-full lg:p-6 md:p-5 sm:p-6">
          <div class="flex items-center gap-[12px]">
            <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M14.3351 22.4785V25.1852C14.3351 27.4786 12.2018 29.3319 9.57511 29.3319C6.94845 29.3319 4.80176 27.4786 4.80176 25.1852V22.4785C4.80176 24.7718 6.93511 26.3985 9.57511 26.3985C12.2018 26.3985 14.3351 24.7585 14.3351 22.4785Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M14.3328 18.813C14.3328 19.4797 14.1461 20.093 13.8261 20.6263C13.0394 21.9196 11.4261 22.733 9.55941 22.733C7.69274 22.733 6.07939 21.9063 5.29272 20.6263C4.97272 20.093 4.78613 19.4797 4.78613 18.813C4.78613 17.6663 5.31944 16.6397 6.17277 15.893C7.03944 15.133 8.22606 14.6797 9.54606 14.6797C10.8661 14.6797 12.0528 15.1463 12.9194 15.893C13.7994 16.6263 14.3328 17.6663 14.3328 18.813Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M14.3351 18.8127V22.4793C14.3351 24.7727 12.2018 26.3993 9.57511 26.3993C6.94845 26.3993 4.80176 24.7593 4.80176 22.4793V18.8127C4.80176 16.5193 6.93511 14.666 9.57511 14.666C10.8951 14.666 12.0818 15.1326 12.9485 15.8793C13.8018 16.626 14.3351 17.666 14.3351 18.8127Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M29.3339 14.6256V17.3723C29.3339 18.1056 28.7473 18.7056 28.0006 18.7323H25.3872C23.9472 18.7323 22.6273 17.6789 22.5073 16.2389C22.4273 15.3989 22.7473 14.6123 23.3073 14.0656C23.8006 13.5589 24.4806 13.2656 25.2273 13.2656H28.0006C28.7473 13.2923 29.3339 13.8922 29.3339 14.6256Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M2.66699 13.9993V11.3327C2.66699 7.70602 4.85366 5.17268 8.25366 4.74601C8.60033 4.69268 8.96033 4.66602 9.33366 4.66602H21.3337C21.6803 4.66602 22.0137 4.67933 22.3337 4.73267C25.7737 5.13267 28.0003 7.67935 28.0003 11.3327V13.266H25.227C24.4803 13.266 23.8003 13.5593 23.307 14.066C22.747 14.6127 22.427 15.3993 22.507 16.2393C22.627 17.6793 23.947 18.7327 25.387 18.7327H28.0003V20.666C28.0003 24.666 25.3337 27.3327 21.3337 27.3327H18.0003"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></i>
            <p
              class="text-white font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[14px] font-semibold leading-normal">
              Tối ưu chi phí
            </p>
          </div>
          <div class="pt-[24px] flex items-start gap-3 flex-col">
            <div class="w-[100px] h-[1px] bg-white"></div>
            <p class="text-white font-HG 2xl:text-[16px] lg:text-[14px] font-medium leading-normal ">
              Các chương trình ưu đãi phí tại UPS giúp bạn yên tâm đầu tư,
              giảm thiểu chi phí giao dịch.
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-[url('/images/card-2-bieu-phi.png')] 3xl:h-[380px] lg:h-[250px] md:h-[220px] sm:h-[206px] bg-cover bg-center xl:rounded-[24px]  sm:rounded-[16px]">
        <div class="flex flex-col justify-between xl:p-[40px] h-full lg:p-6 md:p-5 sm:p-6">
          <div class="flex items-center gap-[12px]">
            <i><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path
                  d="M8.5343 22.666H24.7876C27.321 22.666 28.6543 21.3327 28.6543 18.7994V2.66602H4.6543V18.7994C4.66763 21.3327 6.00097 22.666 8.5343 22.666Z"
                  stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M3.33398 2.66602H30.0007" stroke="white" stroke-width="2" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.334 29.3327L16.6673 26.666V22.666" stroke="white" stroke-width="2" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.0003 29.3327L16.667 26.666" stroke="white" stroke-width="2" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M10.667 14.666L14.867 11.1593C15.2003 10.8793 15.6403 10.9593 15.867 11.3327L17.467 13.9993C17.6937 14.3727 18.1337 14.4394 18.467 14.1727L22.667 10.666"
                  stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg></i>
            <p
              class="text-white font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[16px] font-semibold leading-normal">
              Công cụ phân tích mạnh mẽ
            </p>
          </div>
          <div class="pt-[24px] flex items-start gap-3 flex-col">
            <div class="w-[100px] h-[1px] bg-white"></div>
            <p class="text-white font-HG 2xl:text-[16px] md:text-[14px] font-medium leading-normal ">
              Công cụ phân tích thị trường và cổ phiếu từ UPS giúp bạn đưa ra
              quyết định đầu tư thông minh hơn.
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-[url('/images/card-2-bieu-phi.png')] 3xl:h-[380px] lg:h-[250px] md:h-[220px] sm:h-[206px] bg-cover bg-center xl:rounded-[24px]  sm:rounded-[16px]">
        <div class="flex flex-col justify-between xl:p-[40px] h-full lg:p-6 md:p-5 sm:p-6">
          <div class="flex items-center gap-[12px]">
            <i><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path
                  d="M12.5454 14.4927C12.4121 14.4793 12.2521 14.4793 12.1054 14.4927C8.93211 14.386 6.41211 11.786 6.41211 8.58602C6.41211 5.31935 9.05211 2.66602 12.3321 2.66602C15.5988 2.66602 18.2521 5.31935 18.2521 8.58602C18.2388 11.786 15.7188 14.386 12.5454 14.4927Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M22.2134 5.33398C24.8 5.33398 26.88 7.42732 26.88 10.0007C26.88 12.5207 24.88 14.574 22.3867 14.6673C22.28 14.654 22.16 14.654 22.04 14.6673"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M5.87898 19.414C2.65232 21.574 2.65232 25.094 5.87898 27.2407C9.54565 29.694 15.559 29.694 19.2257 27.2407C22.4523 25.0807 22.4523 21.5607 19.2257 19.414C15.5723 16.974 9.55898 16.974 5.87898 19.414Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M24.7861 26.666C25.7461 26.466 26.6528 26.0793 27.3995 25.506C29.4795 23.946 29.4795 21.3727 27.3995 19.8127C26.6661 19.2527 25.7728 18.8793 24.8261 18.666"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></i>
            <p
              class="text-white font-BG 3xl:text-[28px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[16px] font-semibold leading-normal">
              Đội ngũ chuyên gia
            </p>
          </div>
          <div class="pt-[24px] flex items-start gap-3 flex-col">
            <div class="w-[100px] h-[1px] bg-white"></div>
            <p class="text-white font-HG 2xl:text-[16px] md:text-[14px] font-medium leading-normal ">
              Được tư vấn từ chuyên gia chứng khoán từ đội ngũ trung tâm phân
              tích với nhiều năm kinh nghiệm trong lĩnh vực tài chính.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bieu phi giao dich -->
  <div class="container">
    <div
      class="flex sm:flex-col lg:flex-row 3xl:py-[160px] 3xl:px-[80px] items-center xl:gap-[80px] 2xl:px-[120px] 2xl:py-[80px] xl:px-[100px] xl:py-[60px] lg:p-[60px] lg:gap-[60px] md:px-[60px] md:py-[40px] md:gap-10 sm:py-8 sm:px-6 sm:gap-6">
      <div
        class="relative  3xl:h-[440px] 2xl:h-[400px] xl:h-[320px] lg:h-[250px] lg:w-1/2 sm:w-full md:h-[280px] sm:h-[180px]">
        <nuxt-img loading="lazy" alt="UPS" src="/images/bieu-phi-co-phieu.png"
          class="absolute w-full h-full  rounded-[24px]" />
      </div>
      <div class="flex items-start lg:gap-10 flex-col lg:w-1/2 md:w-full  md:px-4 lg:px-0 sm:gap-6">
        <div class="flex flex-col items-start gap-3">
          <h3
            class="text-[#15171E] font-BG 3xl:text-[60px] xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[20px] font-semibold leading-normal">
            Biểu phí giao dịch
          </h3>
          <p
            class="text-[#15171E] font-HG 3xl:text-[20px] md:text-[16px] font-medium xl:leading-[30px] lg:leading-[24px] sm:text-[14px]">
            Khám phá biểu phí giao dịch và chương trình phí ưu đãi hấp dẫn tại UPS
            tại đây
          </p>
        </div>
        <div class="flex 3xl:gap-4 2xl:gap-2 flex-wrap w-full md:gap-4 sm:gap-[10px]">
          <nuxt-link to="/bieu-phi" class="btn active group">
            <span class="text-sm 3xl:text-lg"> Xem chi tiết</span>
            <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
              <i class="w-full h-full group-hover:inline-flex hidden absolute">
                <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
              </i>

              <i class="w-full h-full group-hover:hidden inline-flex absolute">
                <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
              </i>
            </div>
          </nuxt-link>

          <nuxt-link to="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info"
            class="btn h-8 2xl:h-12 px-4 2xl:px-5 inline-flex gap-3 items-center rounded-full border lg:border-transparent border-[#222] hover:border-[#222]">
            <span class="text-sm 3xl:text-lg font-bold">
              Mở tài khoản ngay
            </span>
            <div class="inline-flex gap-1 w-3 2xl:w-4 h-3 2xl:h-4 overflow-hidden relative">
              <i class="w-full h-full inline-flex absolute">
                <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
              </i>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <!-- co the ban quan tam -->
  <div class="layout">
    <div class="flex xl:gap-[80px] lg:gap-10 2xl:px-[80px] xl:px-8 items-center lg:flex-row sm:flex-col sm:gap-6">
      <div class="3xl:w-[500px] lg:w-[400px] sm:w-full">
        <h4 class="3xl:text-[40px] lg:text-[32px] md:text-[28px] font-semibold leading-normal text-[#15171E] font-BG">
          Có thể <br />
          bạn quan tâm
        </h4>
      </div>
      <div class="grid grid-cols-2 md:gap-[24px] w-full sm:gap-3">
        <div class="group">
          <div
            class="relative xl:rounded-[24px] md:rounded-[16px] group-hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.60)_100%),url('/images/uu-dai.png')] border border-[#C8C8D2] bg-cover bg-no-repeat bg-bottom xl:h-[200px] 2xl:h-[260px] xl:p-[32px] md:p-6 md:h-[160px] flex flex-col justify-between sm:h-[100px] sm:p-3 sm:rounded-[12px]">
            <div class="flex justify-end">
              <div
                class="xl:w-[48px] xl:h-[48px] bg-[#14FFD4] rounded-full flex items-center justify-center sm:w-[15px] sm:h-[15px]">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    class="group-hover:text-[#000] sm:w-2 sm:h-2 md:w-full md:h-full">
                    <path
                      d="M15.9915 0.850053C15.9915 0.38473 15.6143 0.00751194 15.149 0.00751223L7.56611 0.00751253C7.10079 0.00751219 6.72357 0.384731 6.72357 0.850052C6.72357 1.31537 7.10079 1.69259 7.56611 1.69259L14.3064 1.69259L14.3064 8.43292C14.3064 8.89824 14.6836 9.27546 15.149 9.27546C15.6143 9.27546 15.9915 8.89824 15.9915 8.43292L15.9915 0.850053ZM1.44635 15.7442L15.7447 1.44582L14.5532 0.254287L0.25482 14.5527L1.44635 15.7442Z"
                      fill="black" />
                  </svg>
                </i>
              </div>
            </div>
            <h5
              class="3xl:text-[40px] 2xl:text-[32px] md:text-[24px] sm:text-[14px] font-semibold leading-normal text-[#15171E] group-hover:text-white font-BG">
              Ưu đãi
            </h5>
    
          </div>
        </div>
        <div class="group">
          <div
            class="relative xl:rounded-[24px] md:rounded-[16px] group-hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.60)_100%),url('/images/hd.png')] border border-[#C8C8D2] bg-cover bg-no-repeat bg-bottom xl:h-[200px] 2xl:h-[260px] p-[32px] md:p-6 md:h-[160px] flex flex-col justify-between sm:h-[100px] sm:p-3 sm:rounded-[12px]">
            <div class="flex justify-end">
              <div
                class="xl:w-[48px] xl:h-[48px] bg-[#14FFD4] rounded-full flex items-center justify-center sm:w-[15px] sm:h-[15px]">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    class="group-hover:text-[#000] sm:w-2 sm:h-2 md:w-full md:h-full">
                    <path
                      d="M15.9915 0.850053C15.9915 0.38473 15.6143 0.00751194 15.149 0.00751223L7.56611 0.00751253C7.10079 0.00751219 6.72357 0.384731 6.72357 0.850052C6.72357 1.31537 7.10079 1.69259 7.56611 1.69259L14.3064 1.69259L14.3064 8.43292C14.3064 8.89824 14.6836 9.27546 15.149 9.27546C15.6143 9.27546 15.9915 8.89824 15.9915 8.43292L15.9915 0.850053ZM1.44635 15.7442L15.7447 1.44582L14.5532 0.254287L0.25482 14.5527L1.44635 15.7442Z"
                      fill="black" />
                  </svg>
                </i>
              </div>
            </div>
            <h5
              class="3xl:text-[40px] 2xl:text-[32px] md:text-[24px] sm:text-[14px] font-semibold leading-normal text-[#15171E] group-hover:text-white font-BG">
              Hướng dẫn<br />
              sử dụng
            </h5>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-[80px] mb-[100px]">
    <feedback />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Feedback from "~/components/common/feedback/index.vue";
export default defineComponent({
  name: "co-phieu",
  components: {
    Feedback,
  },
});
</script>
