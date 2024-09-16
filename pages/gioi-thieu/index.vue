<template>
  <div class="animate-about">
    <!-- SECTION ABOUT US -->
    <section class="container">
      <div class="pt-0 pb-10 md:py-8 xl:py-16">
        <div class="px-0 lg:px-10 xl:px-20">
          <div class="py-5 xl:py-14">
            <div class="flex justify-between">
              <div class="animate-about__item inline-flex relative w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]">
                <nuxt-img format="webp" loading="lazy" height="78" alt="UPS" src="/logo/logo-cap-green.png"
                  class="absolute w-full h-full object-contain" />
              </div>

              <!-- <div
                class="hidden w-[48px] h-[48px] xl:w-[90px] xl:h-[90px] md:inline-flex items-center justify-center bg-[#15171E] rounded-full animate-about__item">
                <div class="w-5 h-5 xl:w-10 xl:h-10 relative inline-flex">
                  <nuxt-img format="webp" loading="lazy" height="40" alt="UPS" src="/logo/logo-row.png"
                    class="animate-about__item absolute w-full h-full object-contain" />
                </div>
              </div> -->
            </div>

            <h2 class="animate-about__item text-[36px] xl:text-[64px] font-bold font-BG text-green-ups">
              Về chúng tôi
            </h2>

            <p
              class="animate-about__item max-w-full xl:max-w-[634px] text-sm lg:text-base xl:text-lg text-[#3C4052] font-medium mt-5 xl:mt-8">
              UPS không chỉ là một công ty chứng khoán thông thường, chúng tôi
              hướng đến mục tiêu trở thành một điểm tựa vững chắc khuyến khích
              người trẻ tự tin khám phá thế giới tài chính. Kết hợp công nghệ
              tiên tiến cùng tư duy liên tục đổi mới để tạo ra những sản phẩm,
              dịch vụ đầu tư đáp ứng sát sao nhu cầu, mong muốn của nhà đầu tư.
            </p>
          </div>
        </div>

        <div
          class="animate-about__item w-full h-[200px] md:h-[400px] xl:h-[700px] relative rounded-[18px] lg:rounded-[24px] overflow-hidden">
          <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wwOWbN09Kkc?si=jQVujZYq4CnmT01-"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="absolute w-full h-full"></iframe> -->
          <!-- <nuxt-img
            format="gif"
            src="/public/images/vechungtoi.gif"
            class="absolute object-cover w-full h-full"
          /> -->
          <img src="/public/images/vechungtoi.gif" alt="" class="absolute object-cover w-full h-full" />
        </div>
      </div>
    </section>

    <!-- SECTION VISION -->
    <section
      class="flex flex-col-reverse md:flex-row justify-end bg-[#1D1E22] rounded-es-[30px] rounded-ee-[30px] overflow-hidden relative border border-white bg-[url('/background/bg-gioi-thieu.png')] bg-no-repeat bg-cover">
      <div class="pt-5 md:pt-24 pr-4 pb-4 w-full md:w-[560px] xl:w-[1050px] h-[420px] md:h-[566px] xl:h-[960px]">
        <!-- <div
          class="animate-about__item relative w-full md:w-[560px] xl:w-[1050px] h-[420px] md:h-[566px] xl:h-[960px] 3xl:w-full 3xl:h-full">
          <nuxt-img format="webp" loading="lazy" alt="UPS" src="/background/bg-gioi-thieu.png"
            class="absolute w-full h-full object-contain" />
        </div> -->
      </div>

      <div
        class="relative md:absolute xl:absolute w-full h-max pt-6 md:pt-0 top-0 md:1/2 xl:top-1/2 left-0 right-0 translate-y-0 md:-translate-y-1/2 xl:-translate-y-1/2">
        <div class="container">
          <div class="mb-6 md:mb-[90px] xl:mb-[130px]">
            <!-- <div
              class="animate-about__item relative inline-flex items-center justify-center w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]">
              <nuxt-img format="webp" loading="lazy" height="78" alt="UPS" src="/logo/logo-cap-light.png"
                class="absolute w-full h-full object-contain" />
            </div> -->

            <h3 class="animate-about__item text-[32px] md:text-[40px] xl:text-[76px] text-green-ups font-bold font-BG">
              Tầm nhìn
            </h3>

            <p
              class="animate-about__item max-w-[685px] text-[14px] font-HG md:text-[16px] xl:text-[30px] text-[#15171E] font-semibold mt-6">
              Trở thành Công ty chứng khoán bán lẻ hàng đầu cung cấp các giải
              pháp tài chính đầu tư cá nhân dành cho thế hệ trẻ
            </p>
          </div>

          <div
            class="group animate-about__item max-w-full md:max-w-[400px] xl:max-w-[760px] px-6 md:px-8 xl:px-16 py-4 md:py-6 xl:py-12 ml-0 md:ml-[90px] rounded-[12px] lg:rounded-[20px] border-t border-r border-[#8CEE7D] bg-[rgba(44,48,58,0.2)] backdrop-blur-[10px] relative ">
            <h4 class="text-[28px] xl:text-[52px]  font-bold text-green-ups font-BG group-hover:text-green-500">
              Sứ mệnh
            </h4>
            <p
              class="mt-4 md:mt-6 xl:mt-8 text-sm md:text-base xl:text-[22px] text-[#15171E] font-normal leading-[34px] font-BG">
              Tạo ra không gian đầu tư độc đáo, mới mẻ tràn đầy hứng khởi, từ đó
              định hình lại cách nhà đầu tư tiếp cận và trải nghiệm đầu tư tài
              chính cá nhân.
            </p>

            <div class="absolute -top-10 right-6 flex items-center -rotate-[35deg] translate-x-full">
              <div class="w-[10px] h-[10px] rounded-full bg-[#8AEA7B]"></div>
              <div class="w-[150px] h-[1px] bg-[#BFF69E]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION VALUE -->
    <section class="container">
      <div
        class="flex gap-10 md:gap-[100px] xl:gap-[200px] flex-col md:flex-row xl:flex-row items-center py-10 md:pb-[200px] md:pt-0 xl:pt-0 xl:pb-[200px]">
        <div
          class="w-full max-w-full md:max-w-[200px] xl:max-w-[360px] flex gap-4 md:gap-0 xl:gap-0 flex-col items-center lg:items-start xl:items-start">
          <div
            class="animate-about__item inline-flex items-center justify-center relative w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]">
            <nuxt-img format="webp" loading="lazy" width="173" height="78" alt="UPS" src="/logo/logo-cap-dark.png"
              class="absolute w-full h-full object-contain" />
          </div>

          <div class="md:my-5 xl:my-10">
            <h3
              class="animate-about__item text-[20px] md:text-[32px] xl:text-[60px] text-[#000] text-center md:text-left xl:text-left font-bold font-BG">
              Giá trị cốt lõi
            </h3>

            <p
              class="animate-about__item max-w-[685px] text-sm xl:text-xl text-[#000] text-center md:text-left xl:text-left font-semibold">
              Những nguyên tắc cơ bản, những giá trị quan trọng mà UPS và các
              thành viên cam kết thực hiện
            </p>
          </div>

          <div class="animate-about__item inline-flex">
            <nuxt-link to="https://onboarding.upse.vn/index.html#/./open-account/check-info" class="btn active group">
              <span> Mở tài khoản ngay </span>
              <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                <i class="w-full h-full group-hover:inline-flex hidden absolute">
                  <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                </i>

                <i class="w-full h-full group-hover:hidden inline-flex absolute">
                  <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                </i>
              </div>
            </nuxt-link>
          </div>
        </div>

        <div class="flex-1 w-full grid gap-5 md-gap-0 xl:gap-0 grid-cols-2 md:flex xl:flex justify-center relative">
          <div class="hidden md:inline-flex xl:inline-flex -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="282" height="1075" viewBox="0 0 282 1075" fill="none">
              <!-- Paths -->
              <path id="path1"
                d="M281 1075L281 290.893C281 266.223 265.9 244.068 242.939 235.048L39.0609 154.952C16.0998 145.932 1.00001 123.777 1.00002 99.1074L1.00006 0"
                stroke="#02E56A" stroke-width="2" />
              <path id="path2"
                d="M281 1075L281 290.893C281 266.223 265.9 244.068 242.939 235.048L39.0609 154.952C16.0998 145.932 1.00001 123.777 1.00002 99.1074L1.00006 0"
                stroke="url(#paint0_radial_530_1358)" stroke-width="2" />
              <defs>
                <radialGradient id="paint0_radial_530_1358" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(271.5 652) rotate(45) scale(902.975 3572.28)">
                  <stop stop-color="#02E56A" />
                  <stop offset="1" stop-color="#0F281A" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div class="animate-about__item static md:absolute xl:absolute left-0 top-[260px] xl:top-[285px] w-full">
            <div
              class="flex flex-col items-center md:items-end xl:items-end max-w-full md:max-w-[234px] xl:max-w-[440px] relative">
              <div
                class="hidden md:flex xl:flex absolute top-8 -right-[88px] w-[18px] h-[18px] rounded-[36px] border-[4px] border-solid border-white bg-[#01C159] shadow-[0_0_28px_0_#00FF75]">
              </div>

              <div
                class="w-12 h-12 xl:w-[90px] xl:h-[90px] inline-flex items-center justify-center rounded-full bg-[#0AB157] shadow-[0_4px_36px_0_rgba(2,229,106,0.5)]">
                <div class="relative inline-flex w-6 h-6 xl:w-11 xl:h-11">
                  <nuxt-img format="webp" loading="lazy" width="44" height="44" alt="UPS" src="/about-us/value-01.svg"
                    class="absolute w-full h-full object-contain" />
                </div>
              </div>

              <h4
                class="text-[18px] xl:text-[32px] text-black text-center md:text-right xl:text-right font-bold font-BG mt-5">
                Tiên Phong
              </h4>
              <p class="text-sm xl:text-[18px] text-[#000] text-center md:text-right xl:text-right">
                Luôn dẫn đầu xu hướng, tạo ra sáng kiến giúp trải nghiệm đầu tư
                dễ dàng và thú vị.
              </p>
            </div>
          </div>

          <div class="animate-about__item static md:absolute xl:absolute left-0 top-[600px] w-full">
            <div
              class="flex flex-col items-center md:items-end xl:items-end max-w-full md:max-w-[234px] xl:max-w-[440px] relative">
              <div
                class="hidden md:flex xl:flex absolute top-8 -right-[88px] w-[18px] h-[18px] rounded-[36px] border-[4px] border-solid border-white bg-[#01C159]">
              </div>

              <div
                class="w-12 h-12 xl:w-[90px] xl:h-[90px] inline-flex items-center justify-center rounded-full bg-[#0AB157] shadow-[0_4px_36px_0_rgba(2,229,106,0.5)]">
                <div class="relative inline-flex w-6 h-6 xl:w-11 xl:h-11">
                  <nuxt-img format="webp" loading="lazy" width="44" height="44" alt="UPS" src="/about-us/value-03.svg"
                    class="absolute w-full h-full object-contain" />
                </div>
              </div>

              <h4
                class="text-[18px] xl:text-[32px] text-black text-center md:text-right xl:text-right font-bold font-BG mt-5">
                Giáo dục
              </h4>
              <p class="text-sm xl:text-[18px] text-[#000] text-center md:text-right xl:text-right">
                Chú trọng nâng cao kiến thức và kỹ năng đầu tư tài chính cho
                khách hàng.
              </p>
            </div>
          </div>

          <div class="animate-about__item static md:absolute xl:absolute left-0 top-[920px] w-full">
            <div
              class="flex flex-col items-center md:items-end xl:items-end max-w-full md:max-w-[234px] xl:max-w-[440px] relative">
              <div
                class="hidden md:flex xl:flex absolute top-8 -right-[88px] w-[18px] h-[18px] rounded-[36px] border-[4px] border-solid border-white bg-[#01C159]">
              </div>

              <div
                class="w-12 h-12 xl:w-[90px] xl:h-[90px] inline-flex items-center justify-center rounded-full bg-[#0AB157] shadow-[0_4px_36px_0_rgba(2,229,106,0.5)]">
                <div class="relative inline-flex w-6 h-6 xl:w-11 xl:h-11">
                  <nuxt-img format="webp" loading="lazy" width="44" height="44" alt="UPS" src="/about-us/value-04.svg"
                    class="absolute w-full h-full object-contain" />
                </div>
              </div>

              <h4
                class="text-[18px] xl:text-[32px] text-black text-center md:text-right xl:text-right font-bold font-BG mt-5">
                Tư duy hướng công nghệ
              </h4>
              <p class="text-sm xl:text-[18px] text-[#000] text-center md:text-right xl:text-right">
                Đặt lợi ích và trải nghiệm của khách hàng lên hàng đầu.
              </p>
            </div>
          </div>

          <div
            class="animate-about__item static md:absolute xl:absolute right-0 top-[285px] translate-y-0 md:translate-y-1/2 xl:translate-y-1/2 w-full flex justify-end">
            <div
              class="flex flex-col items-center md:items-start xl:items-start max-w-full md:max-w-[234px] xl:max-w-[440px] relative">
              <div
                class="hidden md:flex xl:flex absolute top-8 -left-[90px] w-[18px] h-[18px] rounded-[36px] border-[4px] border-solid border-white bg-[#01C159]">
              </div>

              <div
                class="w-12 h-12 xl:w-[90px] xl:h-[90px] inline-flex items-center justify-center rounded-full bg-[#0AB157] shadow-[0_4px_36px_0_rgba(2,229,106,0.5)]">
                <div class="relative inline-flex w-6 h-6 xl:w-11 xl:h-11">
                  <nuxt-img format="webp" loading="lazy" width="44" height="44" alt="UPS" src="/about-us/value-05.svg"
                    class="absolute w-full h-full object-contain" />
                </div>
              </div>

              <h4
                class="text-[18px] xl:text-[32px] text-black text-center md:text-right xl:text-right font-bold font-BG mt-5">
                Cởi mở & Đổi mới
              </h4>
              <p class="text-sm xl:text-[18px] text-[#000] text-center md:text-right xl:text-left">
                Liên tục cập nhật và đổi mới, mang lại sự tươi mới trong hoạt
                động và dịch vụ.
              </p>
            </div>
          </div>

          <div
            class="animate-about__item static md:absolute xl:absolute right-0 top-[600px] w-full translate-y-0 md:translate-y-1/2 xl:translate-y-1/2 flex justify-end">
            <div
              class="flex flex-col items-center md:items-start xl:items-start max-w-full md:max-w-[234px] xl:max-w-[440px] relative">
              <div
                class="hidden md:flex xl:flex absolute top-8 -left-[90px] w-[18px] h-[18px] rounded-[36px] border-[4px] border-solid border-white bg-[#01C159]">
              </div>

              <div
                class="w-12 h-12 xl:w-[90px] xl:h-[90px] inline-flex items-center justify-center rounded-full bg-[#0AB157] shadow-[0_4px_36px_0_rgba(2,229,106,0.5)]">
                <div class="relative inline-flex w-6 h-6 xl:w-11 xl:h-11">
                  <nuxt-img format="webp" loading="lazy" width="44" height="44" alt="UPS" src="/about-us/value-06.svg"
                    class="absolute w-full h-full object-contain" />
                </div>
              </div>

              <h4
                class="text-[18px] xl:text-[32px] text-black text-center md:text-right xl:text-right font-bold font-BG mt-5">
                Khách hàng là trung tâm
              </h4>
              <p class="text-sm xl:text-[18px] text-[#000] text-center md:text-left xl:text-left">
                Đặt lợi ích và trải nghiệm của khách hàng lên hàng đầu.
              </p>
            </div>
          </div>

          <div
            class="animate-about__item static md:absolute xl:absolute right-0 top-[920px] w-full translate-y-0 md:translate-y-1/2 xl:translate-y-1/2 flex justify-end">
            <div
              class="flex flex-col items-center md:items-start xl:items-start max-w-full md:max-w-[234px] xl:max-w-[440px] relative">
              <div
                class="hidden md:flex xl:flex absolute top-8 -left-[90px] w-[18px] h-[18px] rounded-[36px] border-[4px] border-solid border-white bg-[#01C159]">
              </div>

              <div
                class="w-12 h-12 xl:w-[90px] xl:h-[90px] inline-flex items-center justify-center rounded-full bg-[#0AB157] shadow-[0_4px_36px_0_rgba(2,229,106,0.5)]">
                <div class="relative inline-flex w-6 h-6 xl:w-11 xl:h-11">
                  <nuxt-img format="webp" loading="lazy" width="44" height="44" alt="UPS" src="/about-us/value-07.svg"
                    class="absolute w-full h-full object-contain" />
                </div>
              </div>

              <h4
                class="text-[18px] xl:text-[32px] text-black text-center md:text-right xl:text-right font-bold font-BG mt-5">
                Truyền cảm hứng
              </h4>
              <p class="text-sm xl:text-[18px] text-[#000] text-center md:text-left xl:text-left">
                Tối ưu hóa trải nghiệm người dùng, truyền cảm hứng về đầu tư tài
                chính cá nhân.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION EMPLOYEE -->
    <employee />

    <!-- SECTION ACHIEVEMENTS -->
    <!-- <section class="container">
      <div class="flex justify-center py-10 md:py-[80px] xl:py-[120px]">
        <div
          class="w-full lg:w-max xl:w-max flex md:inline-flex xl:inline-flex flex-col md:flex-row xl:flex-row gap-12 md:gap-[80px] xl:gap-[160px]">
          <div class="max-w-full md:max-w-[300px] xl:max-w-[380px]">
            <div
              class="animate-about__item inline-flex items-center justify-center relative w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]">
              <nuxt-img format="webp" loading="lazy" width="173" height="78" alt="UPS" src="/logo/logo-cap-dark.png"
                class="absolute w-full h-full object-contain" />
            </div>

            <h3 class="text-[32px] md:text-[40px] xl:text-[76px] font-BG font-semibold">
              <span class="text-black">Thành tựu</span>
              <br />
              <span class="text-green-ups">nổi bật</span>
            </h3>

            <p class="text-sm md:text-base xl:text-lg text-[#000] font-medium">
              Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu đầy tham vọng và tạo ra những
              giá trị lâu dài
            </p>
          </div>

          <div class="flex flex-col gap-12 md:gap-[80px] xl:gap-[100px]">
            <div class="">
              <h4
                class="text-[100px] md:text-[100px] xl:text-[200px] font-BG font-semibold bg-[linear-gradient(235deg,#02E56A_14.19%,#0AB157_92.84%)] bg-clip-text text-transparent leading-none">
                16k
              </h4>
              <p class="text-3 md:text-4 xl:mt-5 text-sm md:text-base xl:text-xl text-[#000] font-medium">
                Số người tham gia
              </p>
            </div>
            <div class="">
              <h4
                class="text-[100px] md:text-[100px] xl:text-[200px] font-BG font-semibold bg-[linear-gradient(235deg,#02E56A_14.19%,#0AB157_92.84%)] bg-clip-text text-transparent leading-none">
                107
              </h4>
              <p class="text-3 md:text-4 xl:mt-5 text-sm md:text-base xl:text-xl text-[#000] font-medium">
                Số người tham gia
              </p>
            </div>
            <div class="">
              <h4
                class="text-[100px] md:text-[100px] xl:text-[200px] font-BG font-semibold bg-[linear-gradient(235deg,#02E56A_14.19%,#0AB157_92.84%)] bg-clip-text text-transparent leading-none">
                3000+
              </h4>
              <p class="text-3 md:text-4 xl:mt-5 text-sm md:text-base xl:text-xl text-[#000] font-medium">
                Số người tham gia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- SECTION CHẶNG ĐƯỜNG PHÁT TRIỂN -->
    <section class="bg-[linear-gradient(81deg,#0E1F16_0.74%,#125933_87.97%)]">
      <div class="container">
        <div class="flex flex-col md:flex-row xl:flex-row py-10 md:py-[60px] xl:py-[100px]">
          <div class="">
            <div
              class="animate-about__item relative inline-flex items-center justify-center w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]">
              <nuxt-img format="webp" loading="lazy" height="78" alt="UPS" src="/logo/logo-cap-light.png"
                class="absolute w-full h-full object-contain" />
            </div>

            <h3 class="text-[32px] md:text-[40px] xl:text-[76px] font-BG font-semibold leading-tight">
              <span class="text-white">Chặng đường</span>
              <br />
              <span class="text-green-ups">phát triển</span>
            </h3>
          </div>

          <div
            class="ml-0 md:ml-[140px] xl:ml-[350px] mt-10 md:mt-0 flex flex-col gap-12 relative after:content-[''] after:absolute after:left-[6px] xl:after:left-[9px] after:bottom-[-40px] xl:after:bottom-[-100px] after:w-[1px] after:h-[calc(100%+40px)] xl:after:h-[calc(100%+100px)] after:bg-[#01C159]">
            <div class="flex group">
              <div :class="cn(
                'flex w-3 xl:w-[18px] h-3 xl:h-[18px] rounded-[4px] bg-[#01C159] group-hover:shadow-[0_0_32px_0_#00FF75]',
                {
                  '': 1 == 1,
                }
              )
                "></div>
              <div class="flex-1 ml-8 max-w-full md:max-w-[620px] xl:max-w-[620px]">
                <p
                  class="text-base md:text-[24px] xl:text-[40px] text-white font-BG font-semibold leading-[0.6] group-hover:text-[41px]">
                  2024
                </p>
                <h5 class="mt-4 text-sm md:text-base xl:text-lg text-white font-bold">
                  Thay đổi logo và hệ thống nhận diện mới
                </h5>
                <h5 class="mt-2 text-sm md:text-base xl:text-lg text-white font-bold">
                  Đổi tên thành Công ty CP Chứng khoán UP (UPS)
                </h5>

                <p class="mt-2 text-sm md:text-base xl:text-lg text-[rgba(255,255,255,0.79)] font-medium">
                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt -->
                </p>
              </div>
            </div>

            <div class="flex group">
              <div :class="cn(
                'flex w-3 xl:w-[18px] h-3 xl:h-[18px] rounded-[4px] bg-[#01C159] group-hover:shadow-[0_0_32px_0_#00FF75]',
                {
                  '': 1 == 1,
                }
              )
                "></div>
              <div class="flex-1 ml-8 max-w-full md:max-w-[620px] xl:max-w-[620px]">
                <p
                  class="text-base md:text-[24px] xl:text-[40px] text-white font-BG font-semibold leading-[0.6] group-hover:text-[41px]">
                  2009
                </p>
                <h5 class="mt-4 text-sm md:text-base xl:text-lg text-white font-bold">
                  Lọt vào TOP 5 những công ty chứng khoán có thị phần môi giới
                  lớn trên Sở Giao dịch chứng khoán Hà Nội
                </h5>

                <p class="mt-2 text-sm md:text-base xl:text-lg text-[rgba(255,255,255,0.79)] font-medium">
                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt -->
                </p>
              </div>
            </div>

            <div class="flex group">
              <div :class="cn(
                'flex w-3 xl:w-[18px] h-3 xl:h-[18px] rounded-[4px] bg-[#01C159] group-hover:shadow-[0_0_32px_0_#00FF75]',
                {
                  '': 1 == 1,
                }
              )
                "></div>
              <div class="flex-1 ml-8 max-w-full md:max-w-[620px] xl:max-w-[620px]">
                <p
                  class="text-base md:text-[24px] xl:text-[40px] text-white font-BG font-semibold leading-[0.6] group-hover:text-[41px]">
                  2007
                </p>
                <h5 class="mt-4 text-sm md:text-base xl:text-lg text-white font-bold">
                  Thành lập Chứng khoán Hoàng Gia (IRS)
                </h5>

                <p class="mt-2 text-sm md:text-base xl:text-lg text-[rgba(255,255,255,0.79)] font-medium">
                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- SECTION CHỨNG CHỈ VÀ GIẤY PHÉP -->
    <section class="container">
      <div class="flex md:hidden flex-col items-center">
        <div
          class="animate-about__item relative inline-flex items-center justify-center w-[100px] h-[45px] xl:w-[173px] xl:h-[78px]">
          <nuxt-img format="webp" loading="lazy" height="78" alt="UPS" src="/logo/logo-cap-dark.png"
            class="absolute w-full h-full object-contain" />
        </div>

        <h4 class="text-center text-[40px] font-semibold font-BG leading-tight">
          Chứng chỉ
          <span class="text-green-ups">và giấy phép</span>
        </h4>

        <p class="mt-4 text-center text-xs text-[#000] font-medium">
          Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu đầy tham
          vọng và tạo ra những giá trị lâu dài
        </p>
      </div>

      <div
        class="py-12 md:py-[80px] xl:pt-[160px] xl:pb-[140px] hidden md:grid gap-x-8 gap-y-8 xl:gap-x-10 xl:gap-y-16 grid-cols-3">
        <div class="w-full h-[210px] md:h-[210px] xl:h-[396px] rounded-[7px] md:rounded-[14px] overflow-hidden group">
          <nuxt-img format="webp" loading="lazy" alt="UPS" src="/images/97b76b3dc58b2d884e49c03137cd0fc7.png"
            class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
        </div>
        <div class="w-full h-[210px] md:h-[210px] xl:h-[396px] rounded-[7px] md:rounded-[14px] overflow-hidden group">
          <nuxt-img format="webp" loading="lazy" alt="UPS" src="/images/chung-chi-2.png"
            class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
        </div>
        <div
          class="w-full h-[210px] md:h-full xl:h-full rounded-[7px] md:flex flex-col items-end justify-end md:rounded-[14px] overflow-hidden group">
          <nuxt-img format="webp" loading="lazy" alt="UPS" width="130" height="60" src="/logo/logo-cap-dark.png" />

          <h4 class="text-right text-[40px] xl:text-[76px] font-semibold font-BG leading-tight">
            <span class="text-black">Chứng chỉ</span>
            <br />
            <span class="text-green-ups">và giấy phép</span>
          </h4>

          <p class="text-right text-xs md:text-lg text-[#000] font-medium">
            Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu đầy
            tham vọng và tạo ra những giá trị lâu dài
          </p>
          <div class="animate-about__item inline-flex my-6">
            <nuxt-link target="_blank" to="http://api.upse.vn/assets/d0ddc150-6ab3-40d3-9996-eba9abe8800b"
              class="btn active group">
              <span> Xem tại đây </span>
              <div class="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                <i class="w-full h-full group-hover:inline-flex hidden absolute">
                  <nuxt-img src="/icons/arrow-dark-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                </i>

                <i class="w-full h-full group-hover:hidden inline-flex absolute">
                  <nuxt-img src="/icons/arrow-icon.svg" loading="lazy" width="16" height="16" alt="UPS" />
                </i>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="block md:hidden py-8">
        <swiper :modules="[SwiperNavigation]" :pagination="true" :slides-per-view="1.2" :loop="false" :speed="800"
          :space-between="12" :breakpoints="{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }">
          <swiper-slide v-for="i in 5" :key="i">
            <div
              class="w-full h-[210px] md:h-[210px] xl:h-[396px] rounded-[7px] md:rounded-[14px] overflow-hidden group">
              <nuxt-img format="webp" loading="lazy" alt="UPS" src="/images/97b76b3dc58b2d884e49c03137cd0fc7.png"
                class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Employee from "~/components/about-us/employee/index.vue";
import { SwiperAutoplay, SwiperNavigation } from "#imports";
import { cn } from "~/lib/utils";

export default defineComponent({
  name: "gioi-thieu",
  components: {
    Employee,
  },
  setup(props, ctx) {
    onMounted(() => {
      const animateUpsEl = document.querySelectorAll(".animate-about");

      animateUpsEl.forEach((el) => {
        const upsEl = el.querySelectorAll(".animate-about__item");
        useGsap.fromTo(
          upsEl,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power1.out",
            stagger: {
              from: 0,
              axis: "x",
              amount: 0.5,
            },
            scrollTrigger: {
              trigger: el,
              start: "top center",
              end: "bottom center",
              scrub: false,
            },
          }
        );
      });
    });

    return {
      cn,
      SwiperNavigation,
    };
  },
});
</script>

<style></style>
