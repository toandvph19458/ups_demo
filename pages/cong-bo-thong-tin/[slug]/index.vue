<template>
    <div class="container">
      <div class="flex justify-center text-center mt-[100px]">
        <div
          class="inline-flex relative w-[200px] h-[70px] xl:w-[220px] xl:h-[70px]"
        >
          <nuxt-img
            loading="lazy"
            alt="UPS"
            src="/logo/logo-cap-dark.png"
            width="220"
            height="100"
            class="link absolute w-full h-full object-contain"
          />
        </div>
      </div>
      <div class="text-center mt-[30px] mb-[20px]">
        <h3
          class="text-[#15171E] font-bricolage-grotesque xl:text-[50px] font-semibold leading-normal text-[24px]"
        >
          {{ data && data.newDetail.title }}
        </h3>
      </div>
      <div class="flex gap-2 text-center justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-[16px] h-[16px] xl:w-[24px] xl:h-[24px]"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
            stroke="#7F8494"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6.5V12.5L16 14.5"
            stroke="#7F8494"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p
          class="text-[#7F8494] font-hanken-grotesk xl:text-[24px] font-semibold leading-normals text-[14px]"
        >
          15/08/2024 - 22:20
        </p>
      </div>
      <!-- <div class="flex justify-center text-center xl:my-[80px] my-[30px]">
        <div
          class="inline-flex relative w-[327px] h-[208px] lg:w-[445px] lg:h-[208px] xl:w-[1600px] xl:h-[700px]"
        >
          <nuxt-img
            loading="lazy"
            alt="UPS"
            src={{data && data.newDnewDetail.thumnail}}
            width="1600"
            height="700"
            class="link absolute w-full h-full object-cover"
          />
        </div>
      </div> -->
      <div class="xl:w-[1200px] w-full flex justify-center mx-auto">
        <div
          class="w-[327px] xl:w-[1200px] xl:flex lg:flex block justify-center gap-[28px]"
        >
          <div class="text-left xl:w-[70%] lg:w-[70%] w-full">
            <!-- <p class="text-[#696B75] text-[18px] font-normal leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div class="my-[20px] xl:w-full w-[327px]">
              <iframe
                class="xl:w-[800px] xl:h-[513px] w-[327px] h-auto"
                src="https://www.youtube.com/embed/QLzIlSj-UDo?si=ZwkUOgpPJJ6PHJRn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div class="">
              <h5
                class="text-[#15171E] text-[24px] font-semibold leading-[20px] mb-[10px]"
              >
                Lorem ipsum dolor sit amet
              </h5>
              <p class="text-[#696B75] text-[18px] font-normal leading-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div> -->
          <div v-html="data?.newDetail.content">
  
          </div>
            <div class="my-[30px]">
              <Comment />
            </div>
            <p
              class="text-center text-[#535662] font-hanken-grotesk text-[16px] font-medium leading-normal mb-[80px]"
            >
              Cập nhật mới nhất: 20/08/2024
            </p>
          </div>
          <div class="xl:w-[30%] lg:w-[30%] w-full">
            <h4
              class="text-[#15171E] font-bricolage-grotesque text-[16px] font-semibold leading-[20px]"
            >
              Thẻ bài viết
            </h4>
            <ul class="my-[24px]">
              <li class="border-b py-[8px]">
                <a
                  href=""
                  class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
                  >Biến động thị trường</a
                >
              </li>
              <li class="border-b py-[8px]">
                <a
                  class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
                  href=""
                  >Báo cáo ngày</a
                >
              </li>
              <li class="border-b py-[8px]">
                <a
                  class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
                  href=""
                  >Phân tích từ UPS</a
                >
              </li>
              <li class="border-b py-[8px]">
                <a
                  class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
                  href=""
                  >Sản phẩm đầu tư mới</a
                >
              </li>
              <li class="border-b py-[8px]">
                <a
                  class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
                  href=""
                  >Về UPS</a
                >
              </li>
              <li class="border-b py-[8px]">
                <a
                  class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
                  href=""
                  >Sự kiện doanh nghiệp</a
                >
              </li>
              <li class="border-b py-[8px]">
                <a
                  class="text-center text-[#15171E] font-hanken-grotesk text-[12px] font-semibold leading-normal"
                  href=""
                  >Nội bộ UPS</a
                >
              </li>
            </ul>
            <div
              class="my-[40px] rounded-[10px] border border-[#C1C7DD] bg-[#F3F5FB] p-[16px]"
            >
              <h5
                class="text-[#15171E] font-hanken-grotesk text-[16px] font-bold leading-normal mb-[8px]"
              >
                Tôi muốn đọc<br />
                nhiều hơn
              </h5>
              <p
                class="text-[#535662] font-hanken-grotesk text-[14px] font-medium leading-normal"
              >
                Đăng ký nhận thêm các hưỡng dẫn giao dịch tuyệt vời từ UPS qua
                email của bạn
              </p>
              <form action="">
                <input
                  type="text"
                  class="rounded-[8px] bg-[#ECEEF4] backdrop-blur-[20px] py-[8px] px-[10px] my-[16px] w-full"
                  placeholder="abc@email.com"
                  required
                />
                <div class="hidden xl:inline-flex">
                  <nuxt-link to="/" class="btn active group">
                    <span> Mở tài khoản ngay </span>
                    <div
                      class="inline-flex gap-1 w-4 h-4 overflow-hidden relative"
                    >
                      <i
                        class="w-full h-full inline-flex absolute transition-all duration-300 translate-x-[-120%] group-hover:translate-x-0"
                      >
                        <nuxt-img
                          src="/icons/arrow-icon.svg"
                          loading="lazy"
                          width="16"
                          height="16"
                          alt="UPS"
                        />
                      </i>
  
                      <i
                        class="w-full h-full inline-flex absolute transition-all duration-300 translate-x-0 group-hover:translate-x-[120%]"
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
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- tin liên quan -->
      <div class="w-full xl:w-[1200px] mx-auto">
        <div class="">
          <div class="flex justify-between">
            <div
              class="animate-about__item inline-flex relative w-[100px] h-[45px] xl:w-[132px] xl:h-[60px]"
            >
              <nuxt-img
                format="webp"
                loading="lazy"
                height="78"
                alt="UPS"
                src="/logo/logo-cap-green.png"
                class="absolute w-full h-full object-contain"
              />
            </div>
          </div>
  
          <h2
            class="animate-about__item text-[36px] xl:text-[60px] font-bold font-BG"
          >
            Tin <span class="text-green-ups">liên quan</span>
          </h2>
        </div>
        <div class="my-[40px] grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div class="card">
            <div class="flex justify-center text-center">
              <div class="inline-flex relative w-full h-[288px]">
                <nuxt-img
                  loading="lazy"
                  alt="UPS"
                  src="/images/tin-tuc-01.png"
                  height="288"
                  class="link absolute w-full h-full object-cover rounded-[14px]"
                />
              </div>
            </div>
            <div class="flex justify-between items-center my-[24px]">
              <div
                class="tag text-[#F05] font-hanken-grotesk text-[18px] font-medium leading-normal"
              >
                #Hotnews
              </div>
              <div
                class="time text-[#9498A8] font-hanken-grotesk text-[18px] font-medium leading-normal"
              >
                5 phút trước
              </div>
            </div>
            <div class="">
              <h6
                class="text-[#15171E] font-hanken-grotesk text-[20px] font-semibold leading-normal"
              >
                Nội dung tin tức
              </h6>
              <p
                class="text-[#3C4052] font-hanken-grotesk text-[18px] font-medium leading-normal mt-[8px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>
          <div class="card">
            <div class="flex justify-center text-center">
              <div class="inline-flex relative w-full h-[288px]">
                <nuxt-img
                  loading="lazy"
                  alt="UPS"
                  src="/images/tin-tuc-01.png"
                  height="288"
                  class="link absolute w-full h-full object-cover rounded-[14px]"
                />
              </div>
            </div>
            <div class="flex justify-between items-center my-[24px]">
              <div
                class="tag text-[#F05] font-hanken-grotesk text-[18px] font-medium leading-normal"
              >
                #Hotnews
              </div>
              <div
                class="time text-[#9498A8] font-hanken-grotesk text-[18px] font-medium leading-normal"
              >
                5 phút trước
              </div>
            </div>
            <div class="">
              <h6
                class="text-[#15171E] font-hanken-grotesk text-[20px] font-semibold leading-normal"
              >
                Nội dung tin tức
              </h6>
              <p
                class="text-[#3C4052] font-hanken-grotesk text-[18px] font-medium leading-normal mt-[8px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>
          <div class="card">
            <div class="flex justify-center text-center">
              <div class="inline-flex relative w-full h-[288px]">
                <nuxt-img
                  loading="lazy"
                  alt="UPS"
                  src="/images/tin-tuc-01.png"
                  height="288"
                  class="link absolute w-full h-full object-cover rounded-[14px]"
                />
              </div>
            </div>
            <div class="flex justify-between items-center my-[24px]">
              <div
                class="tag text-[#F05] font-hanken-grotesk text-[18px] font-medium leading-normal"
              >
                #Hotnews
              </div>
              <div
                class="time text-[#9498A8] font-hanken-grotesk text-[18px] font-medium leading-normal"
              >
                5 phút trước
              </div>
            </div>
            <div class="">
              <h6
                class="text-[#15171E] font-hanken-grotesk text-[20px] font-semibold leading-normal"
              >
                Nội dung tin tức
              </h6>
              <p
                class="text-[#3C4052] font-hanken-grotesk text-[18px] font-medium leading-normal mt-[8px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import Comment from "~/components/common/comment/index.vue";
  import { useAnnounceStore } from "#imports";
  export default defineComponent({
    name: "chi-tiet-cong-bo",
    components: {
      Comment,
    },
    setup(props, ctx) {
      const route = useRoute();
      const newStore = useAnnounceStore();
  
      const { data } = useAsyncData("announce-detail", async () => {
        const dataDetail: any = await newStore.fnGetAnnounceDetail(
          route.params?.slug as string
        );
        console.log(dataDetail?.data?.data?.announce_by_id);
        return {
          newDetail: dataDetail?.data?.data?.announce_by_id?.raw_content,
        };
      });
  
  
      return {
        data,
      };
    },
  });
  </script>
  