<template>
  <section class="animate-ups mb-[100px] md:mb-[180px] xl:mb-[230px]">
    <div class="bg-custom">
      <div class="container">
        <div
          class="w-full h-full grid grid-cols-1 md:grid-rows-2 lg:grid-rows-none lg:grid-cols-12 gap-10 md:gap-0 lg:gap-12 xl:gap-10 3xl:gap-[56px]">
          <div class="col-span-6 xl:col-span-5 order-2 lg:order-1 h-full pt-4 md:pt-0 lg:pt-16">
            <div class="relative w-full h-full">
              <div class="flex flex-col justify-start h-full gap-28">
                <h3
                  class="hidden lg:block w-[90%] 3xl:w-[80%] animate-ups__item bg-[linear-gradient(100deg,rgba(255,255,255,0.47)_-0.85%,rgba(255,255,255,0.79)_49.77%,rgba(255,255,255,0)_101.25%)] bg-clip-text text-transparent font-BG text-[20px] xl:text-[26px] 2xl:text-[30px] font-semibold leading-normal">
                  <span class="text-[#02E56A] text-[32px] xl:text-[40px] 2xl:text-[44px] 3xl:text-6xl">UPS</span>
                  cung cấp cho bạn các dịch vụ và đội ngũ tốt nhất, hiện đại
                  nhất thị trường
                </h3>

                <div class="flex-grow h-[200px] lg:h-full">
                  <div class="relative w-full h-full overflow-hidden">
                    <div
                      class="w-full md:w-[70%] lg:w-full absolute top-[25%] md:top-[50%] lg:top-[15%] 3xl:top-[40%] left-1/2 -translate-x-1/2 pt-[100%] rounded-full bg-gradient-to-b from-[#02E56A] from-0% to-[rgba(0,0,0,0.1)] to-[35%] md:to-[20%] lg:to-[26%] xl:to-[30%] 3xl:to-[32%]">
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="absolute top-[-36%] md:top-[15%] lg:top-[32%] xl:top-[40%] 2xl:top-[42%] 3xl:top-[42%] left-1/2 -translate-x-1/2 w-1/2 md:w-[34%] lg:w-[40%] xl:w-[44%] 2xl:w-[46%] 3xl:w-[44%]">
                <nuxt-img format="webp" loading="lazy" alt="UPS" width="360" height="730"
                  src="/images/iphone-12-promax.png" class="w-full h-full object-contain animate-ups__item" />
              </div>
            </div>
          </div>

          <div class="hidden xl:block lg:col-span-1 lg:order-2">
          </div>

          <div
            class="col-span-6 order-1 lg:order-3 h-full pb-8 lg:pb-[44px] 2xl:pb-[72px] 3xl:pb-[100px] pt-8 md:pb-0 lg:pt-[80px] 2xl:pt-[100px] 3xl:pt-[150px]">
            <h3
              class="block lg:hidden w-full mb-[20px] md:mb-[40px] animate-ups__item bg-[linear-gradient(100deg,rgba(255,255,255,0.47)_-0.85%,rgba(255,255,255,0.79)_49.77%,rgba(255,255,255,0)_101.25%)] bg-clip-text text-transparent font-BG text-[28px] xl:text-[26px] 2xl:text-[30px] font-bold leading-[1.3] md:leading-normal">
              <span class="text-[#02E56A]">UPS</span>
              cung cấp cho bạn các dịch vụ và đội ngũ tốt nhất, hiện đại nhất
              thị trường
            </h3>

            <p class="animate-ups__item text-base xl:text-base 3xl:text-xl text-[#EEEEEE] font-normal">
              Với phương châm gần gũi và thân thuộc với khách hàng. UPS tự tin
              trở thành người bạn, người trợ thủ đáng tin cậy, luôn sẵn lòng hỗ
              trợ và đồng hành cùng nhà đầu tư trong mọi bước đi.
            </p>

            <div class="grid grid-cols-2 mt-4 md:mt-5 lg:mt-8 xl:mt-12 3xl:mt-16">
              <div class="animate-ups__item pr-5 md:pr-[40px] xl:pr-[60px]">
                <h4
                  class="text-[30px] md:text-[40px] xl:text-[52px] 2xl:text-[60px] 3xl:text-[80px] font-bold leading-normal text-[#02E56A] hover:text-shadow-custom"
                  id="monitor">
                  {{ count }}%
                </h4>
                <p class="text-base xl:text-base 3xl:text-xl text-[#EEEEEE] font-normal">
                  Nhà đầu tư trẻ bước đầu loay hoay trong việc lựa chọn sàn giao
                  dịch đầu tư
                </p>
              </div>
              <div class="animate-ups__item pl-5 md:pl-[40px] xl:pl-[60px] border-l-[2px] border-[#02E56A1a]">
                <h4
                  class="text-[30px] md:text-[40px] xl:text-[52px] 2xl:text-[60px] 3xl:text-[80px] font-bold leading-normal text-[#02E56A] hover:text-shadow-custom">
                  {{ count2 }}%
                </h4>
                <p class="text-base xl:text-base 3xl:text-xl text-[#EEEEEE] font-normal">
                  Nhà đầu tư trẻ cần trau dồi thêm kiến thức, kỹ năng về chứng
                  khoán để tránh rủi ro thất bại
                </p>
              </div>
            </div>

            <div class="mt-4 md:mt-0 lg:mt-16 xl:mt-20 3xl:mt-32">
              <div class="animate-ups__item flex gap-4 items-center">
                <!-- <p class="text-xs xl:text-base 3xl:text-xl text-[#EEEEEE] font-normal">Tải ứng dụng</p> -->
              </div>

              <div class="mt-5 flex gap-4">
                <!-- <nuxt-link to="/" target="_blank"
									class="animate-ups__item flex-1 md:flex-none p-[8px] inline-flex gap-2 items-center rounded-[12px] bg-[#111111]">
									<div class="relative w-8 h-8">
										<nuxt-img format="webp" loading="lazy" alt="Google Play" width="32" height="32"
											src="/icons/chplay-icon.svg" class="w-full h-full" />
									</div>

									<div class="pr-0 xl:pr-5">
										<p class="text-[10px] md:text-xs uppercase font-normal text-white opacity-55">
											Get it on
										</p>
										<p class="text-xs md:text-sm 3xl:text-lg font-semibold text-white">Google Play
										</p>
									</div>
								</nuxt-link>

								<nuxt-link to="/" target="_blank"
									class="animate-ups__item flex-1 md:flex-none p-[8px] inline-flex gap-2 items-center rounded-[12px] bg-[#111111]">
									<div class="relative w-8 h-8">
										<nuxt-img format="webp" loading="lazy" alt="Google Play" width="32" height="32"
											src="/icons/app-store-icon.svg" class="w-full h-full" />
									</div>

									<div class="pr-0 xl:pr-5">
										<p class="text-[10px] md:text-xs uppercase font-normal text-white opacity-55">
											Download on the
										</p>
										<p class="text-xs md:text-sm 3xl:text-lg font-semibold text-white">App Store</p>
									</div>
								</nuxt-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";

const finishNumber = 60;
const finishNumber2 = 70;
export default defineComponent({
  name: "ups-service",
  components: {},
  setup(props, ctx) {
    const countSpeed = 20;
    const count = ref(0);
    const count2 = ref(0)
    onMounted(() => {
      for (let i = 0; i <= finishNumber; i++) {
        let timelag = i * countSpeed;

        setTimeout(() => {
          count.value = i;
        }, timelag);
      }
      for (let i = 0; i <= finishNumber2; i++) {
        let timelag = i * countSpeed;

        setTimeout(() => {
          count2.value = i;
        }, timelag);
      }
    });
    return {
      count,
      count2
    };
  },
});
</script>

<style scoped>
.bg-custom {
  background: linear-gradient(86deg,
      rgba(21, 23, 30, 0.9) -5.13%,
      rgba(18, 89, 51, 0.9) 84.17%),
    url("/images/bg-home-1ed1wdw.png") lightgray 0px -3.557px / 100% 122.075% no-repeat;
  background-position: center;
}
</style>
